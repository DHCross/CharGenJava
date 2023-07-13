// Transcrypt'ed from Python, 2023-07-13 09:01:38
var random = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as __module_random__ from './random.js';
__nest__ (random, '', __module_random__);
var __name__ = '__main__';
export var races = dict ({'Dwarf': dict ({'base_die_ranks': dict ({'Fortitude': 'd4', 'Endurance': 'd4', 'Prowess': 'd6', 'Melee': 'd6'}), 'advantages': ['Night Vision', 'Strong-willed', 'Sense of Direction']}), 'Elf': dict ({'base_die_ranks': dict ({'Competence': 'd6', 'Wizardry': '+1', 'Prowess': 'd4', 'Agility': 'd4', 'Reaction': '+1'}), 'advantages': ['Night Vision', 'Gift of Magic', 'Magic Resistance (+1)']}), 'Gnome': dict ({'base_die_ranks': dict ({'Competence': 'd6', 'Adroitness': 'd6', 'Perception': 'd4', 'Perspicacity': '+1'}), 'advantages': ['Eidetic Memory', 'Low-Light Vision', 'Observant'], 'flaw': 'Restriction: small weapons only'}), 'Half-Elf': dict ({'base_die_ranks': dict ({'Competence': 'd6', 'Agility': 'd4', 'Reaction': '+1', 'Endurance': 'd4', 'Willpower': 'd4'}), 'advantages': ['Heightened Senses', 'Low-Light Vision', 'Magic Resistance (+1)']}), 'Half-Orc': dict ({'base_die_ranks': dict ({'Fortitude': 'd8', 'Endurance': 'd6', 'Strength': 'd8', 'Ferocity': '+1'}), 'advantages': ['Low-light Vision', 'Intimidation', 'Menacing'], 'flaw': 'Ugliness'}), 'Human': dict ({'base_die_ranks': dict ({'Competence': 'd6', 'Threat': '+1', 'Prowess': 'd4', 'Melee': 'd4', 'Willpower': 'd6'}), 'advantages': ['Fortunate', 'Survival']})});
export var classes = dict ({'Adept (Wizardry)': dict ({'base_die_ranks': dict ({'Competence': 'd6', 'Expertise': 'd6', 'Wizardry': '+1', 'Perception': 'd4', 'Perspicacity': '+1'}), 'advantages': ['Arcanum', 'Gift of Magic', 'Literacy', 'Scholar'], 'feats': ['Guile', 'Lore', 'Magical Artifice', 'Quick-witted']}), 'Rogue (Skullduggery)': dict ({'base_die_ranks': dict ({'Competence': 'd4', 'Skulduggery': '+1', 'Perception': 'd4', 'Prowess': 'd8', 'Agility': 'd8'}), 'advantages': ['Expeditious', 'Fortunate', 'Streetwise', 'Underworld Contacts'], 'feats': ['Backstab', 'Evasion', 'Roguish Charm', 'Stealth']}), 'Theurgist (Theurgy)': dict ({'base_die_ranks': dict ({'Competence': 'd6', 'Theurgy': '+1', 'Fortitude': 'd4', 'Willpower': 'd4'}), 'advantages': ['Gift of Magic', 'Magic Defense', 'Religion', 'Strong-Willed'], 'feats': ['Divine Healing', 'Path Mastery (Druidry or Hereticism)', 'Spiritual Smite', 'Supernatural Intervention']}), 'Warrior (Warcraft)': dict ({'base_die_ranks': dict ({'Prowess': 'd8', 'Melee': 'd6', 'Threat': '+1', 'Fortitude': 'd6'}), 'advantages': ['Commanding', 'Intimidation', 'Magic Resistance (+1)', 'Tactician'], 'feats': ['Battle Savvy', 'Maneuvers', 'Stunning Reversal', 'Sunder Foe']}), 'Assassin (Skullduggery)': dict ({'base_die_ranks': dict ({'Competence': 'd4', 'Adroitness': 'd6', 'Perception': 'd4', 'Agility': 'd4', 'Vitality': 'd6'}), 'focuses': dict ({'Finesse +1 or Ranged Finesse +1': 'd4'}), 'advantages': ['Expeditious', 'Heightened Senses (hearing)', 'Observant', 'Read Emotions'], 'feats': ['Death Strike', 'Lethal Exploit', 'Ranged Ambush', 'Shadow Walk']})});
export var core_abilities_specialties = dict ({'Competence': ['Adroitness', 'Expertise', 'Perception'], 'Prowess': ['Agility', 'Melee', 'Ranged'], 'Fortitude': ['Endurance', 'Strength', 'Willpower']});
export var specialties_focus_areas = dict ({'Adroitness': ['Skulduggery', 'Cleverness'], 'Expertise': ['Wizardry', 'Theurgy'], 'Perception': ['Alertness', 'Perspicacity'], 'Agility': ['Speed', 'Reaction'], 'Melee': ['Threat', 'Finesse'], 'Ranged': ['Ranged Threat', 'Ranged Finesse'], 'Endurance': ['Vitality', 'Resilience'], 'Strength': ['Ferocity', 'Might'], 'Willpower': ['Courage', 'Resistance']});
export var calculate_max_value = function (die_rank) {
	if (die_rank == 'd4') {
		return 4;
	}
	else if (die_rank == 'd6') {
		return 6;
	}
	else if (die_rank == 'd8') {
		return 8;
	}
	else if (die_rank == 'd10') {
		return 10;
	}
	else if (die_rank == 'd12') {
		return 12;
	}
	else if (die_rank [0] == '+') {
		return int (die_rank.__getslice__ (1, null, 1));
	}
	else {
		return 0;
	}
};
export var die_rank_costs = dict ({'d4': dict ({'basic': 4, 'specialization': 4}), 'd6': dict ({'basic': 6, 'specialization': 6}), 'd8': dict ({'basic': 8, 'specialization': 8}), 'd10': dict ({'basic': 10, 'specialization': 10}), 'd12': dict ({'basic': 12, 'specialization': 12})});
export var next_die_rank_map = dict ({'d0': 'd4', 'd4': 'd6', 'd6': 'd8', 'd8': 'd10', 'd10': 'd12'});
export var next_die_rank = function (die_rank) {
	return next_die_rank_map.py_get (die_rank, 'd12');
};
export var allocate_points_to_ability = function (character, ability, cps) {
	var current_rank = character ['base_die_ranks'].py_get (ability, 'd0');
	var next_rank = next_die_rank (current_rank);
	var cost = die_rank_costs.py_get (next_rank, dict ({})).py_get ('basic');
	while (cps > 0 && cost !== null) {
		if (next_rank == 'd12') {
			break;
		}
		if (cps >= cost) {
			character ['base_die_ranks'] [ability] = next_rank;
			cps -= cost;
		}
		else {
			break;
		}
		var current_rank = next_rank;
		var next_rank = next_die_rank (current_rank);
		var cost = die_rank_costs.py_get (next_rank, dict ({})).py_get ('basic');
	}
	return cps;
};
export var allocate_points_to_specialization = function (character, specialization, cps) {
	var current_rank = character ['base_die_ranks'].py_get (specialization, 'd0');
	var next_rank = next_die_rank (current_rank);
	var cost = die_rank_costs.py_get (next_rank, dict ({})).py_get ('specialization');
	while (cps > 0 && cost !== null) {
		if (next_rank == 'd12') {
			break;
		}
		if (cps >= cost) {
			character ['base_die_ranks'] [specialization] = next_rank;
			cps -= cost;
		}
		else {
			break;
		}
		var current_rank = next_rank;
		var next_rank = next_die_rank (current_rank);
		var cost = die_rank_costs.py_get (next_rank, dict ({})).py_get ('specialization');
	}
	return cps;
};
export var allocate_points_to_focus_area = function (character, focus_area, cps) {
	var current_bonus = character ['focus_areas'].py_get (focus_area, 0);
	while (cps > 0 && current_bonus < 5) {
		character ['focus_areas'] [focus_area] = current_bonus + 1;
		cps -= 4;
		current_bonus++;
	}
	return cps;
};
export var allocate_character_points = function (character, cps) {
	var abilities = ['Competence', 'Prowess', 'Fortitude'];
	var specializations = ['Adroitness', 'Expertise', 'Perception', 'Agility', 'Melee', 'Ranged', 'Endurance', 'Strength', 'Willpower'];
	var focus_areas = ['Skulduggery', 'Cleverness', 'Wizardry', 'Theurgy', 'Alertness', 'Perspicacity', 'Speed', 'Reaction', 'Threat', 'Finesse', 'Ranged Threat', 'Ranged Finesse', 'Vitality', 'Resilience', 'Ferocity', 'Might', 'Courage', 'Resistance'];
	for (var ability of abilities) {
		var cps = allocate_points_to_ability (character, ability, cps);
	}
	for (var specialization of specializations) {
		var cps = allocate_points_to_specialization (character, specialization, cps);
	}
	for (var focus_area of focus_areas) {
		var cps = allocate_points_to_focus_area (character, focus_area, cps);
	}
	return character;
};
export var allocate_points_for_level = function (character, level) {
	var cps_for_level = dict ({1: 10, 2: 150, 3: 250, 4: 350, 5: 450});
	var cps = cps_for_level.py_get (level, 10);
	var character = allocate_character_points (character, cps);
	return character;
};
export var generate_character = function (level) {
	if (typeof level == 'undefined' || (level != null && level.hasOwnProperty ("__kwargtrans__"))) {;
		var level = 1;
	};
	var race_options = list (races.py_keys ());
	var race = random.choice (race_options);
	var class_options = list (classes.py_keys ());
	var class_name = random.choice (class_options);
	var base_die_ranks = races [race] ['base_die_ranks'].copy ();
	base_die_ranks.py_update (classes [class_name].py_get ('base_die_ranks', dict ({})));
	for (var attribute of ['Competence', 'Prowess', 'Fortitude']) {
		if (!__in__ (attribute, base_die_ranks) || calculate_max_value (base_die_ranks [attribute]) < 4) {
			base_die_ranks [attribute] = 'd4';
		}
	}
	var focus_areas = (function () {
		var __accu0__ = [];
		for (var ability of core_abilities_specialties.py_values ()) {
			for (var focus_area of ability) {
				__accu0__.append ([focus_area, 0]);
			}
		}
		return dict (__accu0__);
	}) ();
	focus_areas.py_update ((function () {
		var __accu0__ = [];
		for (var specialty of specialties_focus_areas.py_values ()) {
			for (var focus_area of specialty) {
				__accu0__.append ([focus_area, 0]);
			}
		}
		return dict (__accu0__);
	}) ());
	var character = dict ({'race': race, 'class_name': class_name, 'base_die_ranks': base_die_ranks, 'advantages': races [race].py_get ('advantages', []) + classes [class_name].py_get ('advantages', []), 'feats': classes [class_name].py_get ('feats', []), 'focus_areas': focus_areas});
	var character = allocate_character_points (character, 10);
	var character = allocate_points_for_level (character, level);
	var active_defense_pool = (calculate_max_value (character ['base_die_ranks'].py_get ('Prowess', 'd0')) + calculate_max_value (character ['base_die_ranks'].py_get ('Agility', 'd0'))) + calculate_max_value (character ['base_die_ranks'].py_get ('Melee', 'd0'));
	var passive_defense_pool = (calculate_max_value (character ['base_die_ranks'].py_get ('Fortitude', 'd0')) + calculate_max_value (character ['base_die_ranks'].py_get ('Endurance', 'd0'))) + calculate_max_value (character ['base_die_ranks'].py_get ('Strength', 'd0'));
	var spirit_points = calculate_max_value (character ['base_die_ranks'].py_get ('Competence', 'd0')) + calculate_max_value (character ['base_die_ranks'].py_get ('Willpower', 'd0'));
	var character_info = 'Race: {}\n'.format (character ['race']);
	character_info += 'Class: {}\n'.format (character ['class_name']);
	for (var ability of ['Competence', 'Prowess', 'Fortitude']) {
		character_info += '• {} {}'.format (ability, character ['base_die_ranks'].py_get (ability, 'd0'));
		if (__in__ (ability, core_abilities_specialties)) {
			var specialties = core_abilities_specialties [ability];
			if (specialties) {
				character_info += ' → ';
				for (var [i, specialty] of enumerate (specialties)) {
					character_info += '{} {}'.format (specialty, character ['base_die_ranks'].py_get (specialty, 'd0'));
					var focus_areas = specialties_focus_areas.py_get (specialty);
					if (focus_areas) {
						var filtered_focus_areas = (function () {
							var __accu0__ = [];
							for (var focus_area of focus_areas) {
								if (character ['focus_areas'].py_get (focus_area, 0) > 0) {
									__accu0__.append (focus_area);
								}
							}
							return __accu0__;
						}) ();
						if (filtered_focus_areas) {
							var filtered_focus_areas_info = (function () {
								var __accu0__ = [];
								for (var focus_area of filtered_focus_areas) {
									__accu0__.append ('{} (+{})'.format (focus_area, character ['focus_areas'].py_get (focus_area, 0)));
								}
								return __accu0__;
							}) ();
							character_info += ' → ' + ', '.join (filtered_focus_areas_info);
						}
					}
					if (i < len (specialties) - 1) {
						character_info += ', ';
					}
				}
				character_info += '. ';
			}
		}
		else {
			character_info += '.\n';
		}
	}
	character_info += 'Advantages:\n';
	for (var advantage of character ['advantages']) {
		character_info += '• {}\n'.format (advantage);
	}
	character_info += 'Feats:\n';
	for (var feat of character ['feats']) {
		character_info += '• {}\n'.format (feat);
	}
	character_info += 'Active Defense Pool: {}\n'.format (active_defense_pool);
	character_info += 'Passive Defense Pool: {}\n'.format (passive_defense_pool);
	character_info += 'Spirit Points: {}\n'.format (spirit_points);
	return character_info;
};
print (generate_character (5));
export var generate_character_choice = function () {
	var race_options = list (races.py_keys ());
	print ('Select a race:');
	for (var [i, race] of enumerate (race_options)) {
		print ('{}. {}'.format (i + 1, race));
	}
	var race_choice = int (input ('Enter the number of the race: '));
	var selected_race = race_options [race_choice - 1];
	var class_options = list (classes.py_keys ());
	print ('\nSelect a class:');
	for (var [i, class_name] of enumerate (class_options)) {
		print ('{}. {}'.format (i + 1, class_name));
	}
	var class_choice = int (input ('Enter the number of the class: '));
	var selected_class = class_options [class_choice - 1];
	var level = int (input ('\nEnter the character level: '));
	var character = generate_character (level);
	print ('\nGenerating a level {} {} {} character...\n'.format (level, selected_race, selected_class));
	print (character);
};
generate_character_choice ();

//# sourceMappingURL=EldritchCharGen.map