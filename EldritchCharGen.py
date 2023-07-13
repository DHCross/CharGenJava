
import random
# Define the races
races = {
    "Dwarf": {
        "base_die_ranks": {"Fortitude": "d4", "Endurance": "d4", "Prowess": "d6", "Melee": "d6"},
        "advantages": ["Night Vision", "Strong-willed", "Sense of Direction"]
    },
    "Elf": {
        "base_die_ranks": {"Competence": "d6", "Wizardry": "+1", "Prowess": "d4", "Agility": "d4", "Reaction": "+1"},
        "advantages": ["Night Vision", "Gift of Magic", "Magic Resistance (+1)"]
    },
    "Gnome": {
        "base_die_ranks": {"Competence": "d6", "Adroitness": "d6", "Perception": "d4", "Perspicacity": "+1"},
        "advantages": ["Eidetic Memory", "Low-Light Vision", "Observant"],
        "flaw": "Restriction: small weapons only"
    },
    "Half-Elf": {
        "base_die_ranks": {"Competence": "d6", "Agility": "d4", "Reaction": "+1", "Endurance": "d4", "Willpower": "d4"},
        "advantages": ["Heightened Senses", "Low-Light Vision", "Magic Resistance (+1)"]
    },
    "Half-Orc": {
        "base_die_ranks": {"Fortitude": "d8", "Endurance": "d6", "Strength": "d8", "Ferocity": "+1"},
        "advantages": ["Low-light Vision", "Intimidation", "Menacing"],
        "flaw": "Ugliness"
    },
    "Human": {
        "base_die_ranks": {"Competence": "d6", "Threat": "+1", "Prowess": "d4", "Melee": "d4", "Willpower": "d6"},
        "advantages": ["Fortunate", "Survival"]
    }
}
# Define the classes
classes = {
    "Adept (Wizardry)": {
        "base_die_ranks": {"Competence": "d6", "Expertise": "d6", "Wizardry": "+1", "Perception": "d4", "Perspicacity": "+1"},
        "advantages": ["Arcanum", "Gift of Magic", "Literacy", "Scholar"],
        "feats": ["Guile", "Lore", "Magical Artifice", "Quick-witted"]
    },
    "Rogue (Skullduggery)": {
        "base_die_ranks": {"Competence": "d4", "Skulduggery": "+1", "Perception": "d4", "Prowess": "d8", "Agility": "d8"},
        "advantages": ["Expeditious", "Fortunate", "Streetwise", "Underworld Contacts"],
        "feats": ["Backstab", "Evasion", "Roguish Charm", "Stealth"]
    },
    "Theurgist (Theurgy)": {
        "base_die_ranks": {"Competence": "d6", "Theurgy": "+1", "Fortitude": "d4", "Willpower": "d4"},
        "advantages": ["Gift of Magic", "Magic Defense", "Religion", "Strong-Willed"],
        "feats": ["Divine Healing", "Path Mastery (Druidry or Hereticism)", "Spiritual Smite", "Supernatural Intervention"]
    },
    "Warrior (Warcraft)": {
        "base_die_ranks": {"Prowess": "d8", "Melee": "d6", "Threat": "+1", "Fortitude": "d6"},
        "advantages": ["Commanding", "Intimidation", "Magic Resistance (+1)", "Tactician"],
        "feats": ["Battle Savvy", "Maneuvers", "Stunning Reversal", "Sunder Foe"]
    },
    "Assassin (Skullduggery)": {
        "base_die_ranks": {"Competence": "d4", "Adroitness": "d6", "Perception": "d4", "Agility": "d4", "Vitality": "d6"},
        "focuses": {"Finesse +1 or Ranged Finesse +1": "d4"},
        "advantages": ["Expeditious", "Heightened Senses (hearing)", "Observant", "Read Emotions"],
        "feats": ["Death Strike", "Lethal Exploit", "Ranged Ambush", "Shadow Walk"]
    }
}
# Define the core abilities and their associated focus areas
core_abilities_specialties = {
    "Competence": ["Adroitness", "Expertise", "Perception"],
    "Prowess": ["Agility", "Melee", "Ranged"],
    "Fortitude": ["Endurance", "Strength", "Willpower"]
}
# Define the specialties and their associated focus areas
specialties_focus_areas = {
    "Adroitness": ["Skulduggery", "Cleverness"],
    "Expertise": ["Wizardry", "Theurgy"],
    "Perception": ["Alertness", "Perspicacity"],
    "Agility": ["Speed", "Reaction"],
    "Melee": ["Threat", "Finesse"],
    "Ranged": ["Ranged Threat", "Ranged Finesse"],
    "Endurance": ["Vitality", "Resilience"],
    "Strength": ["Ferocity", "Might"],
    "Willpower": ["Courage", "Resistance"]
}
def calculate_max_value(die_rank):
    if die_rank == "d4":
        return 4
    elif die_rank == "d6":
        return 6
    elif die_rank == "d8":
        return 8
    elif die_rank == "d10":
        return 10
    elif die_rank == "d12":
        return 12
    elif die_rank[0] == "+":  # Handle the +1 in the die ranks
        return int(die_rank[1:])
    else:
        return 0  # Return 0 if the die rank is not recognized
# Define the costs for increasing die ranks
die_rank_costs = {
    "d4": {"basic": 4, "specialization": 4},
    "d6": {"basic": 6, "specialization": 6},
    "d8": {"basic": 8, "specialization": 8},
    "d10": {"basic": 10, "specialization": 10},
    "d12": {"basic": 12, "specialization": 12}
}
# Define the next die rank for each die rank
next_die_rank_map = {"d0": "d4", "d4": "d6", "d6": "d8", "d8": "d10", "d10": "d12"}
def next_die_rank(die_rank):
    return next_die_rank_map.get(die_rank, "d12")  # Default to 'd12' if the die rank is not recognized
def allocate_points_to_ability(character, ability, cps):
    current_rank = character['base_die_ranks'].get(ability, "d0")
    next_rank = next_die_rank(current_rank)
    cost = die_rank_costs.get(next_rank, {}).get("basic")
    while cps > 0 and cost is not None:
        if next_rank == "d12":
            # Don't try to upgrade a 'd12' die rank
            break
        if cps >= cost:
            character['base_die_ranks'][ability] = next_rank
            cps -= cost
        else:
            break
        current_rank = next_rank
        next_rank = next_die_rank(current_rank)
        cost = die_rank_costs.get(next_rank, {}).get("basic")
    return cps
def allocate_points_to_specialization(character, specialization, cps):
    current_rank = character['base_die_ranks'].get(specialization, "d0")
    next_rank = next_die_rank(current_rank)
    cost = die_rank_costs.get(next_rank, {}).get("specialization")
    while cps > 0 and cost is not None:
        if next_rank == "d12":
            # Don't try to upgrade a 'd12' die rank
            break
        if cps >= cost:
            character['base_die_ranks'][specialization] = next_rank
            cps -= cost
        else:
            break
        current_rank = next_rank
        next_rank = next_die_rank(current_rank)
        cost = die_rank_costs.get(next_rank, {}).get("specialization")
    return cps
def allocate_points_to_focus_area(character, focus_area, cps):
    current_bonus = character['focus_areas'].get(focus_area, 0)
    while cps > 0 and current_bonus < 5:
        character['focus_areas'][focus_area] = current_bonus + 1
        cps -= 4
        current_bonus += 1
    return cps
def allocate_character_points(character, cps):
    abilities = ["Competence", "Prowess", "Fortitude"]
    specializations = ["Adroitness", "Expertise", "Perception", "Agility", "Melee", "Ranged", "Endurance", "Strength", "Willpower"]
    focus_areas = ["Skulduggery", "Cleverness", "Wizardry", "Theurgy", "Alertness", "Perspicacity", "Speed", "Reaction", "Threat", "Finesse", "Ranged Threat", "Ranged Finesse", "Vitality", "Resilience", "Ferocity", "Might", "Courage", "Resistance"]
    # Allocate points to abilities, specialties, and focus areas
    for ability in abilities:
        cps = allocate_points_to_ability(character, ability, cps)
    for specialization in specializations:
        cps = allocate_points_to_specialization(character, specialization, cps)
    for focus_area in focus_areas:
        cps = allocate_points_to_focus_area(character, focus_area, cps)
    return character
def allocate_points_for_level(character, level):
    cps_for_level = {
        1: 10,
        2: 150,
        3: 250,
        4: 350,
        5: 450
    }
    cps = cps_for_level.get(level, 10)  # Default to 10 if the level is not recognized
    character = allocate_character_points(character, cps)
    return character
def generate_character(level=1):
    # Randomly select race
    race_options = list(races.keys())
    race = random.choice(race_options)
    # Randomly select class
    class_options = list(classes.keys())
    class_name = random.choice(class_options)
    # Base die ranks
    base_die_ranks = races[race]["base_die_ranks"].copy()  # Start with the base die ranks for the race
    base_die_ranks.update(classes[class_name].get("base_die_ranks", {}))  # Update with the base die ranks for the class
    # Ensure that Competence, Prowess, and Fortitude are at least d4
    for attribute in ["Competence", "Prowess", "Fortitude"]:
        if attribute not in base_die_ranks or calculate_max_value(base_die_ranks[attribute]) < 4:
            base_die_ranks[attribute] = "d4"
    # Initialize focus areas with zero bonus
    focus_areas = {focus_area: 0 for ability in core_abilities_specialties.values() for focus_area in ability}
    focus_areas.update({focus_area: 0 for specialty in specialties_focus_areas.values() for focus_area in specialty})
    character = {
        "race": race,
        "class_name": class_name,
        "base_die_ranks": base_die_ranks,
        "advantages": races[race].get("advantages", []) + classes[class_name].get("advantages", []),
        "feats": classes[class_name].get("feats", []),
        "focus_areas": focus_areas
    }
    # Allocate 10 character points to weakest abilities and specialties
    character = allocate_character_points(character, 10)
    # Allocate additional points based on the chosen level
    character = allocate_points_for_level(character, level)
    # Calculate the Defense Pools
    active_defense_pool = calculate_max_value(character['base_die_ranks'].get('Prowess', "d0")) + \
                          calculate_max_value(character['base_die_ranks'].get('Agility', "d0")) + \
                          calculate_max_value(character['base_die_ranks'].get('Melee', "d0"))
    passive_defense_pool = calculate_max_value(character['base_die_ranks'].get('Fortitude', "d0")) + \
                           calculate_max_value(character['base_die_ranks'].get('Endurance', "d0")) + \
                           calculate_max_value(character['base_die_ranks'].get('Strength', "d0"))
    spirit_points = calculate_max_value(character['base_die_ranks'].get('Competence', "d0")) + \
                    calculate_max_value(character['base_die_ranks'].get('Willpower', "d0"))
    character_info = f"Race: {character['race']}\n"
    character_info += f"Class: {character['class_name']}\n"
    for ability in ["Competence", "Prowess", "Fortitude"]:
        character_info += f"• {ability} {character['base_die_ranks'].get(ability, 'd0')}"
        if ability in core_abilities_specialties:
            specialties = core_abilities_specialties[ability]
            if specialties:
                character_info += " → "
                for i, specialty in enumerate(specialties):
                    character_info += f"{specialty} {character['base_die_ranks'].get(specialty, 'd0')}"
                    focus_areas = specialties_focus_areas.get(specialty)
                    if focus_areas:
                        filtered_focus_areas = [
                            focus_area for focus_area in focus_areas if character['focus_areas'].get(focus_area, 0) > 0
                        ]
                        if filtered_focus_areas:
                            filtered_focus_areas_info = [
                                f"{focus_area} (+{character['focus_areas'].get(focus_area, 0)})"
                                for focus_area in filtered_focus_areas
                            ]
                            character_info += " → " + ", ".join(filtered_focus_areas_info)
                    if i < len(specialties) - 1:
                        character_info += ", "
                character_info += ". "
        else:
            character_info += ".\n"
    character_info += "Advantages:\n"
    for advantage in character['advantages']:
        character_info += f"• {advantage}\n"
    character_info += "Feats:\n"
    for feat in character['feats']:
        character_info += f"• {feat}\n"
    character_info += f"Active Defense Pool: {active_defense_pool}\n"
    character_info += f"Passive Defense Pool: {passive_defense_pool}\n"
    character_info += f"Spirit Points: {spirit_points}\n"
    return character_info
# Generate a level 3 character
print(generate_character(5))






def generate_character_choice():
    # Select race
    race_options = list(races.keys())
    print("Select a race:")
    for i, race in enumerate(race_options):
        print(f"{i + 1}. {race}")
    race_choice = int(input("Enter the number of the race: "))
    selected_race = race_options[race_choice - 1]

    # Select class
    class_options = list(classes.keys())
    print("\nSelect a class:")
    for i, class_name in enumerate(class_options):
        print(f"{i + 1}. {class_name}")
    class_choice = int(input("Enter the number of the class: "))
    selected_class = class_options[class_choice - 1]

    # Select level
    level = int(input("\nEnter the character level: "))

    # Generate the character
    character = generate_character(level)
    print(f"\nGenerating a level {level} {selected_race} {selected_class} character...\n")
    print(character)

# Generate a character based on user choice
generate_character_choice()

