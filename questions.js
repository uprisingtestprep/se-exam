window.EXAM_QUESTIONS = [
  {
    "id": 5101,
    "type": "point_and_click",
    "question": "Click the location on the column elevation where the governing strong-axis wind moment is applied to this braced frame column.",
    "image_description": "Vertical column elevation, base at bottom, top beam-column joint at top, kicker brace shown branching off to the side at mid-height. Hotzone A at the top beam-column joint (x=0.5,y=0.15); hotzone B at the column base plate (x=0.5,y=0.88); hotzone C at column mid-height on the column centerline, away from the kicker brace (x=0.5,y=0.5).",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.5,
        "y": 0.15,
        "w": 0.12,
        "h": 0.06
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.88,
        "w": 0.12,
        "h": 0.06
      },
      {
        "id": "z3",
        "x": 0.5,
        "y": 0.5,
        "w": 0.12,
        "h": 0.06
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the top beam-column joint: this is where the wind moment from the connecting beam is delivered into the column, so Mrx = 140 kip-ft acts there rather than at the base or mid-height. The base is treated as pinned for this braced frame column, and the kicker brace at mid-height only restrains weak-axis translation, it does not introduce strong-axis moment. AISC Chapter H requires the moment to be taken at the section where it is actually applied when combining it with the axial force.",
    "image": "question_images/q_5101.png",
    "domain": "steel_structures",
    "scenario_id": 51,
    "scenario_title": "Braced Frame Beam-Column Interaction Check",
    "scenario_text": "A W12x65 column (A992, Fy = 50 ksi, rx = 5.28 in, ry = 3.02 in) in a braced frame has a 14 ft floor-to-floor unbraced length for strong-axis buckling. A diagonal kicker brace attaches to the weak-axis flange at column mid-height, providing a weak-axis brace point so KL/ry uses a 7 ft unbraced length. Kx = Ky = 1.0. Factored axial load Pr = 210 kips, phi Pc = 640 kips (governing axis). Strong-axis factored moment Mrx = 140 kip-ft applied at the top beam-column joint from wind, phi Mcx = 310 kip-ft. No weak-axis moment."
  },
  {
    "id": 5102,
    "type": "point_and_click",
    "question": "Click the location of the weak-axis brace point that shortens the KL/ry unbraced length to 7 ft.",
    "image_description": "Same column elevation as the prior item. Hotzone A at the kicker brace attachment point on the side of the column at mid-height (x=0.75,y=0.5); hotzone B at the top beam-column joint (x=0.5,y=0.15); hotzone C at the column base (x=0.5,y=0.88).",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.75,
        "y": 0.5,
        "w": 0.1,
        "h": 0.06
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.15,
        "w": 0.12,
        "h": 0.06
      },
      {
        "id": "z3",
        "x": 0.5,
        "y": 0.88,
        "w": 0.12,
        "h": 0.06
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the kicker brace attachment at column mid-height: it restrains the weak-axis flange, splitting the 14 ft floor height into two 7 ft segments for ry buckling only. The top joint and base do not create a new weak-axis brace point by themselves since they already bound the full floor height. Recognizing that a member can have different unbraced lengths for its two axes is a required judgment call under AISC Chapter E.",
    "image": "question_images/q_5102.png",
    "domain": "steel_structures",
    "scenario_id": 51,
    "scenario_title": "Braced Frame Beam-Column Interaction Check",
    "scenario_text": "A W12x65 column (A992, Fy = 50 ksi, rx = 5.28 in, ry = 3.02 in) in a braced frame has a 14 ft floor-to-floor unbraced length for strong-axis buckling. A diagonal kicker brace attaches to the weak-axis flange at column mid-height, providing a weak-axis brace point so KL/ry uses a 7 ft unbraced length. Kx = Ky = 1.0. Factored axial load Pr = 210 kips, phi Pc = 640 kips (governing axis). Strong-axis factored moment Mrx = 140 kip-ft applied at the top beam-column joint from wind, phi Mcx = 310 kip-ft. No weak-axis moment."
  },
  {
    "id": 5103,
    "type": "point_and_click",
    "question": "Given KL/rx = (1.0)(14)(12)/5.28 = 31.8 and KL/ry = (1.0)(7)(12)/3.02 = 27.8, click the axis line on the cross-section that governs this column's compression design.",
    "image_description": "A small inset W-shape cross-section with a horizontal x-x axis line through the centroid, a vertical y-y axis line through the centroid, and a diagonal 45-degree line as a distractor. Hotzone A on the horizontal x-x axis label, left side of section (x=0.3,y=0.5); hotzone B on the vertical y-y axis label, top of section (x=0.5,y=0.28); hotzone C on the diagonal distractor line, lower right (x=0.7,y=0.72).",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.3,
        "y": 0.5,
        "w": 0.14,
        "h": 0.06
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.28,
        "w": 0.08,
        "h": 0.14
      },
      {
        "id": "z3",
        "x": 0.7,
        "y": 0.72,
        "w": 0.12,
        "h": 0.1
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the x-x (strong) axis: KL/rx = 31.8 exceeds KL/ry = 27.8 even though the kicker brace shortened the weak-axis length, so strong-axis buckling controls this column's compressive strength. This is exactly the trap the theory chapter warns about, never assume the weak axis automatically governs, always calculate both slenderness ratios. There is no physical 45-degree buckling axis for a doubly symmetric W-shape, that line is a distractor only.",
    "image": "question_images/q_5103.png",
    "domain": "steel_structures",
    "scenario_id": 51,
    "scenario_title": "Braced Frame Beam-Column Interaction Check",
    "scenario_text": "A W12x65 column (A992, Fy = 50 ksi, rx = 5.28 in, ry = 3.02 in) in a braced frame has a 14 ft floor-to-floor unbraced length for strong-axis buckling. A diagonal kicker brace attaches to the weak-axis flange at column mid-height, providing a weak-axis brace point so KL/ry uses a 7 ft unbraced length. Kx = Ky = 1.0. Factored axial load Pr = 210 kips, phi Pc = 640 kips (governing axis). Strong-axis factored moment Mrx = 140 kip-ft applied at the top beam-column joint from wind, phi Mcx = 310 kip-ft. No weak-axis moment."
  },
  {
    "id": 5104,
    "type": "drag_and_drop_position",
    "question": "Drag each load description to the point on the column elevation where it is applied.",
    "image_description": "Column elevation as before. Drop zone A at the top of the column where the axial load enters (x=0.5,y=0.12); drop zone B at the top beam-column joint slightly offset (x=0.65,y=0.18); drop zone C at the kicker brace connection at mid-height (x=0.75,y=0.5).",
    "drag_items": [
      {
        "id": "d1",
        "label": "Factored axial load Pr = 210 kips"
      },
      {
        "id": "d2",
        "label": "Strong-axis wind moment Mrx = 140 kip-ft"
      },
      {
        "id": "d3",
        "label": "Kicker brace lateral reaction force"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.5,
        "y": 0.12,
        "w": 0.12,
        "h": 0.06
      },
      {
        "id": "z2",
        "x": 0.65,
        "y": 0.18,
        "w": 0.12,
        "h": 0.06
      },
      {
        "id": "z3",
        "x": 0.75,
        "y": 0.5,
        "w": 0.12,
        "h": 0.06
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct answer is Pr at the column top, Mrx at the top beam-column joint, and the kicker brace reaction at mid-height: each force enters the column at the physical location where that member frames in. Keeping load application points straight is what lets you correctly assign Pr and Mrx into the same Chapter H interaction check while treating the kicker brace purely as a weak-axis brace point, not a source of applied moment.",
    "image": "question_images/q_5104.png",
    "domain": "steel_structures",
    "scenario_id": 51,
    "scenario_title": "Braced Frame Beam-Column Interaction Check",
    "scenario_text": "A W12x65 column (A992, Fy = 50 ksi, rx = 5.28 in, ry = 3.02 in) in a braced frame has a 14 ft floor-to-floor unbraced length for strong-axis buckling. A diagonal kicker brace attaches to the weak-axis flange at column mid-height, providing a weak-axis brace point so KL/ry uses a 7 ft unbraced length. Kx = Ky = 1.0. Factored axial load Pr = 210 kips, phi Pc = 640 kips (governing axis). Strong-axis factored moment Mrx = 140 kip-ft applied at the top beam-column joint from wind, phi Mcx = 310 kip-ft. No weak-axis moment."
  },
  {
    "id": 5105,
    "type": "drag_and_drop_order",
    "question": "Arrange these steps in the correct order for checking this beam-column under AISC Chapter H.",
    "items": [
      {
        "id": "s1",
        "text": "Calculate Pr/Pc using the governing (strong) axis capacity"
      },
      {
        "id": "s2",
        "text": "Compare Pr/Pc to 0.2 to select equation H1-1a or H1-1b"
      },
      {
        "id": "s3",
        "text": "Calculate Mrx/Mcx"
      },
      {
        "id": "s4",
        "text": "Apply the selected interaction equation and compare the result to 1.0"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4"
    ],
    "explanation": "The correct answer is Pr/Pc first, then the 0.2 comparison, then the moment ratio, then the final interaction check: Pr/Pc = 210/640 = 0.328, which exceeds 0.2, so H1-1a applies. Using H1-1a, 0.328 + (8/9)(140/310) = 0.328 + 0.402 = 0.730, which is below 1.0 so the member passes. Skipping the 0.2 comparison and guessing which equation to use is the single most common Chapter H error on this exam.",
    "domain": "steel_structures",
    "scenario_id": 51,
    "scenario_title": "Braced Frame Beam-Column Interaction Check",
    "scenario_text": "A W12x65 column (A992, Fy = 50 ksi, rx = 5.28 in, ry = 3.02 in) in a braced frame has a 14 ft floor-to-floor unbraced length for strong-axis buckling. A diagonal kicker brace attaches to the weak-axis flange at column mid-height, providing a weak-axis brace point so KL/ry uses a 7 ft unbraced length. Kx = Ky = 1.0. Factored axial load Pr = 210 kips, phi Pc = 640 kips (governing axis). Strong-axis factored moment Mrx = 140 kip-ft applied at the top beam-column joint from wind, phi Mcx = 310 kip-ft. No weak-axis moment."
  },
  {
    "id": 5106,
    "type": "drag_and_drop_position",
    "question": "Drag each interaction equation term to its correct blank in the two exhibit equations, H1-1a shown above H1-1b.",
    "image_description": "Two equation boxes stacked vertically. Top box (H1-1a) has two blanks, left blank near x=0.3,y=0.3 and right blank near x=0.6,y=0.3. Bottom box (H1-1b) has two blanks, left blank near x=0.3,y=0.6 and right blank near x=0.6,y=0.6.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Pr/Pc"
      },
      {
        "id": "d2",
        "label": "(8/9) times (Mrx/Mcx + Mry/Mcy)"
      },
      {
        "id": "d3",
        "label": "Pr/(2Pc)"
      },
      {
        "id": "d4",
        "label": "Mrx/Mcx + Mry/Mcy (no 8/9 factor)"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.3,
        "y": 0.3,
        "w": 0.16,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.6,
        "y": 0.3,
        "w": 0.2,
        "h": 0.08
      },
      {
        "id": "z3",
        "x": 0.3,
        "y": 0.6,
        "w": 0.16,
        "h": 0.08
      },
      {
        "id": "z4",
        "x": 0.6,
        "y": 0.6,
        "w": 0.2,
        "h": 0.08
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3",
      "z4": "d4"
    },
    "explanation": "The correct answer is Pr/Pc and the (8/9) bending term in H1-1a, and Pr/(2Pc) and the plain bending sum in H1-1b: H1-1a applies above the Pr/Pc = 0.2 threshold and weights the axial term at full strength with an eight-ninths factor on bending, while H1-1b applies below that threshold and halves the axial term with no reduction on bending. Mixing up which term belongs to which equation produces a wrong interaction result even when every individual ratio was computed correctly.",
    "image": "question_images/q_5106.png",
    "domain": "steel_structures",
    "scenario_id": 51,
    "scenario_title": "Braced Frame Beam-Column Interaction Check",
    "scenario_text": "A W12x65 column (A992, Fy = 50 ksi, rx = 5.28 in, ry = 3.02 in) in a braced frame has a 14 ft floor-to-floor unbraced length for strong-axis buckling. A diagonal kicker brace attaches to the weak-axis flange at column mid-height, providing a weak-axis brace point so KL/ry uses a 7 ft unbraced length. Kx = Ky = 1.0. Factored axial load Pr = 210 kips, phi Pc = 640 kips (governing axis). Strong-axis factored moment Mrx = 140 kip-ft applied at the top beam-column joint from wind, phi Mcx = 310 kip-ft. No weak-axis moment."
  },
  {
    "id": 5201,
    "type": "point_and_click",
    "question": "Click the critical net section on the gusset connection detail, the section used for the fracture limit state.",
    "image_description": "Double angle member bolted to a gusset plate, two bolt lines visible along the connected legs. Hotzone A directly on the line through the bolt holes near the gusset edge (x=0.4,y=0.5); hotzone B on the gross cross-section away from any holes further along the member (x=0.15,y=0.5); hotzone C at the free edge of the gusset plate beyond the bolt group (x=0.75,y=0.5).",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.4,
        "y": 0.5,
        "w": 0.1,
        "h": 0.14
      },
      {
        "id": "z2",
        "x": 0.15,
        "y": 0.5,
        "w": 0.1,
        "h": 0.14
      },
      {
        "id": "z3",
        "x": 0.75,
        "y": 0.5,
        "w": 0.1,
        "h": 0.14
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the section cutting through the bolt holes: this is the reduced (net) section where Fu * Ae fracture is checked, since the holes remove material at that single cross-section only. The gross section away from the holes is used only for the yielding check, not fracture, and the gusset free edge carries no member cross-section at all. Recognizing which section pairs with which limit state is the core skill tested by AISC Chapter D.",
    "image": "question_images/q_5201.png",
    "domain": "steel_structures",
    "scenario_id": 52,
    "scenario_title": "Tension Member Net Section and Shear Lag at a Gusset Connection",
    "scenario_text": "A double-angle tension member (2L4x4x3/8, A36, Fy = 36 ksi, Fu = 58 ksi, Ag = 5.72 in^2 total, angle thickness 3/8 in each) is bolted through the connected legs only to a 3/8 in gusset plate, with two lines of 3/4 in diameter bolts (net hole diameter 7/8 in), one hole per angle removed at the critical cross-section. The connection length gives U = 0.80 per Table D3.1. The outstanding legs carry no bolts."
  },
  {
    "id": 5202,
    "type": "point_and_click",
    "question": "Click the outstanding (unconnected) angle leg, the reason shear lag reduces this member's effective area.",
    "image_description": "Cross-section view of the double angle showing each angle's connected leg (bolted flat against the gusset) and outstanding leg (projecting away, unbolted). Hotzone A on the connected leg flush against the gusset plate (x=0.45,y=0.5); hotzone B on the outstanding leg projecting outward (x=0.7,y=0.35); hotzone C on the gusset plate itself between the two angles (x=0.5,y=0.65).",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.45,
        "y": 0.5,
        "w": 0.1,
        "h": 0.1
      },
      {
        "id": "z2",
        "x": 0.7,
        "y": 0.35,
        "w": 0.1,
        "h": 0.1
      },
      {
        "id": "z3",
        "x": 0.5,
        "y": 0.65,
        "w": 0.14,
        "h": 0.08
      }
    ],
    "correct": "z2",
    "explanation": "The correct answer is the outstanding leg: because load only enters the member through the connected leg's bolts, stress is not uniformly distributed across the whole cross-section near the connection, and the outstanding leg lags behind in picking up load. This non-uniform distribution is exactly what the shear lag factor U from Table D3.1 accounts for. A member connected through all of its elements (both legs) would have a higher U than this one.",
    "image": "question_images/q_5202.png",
    "domain": "steel_structures",
    "scenario_id": 52,
    "scenario_title": "Tension Member Net Section and Shear Lag at a Gusset Connection",
    "scenario_text": "A double-angle tension member (2L4x4x3/8, A36, Fy = 36 ksi, Fu = 58 ksi, Ag = 5.72 in^2 total, angle thickness 3/8 in each) is bolted through the connected legs only to a 3/8 in gusset plate, with two lines of 3/4 in diameter bolts (net hole diameter 7/8 in), one hole per angle removed at the critical cross-section. The connection length gives U = 0.80 per Table D3.1. The outstanding legs carry no bolts."
  },
  {
    "id": 5203,
    "type": "point_and_click",
    "question": "Click the bolt row closest to the member end, where block shear tear-out through the gusset plate is most likely to initiate.",
    "image_description": "Gusset connection with two bolt rows visible along the member's length, one near the member tip (end of gusset) and one further back, plus an interior row. Hotzone A at the bolt row nearest the free end of the gusset plate (x=0.75,y=0.5); hotzone B at the interior bolt row furthest from the free end (x=0.3,y=0.5); hotzone C at the gusset-to-supporting-member weld, away from any bolts (x=0.1,y=0.5).",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.75,
        "y": 0.5,
        "w": 0.1,
        "h": 0.12
      },
      {
        "id": "z2",
        "x": 0.3,
        "y": 0.5,
        "w": 0.1,
        "h": 0.12
      },
      {
        "id": "z3",
        "x": 0.1,
        "y": 0.5,
        "w": 0.1,
        "h": 0.12
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the bolt row nearest the free end of the gusset plate: block shear rupture combines a shear plane along the bolt line with a tension plane across the end distance, and that failure path is shortest and most critical near the plate's free edge. The interior row and the far weld are not adjacent to a free edge in the load direction, so they do not form a comparable tear-out block. AISC Chapter J requires checking block shear specifically at this kind of end condition.",
    "image": "question_images/q_5203.png",
    "domain": "steel_structures",
    "scenario_id": 52,
    "scenario_title": "Tension Member Net Section and Shear Lag at a Gusset Connection",
    "scenario_text": "A double-angle tension member (2L4x4x3/8, A36, Fy = 36 ksi, Fu = 58 ksi, Ag = 5.72 in^2 total, angle thickness 3/8 in each) is bolted through the connected legs only to a 3/8 in gusset plate, with two lines of 3/4 in diameter bolts (net hole diameter 7/8 in), one hole per angle removed at the critical cross-section. The connection length gives U = 0.80 per Table D3.1. The outstanding legs carry no bolts."
  },
  {
    "id": 5204,
    "type": "drag_and_drop_position",
    "question": "Drag each area term to the zone of the connection drawing where it is measured.",
    "image_description": "Gusset connection drawing. Zone A on the member cross-section away from any holes, representing the full uncut area (x=0.15,y=0.5). Zone B directly on the bolt-hole cross-section (x=0.4,y=0.5). Zone C a small legend box off to the side summarizing the shear-lag-reduced value (x=0.85,y=0.3).",
    "drag_items": [
      {
        "id": "d1",
        "label": "Gross area, Ag"
      },
      {
        "id": "d2",
        "label": "Net area, An"
      },
      {
        "id": "d3",
        "label": "Effective net area, Ae = U times An"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.15,
        "y": 0.5,
        "w": 0.1,
        "h": 0.14
      },
      {
        "id": "z2",
        "x": 0.4,
        "y": 0.5,
        "w": 0.1,
        "h": 0.14
      },
      {
        "id": "z3",
        "x": 0.77,
        "y": 0.25,
        "w": 0.16,
        "h": 0.1
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct answer is Ag on the uncut section, An on the bolt-hole section, and Ae in the summary box: Ag = 5.72 in^2 is measured away from any holes, An = 5.72 minus 2 holes times (3/8 in times 7/8 in) = 5.06 in^2 is measured through the holes, and Ae = 0.80 times 5.06 = 4.05 in^2 is a derived quantity representing the shear-lag-reduced value used in the fracture check, not a physical section by itself.",
    "image": "question_images/q_5204.png",
    "domain": "steel_structures",
    "scenario_id": 52,
    "scenario_title": "Tension Member Net Section and Shear Lag at a Gusset Connection",
    "scenario_text": "A double-angle tension member (2L4x4x3/8, A36, Fy = 36 ksi, Fu = 58 ksi, Ag = 5.72 in^2 total, angle thickness 3/8 in each) is bolted through the connected legs only to a 3/8 in gusset plate, with two lines of 3/4 in diameter bolts (net hole diameter 7/8 in), one hole per angle removed at the critical cross-section. The connection length gives U = 0.80 per Table D3.1. The outstanding legs carry no bolts."
  },
  {
    "id": 5205,
    "type": "drag_and_drop_order",
    "question": "Arrange the steps to determine the governing tensile design strength of this member.",
    "items": [
      {
        "id": "s1",
        "text": "Calculate gross area Ag and gross yielding capacity, phi Fy Ag"
      },
      {
        "id": "s2",
        "text": "Determine hole diameter and calculate net area An"
      },
      {
        "id": "s3",
        "text": "Determine shear lag factor U from Table D3.1 and compute Ae = U An"
      },
      {
        "id": "s4",
        "text": "Calculate fracture capacity, phi Fu Ae"
      },
      {
        "id": "s5",
        "text": "Compare yielding and fracture capacities and take the lower value as governing"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4",
      "s5"
    ],
    "explanation": "The correct order is yielding capacity, net area, effective area, fracture capacity, then the governing comparison: yielding gives phi Pn = 0.90 times 36 times 5.72 = 185.3 kips, while fracture gives phi Pn = 0.75 times 58 times 4.05 = 176.3 kips. Fracture governs at 176.3 kips even though the yielding number is larger, which is the recurring pattern the theory chapter highlights, a smaller effective area combined with a lower phi factor can still control over the full gross section.",
    "domain": "steel_structures",
    "scenario_id": 52,
    "scenario_title": "Tension Member Net Section and Shear Lag at a Gusset Connection",
    "scenario_text": "A double-angle tension member (2L4x4x3/8, A36, Fy = 36 ksi, Fu = 58 ksi, Ag = 5.72 in^2 total, angle thickness 3/8 in each) is bolted through the connected legs only to a 3/8 in gusset plate, with two lines of 3/4 in diameter bolts (net hole diameter 7/8 in), one hole per angle removed at the critical cross-section. The connection length gives U = 0.80 per Table D3.1. The outstanding legs carry no bolts."
  },
  {
    "id": 5206,
    "type": "drag_and_drop_position",
    "question": "Drag each load-path description to its location on the gusset connection drawing.",
    "image_description": "Gusset connection drawing showing the member, bolts, and gusset plate. Zone A along the member body away from the connection representing the incoming tension force (x=0.1,y=0.5). Zone B directly on the bolt group representing shear transfer through the bolts (x=0.45,y=0.5). Zone C on the gusset plate material immediately behind the bolts representing bearing (x=0.6,y=0.6).",
    "drag_items": [
      {
        "id": "d1",
        "label": "Tension force carried by the member"
      },
      {
        "id": "d2",
        "label": "Bolt shear transfer into the gusset"
      },
      {
        "id": "d3",
        "label": "Bearing of the bolts against the gusset plate"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.1,
        "y": 0.5,
        "w": 0.12,
        "h": 0.1
      },
      {
        "id": "z2",
        "x": 0.45,
        "y": 0.5,
        "w": 0.12,
        "h": 0.1
      },
      {
        "id": "z3",
        "x": 0.6,
        "y": 0.6,
        "w": 0.12,
        "h": 0.1
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct answer is tension along the member body, shear transfer at the bolt group, and bearing on the gusset plate immediately behind the bolts: the load path runs from the member in tension, through the bolts in shear, into the gusset plate where bearing and tear-out limit states apply. Separating these load-transfer mechanisms is necessary because each one is checked against a different AISC Chapter J limit state.",
    "image": "question_images/q_5206.png",
    "domain": "steel_structures",
    "scenario_id": 52,
    "scenario_title": "Tension Member Net Section and Shear Lag at a Gusset Connection",
    "scenario_text": "A double-angle tension member (2L4x4x3/8, A36, Fy = 36 ksi, Fu = 58 ksi, Ag = 5.72 in^2 total, angle thickness 3/8 in each) is bolted through the connected legs only to a 3/8 in gusset plate, with two lines of 3/4 in diameter bolts (net hole diameter 7/8 in), one hole per angle removed at the critical cross-section. The connection length gives U = 0.80 per Table D3.1. The outstanding legs carry no bolts."
  },
  {
    "id": 5301,
    "type": "point_and_click",
    "question": "Click the unloaded joint where two non-collinear members meet, making both members zero-force by inspection.",
    "image_description": "Warren truss elevation, 48 ft span, 8 panels of 6 ft, sloped top chord, horizontal bottom chord, load arrow only at the midspan peak joint. Hotzone A at an unloaded outer joint near the support where only a diagonal and a vertical (non-collinear) member meet (x=0.2,y=0.35); hotzone B at the loaded peak joint at midspan (x=0.5,y=0.15); hotzone C at the support joint where three members meet, two of them collinear along the bottom chord (x=0.08,y=0.85).",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.2,
        "y": 0.35,
        "w": 0.09,
        "h": 0.09
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.15,
        "w": 0.09,
        "h": 0.09
      },
      {
        "id": "z3",
        "x": 0.08,
        "y": 0.85,
        "w": 0.09,
        "h": 0.09
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the unloaded joint with only two non-collinear members: by the zero-force member inspection rule, when exactly two non-parallel members meet at an unloaded joint with no external support reaction, both members must carry zero force to satisfy equilibrium. The peak joint carries the applied load so it is not a zero-force joint, and the support joint has three members with two of them collinear, which is a different rule that zeroes out only the third, non-collinear member.",
    "image": "question_images/q_5301.png",
    "domain": "steel_structures",
    "scenario_id": 53,
    "scenario_title": "Roof Truss Member Force Identification",
    "scenario_text": "A statically determinate steel Warren roof truss spans 48 ft with 6 ft panels, pin-connected joints, a horizontal bottom chord, and a sloped top chord. A single factored concentrated load P = 20 kips is applied only at the peak (midspan top) joint; no other joint carries load. Reactions are a pin at the left support and a roller at the right support."
  },
  {
    "id": 5302,
    "type": "point_and_click",
    "question": "Click the bottom chord panel expected to carry the maximum tension force.",
    "image_description": "Same truss elevation. Hotzone A on the bottom chord panel directly beneath the midspan peak joint (x=0.5,y=0.85); hotzone B on the bottom chord panel adjacent to the left support (x=0.15,y=0.85); hotzone C on the top chord panel adjacent to the left support (x=0.15,y=0.3).",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.5,
        "y": 0.85,
        "w": 0.1,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.15,
        "y": 0.85,
        "w": 0.1,
        "h": 0.08
      },
      {
        "id": "z3",
        "x": 0.15,
        "y": 0.3,
        "w": 0.1,
        "h": 0.08
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the bottom chord panel at midspan: for a truss loaded only at its peak, the internal moment analog is largest at midspan, so the bottom chord (the tension flange of the truss analog) carries its largest tension force in the panel directly under the load. Panels nearer the supports carry lower chord force even though they may carry higher shear in the diagonals. The top chord is in compression, not tension, everywhere along its length.",
    "image": "question_images/q_5302.png",
    "domain": "steel_structures",
    "scenario_id": 53,
    "scenario_title": "Roof Truss Member Force Identification",
    "scenario_text": "A statically determinate steel Warren roof truss spans 48 ft with 6 ft panels, pin-connected joints, a horizontal bottom chord, and a sloped top chord. A single factored concentrated load P = 20 kips is applied only at the peak (midspan top) joint; no other joint carries load. Reactions are a pin at the left support and a roller at the right support."
  },
  {
    "id": 5303,
    "type": "point_and_click",
    "question": "Click the top chord member expected to carry the maximum compression force.",
    "image_description": "Same truss elevation. Hotzone A on the top chord segment immediately adjacent to the loaded peak joint (x=0.42,y=0.2); hotzone B on the top chord segment near the left support (x=0.15,y=0.3); hotzone C on a diagonal web member between the bottom chord and top chord mid-span (x=0.6,y=0.5).",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.42,
        "y": 0.2,
        "w": 0.1,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.15,
        "y": 0.3,
        "w": 0.1,
        "h": 0.08
      },
      {
        "id": "z3",
        "x": 0.6,
        "y": 0.5,
        "w": 0.09,
        "h": 0.14
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the top chord segment adjacent to the loaded peak joint: this segment carries the largest compressive force because it sits at the section of maximum moment analog, directly resisting the applied load through the truss's compression flange. The top chord segment near the support carries a smaller force, and the diagonal web member framing into midspan carries much less axial force than the chords once the loaded joint's equilibrium is resolved.",
    "image": "question_images/q_5303.png",
    "domain": "steel_structures",
    "scenario_id": 53,
    "scenario_title": "Roof Truss Member Force Identification",
    "scenario_text": "A statically determinate steel Warren roof truss spans 48 ft with 6 ft panels, pin-connected joints, a horizontal bottom chord, and a sloped top chord. A single factored concentrated load P = 20 kips is applied only at the peak (midspan top) joint; no other joint carries load. Reactions are a pin at the left support and a roller at the right support."
  },
  {
    "id": 5304,
    "type": "drag_and_drop_order",
    "question": "Arrange the steps of the method of joints for identifying and using a zero-force member.",
    "items": [
      {
        "id": "s1",
        "text": "Identify unloaded joints with only two non-collinear members"
      },
      {
        "id": "s2",
        "text": "Set each of those two member forces to zero"
      },
      {
        "id": "s3",
        "text": "Move to an adjacent joint and sum forces using the known zero-force members"
      },
      {
        "id": "s4",
        "text": "Solve the remaining unknown member forces at that joint"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4"
    ],
    "explanation": "The correct order is identify, zero out, move to the adjacent joint, then solve: zero-force members are found first by inspection, then used to simplify the equilibrium equations at the next joint over, since a member already known to be zero removes one unknown from that joint's equations. Trying to solve every joint from scratch without first flagging zero-force members wastes time this exam does not give back within its four-hour clock.",
    "domain": "steel_structures",
    "scenario_id": 53,
    "scenario_title": "Roof Truss Member Force Identification",
    "scenario_text": "A statically determinate steel Warren roof truss spans 48 ft with 6 ft panels, pin-connected joints, a horizontal bottom chord, and a sloped top chord. A single factored concentrated load P = 20 kips is applied only at the peak (midspan top) joint; no other joint carries load. Reactions are a pin at the left support and a roller at the right support."
  },
  {
    "id": 5305,
    "type": "drag_and_drop_position",
    "question": "Drag each member-type label to its correct location on the truss diagram.",
    "image_description": "Same truss elevation. Zone A on the bottom chord panel at midspan (x=0.5,y=0.85). Zone B on the top chord segment adjacent to the loaded peak joint (x=0.42,y=0.2). Zone C on an unloaded diagonal member near the support identified earlier as zero-force (x=0.2,y=0.35).",
    "drag_items": [
      {
        "id": "d1",
        "label": "Bottom chord, tension"
      },
      {
        "id": "d2",
        "label": "Top chord, compression"
      },
      {
        "id": "d3",
        "label": "Zero-force diagonal"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.5,
        "y": 0.85,
        "w": 0.1,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.42,
        "y": 0.2,
        "w": 0.1,
        "h": 0.08
      },
      {
        "id": "z3",
        "x": 0.2,
        "y": 0.35,
        "w": 0.09,
        "h": 0.09
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct answer is tension on the midspan bottom chord, compression on the top chord segment adjacent to the peak load, and zero force on the identified diagonal: in a simply supported truss with load applied only at the top, the bottom chord always acts in tension and the top chord always acts in compression, while members at unloaded two-member joints carry no force at all.",
    "image": "question_images/q_5305.png",
    "domain": "steel_structures",
    "scenario_id": 53,
    "scenario_title": "Roof Truss Member Force Identification",
    "scenario_text": "A statically determinate steel Warren roof truss spans 48 ft with 6 ft panels, pin-connected joints, a horizontal bottom chord, and a sloped top chord. A single factored concentrated load P = 20 kips is applied only at the peak (midspan top) joint; no other joint carries load. Reactions are a pin at the left support and a roller at the right support."
  },
  {
    "id": 5306,
    "type": "drag_and_drop_order",
    "question": "Arrange these design-check steps for the governing compression top chord member.",
    "items": [
      {
        "id": "s1",
        "text": "Determine the axial force from truss analysis (method of joints or sections)"
      },
      {
        "id": "s2",
        "text": "Determine the unbraced length and K factor for the chord (purlin spacing for weak axis, panel point to panel point for strong axis)"
      },
      {
        "id": "s3",
        "text": "Calculate KL/r for both axes and identify the governing (larger) value"
      },
      {
        "id": "s4",
        "text": "Determine Fcr from AISC Chapter E and calculate phi Pn = phi Fcr Ag"
      },
      {
        "id": "s5",
        "text": "Compare the required axial force to phi Pn"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4",
      "s5"
    ],
    "explanation": "The correct order is force, unbraced length and K, slenderness, capacity, then comparison: a truss chord is a compression member whose in-plane unbraced length is the panel length (fixed by joint spacing) while its out-of-plane unbraced length is set by purlin spacing, so both must be established correctly before the two KL/r values can be compared and Chapter E can be applied to whichever axis governs.",
    "domain": "steel_structures",
    "scenario_id": 53,
    "scenario_title": "Roof Truss Member Force Identification",
    "scenario_text": "A statically determinate steel Warren roof truss spans 48 ft with 6 ft panels, pin-connected joints, a horizontal bottom chord, and a sloped top chord. A single factored concentrated load P = 20 kips is applied only at the peak (midspan top) joint; no other joint carries load. Reactions are a pin at the left support and a roller at the right support."
  },
  {
    "id": 5401,
    "type": "point_and_click",
    "question": "Click the location of the plastic neutral axis (PNA) on the composite section cutaway.",
    "image_description": "Composite section cutaway: concrete slab on top with metal deck ribs, W16x26 steel beam below, top flange near the slab-steel interface. Hotzone A within the concrete slab, close to its top surface (x=0.5,y=0.22); hotzone B right at the top flange of the steel beam, at the slab-steel interface (x=0.5,y=0.45); hotzone C within the steel web, below mid-depth of the beam (x=0.5,y=0.72).",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.5,
        "y": 0.22,
        "w": 0.3,
        "h": 0.06
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.45,
        "w": 0.3,
        "h": 0.05
      },
      {
        "id": "z3",
        "x": 0.5,
        "y": 0.72,
        "w": 0.1,
        "h": 0.1
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is within the concrete slab, near its top: the steel tension yield force is Fy As = 50 times 7.68 = 384 kips, while the maximum available concrete crushing force is 0.85 times 4 times 96 times 1.5 = 489.6 kips, so the smaller steel force sets the compression block, which needs only a = 384/(0.85 times 4 times 96) = 1.18 in of the 4.5 in slab. Since 1.18 in is less than the full slab depth, the PNA sits inside the concrete slab rather than at the steel-concrete interface or inside the steel section.",
    "image": "question_images/q_5401.png",
    "domain": "steel_structures",
    "scenario_id": 54,
    "scenario_title": "Composite Beam Plastic Neutral Axis Location",
    "scenario_text": "A W16x26 composite beam (A992, Fy = 50 ksi, As = 7.68 in^2) supports a 4.5 in normal-weight concrete slab (f'c = 4000 psi) on 3 in metal deck with ribs oriented perpendicular to the beam, effective slab width b_eff = 96 in, one 3/4 in shear stud per rib, with enough studs total to provide full composite action. The concrete depth above the deck flutes is 1.5 in."
  },
  {
    "id": 5402,
    "type": "point_and_click",
    "question": "Click the force arrow that governs the composite section's flexural strength, the smaller of the competing tension and compression forces.",
    "image_description": "Free body diagram of the composite section showing three labeled force arrows: a compression arrow in the slab labeled 'concrete crush force, full depth' (x=0.5,y=0.2), a tension arrow in the steel beam labeled 'steel yield force, Fy As' (x=0.5,y=0.75), and a smaller arrow near the studs labeled 'sum of stud capacities' (x=0.75,y=0.4).",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.5,
        "y": 0.75,
        "w": 0.16,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.2,
        "w": 0.16,
        "h": 0.08
      },
      {
        "id": "z3",
        "x": 0.75,
        "y": 0.4,
        "w": 0.14,
        "h": 0.08
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the steel yield force arrow: with Fy As = 384 kips less than the full concrete crushing capacity of 489.6 kips, and enough studs provided for full composite action, the steel section's tensile yield strength is the limiting force that sets the compression block depth in the slab. The full concrete force and the stud sum are both larger and therefore not the governing quantity in this fully composite case.",
    "image": "question_images/q_5402.png",
    "domain": "steel_structures",
    "scenario_id": 54,
    "scenario_title": "Composite Beam Plastic Neutral Axis Location",
    "scenario_text": "A W16x26 composite beam (A992, Fy = 50 ksi, As = 7.68 in^2) supports a 4.5 in normal-weight concrete slab (f'c = 4000 psi) on 3 in metal deck with ribs oriented perpendicular to the beam, effective slab width b_eff = 96 in, one 3/4 in shear stud per rib, with enough studs total to provide full composite action. The concrete depth above the deck flutes is 1.5 in."
  },
  {
    "id": 5403,
    "type": "point_and_click",
    "question": "Click the compression block depth 'a' within the slab cross-section, representing about 1.18 in of the 4.5 in total slab depth.",
    "image_description": "Slab cross-section, 4.5 in total depth shown with a dimension line. Hotzone A a shallow band near the top of the slab representing roughly the top 1.18 in (x=0.5,y=0.12); hotzone B a band at slab mid-depth (x=0.5,y=0.45); hotzone C a band at the bottom of the slab near the deck flutes (x=0.5,y=0.8).",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.5,
        "y": 0.12,
        "w": 0.4,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.45,
        "w": 0.4,
        "h": 0.08
      },
      {
        "id": "z3",
        "x": 0.5,
        "y": 0.8,
        "w": 0.4,
        "h": 0.08
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the shallow band near the top of the slab: solving 384 kips = 0.85 times 4 ksi times 96 in times a gives a = 1.18 in, which is well within the 1.5 in of solid concrete above the deck flutes, so the compression block occupies only the uppermost portion of the slab rather than reaching mid-depth or the deck interface.",
    "image": "question_images/q_5403.png",
    "domain": "steel_structures",
    "scenario_id": 54,
    "scenario_title": "Composite Beam Plastic Neutral Axis Location",
    "scenario_text": "A W16x26 composite beam (A992, Fy = 50 ksi, As = 7.68 in^2) supports a 4.5 in normal-weight concrete slab (f'c = 4000 psi) on 3 in metal deck with ribs oriented perpendicular to the beam, effective slab width b_eff = 96 in, one 3/4 in shear stud per rib, with enough studs total to provide full composite action. The concrete depth above the deck flutes is 1.5 in."
  },
  {
    "id": 5404,
    "type": "drag_and_drop_position",
    "question": "Drag each label to its correct location on the composite section stress-block diagram.",
    "image_description": "Composite section stress block diagram, concrete slab on top with a shallow shaded compression block near the top, steel beam below with a horizontal tension force line, and the neutral axis marked between them. Zone A at the shaded compression block near the top of the slab (x=0.5,y=0.15). Zone B at the tension force line through the steel beam (x=0.5,y=0.75). Zone C at the boundary line marking the PNA location within the slab (x=0.5,y=0.28).",
    "drag_items": [
      {
        "id": "d1",
        "label": "Concrete compression force, C"
      },
      {
        "id": "d2",
        "label": "Steel tension force, T"
      },
      {
        "id": "d3",
        "label": "Plastic neutral axis, PNA"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.5,
        "y": 0.15,
        "w": 0.3,
        "h": 0.06
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.75,
        "w": 0.3,
        "h": 0.06
      },
      {
        "id": "z3",
        "x": 0.5,
        "y": 0.28,
        "w": 0.3,
        "h": 0.04
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct answer is C on the shallow slab compression block, T through the steel beam, and the PNA line at the boundary between compression and tension within the slab: force equilibrium requires C to equal T at 384 kips each, and the PNA is simply the depth at which the section switches from the concrete compression zone above to the steel tension zone below.",
    "image": "question_images/q_5404.png",
    "domain": "steel_structures",
    "scenario_id": 54,
    "scenario_title": "Composite Beam Plastic Neutral Axis Location",
    "scenario_text": "A W16x26 composite beam (A992, Fy = 50 ksi, As = 7.68 in^2) supports a 4.5 in normal-weight concrete slab (f'c = 4000 psi) on 3 in metal deck with ribs oriented perpendicular to the beam, effective slab width b_eff = 96 in, one 3/4 in shear stud per rib, with enough studs total to provide full composite action. The concrete depth above the deck flutes is 1.5 in."
  },
  {
    "id": 5405,
    "type": "drag_and_drop_order",
    "question": "Arrange the steps to locate the PNA and compute the composite section's nominal moment.",
    "items": [
      {
        "id": "s1",
        "text": "Calculate steel section tension yield force, Fy As"
      },
      {
        "id": "s2",
        "text": "Calculate maximum available concrete compression force, 0.85 f'c b_eff t_slab"
      },
      {
        "id": "s3",
        "text": "Compare the two forces to determine whether the PNA falls in the slab or the steel section"
      },
      {
        "id": "s4",
        "text": "Solve for compression block depth a using force equilibrium"
      },
      {
        "id": "s5",
        "text": "Compute the nominal moment Mn by summing moments about the PNA"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4",
      "s5"
    ],
    "explanation": "The correct order is steel force, concrete force, comparison, block depth, then moment: comparing Fy As = 384 kips to the full concrete capacity of 489.6 kips shows the steel force governs and the PNA lies in the slab, after which equilibrium gives a = 1.18 in and the nominal moment follows from summing moments of C and T about the PNA location per AISC Chapter I.",
    "domain": "steel_structures",
    "scenario_id": 54,
    "scenario_title": "Composite Beam Plastic Neutral Axis Location",
    "scenario_text": "A W16x26 composite beam (A992, Fy = 50 ksi, As = 7.68 in^2) supports a 4.5 in normal-weight concrete slab (f'c = 4000 psi) on 3 in metal deck with ribs oriented perpendicular to the beam, effective slab width b_eff = 96 in, one 3/4 in shear stud per rib, with enough studs total to provide full composite action. The concrete depth above the deck flutes is 1.5 in."
  },
  {
    "id": 5406,
    "type": "drag_and_drop_position",
    "question": "Drag each deck orientation label to its matching cross-section drawing.",
    "image_description": "Two small side by side deck cross-section drawings. Drawing A shows deck ribs running perpendicular to the beam axis, one stud visible per rib (x=0.3,y=0.5). Drawing B shows deck ribs running parallel to the beam axis, studs spaced along a continuous flute (x=0.7,y=0.5).",
    "drag_items": [
      {
        "id": "d1",
        "label": "Ribs perpendicular to beam, one stud per rib, reduced stud capacity"
      },
      {
        "id": "d2",
        "label": "Ribs parallel to beam, higher stud capacity per stud"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.3,
        "y": 0.5,
        "w": 0.24,
        "h": 0.16
      },
      {
        "id": "z2",
        "x": 0.7,
        "y": 0.5,
        "w": 0.24,
        "h": 0.16
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2"
    },
    "explanation": "The correct answer is perpendicular ribs with one stud per rib on drawing A, and parallel ribs on drawing B: AISC I3.2d reduces stud shear capacity when the deck ribs run perpendicular to the beam because the concrete around each stud is confined only within the narrow flute, while ribs parallel to the beam surround the studs with a continuous slab of concrete and do not receive that reduction.",
    "image": "question_images/q_5406.png",
    "domain": "steel_structures",
    "scenario_id": 54,
    "scenario_title": "Composite Beam Plastic Neutral Axis Location",
    "scenario_text": "A W16x26 composite beam (A992, Fy = 50 ksi, As = 7.68 in^2) supports a 4.5 in normal-weight concrete slab (f'c = 4000 psi) on 3 in metal deck with ribs oriented perpendicular to the beam, effective slab width b_eff = 96 in, one 3/4 in shear stud per rib, with enough studs total to provide full composite action. The concrete depth above the deck flutes is 1.5 in."
  },
  {
    "id": 5501,
    "type": "point_and_click",
    "question": "Click the point on the Mn-versus-Lb graph representing this beam's design condition at Lb = 10 ft.",
    "image_description": "A graph with Lb on the horizontal axis and Mn on the vertical axis, showing a flat plateau at Mp from 0 to Lp, a straight descending line from Lp to Lr, and a curved descending line beyond Lr. Hotzone A on the descending straight line between the marked Lp and Lr points, roughly two thirds of the way from Lp to Lr (x=0.45,y=0.42); hotzone B on the flat plateau segment before Lp (x=0.15,y=0.15); hotzone C on the curved elastic buckling portion beyond Lr (x=0.85,y=0.65).",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.45,
        "y": 0.42,
        "w": 0.1,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.15,
        "y": 0.15,
        "w": 0.1,
        "h": 0.08
      },
      {
        "id": "z3",
        "x": 0.85,
        "y": 0.65,
        "w": 0.1,
        "h": 0.08
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the point on the descending inelastic LTB line between Lp and Lr: since Lp = 6.10 ft is less than Lb = 10 ft, which is less than Lr = 17.5 ft, the beam's design condition falls in the inelastic LTB zone on the horizontal axis, between the Lp and Lr markers, which is what hotzone A represents. Applying Cb of 1.14 to Mn = Mp minus BF times (Lb minus Lp) gives 1.14 times [458 minus 6.28 times 3.90] = 494.2 kip-ft, which exceeds Mp and must be capped at Mp = 458 kip-ft per AISC 360 Section F2, so the actual nominal moment sits at the Mp height rather than on the uncapped line. Hotzone B (the flat plateau before Lp) is still wrong because it represents the wrong horizontal position (Lb less than Lp), and hotzone C (beyond Lr) is wrong because Lb is less than Lr, so elastic buckling does not govern here.",
    "image": "question_images/q_5501.png",
    "domain": "steel_structures",
    "scenario_id": 55,
    "scenario_title": "Moment Frame Beam Lateral-Torsional Buckling Zones",
    "scenario_text": "A W21x50 beam (A992, Fy = 50 ksi, Zx = 110 in^3, Mp = 458 kip-ft, Lp = 6.10 ft, Lr = 17.5 ft, BF = 6.28 kips) in a special moment frame spans 30 ft between columns. The top flange is braced continuously by the composite floor deck, but the bottom flange is unbraced except at the third points of the span, giving an unbraced length Lb = 10 ft for the bottom-flange stability check, with Cb = 1.14 for that segment."
  },
  {
    "id": 5502,
    "type": "point_and_click",
    "question": "Click the beam segment representing the 10 ft unbraced bottom-flange length used for this check.",
    "image_description": "Beam elevation, 30 ft span, brace marks shown at the two third-points (10 ft and 20 ft from the left support), continuous line along the top flange representing the composite deck brace. Hotzone A on the first third-point segment of the beam, between the left support and the first brace mark (x=0.25,y=0.5); hotzone B spanning the entire 30 ft beam length (x=0.5,y=0.5); hotzone C on the continuous top-flange line representing the deck (x=0.5,y=0.2).",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.25,
        "y": 0.516,
        "w": 0.28,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.07500000000000001,
        "y": 0.46399999999999997,
        "w": 0.85,
        "h": 0.04
      },
      {
        "id": "z3",
        "x": 0.07500000000000001,
        "y": 0.185,
        "w": 0.85,
        "h": 0.03
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the third-point segment: the 10 ft distance between the support and the first bottom-flange brace mark (or between the two brace marks) is the actual unbraced length used in the F2 equations, not the full 30 ft span, since the bottom flange has discrete brace points at the third points. The continuous top-flange line represents continuous bracing on that flange only, which is a separate condition from the bottom flange being checked here.",
    "image": "question_images/q_5502.png",
    "domain": "steel_structures",
    "scenario_id": 55,
    "scenario_title": "Moment Frame Beam Lateral-Torsional Buckling Zones",
    "scenario_text": "A W21x50 beam (A992, Fy = 50 ksi, Zx = 110 in^3, Mp = 458 kip-ft, Lp = 6.10 ft, Lr = 17.5 ft, BF = 6.28 kips) in a special moment frame spans 30 ft between columns. The top flange is braced continuously by the composite floor deck, but the bottom flange is unbraced except at the third points of the span, giving an unbraced length Lb = 10 ft for the bottom-flange stability check, with Cb = 1.14 for that segment."
  },
  {
    "id": 5503,
    "type": "point_and_click",
    "question": "Click the portion of the moment diagram used to compute Cb for this unbraced segment.",
    "image_description": "Beam elevation with a bending moment diagram drawn below it. Hotzone A on the moment diagram directly below the 10 ft segment between the left support and the first third-point brace (x=0.25,y=0.85); hotzone B on the moment diagram spanning the full 30 ft length (x=0.5,y=0.85); hotzone C on the shear diagram below the moment diagram (x=0.5,y=0.95).",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.25,
        "y": 0.8634999999999999,
        "w": 0.28,
        "h": 0.06
      },
      {
        "id": "z2",
        "x": 0.07500000000000001,
        "y": 0.8215,
        "w": 0.85,
        "h": 0.03
      },
      {
        "id": "z3",
        "x": 0.07500000000000001,
        "y": 0.9349999999999999,
        "w": 0.85,
        "h": 0.03
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the moment diagram portion over the specific 10 ft unbraced segment: Cb is computed from the maximum moment and the quarter-point moments within that particular unbraced length only, not across the entire span, since each unbraced segment can have its own Cb value. The shear diagram plays no role in the Cb calculation.",
    "image": "question_images/q_5503.png",
    "domain": "steel_structures",
    "scenario_id": 55,
    "scenario_title": "Moment Frame Beam Lateral-Torsional Buckling Zones",
    "scenario_text": "A W21x50 beam (A992, Fy = 50 ksi, Zx = 110 in^3, Mp = 458 kip-ft, Lp = 6.10 ft, Lr = 17.5 ft, BF = 6.28 kips) in a special moment frame spans 30 ft between columns. The top flange is braced continuously by the composite floor deck, but the bottom flange is unbraced except at the third points of the span, giving an unbraced length Lb = 10 ft for the bottom-flange stability check, with Cb = 1.14 for that segment."
  },
  {
    "id": 5504,
    "type": "drag_and_drop_position",
    "question": "Drag each label to its zone on the Mn-versus-Lb graph.",
    "image_description": "Same Mn-versus-Lb graph as before. Zone A on the flat plateau before Lp (x=0.15,y=0.15). Zone B on the straight descending line between Lp and Lr (x=0.45,y=0.42). Zone C on the curved descending line beyond Lr (x=0.85,y=0.65).",
    "drag_items": [
      {
        "id": "d1",
        "label": "Mp, plastic moment plateau"
      },
      {
        "id": "d2",
        "label": "Inelastic LTB zone, Lp to Lr"
      },
      {
        "id": "d3",
        "label": "Elastic LTB zone, beyond Lr"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.15,
        "y": 0.15,
        "w": 0.14,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.45,
        "y": 0.42,
        "w": 0.14,
        "h": 0.08
      },
      {
        "id": "z3",
        "x": 0.85,
        "y": 0.65,
        "w": 0.14,
        "h": 0.08
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct answer is Mp on the flat plateau, inelastic LTB on the straight descending line, and elastic LTB on the curved portion: these three zones correspond directly to the three branches of AISC F2, full yielding capacity when bracing is close enough, a linear strength reduction as unbraced length grows past Lp, and a nonlinear elastic buckling reduction once the unbraced length exceeds Lr.",
    "image": "question_images/q_5504.png",
    "domain": "steel_structures",
    "scenario_id": 55,
    "scenario_title": "Moment Frame Beam Lateral-Torsional Buckling Zones",
    "scenario_text": "A W21x50 beam (A992, Fy = 50 ksi, Zx = 110 in^3, Mp = 458 kip-ft, Lp = 6.10 ft, Lr = 17.5 ft, BF = 6.28 kips) in a special moment frame spans 30 ft between columns. The top flange is braced continuously by the composite floor deck, but the bottom flange is unbraced except at the third points of the span, giving an unbraced length Lb = 10 ft for the bottom-flange stability check, with Cb = 1.14 for that segment."
  },
  {
    "id": 5505,
    "type": "drag_and_drop_order",
    "question": "Arrange the steps to determine Mn for this unbraced bottom-flange segment.",
    "items": [
      {
        "id": "s1",
        "text": "Confirm the section is compact per Table B4.1b so Chapter F2 applies"
      },
      {
        "id": "s2",
        "text": "Determine Lb for the segment and compare it to Lp and Lr"
      },
      {
        "id": "s3",
        "text": "Calculate Cb from the moment diagram over that unbraced length"
      },
      {
        "id": "s4",
        "text": "Apply the F2 equation for the identified zone (plateau, inelastic LTB, or elastic LTB)"
      },
      {
        "id": "s5",
        "text": "Cap the resulting Mn at Mp if the calculated value exceeds it"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4",
      "s5"
    ],
    "explanation": "The correct order is compactness, Lb comparison, Cb, the F2 equation, then the Mp cap: for this beam, Lb = 10 ft falls between Lp and Lr, Cb = 1.14 raises the inelastic LTB formula's result to 494.2 kip-ft, and since that exceeds Mp = 458 kip-ft, the final answer must be capped at Mp rather than reported as the uncapped, artificially high value.",
    "domain": "steel_structures",
    "scenario_id": 55,
    "scenario_title": "Moment Frame Beam Lateral-Torsional Buckling Zones",
    "scenario_text": "A W21x50 beam (A992, Fy = 50 ksi, Zx = 110 in^3, Mp = 458 kip-ft, Lp = 6.10 ft, Lr = 17.5 ft, BF = 6.28 kips) in a special moment frame spans 30 ft between columns. The top flange is braced continuously by the composite floor deck, but the bottom flange is unbraced except at the third points of the span, giving an unbraced length Lb = 10 ft for the bottom-flange stability check, with Cb = 1.14 for that segment."
  },
  {
    "id": 5506,
    "type": "drag_and_drop_position",
    "question": "Drag each brace description to its correct location on the beam elevation.",
    "image_description": "Beam elevation, 30 ft span, continuous line along the top flange, discrete brace marks at the third points along the bottom flange, unbraced segments between them. Zone A on the continuous top-flange line (x=0.5,y=0.2). Zone B on a discrete brace mark at the first third-point (x=0.33,y=0.5). Zone C on the unbraced segment between the two third-point brace marks (x=0.5,y=0.6).",
    "drag_items": [
      {
        "id": "d1",
        "label": "Continuous top-flange brace from composite deck"
      },
      {
        "id": "d2",
        "label": "Discrete bottom-flange brace point"
      },
      {
        "id": "d3",
        "label": "Unbraced bottom-flange segment"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.07500000000000001,
        "y": 0.185,
        "w": 0.85,
        "h": 0.03
      },
      {
        "id": "z2",
        "x": 0.33,
        "y": 0.5,
        "w": 0.06,
        "h": 0.1
      },
      {
        "id": "z3",
        "x": 0.5,
        "y": 0.6,
        "w": 0.28,
        "h": 0.06
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct answer is the continuous deck brace on the top flange line, the discrete brace point at the third-point mark, and the unbraced segment between the marks: only the bottom flange needs discrete brace points here because the top flange already has continuous restraint from the deck, which is why the F2 check in this scenario is driven entirely by the bottom-flange unbraced length.",
    "image": "question_images/q_5506.png",
    "domain": "steel_structures",
    "scenario_id": 55,
    "scenario_title": "Moment Frame Beam Lateral-Torsional Buckling Zones",
    "scenario_text": "A W21x50 beam (A992, Fy = 50 ksi, Zx = 110 in^3, Mp = 458 kip-ft, Lp = 6.10 ft, Lr = 17.5 ft, BF = 6.28 kips) in a special moment frame spans 30 ft between columns. The top flange is braced continuously by the composite floor deck, but the bottom flange is unbraced except at the third points of the span, giving an unbraced length Lb = 10 ft for the bottom-flange stability check, with Cb = 1.14 for that segment."
  },
  {
    "id": 5601,
    "type": "point_and_click",
    "question": "Click the end panel of the girder, adjacent to the support, where tension field action is NOT permitted.",
    "image_description": "Plate girder elevation, support at the far left, transverse stiffeners shown as vertical lines at 60 in spacing along the span. Hotzone A the first panel between the support and the first interior stiffener (x=0.1,y=0.5); hotzone B an interior panel bounded by stiffeners on both sides further along the span (x=0.4,y=0.5); hotzone C the panel at midspan (x=0.7,y=0.5).",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.1,
        "y": 0.5,
        "w": 0.14,
        "h": 0.3
      },
      {
        "id": "z2",
        "x": 0.4,
        "y": 0.5,
        "w": 0.14,
        "h": 0.3
      },
      {
        "id": "z3",
        "x": 0.7,
        "y": 0.5,
        "w": 0.14,
        "h": 0.3
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the end panel between the support and the first interior stiffener: AISC Section G3.3 excludes end panels from tension field action because there is no adjacent panel on the support side to anchor the diagonal tension field against, so this panel must be designed using the initial shear buckling strength alone. Interior panels bounded by stiffeners on both sides, like the midspan panel, are free to use the additional post-buckling tension field strength.",
    "image": "question_images/q_5601.png",
    "domain": "steel_structures",
    "scenario_id": 56,
    "scenario_title": "Plate Girder Web Shear and Tension Field Action",
    "scenario_text": "A welded built-up plate girder (A992, Fy = 50 ksi) has a web plate 60 in deep by 0.375 in thick (h/tw = 160, exceeding the compact web shear limit), with transverse stiffeners at 60 in spacing (a/h = 1.0), qualifying interior panels for tension field action per AISC Chapter G, Section G3. The end panel, adjacent to the support, has no stiffener beyond the first interior one on the support side, so tension field action is not permitted there per Section G3.3."
  },
  {
    "id": 5602,
    "type": "point_and_click",
    "question": "Click the stiffener spacing dimension 'a' on the girder elevation.",
    "image_description": "Plate girder elevation with stiffeners at 60 in spacing. Hotzone A the horizontal dimension line drawn between two adjacent stiffeners (x=0.4,y=0.15); hotzone B the vertical dimension line showing the web depth h (x=0.05,y=0.5); hotzone C the horizontal dimension line showing flange width along the top flange (x=0.4,y=0.05).",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.4,
        "y": 0.15,
        "w": 0.2,
        "h": 0.05
      },
      {
        "id": "z2",
        "x": 0.05,
        "y": 0.5,
        "w": 0.04,
        "h": 0.3
      },
      {
        "id": "z3",
        "x": 0.4,
        "y": 0.05,
        "w": 0.2,
        "h": 0.03
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the horizontal dimension line between two adjacent stiffeners: this is the panel dimension 'a' used with the web depth h to form the ratio a/h that Chapter G, Section G3 uses to determine both the shear buckling coefficient and whether tension field action can be mobilized. The web depth dimension and flange width dimension are different quantities used elsewhere in the design, not the stiffener spacing.",
    "image": "question_images/q_5602.png",
    "domain": "steel_structures",
    "scenario_id": 56,
    "scenario_title": "Plate Girder Web Shear and Tension Field Action",
    "scenario_text": "A welded built-up plate girder (A992, Fy = 50 ksi) has a web plate 60 in deep by 0.375 in thick (h/tw = 160, exceeding the compact web shear limit), with transverse stiffeners at 60 in spacing (a/h = 1.0), qualifying interior panels for tension field action per AISC Chapter G, Section G3. The end panel, adjacent to the support, has no stiffener beyond the first interior one on the support side, so tension field action is not permitted there per Section G3.3."
  },
  {
    "id": 5603,
    "type": "point_and_click",
    "question": "Click the diagonal tension field direction that develops within an interior web panel once shear buckling occurs.",
    "image_description": "One interior panel of the plate girder shown enlarged, bounded by two stiffeners and the flanges. Hotzone A a diagonal line running from the lower left corner to the upper right corner of the panel (x=0.5,y=0.5, oriented diagonally); hotzone B a vertical line through the panel center (x=0.5,y=0.5, narrow vertical); hotzone C a horizontal line across the panel mid-height (x=0.5,y=0.5, narrow horizontal).",
    "hotzones": [
      {
        "id": "z2",
        "x": 0.669,
        "y": 0.5,
        "w": 0.04,
        "h": 0.3
      },
      {
        "id": "z3",
        "x": 0.357,
        "y": 0.5459999999999999,
        "w": 0.3,
        "h": 0.04
      },
      {
        "id": "z1",
        "x": 0.39399999999999996,
        "y": 0.374,
        "w": 0.16,
        "h": 0.16
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the corner-to-corner diagonal line: once the thin web buckles in shear, it can no longer resist compression along that diagonal but continues to carry additional load as a diagonal tension member stretched between the stiffeners and flanges, similar to the diagonal of a Pratt truss panel. Neither a purely vertical nor a purely horizontal line represents this post-buckling load path.",
    "image": "question_images/q_5603.png",
    "domain": "steel_structures",
    "scenario_id": 56,
    "scenario_title": "Plate Girder Web Shear and Tension Field Action",
    "scenario_text": "A welded built-up plate girder (A992, Fy = 50 ksi) has a web plate 60 in deep by 0.375 in thick (h/tw = 160, exceeding the compact web shear limit), with transverse stiffeners at 60 in spacing (a/h = 1.0), qualifying interior panels for tension field action per AISC Chapter G, Section G3. The end panel, adjacent to the support, has no stiffener beyond the first interior one on the support side, so tension field action is not permitted there per Section G3.3."
  },
  {
    "id": 5604,
    "type": "drag_and_drop_position",
    "question": "Drag each label to its zone on the girder elevation.",
    "image_description": "Plate girder elevation, support at the far left, stiffeners at 60 in spacing. Zone A the interior panel bounded by stiffeners on both sides (x=0.4,y=0.5). Zone B the end panel between the support and the first stiffener (x=0.1,y=0.5). Zone C directly on one of the vertical stiffener lines (x=0.25,y=0.5).",
    "drag_items": [
      {
        "id": "d1",
        "label": "Interior panel, tension field action permitted"
      },
      {
        "id": "d2",
        "label": "End panel, tension field action not permitted"
      },
      {
        "id": "d3",
        "label": "Transverse stiffener"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.4,
        "y": 0.5,
        "w": 0.14,
        "h": 0.3
      },
      {
        "id": "z2",
        "x": 0.1,
        "y": 0.5,
        "w": 0.14,
        "h": 0.3
      },
      {
        "id": "z3",
        "x": 0.25,
        "y": 0.5,
        "w": 0.03,
        "h": 0.3
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct answer is tension field action permitted at the interior panel, not permitted at the end panel, and the stiffener label on the vertical line between them: this distinction directly reflects AISC Section G3.3, which reserves the higher post-buckling shear strength for interior panels that have an anchoring panel on both sides.",
    "image": "question_images/q_5604.png",
    "domain": "steel_structures",
    "scenario_id": 56,
    "scenario_title": "Plate Girder Web Shear and Tension Field Action",
    "scenario_text": "A welded built-up plate girder (A992, Fy = 50 ksi) has a web plate 60 in deep by 0.375 in thick (h/tw = 160, exceeding the compact web shear limit), with transverse stiffeners at 60 in spacing (a/h = 1.0), qualifying interior panels for tension field action per AISC Chapter G, Section G3. The end panel, adjacent to the support, has no stiffener beyond the first interior one on the support side, so tension field action is not permitted there per Section G3.3."
  },
  {
    "id": 5605,
    "type": "drag_and_drop_order",
    "question": "Arrange the steps to determine this girder's shear strength using AISC Chapter G, Section G3.",
    "items": [
      {
        "id": "s1",
        "text": "Calculate h/tw and compare to the limit to confirm the web is slender"
      },
      {
        "id": "s2",
        "text": "Calculate a/h from the stiffener spacing and web depth"
      },
      {
        "id": "s3",
        "text": "Determine whether tension field action is permitted for the panel (interior vs end panel)"
      },
      {
        "id": "s4",
        "text": "Calculate Cv2, and add the tension field term if permitted"
      },
      {
        "id": "s5",
        "text": "Calculate Vn and compare to the required shear"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4",
      "s5"
    ],
    "explanation": "The correct order is web slenderness, panel aspect ratio, tension field eligibility, shear coefficient calculation, then the final capacity comparison: h/tw = 160 confirms the web is slender enough that Chapter G, Section G3 governs, a/h = 1.0 feeds into the Cv2 tables, and only after confirming the panel type do you know whether to add the post-buckling tension field term before computing Vn.",
    "domain": "steel_structures",
    "scenario_id": 56,
    "scenario_title": "Plate Girder Web Shear and Tension Field Action",
    "scenario_text": "A welded built-up plate girder (A992, Fy = 50 ksi) has a web plate 60 in deep by 0.375 in thick (h/tw = 160, exceeding the compact web shear limit), with transverse stiffeners at 60 in spacing (a/h = 1.0), qualifying interior panels for tension field action per AISC Chapter G, Section G3. The end panel, adjacent to the support, has no stiffener beyond the first interior one on the support side, so tension field action is not permitted there per Section G3.3."
  },
  {
    "id": 5606,
    "type": "drag_and_drop_position",
    "question": "Drag each element label to its location on the girder cross-section and elevation.",
    "image_description": "Combined girder cross-section (showing top flange, web, bottom flange) next to an elevation view showing a stiffener at midspan and a heavier bearing stiffener at the support. Zone A the web plate in the cross-section (x=0.5,y=0.5). Zone B one of the flange plates in the cross-section (x=0.5,y=0.15). Zone C the mid-span transverse stiffener in the elevation (x=0.4,y=0.5). Zone D the bearing stiffener directly over the support in the elevation (x=0.08,y=0.5).",
    "drag_items": [
      {
        "id": "d1",
        "label": "Web plate"
      },
      {
        "id": "d2",
        "label": "Flange plate"
      },
      {
        "id": "d3",
        "label": "Transverse stiffener"
      },
      {
        "id": "d4",
        "label": "Bearing stiffener"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.5,
        "y": 0.5,
        "w": 0.06,
        "h": 0.3
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.15,
        "w": 0.2,
        "h": 0.05
      },
      {
        "id": "z3",
        "x": 0.4,
        "y": 0.5,
        "w": 0.03,
        "h": 0.3
      },
      {
        "id": "z4",
        "x": 0.08,
        "y": 0.5,
        "w": 0.04,
        "h": 0.3
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3",
      "z4": "d4"
    },
    "explanation": "The correct answer is the web plate at the center of the cross-section, the flange plate at top and bottom, the transverse stiffener at midspan, and the heavier bearing stiffener directly over the support: bearing stiffeners are proportioned to transfer the full concentrated reaction into the web and must be designed as compression members, unlike ordinary transverse stiffeners which only need to control web buckling and anchor tension field action.",
    "image": "question_images/q_5606.png",
    "domain": "steel_structures",
    "scenario_id": 56,
    "scenario_title": "Plate Girder Web Shear and Tension Field Action",
    "scenario_text": "A welded built-up plate girder (A992, Fy = 50 ksi) has a web plate 60 in deep by 0.375 in thick (h/tw = 160, exceeding the compact web shear limit), with transverse stiffeners at 60 in spacing (a/h = 1.0), qualifying interior panels for tension field action per AISC Chapter G, Section G3. The end panel, adjacent to the support, has no stiffener beyond the first interior one on the support side, so tension field action is not permitted there per Section G3.3."
  },
  {
    "id": 5701,
    "type": "point_and_click",
    "question": "Click the fixed base connection that provides the rigid support producing K = 2.0 cantilever behavior.",
    "image_description": "Column elevation, base plate and anchor rods at the bottom, free top with a lateral load arrow. Hotzone A at the base plate and anchor rod group (x=0.5,y=0.9); hotzone B at the free top of the column (x=0.5,y=0.1); hotzone C at column mid-height (x=0.5,y=0.5).",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.5,
        "y": 0.9,
        "w": 0.2,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.1,
        "w": 0.12,
        "h": 0.06
      },
      {
        "id": "z3",
        "x": 0.5,
        "y": 0.5,
        "w": 0.12,
        "h": 0.06
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the base plate and anchor rod group: a rigid base plate with adequately embedded anchor rods provides the zero-rotation, zero-translation fixed condition assumed at the bottom of this column, which combined with a free (unbraced) top gives the fixed-free cantilever case with K = 2.0. Neither the free top nor mid-height provides any rotational restraint.",
    "image": "question_images/q_5701.png",
    "domain": "steel_structures",
    "scenario_id": 57,
    "scenario_title": "Cantilevered Column Base Plate and Effective Length",
    "scenario_text": "A W10x49 column (A992, Fy = 50 ksi) acts as a freestanding cantilever from a rigid base plate connection up to an unbraced free top, supporting an unbalanced canopy load with no bracing at the top. The base plate is welded to the column and anchored with 4 anchor rods embedded in a concrete pier, providing a fixed base condition. Unbraced length L = 12 ft, and lateral load acts at the free top, producing overturning at the base."
  },
  {
    "id": 5702,
    "type": "point_and_click",
    "question": "Click the free top of the column where maximum lateral deflection occurs under this fixed-free cantilever condition.",
    "image_description": "Same column elevation. Hotzone A at the top of the column where the lateral load is applied and no bracing exists (x=0.5,y=0.1); hotzone B at the base plate (x=0.5,y=0.9); hotzone C at column mid-height (x=0.5,y=0.5).",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.5,
        "y": 0.1,
        "w": 0.12,
        "h": 0.06
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.9,
        "w": 0.2,
        "h": 0.08
      },
      {
        "id": "z3",
        "x": 0.5,
        "y": 0.5,
        "w": 0.12,
        "h": 0.06
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the free top of the column: with no bracing at the top, that end can both translate and rotate under lateral load, and deflection accumulates over the full 12 ft height, reaching its maximum right at the unrestrained top rather than at the fixed base or at mid-height.",
    "image": "question_images/q_5702.png",
    "domain": "steel_structures",
    "scenario_id": 57,
    "scenario_title": "Cantilevered Column Base Plate and Effective Length",
    "scenario_text": "A W10x49 column (A992, Fy = 50 ksi) acts as a freestanding cantilever from a rigid base plate connection up to an unbraced free top, supporting an unbalanced canopy load with no bracing at the top. The base plate is welded to the column and anchored with 4 anchor rods embedded in a concrete pier, providing a fixed base condition. Unbraced length L = 12 ft, and lateral load acts at the free top, producing overturning at the base."
  },
  {
    "id": 5703,
    "type": "point_and_click",
    "question": "Click the anchor rods on the tension side of the base plate that resist the overturning moment from the cantilever action.",
    "image_description": "Base plate plan view with 4 anchor rods, one near each corner, and an arrow showing the direction of the applied lateral load at the top of the column (translated to the base as an overturning moment). Hotzone A the two anchor rods on the side of the base plate away from the direction the column tends to rotate toward, the tension side (x=0.3,y=0.5); hotzone B the two anchor rods on the opposite (compression) side (x=0.7,y=0.5); hotzone C the center of the base plate at the column centerline (x=0.5,y=0.5).",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.3,
        "y": 0.5,
        "w": 0.14,
        "h": 0.3
      },
      {
        "id": "z2",
        "x": 0.7,
        "y": 0.5,
        "w": 0.14,
        "h": 0.3
      },
      {
        "id": "z3",
        "x": 0.5,
        "y": 0.5,
        "w": 0.08,
        "h": 0.08
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the two anchor rods on the tension side of the base plate: as the overturning moment tries to rotate the base plate about its compression edge, the rods on the opposite side are pulled into tension and must be sized and embedded to resist that uplift force. The compression-side rods primarily see the plate bearing on the pier and do not develop the governing tension demand.",
    "image": "question_images/q_5703.png",
    "domain": "steel_structures",
    "scenario_id": 57,
    "scenario_title": "Cantilevered Column Base Plate and Effective Length",
    "scenario_text": "A W10x49 column (A992, Fy = 50 ksi) acts as a freestanding cantilever from a rigid base plate connection up to an unbraced free top, supporting an unbalanced canopy load with no bracing at the top. The base plate is welded to the column and anchored with 4 anchor rods embedded in a concrete pier, providing a fixed base condition. Unbraced length L = 12 ft, and lateral load acts at the free top, producing overturning at the base."
  },
  {
    "id": 5704,
    "type": "drag_and_drop_position",
    "question": "Drag each K-value label to the matching column end-condition sketch.",
    "image_description": "Three small side by side column sketches. Sketch A shows a column fixed at the base with a completely free, unbraced top (x=0.2,y=0.5). Sketch B shows a column pinned at both ends within a braced frame (x=0.5,y=0.5). Sketch C shows a column fixed at both ends (x=0.8,y=0.5).",
    "drag_items": [
      {
        "id": "d1",
        "label": "K = 2.0, fixed-free cantilever"
      },
      {
        "id": "d2",
        "label": "K = 1.0, pinned-pinned braced"
      },
      {
        "id": "d3",
        "label": "K = 0.5, fixed-fixed"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.2,
        "y": 0.5,
        "w": 0.18,
        "h": 0.4
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.5,
        "w": 0.18,
        "h": 0.4
      },
      {
        "id": "z3",
        "x": 0.8,
        "y": 0.5,
        "w": 0.18,
        "h": 0.4
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct answer is K = 2.0 on the fixed-free cantilever sketch, K = 1.0 on the pinned-pinned braced sketch, and K = 0.5 on the fixed-fixed sketch: these are the classic theoretical alignment chart values for idealized end conditions, and this scenario's column matches the fixed-free case because its base is genuinely rigid while its top has no bracing at all.",
    "image": "question_images/q_5704.png",
    "domain": "steel_structures",
    "scenario_id": 57,
    "scenario_title": "Cantilevered Column Base Plate and Effective Length",
    "scenario_text": "A W10x49 column (A992, Fy = 50 ksi) acts as a freestanding cantilever from a rigid base plate connection up to an unbraced free top, supporting an unbalanced canopy load with no bracing at the top. The base plate is welded to the column and anchored with 4 anchor rods embedded in a concrete pier, providing a fixed base condition. Unbraced length L = 12 ft, and lateral load acts at the free top, producing overturning at the base."
  },
  {
    "id": 5705,
    "type": "drag_and_drop_order",
    "question": "Arrange the steps to check this cantilevered column for axial compression.",
    "items": [
      {
        "id": "s1",
        "text": "Confirm the base connection is genuinely rigid and the top is unbraced (free)"
      },
      {
        "id": "s2",
        "text": "Select K = 2.0 for this fixed-free cantilever condition"
      },
      {
        "id": "s3",
        "text": "Calculate KL/r for the governing axis using the full 12 ft unbraced length"
      },
      {
        "id": "s4",
        "text": "Determine Fcr from AISC Chapter E using the calculated KL/r"
      },
      {
        "id": "s5",
        "text": "Calculate phi Pn = phi Fcr Ag and compare to the required axial load"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4",
      "s5"
    ],
    "explanation": "The correct order is confirming the boundary condition, selecting K, computing slenderness, finding Fcr, then comparing capacity to demand: confirming the base is truly rigid matters because using K = 2.0 on a base that is only partially fixed underestimates the effective length and unconservatively overstates the column's capacity.",
    "domain": "steel_structures",
    "scenario_id": 57,
    "scenario_title": "Cantilevered Column Base Plate and Effective Length",
    "scenario_text": "A W10x49 column (A992, Fy = 50 ksi) acts as a freestanding cantilever from a rigid base plate connection up to an unbraced free top, supporting an unbalanced canopy load with no bracing at the top. The base plate is welded to the column and anchored with 4 anchor rods embedded in a concrete pier, providing a fixed base condition. Unbraced length L = 12 ft, and lateral load acts at the free top, producing overturning at the base."
  },
  {
    "id": 5706,
    "type": "drag_and_drop_position",
    "question": "Drag each force label to its arrow in the base plate free body diagram.",
    "image_description": "Base plate free body diagram showing a downward arrow at the column centerline for axial load, a curved arrow representing the overturning moment at the base, and an upward arrow at the tension-side anchor rods. Zone A the downward axial arrow at the column centerline (x=0.5,y=0.3). Zone B the curved overturning moment arrow at the base plate (x=0.5,y=0.7). Zone C the upward anchor rod tension arrow on the tension side (x=0.3,y=0.85).",
    "drag_items": [
      {
        "id": "d1",
        "label": "Axial column load"
      },
      {
        "id": "d2",
        "label": "Overturning moment"
      },
      {
        "id": "d3",
        "label": "Anchor rod tension force"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.5,
        "y": 0.3,
        "w": 0.1,
        "h": 0.1
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.7,
        "w": 0.16,
        "h": 0.1
      },
      {
        "id": "z3",
        "x": 0.3,
        "y": 0.85,
        "w": 0.1,
        "h": 0.08
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct answer is axial load at the centerline, overturning moment at the base, and anchor rod tension on the uplift side: the lateral load applied at the free top translates into an overturning moment at the fixed base, which the anchor rod group resists as a tension-compression couple while the axial load is carried independently down the column centerline.",
    "image": "question_images/q_5706.png",
    "domain": "steel_structures",
    "scenario_id": 57,
    "scenario_title": "Cantilevered Column Base Plate and Effective Length",
    "scenario_text": "A W10x49 column (A992, Fy = 50 ksi) acts as a freestanding cantilever from a rigid base plate connection up to an unbraced free top, supporting an unbalanced canopy load with no bracing at the top. The base plate is welded to the column and anchored with 4 anchor rods embedded in a concrete pier, providing a fixed base condition. Unbraced length L = 12 ft, and lateral load acts at the free top, producing overturning at the base."
  },
  {
    "id": 5801,
    "type": "point_and_click",
    "question": "Click the connection element that transfers only shear, Vu, and not moment.",
    "image_description": "Beam-to-column moment connection detail: top flange plate, bottom flange plate, and a single web plate between the beam web and column flange. Hotzone A on the single web plate (x=0.5,y=0.5); hotzone B on the top flange plate (x=0.5,y=0.15); hotzone C on the bottom flange plate (x=0.5,y=0.85).",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.5,
        "y": 0.5,
        "w": 0.14,
        "h": 0.14
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.15,
        "w": 0.3,
        "h": 0.06
      },
      {
        "id": "z3",
        "x": 0.5,
        "y": 0.85,
        "w": 0.3,
        "h": 0.06
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the single web plate: in a bolted flange plate moment connection, the flange plates are proportioned to carry the entire moment as a tension-compression couple, while the web connection is intentionally designed only for the shear reaction Vu, keeping the two load paths separate and each simpler to design and check.",
    "image": "question_images/q_5801.png",
    "domain": "steel_structures",
    "scenario_id": 58,
    "scenario_title": "Bolted Flange Plate Moment Connection Force Path",
    "scenario_text": "A W24x76 beam connects to a W14x99 column with a bolted flange plate (BFP) moment connection. Top and bottom flange plates are welded to the column flange with complete-joint-penetration groove welds and field-bolted to the beam flanges using two rows of 7/8 in diameter A325 bolts each. A single-plate connection at the beam web transfers only the shear reaction. Factored moment Mu = 380 kip-ft and factored shear Vu = 45 kips act at the connection."
  },
  {
    "id": 5802,
    "type": "point_and_click",
    "question": "Click the weld that develops the full flange plate force into the column flange.",
    "image_description": "Same connection detail. Hotzone A the complete-joint-penetration groove weld joining the flange plate to the column flange (x=0.72,y=0.15); hotzone B the bolted region joining the flange plate to the beam flange (x=0.3,y=0.15); hotzone C the weld joining the web plate to the column flange (x=0.72,y=0.5).",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.72,
        "y": 0.15,
        "w": 0.06,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.3,
        "y": 0.15,
        "w": 0.2,
        "h": 0.06
      },
      {
        "id": "z3",
        "x": 0.72,
        "y": 0.5,
        "w": 0.06,
        "h": 0.1
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the complete-joint-penetration groove weld connecting the flange plate to the column flange: a CJP groove weld develops the full strength of the connected plate, which is necessary here since that weld must transfer the entire flange couple force into the column. The bolted region instead transfers force from the beam flange into the plate, and the web weld only carries the shear reaction.",
    "image": "question_images/q_5802.png",
    "domain": "steel_structures",
    "scenario_id": 58,
    "scenario_title": "Bolted Flange Plate Moment Connection Force Path",
    "scenario_text": "A W24x76 beam connects to a W14x99 column with a bolted flange plate (BFP) moment connection. Top and bottom flange plates are welded to the column flange with complete-joint-penetration groove welds and field-bolted to the beam flanges using two rows of 7/8 in diameter A325 bolts each. A single-plate connection at the beam web transfers only the shear reaction. Factored moment Mu = 380 kip-ft and factored shear Vu = 45 kips act at the connection."
  },
  {
    "id": 5803,
    "type": "point_and_click",
    "question": "Click the bolt row in the flange plate connection located farthest from the column face.",
    "image_description": "Flange plate bolted connection detail showing two rows of bolts along the beam flange, one closer to the column face and one farther out toward the beam span. Hotzone A the outer bolt row, farthest from the column face (x=0.35,y=0.15); hotzone B the inner bolt row, nearest the column face (x=0.6,y=0.15); hotzone C the single bolt through the web plate (x=0.5,y=0.5).",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.35,
        "y": 0.15,
        "w": 0.1,
        "h": 0.05
      },
      {
        "id": "z2",
        "x": 0.6,
        "y": 0.15,
        "w": 0.1,
        "h": 0.05
      },
      {
        "id": "z3",
        "x": 0.5,
        "y": 0.5,
        "w": 0.06,
        "h": 0.06
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the outer bolt row, farthest from the column face: in a bolted flange plate connection, the flange force transfers as a concentric couple through the plate to the beam flange, not as an eccentric shear load, so the elastic bolt-group method does not apply here. What actually governs at the outer row is edge distance: it sits closer to the free end of the flange plate, giving it the smallest clear distance Lc and therefore the lowest bolt tearout strength per AISC 360 Section J3.10, making it the critical row to check for tearout and bearing.",
    "image": "question_images/q_5803.png",
    "domain": "steel_structures",
    "scenario_id": 58,
    "scenario_title": "Bolted Flange Plate Moment Connection Force Path",
    "scenario_text": "A W24x76 beam connects to a W14x99 column with a bolted flange plate (BFP) moment connection. Top and bottom flange plates are welded to the column flange with complete-joint-penetration groove welds and field-bolted to the beam flanges using two rows of 7/8 in diameter A325 bolts each. A single-plate connection at the beam web transfers only the shear reaction. Factored moment Mu = 380 kip-ft and factored shear Vu = 45 kips act at the connection."
  },
  {
    "id": 5804,
    "type": "drag_and_drop_position",
    "question": "Drag each label to the correct connection element in the drawing.",
    "image_description": "Same connection detail. Zone A the top flange plate (x=0.5,y=0.15). Zone B the bottom flange plate (x=0.5,y=0.85). Zone C the single web plate (x=0.5,y=0.5).",
    "drag_items": [
      {
        "id": "d1",
        "label": "Flange plate, tension flange"
      },
      {
        "id": "d2",
        "label": "Flange plate, compression flange"
      },
      {
        "id": "d3",
        "label": "Web single plate, shear only"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.5,
        "y": 0.15,
        "w": 0.3,
        "h": 0.06
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.85,
        "w": 0.3,
        "h": 0.06
      },
      {
        "id": "z3",
        "x": 0.5,
        "y": 0.5,
        "w": 0.14,
        "h": 0.14
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct answer is the tension flange plate at top, the compression flange plate at bottom, and the shear-only web plate in between: for a beam under positive moment from gravity load combined with this connection's assumed loading direction, one flange carries the tension side of the moment couple and the opposite flange carries the compression side, while the web plate carries none of the moment at all.",
    "image": "question_images/q_5804.png",
    "domain": "steel_structures",
    "scenario_id": 58,
    "scenario_title": "Bolted Flange Plate Moment Connection Force Path",
    "scenario_text": "A W24x76 beam connects to a W14x99 column with a bolted flange plate (BFP) moment connection. Top and bottom flange plates are welded to the column flange with complete-joint-penetration groove welds and field-bolted to the beam flanges using two rows of 7/8 in diameter A325 bolts each. A single-plate connection at the beam web transfers only the shear reaction. Factored moment Mu = 380 kip-ft and factored shear Vu = 45 kips act at the connection."
  },
  {
    "id": 5805,
    "type": "drag_and_drop_order",
    "question": "Arrange the steps to design this bolted flange plate moment connection.",
    "items": [
      {
        "id": "s1",
        "text": "Compute the flange force couple, Mu divided by the distance between flange plate centroids"
      },
      {
        "id": "s2",
        "text": "Design the flange plate for tension yielding, tension fracture, and the bolt group in shear and bearing"
      },
      {
        "id": "s3",
        "text": "Design the complete-joint-penetration weld connecting each flange plate to the column flange"
      },
      {
        "id": "s4",
        "text": "Design the web single-plate connection for the shear reaction Vu only"
      },
      {
        "id": "s5",
        "text": "Check the beam flange, flange plate, and column flange for local effects from the transferred forces"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4",
      "s5"
    ],
    "explanation": "The correct order is compute the couple force, design the flange plates and their bolts, design the CJP welds, design the web shear connection, then check local effects: with Mu = 380 kip-ft and a W24x76 beam depth of about 23.9 in, the flange couple force is roughly Mu divided by beam depth, and every downstream flange plate and weld design step depends on first getting that force correct.",
    "domain": "steel_structures",
    "scenario_id": 58,
    "scenario_title": "Bolted Flange Plate Moment Connection Force Path",
    "scenario_text": "A W24x76 beam connects to a W14x99 column with a bolted flange plate (BFP) moment connection. Top and bottom flange plates are welded to the column flange with complete-joint-penetration groove welds and field-bolted to the beam flanges using two rows of 7/8 in diameter A325 bolts each. A single-plate connection at the beam web transfers only the shear reaction. Factored moment Mu = 380 kip-ft and factored shear Vu = 45 kips act at the connection."
  },
  {
    "id": 5806,
    "type": "drag_and_drop_position",
    "question": "Drag each force label to its arrow in the connection free body diagram.",
    "image_description": "Free body diagram of the connection showing a tension arrow at the top flange plate, a compression arrow at the bottom flange plate, and a downward shear arrow at the web plate. Zone A the tension arrow at the top flange plate (x=0.75,y=0.15). Zone B the compression arrow at the bottom flange plate (x=0.75,y=0.85). Zone C the downward shear arrow at the web plate (x=0.75,y=0.5).",
    "drag_items": [
      {
        "id": "d1",
        "label": "Tension couple force, Mu divided by d"
      },
      {
        "id": "d2",
        "label": "Compression couple force, Mu divided by d"
      },
      {
        "id": "d3",
        "label": "Shear reaction, Vu"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.75,
        "y": 0.15,
        "w": 0.1,
        "h": 0.06
      },
      {
        "id": "z2",
        "x": 0.75,
        "y": 0.85,
        "w": 0.1,
        "h": 0.06
      },
      {
        "id": "z3",
        "x": 0.75,
        "y": 0.5,
        "w": 0.1,
        "h": 0.08
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct answer is the tension couple force at the top flange, the equal and opposite compression couple force at the bottom flange, and the shear reaction at the web: the two flange forces form the moment couple that equals Mu divided by the beam depth, while the shear reaction Vu is carried entirely by the separate web connection, keeping the two force paths independent as intended by this connection type.",
    "image": "question_images/q_5806.png",
    "domain": "steel_structures",
    "scenario_id": 58,
    "scenario_title": "Bolted Flange Plate Moment Connection Force Path",
    "scenario_text": "A W24x76 beam connects to a W14x99 column with a bolted flange plate (BFP) moment connection. Top and bottom flange plates are welded to the column flange with complete-joint-penetration groove welds and field-bolted to the beam flanges using two rows of 7/8 in diameter A325 bolts each. A single-plate connection at the beam web transfers only the shear reaction. Factored moment Mu = 380 kip-ft and factored shear Vu = 45 kips act at the connection."
  },
  {
    "id": 5901,
    "type": "point_and_click",
    "question": "Click the Whitmore section line, the effective width line projected at 30 degrees from the first weld line.",
    "image_description": "Gusset plate with the HSS brace entering at an angle, slot weld shown at the near end, and two 30-degree lines projecting outward from the ends of the first weld line to a transverse line 18 in wide at the far end. Hotzone A on the transverse 18 in wide Whitmore line at the projected end of the 30-degree spread (x=0.6,y=0.5); hotzone B on the gusset plate free edge near the brace tip, beyond the Whitmore line (x=0.85,y=0.5); hotzone C directly on the weld line at the HSS slot (x=0.25,y=0.5).",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.6,
        "y": 0.5,
        "w": 0.06,
        "h": 0.28
      },
      {
        "id": "z2",
        "x": 0.85,
        "y": 0.5,
        "w": 0.08,
        "h": 0.2
      },
      {
        "id": "z3",
        "x": 0.25,
        "y": 0.5,
        "w": 0.06,
        "h": 0.18
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the transverse Whitmore line at 18 in effective width: the Whitmore section spreads at 30 degrees from each end of the first row of connectors to give an assumed effective width for checking gusset plate yielding and buckling in compression, which is wider than the weld line itself but stops short of the plate's actual free edge.",
    "image": "question_images/q_5901.png",
    "domain": "steel_structures",
    "scenario_id": 59,
    "scenario_title": "HSS Brace Gusset Plate Whitmore Section and Block Shear",
    "scenario_text": "An HSS6x6x3/8 diagonal brace (A500 Grade C, Fy = 50 ksi) in a concentrically braced frame connects to a gusset plate through a single slotted end welded connection, transferring a factored tension force Tu = 310 kips. The gusset plate is 1/2 in thick A36 plate. The weld runs 14 in along each side of the slot, and the Whitmore section, projected at 30 degrees from the first line of weld, intersects the gusset plate at an effective width of 18 in."
  },
  {
    "id": 5902,
    "type": "point_and_click",
    "question": "Click the potential block shear tear-out path on the gusset plate near the connection.",
    "image_description": "Same gusset plate drawing. Hotzone A a path combining a shear plane along the weld line with a tension plane cutting across to the nearby free edge of the gusset (x=0.3,y=0.7); hotzone B the Whitmore section at mid-plate (x=0.6,y=0.5); hotzone C the HSS wall cross-section itself (x=0.15,y=0.5).",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.3,
        "y": 0.7,
        "w": 0.16,
        "h": 0.16
      },
      {
        "id": "z2",
        "x": 0.6,
        "y": 0.5,
        "w": 0.06,
        "h": 0.28
      },
      {
        "id": "z3",
        "x": 0.15,
        "y": 0.5,
        "w": 0.06,
        "h": 0.18
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the block shear tear-out path near the plate's free edge: block shear rupture combines a shear failure plane running along the weld with a tension failure plane cutting across the plate to a nearby free edge, and this failure mode is distinct from both the Whitmore yielding check and the HSS wall itself.",
    "image": "question_images/q_5902.png",
    "domain": "steel_structures",
    "scenario_id": 59,
    "scenario_title": "HSS Brace Gusset Plate Whitmore Section and Block Shear",
    "scenario_text": "An HSS6x6x3/8 diagonal brace (A500 Grade C, Fy = 50 ksi) in a concentrically braced frame connects to a gusset plate through a single slotted end welded connection, transferring a factored tension force Tu = 310 kips. The gusset plate is 1/2 in thick A36 plate. The weld runs 14 in along each side of the slot, and the Whitmore section, projected at 30 degrees from the first line of weld, intersects the gusset plate at an effective width of 18 in."
  },
  {
    "id": 5903,
    "type": "point_and_click",
    "question": "Click the region of the gusset plate most likely to buckle in compression under seismic load reversal.",
    "image_description": "Same gusset plate drawing. Hotzone A the unrestrained gusset plate region beyond the end of the weld, in line with the brace, often called the Thornton free-edge zone (x=0.65,y=0.3); hotzone B the region directly under the weld at the HSS slot (x=0.25,y=0.5); hotzone C the corner of the gusset plate welded to the beam-column joint (x=0.1,y=0.85).",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.65,
        "y": 0.3,
        "w": 0.16,
        "h": 0.14
      },
      {
        "id": "z2",
        "x": 0.25,
        "y": 0.5,
        "w": 0.06,
        "h": 0.18
      },
      {
        "id": "z3",
        "x": 0.1,
        "y": 0.85,
        "w": 0.14,
        "h": 0.1
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the unrestrained free-edge region beyond the weld: when the brace reverses into compression under seismic load, the gusset plate in the zone beyond the last connectors is unrestrained against out-of-plane buckling and is the region checked for plate buckling capacity, distinct from the restrained material directly under the weld or at the beam-column corner.",
    "image": "question_images/q_5903.png",
    "domain": "steel_structures",
    "scenario_id": 59,
    "scenario_title": "HSS Brace Gusset Plate Whitmore Section and Block Shear",
    "scenario_text": "An HSS6x6x3/8 diagonal brace (A500 Grade C, Fy = 50 ksi) in a concentrically braced frame connects to a gusset plate through a single slotted end welded connection, transferring a factored tension force Tu = 310 kips. The gusset plate is 1/2 in thick A36 plate. The weld runs 14 in along each side of the slot, and the Whitmore section, projected at 30 degrees from the first line of weld, intersects the gusset plate at an effective width of 18 in."
  },
  {
    "id": 5904,
    "type": "drag_and_drop_position",
    "question": "Drag each label to the corresponding region on the gusset plate drawing.",
    "image_description": "Same gusset plate drawing. Zone A the transverse Whitmore line (x=0.6,y=0.5). Zone B the block shear tear-out path near the free edge (x=0.3,y=0.7). Zone C the unrestrained region beyond the weld (x=0.65,y=0.3).",
    "drag_items": [
      {
        "id": "d1",
        "label": "Whitmore section"
      },
      {
        "id": "d2",
        "label": "Block shear path"
      },
      {
        "id": "d3",
        "label": "Compression buckling zone"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.6,
        "y": 0.5,
        "w": 0.06,
        "h": 0.28
      },
      {
        "id": "z2",
        "x": 0.3,
        "y": 0.7,
        "w": 0.16,
        "h": 0.16
      },
      {
        "id": "z3",
        "x": 0.65,
        "y": 0.3,
        "w": 0.16,
        "h": 0.14
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct answer is the Whitmore section on the transverse line, the block shear path near the free edge, and the compression buckling zone in the unrestrained region beyond the weld: these three checks address three separate limit states on the same gusset plate, tension yielding across an assumed width, tension and shear rupture along an actual tear-out path, and compression buckling of an unrestrained plate region.",
    "image": "question_images/q_5904.png",
    "domain": "steel_structures",
    "scenario_id": 59,
    "scenario_title": "HSS Brace Gusset Plate Whitmore Section and Block Shear",
    "scenario_text": "An HSS6x6x3/8 diagonal brace (A500 Grade C, Fy = 50 ksi) in a concentrically braced frame connects to a gusset plate through a single slotted end welded connection, transferring a factored tension force Tu = 310 kips. The gusset plate is 1/2 in thick A36 plate. The weld runs 14 in along each side of the slot, and the Whitmore section, projected at 30 degrees from the first line of weld, intersects the gusset plate at an effective width of 18 in."
  },
  {
    "id": 5905,
    "type": "drag_and_drop_order",
    "question": "Arrange the steps to check this HSS brace to gusset plate connection for tension.",
    "items": [
      {
        "id": "s1",
        "text": "Check the HSS brace for tensile yielding and fracture, including shear lag reduction for the slotted connection"
      },
      {
        "id": "s2",
        "text": "Check the gusset plate for tensile yielding on the Whitmore section"
      },
      {
        "id": "s3",
        "text": "Check the gusset plate for block shear rupture at the connection"
      },
      {
        "id": "s4",
        "text": "Check the weld connecting the HSS slot to the gusset plate for adequacy"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4"
    ],
    "explanation": "The correct order is the HSS brace, the gusset plate yielding check, the gusset plate block shear check, then the weld: the brace itself must be checked first since its capacity sets the demand the connection must deliver, after which the gusset plate is checked against its own yielding and rupture limit states, and finally the weld is checked to confirm it can actually transfer Tu = 310 kips into the plate.",
    "domain": "steel_structures",
    "scenario_id": 59,
    "scenario_title": "HSS Brace Gusset Plate Whitmore Section and Block Shear",
    "scenario_text": "An HSS6x6x3/8 diagonal brace (A500 Grade C, Fy = 50 ksi) in a concentrically braced frame connects to a gusset plate through a single slotted end welded connection, transferring a factored tension force Tu = 310 kips. The gusset plate is 1/2 in thick A36 plate. The weld runs 14 in along each side of the slot, and the Whitmore section, projected at 30 degrees from the first line of weld, intersects the gusset plate at an effective width of 18 in."
  },
  {
    "id": 5906,
    "type": "drag_and_drop_position",
    "question": "Drag each force label to its corresponding arrow or region on the gusset connection drawing.",
    "image_description": "Gusset connection drawing with a force arrow along the HSS brace axis, a shaded region along the weld representing weld shear resistance, and a shaded transverse band representing the Whitmore capacity. Zone A the arrow along the brace axis (x=0.15,y=0.5). Zone B the shaded weld region (x=0.25,y=0.6). Zone C the shaded Whitmore band (x=0.6,y=0.5).",
    "drag_items": [
      {
        "id": "d1",
        "label": "HSS brace tension force, Tu"
      },
      {
        "id": "d2",
        "label": "Weld shear resistance"
      },
      {
        "id": "d3",
        "label": "Gusset plate Whitmore capacity"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.15,
        "y": 0.5,
        "w": 0.1,
        "h": 0.14
      },
      {
        "id": "z2",
        "x": 0.25,
        "y": 0.6,
        "w": 0.1,
        "h": 0.14
      },
      {
        "id": "z3",
        "x": 0.6,
        "y": 0.5,
        "w": 0.06,
        "h": 0.28
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct answer is Tu along the brace axis, weld shear resistance along the weld region, and Whitmore capacity along the transverse band: the applied brace force Tu must be transferred through the weld into the gusset plate, and the plate itself must have enough tensile yielding capacity across the Whitmore section to carry that same force without yielding prematurely.",
    "image": "question_images/q_5906.png",
    "domain": "steel_structures",
    "scenario_id": 59,
    "scenario_title": "HSS Brace Gusset Plate Whitmore Section and Block Shear",
    "scenario_text": "An HSS6x6x3/8 diagonal brace (A500 Grade C, Fy = 50 ksi) in a concentrically braced frame connects to a gusset plate through a single slotted end welded connection, transferring a factored tension force Tu = 310 kips. The gusset plate is 1/2 in thick A36 plate. The weld runs 14 in along each side of the slot, and the Whitmore section, projected at 30 degrees from the first line of weld, intersects the gusset plate at an effective width of 18 in."
  },
  {
    "id": 6001,
    "type": "point_and_click",
    "question": "Click the coped region of the beam, the cut-away portion near the connection.",
    "image_description": "Beam end elevation framing into a girder web, top flange and part of the web cut away near the top of the beam end to clear the girder flange, double angle connection bolted to the web below the cope. Hotzone A the coped notch at the top of the beam end (x=0.75,y=0.2); hotzone B the uncoped bottom flange (x=0.75,y=0.9); hotzone C the bolt group of the double angle connection on the web (x=0.7,y=0.55).",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.75,
        "y": 0.2,
        "w": 0.16,
        "h": 0.14
      },
      {
        "id": "z2",
        "x": 0.75,
        "y": 0.9,
        "w": 0.2,
        "h": 0.06
      },
      {
        "id": "z3",
        "x": 0.7,
        "y": 0.55,
        "w": 0.1,
        "h": 0.16
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the coped notch at the top of the beam: the 4 in deep by 6 in long cutout removes both the top flange and the upper portion of the web at the connection so the beam clears the supporting girder's flange, and it is this reduced section, not the uncoped bottom flange or the bolt group itself, that requires a separate local check.",
    "image": "question_images/q_6001.png",
    "domain": "steel_structures",
    "scenario_id": 60,
    "scenario_title": "Coped Beam Connection Shear and Block Shear Check",
    "scenario_text": "A W18x35 beam (A992, Fy = 50 ksi) frames into a girder web using a double-angle shear connection. The top flange is coped 4 in deep by 6 in long along the beam end to clear the girder flange, leaving a reduced web depth at the connection. The beam carries a factored end reaction Vu = 58 kips."
  },
  {
    "id": 6002,
    "type": "point_and_click",
    "question": "Click the block shear failure path at the coped end of the beam.",
    "image_description": "Same beam end elevation. Hotzone A a path combining a shear plane along the bolt line through the remaining web and a tension plane across the net width at the top of the coped web (x=0.72,y=0.35); hotzone B the uncoped bottom flange region (x=0.75,y=0.9); hotzone C the girder web that the beam frames into (x=0.95,y=0.5).",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.72,
        "y": 0.35,
        "w": 0.14,
        "h": 0.16
      },
      {
        "id": "z2",
        "x": 0.75,
        "y": 0.9,
        "w": 0.2,
        "h": 0.06
      },
      {
        "id": "z3",
        "x": 0.95,
        "y": 0.5,
        "w": 0.05,
        "h": 0.3
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the block shear path at the coped corner: with the top flange removed, the remaining web at the connection has a free edge right at the cope, so a shear plane along the bolt line combined with a tension plane across the net width near the cope becomes a governing tear-out path that would not exist in the uncoped, full-depth beam.",
    "image": "question_images/q_6002.png",
    "domain": "steel_structures",
    "scenario_id": 60,
    "scenario_title": "Coped Beam Connection Shear and Block Shear Check",
    "scenario_text": "A W18x35 beam (A992, Fy = 50 ksi) frames into a girder web using a double-angle shear connection. The top flange is coped 4 in deep by 6 in long along the beam end to clear the girder flange, leaving a reduced web depth at the connection. The beam carries a factored end reaction Vu = 58 kips."
  },
  {
    "id": 6003,
    "type": "point_and_click",
    "question": "Click the reduced web section at the cope that must be checked separately for local buckling and shear yielding.",
    "image_description": "Same beam end elevation. Hotzone A the reduced-depth web section directly at the cope (x=0.78,y=0.3); hotzone B the full-depth web away from the cope, further along the beam (x=0.4,y=0.5); hotzone C the girder flange the beam clears (x=0.95,y=0.15).",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.78,
        "y": 0.3,
        "w": 0.1,
        "h": 0.16
      },
      {
        "id": "z2",
        "x": 0.4,
        "y": 0.5,
        "w": 0.12,
        "h": 0.3
      },
      {
        "id": "z3",
        "x": 0.95,
        "y": 0.15,
        "w": 0.05,
        "h": 0.1
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the reduced-depth web section right at the cope: removing the top flange over a 6 in length reduces both the effective depth and the lateral restraint of the web there, so its shear yielding strength and susceptibility to local buckling must be checked using the coped section's actual reduced properties rather than the full, uncoped beam's shear capacity.",
    "image": "question_images/q_6003.png",
    "domain": "steel_structures",
    "scenario_id": 60,
    "scenario_title": "Coped Beam Connection Shear and Block Shear Check",
    "scenario_text": "A W18x35 beam (A992, Fy = 50 ksi) frames into a girder web using a double-angle shear connection. The top flange is coped 4 in deep by 6 in long along the beam end to clear the girder flange, leaving a reduced web depth at the connection. The beam carries a factored end reaction Vu = 58 kips."
  },
  {
    "id": 6004,
    "type": "drag_and_drop_position",
    "question": "Drag each label to its correct location on the coped beam connection drawing.",
    "image_description": "Same beam end elevation. Zone A the reduced web section at the cope (x=0.78,y=0.3). Zone B the block shear tear-out path near the cope corner (x=0.72,y=0.35, offset slightly lower). Zone C the double angle bolt group on the web (x=0.7,y=0.55).",
    "drag_items": [
      {
        "id": "d1",
        "label": "Coped web section, reduced depth"
      },
      {
        "id": "d2",
        "label": "Block shear path"
      },
      {
        "id": "d3",
        "label": "Double-angle shear connection"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.78,
        "y": 0.3,
        "w": 0.1,
        "h": 0.14
      },
      {
        "id": "z2",
        "x": 0.6,
        "y": 0.42,
        "w": 0.12,
        "h": 0.1
      },
      {
        "id": "z3",
        "x": 0.7,
        "y": 0.55,
        "w": 0.1,
        "h": 0.16
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct answer is the coped web section at the cope, the block shear path just below and to the left of it, and the double-angle connection at the bolt group: each of these is a distinct check required for a coped connection, the reduced section for shear yielding and buckling, the tear-out path for block shear, and the angle-and-bolt group for ordinary shear and bearing.",
    "image": "question_images/q_6004.png",
    "domain": "steel_structures",
    "scenario_id": 60,
    "scenario_title": "Coped Beam Connection Shear and Block Shear Check",
    "scenario_text": "A W18x35 beam (A992, Fy = 50 ksi) frames into a girder web using a double-angle shear connection. The top flange is coped 4 in deep by 6 in long along the beam end to clear the girder flange, leaving a reduced web depth at the connection. The beam carries a factored end reaction Vu = 58 kips."
  },
  {
    "id": 6005,
    "type": "drag_and_drop_order",
    "question": "Arrange the steps to check this coped beam connection.",
    "items": [
      {
        "id": "s1",
        "text": "Determine the cope geometry (depth and length) and the reduced web section properties"
      },
      {
        "id": "s2",
        "text": "Check the reduced web section for shear yielding and local buckling at the cope"
      },
      {
        "id": "s3",
        "text": "Check the connection for block shear rupture through the coped web"
      },
      {
        "id": "s4",
        "text": "Check the beam web for bearing and the bolt group for shear and bearing capacity"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4"
    ],
    "explanation": "The correct order is establish the cope geometry, check the reduced section, check block shear, then check the bolt group: the 4 in deep by 6 in long cope must be quantified first since it defines the reduced section used in every subsequent check, after which shear yielding and buckling at the cope, block shear rupture, and finally ordinary bolt shear and bearing are each verified against the 58 kip reaction.",
    "domain": "steel_structures",
    "scenario_id": 60,
    "scenario_title": "Coped Beam Connection Shear and Block Shear Check",
    "scenario_text": "A W18x35 beam (A992, Fy = 50 ksi) frames into a girder web using a double-angle shear connection. The top flange is coped 4 in deep by 6 in long along the beam end to clear the girder flange, leaving a reduced web depth at the connection. The beam carries a factored end reaction Vu = 58 kips."
  },
  {
    "id": 6006,
    "type": "drag_and_drop_position",
    "question": "Drag each dimension label to its callout on the coped beam drawing.",
    "image_description": "Beam end elevation showing the cope with a vertical dimension line for cope depth, a horizontal dimension line for cope length, and a vertical dimension line for the remaining web depth below the cope. Zone A the vertical cope depth dimension (x=0.85,y=0.2). Zone B the horizontal cope length dimension (x=0.75,y=0.08). Zone C the vertical remaining web depth dimension below the cope (x=0.85,y=0.6).",
    "drag_items": [
      {
        "id": "d1",
        "label": "Cope depth, dc = 4 in"
      },
      {
        "id": "d2",
        "label": "Cope length, lc = 6 in"
      },
      {
        "id": "d3",
        "label": "Remaining web depth"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.85,
        "y": 0.2,
        "w": 0.06,
        "h": 0.14
      },
      {
        "id": "z2",
        "x": 0.75,
        "y": 0.08,
        "w": 0.16,
        "h": 0.04
      },
      {
        "id": "z3",
        "x": 0.85,
        "y": 0.6,
        "w": 0.06,
        "h": 0.3
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct answer is cope depth on the vertical dimension near the top, cope length on the horizontal dimension along the top edge, and remaining web depth on the vertical dimension below the cope: the 4 in cope depth and 6 in cope length together define exactly how much of the W18x35's web and flange were removed, which directly sets the remaining web depth used in the reduced section shear and block shear checks.",
    "image": "question_images/q_6006.png",
    "domain": "steel_structures",
    "scenario_id": 60,
    "scenario_title": "Coped Beam Connection Shear and Block Shear Check",
    "scenario_text": "A W18x35 beam (A992, Fy = 50 ksi) frames into a girder web using a double-angle shear connection. The top flange is coped 4 in deep by 6 in long along the beam end to clear the girder flange, leaving a reduced web depth at the connection. The beam carries a factored end reaction Vu = 58 kips."
  },
  {
    "id": 6101,
    "type": "point_and_click",
    "question": "On the beam cross-section and strain diagram shown, click the depth representing the neutral axis, c.",
    "image_description": "A rectangular beam cross-section, b = 14 in wide, drawn tall with the top compression fiber at the top edge and the tension steel near the bottom. A strain triangle is overlaid from the top fiber down to the steel level. Four horizontal reference lines are marked across the section width, labeled only by position: near the top fiber, a line slightly below it, one at roughly one-fifth of the depth, and one near the bottom at the steel level.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.5,
        "y": 0.15,
        "w": 0.4,
        "h": 0.06
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.22,
        "w": 0.4,
        "h": 0.06
      },
      {
        "id": "z3",
        "x": 0.5,
        "y": 0.3,
        "w": 0.4,
        "h": 0.06
      },
      {
        "id": "z4",
        "x": 0.5,
        "y": 0.75,
        "w": 0.4,
        "h": 0.06
      }
    ],
    "correct": "z3",
    "explanation": "The correct answer is the line at roughly 4.45 in from the top fiber: c is found from c = a / beta1 = 3.78 / 0.85 = 4.45 in, which sits below the stress block depth a but well above the steel centroid at d = 21.5 in. The neutral axis is the depth at which strain crosses zero between the compression zone above and the tension zone below. Confusing c with a (the stress block depth) is a common error since the two values are numerically close for lightly reinforced sections.",
    "image": "question_images/q_6101.png",
    "domain": "concrete_structures",
    "scenario_id": 61,
    "scenario_title": "Singly Reinforced Beam Strain Compatibility Diagram",
    "scenario_text": "A simply supported rectangular beam spans 24 ft with b = 14 in, d = 21.5 in, f'c = 4,000 psi, fy = 60,000 psi, reinforced with three No. 9 bars, As = 3.00 in^2. Calculations give a = 3.78 in, c = 4.45 in (beta1 = 0.85), epsilon_t = 0.0115, Mn = 294.2 kip-ft, and phi Mn = 264.8 kip-ft with phi = 0.90."
  },
  {
    "id": 6102,
    "type": "point_and_click",
    "question": "On the same cross-section, click the depth representing the location of the resultant concrete compression force, a/2.",
    "image_description": "Same beam cross-section and four reference lines as the previous item, unlabeled by value.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.5,
        "y": 0.15,
        "w": 0.4,
        "h": 0.06
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.22,
        "w": 0.4,
        "h": 0.06
      },
      {
        "id": "z3",
        "x": 0.5,
        "y": 0.3,
        "w": 0.4,
        "h": 0.06
      },
      {
        "id": "z4",
        "x": 0.5,
        "y": 0.75,
        "w": 0.4,
        "h": 0.06
      }
    ],
    "correct": "z2",
    "explanation": "The correct answer is the line at roughly a/2 = 1.89 in from the top fiber: the equivalent rectangular stress block replaces the true nonlinear concrete stress distribution with a uniform block of depth a, so its resultant compression force acts at the mid-depth of that block, a/2. This is shallower than the neutral axis c because a = beta1 * c and beta1 is less than 1.0. Placing the resultant at c or at the extreme fiber instead of a/2 produces an incorrect internal moment arm.",
    "image": "question_images/q_6102.png",
    "domain": "concrete_structures",
    "scenario_id": 61,
    "scenario_title": "Singly Reinforced Beam Strain Compatibility Diagram",
    "scenario_text": "A simply supported rectangular beam spans 24 ft with b = 14 in, d = 21.5 in, f'c = 4,000 psi, fy = 60,000 psi, reinforced with three No. 9 bars, As = 3.00 in^2. Calculations give a = 3.78 in, c = 4.45 in (beta1 = 0.85), epsilon_t = 0.0115, Mn = 294.2 kip-ft, and phi Mn = 264.8 kip-ft with phi = 0.90."
  },
  {
    "id": 6103,
    "type": "point_and_click",
    "question": "On the same cross-section, click the depth representing the extreme compression fiber, where the concrete crushing strain of 0.003 is assumed.",
    "image_description": "Same beam cross-section and four reference lines as the previous two items, unlabeled by value.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.5,
        "y": 0.15,
        "w": 0.4,
        "h": 0.06
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.22,
        "w": 0.4,
        "h": 0.06
      },
      {
        "id": "z3",
        "x": 0.5,
        "y": 0.3,
        "w": 0.4,
        "h": 0.06
      },
      {
        "id": "z4",
        "x": 0.5,
        "y": 0.75,
        "w": 0.4,
        "h": 0.06
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the topmost line at the extreme compression fiber: ACI 318-14 flexural theory assumes the concrete crushes at a strain of 0.003 at this fiber, which anchors the strain compatibility triangle used to find epsilon_t at the steel level. All other strains in the section, including epsilon_t = 0.0115 at the steel, are derived proportionally from this fixed top-fiber strain and the neutral axis depth c. Placing the crushing strain anywhere but the extreme fiber breaks the plane-sections-remain-plane assumption.",
    "image": "question_images/q_6103.png",
    "domain": "concrete_structures",
    "scenario_id": 61,
    "scenario_title": "Singly Reinforced Beam Strain Compatibility Diagram",
    "scenario_text": "A simply supported rectangular beam spans 24 ft with b = 14 in, d = 21.5 in, f'c = 4,000 psi, fy = 60,000 psi, reinforced with three No. 9 bars, As = 3.00 in^2. Calculations give a = 3.78 in, c = 4.45 in (beta1 = 0.85), epsilon_t = 0.0115, Mn = 294.2 kip-ft, and phi Mn = 264.8 kip-ft with phi = 0.90."
  },
  {
    "id": 6104,
    "type": "drag_and_drop_order",
    "question": "Arrange these steps in the correct order to determine whether the beam section is tension-controlled.",
    "items": [
      {
        "id": "s1",
        "text": "Compute the stress block depth a = As * fy / (0.85 * f'c * b)"
      },
      {
        "id": "s2",
        "text": "Compute the neutral axis depth c = a / beta1"
      },
      {
        "id": "s3",
        "text": "Compute the extreme tension steel strain epsilon_t = 0.003 * (d - c) / c"
      },
      {
        "id": "s4",
        "text": "Compare epsilon_t to 0.005 to select the phi factor"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4"
    ],
    "explanation": "The correct answer is the order a, then c, then epsilon_t, then the phi comparison: equilibrium first fixes the stress block depth a, geometry then converts a to the neutral axis c through beta1, strain compatibility then converts c to the steel strain epsilon_t, and only then can epsilon_t be checked against the 0.005 tension-controlled limit. Skipping straight to assuming phi = 0.90 without this chain is exactly the shortcut that fails on over-reinforced sections. Each step depends algebraically on the one before it, so the order cannot be rearranged.",
    "domain": "concrete_structures",
    "scenario_id": 61,
    "scenario_title": "Singly Reinforced Beam Strain Compatibility Diagram",
    "scenario_text": "A simply supported rectangular beam spans 24 ft with b = 14 in, d = 21.5 in, f'c = 4,000 psi, fy = 60,000 psi, reinforced with three No. 9 bars, As = 3.00 in^2. Calculations give a = 3.78 in, c = 4.45 in (beta1 = 0.85), epsilon_t = 0.0115, Mn = 294.2 kip-ft, and phi Mn = 264.8 kip-ft with phi = 0.90."
  },
  {
    "id": 6105,
    "type": "drag_and_drop_position",
    "question": "Drag each label to its correct region on the beam cross-section.",
    "image_description": "The same beam cross-section, now shown as three shaded bands: a band near the top representing the compression zone, a thin line at the c depth representing the neutral axis, and a band near the bottom representing the tension steel level.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Compression zone (concrete)"
      },
      {
        "id": "d2",
        "label": "Neutral axis"
      },
      {
        "id": "d3",
        "label": "Tension steel, As"
      }
    ],
    "drop_zones": [
      {
        "id": "za",
        "x": 0.5,
        "y": 0.15,
        "w": 0.4,
        "h": 0.1
      },
      {
        "id": "zb",
        "x": 0.5,
        "y": 0.3,
        "w": 0.4,
        "h": 0.06
      },
      {
        "id": "zc",
        "x": 0.5,
        "y": 0.75,
        "w": 0.4,
        "h": 0.06
      }
    ],
    "correct": {
      "za": "d1",
      "zb": "d2",
      "zc": "d3"
    },
    "explanation": "The correct answer is compression zone at top, neutral axis at the mid-band line, and tension steel at the bottom band: the top region above the neutral axis carries concrete compression stress, the neutral axis at c = 4.45 in is the strain-zero boundary, and the tension steel at d = 21.5 in carries the tension force As * fy. This layout mirrors the strain compatibility diagram used to derive epsilon_t = 0.0115 for this section.",
    "image": "question_images/q_6105.png",
    "domain": "concrete_structures",
    "scenario_id": 61,
    "scenario_title": "Singly Reinforced Beam Strain Compatibility Diagram",
    "scenario_text": "A simply supported rectangular beam spans 24 ft with b = 14 in, d = 21.5 in, f'c = 4,000 psi, fy = 60,000 psi, reinforced with three No. 9 bars, As = 3.00 in^2. Calculations give a = 3.78 in, c = 4.45 in (beta1 = 0.85), epsilon_t = 0.0115, Mn = 294.2 kip-ft, and phi Mn = 264.8 kip-ft with phi = 0.90."
  },
  {
    "id": 6106,
    "type": "drag_and_drop_position",
    "question": "Drag each phi factor label to its correct zone on a plot of phi versus extreme tension steel strain, epsilon_t.",
    "image_description": "A horizontal plot with epsilon_t increasing left to right from 0 to about 0.008. Three shaded zones are shown left to right: a zone from 0 to 0.002, a middle zone from 0.002 to 0.005, and a zone from 0.005 upward.",
    "drag_items": [
      {
        "id": "d1",
        "label": "phi = 0.65 (compression-controlled)"
      },
      {
        "id": "d2",
        "label": "Linear transition, phi between 0.65 and 0.90"
      },
      {
        "id": "d3",
        "label": "phi = 0.90 (tension-controlled)"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.25,
        "y": 0.5,
        "w": 0.15,
        "h": 0.3
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.5,
        "w": 0.25,
        "h": 0.3
      },
      {
        "id": "z3",
        "x": 0.78,
        "y": 0.5,
        "w": 0.2,
        "h": 0.3
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct answer is phi = 0.65 for epsilon_t at or below 0.002, the linear transition for epsilon_t between 0.002 and 0.005, and phi = 0.90 for epsilon_t at or above 0.005: this beam's epsilon_t of 0.0115 lands well inside the tension-controlled zone, confirming phi = 0.90 is correct for the worked example. ACI 318-14 defines this transition to reward ductile, steel-yielding failure modes with a higher strength reduction factor. Using phi = 0.90 without checking epsilon_t against these limits risks overstating capacity for a compression-controlled or transition section.",
    "image": "question_images/q_6106.png",
    "domain": "concrete_structures",
    "scenario_id": 61,
    "scenario_title": "Singly Reinforced Beam Strain Compatibility Diagram",
    "scenario_text": "A simply supported rectangular beam spans 24 ft with b = 14 in, d = 21.5 in, f'c = 4,000 psi, fy = 60,000 psi, reinforced with three No. 9 bars, As = 3.00 in^2. Calculations give a = 3.78 in, c = 4.45 in (beta1 = 0.85), epsilon_t = 0.0115, Mn = 294.2 kip-ft, and phi Mn = 264.8 kip-ft with phi = 0.90."
  },
  {
    "id": 6201,
    "type": "point_and_click",
    "question": "On the shear diagram along the beam's half-span, click the region closest to the support where designed shear reinforcement (Vs required by calculation) governs.",
    "image_description": "A beam elevation from the left support to midspan, 10 ft long. Three shaded regions are marked left to right along the beam length: a region nearest the support, a middle region, and a region nearest midspan.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.25649999999999995,
        "y": 0.5,
        "w": 0.33,
        "h": 0.15
      },
      {
        "id": "z2",
        "x": 0.58825,
        "y": 0.5,
        "w": 0.2,
        "h": 0.15
      },
      {
        "id": "z3",
        "x": 0.8,
        "y": 0.5,
        "w": 0.2,
        "h": 0.15
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the region nearest the support, from the support out to about 4.6 ft: here Vu exceeds phi Vc = 22.77 kips, so stirrups must be designed by calculation using Vs = Vu/phi - Vc, per ACI 318-14 Chapter 22. Beyond this region the demand drops below phi Vc and only minimum or no reinforcement is required. Since Vu decreases linearly toward midspan on a uniformly loaded span, this designed zone is always adjacent to the support.",
    "image": "question_images/q_6201.png",
    "domain": "concrete_structures",
    "scenario_id": 62,
    "scenario_title": "Beam Shear Design and Stirrup Zones",
    "scenario_text": "A simply supported beam with a 20 ft span and uniform load has bw = 12 in, d = 20 in, f'c = 4,000 psi, fy = 60,000 psi, and No. 3 double-leg stirrups (Av = 0.22 in^2). At the support, Vu = 42 kips. Calculations give Vc = 30.36 kips, phi Vc = 22.77 kips, and phi Vc / 2 = 11.39 kips. The shear diagram is linear, dropping from 42 kips at the support to zero at midspan, 10 ft away."
  },
  {
    "id": 6202,
    "type": "point_and_click",
    "question": "On the same shear diagram, click the region where minimum stirrup reinforcement governs rather than a calculated Vs.",
    "image_description": "Same beam elevation and three shaded regions as the previous item.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.25649999999999995,
        "y": 0.5,
        "w": 0.33,
        "h": 0.15
      },
      {
        "id": "z2",
        "x": 0.58825,
        "y": 0.5,
        "w": 0.2,
        "h": 0.15
      },
      {
        "id": "z3",
        "x": 0.8,
        "y": 0.5,
        "w": 0.2,
        "h": 0.15
      }
    ],
    "correct": "z2",
    "explanation": "The correct answer is the middle region, roughly 4.6 ft to 7.3 ft from the support: here Vu falls between phi Vc / 2 = 11.39 kips and phi Vc = 22.77 kips, so ACI 318-14 requires at least minimum shear reinforcement even though no calculated Vs is needed. This zone protects against the sudden, brittle shear failure that can occur even in lightly stressed sections. It sits between the designed zone near the support and the no-stirrup zone near midspan.",
    "image": "question_images/q_6202.png",
    "domain": "concrete_structures",
    "scenario_id": 62,
    "scenario_title": "Beam Shear Design and Stirrup Zones",
    "scenario_text": "A simply supported beam with a 20 ft span and uniform load has bw = 12 in, d = 20 in, f'c = 4,000 psi, fy = 60,000 psi, and No. 3 double-leg stirrups (Av = 0.22 in^2). At the support, Vu = 42 kips. Calculations give Vc = 30.36 kips, phi Vc = 22.77 kips, and phi Vc / 2 = 11.39 kips. The shear diagram is linear, dropping from 42 kips at the support to zero at midspan, 10 ft away."
  },
  {
    "id": 6203,
    "type": "point_and_click",
    "question": "On the same shear diagram, click the region closest to midspan where no stirrups are required at all.",
    "image_description": "Same beam elevation and three shaded regions as the previous items.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.25649999999999995,
        "y": 0.5,
        "w": 0.33,
        "h": 0.15
      },
      {
        "id": "z2",
        "x": 0.58825,
        "y": 0.5,
        "w": 0.2,
        "h": 0.15
      },
      {
        "id": "z3",
        "x": 0.8,
        "y": 0.5,
        "w": 0.2,
        "h": 0.15
      }
    ],
    "correct": "z3",
    "explanation": "The correct answer is the region nearest midspan, beyond about 7.3 ft from the support: here Vu has dropped below phi Vc / 2 = 11.39 kips, the ACI 318-14 threshold below which stirrups can be omitted entirely for a normal beam. This is the region farthest from the support because shear demand decreases toward midspan under uniform load. Omitting stirrups is only valid where this threshold check has actually been performed, not just assumed near midspan.",
    "image": "question_images/q_6203.png",
    "domain": "concrete_structures",
    "scenario_id": 62,
    "scenario_title": "Beam Shear Design and Stirrup Zones",
    "scenario_text": "A simply supported beam with a 20 ft span and uniform load has bw = 12 in, d = 20 in, f'c = 4,000 psi, fy = 60,000 psi, and No. 3 double-leg stirrups (Av = 0.22 in^2). At the support, Vu = 42 kips. Calculations give Vc = 30.36 kips, phi Vc = 22.77 kips, and phi Vc / 2 = 11.39 kips. The shear diagram is linear, dropping from 42 kips at the support to zero at midspan, 10 ft away."
  },
  {
    "id": 6204,
    "type": "drag_and_drop_order",
    "question": "Arrange these steps in the correct order to determine the required stirrup spacing at the critical section.",
    "items": [
      {
        "id": "s1",
        "text": "Calculate Vc = 2 * lambda * sqrt(f'c) * bw * d"
      },
      {
        "id": "s2",
        "text": "Compare phi * Vc to Vu to determine if stirrups are required"
      },
      {
        "id": "s3",
        "text": "Calculate Vs required = Vu / phi - Vc"
      },
      {
        "id": "s4",
        "text": "Calculate spacing s = Av * fy * d / Vs"
      },
      {
        "id": "s5",
        "text": "Check the calculated spacing against the maximum spacing limit and use the smaller value"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4",
      "s5"
    ],
    "explanation": "The correct answer is Vc, then the phi Vc comparison, then Vs, then spacing, then the maximum spacing check: Vc must be known before it can be compared to Vu, that comparison determines whether Vs is even needed, Vs then feeds directly into the spacing formula, and the resulting spacing must always be checked against the code maximum. In the worked example this last check governs, since the calculated 10.3 in exceeds the 10 in maximum (d/2), so the final spacing used is 10 in. Skipping the final comparison and reporting the calculated spacing directly is a common exam trap.",
    "domain": "concrete_structures",
    "scenario_id": 62,
    "scenario_title": "Beam Shear Design and Stirrup Zones",
    "scenario_text": "A simply supported beam with a 20 ft span and uniform load has bw = 12 in, d = 20 in, f'c = 4,000 psi, fy = 60,000 psi, and No. 3 double-leg stirrups (Av = 0.22 in^2). At the support, Vu = 42 kips. Calculations give Vc = 30.36 kips, phi Vc = 22.77 kips, and phi Vc / 2 = 11.39 kips. The shear diagram is linear, dropping from 42 kips at the support to zero at midspan, 10 ft away."
  },
  {
    "id": 6205,
    "type": "drag_and_drop_position",
    "question": "Drag each label to its correct position on the shear-versus-distance plot.",
    "image_description": "A plot with distance from the support on the horizontal axis and shear force on the vertical axis, 0 at the bottom and 42 kips at the top. A diagonal line runs from 42 kips at the support down to zero at midspan. Two horizontal dashed reference lines cross the diagonal at two different heights.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Vu (factored shear demand line)"
      },
      {
        "id": "d2",
        "label": "phi * Vc = 22.77 kips"
      },
      {
        "id": "d3",
        "label": "phi * Vc / 2 = 11.39 kips"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.2,
        "y": 0.2,
        "w": 0.12,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.6,
        "y": 0.471,
        "w": 0.2,
        "h": 0.06
      },
      {
        "id": "z3",
        "x": 0.6,
        "y": 0.66,
        "w": 0.2,
        "h": 0.06
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct answer is the sloped line near the support labeled Vu, the higher dashed line at phi Vc, and the lower dashed line at phi Vc / 2: the diagonal Vu line represents demand decreasing linearly from the support to midspan, while the two horizontal thresholds divide the beam into the designed, minimum, and no-stirrup zones. The higher threshold, phi Vc, is always above phi Vc / 2 by definition. Reading these crossing points correctly is exactly how the three shear zones in the earlier items were located.",
    "image": "question_images/q_6205.png",
    "domain": "concrete_structures",
    "scenario_id": 62,
    "scenario_title": "Beam Shear Design and Stirrup Zones",
    "scenario_text": "A simply supported beam with a 20 ft span and uniform load has bw = 12 in, d = 20 in, f'c = 4,000 psi, fy = 60,000 psi, and No. 3 double-leg stirrups (Av = 0.22 in^2). At the support, Vu = 42 kips. Calculations give Vc = 30.36 kips, phi Vc = 22.77 kips, and phi Vc / 2 = 11.39 kips. The shear diagram is linear, dropping from 42 kips at the support to zero at midspan, 10 ft away."
  },
  {
    "id": 6206,
    "type": "drag_and_drop_position",
    "question": "Drag each label to its correct location on the stirrup detail elevation.",
    "image_description": "A close-up beam elevation showing two adjacent closed stirrups with a dimension line between them, and longitudinal bars running along the bottom of the beam beneath the stirrups.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Stirrup spacing, s"
      },
      {
        "id": "d2",
        "label": "Stirrup leg (No. 3 bar)"
      },
      {
        "id": "d3",
        "label": "Longitudinal tension steel"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.5,
        "y": 0.3,
        "w": 0.3,
        "h": 0.06
      },
      {
        "id": "z2",
        "x": 0.35,
        "y": 0.55,
        "w": 0.06,
        "h": 0.25
      },
      {
        "id": "z3",
        "x": 0.5,
        "y": 0.85,
        "w": 0.4,
        "h": 0.06
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct answer is the dimension line between stirrups for spacing s, the vertical bar for the stirrup leg, and the bottom bars for longitudinal tension steel: spacing s = Av * fy * d / Vs is measured center-to-center along the beam axis between stirrup legs, while the longitudinal steel runs perpendicular to the stirrups along the tension face. In this example s calculates to 10.3 in but is governed down to the 10 in maximum spacing limit. Confusing spacing with stirrup leg width is a common misread of this type of detail.",
    "image": "question_images/q_6206.png",
    "domain": "concrete_structures",
    "scenario_id": 62,
    "scenario_title": "Beam Shear Design and Stirrup Zones",
    "scenario_text": "A simply supported beam with a 20 ft span and uniform load has bw = 12 in, d = 20 in, f'c = 4,000 psi, fy = 60,000 psi, and No. 3 double-leg stirrups (Av = 0.22 in^2). At the support, Vu = 42 kips. Calculations give Vc = 30.36 kips, phi Vc = 22.77 kips, and phi Vc / 2 = 11.39 kips. The shear diagram is linear, dropping from 42 kips at the support to zero at midspan, 10 ft away."
  },
  {
    "id": 6301,
    "type": "point_and_click",
    "question": "On the plan view of the interior column, click the location of the critical section for punching shear, d/2 from the column face.",
    "image_description": "A plan view showing a square interior column at the center of a flat plate slab. Moving outward from the column's right face along the centerline, four reference marks are shown in order of increasing distance: at the column face, slightly beyond it, farther beyond it, and near the far slab edge.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.62,
        "y": 0.5,
        "w": 0.05,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.55,
        "y": 0.5,
        "w": 0.05,
        "h": 0.08
      },
      {
        "id": "z3",
        "x": 0.7,
        "y": 0.5,
        "w": 0.05,
        "h": 0.08
      },
      {
        "id": "z4",
        "x": 0.88,
        "y": 0.5,
        "w": 0.06,
        "h": 0.08
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the mark just beyond the column face, at d/2 = 3.5 in out: ACI 318-14 Chapter 22 defines the punching shear critical section at this distance, forming a square perimeter that follows the column shape and gives bo = 100 in for this 18 in square column. Marking the section directly at the column face understates the perimeter and overstates the shear stress. Marking it at a full d or farther out is a distinct, non-code distance used only for one-way shear checks, not punching shear.",
    "image": "question_images/q_6301.png",
    "domain": "concrete_structures",
    "scenario_id": 63,
    "scenario_title": "Flat Plate Punching Shear at an Interior Column",
    "scenario_text": "A flat plate slab has effective depth d = 7 in and is supported on an 18 in square interior column, f'c = 4,000 psi. The critical section for two-way (punching) shear is located d/2 = 3.5 in from each column face, forming a square with side 25 in and perimeter bo = 100 in. For an interior column with beta = 1.0, Vc = 4 * lambda * sqrt(f'c) * bo * d = 177.1 kips and phi Vc = 132.8 kips."
  },
  {
    "id": 6302,
    "type": "point_and_click",
    "question": "On this plan showing three column conditions, click the edge column, where the punching shear location factor alpha_s = 30 applies.",
    "image_description": "A slab plan view with three column markers: one fully surrounded by slab in the interior, one located along a continuous slab edge with the critical perimeter open on the exterior side, and one at a slab corner with the critical perimeter open on two sides.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.3,
        "y": 0.3,
        "w": 0.1,
        "h": 0.1
      },
      {
        "id": "z2",
        "x": 0.3,
        "y": 0.85,
        "w": 0.1,
        "h": 0.1
      },
      {
        "id": "z3",
        "x": 0.85,
        "y": 0.85,
        "w": 0.1,
        "h": 0.1
      }
    ],
    "correct": "z2",
    "explanation": "The correct answer is the column along the slab edge: ACI 318-14 assigns alpha_s = 30 to edge columns, compared to 40 for interior columns and 20 for corner columns, reflecting the reduced critical perimeter and shear distribution available when the column is not fully surrounded by slab. A smaller alpha_s lowers the Vc equation that includes this factor, so edge and corner columns can govern punching shear even on an otherwise straightforward flat plate. Treating an edge column with the interior alpha_s of 40 overstates its punching capacity.",
    "image": "question_images/q_6302.png",
    "domain": "concrete_structures",
    "scenario_id": 63,
    "scenario_title": "Flat Plate Punching Shear at an Interior Column",
    "scenario_text": "A flat plate slab has effective depth d = 7 in and is supported on an 18 in square interior column, f'c = 4,000 psi. The critical section for two-way (punching) shear is located d/2 = 3.5 in from each column face, forming a square with side 25 in and perimeter bo = 100 in. For an interior column with beta = 1.0, Vc = 4 * lambda * sqrt(f'c) * bo * d = 177.1 kips and phi Vc = 132.8 kips."
  },
  {
    "id": 6303,
    "type": "point_and_click",
    "question": "On the same plan, click the corner column, where alpha_s = 20 applies.",
    "image_description": "Same slab plan view and three column markers as the previous item.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.3,
        "y": 0.3,
        "w": 0.1,
        "h": 0.1
      },
      {
        "id": "z2",
        "x": 0.3,
        "y": 0.85,
        "w": 0.1,
        "h": 0.1
      },
      {
        "id": "z3",
        "x": 0.85,
        "y": 0.85,
        "w": 0.1,
        "h": 0.1
      }
    ],
    "correct": "z3",
    "explanation": "The correct answer is the column at the slab corner: alpha_s = 20 applies here because the critical perimeter is open on two adjacent sides, giving the smallest bo and location factor of the three conditions. Corner columns are the most likely of the three to have punching shear govern the slab depth, even though they carry the smallest tributary load, because both bo and alpha_s work against them simultaneously. This is why ACI 318-14 requires checking all three governing Vc equations rather than assuming the interior case applies everywhere.",
    "image": "question_images/q_6303.png",
    "domain": "concrete_structures",
    "scenario_id": 63,
    "scenario_title": "Flat Plate Punching Shear at an Interior Column",
    "scenario_text": "A flat plate slab has effective depth d = 7 in and is supported on an 18 in square interior column, f'c = 4,000 psi. The critical section for two-way (punching) shear is located d/2 = 3.5 in from each column face, forming a square with side 25 in and perimeter bo = 100 in. For an interior column with beta = 1.0, Vc = 4 * lambda * sqrt(f'c) * bo * d = 177.1 kips and phi Vc = 132.8 kips."
  },
  {
    "id": 6304,
    "type": "drag_and_drop_order",
    "question": "Arrange these steps in the correct order for a two-way (punching) shear check per ACI 318-14.",
    "items": [
      {
        "id": "s1",
        "text": "Locate the critical section at d/2 from the column face"
      },
      {
        "id": "s2",
        "text": "Compute the critical perimeter, bo"
      },
      {
        "id": "s3",
        "text": "Compute Vc from the three governing equations and take the smallest"
      },
      {
        "id": "s4",
        "text": "Compute phi * Vc"
      },
      {
        "id": "s5",
        "text": "Compare phi * Vc to the factored shear transferred to the column, Vu"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4",
      "s5"
    ],
    "explanation": "The correct answer is locate the section, find bo, compute the governing Vc, apply phi, then compare to Vu: bo cannot be measured until the critical section location is fixed, and Vc depends directly on bo, so each step supplies an input the next step needs. Skipping ahead to compare Vu against an assumed Vc without actually checking all three governing equations is the trap the chapter warns about for edge and corner columns. This sequence matches the worked example, which arrives at phi Vc = 132.8 kips for the interior column case.",
    "domain": "concrete_structures",
    "scenario_id": 63,
    "scenario_title": "Flat Plate Punching Shear at an Interior Column",
    "scenario_text": "A flat plate slab has effective depth d = 7 in and is supported on an 18 in square interior column, f'c = 4,000 psi. The critical section for two-way (punching) shear is located d/2 = 3.5 in from each column face, forming a square with side 25 in and perimeter bo = 100 in. For an interior column with beta = 1.0, Vc = 4 * lambda * sqrt(f'c) * bo * d = 177.1 kips and phi Vc = 132.8 kips."
  },
  {
    "id": 6305,
    "type": "drag_and_drop_order",
    "question": "Arrange these column conditions from largest to smallest punching shear location factor, alpha_s.",
    "items": [
      {
        "id": "s1",
        "text": "Interior column, alpha_s = 40"
      },
      {
        "id": "s2",
        "text": "Edge column, alpha_s = 30"
      },
      {
        "id": "s3",
        "text": "Corner column, alpha_s = 20"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3"
    ],
    "explanation": "The correct answer is interior, then edge, then corner: alpha_s decreases as the column has less slab surrounding it to distribute shear, from 40 for a fully interior condition down to 20 at a corner. This factor directly lowers the alpha_s-based Vc equation, which is one of the three equations that must be checked and the smallest of which governs. An edge or corner column can therefore fail punching shear even when an identical interior column with the same load would pass.",
    "domain": "concrete_structures",
    "scenario_id": 63,
    "scenario_title": "Flat Plate Punching Shear at an Interior Column",
    "scenario_text": "A flat plate slab has effective depth d = 7 in and is supported on an 18 in square interior column, f'c = 4,000 psi. The critical section for two-way (punching) shear is located d/2 = 3.5 in from each column face, forming a square with side 25 in and perimeter bo = 100 in. For an interior column with beta = 1.0, Vc = 4 * lambda * sqrt(f'c) * bo * d = 177.1 kips and phi Vc = 132.8 kips."
  },
  {
    "id": 6306,
    "type": "drag_and_drop_position",
    "question": "Drag each label to its correct location on the interior column plan.",
    "image_description": "A plan view of the interior column with the column face, the critical punching shear perimeter, and the slab edge each marked along the centerline moving outward from the column.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Column face"
      },
      {
        "id": "d2",
        "label": "Critical perimeter, bo (d/2 out)"
      },
      {
        "id": "d3",
        "label": "Slab edge"
      }
    ],
    "drop_zones": [
      {
        "id": "z_face",
        "x": 0.55,
        "y": 0.5,
        "w": 0.05,
        "h": 0.08
      },
      {
        "id": "z_perim",
        "x": 0.62,
        "y": 0.5,
        "w": 0.05,
        "h": 0.08
      },
      {
        "id": "z_edge",
        "x": 0.88,
        "y": 0.5,
        "w": 0.06,
        "h": 0.08
      }
    ],
    "correct": {
      "z_face": "d1",
      "z_perim": "d2",
      "z_edge": "d3"
    },
    "explanation": "The correct answer is column face closest in, the critical perimeter just beyond it at d/2, and the slab edge farthest out: this ordering matches the geometry used to derive bo = 100 in for the 18 in square interior column with d = 7 in. The critical perimeter is always closer to the column than the physical slab edge in a typical flat plate bay. Reversing the perimeter and slab edge would incorrectly suggest the punching check happens at the building's exterior rather than immediately around the column.",
    "image": "question_images/q_6306.png",
    "domain": "concrete_structures",
    "scenario_id": 63,
    "scenario_title": "Flat Plate Punching Shear at an Interior Column",
    "scenario_text": "A flat plate slab has effective depth d = 7 in and is supported on an 18 in square interior column, f'c = 4,000 psi. The critical section for two-way (punching) shear is located d/2 = 3.5 in from each column face, forming a square with side 25 in and perimeter bo = 100 in. For an interior column with beta = 1.0, Vc = 4 * lambda * sqrt(f'c) * bo * d = 177.1 kips and phi Vc = 132.8 kips."
  },
  {
    "id": 6401,
    "type": "point_and_click",
    "question": "On the interaction diagram, click the point representing pure axial compression capacity, phi Pn(max), at zero applied moment.",
    "image_description": "A plot with moment on the horizontal axis and axial load on the vertical axis. A curved line runs from a point near the top left, down through a point near the middle, to a point near the bottom right. A fourth point sits inside the curve at roughly mid-height.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.2,
        "y": 0.15,
        "w": 0.08,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.45,
        "w": 0.08,
        "h": 0.08
      },
      {
        "id": "z3",
        "x": 0.78,
        "y": 0.8,
        "w": 0.08,
        "h": 0.08
      },
      {
        "id": "z4",
        "x": 0.65,
        "y": 0.25,
        "w": 0.08,
        "h": 0.08
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the point at the top of the curve, near zero moment: this is the pure axial condition, where the strain of 0.003 is uniform across the section and phi = 0.65 for this tied column, giving phi Pn(max) = 797.7 kips. Every other point on the curve represents a neutral axis location that produces some combination of axial load and moment. A point below the curve, like the interior point shown, represents a safe combination, while a point above or outside the curve would be an invalid design.",
    "image": "question_images/q_6401.png",
    "domain": "concrete_structures",
    "scenario_id": 64,
    "scenario_title": "Tied Column Interaction Diagram Reading",
    "scenario_text": "A 16 in square tied column has f'c = 5,000 psi, fy = 60,000 psi, 8 No. 9 bars (As = 8.00 in^2), and Ag = 256 in^2. Pure axial capacity is phi Pn(max) = 797.7 kips at phi = 0.65. The interaction diagram runs from this pure axial point at the top, through a balanced point, down to pure flexure at the bottom where phi approaches 0.90."
  },
  {
    "id": 6402,
    "type": "point_and_click",
    "question": "On the same interaction diagram, click the balanced failure point, where concrete crushing and steel yielding occur simultaneously.",
    "image_description": "Same interaction diagram plot as the previous item.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.2,
        "y": 0.15,
        "w": 0.08,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.45,
        "w": 0.08,
        "h": 0.08
      },
      {
        "id": "z3",
        "x": 0.78,
        "y": 0.8,
        "w": 0.08,
        "h": 0.08
      },
      {
        "id": "z4",
        "x": 0.65,
        "y": 0.25,
        "w": 0.08,
        "h": 0.08
      }
    ],
    "correct": "z2",
    "explanation": "The correct answer is the middle point on the curve: the balanced point marks the transition between compression-controlled behavior above it and tension-controlled behavior below it, and is the point where phi begins its linear increase from 0.65 toward 0.90. Columns loaded above the balanced point on the curve fail by concrete crushing before the steel yields, while columns loaded below it fail in a more ductile, steel-yielding manner. Correctly identifying this point is necessary before applying the correct phi factor to any column load combination.",
    "image": "question_images/q_6402.png",
    "domain": "concrete_structures",
    "scenario_id": 64,
    "scenario_title": "Tied Column Interaction Diagram Reading",
    "scenario_text": "A 16 in square tied column has f'c = 5,000 psi, fy = 60,000 psi, 8 No. 9 bars (As = 8.00 in^2), and Ag = 256 in^2. Pure axial capacity is phi Pn(max) = 797.7 kips at phi = 0.65. The interaction diagram runs from this pure axial point at the top, through a balanced point, down to pure flexure at the bottom where phi approaches 0.90."
  },
  {
    "id": 6403,
    "type": "point_and_click",
    "question": "On the same interaction diagram, click the point representing pure flexural capacity, where axial load approaches zero and phi approaches 0.90.",
    "image_description": "Same interaction diagram plot as the previous items.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.2,
        "y": 0.15,
        "w": 0.08,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.45,
        "w": 0.08,
        "h": 0.08
      },
      {
        "id": "z3",
        "x": 0.78,
        "y": 0.8,
        "w": 0.08,
        "h": 0.08
      },
      {
        "id": "z4",
        "x": 0.65,
        "y": 0.25,
        "w": 0.08,
        "h": 0.08
      }
    ],
    "correct": "z3",
    "explanation": "The correct answer is the point at the bottom right of the curve: at this end the section behaves essentially like a beam, with axial load near zero and the extreme tension steel strain well into the tension-controlled range, so phi approaches 0.90. This is the mirror image of the pure axial point at the top, where phi is only 0.65. Moving along the curve from top to bottom traces the full range of phi from 0.65 up through the transition zone to 0.90.",
    "image": "question_images/q_6403.png",
    "domain": "concrete_structures",
    "scenario_id": 64,
    "scenario_title": "Tied Column Interaction Diagram Reading",
    "scenario_text": "A 16 in square tied column has f'c = 5,000 psi, fy = 60,000 psi, 8 No. 9 bars (As = 8.00 in^2), and Ag = 256 in^2. Pure axial capacity is phi Pn(max) = 797.7 kips at phi = 0.65. The interaction diagram runs from this pure axial point at the top, through a balanced point, down to pure flexure at the bottom where phi approaches 0.90."
  },
  {
    "id": 6404,
    "type": "drag_and_drop_position",
    "question": "Drag each phi factor label to its correct zone on the interaction diagram.",
    "image_description": "The same interaction diagram, divided into three shaded zones from top to bottom along the curve: a zone near the top, a middle band around the balanced point, and a zone near the bottom.",
    "drag_items": [
      {
        "id": "d1",
        "label": "phi = 0.65"
      },
      {
        "id": "d2",
        "label": "Transition, phi between 0.65 and 0.90"
      },
      {
        "id": "d3",
        "label": "phi = 0.90"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.25,
        "y": 0.2,
        "w": 0.15,
        "h": 0.15
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.45,
        "w": 0.15,
        "h": 0.15
      },
      {
        "id": "z3",
        "x": 0.75,
        "y": 0.75,
        "w": 0.15,
        "h": 0.15
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct answer is phi = 0.65 near the top, the transition band around the balanced point, and phi = 0.90 near the bottom: this matches the compression-controlled, transition, and tension-controlled zones defined in ACI 318-14 for tied columns. The 797.7 kip pure axial capacity in this problem is computed using phi = 0.65 precisely because it sits in the top zone. Applying phi = 0.90 anywhere above the balanced point would overstate the column's factored capacity.",
    "image": "question_images/q_6404.png",
    "domain": "concrete_structures",
    "scenario_id": 64,
    "scenario_title": "Tied Column Interaction Diagram Reading",
    "scenario_text": "A 16 in square tied column has f'c = 5,000 psi, fy = 60,000 psi, 8 No. 9 bars (As = 8.00 in^2), and Ag = 256 in^2. Pure axial capacity is phi Pn(max) = 797.7 kips at phi = 0.65. The interaction diagram runs from this pure axial point at the top, through a balanced point, down to pure flexure at the bottom where phi approaches 0.90."
  },
  {
    "id": 6405,
    "type": "drag_and_drop_order",
    "question": "Arrange these interaction diagram zones in order from the top of the curve to the bottom.",
    "items": [
      {
        "id": "s1",
        "text": "Pure axial compression (zero moment)"
      },
      {
        "id": "s2",
        "text": "Compression-controlled zone"
      },
      {
        "id": "s3",
        "text": "Balanced point"
      },
      {
        "id": "s4",
        "text": "Transition zone"
      },
      {
        "id": "s5",
        "text": "Tension-controlled / pure flexure (zero axial load)"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4",
      "s5"
    ],
    "explanation": "The correct answer is pure axial at the top, then compression-controlled, then the balanced point, then transition, then pure flexure at the bottom: this traces the interaction curve from its highest axial load point down to its highest moment point, exactly the order in which the neutral axis moves from a fully compressed section toward a fully tension-controlled one. The phi factor changes continuously along this same path, from 0.65 at the top to 0.90 at the bottom. Any load combination that reads correctly against this ordering can be checked directly against the handbook's pre-built interaction chart.",
    "domain": "concrete_structures",
    "scenario_id": 64,
    "scenario_title": "Tied Column Interaction Diagram Reading",
    "scenario_text": "A 16 in square tied column has f'c = 5,000 psi, fy = 60,000 psi, 8 No. 9 bars (As = 8.00 in^2), and Ag = 256 in^2. Pure axial capacity is phi Pn(max) = 797.7 kips at phi = 0.65. The interaction diagram runs from this pure axial point at the top, through a balanced point, down to pure flexure at the bottom where phi approaches 0.90."
  },
  {
    "id": 6406,
    "type": "drag_and_drop_position",
    "question": "Drag each phi value to the correct interaction diagram in this side-by-side comparison.",
    "image_description": "Two interaction diagrams shown side by side for otherwise identical columns, one tied and one spiral. The spiral column's curve starts slightly higher at its top point than the tied column's curve.",
    "drag_items": [
      {
        "id": "d1",
        "label": "phi = 0.65"
      },
      {
        "id": "d2",
        "label": "phi = 0.75"
      }
    ],
    "drop_zones": [
      {
        "id": "z_tied",
        "x": 0.3,
        "y": 0.15,
        "w": 0.15,
        "h": 0.08
      },
      {
        "id": "z_spiral",
        "x": 0.7,
        "y": 0.12,
        "w": 0.15,
        "h": 0.08
      }
    ],
    "correct": {
      "z_tied": "d1",
      "z_spiral": "d2"
    },
    "explanation": "The correct answer is phi = 0.65 at the top of the tied column curve and phi = 0.75 at the top of the spiral column curve: ACI 318-14 rewards the better confinement provided by spiral (or circular hoop) reinforcement with a 0.10 higher compression-controlled phi factor than tied columns. This difference applies specifically at the compression-controlled end of the curve and follows the same transition shape up to 0.90 for both column types. This 0.10 phi difference is one of the most frequently tested facts in column design.",
    "image": "question_images/q_6406.png",
    "domain": "concrete_structures",
    "scenario_id": 64,
    "scenario_title": "Tied Column Interaction Diagram Reading",
    "scenario_text": "A 16 in square tied column has f'c = 5,000 psi, fy = 60,000 psi, 8 No. 9 bars (As = 8.00 in^2), and Ag = 256 in^2. Pure axial capacity is phi Pn(max) = 797.7 kips at phi = 0.65. The interaction diagram runs from this pure axial point at the top, through a balanced point, down to pure flexure at the bottom where phi approaches 0.90."
  },
  {
    "id": 6501,
    "type": "point_and_click",
    "question": "On the wall elevation, click the location where a special boundary element is required for this load direction.",
    "image_description": "A rectangular wall elevation, 20 ft long and 10 ft tall, drawn as one story. Four regions are marked: the lower left corner, the lower right corner, the central lower-middle panel area, and the top center of the wall.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.15,
        "y": 0.75,
        "w": 0.12,
        "h": 0.15
      },
      {
        "id": "z2",
        "x": 0.88,
        "y": 0.75,
        "w": 0.12,
        "h": 0.15
      },
      {
        "id": "z3",
        "x": 0.469,
        "y": 0.5,
        "w": 0.4,
        "h": 0.35
      },
      {
        "id": "z4",
        "x": 0.5,
        "y": 0.12,
        "w": 0.4,
        "h": 0.1
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the lower left corner of the wall: this is the compression toe under the governing seismic combination in the direction described, where the compressive stress or neutral axis depth check triggers a special boundary element per ACI 318-14 Chapter 18. Special boundary elements provide concentrated longitudinal reinforcement and tightly spaced transverse confinement to prevent concrete crushing and bar buckling at this highly stressed corner. Because seismic loading reverses direction, the opposite end of the wall requires the same detailing for the reversed load case, but only this end governs for the direction given here.",
    "image": "question_images/q_6501.png",
    "domain": "concrete_structures",
    "scenario_id": 65,
    "scenario_title": "Special Reinforced Concrete Shear Wall Boundary Elements",
    "scenario_text": "A special reinforced concrete shear wall is 20 ft long, 12 in thick, with a 10 ft story height, resisting seismic in-plane shear and overturning per ACI 318-14 Chapter 18. Under the governing seismic load combination in the direction shown, the left end of the wall is in compression at its base and requires a special boundary element, while distributed web reinforcement carries shear across the panel between the two ends."
  },
  {
    "id": 6502,
    "type": "point_and_click",
    "question": "On the same wall elevation, click the location of the distributed web (vertical and horizontal) shear reinforcement.",
    "image_description": "Same wall elevation and four regions as the previous item.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.15,
        "y": 0.75,
        "w": 0.12,
        "h": 0.15
      },
      {
        "id": "z2",
        "x": 0.88,
        "y": 0.75,
        "w": 0.12,
        "h": 0.15
      },
      {
        "id": "z3",
        "x": 0.469,
        "y": 0.5,
        "w": 0.4,
        "h": 0.35
      },
      {
        "id": "z4",
        "x": 0.5,
        "y": 0.12,
        "w": 0.4,
        "h": 0.1
      }
    ],
    "correct": "z3",
    "explanation": "The correct answer is the central panel between the two boundary elements: this region carries in-plane shear and part of the flexural demand through distributed vertical and horizontal reinforcement spread uniformly across the panel, rather than concentrated at the ends. This web reinforcement is separate from and in addition to the concentrated longitudinal steel in the boundary elements. Under-reinforcing the web while over-focusing on the boundary elements is a common design oversight.",
    "image": "question_images/q_6502.png",
    "domain": "concrete_structures",
    "scenario_id": 65,
    "scenario_title": "Special Reinforced Concrete Shear Wall Boundary Elements",
    "scenario_text": "A special reinforced concrete shear wall is 20 ft long, 12 in thick, with a 10 ft story height, resisting seismic in-plane shear and overturning per ACI 318-14 Chapter 18. Under the governing seismic load combination in the direction shown, the left end of the wall is in compression at its base and requires a special boundary element, while distributed web reinforcement carries shear across the panel between the two ends."
  },
  {
    "id": 6503,
    "type": "point_and_click",
    "question": "On the same wall elevation, click the location where the wall connects to the floor diaphragm above to receive diaphragm shear.",
    "image_description": "Same wall elevation and four regions as the previous items.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.15,
        "y": 0.75,
        "w": 0.12,
        "h": 0.15
      },
      {
        "id": "z2",
        "x": 0.88,
        "y": 0.75,
        "w": 0.12,
        "h": 0.15
      },
      {
        "id": "z3",
        "x": 0.469,
        "y": 0.5,
        "w": 0.4,
        "h": 0.35
      },
      {
        "id": "z4",
        "x": 0.5,
        "y": 0.12,
        "w": 0.4,
        "h": 0.1
      }
    ],
    "correct": "z4",
    "explanation": "The correct answer is the top center of the wall: this is where the diaphragm delivers seismic shear into the wall, and the connection here must be designed to transfer the full collected diaphragm force without relying on friction alone. This connection works together with the wall's own in-plane shear design across the panel and the boundary element design at the ends to complete the full lateral load path. A weak link at this diaphragm-to-wall connection can govern the system even when the wall itself is adequately reinforced.",
    "image": "question_images/q_6503.png",
    "domain": "concrete_structures",
    "scenario_id": 65,
    "scenario_title": "Special Reinforced Concrete Shear Wall Boundary Elements",
    "scenario_text": "A special reinforced concrete shear wall is 20 ft long, 12 in thick, with a 10 ft story height, resisting seismic in-plane shear and overturning per ACI 318-14 Chapter 18. Under the governing seismic load combination in the direction shown, the left end of the wall is in compression at its base and requires a special boundary element, while distributed web reinforcement carries shear across the panel between the two ends."
  },
  {
    "id": 6504,
    "type": "drag_and_drop_position",
    "question": "Drag each label to its correct region on the wall elevation.",
    "image_description": "Same wall elevation with the compression toe, the web panel, and the top diaphragm connection region each marked.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Special boundary element (compression toe)"
      },
      {
        "id": "d2",
        "label": "Distributed web reinforcement"
      },
      {
        "id": "d3",
        "label": "Wall-to-diaphragm connection"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.15,
        "y": 0.75,
        "w": 0.12,
        "h": 0.15
      },
      {
        "id": "z3",
        "x": 0.5,
        "y": 0.5,
        "w": 0.4,
        "h": 0.35
      },
      {
        "id": "z4",
        "x": 0.5,
        "y": 0.12,
        "w": 0.4,
        "h": 0.1
      }
    ],
    "correct": {
      "z1": "d1",
      "z3": "d2",
      "z4": "d3"
    },
    "explanation": "The correct answer is the special boundary element at the compression toe, web reinforcement across the panel, and the diaphragm connection at the top: together these three elements complete the seismic force path from the roof or floor diaphragm, through the wall panel, down to the foundation at the compression toe. Each element resists a distinct type of demand, axial-flexural at the boundary, shear across the panel, and force transfer at the diaphragm connection. Missing any one of the three creates a weak link regardless of how well the other two are designed.",
    "image": "question_images/q_6504.png",
    "domain": "concrete_structures",
    "scenario_id": 65,
    "scenario_title": "Special Reinforced Concrete Shear Wall Boundary Elements",
    "scenario_text": "A special reinforced concrete shear wall is 20 ft long, 12 in thick, with a 10 ft story height, resisting seismic in-plane shear and overturning per ACI 318-14 Chapter 18. Under the governing seismic load combination in the direction shown, the left end of the wall is in compression at its base and requires a special boundary element, while distributed web reinforcement carries shear across the panel between the two ends."
  },
  {
    "id": 6505,
    "type": "drag_and_drop_order",
    "question": "Arrange these steps in the correct order for designing this special reinforced concrete shear wall.",
    "items": [
      {
        "id": "s1",
        "text": "Determine factored shear Vu and moment Mu from the seismic load combinations"
      },
      {
        "id": "s2",
        "text": "Check whether special boundary elements are required based on the neutral axis depth or compressive stress"
      },
      {
        "id": "s3",
        "text": "Design boundary element longitudinal reinforcement and transverse confinement"
      },
      {
        "id": "s4",
        "text": "Design distributed web shear reinforcement for Vu"
      },
      {
        "id": "s5",
        "text": "Check sliding shear and anchorage at construction joints"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4",
      "s5"
    ],
    "explanation": "The correct answer is demands first, then the boundary element check, then boundary element design, then web design, then the sliding shear and anchorage check: the factored demands from step one drive every check that follows, and whether boundary elements are even required must be known before they can be designed. Web reinforcement design for Vu and the final sliding shear and anchorage checks come after the primary flexural and boundary element design is set. Reversing this order risks designing web reinforcement or boundary elements against outdated or incomplete demand values.",
    "domain": "concrete_structures",
    "scenario_id": 65,
    "scenario_title": "Special Reinforced Concrete Shear Wall Boundary Elements",
    "scenario_text": "A special reinforced concrete shear wall is 20 ft long, 12 in thick, with a 10 ft story height, resisting seismic in-plane shear and overturning per ACI 318-14 Chapter 18. Under the governing seismic load combination in the direction shown, the left end of the wall is in compression at its base and requires a special boundary element, while distributed web reinforcement carries shear across the panel between the two ends."
  },
  {
    "id": 6506,
    "type": "drag_and_drop_order",
    "question": "Rank these three shear walls by aspect ratio (height-to-length, hw/lw), from most slender and flexure-controlled to most squat and shear-controlled.",
    "items": [
      {
        "id": "s1",
        "text": "hw/lw = 3.0 (slender, flexure-controlled)"
      },
      {
        "id": "s2",
        "text": "hw/lw = 1.5 (intermediate behavior)"
      },
      {
        "id": "s3",
        "text": "hw/lw = 0.5 (squat, shear-controlled)"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3"
    ],
    "explanation": "The correct answer is the tallest, most slender wall first, then the intermediate wall, then the shortest, squattest wall: as hw/lw decreases, a shear wall's behavior shifts away from beam-like flexural yielding and toward shear-dominated failure modes, which are generally less ductile. This aspect ratio is a key judgment call in deciding how much emphasis to place on flexural boundary element detailing versus shear reinforcement and sliding shear checks. Treating a squat wall's design the same as a slender wall's design ignores this fundamental behavioral difference.",
    "domain": "concrete_structures",
    "scenario_id": 65,
    "scenario_title": "Special Reinforced Concrete Shear Wall Boundary Elements",
    "scenario_text": "A special reinforced concrete shear wall is 20 ft long, 12 in thick, with a 10 ft story height, resisting seismic in-plane shear and overturning per ACI 318-14 Chapter 18. Under the governing seismic load combination in the direction shown, the left end of the wall is in compression at its base and requires a special boundary element, while distributed web reinforcement carries shear across the panel between the two ends."
  },
  {
    "id": 6601,
    "type": "point_and_click",
    "question": "On the girder elevation, click the location of the horizontal tension tie in the strut-and-tie model.",
    "image_description": "A girder elevation with two support columns at the bottom corners and a concentrated load applied at the top center. Two diagonal lines run from the load point down to each support, and a horizontal line runs along the bottom connecting the two supports.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.5,
        "y": 0.85,
        "w": 0.5,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.3,
        "y": 0.5,
        "w": 0.15,
        "h": 0.3
      },
      {
        "id": "z3",
        "x": 0.7,
        "y": 0.5,
        "w": 0.15,
        "h": 0.3
      },
      {
        "id": "z4",
        "x": 0.5,
        "y": 0.15,
        "w": 0.2,
        "h": 0.1
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the horizontal line along the bottom of the girder: this member acts as a tension tie carrying the horizontal component of the diagonal strut forces between the two supports, and requires straight, well-anchored longitudinal reinforcement since a tie cannot rely on concrete tension capacity. The tie force is found directly from statics once the strut geometry and applied load are known. Undersizing or poorly anchoring this tie is one of the most common strut-and-tie design failures because its reinforcement must develop full force at each nodal zone.",
    "image": "question_images/q_6601.png",
    "domain": "concrete_structures",
    "scenario_id": 66,
    "scenario_title": "Transfer Girder Strut-and-Tie Model",
    "scenario_text": "A concrete transfer girder spans 16 ft between two columns and supports a discontinued column above, delivering a concentrated factored load of 800 kips near midspan. The girder is 6 ft deep, giving a clear span-to-depth ratio less than 4, so it is designed as a deep beam using strut-and-tie modeling per ACI 318-14 Chapter 23, idealizing the load path as diagonal compression struts from the load point to each support and a horizontal tension tie along the bottom connecting the supports."
  },
  {
    "id": 6602,
    "type": "point_and_click",
    "question": "On the same girder elevation, click the location of a compression strut in the model.",
    "image_description": "Same girder elevation, load point, two diagonal lines, and bottom tie line as the previous item.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.5,
        "y": 0.85,
        "w": 0.5,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.3,
        "y": 0.5,
        "w": 0.15,
        "h": 0.3
      },
      {
        "id": "z3",
        "x": 0.7,
        "y": 0.5,
        "w": 0.15,
        "h": 0.3
      },
      {
        "id": "z4",
        "x": 0.5,
        "y": 0.15,
        "w": 0.2,
        "h": 0.1
      }
    ],
    "correct": "z2",
    "explanation": "The correct answer is one of the diagonal lines running from the load point down to a support: this member is a compression strut, an idealized concrete compression field carrying load directly from the applied point load to the support along the shortest practical path. Its capacity depends on an efficiency factor, beta_s, that accounts for how much the strut is disturbed by cracking or intersecting reinforcement. Both diagonal struts in this symmetric case carry equal force since the load is applied at midspan.",
    "image": "question_images/q_6602.png",
    "domain": "concrete_structures",
    "scenario_id": 66,
    "scenario_title": "Transfer Girder Strut-and-Tie Model",
    "scenario_text": "A concrete transfer girder spans 16 ft between two columns and supports a discontinued column above, delivering a concentrated factored load of 800 kips near midspan. The girder is 6 ft deep, giving a clear span-to-depth ratio less than 4, so it is designed as a deep beam using strut-and-tie modeling per ACI 318-14 Chapter 23, idealizing the load path as diagonal compression struts from the load point to each support and a horizontal tension tie along the bottom connecting the supports."
  },
  {
    "id": 6603,
    "type": "point_and_click",
    "question": "On the same girder elevation, click the nodal zone directly beneath the applied concentrated load, where bearing stress must be checked.",
    "image_description": "Same girder elevation, load point, two diagonal lines, and bottom tie line as the previous items.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.5,
        "y": 0.85,
        "w": 0.5,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.3,
        "y": 0.5,
        "w": 0.15,
        "h": 0.3
      },
      {
        "id": "z3",
        "x": 0.7,
        "y": 0.5,
        "w": 0.15,
        "h": 0.3
      },
      {
        "id": "z4",
        "x": 0.5,
        "y": 0.15,
        "w": 0.2,
        "h": 0.1
      }
    ],
    "correct": "z4",
    "explanation": "The correct answer is the region at the top center where the load is applied: this is a nodal zone where the applied load and the two diagonal struts meet, and ACI 318-14 requires checking the bearing stress on this node against a limiting value that depends on the node type (whether it connects only struts, or struts and ties). An undersized bearing area at this node can crush the concrete even if the struts and tie themselves are adequately sized. The two support nodes at the bottom corners require the same type of check where the struts meet the tie and the reaction.",
    "image": "question_images/q_6603.png",
    "domain": "concrete_structures",
    "scenario_id": 66,
    "scenario_title": "Transfer Girder Strut-and-Tie Model",
    "scenario_text": "A concrete transfer girder spans 16 ft between two columns and supports a discontinued column above, delivering a concentrated factored load of 800 kips near midspan. The girder is 6 ft deep, giving a clear span-to-depth ratio less than 4, so it is designed as a deep beam using strut-and-tie modeling per ACI 318-14 Chapter 23, idealizing the load path as diagonal compression struts from the load point to each support and a horizontal tension tie along the bottom connecting the supports."
  },
  {
    "id": 6604,
    "type": "drag_and_drop_position",
    "question": "Drag each label to its correct location on the strut-and-tie model.",
    "image_description": "Same girder elevation showing the horizontal tie, one diagonal strut, and the top nodal zone under the load.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Tension tie (requires anchored steel reinforcement)"
      },
      {
        "id": "d2",
        "label": "Compression strut"
      },
      {
        "id": "d3",
        "label": "Nodal zone (bearing stress check)"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.5,
        "y": 0.85,
        "w": 0.5,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.3,
        "y": 0.5,
        "w": 0.15,
        "h": 0.3
      },
      {
        "id": "z4",
        "x": 0.5,
        "y": 0.15,
        "w": 0.2,
        "h": 0.1
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z4": "d3"
    },
    "explanation": "The correct answer is the bottom horizontal member as the tie, the diagonal member as the strut, and the top region under the load as the nodal zone: these three element types, ties, struts, and nodes, are the complete vocabulary of a strut-and-tie model per ACI 318-14 Chapter 23. Each requires a distinct type of check, reinforcement anchorage for the tie, an efficiency-factored compressive stress limit for the strut, and a bearing stress limit for the node. A deep transfer girder like this one cannot be designed by ordinary sectional beam methods because plane sections do not remain plane at this span-to-depth ratio.",
    "image": "question_images/q_6604.png",
    "domain": "concrete_structures",
    "scenario_id": 66,
    "scenario_title": "Transfer Girder Strut-and-Tie Model",
    "scenario_text": "A concrete transfer girder spans 16 ft between two columns and supports a discontinued column above, delivering a concentrated factored load of 800 kips near midspan. The girder is 6 ft deep, giving a clear span-to-depth ratio less than 4, so it is designed as a deep beam using strut-and-tie modeling per ACI 318-14 Chapter 23, idealizing the load path as diagonal compression struts from the load point to each support and a horizontal tension tie along the bottom connecting the supports."
  },
  {
    "id": 6605,
    "type": "drag_and_drop_order",
    "question": "Arrange these steps in the correct order for a strut-and-tie design per ACI 318-14 Chapter 23.",
    "items": [
      {
        "id": "s1",
        "text": "Idealize the load path as struts, ties, and nodal zones"
      },
      {
        "id": "s2",
        "text": "Compute strut and tie forces from statics"
      },
      {
        "id": "s3",
        "text": "Check strut efficiency factor beta_s and strut capacity"
      },
      {
        "id": "s4",
        "text": "Design tie reinforcement for the tie force and check anchorage length at the nodes"
      },
      {
        "id": "s5",
        "text": "Check nodal zone bearing stresses at each node"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4",
      "s5"
    ],
    "explanation": "The correct answer is idealize the model, compute member forces, then check the strut, then design and anchor the tie, then check the nodes: the geometry must be idealized before any force can be computed, and the individual strut, tie, and node checks all depend on those computed forces. Anchorage of the tie reinforcement at the nodes and the nodal bearing stress checks are typically the last steps because they depend on both the tie force and the geometry established by the strut layout. Skipping the nodal zone checks at the end is a common oversight since the struts and tie can appear adequate on their own while a node still crushes.",
    "domain": "concrete_structures",
    "scenario_id": 66,
    "scenario_title": "Transfer Girder Strut-and-Tie Model",
    "scenario_text": "A concrete transfer girder spans 16 ft between two columns and supports a discontinued column above, delivering a concentrated factored load of 800 kips near midspan. The girder is 6 ft deep, giving a clear span-to-depth ratio less than 4, so it is designed as a deep beam using strut-and-tie modeling per ACI 318-14 Chapter 23, idealizing the load path as diagonal compression struts from the load point to each support and a horizontal tension tie along the bottom connecting the supports."
  },
  {
    "id": 6606,
    "type": "drag_and_drop_order",
    "question": "Rank these three members from least likely to most likely to require strut-and-tie (deep beam) design, based on clear span-to-depth ratio, ln/h.",
    "items": [
      {
        "id": "s1",
        "text": "ln/h = 6 (ordinary beam, sectional method applies)"
      },
      {
        "id": "s2",
        "text": "ln/h = 3.5 (deep beam, strut-and-tie generally required)"
      },
      {
        "id": "s3",
        "text": "ln/h = 1.5 (very deep, strut-and-tie clearly governs)"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3"
    ],
    "explanation": "The correct answer is the shallow-relative-to-span member first, the moderately deep member second, and the very deep member last: as ln/h decreases, plane-sections flexural theory becomes progressively less valid because shear deformation and disturbed regions dominate the member's behavior. ACI 318-14 uses this ratio, roughly at ln/h less than about 4, as the trigger for strut-and-tie modeling instead of ordinary sectional beam design. This transfer girder's ln/h ratio falls well inside the range where strut-and-tie modeling is required, which is exactly why it was designed using struts, ties, and nodes rather than the beam equations from Chapter 22.",
    "domain": "concrete_structures",
    "scenario_id": 66,
    "scenario_title": "Transfer Girder Strut-and-Tie Model",
    "scenario_text": "A concrete transfer girder spans 16 ft between two columns and supports a discontinued column above, delivering a concentrated factored load of 800 kips near midspan. The girder is 6 ft deep, giving a clear span-to-depth ratio less than 4, so it is designed as a deep beam using strut-and-tie modeling per ACI 318-14 Chapter 23, idealizing the load path as diagonal compression struts from the load point to each support and a horizontal tension tie along the bottom connecting the supports."
  },
  {
    "id": 6701,
    "type": "point_and_click",
    "question": "On the diaphragm plan, click the location of the chord reinforcement along the TOP long edge of the diaphragm.",
    "image_description": "A rectangular diaphragm plan, 120 ft long horizontally and 60 ft deep vertically. A shear wall symbol sits partway along the bottom edge, with a line extending upward from that wall into the diaphragm interior representing a collector.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.2,
        "y": 0.10999999999999999,
        "w": 0.6,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.2,
        "y": 0.905,
        "w": 0.6,
        "h": 0.05
      },
      {
        "id": "z3",
        "x": 0.3,
        "y": 0.55,
        "w": 0.1,
        "h": 0.2
      },
      {
        "id": "z4",
        "x": 0.3,
        "y": 0.82,
        "w": 0.1,
        "h": 0.06
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the reinforcement running along the TOP long edge of the diaphragm: chord reinforcement resists the tension and compression couple generated by diaphragm bending as it spans between the end shear walls, analogous to the flange forces in a deep horizontal beam. Both long edges parallel to the span direction require chord reinforcement in general (this question asks specifically about the top edge), while the short edges generally do not.",
    "image": "question_images/q_6701.png",
    "domain": "concrete_structures",
    "scenario_id": 67,
    "scenario_title": "Concrete Diaphragm Chord and Collector Design",
    "scenario_text": "A cast-in-place concrete floor diaphragm measures 120 ft by 60 ft in plan and resists seismic force spanning the 120 ft direction between two end shear walls, with a third shear wall located partway along one long edge. Chord reinforcement runs along the two 120 ft edges to resist diaphragm bending, and collector reinforcement runs inward from the mid-edge shear wall to gather shear force from a tributary width wider than the wall itself."
  },
  {
    "id": 6702,
    "type": "point_and_click",
    "question": "On the same diaphragm plan, click the location of the collector (drag strut) reinforcement.",
    "image_description": "Same diaphragm plan, shear wall along the bottom edge, and collector line extending upward from the wall into the diaphragm interior as the previous item.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.2,
        "y": 0.10999999999999999,
        "w": 0.6,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.2,
        "y": 0.905,
        "w": 0.6,
        "h": 0.05
      },
      {
        "id": "z3",
        "x": 0.3,
        "y": 0.55,
        "w": 0.1,
        "h": 0.2
      },
      {
        "id": "z4",
        "x": 0.3,
        "y": 0.82,
        "w": 0.1,
        "h": 0.06
      }
    ],
    "correct": "z3",
    "explanation": "The correct answer is the line extending inward from the mid-edge shear wall: this collector, also called a drag strut, gathers diaphragm shear from a tributary width beyond the wall's own length and delivers it into the wall through axial tension and compression force in the collector reinforcement. Without this element, only the diaphragm shear directly above the wall's own length could reach it, leaving the rest of that force with no load path. Collectors are required wherever a shear wall's plan length is shorter than its tributary diaphragm width.",
    "image": "question_images/q_6702.png",
    "domain": "concrete_structures",
    "scenario_id": 67,
    "scenario_title": "Concrete Diaphragm Chord and Collector Design",
    "scenario_text": "A cast-in-place concrete floor diaphragm measures 120 ft by 60 ft in plan and resists seismic force spanning the 120 ft direction between two end shear walls, with a third shear wall located partway along one long edge. Chord reinforcement runs along the two 120 ft edges to resist diaphragm bending, and collector reinforcement runs inward from the mid-edge shear wall to gather shear force from a tributary width wider than the wall itself."
  },
  {
    "id": 6703,
    "type": "point_and_click",
    "question": "On the same diaphragm plan, click the shear wall symbol that receives the collected diaphragm shear.",
    "image_description": "Same diaphragm plan as the previous items, with the wall symbol shown as a short thick segment along the bottom edge directly beneath the collector line.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.2,
        "y": 0.10999999999999999,
        "w": 0.6,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.2,
        "y": 0.905,
        "w": 0.6,
        "h": 0.05
      },
      {
        "id": "z3",
        "x": 0.3,
        "y": 0.55,
        "w": 0.1,
        "h": 0.2
      },
      {
        "id": "z4",
        "x": 0.3,
        "y": 0.82,
        "w": 0.1,
        "h": 0.06
      }
    ],
    "correct": "z4",
    "explanation": "The correct answer is the wall symbol directly beneath the collector line, along the bottom edge: this is the shear wall that both receives diaphragm shear directly from the slab area above its own length and receives the additional unbalanced force gathered by the collector. The connection at this wall must be designed for the full combined force, direct plus collected. The collector reinforcement must be developed or spliced into this wall's boundary reinforcement at this connection, and a weak connection here defeats the purpose of the collector even if the collector bars themselves are adequately sized.",
    "image": "question_images/q_6703.png",
    "domain": "concrete_structures",
    "scenario_id": 67,
    "scenario_title": "Concrete Diaphragm Chord and Collector Design",
    "scenario_text": "A cast-in-place concrete floor diaphragm measures 120 ft by 60 ft in plan and resists seismic force spanning the 120 ft direction between two end shear walls, with a third shear wall located partway along one long edge. Chord reinforcement runs along the two 120 ft edges to resist diaphragm bending, and collector reinforcement runs inward from the mid-edge shear wall to gather shear force from a tributary width wider than the wall itself."
  },
  {
    "id": 6704,
    "type": "drag_and_drop_position",
    "question": "Drag each label to its correct location on the diaphragm plan.",
    "image_description": "Same diaphragm plan with the top chord edge, the collector line, and the mid-edge shear wall symbol each marked.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Chord reinforcement"
      },
      {
        "id": "d2",
        "label": "Collector reinforcement"
      },
      {
        "id": "d3",
        "label": "Shear wall"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.2,
        "y": 0.10999999999999999,
        "w": 0.6,
        "h": 0.08
      },
      {
        "id": "z3",
        "x": 0.3,
        "y": 0.55,
        "w": 0.1,
        "h": 0.2
      },
      {
        "id": "z4",
        "x": 0.3,
        "y": 0.82,
        "w": 0.1,
        "h": 0.06
      }
    ],
    "correct": {
      "z1": "d1",
      "z3": "d2",
      "z4": "d3"
    },
    "explanation": "The correct answer is chord reinforcement along the top edge, collector reinforcement along the inward line, and the shear wall at the connection point: chords, collectors, and walls together form the complete diaphragm load path, with chords resisting the diaphragm's own bending, collectors gathering shear beyond a wall's tributary length, and the wall finally delivering the combined force down to the foundation. Missing the collector while providing chords and a wall still leaves an incomplete load path for a wall shorter than its tributary width. This is one of the most commonly tested diaphragm concepts because collectors are easy to overlook compared to the more visually obvious chords and walls.",
    "image": "question_images/q_6704.png",
    "domain": "concrete_structures",
    "scenario_id": 67,
    "scenario_title": "Concrete Diaphragm Chord and Collector Design",
    "scenario_text": "A cast-in-place concrete floor diaphragm measures 120 ft by 60 ft in plan and resists seismic force spanning the 120 ft direction between two end shear walls, with a third shear wall located partway along one long edge. Chord reinforcement runs along the two 120 ft edges to resist diaphragm bending, and collector reinforcement runs inward from the mid-edge shear wall to gather shear force from a tributary width wider than the wall itself."
  },
  {
    "id": 6705,
    "type": "drag_and_drop_order",
    "question": "Arrange these steps in the correct order to design a diaphragm collector.",
    "items": [
      {
        "id": "s1",
        "text": "Determine the diaphragm shear per unit length along the collector line from the diaphragm shear diagram"
      },
      {
        "id": "s2",
        "text": "Determine the shear wall's capacity to receive force directly above its own tributary length"
      },
      {
        "id": "s3",
        "text": "Compute the unbalanced force that must be collected beyond the wall's own tributary length"
      },
      {
        "id": "s4",
        "text": "Design collector reinforcement to carry that unbalanced axial force into the wall"
      },
      {
        "id": "s5",
        "text": "Check the collector-to-wall connection for the full collected force"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4",
      "s5"
    ],
    "explanation": "The correct answer is shear per unit length, then the wall's direct tributary capacity, then the unbalanced force, then collector reinforcement, then the connection check: the unbalanced force in step three cannot be found without first knowing both the total shear demand from step one and how much of it the wall already receives directly in step two. The collector reinforcement in step four is then sized for that specific unbalanced force, and the connection in step five must be checked last since it must transfer whatever force the collector was just designed to carry. Sizing the collector before establishing the unbalanced force it needs to carry would be working backward from an unknown number.",
    "domain": "concrete_structures",
    "scenario_id": 67,
    "scenario_title": "Concrete Diaphragm Chord and Collector Design",
    "scenario_text": "A cast-in-place concrete floor diaphragm measures 120 ft by 60 ft in plan and resists seismic force spanning the 120 ft direction between two end shear walls, with a third shear wall located partway along one long edge. Chord reinforcement runs along the two 120 ft edges to resist diaphragm bending, and collector reinforcement runs inward from the mid-edge shear wall to gather shear force from a tributary width wider than the wall itself."
  },
  {
    "id": 6706,
    "type": "drag_and_drop_order",
    "question": "Rank these three locations along the diaphragm's span from largest chord force to smallest, for uniform seismic loading between two end shear walls.",
    "items": [
      {
        "id": "s1",
        "text": "Midspan chord force (largest, analogous to maximum beam moment)"
      },
      {
        "id": "s2",
        "text": "Quarter-span chord force (intermediate)"
      },
      {
        "id": "s3",
        "text": "Chord force at the shear wall support (smallest, analogous to beam end moment)"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3"
    ],
    "explanation": "The correct answer is midspan largest, quarter-span intermediate, and the support location smallest: treating the diaphragm as a deep horizontal simply supported beam spanning between the two end shear walls, its bending moment, and therefore its chord tension-compression couple, follows the same shape as an ordinary beam under uniform load, peaking at midspan and dropping to near zero at the supports. This analogy is why chord reinforcement is typically heaviest near midspan and can often be reduced, though not eliminated, approaching the end shear walls. Assuming a constant chord force across the full diaphragm length ignores this moment variation and can either waste reinforcement at the ends or under-reinforce the midspan region.",
    "domain": "concrete_structures",
    "scenario_id": 67,
    "scenario_title": "Concrete Diaphragm Chord and Collector Design",
    "scenario_text": "A cast-in-place concrete floor diaphragm measures 120 ft by 60 ft in plan and resists seismic force spanning the 120 ft direction between two end shear walls, with a third shear wall located partway along one long edge. Chord reinforcement runs along the two 120 ft edges to resist diaphragm bending, and collector reinforcement runs inward from the mid-edge shear wall to gather shear force from a tributary width wider than the wall itself."
  },
  {
    "id": 6801,
    "type": "point_and_click",
    "question": "On the beam cross-section, click the location of the compression reinforcement, As'.",
    "image_description": "A rectangular beam cross-section, b = 16 in wide, with the top compression face at the top edge and the tension steel near the bottom. Four reference lines are marked: one near the top, one at mid-depth, one near the bottom, and a fourth along the side representing a stirrup leg.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.5,
        "y": 0.16,
        "w": 0.4,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.78,
        "w": 0.4,
        "h": 0.08
      },
      {
        "id": "z3",
        "x": 0.5,
        "y": 0.45,
        "w": 0.4,
        "h": 0.08
      },
      {
        "id": "z4",
        "x": 0.15,
        "y": 0.45,
        "w": 0.08,
        "h": 0.5
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the line near the top of the section, at d' = 2.5 in from the top fiber: compression reinforcement is placed close to the compression face so it can pick up additional compressive force once the section's demand exceeds what the tension-controlled single-layer limit allows. This steel must be checked for whether it has actually yielded, since its strain depends on the neutral axis depth c through the strain compatibility triangle. Placing this steel too far from the top face reduces its effectiveness and changes the strain it develops at the section's ultimate curvature.",
    "image": "question_images/q_6801.png",
    "domain": "concrete_structures",
    "scenario_id": 68,
    "scenario_title": "Doubly Reinforced Beam Cross-Section",
    "scenario_text": "A rectangular beam requires more flexural capacity than a single layer of tension steel can provide within the tension-controlled limit, so compression reinforcement is added near the top face. The beam has b = 16 in, d = 24 in, d' = 2.5 in to the compression steel centroid, f'c = 4,000 psi, fy = 60,000 psi, tension steel As = 6.00 in^2 (six No. 9 bars), compression steel As' = 2.00 in^2 (two No. 9 bars), and No. 4 stirrups."
  },
  {
    "id": 6802,
    "type": "point_and_click",
    "question": "On the same beam cross-section, click the location of the tension reinforcement, As.",
    "image_description": "Same beam cross-section and four reference lines as the previous item.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.5,
        "y": 0.16,
        "w": 0.4,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.78,
        "w": 0.4,
        "h": 0.08
      },
      {
        "id": "z3",
        "x": 0.5,
        "y": 0.45,
        "w": 0.4,
        "h": 0.08
      },
      {
        "id": "z4",
        "x": 0.15,
        "y": 0.45,
        "w": 0.08,
        "h": 0.5
      }
    ],
    "correct": "z2",
    "explanation": "The correct answer is the line near the bottom of the section, at d = 24 in from the top fiber: the six No. 9 bars here provide As = 6.00 in^2 of tension steel, which together with the compression steel As' = 2.00 in^2 gives this beam more total moment capacity than a singly reinforced section of the same width and depth could achieve within the tension-controlled limit. The distance d, not d', is what governs the primary flexural lever arm for the tension steel contribution. Confusing which depth belongs to which layer of steel leads directly to an incorrect moment capacity calculation.",
    "image": "question_images/q_6802.png",
    "domain": "concrete_structures",
    "scenario_id": 68,
    "scenario_title": "Doubly Reinforced Beam Cross-Section",
    "scenario_text": "A rectangular beam requires more flexural capacity than a single layer of tension steel can provide within the tension-controlled limit, so compression reinforcement is added near the top face. The beam has b = 16 in, d = 24 in, d' = 2.5 in to the compression steel centroid, f'c = 4,000 psi, fy = 60,000 psi, tension steel As = 6.00 in^2 (six No. 9 bars), compression steel As' = 2.00 in^2 (two No. 9 bars), and No. 4 stirrups."
  },
  {
    "id": 6803,
    "type": "point_and_click",
    "question": "On the same beam cross-section, click the location of a stirrup leg providing shear reinforcement.",
    "image_description": "Same beam cross-section and four reference lines as the previous items.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.5,
        "y": 0.16,
        "w": 0.4,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.78,
        "w": 0.4,
        "h": 0.08
      },
      {
        "id": "z3",
        "x": 0.5,
        "y": 0.45,
        "w": 0.4,
        "h": 0.08
      },
      {
        "id": "z4",
        "x": 0.15,
        "y": 0.45,
        "w": 0.08,
        "h": 0.5
      }
    ],
    "correct": "z4",
    "explanation": "The correct answer is the vertical bar running along the side of the section: the No. 4 stirrup legs enclose both the tension and compression longitudinal steel and run vertically along the sides of the section to provide shear reinforcement and lateral restraint against buckling of the compression bars. Stirrups are distinct from both the tension and compression flexural steel, which run horizontally along the beam's length. Without adequate stirrup restraint, compression steel in a doubly reinforced beam can buckle outward before reaching its expected yield stress.",
    "image": "question_images/q_6803.png",
    "domain": "concrete_structures",
    "scenario_id": 68,
    "scenario_title": "Doubly Reinforced Beam Cross-Section",
    "scenario_text": "A rectangular beam requires more flexural capacity than a single layer of tension steel can provide within the tension-controlled limit, so compression reinforcement is added near the top face. The beam has b = 16 in, d = 24 in, d' = 2.5 in to the compression steel centroid, f'c = 4,000 psi, fy = 60,000 psi, tension steel As = 6.00 in^2 (six No. 9 bars), compression steel As' = 2.00 in^2 (two No. 9 bars), and No. 4 stirrups."
  },
  {
    "id": 6804,
    "type": "drag_and_drop_position",
    "question": "Drag each label to its correct location on the beam cross-section.",
    "image_description": "Same beam cross-section with the top steel, bottom steel, and side stirrup leg each marked.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Compression steel, As'"
      },
      {
        "id": "d2",
        "label": "Tension steel, As"
      },
      {
        "id": "d3",
        "label": "Stirrup leg"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.5,
        "y": 0.16,
        "w": 0.4,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.78,
        "w": 0.4,
        "h": 0.08
      },
      {
        "id": "z4",
        "x": 0.15,
        "y": 0.45,
        "w": 0.08,
        "h": 0.5
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z4": "d3"
    },
    "explanation": "The correct answer is compression steel near the top, tension steel near the bottom, and the stirrup leg along the side: this matches the standard doubly reinforced beam detail, with As' = 2.00 in^2 at d' = 2.5 in and As = 6.00 in^2 at d = 24 in, all enclosed by No. 4 stirrups. The stirrups serve two roles here, resisting shear and restraining the compression bars against buckling. Correctly identifying each layer is a prerequisite to computing strain in the compression steel and checking whether it has yielded.",
    "image": "question_images/q_6804.png",
    "domain": "concrete_structures",
    "scenario_id": 68,
    "scenario_title": "Doubly Reinforced Beam Cross-Section",
    "scenario_text": "A rectangular beam requires more flexural capacity than a single layer of tension steel can provide within the tension-controlled limit, so compression reinforcement is added near the top face. The beam has b = 16 in, d = 24 in, d' = 2.5 in to the compression steel centroid, f'c = 4,000 psi, fy = 60,000 psi, tension steel As = 6.00 in^2 (six No. 9 bars), compression steel As' = 2.00 in^2 (two No. 9 bars), and No. 4 stirrups."
  },
  {
    "id": 6805,
    "type": "drag_and_drop_order",
    "question": "Arrange these steps in the correct order to check whether the compression steel in this beam has actually yielded.",
    "items": [
      {
        "id": "s1",
        "text": "Solve equilibrium for the neutral axis depth, c, including the compression steel term"
      },
      {
        "id": "s2",
        "text": "Compute the compression steel strain, epsilon_s' = 0.003 * (c - d') / c"
      },
      {
        "id": "s3",
        "text": "Compute the steel's yield strain, epsilon_y = fy / Es"
      },
      {
        "id": "s4",
        "text": "Compare epsilon_s' to epsilon_y; if epsilon_s' is less than epsilon_y, reduce the compression steel stress below fy"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4"
    ],
    "explanation": "The correct answer is find c first, then the compression steel strain, then the yield strain, then compare the two: the compression steel strain in step two cannot be found without the neutral axis depth from step one, and the comparison in step four requires both the computed strain and the yield strain as reference. Assuming the compression steel always yields at fy without running this check is a common exam trap, especially for shallow sections where the compression steel sits close to the neutral axis and may not reach yield strain. Skipping this check can significantly overstate the beam's true moment capacity.",
    "domain": "concrete_structures",
    "scenario_id": 68,
    "scenario_title": "Doubly Reinforced Beam Cross-Section",
    "scenario_text": "A rectangular beam requires more flexural capacity than a single layer of tension steel can provide within the tension-controlled limit, so compression reinforcement is added near the top face. The beam has b = 16 in, d = 24 in, d' = 2.5 in to the compression steel centroid, f'c = 4,000 psi, fy = 60,000 psi, tension steel As = 6.00 in^2 (six No. 9 bars), compression steel As' = 2.00 in^2 (two No. 9 bars), and No. 4 stirrups."
  },
  {
    "id": 6806,
    "type": "drag_and_drop_order",
    "question": "Rank these three beam conditions from least likely to most likely to actually require compression steel for strength.",
    "items": [
      {
        "id": "s1",
        "text": "A wide, deep beam with generous depth relative to span, moment demand easily met by tension steel alone"
      },
      {
        "id": "s2",
        "text": "A beam with restricted depth from architectural clearance constraints, moderate moment demand"
      },
      {
        "id": "s3",
        "text": "A shallow beam constrained to a fixed depth carrying a very large factored moment near the tension-controlled single-layer capacity limit"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3"
    ],
    "explanation": "The correct answer is the generously sized beam first, the architecturally constrained beam second, and the shallow, heavily loaded beam last: compression steel becomes necessary for strength when a beam's fixed depth cannot provide enough tension-controlled moment capacity with tension steel alone, which is most likely when depth is restricted and moment demand is high. A beam with ample depth relative to its span rarely needs compression steel for strength, though it may still use some for deflection or ductility control. Recognizing which condition applies helps decide whether a doubly reinforced design is actually necessary or just conservative.",
    "domain": "concrete_structures",
    "scenario_id": 68,
    "scenario_title": "Doubly Reinforced Beam Cross-Section",
    "scenario_text": "A rectangular beam requires more flexural capacity than a single layer of tension steel can provide within the tension-controlled limit, so compression reinforcement is added near the top face. The beam has b = 16 in, d = 24 in, d' = 2.5 in to the compression steel centroid, f'c = 4,000 psi, fy = 60,000 psi, tension steel As = 6.00 in^2 (six No. 9 bars), compression steel As' = 2.00 in^2 (two No. 9 bars), and No. 4 stirrups."
  },
  {
    "id": 6901,
    "type": "point_and_click",
    "question": "On the beam elevation, click the location where a standard 90-degree hook is used for bar anchorage.",
    "image_description": "A continuous beam elevation with an exterior column at the left end, an interior column farther along the span, and midspan between them. Four locations are marked: at the exterior joint, at midspan, at the interior joint, and near the far right end of the beam.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.12,
        "y": 0.25,
        "w": 0.15,
        "h": 0.2
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.75,
        "w": 0.25,
        "h": 0.15
      },
      {
        "id": "z3",
        "x": 0.55,
        "y": 0.25,
        "w": 0.15,
        "h": 0.2
      },
      {
        "id": "z4",
        "x": 0.9,
        "y": 0.5,
        "w": 0.1,
        "h": 0.2
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the exterior joint at the left end: here the beam's top bars have no straight embedment length available beyond the column, since the column is the end of the frame line, so a standard 90-degree hook provides the direct mechanical anchorage needed to develop the bar's full tensile force in this limited space. Hooked bar development length is shorter than straight tension development length for the same bar, which is exactly why the hook is used where straight length is not physically available. Using a straight development length calculation in this condition would overstate the bar's true required length and could understate the anchorage actually needed.",
    "image": "question_images/q_6901.png",
    "domain": "concrete_structures",
    "scenario_id": 69,
    "scenario_title": "Beam Bar Development and Splice at an Exterior Joint",
    "scenario_text": "A continuous beam frames into an exterior column at one end and continues through an interior column farther along its span. At the exterior joint, the beam's top bars are anchored with a standard 90-degree hook because straight embedment length is not available beyond the column. At midspan, the bottom bars are lap spliced using a Class B splice since more than half the bars are spliced at that location. Bars are uncoated No. 8 Grade 60, f'c = 4,000 psi."
  },
  {
    "id": 6902,
    "type": "point_and_click",
    "question": "On the same beam elevation, click the location of the Class B lap splice in the bottom reinforcement.",
    "image_description": "Same beam elevation and four marked locations as the previous item.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.12,
        "y": 0.25,
        "w": 0.15,
        "h": 0.2
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.75,
        "w": 0.25,
        "h": 0.15
      },
      {
        "id": "z3",
        "x": 0.55,
        "y": 0.25,
        "w": 0.15,
        "h": 0.2
      },
      {
        "id": "z4",
        "x": 0.9,
        "y": 0.5,
        "w": 0.1,
        "h": 0.2
      }
    ],
    "correct": "z2",
    "explanation": "The correct answer is midspan, in the bottom reinforcement: this is where more than half the bars are spliced at the same location, which per ACI 318-14 Chapter 25 requires a Class B splice length of 1.3 times the tension development length, ld, rather than the shorter 1.0 times ld allowed for a Class A splice. Bottom bars are typically spliced near midspan in a continuous beam because that region generally has lower moment demand than the supports for gravity loading. Using a Class A length here when more than half the bars are spliced at one point would under-provide splice length relative to the code requirement.",
    "image": "question_images/q_6902.png",
    "domain": "concrete_structures",
    "scenario_id": 69,
    "scenario_title": "Beam Bar Development and Splice at an Exterior Joint",
    "scenario_text": "A continuous beam frames into an exterior column at one end and continues through an interior column farther along its span. At the exterior joint, the beam's top bars are anchored with a standard 90-degree hook because straight embedment length is not available beyond the column. At midspan, the bottom bars are lap spliced using a Class B splice since more than half the bars are spliced at that location. Bars are uncoated No. 8 Grade 60, f'c = 4,000 psi."
  },
  {
    "id": 6903,
    "type": "point_and_click",
    "question": "On the same beam elevation, click the location where the top bars are continuous through the joint, without a hook or splice.",
    "image_description": "Same beam elevation and four marked locations as the previous items.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.12,
        "y": 0.25,
        "w": 0.15,
        "h": 0.2
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.75,
        "w": 0.25,
        "h": 0.15
      },
      {
        "id": "z3",
        "x": 0.55,
        "y": 0.25,
        "w": 0.15,
        "h": 0.2
      },
      {
        "id": "z4",
        "x": 0.9,
        "y": 0.5,
        "w": 0.1,
        "h": 0.2
      }
    ],
    "correct": "z3",
    "explanation": "The correct answer is the interior joint: because the beam continues past this column into the next span, the top bars can run straight through the joint region without needing a hook, which is only required where straight embedment is unavailable, such as at the exterior end of the frame line. This is also a common location for negative moment demand, so the top steel here is typically carried through continuously rather than terminated or spliced. Mistaking this interior condition for the exterior hooked condition would apply the wrong anchorage detail at the wrong location.",
    "image": "question_images/q_6903.png",
    "domain": "concrete_structures",
    "scenario_id": 69,
    "scenario_title": "Beam Bar Development and Splice at an Exterior Joint",
    "scenario_text": "A continuous beam frames into an exterior column at one end and continues through an interior column farther along its span. At the exterior joint, the beam's top bars are anchored with a standard 90-degree hook because straight embedment length is not available beyond the column. At midspan, the bottom bars are lap spliced using a Class B splice since more than half the bars are spliced at that location. Bars are uncoated No. 8 Grade 60, f'c = 4,000 psi."
  },
  {
    "id": 6904,
    "type": "drag_and_drop_position",
    "question": "Drag each label to its correct location on the beam elevation.",
    "image_description": "Same beam elevation with the exterior joint hook, the midspan splice, and the interior joint continuous bar location each marked.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Standard 90-degree hook"
      },
      {
        "id": "d2",
        "label": "Class B lap splice"
      },
      {
        "id": "d3",
        "label": "Continuous bar through the joint"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.12,
        "y": 0.25,
        "w": 0.15,
        "h": 0.2
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.75,
        "w": 0.25,
        "h": 0.15
      },
      {
        "id": "z3",
        "x": 0.55,
        "y": 0.25,
        "w": 0.15,
        "h": 0.2
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct answer is the hook at the exterior joint, the splice at midspan, and the continuous bar at the interior joint: each of these three anchorage or continuity details serves the specific geometric condition at its location, a hook where straight length runs out at the frame's end, a splice where bar lengths must be joined away from peak moment, and continuity where the frame simply carries on into the next span. Placing any one of these details at the wrong location, such as hooking a bar at an interior joint where straight length is available, wastes reinforcement and complicates the detail unnecessarily. Reading a beam elevation correctly for these three conditions is a core skill for this exam topic.",
    "image": "question_images/q_6904.png",
    "domain": "concrete_structures",
    "scenario_id": 69,
    "scenario_title": "Beam Bar Development and Splice at an Exterior Joint",
    "scenario_text": "A continuous beam frames into an exterior column at one end and continues through an interior column farther along its span. At the exterior joint, the beam's top bars are anchored with a standard 90-degree hook because straight embedment length is not available beyond the column. At midspan, the bottom bars are lap spliced using a Class B splice since more than half the bars are spliced at that location. Bars are uncoated No. 8 Grade 60, f'c = 4,000 psi."
  },
  {
    "id": 6905,
    "type": "drag_and_drop_order",
    "question": "Arrange these three development or anchorage lengths, for the same bar size and grade, from longest to shortest.",
    "items": [
      {
        "id": "s1",
        "text": "Straight tension development length, ld"
      },
      {
        "id": "s2",
        "text": "Straight compression development length, ldc"
      },
      {
        "id": "s3",
        "text": "Standard 90-degree hook development length in tension, ldh"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3"
    ],
    "explanation": "The correct answer is straight tension development length first, straight compression development second, and hook development in tension shortest: straight tension development length is the longest of the three because it relies entirely on bond through concrete that is likely cracked in the tension zone, compression development is shorter because compression bars do not depend on that same bond mechanism through cracked tension zones, and the hook is shortest because it provides direct mechanical anchorage in addition to bond. This is exactly why the exterior joint in this scenario uses a hook rather than trying to fit a full straight tension development length beyond the column. Reversing this order, for example assuming a hook always requires more length than a straight bar, would misjudge how much space is actually needed at a congested joint.",
    "domain": "concrete_structures",
    "scenario_id": 69,
    "scenario_title": "Beam Bar Development and Splice at an Exterior Joint",
    "scenario_text": "A continuous beam frames into an exterior column at one end and continues through an interior column farther along its span. At the exterior joint, the beam's top bars are anchored with a standard 90-degree hook because straight embedment length is not available beyond the column. At midspan, the bottom bars are lap spliced using a Class B splice since more than half the bars are spliced at that location. Bars are uncoated No. 8 Grade 60, f'c = 4,000 psi."
  },
  {
    "id": 6906,
    "type": "drag_and_drop_order",
    "question": "Arrange these steps in the correct order to determine whether a splice must be Class A or Class B.",
    "items": [
      {
        "id": "s1",
        "text": "Determine the ratio of As provided to As required at the splice location"
      },
      {
        "id": "s2",
        "text": "Determine what percentage of the bars are spliced at the same location"
      },
      {
        "id": "s3",
        "text": "Apply the ACI 318-14 Chapter 25 splice classification rule using both the ratio and the percentage spliced"
      },
      {
        "id": "s4",
        "text": "Use Class A length (1.0 times ld) only if the ratio is at least 2 and no more than half the bars are spliced at that point, otherwise use Class B (1.3 times ld)"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4"
    ],
    "explanation": "The correct answer is find the As ratio, then the percent spliced, then apply the classification rule, then select the final length: both the provided-to-required steel ratio and the percentage of bars spliced at the same location must be known before the classification rule in step three can be applied, and only after applying that rule can the actual Class A or Class B length be selected in step four. In this beam, more than half the bottom bars are spliced at midspan, which by itself is enough to require Class B regardless of the As ratio. Assuming Class A by default without checking the percentage spliced can under-provide the required splice length.",
    "domain": "concrete_structures",
    "scenario_id": 69,
    "scenario_title": "Beam Bar Development and Splice at an Exterior Joint",
    "scenario_text": "A continuous beam frames into an exterior column at one end and continues through an interior column farther along its span. At the exterior joint, the beam's top bars are anchored with a standard 90-degree hook because straight embedment length is not available beyond the column. At midspan, the bottom bars are lap spliced using a Class B splice since more than half the bars are spliced at that location. Bars are uncoated No. 8 Grade 60, f'c = 4,000 psi."
  },
  {
    "id": 7001,
    "type": "point_and_click",
    "question": "On the footing plan, click the critical section location for one-way (beam) shear, measured a full effective depth d from the column face.",
    "image_description": "A plan view of a square footing with the column shown at center. Moving outward from the column's right face along the centerline, three reference marks are shown in order of increasing distance, plus a fourth mark near the footing's far edge.",
    "hotzones": [
      {
        "id": "z3",
        "x": 0.5,
        "y": 0.5,
        "w": 0.03,
        "h": 0.3
      },
      {
        "id": "z2",
        "x": 0.55,
        "y": 0.5,
        "w": 0.03,
        "h": 0.35
      },
      {
        "id": "z1",
        "x": 0.65,
        "y": 0.5,
        "w": 0.04,
        "h": 0.5
      },
      {
        "id": "z4",
        "x": 0.87,
        "y": 0.2,
        "w": 0.06,
        "h": 0.6
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the mark farthest from the column face among the three inner marks, a full effective depth d = 16 in out: ACI 318-14 locates the one-way shear critical section a full d from the column face, in contrast to the closer d/2 location used for two-way punching shear. The factored one-way shear at this section equals qu times the tributary footing area beyond that line, checked against Vc = 2 * lambda * sqrt(f'c) * b * d using the footing's full width b. Confusing this section with the closer punching shear section understates the tributary area and therefore understates the calculated one-way shear demand.",
    "image": "question_images/q_7001.png",
    "domain": "concrete_structures",
    "scenario_id": 70,
    "scenario_title": "Isolated Spread Footing Shear Check",
    "scenario_text": "An isolated square spread footing supports an 18 in square column and measures 8 ft by 8 ft in plan, with effective depth d = 16 in, f'c = 3,000 psi, and net factored soil bearing pressure qu = 6.0 ksf. The footing must be checked for one-way (beam) shear at a section d away from the column face, and for two-way (punching) shear at a section d/2 from the column face."
  },
  {
    "id": 7002,
    "type": "point_and_click",
    "question": "On the same footing plan, click the critical section location for two-way (punching) shear, at d/2 from the column face.",
    "image_description": "Same footing plan and four reference marks as the previous item.",
    "hotzones": [
      {
        "id": "z3",
        "x": 0.5,
        "y": 0.5,
        "w": 0.03,
        "h": 0.3
      },
      {
        "id": "z2",
        "x": 0.55,
        "y": 0.5,
        "w": 0.03,
        "h": 0.35
      },
      {
        "id": "z1",
        "x": 0.65,
        "y": 0.5,
        "w": 0.04,
        "h": 0.5
      },
      {
        "id": "z4",
        "x": 0.87,
        "y": 0.2,
        "w": 0.06,
        "h": 0.6
      }
    ],
    "correct": "z2",
    "explanation": "The correct answer is the mark closest to the column face among the outer marks, at d/2 = 8 in out: this closer distance defines the punching shear perimeter that follows the column's square shape on all four sides, distinct from the straight, full-width one-way shear section located a full d away. Punching shear governs footing depth on many square, lightly loaded footings precisely because this perimeter is much shorter than the footing's full width, concentrating the same total demand onto a smaller resisting perimeter. Using the one-way section location for a punching shear check would incorrectly enlarge the resisting perimeter and overstate the footing's punching capacity.",
    "image": "question_images/q_7002.png",
    "domain": "concrete_structures",
    "scenario_id": 70,
    "scenario_title": "Isolated Spread Footing Shear Check",
    "scenario_text": "An isolated square spread footing supports an 18 in square column and measures 8 ft by 8 ft in plan, with effective depth d = 16 in, f'c = 3,000 psi, and net factored soil bearing pressure qu = 6.0 ksf. The footing must be checked for one-way (beam) shear at a section d away from the column face, and for two-way (punching) shear at a section d/2 from the column face."
  },
  {
    "id": 7003,
    "type": "point_and_click",
    "question": "On the same footing plan, click the column face itself, from which both critical section distances are measured.",
    "image_description": "Same footing plan and four reference marks as the previous items.",
    "hotzones": [
      {
        "id": "z3",
        "x": 0.5,
        "y": 0.5,
        "w": 0.03,
        "h": 0.3
      },
      {
        "id": "z2",
        "x": 0.55,
        "y": 0.5,
        "w": 0.03,
        "h": 0.35
      },
      {
        "id": "z1",
        "x": 0.65,
        "y": 0.5,
        "w": 0.04,
        "h": 0.5
      },
      {
        "id": "z4",
        "x": 0.87,
        "y": 0.2,
        "w": 0.06,
        "h": 0.6
      }
    ],
    "correct": "z3",
    "explanation": "The correct answer is the mark right at the column edge: this is the reference line from which both the d/2 punching shear section and the full-d one-way shear section are measured outward. Both critical sections depend on correctly locating this face first, since an error in the assumed column face location shifts both critical sections and therefore both calculated shear demands. The column face is also the location used for the footing's flexural design section for moment, making it a reference point for three separate footing checks, not just the two shear checks.",
    "image": "question_images/q_7003.png",
    "domain": "concrete_structures",
    "scenario_id": 70,
    "scenario_title": "Isolated Spread Footing Shear Check",
    "scenario_text": "An isolated square spread footing supports an 18 in square column and measures 8 ft by 8 ft in plan, with effective depth d = 16 in, f'c = 3,000 psi, and net factored soil bearing pressure qu = 6.0 ksf. The footing must be checked for one-way (beam) shear at a section d away from the column face, and for two-way (punching) shear at a section d/2 from the column face."
  },
  {
    "id": 7004,
    "type": "drag_and_drop_position",
    "question": "Drag each label to its correct location on the footing plan.",
    "image_description": "Same footing plan with the column face, the punching shear section, and the one-way shear section each marked moving outward from the column.",
    "drag_items": [
      {
        "id": "d1",
        "label": "One-way shear section (d from face)"
      },
      {
        "id": "d2",
        "label": "Two-way punching shear section (d/2 from face)"
      },
      {
        "id": "d3",
        "label": "Column face"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.65,
        "y": 0.5,
        "w": 0.04,
        "h": 0.5
      },
      {
        "id": "z2",
        "x": 0.55,
        "y": 0.5,
        "w": 0.03,
        "h": 0.35
      },
      {
        "id": "z3",
        "x": 0.5,
        "y": 0.5,
        "w": 0.03,
        "h": 0.3
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct answer is one-way shear farthest out at d, punching shear closer in at d/2, and the column face nearest of all: this ordering reflects that punching shear is always checked closer to the column than one-way shear for the same footing, since the two distances, d/2 and d, come directly from different ACI 318-14 provisions for two-way versus one-way shear. Getting this order backward would apply the wrong tributary area to each shear check. Both distances are measured from the same column face reference line, which is why identifying that face correctly, as in the previous item, matters for both checks.",
    "image": "question_images/q_7004.png",
    "domain": "concrete_structures",
    "scenario_id": 70,
    "scenario_title": "Isolated Spread Footing Shear Check",
    "scenario_text": "An isolated square spread footing supports an 18 in square column and measures 8 ft by 8 ft in plan, with effective depth d = 16 in, f'c = 3,000 psi, and net factored soil bearing pressure qu = 6.0 ksf. The footing must be checked for one-way (beam) shear at a section d away from the column face, and for two-way (punching) shear at a section d/2 from the column face."
  },
  {
    "id": 7005,
    "type": "drag_and_drop_order",
    "question": "Arrange these steps in the correct order to check one-way shear in this footing.",
    "items": [
      {
        "id": "s1",
        "text": "Compute net factored soil pressure qu from the factored column load divided by footing area"
      },
      {
        "id": "s2",
        "text": "Compute factored shear Vu at the critical section, d from the column face, as qu times the tributary area beyond that section"
      },
      {
        "id": "s3",
        "text": "Compute Vc = 2 * lambda * sqrt(f'c) * b * d for the full footing width, b"
      },
      {
        "id": "s4",
        "text": "Compare phi * Vc to Vu and confirm phi * Vc is greater"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4"
    ],
    "explanation": "The correct answer is soil pressure first, then Vu at the critical section, then Vc, then the final comparison: qu must be known before the tributary area beyond the critical section can be converted into an actual shear force, and both Vu and Vc must be computed before they can be compared against each other. This sequence mirrors the general shear design process used for beams, but with the tributary footing area beyond the critical section replacing a beam's simple reaction-minus-distributed-load calculation. Skipping to the phi Vc comparison without correctly computing Vu at the d-from-face section risks checking the wrong shear demand entirely.",
    "domain": "concrete_structures",
    "scenario_id": 70,
    "scenario_title": "Isolated Spread Footing Shear Check",
    "scenario_text": "An isolated square spread footing supports an 18 in square column and measures 8 ft by 8 ft in plan, with effective depth d = 16 in, f'c = 3,000 psi, and net factored soil bearing pressure qu = 6.0 ksf. The footing must be checked for one-way (beam) shear at a section d away from the column face, and for two-way (punching) shear at a section d/2 from the column face."
  },
  {
    "id": 7006,
    "type": "drag_and_drop_order",
    "question": "Arrange these footing design checks in the order they are typically performed.",
    "items": [
      {
        "id": "s1",
        "text": "Size the footing plan dimensions for allowable soil bearing pressure under service loads"
      },
      {
        "id": "s2",
        "text": "Check two-way (punching) shear at d/2 from the column face using factored loads"
      },
      {
        "id": "s3",
        "text": "Check one-way (beam) shear at d from the column face using factored loads"
      },
      {
        "id": "s4",
        "text": "Design flexural reinforcement at the critical moment section at the column face"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4"
    ],
    "explanation": "The correct answer is bearing sizing first, then punching shear, then one-way shear, then flexural design: the footing's plan dimensions must be fixed for service-load bearing pressure before any factored-load shear or flexure check can be run, and both shear checks, which frequently govern the required effective depth on square footings, are typically confirmed before finalizing the flexural steel that depends on that same depth. Punching shear is checked before one-way shear in this sequence because it is the more common depth-governing check for compact, lightly eccentric footings like this one. Designing flexural reinforcement first and only afterward discovering that shear requires a deeper section wastes an entire design iteration.",
    "domain": "concrete_structures",
    "scenario_id": 70,
    "scenario_title": "Isolated Spread Footing Shear Check",
    "scenario_text": "An isolated square spread footing supports an 18 in square column and measures 8 ft by 8 ft in plan, with effective depth d = 16 in, f'c = 3,000 psi, and net factored soil bearing pressure qu = 6.0 ksf. The footing must be checked for one-way (beam) shear at a section d away from the column face, and for two-way (punching) shear at a section d/2 from the column face."
  },
  {
    "id": 7101,
    "type": "point_and_click",
    "question": "For this simply supported, uniformly loaded joist, click the location along the span where the bending moment is maximum.",
    "image_description": "Side elevation of a single joist spanning left to right between two triangular supports. A horizontal centerline runs the length of the span. Four labeled hotspots sit on that centerline: near the left support, at the quarter-span point, at exact midspan, and at the three-quarter-span point.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.15,
        "y": 0.5,
        "w": 0.08,
        "h": 0.06
      },
      {
        "id": "z2",
        "x": 0.35,
        "y": 0.5,
        "w": 0.08,
        "h": 0.06
      },
      {
        "id": "z3",
        "x": 0.5,
        "y": 0.5,
        "w": 0.08,
        "h": 0.06
      },
      {
        "id": "z4",
        "x": 0.68,
        "y": 0.5,
        "w": 0.08,
        "h": 0.06
      }
    ],
    "correct": "z3",
    "explanation": "The correct answer is midspan: for a simply supported beam under uniform load the moment diagram is parabolic, M(x) = wx(L-x)/2, which is maximum at x = L/2. The bending stress fb = M/S must be compared against the fully adjusted Fb prime at this critical section.",
    "image": "question_images/q_7101.png",
    "domain": "wood_structures",
    "scenario_id": 71,
    "scenario_title": "Repetitive-Use Floor Joist Bending, Shear, and Deflection",
    "scenario_text": "A repetitive-use floor system uses 2x12 Douglas Fir-Larch No. 1 joists spaced 16 inches on center, simple span 14 ft between bearing walls, with 23/32 in wood structural panel sheathing nailed to the top edge. Dead load is 15 psf, floor live load is 40 psf, no snow or wet exposure. Tabulated values for DF-L No.1 2x12: Fb = 1000 psi, Fv = 180 psi, Fc-perp = 625 psi, E = 1,700,000 psi. Bearing length at each end is 3.5 in on a dry interior wood top plate."
  },
  {
    "id": 7102,
    "type": "point_and_click",
    "question": "NDS 3.4.3 permits computing the design shear at a reduced value at a distance d from the face of support rather than at the support itself. Click the location on the joist where this reduced design shear is evaluated.",
    "image_description": "Same joist elevation as the prior item, left support shown with its face marked. Four hotspots: directly at the support face, a short distance to the right of the support face equal to roughly the joist depth, at midspan, and at the opposite support face.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.13,
        "y": 0.5,
        "w": 0.06,
        "h": 0.06
      },
      {
        "id": "z2",
        "x": 0.2,
        "y": 0.5,
        "w": 0.06,
        "h": 0.06
      },
      {
        "id": "z3",
        "x": 0.5,
        "y": 0.5,
        "w": 0.08,
        "h": 0.06
      },
      {
        "id": "z4",
        "x": 0.87,
        "y": 0.5,
        "w": 0.06,
        "h": 0.06
      }
    ],
    "correct": "z2",
    "explanation": "The correct answer is the section located a distance d (the joist depth) from the face of the support: NDS 3.4.3 recognizes that a concentrated reaction adjacent to the support does not fully load the beam in shear the way load farther along the span does, so the shear demand may be taken at that offset section rather than at the full reaction. Using this reduction is optional, not mandatory.",
    "image": "question_images/q_7102.png",
    "domain": "wood_structures",
    "scenario_id": 71,
    "scenario_title": "Repetitive-Use Floor Joist Bending, Shear, and Deflection",
    "scenario_text": "A repetitive-use floor system uses 2x12 Douglas Fir-Larch No. 1 joists spaced 16 inches on center, simple span 14 ft between bearing walls, with 23/32 in wood structural panel sheathing nailed to the top edge. Dead load is 15 psf, floor live load is 40 psf, no snow or wet exposure. Tabulated values for DF-L No.1 2x12: Fb = 1000 psi, Fv = 180 psi, Fc-perp = 625 psi, E = 1,700,000 psi. Bearing length at each end is 3.5 in on a dry interior wood top plate."
  },
  {
    "id": 7103,
    "type": "point_and_click",
    "question": "This joist system qualifies for the repetitive member factor Cr. Click on the framing feature that provides the load-distributing element required for Cr to apply.",
    "image_description": "Framing plan view showing four parallel joists spaced 16 in on center with a continuous sheathing panel layer fastened across their top edges. Four labeled callouts point to: the joist spacing dimension, the sheathing panel fastened to the top edges, a species and grade stamp on one joist, and the bearing wall plate at the joist ends.",
    "hotzones": [
      {
        "id": "zA",
        "x": 0.2,
        "y": 0.25,
        "w": 0.1,
        "h": 0.06
      },
      {
        "id": "zB",
        "x": 0.5,
        "y": 0.12,
        "w": 0.12,
        "h": 0.06
      },
      {
        "id": "zC",
        "x": 0.78,
        "y": 0.45,
        "w": 0.1,
        "h": 0.06
      },
      {
        "id": "zD",
        "x": 0.5,
        "y": 0.85,
        "w": 0.12,
        "h": 0.06
      }
    ],
    "correct": "zB",
    "explanation": "The correct answer is the sheathing fastened across the top edges: Cr requires three or more parallel members not more than 24 in on center that are joined by a load-distributing element such as sheathing or subflooring. The 16 in spacing alone is necessary but not sufficient; without the sheathing tying the joists together, load could not redistribute between adjacent members.",
    "image": "question_images/q_7103.png",
    "domain": "wood_structures",
    "scenario_id": 71,
    "scenario_title": "Repetitive-Use Floor Joist Bending, Shear, and Deflection",
    "scenario_text": "A repetitive-use floor system uses 2x12 Douglas Fir-Larch No. 1 joists spaced 16 inches on center, simple span 14 ft between bearing walls, with 23/32 in wood structural panel sheathing nailed to the top edge. Dead load is 15 psf, floor live load is 40 psf, no snow or wet exposure. Tabulated values for DF-L No.1 2x12: Fb = 1000 psi, Fv = 180 psi, Fc-perp = 625 psi, E = 1,700,000 psi. Bearing length at each end is 3.5 in on a dry interior wood top plate."
  },
  {
    "id": 7104,
    "type": "drag_and_drop_position",
    "question": "Drag each adjustment factor onto the callout on the framing diagram that documents the physical condition determining whether that factor applies.",
    "image_description": "Framing diagram with four callout boxes: one noting the dead-plus-live load combination, one noting the dry interior condition with no sustained moisture, one noting the 16 in spacing with continuous sheathing, and one noting the absence of any elevated heat source near the framing.",
    "drag_items": [
      {
        "id": "d1",
        "label": "CD, load duration factor"
      },
      {
        "id": "d2",
        "label": "CM, wet service factor"
      },
      {
        "id": "d3",
        "label": "Cr, repetitive member factor"
      },
      {
        "id": "d4",
        "label": "Ct, temperature factor"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.2,
        "y": 0.15,
        "w": 0.14,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.6,
        "y": 0.15,
        "w": 0.14,
        "h": 0.08
      },
      {
        "id": "z3",
        "x": 0.2,
        "y": 0.75,
        "w": 0.14,
        "h": 0.08
      },
      {
        "id": "z4",
        "x": 0.6,
        "y": 0.75,
        "w": 0.14,
        "h": 0.08
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3",
      "z4": "d4"
    },
    "explanation": "The correct pairing is CD to the load combination note, CM to the dry-interior note, Cr to the spacing-plus-sheathing note, and Ct to the no-heat-source note. CD is set by the shortest duration load in the governing combination, CM and Ct only apply when the scenario actually describes sustained moisture or heat, and Cr requires both the spacing limit and a load-distributing element, all of which must be read from the physical description rather than assumed.",
    "image": "question_images/q_7104.png",
    "domain": "wood_structures",
    "scenario_id": 71,
    "scenario_title": "Repetitive-Use Floor Joist Bending, Shear, and Deflection",
    "scenario_text": "A repetitive-use floor system uses 2x12 Douglas Fir-Larch No. 1 joists spaced 16 inches on center, simple span 14 ft between bearing walls, with 23/32 in wood structural panel sheathing nailed to the top edge. Dead load is 15 psf, floor live load is 40 psf, no snow or wet exposure. Tabulated values for DF-L No.1 2x12: Fb = 1000 psi, Fv = 180 psi, Fc-perp = 625 psi, E = 1,700,000 psi. Bearing length at each end is 3.5 in on a dry interior wood top plate."
  },
  {
    "id": 7105,
    "type": "drag_and_drop_order",
    "question": "Arrange these steps in the correct order for determining the fully adjusted bending design value Fb prime for this joist.",
    "items": [
      {
        "id": "s1",
        "text": "Obtain the tabulated reference value Fb from the NDS Supplement for DF-L No.1"
      },
      {
        "id": "s2",
        "text": "Determine which of CD, CM, and Ct actually apply based on the real load combination, moisture, and temperature conditions"
      },
      {
        "id": "s3",
        "text": "Confirm the framing qualifies for Cr since three or more members are spaced at 16 in on center with sheathing present"
      },
      {
        "id": "s4",
        "text": "Multiply the reference Fb by every applicable factor to obtain Fb prime"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4"
    ],
    "explanation": "The correct order starts from the tabulated reference value, then screens each C-factor against the actual physical conditions before applying anything, and only multiplies at the end. Applying a factor before confirming it physically applies, such as reflexively including CM on dry interior framing, is the classic error this sequence is meant to prevent.",
    "domain": "wood_structures",
    "scenario_id": 71,
    "scenario_title": "Repetitive-Use Floor Joist Bending, Shear, and Deflection",
    "scenario_text": "A repetitive-use floor system uses 2x12 Douglas Fir-Larch No. 1 joists spaced 16 inches on center, simple span 14 ft between bearing walls, with 23/32 in wood structural panel sheathing nailed to the top edge. Dead load is 15 psf, floor live load is 40 psf, no snow or wet exposure. Tabulated values for DF-L No.1 2x12: Fb = 1000 psi, Fv = 180 psi, Fc-perp = 625 psi, E = 1,700,000 psi. Bearing length at each end is 3.5 in on a dry interior wood top plate."
  },
  {
    "id": 7106,
    "type": "drag_and_drop_position",
    "question": "Drag each label onto the matching location on the joist cross-section and support detail.",
    "image_description": "A joist cross-section shown in elevation next to its bearing support: the top fiber of the section, the bottom fiber of the section, and the end bearing area on the support plate are each marked with an empty position box.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Top fiber, checked in compression against Fb prime"
      },
      {
        "id": "d2",
        "label": "Bottom fiber, checked in tension against Fb prime"
      },
      {
        "id": "d3",
        "label": "End bearing area, checked against Fc-perpendicular prime"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.45,
        "y": 0.15,
        "w": 0.14,
        "h": 0.07
      },
      {
        "id": "z2",
        "x": 0.45,
        "y": 0.45,
        "w": 0.14,
        "h": 0.07
      },
      {
        "id": "z3",
        "x": 0.8,
        "y": 0.75,
        "w": 0.14,
        "h": 0.08
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct pairing places the compression check at the top fiber, the tension check at the bottom fiber, and the bearing check at the support. Bearing at the support is a compression-perpendicular-to-grain check against Fc-perpendicular, a physically different limit state from the bending stress check at midspan and one that uses its own reference value and its own Cb bearing area factor.",
    "image": "question_images/q_7106.png",
    "domain": "wood_structures",
    "scenario_id": 71,
    "scenario_title": "Repetitive-Use Floor Joist Bending, Shear, and Deflection",
    "scenario_text": "A repetitive-use floor system uses 2x12 Douglas Fir-Larch No. 1 joists spaced 16 inches on center, simple span 14 ft between bearing walls, with 23/32 in wood structural panel sheathing nailed to the top edge. Dead load is 15 psf, floor live load is 40 psf, no snow or wet exposure. Tabulated values for DF-L No.1 2x12: Fb = 1000 psi, Fv = 180 psi, Fc-perp = 625 psi, E = 1,700,000 psi. Bearing length at each end is 3.5 in on a dry interior wood top plate."
  },
  {
    "id": 7201,
    "type": "point_and_click",
    "question": "Click on the axis of this column that governs the stability design, based on the bracing shown.",
    "image_description": "Column elevation showing a vertical post 16 ft tall. A girt line is drawn crossing the post at 8 ft height, labeled as bracing the weak axis only. Two arrows at the base indicate the strong-axis direction and the weak-axis direction. Four hotspots mark: the strong-axis arrow, the weak-axis arrow, the girt label, and the base support.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.25,
        "y": 0.4,
        "w": 0.1,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.75,
        "y": 0.4,
        "w": 0.1,
        "h": 0.08
      },
      {
        "id": "z3",
        "x": 0.5,
        "y": 0.55,
        "w": 0.14,
        "h": 0.06
      },
      {
        "id": "z4",
        "x": 0.5,
        "y": 0.92,
        "w": 0.12,
        "h": 0.06
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the strong axis: the girt only restrains the weak axis at mid-height, leaving the strong axis unbraced for the full 16 ft. Even though the weak axis is usually more slender for an unbraced member, the bracing here flips the outcome, and stability is governed by whichever axis has the larger Le over d ratio, which is the strong axis in this case.",
    "image": "question_images/q_7201.png",
    "domain": "wood_structures",
    "scenario_id": 72,
    "scenario_title": "Sawn Lumber Column with Asymmetric Bracing",
    "scenario_text": "A 6x6 DF-L Select Structural post (actual 5.5 in square, post-and-timber size category) carries an axial dead-plus-live load of 28 kips. The post is unbraced 16 ft tall about its strong axis but is braced at 8 ft mid-height about its weak axis by a girt line. Emin prime = 580,000 psi and Fc star (Fc adjusted by every factor except Cp) = 1000 psi, CD = 1.0."
  },
  {
    "id": 7202,
    "type": "point_and_click",
    "question": "Click on the bracing element that restrains the weak axis at mid-height.",
    "image_description": "Same column elevation as the prior item. Four hotspots: the girt line crossing at mid-height, the top of the column, the base of the column, and the full-height strong-axis line with no intermediate bracing shown.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.5,
        "y": 0.5,
        "w": 0.16,
        "h": 0.05
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.08,
        "w": 0.12,
        "h": 0.06
      },
      {
        "id": "z3",
        "x": 0.5,
        "y": 0.92,
        "w": 0.12,
        "h": 0.06
      },
      {
        "id": "z4",
        "x": 0.2,
        "y": 0.3,
        "w": 0.08,
        "h": 0.4
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the girt line at mid-height: it physically restrains only the weak axis, cutting its unbraced length to 8 ft, while the strong axis remains unbraced for the full 16 ft story height. Bracing shown in an exhibit only helps the axis it actually restrains.",
    "image": "question_images/q_7202.png",
    "domain": "wood_structures",
    "scenario_id": 72,
    "scenario_title": "Sawn Lumber Column with Asymmetric Bracing",
    "scenario_text": "A 6x6 DF-L Select Structural post (actual 5.5 in square, post-and-timber size category) carries an axial dead-plus-live load of 28 kips. The post is unbraced 16 ft tall about its strong axis but is braced at 8 ft mid-height about its weak axis by a girt line. Emin prime = 580,000 psi and Fc star (Fc adjusted by every factor except Cp) = 1000 psi, CD = 1.0."
  },
  {
    "id": 7203,
    "type": "point_and_click",
    "question": "Using FcE = 0.822 Emin prime divided by (Le/d) squared, the strong axis gives Le/d = 192 in / 5.5 in = 34.9 and the weak axis gives Le/d = 96 in / 5.5 in = 17.5. Click on the callout box showing the FcE value that governs this column design.",
    "image_description": "Four labeled result boxes arranged in a row above the column diagram: one reading FcE = 391 psi (strong axis), one reading FcE = 1566 psi (weak axis), one reading FcE = 620,000 psi, and one reading FcE = 1000 psi.",
    "hotzones": [
      {
        "id": "zA",
        "x": 0.15,
        "y": 0.1,
        "w": 0.18,
        "h": 0.08
      },
      {
        "id": "zB",
        "x": 0.4,
        "y": 0.1,
        "w": 0.18,
        "h": 0.08
      },
      {
        "id": "zC",
        "x": 0.63,
        "y": 0.1,
        "w": 0.18,
        "h": 0.08
      },
      {
        "id": "zD",
        "x": 0.85,
        "y": 0.1,
        "w": 0.14,
        "h": 0.08
      }
    ],
    "correct": "zA",
    "explanation": "The correct answer is FcE = 391 psi: computing 0.822 x 580,000 / (34.9 squared) gives about 391 psi for the governing strong axis, which is lower than the weak-axis value of about 1566 psi. The lower FcE governs because it represents the more critical buckling condition, and 620,000 psi and 1000 psi are simply Emin prime and Fc star themselves, not FcE.",
    "image": "question_images/q_7203.png",
    "domain": "wood_structures",
    "scenario_id": 72,
    "scenario_title": "Sawn Lumber Column with Asymmetric Bracing",
    "scenario_text": "A 6x6 DF-L Select Structural post (actual 5.5 in square, post-and-timber size category) carries an axial dead-plus-live load of 28 kips. The post is unbraced 16 ft tall about its strong axis but is braced at 8 ft mid-height about its weak axis by a girt line. Emin prime = 580,000 psi and Fc star (Fc adjusted by every factor except Cp) = 1000 psi, CD = 1.0."
  },
  {
    "id": 7204,
    "type": "drag_and_drop_position",
    "question": "Drag each column parameter c-value onto the member type it applies to per NDS 3.7.1.",
    "image_description": "Three labeled material callouts arranged left to right: sawn lumber post, round timber pole, and structural glued laminated timber or structural composite lumber column.",
    "drag_items": [
      {
        "id": "d1",
        "label": "c = 0.8"
      },
      {
        "id": "d2",
        "label": "c = 0.85"
      },
      {
        "id": "d3",
        "label": "c = 0.9"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.2,
        "y": 0.5,
        "w": 0.16,
        "h": 0.1
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.5,
        "w": 0.16,
        "h": 0.1
      },
      {
        "id": "z3",
        "x": 0.8,
        "y": 0.5,
        "w": 0.16,
        "h": 0.1
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct pairing is c = 0.8 for sawn lumber, c = 0.85 for round timber poles, and c = 0.9 for glulam and structural composite lumber. Picking the wrong c for a given member type meaningfully changes the resulting Cp, so the member material must be identified correctly before the Cp equation is solved.",
    "image": "question_images/q_7204.png",
    "domain": "wood_structures",
    "scenario_id": 72,
    "scenario_title": "Sawn Lumber Column with Asymmetric Bracing",
    "scenario_text": "A 6x6 DF-L Select Structural post (actual 5.5 in square, post-and-timber size category) carries an axial dead-plus-live load of 28 kips. The post is unbraced 16 ft tall about its strong axis but is braced at 8 ft mid-height about its weak axis by a girt line. Emin prime = 580,000 psi and Fc star (Fc adjusted by every factor except Cp) = 1000 psi, CD = 1.0."
  },
  {
    "id": 7205,
    "type": "drag_and_drop_order",
    "question": "Arrange these steps in the correct order for determining Cp and Fc prime for this column.",
    "items": [
      {
        "id": "s1",
        "text": "Determine the unbraced length and section dimension for each axis using the actual bracing shown"
      },
      {
        "id": "s2",
        "text": "Compute Le/d for each axis and identify the axis with the larger ratio as governing"
      },
      {
        "id": "s3",
        "text": "Compute FcE using the governing axis ratio and Emin prime"
      },
      {
        "id": "s4",
        "text": "Determine Fc star, the compression value adjusted by every factor except Cp"
      },
      {
        "id": "s5",
        "text": "Solve the NDS 3.7.1 Cp equation using FcE, Fc star, and c = 0.8 for sawn lumber, then multiply Fc star by Cp to get Fc prime"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4",
      "s5"
    ],
    "explanation": "The correct sequence identifies the governing axis first, since computing FcE for the wrong axis wastes the calculation, then develops FcE and Fc star independently before combining them through the Cp equation. Skipping the axis comparison and defaulting to whichever axis seems more slender by habit is a common source of error.",
    "domain": "wood_structures",
    "scenario_id": 72,
    "scenario_title": "Sawn Lumber Column with Asymmetric Bracing",
    "scenario_text": "A 6x6 DF-L Select Structural post (actual 5.5 in square, post-and-timber size category) carries an axial dead-plus-live load of 28 kips. The post is unbraced 16 ft tall about its strong axis but is braced at 8 ft mid-height about its weak axis by a girt line. Emin prime = 580,000 psi and Fc star (Fc adjusted by every factor except Cp) = 1000 psi, CD = 1.0."
  },
  {
    "id": 7206,
    "type": "drag_and_drop_position",
    "question": "Drag each label onto its matching location on the column elevation.",
    "image_description": "Column elevation with the girt at mid-height as in prior items. Three position boxes: the full 16 ft strong-axis line, the braced 8 ft weak-axis segment, and the column base where axial stress is checked.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Governing axis, unbraced full height"
      },
      {
        "id": "d2",
        "label": "Non-governing axis, braced at mid-height"
      },
      {
        "id": "d3",
        "label": "Location of maximum axial compressive stress"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.25,
        "y": 0.4,
        "w": 0.14,
        "h": 0.5
      },
      {
        "id": "z2",
        "x": 0.75,
        "y": 0.65,
        "w": 0.14,
        "h": 0.25
      },
      {
        "id": "z3",
        "x": 0.5,
        "y": 0.93,
        "w": 0.14,
        "h": 0.06
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct pairing places the governing full-height strong axis, the braced weak-axis segment, and the base of the column where the full axial load is carried and Fc prime is compared against P/A. All three locations must be identified correctly before the design check can be completed.",
    "image": "question_images/q_7206.png",
    "domain": "wood_structures",
    "scenario_id": 72,
    "scenario_title": "Sawn Lumber Column with Asymmetric Bracing",
    "scenario_text": "A 6x6 DF-L Select Structural post (actual 5.5 in square, post-and-timber size category) carries an axial dead-plus-live load of 28 kips. The post is unbraced 16 ft tall about its strong axis but is braced at 8 ft mid-height about its weak axis by a girt line. Emin prime = 580,000 psi and Fc star (Fc adjusted by every factor except Cp) = 1000 psi, CD = 1.0."
  },
  {
    "id": 7301,
    "type": "point_and_click",
    "question": "Click on the location in this cross-section where Mode Im, wood bearing failure in the main member, would initiate.",
    "image_description": "Cross-section sandwich showing steel plate, wood main member, steel plate, with a horizontal bolt passing through all three. Four hotspots: the wood-to-bolt bearing contact surface inside the main member, the steel plate hole edge, the bolt at mid-length within the wood, and the bolt head outside the plate.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.5,
        "y": 0.55,
        "w": 0.14,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.2,
        "y": 0.4,
        "w": 0.1,
        "h": 0.06
      },
      {
        "id": "z3",
        "x": 0.5,
        "y": 0.3,
        "w": 0.14,
        "h": 0.06
      },
      {
        "id": "z4",
        "x": 0.08,
        "y": 0.55,
        "w": 0.06,
        "h": 0.08
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the wood bearing contact surface inside the main member: Mode Im describes crushing of the wood fibers directly under the bolt shank in the main member, which is one of the failure modes NDS Table 12.3.1B evaluates for a steel-side-plate connection, alongside side plate bearing and bolt bending modes.",
    "image": "question_images/q_7301.png",
    "domain": "wood_structures",
    "scenario_id": 73,
    "scenario_title": "Bolted Wood-to-Steel Connection Yield Modes",
    "scenario_text": "A wood main member, a DF-L No.1 4x member 3.5 in thick, is connected in double shear between two steel side plates using a row of four 3/4 in diameter bolts spaced 3 in on center along the grain, with a 2 in end distance. The connection resists wind uplift, so CD = 1.6. Because the side members are steel plates rather than wood, NDS Table 12.3.1B governs and only three yield modes apply: Im (main member bearing), Is (steel side plate bearing/yielding), and IV (double plastic hinge, double shear). A single-hinge mode like IIIs does not apply to this steel-side-plate geometry. Im = 1200 lb, Is = 2600 lb, IV = 1450 lb."
  },
  {
    "id": 7302,
    "type": "point_and_click",
    "question": "Click on the point along the bolt where a plastic hinge would form under yield Mode IV, the two-hinge double shear mode.",
    "image_description": "Same cross-section as the prior item, with the bolt drawn passing through both wood-steel interfaces. Four hotspots: at the interface between the wood and the left steel plate, at the exact center of the bolt within the wood, at the bolt head, and beyond the right steel plate outside the connection.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.35,
        "y": 0.5,
        "w": 0.06,
        "h": 0.06
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.5,
        "w": 0.08,
        "h": 0.06
      },
      {
        "id": "z3",
        "x": 0.08,
        "y": 0.55,
        "w": 0.06,
        "h": 0.08
      },
      {
        "id": "z4",
        "x": 0.92,
        "y": 0.5,
        "w": 0.06,
        "h": 0.08
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is near the wood-to-side-plate interface: Mode IV forms two plastic hinges in the bolt, one near each shear plane where the wood meets a steel side plate, rather than a single hinge at the bolt center. This double-hinge mechanism is what Mode IV requires for a steel-side-plate double shear connection, where a single-hinge mode does not apply.",
    "image": "question_images/q_7302.png",
    "domain": "wood_structures",
    "scenario_id": 73,
    "scenario_title": "Bolted Wood-to-Steel Connection Yield Modes",
    "scenario_text": "A wood main member, a DF-L No.1 4x member 3.5 in thick, is connected in double shear between two steel side plates using a row of four 3/4 in diameter bolts spaced 3 in on center along the grain, with a 2 in end distance. The connection resists wind uplift, so CD = 1.6. Because the side members are steel plates rather than wood, NDS Table 12.3.1B governs and only three yield modes apply: Im (main member bearing), Is (steel side plate bearing/yielding), and IV (double plastic hinge, double shear). A single-hinge mode like IIIs does not apply to this steel-side-plate geometry. Im = 1200 lb, Is = 2600 lb, IV = 1450 lb."
  },
  {
    "id": 7303,
    "type": "point_and_click",
    "question": "Given the four calculated yield mode values, click on the box showing the single Z value that governs this connection.",
    "image_description": "Three result boxes in a row reading 'Im = 1200 lb', 'Is = 2600 lb', and 'IV = 1450 lb'.",
    "hotzones": [
      {
        "id": "zA",
        "x": 0.22,
        "y": 0.5,
        "w": 0.18,
        "h": 0.1
      },
      {
        "id": "zB",
        "x": 0.5,
        "y": 0.5,
        "w": 0.18,
        "h": 0.1
      },
      {
        "id": "zC",
        "x": 0.78,
        "y": 0.5,
        "w": 0.18,
        "h": 0.1
      }
    ],
    "correct": "zA",
    "explanation": "The correct answer is Im = 1200 lb: NDS 12.3 requires taking the lowest of all applicable yield mode values as the governing per-bolt design value Z, because that is the failure mode that actually occurs first in the physical connection. Only Im, Is, and IV apply to this steel-side-plate double shear connection, and Im is the lowest of the three, so it governs. Choosing a higher mode value would overstate the connection capacity.",
    "image": "question_images/q_7303.png",
    "domain": "wood_structures",
    "scenario_id": 73,
    "scenario_title": "Bolted Wood-to-Steel Connection Yield Modes",
    "scenario_text": "A wood main member, a DF-L No.1 4x member 3.5 in thick, is connected in double shear between two steel side plates using a row of four 3/4 in diameter bolts spaced 3 in on center along the grain, with a 2 in end distance. The connection resists wind uplift, so CD = 1.6. Because the side members are steel plates rather than wood, NDS Table 12.3.1B governs and only three yield modes apply: Im (main member bearing), Is (steel side plate bearing/yielding), and IV (double plastic hinge, double shear). A single-hinge mode like IIIs does not apply to this steel-side-plate geometry. Im = 1200 lb, Is = 2600 lb, IV = 1450 lb."
  },
  {
    "id": 7304,
    "type": "drag_and_drop_order",
    "question": "Arrange these yield modes in order from lowest to highest calculated Z value for this connection.",
    "items": [
      {
        "id": "s1",
        "text": "Im, main member bearing (1200 lb)"
      },
      {
        "id": "s2",
        "text": "IV, double plastic hinge (1450 lb)"
      },
      {
        "id": "s3",
        "text": "Is, side plate bearing/yielding (2600 lb)"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3"
    ],
    "explanation": "The correct order from lowest to highest is Im, IV, then Is. The lowest value, Im at 1200 lb, governs the connection design regardless of how much higher the other modes are, since the governing failure mode is always the weakest link, not an average or the largest value.",
    "domain": "wood_structures",
    "scenario_id": 73,
    "scenario_title": "Bolted Wood-to-Steel Connection Yield Modes",
    "scenario_text": "A wood main member, a DF-L No.1 4x member 3.5 in thick, is connected in double shear between two steel side plates using a row of four 3/4 in diameter bolts spaced 3 in on center along the grain, with a 2 in end distance. The connection resists wind uplift, so CD = 1.6. Because the side members are steel plates rather than wood, NDS Table 12.3.1B governs and only three yield modes apply: Im (main member bearing), Is (steel side plate bearing/yielding), and IV (double plastic hinge, double shear). A single-hinge mode like IIIs does not apply to this steel-side-plate geometry. Im = 1200 lb, Is = 2600 lb, IV = 1450 lb."
  },
  {
    "id": 7305,
    "type": "drag_and_drop_position",
    "question": "Drag each adjustment factor onto the callout describing the physical condition it accounts for in this connection.",
    "image_description": "Connection drawing with three callouts: a note indicating the wind uplift loading, a note indicating the four bolts arranged in a single row, and a note indicating the 2 in end distance and 3 in spacing.",
    "drag_items": [
      {
        "id": "d1",
        "label": "CD, load duration factor"
      },
      {
        "id": "d2",
        "label": "Cg, group action factor"
      },
      {
        "id": "d3",
        "label": "C-delta, geometry factor"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.2,
        "y": 0.15,
        "w": 0.16,
        "h": 0.07
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.15,
        "w": 0.16,
        "h": 0.07
      },
      {
        "id": "z3",
        "x": 0.8,
        "y": 0.15,
        "w": 0.16,
        "h": 0.07
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct pairing is CD to the wind loading note, Cg to the four-bolt row note, and C-delta to the spacing and end distance note. Cg accounts for uneven load sharing among fasteners in a row, while C-delta penalizes spacing or end distance that falls short of the tabulated full-value baseline; fasteners never receive Cr or CF, which belong only to bending members.",
    "image": "question_images/q_7305.png",
    "domain": "wood_structures",
    "scenario_id": 73,
    "scenario_title": "Bolted Wood-to-Steel Connection Yield Modes",
    "scenario_text": "A wood main member, a DF-L No.1 4x member 3.5 in thick, is connected in double shear between two steel side plates using a row of four 3/4 in diameter bolts spaced 3 in on center along the grain, with a 2 in end distance. The connection resists wind uplift, so CD = 1.6. Because the side members are steel plates rather than wood, NDS Table 12.3.1B governs and only three yield modes apply: Im (main member bearing), Is (steel side plate bearing/yielding), and IV (double plastic hinge, double shear). A single-hinge mode like IIIs does not apply to this steel-side-plate geometry. Im = 1200 lb, Is = 2600 lb, IV = 1450 lb."
  },
  {
    "id": 7306,
    "type": "drag_and_drop_position",
    "question": "Drag each label onto its matching component in the connection cross-section.",
    "image_description": "Cross-section sandwich as in earlier items: wood main member in the center, steel plates on each outer face, bolt passing horizontally through all three.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Main member, wood, bearing Mode Im applies"
      },
      {
        "id": "d2",
        "label": "Side member, steel plate"
      },
      {
        "id": "d3",
        "label": "Fastener, bolt, bending yield modes apply"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.5,
        "y": 0.521,
        "w": 0.16,
        "h": 0.16
      },
      {
        "id": "z2",
        "x": 0.12,
        "y": 0.5,
        "w": 0.08,
        "h": 0.16
      },
      {
        "id": "z3",
        "x": 0.5,
        "y": 0.479,
        "w": 0.5,
        "h": 0.03
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct pairing places the wood main member at center where Im bearing crushing occurs, the steel side plate at the outer face where Is bearing/yielding occurs, and the bolt shaft where the bending yield mode IV occurs. Each yield mode equation models a distinct component of this same connection.",
    "image": "question_images/q_7306.png",
    "domain": "wood_structures",
    "scenario_id": 73,
    "scenario_title": "Bolted Wood-to-Steel Connection Yield Modes",
    "scenario_text": "A wood main member, a DF-L No.1 4x member 3.5 in thick, is connected in double shear between two steel side plates using a row of four 3/4 in diameter bolts spaced 3 in on center along the grain, with a 2 in end distance. The connection resists wind uplift, so CD = 1.6. Because the side members are steel plates rather than wood, NDS Table 12.3.1B governs and only three yield modes apply: Im (main member bearing), Is (steel side plate bearing/yielding), and IV (double plastic hinge, double shear). A single-hinge mode like IIIs does not apply to this steel-side-plate geometry. Im = 1200 lb, Is = 2600 lb, IV = 1450 lb."
  },
  {
    "id": 7401,
    "type": "point_and_click",
    "question": "Click on the callout that must be checked against the SDPWS 4.3.4 aspect ratio limit of 2 to 1.",
    "image_description": "Wall elevation, 8 ft tall by 4 ft wide, with four labeled callout boxes: H/W = 2.0, W/H = 0.5, H = 8 ft, and W = 4 ft.",
    "hotzones": [
      {
        "id": "zA",
        "x": 0.2,
        "y": 0.15,
        "w": 0.16,
        "h": 0.07
      },
      {
        "id": "zB",
        "x": 0.5,
        "y": 0.15,
        "w": 0.16,
        "h": 0.07
      },
      {
        "id": "zC",
        "x": 0.2,
        "y": 0.85,
        "w": 0.14,
        "h": 0.07
      },
      {
        "id": "zD",
        "x": 0.5,
        "y": 0.85,
        "w": 0.14,
        "h": 0.07
      }
    ],
    "correct": "zA",
    "explanation": "The correct answer is H/W = 2.0: SDPWS 4.3.4 limits blocked wood structural panel shear walls to a height to width ratio of 2 to 1 to use the tabulated capacity without reduction. This wall's ratio of 8 ft to 4 ft equals exactly 2.0, so it just qualifies for the full tabulated unit shear value.",
    "image": "question_images/q_7401.png",
    "domain": "wood_structures",
    "scenario_id": 74,
    "scenario_title": "Blocked Wood Structural Panel Shear Wall Aspect Ratio and Unit Shear",
    "scenario_text": "A blocked shear wall segment is 8 ft tall and 4 ft wide, sheathed with 15/32 in wood structural panel, 8d common nails at 4 in on center at panel edges and 12 in on center in the field, minimum 2x4 framing. SDPWS Table 4.3A gives an ASD unit shear capacity of 340 plf for this nailing schedule. The design seismic shear demand delivered to this wall segment is 1200 lb total."
  },
  {
    "id": 7402,
    "type": "point_and_click",
    "question": "Click on the region of the panel where the 4 in on center edge nailing schedule applies.",
    "image_description": "Wall elevation showing a single sheathing panel outline with its perimeter shaded darker than the interior field. Four hotspots: the panel perimeter/edge zone, the panel field center, the top plate only, and the sill plate only.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.15000000000000002,
        "y": 0.081,
        "w": 0.7,
        "h": 0.06
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.5,
        "w": 0.2,
        "h": 0.2
      },
      {
        "id": "z3",
        "x": 0.5,
        "y": 0.03900000000000001,
        "w": 0.4,
        "h": 0.03
      },
      {
        "id": "z4",
        "x": 0.5,
        "y": 0.95,
        "w": 0.4,
        "h": 0.03
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the panel perimeter zone: the closer 4 in on center nail spacing applies at all panel edges, while the field of the panel uses the wider 12 in on center spacing. This edge-versus-field distinction is what the SDPWS table nailing schedule specifies and what makes the wall a blocked shear wall when the horizontal edges are also nailed to blocking.",
    "image": "question_images/q_7402.png",
    "domain": "wood_structures",
    "scenario_id": 74,
    "scenario_title": "Blocked Wood Structural Panel Shear Wall Aspect Ratio and Unit Shear",
    "scenario_text": "A blocked shear wall segment is 8 ft tall and 4 ft wide, sheathed with 15/32 in wood structural panel, 8d common nails at 4 in on center at panel edges and 12 in on center in the field, minimum 2x4 framing. SDPWS Table 4.3A gives an ASD unit shear capacity of 340 plf for this nailing schedule. The design seismic shear demand delivered to this wall segment is 1200 lb total."
  },
  {
    "id": 7403,
    "type": "point_and_click",
    "question": "Click on the box showing the correctly computed unit shear check for this wall segment.",
    "image_description": "Four result boxes: v = 300 plf demand, 340 plf capacity, wall is adequate; v = 1200 plf demand, 340 plf capacity, inadequate; v = 150 plf demand, 340 plf capacity, adequate; v = 340 plf demand, 300 plf capacity, inadequate.",
    "hotzones": [
      {
        "id": "zA",
        "x": 0.15000000000000002,
        "y": 0.10999999999999999,
        "w": 0.7,
        "h": 0.08
      },
      {
        "id": "zB",
        "x": 0.15000000000000002,
        "y": 0.31,
        "w": 0.7,
        "h": 0.08
      },
      {
        "id": "zC",
        "x": 0.15000000000000002,
        "y": 0.51,
        "w": 0.7,
        "h": 0.08
      },
      {
        "id": "zD",
        "x": 0.15000000000000002,
        "y": 0.71,
        "w": 0.7,
        "h": 0.08
      }
    ],
    "correct": "zA",
    "explanation": "The correct answer is v = 300 plf demand versus 340 plf capacity, adequate: unit shear demand is the total shear divided by the wall length, 1200 lb divided by 4 ft equals 300 plf, which is less than the 340 plf tabulated capacity. The other boxes either skip the division by wall length or swap demand and capacity.",
    "image": "question_images/q_7403.png",
    "domain": "wood_structures",
    "scenario_id": 74,
    "scenario_title": "Blocked Wood Structural Panel Shear Wall Aspect Ratio and Unit Shear",
    "scenario_text": "A blocked shear wall segment is 8 ft tall and 4 ft wide, sheathed with 15/32 in wood structural panel, 8d common nails at 4 in on center at panel edges and 12 in on center in the field, minimum 2x4 framing. SDPWS Table 4.3A gives an ASD unit shear capacity of 340 plf for this nailing schedule. The design seismic shear demand delivered to this wall segment is 1200 lb total."
  },
  {
    "id": 7404,
    "type": "drag_and_drop_order",
    "question": "Arrange these shear wall design checks in the sequence a designer should perform them.",
    "items": [
      {
        "id": "s1",
        "text": "Compute the unit shear demand v = V/b using the design story shear and wall segment length"
      },
      {
        "id": "s2",
        "text": "Look up the ASD unit shear capacity from SDPWS Table 4.3A for the selected panel and nailing schedule"
      },
      {
        "id": "s3",
        "text": "Check the wall segment aspect ratio h/w against the SDPWS 4.3.4 limit of 2 to 1"
      },
      {
        "id": "s4",
        "text": "Compare demand to capacity and confirm adequacy, then design the boundary chord and holdown for overturning"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4"
    ],
    "explanation": "The correct order computes the demand, pulls the tabulated capacity, then applies the aspect ratio check as a separate geometry screen before finalizing the design. A wall segment can look adequate on unit shear capacity alone and still fail the aspect ratio check if it is unusually tall and narrow, so this check cannot be skipped or folded into the table lookup.",
    "domain": "wood_structures",
    "scenario_id": 74,
    "scenario_title": "Blocked Wood Structural Panel Shear Wall Aspect Ratio and Unit Shear",
    "scenario_text": "A blocked shear wall segment is 8 ft tall and 4 ft wide, sheathed with 15/32 in wood structural panel, 8d common nails at 4 in on center at panel edges and 12 in on center in the field, minimum 2x4 framing. SDPWS Table 4.3A gives an ASD unit shear capacity of 340 plf for this nailing schedule. The design seismic shear demand delivered to this wall segment is 1200 lb total."
  },
  {
    "id": 7405,
    "type": "drag_and_drop_position",
    "question": "Drag each label onto its matching location on the shear wall elevation.",
    "image_description": "Wall elevation with a vertical boundary post at each end, a holdown device shown bolted at the base of each end post, and the panel field between them.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Chord/boundary member, resists overturning tension and compression"
      },
      {
        "id": "d2",
        "label": "Holdown, restrains uplift at the base"
      },
      {
        "id": "d3",
        "label": "Sheathing nailing, transfers in-plane shear"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.15,
        "y": 0.3,
        "w": 0.1,
        "h": 0.5
      },
      {
        "id": "z2",
        "x": 0.15,
        "y": 0.92,
        "w": 0.12,
        "h": 0.06
      },
      {
        "id": "z3",
        "x": 0.5,
        "y": 0.5,
        "w": 0.3,
        "h": 0.3
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct pairing places the chord along the full-height boundary post, the holdown at the base connection resisting uplift, and the sheathing nailing across the panel field transferring shear into the framing. All three elements act together to complete the load path for a shear wall segment.",
    "image": "question_images/q_7405.png",
    "domain": "wood_structures",
    "scenario_id": 74,
    "scenario_title": "Blocked Wood Structural Panel Shear Wall Aspect Ratio and Unit Shear",
    "scenario_text": "A blocked shear wall segment is 8 ft tall and 4 ft wide, sheathed with 15/32 in wood structural panel, 8d common nails at 4 in on center at panel edges and 12 in on center in the field, minimum 2x4 framing. SDPWS Table 4.3A gives an ASD unit shear capacity of 340 plf for this nailing schedule. The design seismic shear demand delivered to this wall segment is 1200 lb total."
  },
  {
    "id": 7406,
    "type": "drag_and_drop_position",
    "question": "Drag each label onto the wall diagram it describes.",
    "image_description": "Two side-by-side wall elevation diagrams. Diagram A shows a horizontal blocking member installed at the mid-height panel joint with nails driven into it. Diagram B shows the same joint with a visible gap and no blocking member.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Blocked shear wall, all panel edges nailed to framing"
      },
      {
        "id": "d2",
        "label": "Unblocked shear wall, horizontal panel edges unsupported"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.07500000000000001,
        "y": 0.15000000000000002,
        "w": 0.35,
        "h": 0.7
      },
      {
        "id": "z2",
        "x": 0.575,
        "y": 0.15000000000000002,
        "w": 0.35,
        "h": 0.7
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2"
    },
    "explanation": "The correct pairing is Diagram A as blocked, since the horizontal panel joint is backed by blocking that all panel edges can be nailed to, and Diagram B as unblocked, since the unsupported horizontal joint cannot develop the tabulated blocked shear wall capacity. This distinction determines which SDPWS table column applies.",
    "image": "question_images/q_7406.png",
    "domain": "wood_structures",
    "scenario_id": 74,
    "scenario_title": "Blocked Wood Structural Panel Shear Wall Aspect Ratio and Unit Shear",
    "scenario_text": "A blocked shear wall segment is 8 ft tall and 4 ft wide, sheathed with 15/32 in wood structural panel, 8d common nails at 4 in on center at panel edges and 12 in on center in the field, minimum 2x4 framing. SDPWS Table 4.3A gives an ASD unit shear capacity of 340 plf for this nailing schedule. The design seismic shear demand delivered to this wall segment is 1200 lb total."
  },
  {
    "id": 7501,
    "type": "point_and_click",
    "question": "Click on the location along the diaphragm length where the chord force is maximum.",
    "image_description": "Plan view of a rectangular diaphragm, 60 ft long horizontally and 40 ft deep vertically, with chord members running along the top and bottom long edges. Four hotspots: midspan chord location, chord location near the left shear wall, the interior field center of the diaphragm, and a corner of the diaphragm.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.5,
        "y": 0.08,
        "w": 0.14,
        "h": 0.06
      },
      {
        "id": "z2",
        "x": 0.12,
        "y": 0.08,
        "w": 0.1,
        "h": 0.06
      },
      {
        "id": "z3",
        "x": 0.5,
        "y": 0.5,
        "w": 0.14,
        "h": 0.1
      },
      {
        "id": "z4",
        "x": 0.06,
        "y": 0.94,
        "w": 0.08,
        "h": 0.06
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the midspan chord location: chord force is generated by the diaphragm bending moment, which is maximum at midspan for a simply supported diaphragm under uniform load, the same wL squared over 8 relationship used for a beam. The chord member at that location carries the largest tension or compression force.",
    "image": "question_images/q_7501.png",
    "domain": "wood_structures",
    "scenario_id": 75,
    "scenario_title": "Wood Diaphragm Shear and Chord Force",
    "scenario_text": "A roof diaphragm spans 60 ft between two shear walls, one at each end, and is 40 ft deep in the direction perpendicular to the span. Seismic force on the diaphragm is uniformly distributed along its length at w = 400 plf, giving a total of 24 kips resisted by the two end shear walls."
  },
  {
    "id": 7502,
    "type": "point_and_click",
    "question": "Click on the location where diaphragm shear is maximum.",
    "image_description": "Same diaphragm plan as the prior item. Four hotspots: just inside the left shear wall boundary, midspan, a point on the right half of the interior field, and the mid-depth center of the diaphragm.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.04,
        "y": 0.15000000000000002,
        "w": 0.08,
        "h": 0.7
      },
      {
        "id": "z2",
        "x": 0.536,
        "y": 0.5,
        "w": 0.1,
        "h": 0.1
      },
      {
        "id": "z3",
        "x": 0.7,
        "y": 0.5,
        "w": 0.1,
        "h": 0.1
      },
      {
        "id": "z4",
        "x": 0.46399999999999997,
        "y": 0.5,
        "w": 0.06,
        "h": 0.06
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is at the diaphragm boundary near the shear wall: like a simply supported beam, shear is maximum at the supports and zero at midspan, so the diaphragm sheathing nailing near each shear wall boundary carries the highest unit shear demand.",
    "image": "question_images/q_7502.png",
    "domain": "wood_structures",
    "scenario_id": 75,
    "scenario_title": "Wood Diaphragm Shear and Chord Force",
    "scenario_text": "A roof diaphragm spans 60 ft between two shear walls, one at each end, and is 40 ft deep in the direction perpendicular to the span. Seismic force on the diaphragm is uniformly distributed along its length at w = 400 plf, giving a total of 24 kips resisted by the two end shear walls."
  },
  {
    "id": 7503,
    "type": "point_and_click",
    "question": "The maximum diaphragm moment is M = wL squared / 8 = 400 plf x 60 ft squared / 8 = 180,000 lb-ft, and the diaphragm depth is 40 ft. Click on the box with the correctly computed chord force.",
    "image_description": "Four result boxes: 4,500 lb; 9,000 lb; 12,000 lb; 180,000 lb.",
    "hotzones": [
      {
        "id": "zA",
        "x": 0.15,
        "y": 0.5,
        "w": 0.16,
        "h": 0.08
      },
      {
        "id": "zB",
        "x": 0.4,
        "y": 0.5,
        "w": 0.16,
        "h": 0.08
      },
      {
        "id": "zC",
        "x": 0.614,
        "y": 0.5,
        "w": 0.16,
        "h": 0.08
      },
      {
        "id": "zD",
        "x": 0.786,
        "y": 0.46,
        "w": 0.16,
        "h": 0.08
      }
    ],
    "correct": "zA",
    "explanation": "The correct answer is 4,500 lb: chord force equals moment divided by diaphragm depth, 180,000 lb-ft divided by 40 ft equals 4,500 lb. The 9,000 lb box results from mistakenly using half the depth, the 12,000 lb box is actually the maximum shear value, and 180,000 lb is the unresolved moment itself.",
    "image": "question_images/q_7503.png",
    "domain": "wood_structures",
    "scenario_id": 75,
    "scenario_title": "Wood Diaphragm Shear and Chord Force",
    "scenario_text": "A roof diaphragm spans 60 ft between two shear walls, one at each end, and is 40 ft deep in the direction perpendicular to the span. Seismic force on the diaphragm is uniformly distributed along its length at w = 400 plf, giving a total of 24 kips resisted by the two end shear walls."
  },
  {
    "id": 7504,
    "type": "drag_and_drop_order",
    "question": "Arrange the load path for lateral seismic force through this diaphragm system in the correct order.",
    "items": [
      {
        "id": "s1",
        "text": "Seismic inertial force distributes along the diaphragm length as a uniform load w"
      },
      {
        "id": "s2",
        "text": "Diaphragm sheathing nailing transfers in-plane shear toward the diaphragm boundary"
      },
      {
        "id": "s3",
        "text": "The resulting bending moment resolves into a chord force at the diaphragm edge"
      },
      {
        "id": "s4",
        "text": "The chord force is carried through the chord member and its splice connections"
      },
      {
        "id": "s5",
        "text": "Boundary shear is delivered into the shear walls at each end of the diaphragm"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4",
      "s5"
    ],
    "explanation": "The correct order traces the force from its origin as distributed inertial load, through the sheathing shear transfer, into the moment-driven chord force and its connections, and finally into the shear walls that anchor the diaphragm. Each stage depends on the one before it, which is why chord splice design cannot be checked until the chord force itself has been determined.",
    "domain": "wood_structures",
    "scenario_id": 75,
    "scenario_title": "Wood Diaphragm Shear and Chord Force",
    "scenario_text": "A roof diaphragm spans 60 ft between two shear walls, one at each end, and is 40 ft deep in the direction perpendicular to the span. Seismic force on the diaphragm is uniformly distributed along its length at w = 400 plf, giving a total of 24 kips resisted by the two end shear walls."
  },
  {
    "id": 7505,
    "type": "drag_and_drop_position",
    "question": "Drag each label onto its matching location on the diaphragm plan.",
    "image_description": "Diaphragm plan view, 60 ft long by 40 ft deep, with a member running along the long top edge parallel to the span, a short perpendicular member feeding into a discontinuous shear wall segment, and the sheathed panel field in the interior.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Chord member, parallel to the span"
      },
      {
        "id": "d2",
        "label": "Collector/drag strut, perpendicular to the span"
      },
      {
        "id": "d3",
        "label": "Diaphragm sheathing, panel field"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.15000000000000002,
        "y": 0.034999999999999996,
        "w": 0.7,
        "h": 0.05
      },
      {
        "id": "z2",
        "x": 0.85,
        "y": 0.5,
        "w": 0.06,
        "h": 0.5
      },
      {
        "id": "z3",
        "x": 0.2,
        "y": 0.2,
        "w": 0.4,
        "h": 0.6
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct pairing places the chord along the long edge parallel to the span where it resists the bending-induced tension or compression, the collector perpendicular to the span feeding diaphragm shear into a discontinuous shear wall, and the sheathing across the panel field where in-plane shear is actually transferred by nailing.",
    "image": "question_images/q_7505.png",
    "domain": "wood_structures",
    "scenario_id": 75,
    "scenario_title": "Wood Diaphragm Shear and Chord Force",
    "scenario_text": "A roof diaphragm spans 60 ft between two shear walls, one at each end, and is 40 ft deep in the direction perpendicular to the span. Seismic force on the diaphragm is uniformly distributed along its length at w = 400 plf, giving a total of 24 kips resisted by the two end shear walls."
  },
  {
    "id": 7506,
    "type": "drag_and_drop_position",
    "question": "Drag each label onto its matching location along the diaphragm span, treating the diaphragm like a horizontal beam.",
    "image_description": "Elevation-style beam analogy diagram of the diaphragm span, 60 ft long, with two labeled positions: midspan and the end supports.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Maximum moment, zero shear"
      },
      {
        "id": "d2",
        "label": "Maximum shear, zero moment"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.5,
        "y": 0.5,
        "w": 0.16,
        "h": 0.1
      },
      {
        "id": "z2",
        "x": 0.05,
        "y": 0.2,
        "w": 0.1,
        "h": 0.6
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2"
    },
    "explanation": "The correct pairing places maximum moment and zero shear at midspan, and maximum shear and zero moment at the supports, exactly analogous to a simply supported beam under uniform load. This is why the chord force is checked at midspan while the sheathing nailing shear check is critical near the shear wall boundaries.",
    "image": "question_images/q_7506.png",
    "domain": "wood_structures",
    "scenario_id": 75,
    "scenario_title": "Wood Diaphragm Shear and Chord Force",
    "scenario_text": "A roof diaphragm spans 60 ft between two shear walls, one at each end, and is 40 ft deep in the direction perpendicular to the span. Seismic force on the diaphragm is uniformly distributed along its length at w = 400 plf, giving a total of 24 kips resisted by the two end shear walls."
  },
  {
    "id": 7601,
    "type": "point_and_click",
    "question": "Click on the location on the beam elevation showing the continuous lateral bracing of the compression edge.",
    "image_description": "Beam elevation with roof sheathing panels drawn along the top edge with nail marks, plus a cross-section inset showing the 6.75 in by 30 in section. Four hotspots: the top/compression edge with sheathing nailing, the bottom/tension edge, the mid-depth web area, and the end bearing area.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.2,
        "y": 0.07,
        "w": 0.6,
        "h": 0.06
      },
      {
        "id": "z2",
        "x": 0.2,
        "y": 0.87,
        "w": 0.6,
        "h": 0.06
      },
      {
        "id": "z3",
        "x": 0.5,
        "y": 0.5,
        "w": 0.4,
        "h": 0.1
      },
      {
        "id": "z4",
        "x": 0.08,
        "y": 0.5,
        "w": 0.06,
        "h": 0.15
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the top compression edge with sheathing nailing: continuous attachment of roof sheathing to the compression edge provides the lateral bracing needed to prevent lateral torsional buckling, which is what sets CL equal to 1.0 for this beam.",
    "image": "question_images/q_7601.png",
    "domain": "wood_structures",
    "scenario_id": 76,
    "scenario_title": "Glulam Roof Beam: Volume Factor Versus Beam Stability Factor",
    "scenario_text": "A 24F-1.8E glulam roof beam spans 32 ft, is 6.75 in wide by 30 in deep, and supports roof dead and snow loads with CD = 1.15. The compression edge is continuously braced by roof sheathing nailed directly to the top of the beam along its full length. Reference values for this combination symbol are Fbx = 2400 psi and E = 1,800,000 psi. The computed volume factor for this beam's length, depth, and width is CV = 0.78, and since the compression edge is fully braced, CL = 1.0."
  },
  {
    "id": 7602,
    "type": "point_and_click",
    "question": "With CV = 0.78 and CL = 1.0, click on the box showing which factor governs per NDS 5.3.6.",
    "image_description": "Four result boxes: CV = 0.78 governs; CL = 1.0 governs; both multiplied together equal 0.78; neither factor applies.",
    "hotzones": [
      {
        "id": "zA",
        "x": 0.2,
        "y": 0.10999999999999999,
        "w": 0.6,
        "h": 0.08
      },
      {
        "id": "zB",
        "x": 0.2,
        "y": 0.31,
        "w": 0.6,
        "h": 0.08
      },
      {
        "id": "zC",
        "x": 0.2,
        "y": 0.51,
        "w": 0.6,
        "h": 0.08
      },
      {
        "id": "zD",
        "x": 0.2,
        "y": 0.71,
        "w": 0.6,
        "h": 0.08
      }
    ],
    "correct": "zA",
    "explanation": "The correct answer is CV = 0.78 governs: NDS 5.3.6 requires computing both CV and CL and using only the smaller of the two, never multiplying them together. Since the beam is fully braced, CL equals 1.0 and has no reducing effect, leaving CV as the controlling size-related factor.",
    "image": "question_images/q_7602.png",
    "domain": "wood_structures",
    "scenario_id": 76,
    "scenario_title": "Glulam Roof Beam: Volume Factor Versus Beam Stability Factor",
    "scenario_text": "A 24F-1.8E glulam roof beam spans 32 ft, is 6.75 in wide by 30 in deep, and supports roof dead and snow loads with CD = 1.15. The compression edge is continuously braced by roof sheathing nailed directly to the top of the beam along its full length. Reference values for this combination symbol are Fbx = 2400 psi and E = 1,800,000 psi. The computed volume factor for this beam's length, depth, and width is CV = 0.78, and since the compression edge is fully braced, CL = 1.0."
  },
  {
    "id": 7603,
    "type": "point_and_click",
    "question": "Click on the exhibit box that correctly states the reference bending value and reference modulus of elasticity for this 24F-1.8E glulam beam.",
    "image_description": "Four exhibit text boxes: 24F-1.8E, Fbx = 2400 psi, E = 1,800,000 psi; 18F-2.4E, Fbx = 1800 psi, E = 2,400,000 psi; 24F-1.8E, Fbx = 1800 psi, E = 1,800,000 psi; a generic sawn lumber design value table excerpt.",
    "hotzones": [
      {
        "id": "zA",
        "x": 0.15000000000000002,
        "y": 0.10999999999999999,
        "w": 0.7,
        "h": 0.08
      },
      {
        "id": "zB",
        "x": 0.15000000000000002,
        "y": 0.31,
        "w": 0.7,
        "h": 0.08
      },
      {
        "id": "zC",
        "x": 0.15000000000000002,
        "y": 0.51,
        "w": 0.7,
        "h": 0.08
      },
      {
        "id": "zD",
        "x": 0.15000000000000002,
        "y": 0.71,
        "w": 0.7,
        "h": 0.08
      }
    ],
    "correct": "zA",
    "explanation": "The correct answer is the box reading 24F-1.8E, Fbx = 2400 psi, E = 1,800,000 psi: the combination symbol directly encodes these two reference values, 2400 psi bending and 1.8 million psi modulus, and confusing the digits or swapping them with a different combination symbol gives a materially different design value.",
    "image": "question_images/q_7603.png",
    "domain": "wood_structures",
    "scenario_id": 76,
    "scenario_title": "Glulam Roof Beam: Volume Factor Versus Beam Stability Factor",
    "scenario_text": "A 24F-1.8E glulam roof beam spans 32 ft, is 6.75 in wide by 30 in deep, and supports roof dead and snow loads with CD = 1.15. The compression edge is continuously braced by roof sheathing nailed directly to the top of the beam along its full length. Reference values for this combination symbol are Fbx = 2400 psi and E = 1,800,000 psi. The computed volume factor for this beam's length, depth, and width is CV = 0.78, and since the compression edge is fully braced, CL = 1.0."
  },
  {
    "id": 7604,
    "type": "drag_and_drop_order",
    "question": "Arrange these steps in the correct order for determining the governing size-related factor for this glulam beam.",
    "items": [
      {
        "id": "s1",
        "text": "Compute CV based on the beam's actual length, depth, and width per the NDS Supplement volume factor table"
      },
      {
        "id": "s2",
        "text": "Determine CL based on the actual lateral bracing condition of the compression edge"
      },
      {
        "id": "s3",
        "text": "Compare CV and CL and select only the smaller value, never multiplying the two together"
      },
      {
        "id": "s4",
        "text": "Apply the selected factor along with CD and any other applicable factors to obtain Fb prime"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4"
    ],
    "explanation": "The correct order develops CV and CL independently from the beam's geometry and bracing, then applies the NDS 5.3.6 rule of using only the smaller value before finishing the Fb prime calculation. Multiplying CV and CL together instead of selecting the smaller is the classic error this sequence prevents.",
    "domain": "wood_structures",
    "scenario_id": 76,
    "scenario_title": "Glulam Roof Beam: Volume Factor Versus Beam Stability Factor",
    "scenario_text": "A 24F-1.8E glulam roof beam spans 32 ft, is 6.75 in wide by 30 in deep, and supports roof dead and snow loads with CD = 1.15. The compression edge is continuously braced by roof sheathing nailed directly to the top of the beam along its full length. Reference values for this combination symbol are Fbx = 2400 psi and E = 1,800,000 psi. The computed volume factor for this beam's length, depth, and width is CV = 0.78, and since the compression edge is fully braced, CL = 1.0."
  },
  {
    "id": 7605,
    "type": "drag_and_drop_position",
    "question": "Drag each factor onto the callout describing its physical cause on the beam drawing.",
    "image_description": "Beam elevation with two callouts: one showing the overall beam dimensions, length by depth by width, and one showing the sheathing nailed continuously to the top compression edge.",
    "drag_items": [
      {
        "id": "d1",
        "label": "CV, volume factor"
      },
      {
        "id": "d2",
        "label": "CL, beam stability factor"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.25,
        "y": 0.15,
        "w": 0.3,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.7,
        "y": 0.15,
        "w": 0.3,
        "h": 0.08
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2"
    },
    "explanation": "The correct pairing is CV to the overall beam dimension callout, since volume factor depends on length, depth, and width, and CL to the bracing callout, since beam stability factor depends on whether the compression edge is laterally restrained.",
    "image": "question_images/q_7605.png",
    "domain": "wood_structures",
    "scenario_id": 76,
    "scenario_title": "Glulam Roof Beam: Volume Factor Versus Beam Stability Factor",
    "scenario_text": "A 24F-1.8E glulam roof beam spans 32 ft, is 6.75 in wide by 30 in deep, and supports roof dead and snow loads with CD = 1.15. The compression edge is continuously braced by roof sheathing nailed directly to the top of the beam along its full length. Reference values for this combination symbol are Fbx = 2400 psi and E = 1,800,000 psi. The computed volume factor for this beam's length, depth, and width is CV = 0.78, and since the compression edge is fully braced, CL = 1.0."
  },
  {
    "id": 7606,
    "type": "drag_and_drop_position",
    "question": "Drag each factor onto the callout describing which material category it applies to.",
    "image_description": "Three callout boxes: applies to glulam only, applies to sawn dimension lumber only, applies to both material types.",
    "drag_items": [
      {
        "id": "d1",
        "label": "CV, volume factor"
      },
      {
        "id": "d2",
        "label": "CF, size factor"
      },
      {
        "id": "d3",
        "label": "CD, load duration factor"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.2,
        "y": 0.5,
        "w": 0.3,
        "h": 0.1
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.531,
        "w": 0.3,
        "h": 0.1
      },
      {
        "id": "z3",
        "x": 0.65,
        "y": 0.419,
        "w": 0.3,
        "h": 0.1
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct pairing is CV to glulam only, CF to sawn dimension lumber only, and CD to both material types. Glulam gets its own size-related factor, CV, instead of CF, because glulam manufacturing and material variability behave differently from sawn lumber, while load duration applies the same way regardless of material.",
    "image": "question_images/q_7606.png",
    "domain": "wood_structures",
    "scenario_id": 76,
    "scenario_title": "Glulam Roof Beam: Volume Factor Versus Beam Stability Factor",
    "scenario_text": "A 24F-1.8E glulam roof beam spans 32 ft, is 6.75 in wide by 30 in deep, and supports roof dead and snow loads with CD = 1.15. The compression edge is continuously braced by roof sheathing nailed directly to the top of the beam along its full length. Reference values for this combination symbol are Fbx = 2400 psi and E = 1,800,000 psi. The computed volume factor for this beam's length, depth, and width is CV = 0.78, and since the compression edge is fully braced, CL = 1.0."
  },
  {
    "id": 7701,
    "type": "point_and_click",
    "question": "Click on the arrow that correctly represents how load is applied to each lag screw in this ledger connection.",
    "image_description": "Close-up cross-section of one lag screw passing through the ledger into the band joist. Four labeled arrows: one perpendicular to the screw shank pointing downward, one parallel to the shank pulling outward, one running along the length of the ledger, and one pointing into the face of the band joist unrelated to the screw.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.5,
        "y": 0.65,
        "w": 0.1,
        "h": 0.15
      },
      {
        "id": "z2",
        "x": 0.85,
        "y": 0.5,
        "w": 0.1,
        "h": 0.08
      },
      {
        "id": "z3",
        "x": 0.3,
        "y": 0.85,
        "w": 0.2,
        "h": 0.06
      },
      {
        "id": "z4",
        "x": 0.85,
        "y": 0.85,
        "w": 0.1,
        "h": 0.08
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the arrow perpendicular to the screw shank pointing downward: deck joist reactions transfer vertical shear into the ledger, which loads each lag screw laterally, perpendicular to its shank, not by pulling it out along its axis.",
    "image": "question_images/q_7701.png",
    "domain": "wood_structures",
    "scenario_id": 77,
    "scenario_title": "Deck Ledger Lag Screw Connection: Lateral Versus Withdrawal Loading",
    "scenario_text": "A wood deck ledger board is lag-screw connected to the band joist of a house, transferring the vertical shear reaction from deck joists, a total of 1800 lb along the ledger, into the band joist. Lag screws are 1/2 in diameter, 4 in long, spaced 16 in on center along the ledger, with adequate threaded penetration into the band joist framing."
  },
  {
    "id": 7702,
    "type": "point_and_click",
    "question": "Click on the design approach that applies to this connection.",
    "image_description": "Four labeled boxes: NDS 12.3 yield limit equations for lateral loading; NDS withdrawal design value based on threaded penetration length; Fc-perpendicular bearing check; Cr repetitive member check.",
    "hotzones": [
      {
        "id": "zA",
        "x": 0.15000000000000002,
        "y": 0.10999999999999999,
        "w": 0.7,
        "h": 0.08
      },
      {
        "id": "zB",
        "x": 0.15000000000000002,
        "y": 0.31,
        "w": 0.7,
        "h": 0.08
      },
      {
        "id": "zC",
        "x": 0.15000000000000002,
        "y": 0.51,
        "w": 0.7,
        "h": 0.08
      },
      {
        "id": "zD",
        "x": 0.15000000000000002,
        "y": 0.71,
        "w": 0.7,
        "h": 0.08
      }
    ],
    "correct": "zA",
    "explanation": "The correct answer is the NDS 12.3 yield limit equations for lateral loading: since the governing load transfers shear perpendicular to the screw shank, this connection is designed using the same dowel-type fastener yield limit framework used for bolts, not the separate withdrawal equation.",
    "image": "question_images/q_7702.png",
    "domain": "wood_structures",
    "scenario_id": 77,
    "scenario_title": "Deck Ledger Lag Screw Connection: Lateral Versus Withdrawal Loading",
    "scenario_text": "A wood deck ledger board is lag-screw connected to the band joist of a house, transferring the vertical shear reaction from deck joists, a total of 1800 lb along the ledger, into the band joist. Lag screws are 1/2 in diameter, 4 in long, spaced 16 in on center along the ledger, with adequate threaded penetration into the band joist framing."
  },
  {
    "id": 7703,
    "type": "point_and_click",
    "question": "Even though withdrawal does not govern this connection, click on the location where the threaded engagement length used in a withdrawal calculation would be measured.",
    "image_description": "Lag screw cross-section through the ledger and into the band joist, showing an unthreaded shank portion within the ledger and a threaded portion embedded in the band joist. Four hotspots: the threaded portion in the band joist, the unthreaded shank in the ledger, the screw head, and the ledger-to-band-joist interface gap.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.75,
        "y": 0.5,
        "w": 0.2,
        "h": 0.1
      },
      {
        "id": "z2",
        "x": 0.32899999999999996,
        "y": 0.5,
        "w": 0.2,
        "h": 0.1
      },
      {
        "id": "z3",
        "x": 0.08,
        "y": 0.5,
        "w": 0.06,
        "h": 0.1
      },
      {
        "id": "z4",
        "x": 0.541,
        "y": 0.5,
        "w": 0.04,
        "h": 0.1
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the threaded portion embedded in the band joist: withdrawal capacity is based on the length of threaded engagement penetrating the receiving member, not the unthreaded shank length or the total screw length, even though this dimension is not the governing check for this laterally loaded connection.",
    "image": "question_images/q_7703.png",
    "domain": "wood_structures",
    "scenario_id": 77,
    "scenario_title": "Deck Ledger Lag Screw Connection: Lateral Versus Withdrawal Loading",
    "scenario_text": "A wood deck ledger board is lag-screw connected to the band joist of a house, transferring the vertical shear reaction from deck joists, a total of 1800 lb along the ledger, into the band joist. Lag screws are 1/2 in diameter, 4 in long, spaced 16 in on center along the ledger, with adequate threaded penetration into the band joist framing."
  },
  {
    "id": 7704,
    "type": "drag_and_drop_order",
    "question": "Arrange these steps in the correct order for designing this deck ledger lag screw connection.",
    "items": [
      {
        "id": "s1",
        "text": "Identify the direction of applied load relative to the screw shank"
      },
      {
        "id": "s2",
        "text": "Recognize that deck joist reactions transfer vertical shear into the ledger, meaning the governing loading is lateral, not withdrawal"
      },
      {
        "id": "s3",
        "text": "Determine the lateral design value Z for the lag screw using the NDS 12.3 yield limit framework or the tabulated single fastener values"
      },
      {
        "id": "s4",
        "text": "Apply CD and any applicable geometry factors, then compare adjusted capacity to the per-screw demand"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4"
    ],
    "explanation": "The correct order starts by identifying the loading direction before selecting an equation set, since confusing lateral and withdrawal loading leads to using the wrong design approach entirely. Only after confirming lateral loading governs does the yield limit calculation and factor application proceed.",
    "domain": "wood_structures",
    "scenario_id": 77,
    "scenario_title": "Deck Ledger Lag Screw Connection: Lateral Versus Withdrawal Loading",
    "scenario_text": "A wood deck ledger board is lag-screw connected to the band joist of a house, transferring the vertical shear reaction from deck joists, a total of 1800 lb along the ledger, into the band joist. Lag screws are 1/2 in diameter, 4 in long, spaced 16 in on center along the ledger, with adequate threaded penetration into the band joist framing."
  },
  {
    "id": 7705,
    "type": "drag_and_drop_position",
    "question": "Drag each label onto the connection sketch it describes.",
    "image_description": "Two side-by-side sketches. Sketch one shows the deck ledger bolted to the band joist with joist reactions transferring shear downward into the ledger. Sketch two shows a sign bracket lag-screwed into the underside of a soffit with the sign's weight pulling straight down along the screw axis.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Lateral design value governs"
      },
      {
        "id": "d2",
        "label": "Withdrawal design value governs"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.07500000000000001,
        "y": 0.15000000000000002,
        "w": 0.35,
        "h": 0.7
      },
      {
        "id": "z2",
        "x": 0.575,
        "y": 0.15000000000000002,
        "w": 0.35,
        "h": 0.7
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2"
    },
    "explanation": "The correct pairing is the ledger connection as lateral-governed, since the joist shear loads the screws perpendicular to the shank, and the sign bracket as withdrawal-governed, since the sign load pulls the screws out along their axis. Recognizing which physical loading direction actually applies is the recurring exam trap here.",
    "image": "question_images/q_7705.png",
    "domain": "wood_structures",
    "scenario_id": 77,
    "scenario_title": "Deck Ledger Lag Screw Connection: Lateral Versus Withdrawal Loading",
    "scenario_text": "A wood deck ledger board is lag-screw connected to the band joist of a house, transferring the vertical shear reaction from deck joists, a total of 1800 lb along the ledger, into the band joist. Lag screws are 1/2 in diameter, 4 in long, spaced 16 in on center along the ledger, with adequate threaded penetration into the band joist framing."
  },
  {
    "id": 7706,
    "type": "drag_and_drop_position",
    "question": "Drag each label onto its matching component in the ledger connection cross-section.",
    "image_description": "Cross-section showing the ledger board, the band joist behind it, and the lag screw passing through both.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Ledger board, receives shear from deck joists"
      },
      {
        "id": "d2",
        "label": "Band joist, existing framing, receives the lag screw"
      },
      {
        "id": "d3",
        "label": "Lag screw, transfers shear across the interface"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.25,
        "y": 0.5,
        "w": 0.14,
        "h": 0.5
      },
      {
        "id": "z2",
        "x": 0.7,
        "y": 0.5,
        "w": 0.14,
        "h": 0.5
      },
      {
        "id": "z3",
        "x": 0.47,
        "y": 0.5,
        "w": 0.1,
        "h": 0.5
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct pairing places the ledger board where deck joist reactions are received, the band joist as the existing framing member the screw penetrates, and the lag screw as the fastener bridging the two, transferring shear from the deck framing into the house structure.",
    "image": "question_images/q_7706.png",
    "domain": "wood_structures",
    "scenario_id": 77,
    "scenario_title": "Deck Ledger Lag Screw Connection: Lateral Versus Withdrawal Loading",
    "scenario_text": "A wood deck ledger board is lag-screw connected to the band joist of a house, transferring the vertical shear reaction from deck joists, a total of 1800 lb along the ledger, into the band joist. Lag screws are 1/2 in diameter, 4 in long, spaced 16 in on center along the ledger, with adequate threaded penetration into the band joist framing."
  },
  {
    "id": 7801,
    "type": "point_and_click",
    "question": "Click on the sawn lumber post in this exhibit.",
    "image_description": "Site exhibit showing four columns side by side: a square timber post, a round timber pole, a rectangular column with visible horizontal lamination lines, and a steel wide flange column shown for contrast.",
    "hotzones": [
      {
        "id": "zA",
        "x": 0.13,
        "y": 0.2,
        "w": 0.14,
        "h": 0.6
      },
      {
        "id": "zB",
        "x": 0.39,
        "y": 0.2,
        "w": 0.12,
        "h": 0.6
      },
      {
        "id": "zC",
        "x": 0.6100000000000001,
        "y": 0.2,
        "w": 0.14,
        "h": 0.6
      },
      {
        "id": "zD",
        "x": 0.86,
        "y": 0.2,
        "w": 0.08,
        "h": 0.6
      }
    ],
    "correct": "zA",
    "explanation": "The correct answer is the square timber post: Column A is the sawn lumber 6x6 post, distinguished in the exhibit by its plain square cross-section with no visible lamination lines or circular profile.",
    "image": "question_images/q_7801.png",
    "domain": "wood_structures",
    "scenario_id": 78,
    "scenario_title": "Column Parameter c and Stability Factor Across Wood Column Materials",
    "scenario_text": "A pavilion structure uses three column types at three locations, each carrying axial dead and roof live load only, CD = 1.0. Column A is a sawn lumber 6x6 DF-L Select Structural post, actual 5.5 in square, unbraced height 10 ft. Column B is a round timber pole, 10 in diameter, unbraced height 12 ft. Column C is a structural glued laminated timber column, 5.125 in by 7.5 in section, unbraced height 14 ft, with 5.125 in as the least section dimension."
  },
  {
    "id": 7802,
    "type": "point_and_click",
    "question": "Click on the round timber pole column in this exhibit.",
    "image_description": "Same site exhibit as the prior item, four columns side by side.",
    "hotzones": [
      {
        "id": "zA",
        "x": 0.13,
        "y": 0.2,
        "w": 0.14,
        "h": 0.6
      },
      {
        "id": "zB",
        "x": 0.39,
        "y": 0.2,
        "w": 0.12,
        "h": 0.6
      },
      {
        "id": "zC",
        "x": 0.6100000000000001,
        "y": 0.2,
        "w": 0.14,
        "h": 0.6
      },
      {
        "id": "zD",
        "x": 0.86,
        "y": 0.2,
        "w": 0.08,
        "h": 0.6
      }
    ],
    "correct": "zB",
    "explanation": "The correct answer is the circular pole: Column B is the round timber pole, identified by its circular cross-section, and it uses c = 0.85 in the NDS 3.7.1 Cp equation, distinct from the c value used for sawn lumber or glulam.",
    "image": "question_images/q_7802.png",
    "domain": "wood_structures",
    "scenario_id": 78,
    "scenario_title": "Column Parameter c and Stability Factor Across Wood Column Materials",
    "scenario_text": "A pavilion structure uses three column types at three locations, each carrying axial dead and roof live load only, CD = 1.0. Column A is a sawn lumber 6x6 DF-L Select Structural post, actual 5.5 in square, unbraced height 10 ft. Column B is a round timber pole, 10 in diameter, unbraced height 12 ft. Column C is a structural glued laminated timber column, 5.125 in by 7.5 in section, unbraced height 14 ft, with 5.125 in as the least section dimension."
  },
  {
    "id": 7803,
    "type": "point_and_click",
    "question": "Click on the structural glulam column in this exhibit.",
    "image_description": "Same site exhibit as the prior two items, four columns side by side.",
    "hotzones": [
      {
        "id": "zA",
        "x": 0.13,
        "y": 0.2,
        "w": 0.14,
        "h": 0.6
      },
      {
        "id": "zB",
        "x": 0.39,
        "y": 0.2,
        "w": 0.12,
        "h": 0.6
      },
      {
        "id": "zC",
        "x": 0.6100000000000001,
        "y": 0.2,
        "w": 0.14,
        "h": 0.6
      },
      {
        "id": "zD",
        "x": 0.86,
        "y": 0.2,
        "w": 0.08,
        "h": 0.6
      }
    ],
    "correct": "zC",
    "explanation": "The correct answer is the rectangular column with visible horizontal lamination lines: Column C is the structural glued laminated timber column, identifiable by its laminated cross-section, and it uses c = 0.9 in the Cp equation.",
    "image": "question_images/q_7803.png",
    "domain": "wood_structures",
    "scenario_id": 78,
    "scenario_title": "Column Parameter c and Stability Factor Across Wood Column Materials",
    "scenario_text": "A pavilion structure uses three column types at three locations, each carrying axial dead and roof live load only, CD = 1.0. Column A is a sawn lumber 6x6 DF-L Select Structural post, actual 5.5 in square, unbraced height 10 ft. Column B is a round timber pole, 10 in diameter, unbraced height 12 ft. Column C is a structural glued laminated timber column, 5.125 in by 7.5 in section, unbraced height 14 ft, with 5.125 in as the least section dimension."
  },
  {
    "id": 7804,
    "type": "drag_and_drop_position",
    "question": "Drag each column parameter c-value onto the column it applies to.",
    "image_description": "Three labeled columns in the exhibit: Column A, sawn lumber post; Column B, round timber pole; Column C, glulam column.",
    "drag_items": [
      {
        "id": "d1",
        "label": "c = 0.8"
      },
      {
        "id": "d2",
        "label": "c = 0.85"
      },
      {
        "id": "d3",
        "label": "c = 0.9"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.13,
        "y": 0.2,
        "w": 0.14,
        "h": 0.6
      },
      {
        "id": "z2",
        "x": 0.43,
        "y": 0.2,
        "w": 0.14,
        "h": 0.6
      },
      {
        "id": "z3",
        "x": 0.73,
        "y": 0.2,
        "w": 0.14,
        "h": 0.6
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct pairing is c = 0.8 for Column A, the sawn lumber post, c = 0.85 for Column B, the round timber pole, and c = 0.9 for Column C, the glulam column. Each material category uses its own c value in the NDS 3.7.1 Cp equation, and using the wrong one changes the resulting stability factor.",
    "image": "question_images/q_7804.png",
    "domain": "wood_structures",
    "scenario_id": 78,
    "scenario_title": "Column Parameter c and Stability Factor Across Wood Column Materials",
    "scenario_text": "A pavilion structure uses three column types at three locations, each carrying axial dead and roof live load only, CD = 1.0. Column A is a sawn lumber 6x6 DF-L Select Structural post, actual 5.5 in square, unbraced height 10 ft. Column B is a round timber pole, 10 in diameter, unbraced height 12 ft. Column C is a structural glued laminated timber column, 5.125 in by 7.5 in section, unbraced height 14 ft, with 5.125 in as the least section dimension."
  },
  {
    "id": 7805,
    "type": "drag_and_drop_order",
    "question": "Rank the three columns from lowest to highest unbraced length-to-least-dimension ratio, Le/d.",
    "items": [
      {
        "id": "s1",
        "text": "Column B, round pole, Le/d = 144 in / 10 in = 14.4"
      },
      {
        "id": "s2",
        "text": "Column A, sawn post, Le/d = 120 in / 5.5 in = 21.8"
      },
      {
        "id": "s3",
        "text": "Column C, glulam, Le/d = 168 in / 5.125 in = 32.8"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3"
    ],
    "explanation": "The correct order from lowest to highest slenderness is the round pole at about 14.4, the sawn post at about 21.8, and the glulam column at about 32.8. Column C has the highest ratio because it combines the tallest unbraced height with the smallest least-dimension of the three, which will drive the lowest FcE and therefore the most reduced Cp of the three columns.",
    "domain": "wood_structures",
    "scenario_id": 78,
    "scenario_title": "Column Parameter c and Stability Factor Across Wood Column Materials",
    "scenario_text": "A pavilion structure uses three column types at three locations, each carrying axial dead and roof live load only, CD = 1.0. Column A is a sawn lumber 6x6 DF-L Select Structural post, actual 5.5 in square, unbraced height 10 ft. Column B is a round timber pole, 10 in diameter, unbraced height 12 ft. Column C is a structural glued laminated timber column, 5.125 in by 7.5 in section, unbraced height 14 ft, with 5.125 in as the least section dimension."
  },
  {
    "id": 7806,
    "type": "drag_and_drop_position",
    "question": "For the glulam column, drag each term onto its position in the design flow, in the order the values are developed.",
    "image_description": "Three sequential boxes in a horizontal design flow diagram for the glulam column: an initial box before buckling is considered, a middle box where the critical buckling stress is computed, and a final box showing the fully adjusted design value.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Fc star, adjusted compression value before Cp"
      },
      {
        "id": "d2",
        "label": "FcE, critical buckling stress from Le/d and Emin prime"
      },
      {
        "id": "d3",
        "label": "Fc prime, final value equal to Fc star times Cp"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.18,
        "y": 0.5,
        "w": 0.2,
        "h": 0.3
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.5,
        "w": 0.2,
        "h": 0.3
      },
      {
        "id": "z3",
        "x": 0.72,
        "y": 0.35,
        "w": 0.2,
        "h": 0.3
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct order places Fc star first as the compression value adjusted by every factor except Cp, FcE second as the buckling stress computed independently from the governing Le/d and Emin prime, and Fc prime last as the product of Fc star and the Cp computed from the other two, following the NDS 3.7.1 procedure exactly.",
    "image": "question_images/q_7806.png",
    "domain": "wood_structures",
    "scenario_id": 78,
    "scenario_title": "Column Parameter c and Stability Factor Across Wood Column Materials",
    "scenario_text": "A pavilion structure uses three column types at three locations, each carrying axial dead and roof live load only, CD = 1.0. Column A is a sawn lumber 6x6 DF-L Select Structural post, actual 5.5 in square, unbraced height 10 ft. Column B is a round timber pole, 10 in diameter, unbraced height 12 ft. Column C is a structural glued laminated timber column, 5.125 in by 7.5 in section, unbraced height 14 ft, with 5.125 in as the least section dimension."
  },
  {
    "id": 7901,
    "type": "point_and_click",
    "question": "On the shear wall elevation, click the section where the maximum in-plane shear demand and overturning moment interact to control the design of this cantilevered wall.",
    "image_description": "Side elevation of a 20 ft long, 12 ft tall CMU shear wall fixed at the base to a foundation, with a horizontal force arrow Vu = 45 kips applied at the roof line (top). Three horizontal reference lines are marked: one near the top at roof level, one at mid-height, and one at the wall-to-foundation interface at the base.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.45,
        "y": 0.88,
        "w": 0.3,
        "h": 0.07
      },
      {
        "id": "z2",
        "x": 0.45,
        "y": 0.5,
        "w": 0.3,
        "h": 0.07
      },
      {
        "id": "z3",
        "x": 0.45,
        "y": 0.15,
        "w": 0.3,
        "h": 0.07
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the wall-to-foundation interface at the base: for a single cantilevered wall with the lateral force applied at the top, shear is essentially constant over the height but overturning moment accumulates to a maximum at the base per TMS 402-16 Chapter 9, so the base is the critical section for combined shear-flexure interaction and boundary element checks.",
    "image": "question_images/q_7901.png",
    "domain": "masonry_structures",
    "scenario_id": 79,
    "scenario_title": "In-Plane Shear Wall: Squat CMU Cantilever",
    "scenario_text": "A one story reinforced CMU shear wall is 20 ft long and 12 ft tall, nominal 8 inch (7.625 in actual) fully grouted, f'm = 2,000 psi, Grade 60 vertical reinforcement at 32 in on center. The wall cantilevers from a fixed foundation and resists a factored in-plane seismic shear Vu = 45 kips applied at the roof diaphragm level, producing overturning about the base. Shear depth dv = 0.8 Lw = 16 ft. Evaluate the critical shear section, boundary detailing, and effective shear area per TMS 402-16 Chapter 9."
  },
  {
    "id": 7902,
    "type": "point_and_click",
    "question": "Given the load direction shown, click the end of the wall at the base that requires boundary element detailing per TMS 402-16 Chapter 7 due to compression toe crushing potential.",
    "image_description": "Plan-view base of the 20 ft shear wall with the applied lateral force arrow pointing left to right at the top of the wall (shown as a small inset arrow). The left end and right end of the wall base are marked as two distinct zones, with a third zone at wall mid-length.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.1,
        "y": 0.4,
        "w": 0.15,
        "h": 0.2
      },
      {
        "id": "z2",
        "x": 0.75,
        "y": 0.4,
        "w": 0.15,
        "h": 0.2
      },
      {
        "id": "z3",
        "x": 0.42,
        "y": 0.4,
        "w": 0.15,
        "h": 0.2
      }
    ],
    "correct": "z2",
    "explanation": "The correct answer is the right end of the wall base: with the seismic force pushing left to right at the roof, overturning rotates the wall about its base such that the right (leeward) end goes into compression, making it the compression toe where TMS 402-16 Chapter 7 can require concentrated vertical reinforcement and confinement to resist crushing.",
    "image": "question_images/q_7902.png",
    "domain": "masonry_structures",
    "scenario_id": 79,
    "scenario_title": "In-Plane Shear Wall: Squat CMU Cantilever",
    "scenario_text": "A one story reinforced CMU shear wall is 20 ft long and 12 ft tall, nominal 8 inch (7.625 in actual) fully grouted, f'm = 2,000 psi, Grade 60 vertical reinforcement at 32 in on center. The wall cantilevers from a fixed foundation and resists a factored in-plane seismic shear Vu = 45 kips applied at the roof diaphragm level, producing overturning about the base. Shear depth dv = 0.8 Lw = 16 ft. Evaluate the critical shear section, boundary detailing, and effective shear area per TMS 402-16 Chapter 9."
  },
  {
    "id": 7903,
    "type": "point_and_click",
    "question": "This wall is fully grouted. Click the region of the wall cross-section that correctly represents the net shear area Anv used in the Vnm calculation.",
    "image_description": "A horizontal cross-section (plan cut) through the 7.625 in thick CMU wall showing the full thickness with cores. Zone 1 shades the entire 7.625 in thickness across the full 20 ft length. Zone 2 shades only the two thin face shells at each surface, leaving the cores unshaded. Zone 3 shades small isolated blocks only at the 32 in o.c. grouted cell locations.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.1,
        "y": 0.45,
        "w": 0.8,
        "h": 0.1
      },
      {
        "id": "z2",
        "x": 0.1,
        "y": 0.2,
        "w": 0.8,
        "h": 0.08
      },
      {
        "id": "z3",
        "x": 0.3,
        "y": 0.7,
        "w": 0.2,
        "h": 0.08
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the full 7.625 in thickness shaded across the entire length: because the wall is fully grouted, every cell is filled and Anv equals the full net cross-sectional area (thickness times length), unlike a partially grouted wall where only face shells plus grouted cells would count.",
    "image": "question_images/q_7903.png",
    "domain": "masonry_structures",
    "scenario_id": 79,
    "scenario_title": "In-Plane Shear Wall: Squat CMU Cantilever",
    "scenario_text": "A one story reinforced CMU shear wall is 20 ft long and 12 ft tall, nominal 8 inch (7.625 in actual) fully grouted, f'm = 2,000 psi, Grade 60 vertical reinforcement at 32 in on center. The wall cantilevers from a fixed foundation and resists a factored in-plane seismic shear Vu = 45 kips applied at the roof diaphragm level, producing overturning about the base. Shear depth dv = 0.8 Lw = 16 ft. Evaluate the critical shear section, boundary detailing, and effective shear area per TMS 402-16 Chapter 9."
  },
  {
    "id": 7904,
    "type": "drag_and_drop_position",
    "question": "Drag each label to its correct location on the shear wall elevation.",
    "image_description": "Elevation of the 20 ft long, 12 ft tall shear wall with a horizontal force arrow at the top, a dimension line along the base, a dimension line along the side, and a shorter dimension line drawn near the base representing 0.8 times the wall length.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Lw = 20 ft (wall length)"
      },
      {
        "id": "d2",
        "label": "h = 12 ft (wall height)"
      },
      {
        "id": "d3",
        "label": "dv = 0.8 Lw = 16 ft"
      },
      {
        "id": "d4",
        "label": "Vu = 45 kips (applied shear)"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.3,
        "y": 0.92,
        "w": 0.4,
        "h": 0.06
      },
      {
        "id": "z2",
        "x": 0.02,
        "y": 0.45,
        "w": 0.1,
        "h": 0.3
      },
      {
        "id": "z3",
        "x": 0.3,
        "y": 0.78,
        "w": 0.35,
        "h": 0.06
      },
      {
        "id": "z4",
        "x": 0.55,
        "y": 0.05,
        "w": 0.3,
        "h": 0.06
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3",
      "z4": "d4"
    },
    "explanation": "The correct placement is Lw along the base, h along the side, dv just above the base (since dv = 0.8 Lw = 16 ft is measured as the shear depth), and Vu as the applied force arrow at the roof level, matching how TMS 402-16 Chapter 9 defines each shear design variable.",
    "image": "question_images/q_7904.png",
    "domain": "masonry_structures",
    "scenario_id": 79,
    "scenario_title": "In-Plane Shear Wall: Squat CMU Cantilever",
    "scenario_text": "A one story reinforced CMU shear wall is 20 ft long and 12 ft tall, nominal 8 inch (7.625 in actual) fully grouted, f'm = 2,000 psi, Grade 60 vertical reinforcement at 32 in on center. The wall cantilevers from a fixed foundation and resists a factored in-plane seismic shear Vu = 45 kips applied at the roof diaphragm level, producing overturning about the base. Shear depth dv = 0.8 Lw = 16 ft. Evaluate the critical shear section, boundary detailing, and effective shear area per TMS 402-16 Chapter 9."
  },
  {
    "id": 7905,
    "type": "drag_and_drop_order",
    "question": "Arrange the steps in the correct order to compute the design masonry shear strength phi Vnm for this wall.",
    "items": [
      {
        "id": "s1",
        "text": "Compute Anv, the net shear area of the wall cross-section"
      },
      {
        "id": "s2",
        "text": "Compute Mu/(Vu dv) using the base moment and shear depth"
      },
      {
        "id": "s3",
        "text": "Determine the masonry shear coefficient, bounded between 1.0 and 4.0"
      },
      {
        "id": "s4",
        "text": "Compute Vnm using the coefficient, Anv, and square root of f'm"
      },
      {
        "id": "s5",
        "text": "Apply phi = 0.8 to get the design masonry shear strength"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4",
      "s5"
    ],
    "explanation": "The correct order is Anv, then Mu/(Vu dv), then the coefficient, then Vnm, then phi: TMS 402-16 Chapter 9 builds the masonry shear equation from the section geometry and moment-to-shear ratio first, since that ratio directly sets the coefficient multiplying Anv and the square root of f'm before the strength reduction factor is ever applied.",
    "domain": "masonry_structures",
    "scenario_id": 79,
    "scenario_title": "In-Plane Shear Wall: Squat CMU Cantilever",
    "scenario_text": "A one story reinforced CMU shear wall is 20 ft long and 12 ft tall, nominal 8 inch (7.625 in actual) fully grouted, f'm = 2,000 psi, Grade 60 vertical reinforcement at 32 in on center. The wall cantilevers from a fixed foundation and resists a factored in-plane seismic shear Vu = 45 kips applied at the roof diaphragm level, producing overturning about the base. Shear depth dv = 0.8 Lw = 16 ft. Evaluate the critical shear section, boundary detailing, and effective shear area per TMS 402-16 Chapter 9."
  },
  {
    "id": 7906,
    "type": "drag_and_drop_position",
    "question": "Drag each detailing label to the correct region of the shear wall elevation.",
    "image_description": "Elevation of the shear wall divided into three regions: a narrow vertical strip at the right (leeward) end, a wide central region spanning most of the wall length, and a horizontal band at the top of the wall.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Confined boundary element (compression toe)"
      },
      {
        "id": "d2",
        "label": "Distributed web reinforcement region"
      },
      {
        "id": "d3",
        "label": "Bond beam at roof diaphragm level"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.78,
        "y": 0.3,
        "w": 0.15,
        "h": 0.5
      },
      {
        "id": "z2",
        "x": 0.15,
        "y": 0.3,
        "w": 0.55,
        "h": 0.5
      },
      {
        "id": "z3",
        "x": 0.1,
        "y": 0.05,
        "w": 0.8,
        "h": 0.1
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct placement puts the confined boundary element at the compression toe (right end), distributed web reinforcement across the central length, and the bond beam at the roof level: this matches TMS 402-16 Chapter 7 detailing, where concentrated confined reinforcement is placed only where compression toe crushing governs, not across the whole wall.",
    "image": "question_images/q_7906.png",
    "domain": "masonry_structures",
    "scenario_id": 79,
    "scenario_title": "In-Plane Shear Wall: Squat CMU Cantilever",
    "scenario_text": "A one story reinforced CMU shear wall is 20 ft long and 12 ft tall, nominal 8 inch (7.625 in actual) fully grouted, f'm = 2,000 psi, Grade 60 vertical reinforcement at 32 in on center. The wall cantilevers from a fixed foundation and resists a factored in-plane seismic shear Vu = 45 kips applied at the roof diaphragm level, producing overturning about the base. Shear depth dv = 0.8 Lw = 16 ft. Evaluate the critical shear section, boundary detailing, and effective shear area per TMS 402-16 Chapter 9."
  },
  {
    "id": 8001,
    "type": "point_and_click",
    "question": "Click the location on the wall elevation where the out-of-plane flexural demand Mu = wu h^2/8 is maximum.",
    "image_description": "Vertical elevation of the 20 ft tall wall with pin supports drawn at the top and bottom, and a uniformly distributed pressure arrow field pushing out-of-plane along the full height. Three marked zones sit at the top, mid-height, and base of the wall.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.4,
        "y": 0.1,
        "w": 0.2,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.4,
        "y": 0.46,
        "w": 0.2,
        "h": 0.08
      },
      {
        "id": "z3",
        "x": 0.4,
        "y": 0.85,
        "w": 0.2,
        "h": 0.08
      }
    ],
    "correct": "z2",
    "explanation": "The correct answer is mid-height: for a simply supported member under uniform out-of-plane pressure, the moment diagram is parabolic and peaks at mid-span, giving Mu = wu h^2/8 at the wall's mid-height rather than at either pinned support.",
    "image": "question_images/q_8001.png",
    "domain": "masonry_structures",
    "scenario_id": 80,
    "scenario_title": "Out-of-Plane Bearing Wall Slenderness Check",
    "scenario_text": "A partially grouted 8 inch (7.625 in actual thickness) CMU bearing wall spans 20 ft vertically between the floor and roof diaphragms, modeled as simply supported at top and bottom. Strength-level wind pressure wu = 30 psf acts out-of-plane. The wall carries a factored roof reaction of 2.4 kips per foot at the top, and self-weight is 48 psf. Reinforcement is Grade 60 bar in grouted cells at 32 in on center. Evaluate flexural demand, slenderness, and axial load at mid-height per TMS 402-16 Chapter 9."
  },
  {
    "id": 8002,
    "type": "point_and_click",
    "question": "This wall is partially grouted at 32 in on center. Click the region of the cross-section that correctly represents the effective width used in the flexural stress block calculation.",
    "image_description": "Horizontal cross-section through the wall showing hollow cores, face shells on each face, and grouted cells at 32 in spacing. Zone 1 highlights only the face shell thickness plus the grouted cell width immediately around each bar. Zone 2 highlights the full gross wall thickness continuously across the whole length. Zone 3 highlights only the ungrouted hollow core regions between grouted cells.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.15,
        "y": 0.4,
        "w": 0.2,
        "h": 0.2
      },
      {
        "id": "z2",
        "x": 0.1,
        "y": 0.65,
        "w": 0.8,
        "h": 0.1
      },
      {
        "id": "z3",
        "x": 0.55,
        "y": 0.4,
        "w": 0.2,
        "h": 0.2
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the face shell plus grouted cell width: a partially grouted wall behaves like a T-beam flange, getting credit only for the face shells plus the grouted cell area around each bar, not the full gross cross-section, which is one of the most common exam traps on out-of-plane wall problems.",
    "image": "question_images/q_8002.png",
    "domain": "masonry_structures",
    "scenario_id": 80,
    "scenario_title": "Out-of-Plane Bearing Wall Slenderness Check",
    "scenario_text": "A partially grouted 8 inch (7.625 in actual thickness) CMU bearing wall spans 20 ft vertically between the floor and roof diaphragms, modeled as simply supported at top and bottom. Strength-level wind pressure wu = 30 psf acts out-of-plane. The wall carries a factored roof reaction of 2.4 kips per foot at the top, and self-weight is 48 psf. Reinforcement is Grade 60 bar in grouted cells at 32 in on center. Evaluate flexural demand, slenderness, and axial load at mid-height per TMS 402-16 Chapter 9."
  },
  {
    "id": 8003,
    "type": "point_and_click",
    "question": "Click the threshold marker on the h/t scale that represents the code trigger point above which slenderness (P-delta) effects must be evaluated.",
    "image_description": "A horizontal number line labeled h/t ranging from 0 to 60, with three marked tick positions at h/t = 20, h/t = 30, and h/t = 50.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.25,
        "y": 0.4,
        "w": 0.06,
        "h": 0.2
      },
      {
        "id": "z2",
        "x": 0.45,
        "y": 0.4,
        "w": 0.06,
        "h": 0.2
      },
      {
        "id": "z3",
        "x": 0.75,
        "y": 0.4,
        "w": 0.06,
        "h": 0.2
      }
    ],
    "correct": "z2",
    "explanation": "The correct answer is h/t = 30: this wall has h/t = 240 in / 7.625 in = about 31.5, just past the roughly 30 threshold TMS 402-16 uses as a signal that second-order P-delta effects and the moment magnifier (or an alternative deflection-based method) should be evaluated rather than a simple Mu = wu h^2/8 check alone.",
    "image": "question_images/q_8003.png",
    "domain": "masonry_structures",
    "scenario_id": 80,
    "scenario_title": "Out-of-Plane Bearing Wall Slenderness Check",
    "scenario_text": "A partially grouted 8 inch (7.625 in actual thickness) CMU bearing wall spans 20 ft vertically between the floor and roof diaphragms, modeled as simply supported at top and bottom. Strength-level wind pressure wu = 30 psf acts out-of-plane. The wall carries a factored roof reaction of 2.4 kips per foot at the top, and self-weight is 48 psf. Reinforcement is Grade 60 bar in grouted cells at 32 in on center. Evaluate flexural demand, slenderness, and axial load at mid-height per TMS 402-16 Chapter 9."
  },
  {
    "id": 8004,
    "type": "drag_and_drop_position",
    "question": "Drag each label to the correct location on the wall elevation.",
    "image_description": "Elevation of the 20 ft wall with a downward arrow at the top representing the roof reaction, a distributed lateral pressure field along the full height, a highlighted band at mid-height, and an upper half of the wall shaded separately from the lower half.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Roof reaction Pu = 2.4 kips/ft (top)"
      },
      {
        "id": "d2",
        "label": "Self-weight tributary above mid-height (upper half shaded)"
      },
      {
        "id": "d3",
        "label": "Critical section at mid-height"
      },
      {
        "id": "d4",
        "label": "Wind pressure wu = 30 psf (distributed arrows)"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.4,
        "y": 0.05,
        "w": 0.2,
        "h": 0.06
      },
      {
        "id": "z2",
        "x": 0.1,
        "y": 0.15,
        "w": 0.15,
        "h": 0.3
      },
      {
        "id": "z3",
        "x": 0.4,
        "y": 0.47,
        "w": 0.2,
        "h": 0.06
      },
      {
        "id": "z4",
        "x": 0.65,
        "y": 0.5,
        "w": 0.15,
        "h": 0.35
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3",
      "z4": "d4"
    },
    "explanation": "The correct placement puts the roof reaction at the top, self-weight tributary on the upper half above mid-height, the critical section band at mid-height, and the wind pressure arrows along the lower portion where they still act on the full height: axial demand at mid-height must include only the self-weight tributary above that point, not the full wall weight.",
    "image": "question_images/q_8004.png",
    "domain": "masonry_structures",
    "scenario_id": 80,
    "scenario_title": "Out-of-Plane Bearing Wall Slenderness Check",
    "scenario_text": "A partially grouted 8 inch (7.625 in actual thickness) CMU bearing wall spans 20 ft vertically between the floor and roof diaphragms, modeled as simply supported at top and bottom. Strength-level wind pressure wu = 30 psf acts out-of-plane. The wall carries a factored roof reaction of 2.4 kips per foot at the top, and self-weight is 48 psf. Reinforcement is Grade 60 bar in grouted cells at 32 in on center. Evaluate flexural demand, slenderness, and axial load at mid-height per TMS 402-16 Chapter 9."
  },
  {
    "id": 8005,
    "type": "drag_and_drop_order",
    "question": "Arrange the steps in the correct order to check this wall's combined axial and flexural demand at mid-height.",
    "items": [
      {
        "id": "s1",
        "text": "Determine the factored roof reaction Pu applied at the top of the wall"
      },
      {
        "id": "s2",
        "text": "Compute the self-weight tributary above mid-height and add it to Pu"
      },
      {
        "id": "s3",
        "text": "Sum the two to get total factored axial load Pu at mid-height"
      },
      {
        "id": "s4",
        "text": "Compute Mu = wu h^2/8 from the out-of-plane wind pressure"
      },
      {
        "id": "s5",
        "text": "Check combined P-M capacity including the slenderness moment magnifier"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4",
      "s5"
    ],
    "explanation": "The correct order builds the axial load first (roof reaction plus tributary self-weight, then summed), then computes the lateral moment, then checks the combined interaction with slenderness effects, since skipping the self-weight addition quietly understates axial demand at exactly the section where slenderness effects are largest.",
    "domain": "masonry_structures",
    "scenario_id": 80,
    "scenario_title": "Out-of-Plane Bearing Wall Slenderness Check",
    "scenario_text": "A partially grouted 8 inch (7.625 in actual thickness) CMU bearing wall spans 20 ft vertically between the floor and roof diaphragms, modeled as simply supported at top and bottom. Strength-level wind pressure wu = 30 psf acts out-of-plane. The wall carries a factored roof reaction of 2.4 kips per foot at the top, and self-weight is 48 psf. Reinforcement is Grade 60 bar in grouted cells at 32 in on center. Evaluate flexural demand, slenderness, and axial load at mid-height per TMS 402-16 Chapter 9."
  },
  {
    "id": 8006,
    "type": "drag_and_drop_position",
    "question": "Drag each label to its correct location on the simply supported wall elevation, including its deflected shape.",
    "image_description": "Elevation of the wall drawn straight (undeformed) with a dashed deflected shape bowing outward, pin symbols at the top and bottom supports, and a callout arrow pointing to the maximum lateral deflection near mid-height.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Pin support (top)"
      },
      {
        "id": "d2",
        "label": "Pin support (base)"
      },
      {
        "id": "d3",
        "label": "Maximum lateral deflection, delta (mid-height)"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.42,
        "y": 0.05,
        "w": 0.16,
        "h": 0.06
      },
      {
        "id": "z2",
        "x": 0.42,
        "y": 0.9,
        "w": 0.16,
        "h": 0.06
      },
      {
        "id": "z3",
        "x": 0.65,
        "y": 0.46,
        "w": 0.2,
        "h": 0.08
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct placement is the pins at the top and base supports and the maximum deflection callout at mid-height: the deflected shape bows outward most at mid-height, which is exactly where the P-delta secondary moment (axial load acting through this lateral deflection) adds to the primary lateral load moment.",
    "image": "question_images/q_8006.png",
    "domain": "masonry_structures",
    "scenario_id": 80,
    "scenario_title": "Out-of-Plane Bearing Wall Slenderness Check",
    "scenario_text": "A partially grouted 8 inch (7.625 in actual thickness) CMU bearing wall spans 20 ft vertically between the floor and roof diaphragms, modeled as simply supported at top and bottom. Strength-level wind pressure wu = 30 psf acts out-of-plane. The wall carries a factored roof reaction of 2.4 kips per foot at the top, and self-weight is 48 psf. Reinforcement is Grade 60 bar in grouted cells at 32 in on center. Evaluate flexural demand, slenderness, and axial load at mid-height per TMS 402-16 Chapter 9."
  },
  {
    "id": 8101,
    "type": "point_and_click",
    "question": "Click the region of the lintel cross-section representing the rectangular compression stress block of depth a.",
    "image_description": "A vertical rectangular cross-section of the lintel, 7.625 in wide and 13.5 in deep to the steel centroid, with three shaded horizontal bands: one at the very top of the section, one at mid-depth, and one at the level of the reinforcing bars near the bottom.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.2,
        "y": 0.08,
        "w": 0.6,
        "h": 0.1
      },
      {
        "id": "z2",
        "x": 0.2,
        "y": 0.45,
        "w": 0.6,
        "h": 0.1
      },
      {
        "id": "z3",
        "x": 0.2,
        "y": 0.82,
        "w": 0.6,
        "h": 0.1
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the band at the very top of the section: the rectangular stress block of depth a = 3.46 in represents masonry compression at 0.80 f'm and acts at the top (compression) face of the section, balanced by tension in the steel near the bottom, per TMS 402-16 Chapter 9.",
    "image": "question_images/q_8101.png",
    "domain": "masonry_structures",
    "scenario_id": 81,
    "scenario_title": "Reinforced Masonry Lintel Over a Door Opening",
    "scenario_text": "A masonry lintel spans a 6 ft door opening in an 8 inch (7.625 in actual width) CMU wall, f'm = 2,500 psi, reinforced with two number 6 Grade 60 bars (As = 0.88 in^2) at effective depth d = 13.5 in. Minimum bearing length at each end is 4 in per TMS 402-16. Determine the compression block depth, nominal and design moment strength, and the correct bearing and effective span assumptions."
  },
  {
    "id": 8102,
    "type": "point_and_click",
    "question": "Click the bearing zone at the lintel end that satisfies the TMS 402-16 minimum bearing length requirement of 4 in.",
    "image_description": "Elevation of the lintel resting on the wall at its right end, with three candidate bearing length dimension callouts drawn side by side: 2 in, 4 in, and 8 in.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.15,
        "y": 0.55,
        "w": 0.15,
        "h": 0.15
      },
      {
        "id": "z2",
        "x": 0.42,
        "y": 0.55,
        "w": 0.15,
        "h": 0.15
      },
      {
        "id": "z3",
        "x": 0.7,
        "y": 0.55,
        "w": 0.15,
        "h": 0.15
      }
    ],
    "correct": "z2",
    "explanation": "The correct answer is the 4 in bearing zone: TMS 402-16 sets a minimum bearing length (commonly 4 in, more in high seismic areas) so the reaction does not crush the masonry locally, and the 2 in option shown does not meet this minimum.",
    "image": "question_images/q_8102.png",
    "domain": "masonry_structures",
    "scenario_id": 81,
    "scenario_title": "Reinforced Masonry Lintel Over a Door Opening",
    "scenario_text": "A masonry lintel spans a 6 ft door opening in an 8 inch (7.625 in actual width) CMU wall, f'm = 2,500 psi, reinforced with two number 6 Grade 60 bars (As = 0.88 in^2) at effective depth d = 13.5 in. Minimum bearing length at each end is 4 in per TMS 402-16. Determine the compression block depth, nominal and design moment strength, and the correct bearing and effective span assumptions."
  },
  {
    "id": 8103,
    "type": "point_and_click",
    "question": "Click the dimension line representing the correct effective span length used in the moment calculation for this lintel.",
    "image_description": "Elevation of the lintel over the 6 ft clear opening with bearing on each end, showing three candidate span dimension lines: one spanning only the clear opening, one spanning the clear opening plus the full bearing length on each side, and one spanning the clear opening plus half the bearing length on each side.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.15,
        "y": 0.2,
        "w": 0.7,
        "h": 0.05
      },
      {
        "id": "z2",
        "x": 0.1,
        "y": 0.4,
        "w": 0.8,
        "h": 0.05
      },
      {
        "id": "z3",
        "x": 0.13,
        "y": 0.6,
        "w": 0.74,
        "h": 0.05
      }
    ],
    "correct": "z3",
    "explanation": "The correct answer is clear span plus half the bearing on each side: effective span length is usually taken this way rather than clear span alone or clear span plus full bearing, so reading the problem's exhibit carefully to see which span convention applies is essential before computing Mu.",
    "image": "question_images/q_8103.png",
    "domain": "masonry_structures",
    "scenario_id": 81,
    "scenario_title": "Reinforced Masonry Lintel Over a Door Opening",
    "scenario_text": "A masonry lintel spans a 6 ft door opening in an 8 inch (7.625 in actual width) CMU wall, f'm = 2,500 psi, reinforced with two number 6 Grade 60 bars (As = 0.88 in^2) at effective depth d = 13.5 in. Minimum bearing length at each end is 4 in per TMS 402-16. Determine the compression block depth, nominal and design moment strength, and the correct bearing and effective span assumptions."
  },
  {
    "id": 8104,
    "type": "drag_and_drop_order",
    "question": "Arrange the steps in the correct order to determine whether this lintel's design moment strength is adequate.",
    "items": [
      {
        "id": "s1",
        "text": "Compute a = As fy / (0.80 f'm b)"
      },
      {
        "id": "s2",
        "text": "Compute Mn = As fy (d minus a/2)"
      },
      {
        "id": "s3",
        "text": "Apply phi = 0.9 for a tension-controlled flexural section"
      },
      {
        "id": "s4",
        "text": "Compare phi Mn to the factored demand Mu"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4"
    ],
    "explanation": "The correct order computes the compression block depth a first, then uses it to find Mn, then applies phi = 0.9, then compares against Mu: this is the same internal force couple logic used for reinforced masonry walls and pilasters, just applied to a discrete beam-shaped section.",
    "domain": "masonry_structures",
    "scenario_id": 81,
    "scenario_title": "Reinforced Masonry Lintel Over a Door Opening",
    "scenario_text": "A masonry lintel spans a 6 ft door opening in an 8 inch (7.625 in actual width) CMU wall, f'm = 2,500 psi, reinforced with two number 6 Grade 60 bars (As = 0.88 in^2) at effective depth d = 13.5 in. Minimum bearing length at each end is 4 in per TMS 402-16. Determine the compression block depth, nominal and design moment strength, and the correct bearing and effective span assumptions."
  },
  {
    "id": 8105,
    "type": "drag_and_drop_position",
    "question": "Drag each label to its correct location on the lintel cross-section.",
    "image_description": "A rectangular lintel cross-section 7.625 in wide, with the top compression zone, the effective depth dimension line running from the top face to the steel centroid, two bar symbols near the bottom representing the number 6 bars, and a width dimension line across the top.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Compression block depth a = 3.46 in"
      },
      {
        "id": "d2",
        "label": "Effective depth d = 13.5 in"
      },
      {
        "id": "d3",
        "label": "Tension steel As = 0.88 in^2 (two number 6 bars)"
      },
      {
        "id": "d4",
        "label": "Wall width b = 7.625 in"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.35,
        "y": 0.08,
        "w": 0.3,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.05,
        "y": 0.4,
        "w": 0.1,
        "h": 0.4
      },
      {
        "id": "z3",
        "x": 0.3,
        "y": 0.85,
        "w": 0.4,
        "h": 0.08
      },
      {
        "id": "z4",
        "x": 0.3,
        "y": 0.02,
        "w": 0.4,
        "h": 0.05
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3",
      "z4": "d4"
    },
    "explanation": "The correct placement is a at the top compression zone, d as the vertical dimension line to the steel centroid, As at the bar locations near the bottom, and b across the full top width: each variable in the flexural equation corresponds to a specific physical location on the section.",
    "image": "question_images/q_8105.png",
    "domain": "masonry_structures",
    "scenario_id": 81,
    "scenario_title": "Reinforced Masonry Lintel Over a Door Opening",
    "scenario_text": "A masonry lintel spans a 6 ft door opening in an 8 inch (7.625 in actual width) CMU wall, f'm = 2,500 psi, reinforced with two number 6 Grade 60 bars (As = 0.88 in^2) at effective depth d = 13.5 in. Minimum bearing length at each end is 4 in per TMS 402-16. Determine the compression block depth, nominal and design moment strength, and the correct bearing and effective span assumptions."
  },
  {
    "id": 8106,
    "type": "drag_and_drop_position",
    "question": "Drag each computed value to its correct box in the calculation flow.",
    "image_description": "A left-to-right flow diagram with three empty boxes connected by arrows, representing the sequence of the lintel moment calculation.",
    "drag_items": [
      {
        "id": "d1",
        "label": "a = 3.46 in"
      },
      {
        "id": "d2",
        "label": "Mn = 51.8 kip-ft"
      },
      {
        "id": "d3",
        "label": "phi Mn = 46.6 kip-ft"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.08,
        "y": 0.4,
        "w": 0.2,
        "h": 0.2
      },
      {
        "id": "z2",
        "x": 0.4,
        "y": 0.4,
        "w": 0.2,
        "h": 0.2
      },
      {
        "id": "z3",
        "x": 0.72,
        "y": 0.4,
        "w": 0.2,
        "h": 0.2
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct order is a = 3.46 in, then Mn = 51.8 kip-ft, then phi Mn = 46.6 kip-ft, matching the worked calculation where a is found first, Mn follows from the internal force couple, and phi = 0.9 is applied last to get the design strength.",
    "image": "question_images/q_8106.png",
    "domain": "masonry_structures",
    "scenario_id": 81,
    "scenario_title": "Reinforced Masonry Lintel Over a Door Opening",
    "scenario_text": "A masonry lintel spans a 6 ft door opening in an 8 inch (7.625 in actual width) CMU wall, f'm = 2,500 psi, reinforced with two number 6 Grade 60 bars (As = 0.88 in^2) at effective depth d = 13.5 in. Minimum bearing length at each end is 4 in per TMS 402-16. Determine the compression block depth, nominal and design moment strength, and the correct bearing and effective span assumptions."
  },
  {
    "id": 8201,
    "type": "point_and_click",
    "question": "Click the dashed line representing the correct kern boundary, located at t/6 from the section centerline.",
    "image_description": "A rectangular pilaster cross-section 23.5 in deep with a vertical centerline drawn down the middle, and three dashed vertical lines to the right of center at different distances: one close to center, one farther out, and one farthest out near the edge.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.58,
        "y": 0.2,
        "w": 0.04,
        "h": 0.6
      },
      {
        "id": "z2",
        "x": 0.68,
        "y": 0.2,
        "w": 0.04,
        "h": 0.6
      },
      {
        "id": "z3",
        "x": 0.8,
        "y": 0.2,
        "w": 0.04,
        "h": 0.6
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the line closest to center, representing t/6 = 23.5/6 = about 3.92 in: the kern is the zone within which an axial load produces no tension anywhere in the section, and it extends only t/6 on either side of center, not t/4 or t/3.",
    "image": "question_images/q_8201.png",
    "domain": "masonry_structures",
    "scenario_id": 82,
    "scenario_title": "Reinforced Masonry Pilaster Eccentricity Check",
    "scenario_text": "A reinforced masonry pilaster is 15.625 in by 23.5 in actual cross-section (16 in by 24 in nominal), f'm = 2,000 psi, fully grouted, Grade 60 vertical bars. Under factored strength-level loads the pilaster carries Pu = 60 kips and Mu = 12 kip-ft applied about the strong axis, where the actual depth in the direction of bending is t = 23.5 in. Determine whether the eccentricity falls inside or outside the kern and select the correct design path per TMS 402-16 Chapter 9."
  },
  {
    "id": 8202,
    "type": "point_and_click",
    "question": "Given e = Mu/Pu = 2.4 in, click the point on the cross-section representing where the resultant axial load actually acts.",
    "image_description": "The same pilaster cross-section with a centerline, and three marked points to the right of center at increasing distances: one near center, one farther out, and one near the edge, each labeled with a distance value.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.58,
        "y": 0.46,
        "w": 0.05,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.72,
        "y": 0.46,
        "w": 0.05,
        "h": 0.08
      },
      {
        "id": "z3",
        "x": 0.85,
        "y": 0.46,
        "w": 0.05,
        "h": 0.08
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the point closest to center at 2.4 in: with Mu = 12 kip-ft and Pu = 60 kips, e = 12(12)/60 = 2.4 in, which is less than the kern limit of about 3.92 in, so the resultant falls inside the kern.",
    "image": "question_images/q_8202.png",
    "domain": "masonry_structures",
    "scenario_id": 82,
    "scenario_title": "Reinforced Masonry Pilaster Eccentricity Check",
    "scenario_text": "A reinforced masonry pilaster is 15.625 in by 23.5 in actual cross-section (16 in by 24 in nominal), f'm = 2,000 psi, fully grouted, Grade 60 vertical bars. Under factored strength-level loads the pilaster carries Pu = 60 kips and Mu = 12 kip-ft applied about the strong axis, where the actual depth in the direction of bending is t = 23.5 in. Determine whether the eccentricity falls inside or outside the kern and select the correct design path per TMS 402-16 Chapter 9."
  },
  {
    "id": 8203,
    "type": "point_and_click",
    "question": "Since e falls inside the kern, click the design path box that correctly applies to this pilaster.",
    "image_description": "A simple decision flowchart with two boxes side by side: one labeled 'no-tension, uncracked section check' and one labeled 'full cracked-section P-M interaction check'.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.1,
        "y": 0.4,
        "w": 0.35,
        "h": 0.2
      },
      {
        "id": "z2",
        "x": 0.55,
        "y": 0.4,
        "w": 0.35,
        "h": 0.2
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the no-tension, uncracked section box: because e = 2.4 in is inside the kern limit of about 3.92 in, the section is expected to remain in compression everywhere under this load, so a simple no-tension check applies rather than a full cracked-section P-M interaction analysis.",
    "image": "question_images/q_8203.png",
    "domain": "masonry_structures",
    "scenario_id": 82,
    "scenario_title": "Reinforced Masonry Pilaster Eccentricity Check",
    "scenario_text": "A reinforced masonry pilaster is 15.625 in by 23.5 in actual cross-section (16 in by 24 in nominal), f'm = 2,000 psi, fully grouted, Grade 60 vertical bars. Under factored strength-level loads the pilaster carries Pu = 60 kips and Mu = 12 kip-ft applied about the strong axis, where the actual depth in the direction of bending is t = 23.5 in. Determine whether the eccentricity falls inside or outside the kern and select the correct design path per TMS 402-16 Chapter 9."
  },
  {
    "id": 8204,
    "type": "drag_and_drop_order",
    "question": "Arrange the steps in the correct order for the eccentricity screening on this pilaster.",
    "items": [
      {
        "id": "s1",
        "text": "Determine Mu and Pu from the factored load analysis"
      },
      {
        "id": "s2",
        "text": "Compute the eccentricity e = Mu/Pu"
      },
      {
        "id": "s3",
        "text": "Compute the kern limit t/6 using the actual section depth"
      },
      {
        "id": "s4",
        "text": "Compare the computed e to the kern limit t/6"
      },
      {
        "id": "s5",
        "text": "Select the no-tension method or the full cracked-section P-M method"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4",
      "s5"
    ],
    "explanation": "The correct order computes Mu and Pu first, derives e, computes the kern limit, compares the two, and only then selects the design method: recognizing whether e is inside or outside t/6 in the first thirty seconds of a column or pilaster problem tells you which calculation path the rest of the problem needs.",
    "domain": "masonry_structures",
    "scenario_id": 82,
    "scenario_title": "Reinforced Masonry Pilaster Eccentricity Check",
    "scenario_text": "A reinforced masonry pilaster is 15.625 in by 23.5 in actual cross-section (16 in by 24 in nominal), f'm = 2,000 psi, fully grouted, Grade 60 vertical bars. Under factored strength-level loads the pilaster carries Pu = 60 kips and Mu = 12 kip-ft applied about the strong axis, where the actual depth in the direction of bending is t = 23.5 in. Determine whether the eccentricity falls inside or outside the kern and select the correct design path per TMS 402-16 Chapter 9."
  },
  {
    "id": 8205,
    "type": "drag_and_drop_position",
    "question": "Drag each label to its correct location on the pilaster cross-section.",
    "image_description": "The pilaster cross-section showing the full 23.5 in actual depth dimension line, a dashed kern boundary line at t/6 from center, a marked point at 2.4 in from center representing the resultant load, and the vertical centerline itself.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Actual depth t = 23.5 in"
      },
      {
        "id": "d2",
        "label": "Kern boundary at t/6"
      },
      {
        "id": "d3",
        "label": "Resultant load location, e = 2.4 in from center"
      },
      {
        "id": "d4",
        "label": "Section centerline"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.3,
        "y": 0.02,
        "w": 0.4,
        "h": 0.06
      },
      {
        "id": "z2",
        "x": 0.6159999999999999,
        "y": 0.2,
        "w": 0.06,
        "h": 0.5
      },
      {
        "id": "z3",
        "x": 0.544,
        "y": 0.5,
        "w": 0.06,
        "h": 0.08
      },
      {
        "id": "z4",
        "x": 0.47,
        "y": 0.2,
        "w": 0.05,
        "h": 0.5
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3",
      "z4": "d4"
    },
    "explanation": "The correct placement is t along the full width at top, the kern boundary as a dashed line at t/6 from center, the resultant load point at 2.4 in from center, and the centerline down the middle: each element locates a distinct quantity used in the eccentricity comparison.",
    "image": "question_images/q_8205.png",
    "domain": "masonry_structures",
    "scenario_id": 82,
    "scenario_title": "Reinforced Masonry Pilaster Eccentricity Check",
    "scenario_text": "A reinforced masonry pilaster is 15.625 in by 23.5 in actual cross-section (16 in by 24 in nominal), f'm = 2,000 psi, fully grouted, Grade 60 vertical bars. Under factored strength-level loads the pilaster carries Pu = 60 kips and Mu = 12 kip-ft applied about the strong axis, where the actual depth in the direction of bending is t = 23.5 in. Determine whether the eccentricity falls inside or outside the kern and select the correct design path per TMS 402-16 Chapter 9."
  },
  {
    "id": 8206,
    "type": "drag_and_drop_position",
    "question": "Drag each eccentricity condition to its correct design method.",
    "image_description": "Two labeled result boxes: one reading 'e inside kern' and one reading 'e outside kern', with two design-method boxes below them.",
    "drag_items": [
      {
        "id": "d1",
        "label": "No tension anywhere, uncracked section check"
      },
      {
        "id": "d2",
        "label": "Cracked section, full P-M interaction check"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.15,
        "y": 0.55,
        "w": 0.3,
        "h": 0.2
      },
      {
        "id": "z2",
        "x": 0.55,
        "y": 0.55,
        "w": 0.3,
        "h": 0.2
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2"
    },
    "explanation": "The correct match is 'e inside kern' with the no-tension uncracked check, and 'e outside kern' with the full cracked-section P-M interaction check: if e falls outside the kern, the section is expected to crack in tension on one face under service loads, requiring the more involved analysis.",
    "image": "question_images/q_8206.png",
    "domain": "masonry_structures",
    "scenario_id": 82,
    "scenario_title": "Reinforced Masonry Pilaster Eccentricity Check",
    "scenario_text": "A reinforced masonry pilaster is 15.625 in by 23.5 in actual cross-section (16 in by 24 in nominal), f'm = 2,000 psi, fully grouted, Grade 60 vertical bars. Under factored strength-level loads the pilaster carries Pu = 60 kips and Mu = 12 kip-ft applied about the strong axis, where the actual depth in the direction of bending is t = 23.5 in. Determine whether the eccentricity falls inside or outside the kern and select the correct design path per TMS 402-16 Chapter 9."
  },
  {
    "id": 8301,
    "type": "point_and_click",
    "question": "Click the anchor grid pattern that satisfies both the demand-based tributary area limit and the TMS 402-16 code maximum tributary area.",
    "image_description": "Three small wall elevation swatches, each showing a different anchor dot grid pattern with dimension callouts: swatch 1 at 24 in by 16 in spacing, swatch 2 at 24 in by 24 in spacing, swatch 3 at 16 in by 16 in spacing.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.08,
        "y": 0.4,
        "w": 0.22,
        "h": 0.3
      },
      {
        "id": "z2",
        "x": 0.4,
        "y": 0.4,
        "w": 0.22,
        "h": 0.3
      },
      {
        "id": "z3",
        "x": 0.72,
        "y": 0.4,
        "w": 0.22,
        "h": 0.3
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the 24 in by 16 in grid: this spacing gives a tributary area of 24(16)/144 = 2.67 sq ft, which exactly meets the TMS 402-16 code maximum, while the 24 by 24 in grid gives 4.0 sq ft and exceeds both the demand-based and code limits.",
    "image": "question_images/q_8301.png",
    "domain": "masonry_structures",
    "scenario_id": 83,
    "scenario_title": "Brick Veneer Anchor Tributary Area",
    "scenario_text": "A brick veneer wall over steel stud backup is anchored with corrugated veneer anchors rated at 100 lb allowable tension and compression capacity each, per TMS 402-16 Chapter 12. Strength-level wind pressure on the veneer is 25 psf. Anchors are proposed at a trial spacing of 24 in horizontal by 16 in vertical. TMS 402-16 also caps the maximum anchor tributary area at 2.67 sq ft regardless of calculated capacity. Determine the governing tributary area and correct anchor layout."
  },
  {
    "id": 8302,
    "type": "point_and_click",
    "question": "Click the box representing the value that governs the maximum allowable anchor tributary area.",
    "image_description": "Two side by side boxes: one labeled 'calculated demand-based area = 4.0 sq ft' and one labeled 'code maximum area = 2.67 sq ft'.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.1,
        "y": 0.4,
        "w": 0.35,
        "h": 0.2
      },
      {
        "id": "z2",
        "x": 0.55,
        "y": 0.4,
        "w": 0.35,
        "h": 0.2
      }
    ],
    "correct": "z2",
    "explanation": "The correct answer is the code maximum of 2.67 sq ft: TMS 402-16 caps tributary area at this fixed value no matter how strong the anchor or how low the wind pressure calculates out to be, and whichever value is smaller, the demand-based or the code maximum, always governs.",
    "image": "question_images/q_8302.png",
    "domain": "masonry_structures",
    "scenario_id": 83,
    "scenario_title": "Brick Veneer Anchor Tributary Area",
    "scenario_text": "A brick veneer wall over steel stud backup is anchored with corrugated veneer anchors rated at 100 lb allowable tension and compression capacity each, per TMS 402-16 Chapter 12. Strength-level wind pressure on the veneer is 25 psf. Anchors are proposed at a trial spacing of 24 in horizontal by 16 in vertical. TMS 402-16 also caps the maximum anchor tributary area at 2.67 sq ft regardless of calculated capacity. Determine the governing tributary area and correct anchor layout."
  },
  {
    "id": 8303,
    "type": "point_and_click",
    "question": "Click the zone of the wall elevation where anchor spacing must typically be reduced relative to the field of the wall.",
    "image_description": "An elevation of a brick veneer wall with a window opening near the middle. The field of the wall away from the opening is one zone, and a perimeter band surrounding the opening (jambs, head, and sill) is a second, distinct zone.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.35,
        "y": 0.3,
        "w": 0.3,
        "h": 0.4
      },
      {
        "id": "z2",
        "x": 0.05,
        "y": 0.05,
        "w": 0.9,
        "h": 0.15
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the perimeter band around the opening: TMS 402-16 Chapter 12 requires additional anchors within a set distance of openings and wall edges, since these regions see higher local wind pressures and cannot rely on the same tributary spacing used in the field of the wall.",
    "image": "question_images/q_8303.png",
    "domain": "masonry_structures",
    "scenario_id": 83,
    "scenario_title": "Brick Veneer Anchor Tributary Area",
    "scenario_text": "A brick veneer wall over steel stud backup is anchored with corrugated veneer anchors rated at 100 lb allowable tension and compression capacity each, per TMS 402-16 Chapter 12. Strength-level wind pressure on the veneer is 25 psf. Anchors are proposed at a trial spacing of 24 in horizontal by 16 in vertical. TMS 402-16 also caps the maximum anchor tributary area at 2.67 sq ft regardless of calculated capacity. Determine the governing tributary area and correct anchor layout."
  },
  {
    "id": 8304,
    "type": "drag_and_drop_order",
    "question": "Arrange the steps in the correct order to determine the final anchor spacing.",
    "items": [
      {
        "id": "s1",
        "text": "Determine the anchor's allowable capacity (100 lb)"
      },
      {
        "id": "s2",
        "text": "Determine the strength-level wind pressure demand (25 psf)"
      },
      {
        "id": "s3",
        "text": "Compute the demand-based tributary area = capacity divided by demand"
      },
      {
        "id": "s4",
        "text": "Compare the result to the TMS 402-16 code maximum tributary area of 2.67 sq ft"
      },
      {
        "id": "s5",
        "text": "Select the smaller of the two and lay out the anchor spacing"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4",
      "s5"
    ],
    "explanation": "The correct order finds capacity and demand first, computes the demand-based area, then compares to the code cap, then selects the governing smaller value: skipping the code-maximum comparison is the classic exam trap that leads to specifying too few anchors.",
    "domain": "masonry_structures",
    "scenario_id": 83,
    "scenario_title": "Brick Veneer Anchor Tributary Area",
    "scenario_text": "A brick veneer wall over steel stud backup is anchored with corrugated veneer anchors rated at 100 lb allowable tension and compression capacity each, per TMS 402-16 Chapter 12. Strength-level wind pressure on the veneer is 25 psf. Anchors are proposed at a trial spacing of 24 in horizontal by 16 in vertical. TMS 402-16 also caps the maximum anchor tributary area at 2.67 sq ft regardless of calculated capacity. Determine the governing tributary area and correct anchor layout."
  },
  {
    "id": 8305,
    "type": "drag_and_drop_position",
    "question": "Drag each label to its correct location on the veneer anchor diagram.",
    "image_description": "A wall elevation with a single anchor dot shown, a dashed rectangle around it representing its tributary area, a horizontal spacing dimension line, and a vertical spacing dimension line.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Anchor capacity = 100 lb"
      },
      {
        "id": "d2",
        "label": "Wind pressure = 25 psf"
      },
      {
        "id": "d3",
        "label": "Tributary area per anchor"
      },
      {
        "id": "d4",
        "label": "Spacing: 24 in horizontal by 16 in vertical"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.75,
        "y": 0.35,
        "w": 0.1,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.05,
        "y": 0.05,
        "w": 0.3,
        "h": 0.08
      },
      {
        "id": "z3",
        "x": 0.35,
        "y": 0.3,
        "w": 0.3,
        "h": 0.3
      },
      {
        "id": "z4",
        "x": 0.35,
        "y": 0.85,
        "w": 0.4,
        "h": 0.08
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3",
      "z4": "d4"
    },
    "explanation": "The correct placement is anchor capacity at the anchor dot itself, wind pressure as a general callout, the dashed rectangle as the tributary area, and the spacing dimensions along the grid lines: each label ties a specific number to the physical feature it describes.",
    "image": "question_images/q_8305.png",
    "domain": "masonry_structures",
    "scenario_id": 83,
    "scenario_title": "Brick Veneer Anchor Tributary Area",
    "scenario_text": "A brick veneer wall over steel stud backup is anchored with corrugated veneer anchors rated at 100 lb allowable tension and compression capacity each, per TMS 402-16 Chapter 12. Strength-level wind pressure on the veneer is 25 psf. Anchors are proposed at a trial spacing of 24 in horizontal by 16 in vertical. TMS 402-16 also caps the maximum anchor tributary area at 2.67 sq ft regardless of calculated capacity. Determine the governing tributary area and correct anchor layout."
  },
  {
    "id": 8306,
    "type": "drag_and_drop_position",
    "question": "Drag each tributary area value to whether it governs or does not govern the anchor spacing.",
    "image_description": "Two result boxes labeled 'governs (smaller value used for design)' and 'does not govern (larger value, not used)'.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Demand-based area = 4.0 sq ft"
      },
      {
        "id": "d2",
        "label": "Code maximum area = 2.67 sq ft"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.55,
        "y": 0.5,
        "w": 0.35,
        "h": 0.2
      },
      {
        "id": "z2",
        "x": 0.1,
        "y": 0.5,
        "w": 0.35,
        "h": 0.2
      }
    ],
    "correct": {
      "z1": "d2",
      "z2": "d1"
    },
    "explanation": "The correct match is the code maximum of 2.67 sq ft as governing, and the demand-based 4.0 sq ft as not governing: whichever tributary area is smaller always controls anchor spacing, so the larger calculated demand-based value is set aside in favor of the code's flat cap.",
    "image": "question_images/q_8306.png",
    "domain": "masonry_structures",
    "scenario_id": 83,
    "scenario_title": "Brick Veneer Anchor Tributary Area",
    "scenario_text": "A brick veneer wall over steel stud backup is anchored with corrugated veneer anchors rated at 100 lb allowable tension and compression capacity each, per TMS 402-16 Chapter 12. Strength-level wind pressure on the veneer is 25 psf. Anchors are proposed at a trial spacing of 24 in horizontal by 16 in vertical. TMS 402-16 also caps the maximum anchor tributary area at 2.67 sq ft regardless of calculated capacity. Determine the governing tributary area and correct anchor layout."
  },
  {
    "id": 8401,
    "type": "point_and_click",
    "question": "Click the face of the wall stem cross-section where tension reinforcement should be placed.",
    "image_description": "A horizontal cross-section through the retaining wall stem, with soil shown pressing against the left face and open air on the right face. Three zones are marked: the left (soil-side) face, the mid-depth of the section, and the right (air-side, exposed) face.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.1,
        "y": 0.4,
        "w": 0.15,
        "h": 0.2
      },
      {
        "id": "z2",
        "x": 0.45,
        "y": 0.4,
        "w": 0.15,
        "h": 0.2
      },
      {
        "id": "z3",
        "x": 0.78,
        "y": 0.4,
        "w": 0.15,
        "h": 0.2
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the soil-side face: lateral soil pressure bends the cantilevered stem such that the soil-side face goes into tension and the air-side face goes into compression, so the tension reinforcement must be placed near the soil-side face to be effective.",
    "image": "question_images/q_8401.png",
    "domain": "masonry_structures",
    "scenario_id": 84,
    "scenario_title": "Cantilevered CMU Retaining Wall Stem",
    "scenario_text": "A cantilevered reinforced CMU retaining wall stem is 10 ft tall, nominal 12 inch (11.625 in actual) fully grouted, f'm = 2,500 psi, with Grade 60 vertical reinforcement placed near the soil-side face. The wall retains lateral soil pressure producing a factored moment at the base of the stem Mu = 18 kip-ft per foot of wall. Determine correct reinforcement placement, the critical section, and lap or development requirements per TMS 402-16."
  },
  {
    "id": 8402,
    "type": "point_and_click",
    "question": "Click the location on the stem elevation where the flexural moment is maximum.",
    "image_description": "Vertical elevation of the 10 ft tall cantilevered stem fixed to a footing at the base, with a triangular soil pressure distribution shown pushing against the stem, increasing with depth. Three zones are marked at the top, mid-height, and base of the stem.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.4,
        "y": 0.1,
        "w": 0.2,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.4,
        "y": 0.46,
        "w": 0.2,
        "h": 0.08
      },
      {
        "id": "z3",
        "x": 0.4,
        "y": 0.87,
        "w": 0.2,
        "h": 0.08
      }
    ],
    "correct": "z3",
    "explanation": "The correct answer is the base of the stem: for a cantilevered stem fixed at the footing, both the soil pressure resultant and the moment arm increase toward the base, so the flexural demand accumulates to its maximum right at the fixed support.",
    "image": "question_images/q_8402.png",
    "domain": "masonry_structures",
    "scenario_id": 84,
    "scenario_title": "Cantilevered CMU Retaining Wall Stem",
    "scenario_text": "A cantilevered reinforced CMU retaining wall stem is 10 ft tall, nominal 12 inch (11.625 in actual) fully grouted, f'm = 2,500 psi, with Grade 60 vertical reinforcement placed near the soil-side face. The wall retains lateral soil pressure producing a factored moment at the base of the stem Mu = 18 kip-ft per foot of wall. Determine correct reinforcement placement, the critical section, and lap or development requirements per TMS 402-16."
  },
  {
    "id": 8403,
    "type": "point_and_click",
    "question": "Click the region of the stem elevation where reinforcement lap splices should be avoided due to peak flexural demand.",
    "image_description": "Elevation of the 10 ft stem with three marked bands: a band near the base, a band at mid-height, and a band near the top.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.35,
        "y": 0.85,
        "w": 0.3,
        "h": 0.1
      },
      {
        "id": "z2",
        "x": 0.35,
        "y": 0.46,
        "w": 0.3,
        "h": 0.1
      },
      {
        "id": "z3",
        "x": 0.35,
        "y": 0.08,
        "w": 0.3,
        "h": 0.1
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the band near the base: since moment is maximum at the fixed base, splicing reinforcement there would place a development-length-dependent connection exactly where the bar must deliver its full tensile capacity, so splices should be located higher up the stem, away from this critical section.",
    "image": "question_images/q_8403.png",
    "domain": "masonry_structures",
    "scenario_id": 84,
    "scenario_title": "Cantilevered CMU Retaining Wall Stem",
    "scenario_text": "A cantilevered reinforced CMU retaining wall stem is 10 ft tall, nominal 12 inch (11.625 in actual) fully grouted, f'm = 2,500 psi, with Grade 60 vertical reinforcement placed near the soil-side face. The wall retains lateral soil pressure producing a factored moment at the base of the stem Mu = 18 kip-ft per foot of wall. Determine correct reinforcement placement, the critical section, and lap or development requirements per TMS 402-16."
  },
  {
    "id": 8404,
    "type": "drag_and_drop_order",
    "question": "Arrange the steps in the correct order for designing this retaining wall stem.",
    "items": [
      {
        "id": "s1",
        "text": "Compute the lateral soil pressure and resulting Mu at the base"
      },
      {
        "id": "s2",
        "text": "Determine required As from Mn = Mu/phi"
      },
      {
        "id": "s3",
        "text": "Select bar size and spacing satisfying As and TMS 402-16 minimum reinforcement"
      },
      {
        "id": "s4",
        "text": "Check development length of the vertical bars into the footing"
      },
      {
        "id": "s5",
        "text": "Verify h/t slenderness of the stem"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4",
      "s5"
    ],
    "explanation": "The correct order starts with the demand (soil pressure and Mu), then required steel area, then bar selection against code minimums, then development into the footing, then a slenderness check, following the same demand-then-capacity-then-detailing sequence used throughout TMS 402-16 wall design.",
    "domain": "masonry_structures",
    "scenario_id": 84,
    "scenario_title": "Cantilevered CMU Retaining Wall Stem",
    "scenario_text": "A cantilevered reinforced CMU retaining wall stem is 10 ft tall, nominal 12 inch (11.625 in actual) fully grouted, f'm = 2,500 psi, with Grade 60 vertical reinforcement placed near the soil-side face. The wall retains lateral soil pressure producing a factored moment at the base of the stem Mu = 18 kip-ft per foot of wall. Determine correct reinforcement placement, the critical section, and lap or development requirements per TMS 402-16."
  },
  {
    "id": 8405,
    "type": "drag_and_drop_position",
    "question": "Drag each label to its correct location on the stem cross-section and footing connection.",
    "image_description": "A cross-section through the stem showing the soil-side face on the left, the air-side face on the right, a vertical bar symbol near the soil-side face, and a dowel bar extending down into a footing shown below the stem.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Soil-side tension face"
      },
      {
        "id": "d2",
        "label": "Air-side compression face"
      },
      {
        "id": "d3",
        "label": "Vertical reinforcement location"
      },
      {
        "id": "d4",
        "label": "Dowel into footing"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.08,
        "y": 0.35,
        "w": 0.15,
        "h": 0.3
      },
      {
        "id": "z2",
        "x": 0.78,
        "y": 0.35,
        "w": 0.15,
        "h": 0.3
      },
      {
        "id": "z3",
        "x": 0.25,
        "y": 0.45,
        "w": 0.08,
        "h": 0.2
      },
      {
        "id": "z4",
        "x": 0.35,
        "y": 0.82,
        "w": 0.15,
        "h": 0.12
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3",
      "z4": "d4"
    },
    "explanation": "The correct placement is the tension face on the soil side, compression face on the air side, the vertical bar just inside the soil-side face, and the dowel extending down into the footing: each label locates a physically distinct part of the reinforced stem-to-footing connection.",
    "image": "question_images/q_8405.png",
    "domain": "masonry_structures",
    "scenario_id": 84,
    "scenario_title": "Cantilevered CMU Retaining Wall Stem",
    "scenario_text": "A cantilevered reinforced CMU retaining wall stem is 10 ft tall, nominal 12 inch (11.625 in actual) fully grouted, f'm = 2,500 psi, with Grade 60 vertical reinforcement placed near the soil-side face. The wall retains lateral soil pressure producing a factored moment at the base of the stem Mu = 18 kip-ft per foot of wall. Determine correct reinforcement placement, the critical section, and lap or development requirements per TMS 402-16."
  },
  {
    "id": 8406,
    "type": "drag_and_drop_position",
    "question": "Drag each stem location to the description of its flexural demand.",
    "image_description": "Three labeled zones along the stem elevation: base, mid-height, and top, each next to an empty description box.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Maximum moment, critical flexural section"
      },
      {
        "id": "d2",
        "label": "Transition region, intermediate moment"
      },
      {
        "id": "d3",
        "label": "Minimum moment, free end"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.6,
        "y": 0.85,
        "w": 0.3,
        "h": 0.1
      },
      {
        "id": "z2",
        "x": 0.6,
        "y": 0.46,
        "w": 0.3,
        "h": 0.1
      },
      {
        "id": "z3",
        "x": 0.6,
        "y": 0.08,
        "w": 0.3,
        "h": 0.1
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct match is base with maximum moment, mid-height with an intermediate transition value, and top with minimum moment near the free end: this follows directly from the triangular soil pressure distribution that grows with depth toward the fixed base.",
    "image": "question_images/q_8406.png",
    "domain": "masonry_structures",
    "scenario_id": 84,
    "scenario_title": "Cantilevered CMU Retaining Wall Stem",
    "scenario_text": "A cantilevered reinforced CMU retaining wall stem is 10 ft tall, nominal 12 inch (11.625 in actual) fully grouted, f'm = 2,500 psi, with Grade 60 vertical reinforcement placed near the soil-side face. The wall retains lateral soil pressure producing a factored moment at the base of the stem Mu = 18 kip-ft per foot of wall. Determine correct reinforcement placement, the critical section, and lap or development requirements per TMS 402-16."
  },
  {
    "id": 8501,
    "type": "point_and_click",
    "question": "Click the node on the building section representing the wall anchorage connection that transfers out-of-plane wall force into the roof diaphragm.",
    "image_description": "A cross-section through the building showing a masonry wall on the left rising to meet a flat roof diaphragm at the top, with a footing at the base. Three marked nodes: one at the wall-to-roof intersection, one at mid-height of the wall, and one at the wall-to-footing connection.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.25,
        "y": 0.12,
        "w": 0.15,
        "h": 0.1
      },
      {
        "id": "z2",
        "x": 0.25,
        "y": 0.5,
        "w": 0.15,
        "h": 0.1
      },
      {
        "id": "z3",
        "x": 0.25,
        "y": 0.85,
        "w": 0.15,
        "h": 0.1
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the wall-to-roof intersection: this is where the anchorage connection (strap, tie, or similar element) transfers the out-of-plane wall force into the flexible roof diaphragm, which is the specific connection ASCE 7-16 Section 12.11.2.1 governs.",
    "image": "question_images/q_8501.png",
    "domain": "masonry_structures",
    "scenario_id": 85,
    "scenario_title": "Masonry Wall Anchorage to a Flexible Diaphragm",
    "scenario_text": "A single-story masonry bearing wall building has a flexible wood-sheathed roof diaphragm in a high seismic design category. ASCE 7-16 Section 12.11.2.1 requires wall anchorage forces to flexible diaphragms to be amplified above the basic tributary calculation. The basic tributary wall anchorage force is 800 lb/ft; the ASCE 7-16 amplification and minimum-force provisions increase this to 1,200 lb/ft at the roof level. Determine the correct connection detailing and force path."
  },
  {
    "id": 8502,
    "type": "point_and_click",
    "question": "Click the box representing the force value that governs the required wall anchorage design.",
    "image_description": "Two side by side boxes: one labeled '800 lb/ft basic tributary force' and one labeled '1,200 lb/ft amplified flexible-diaphragm force'.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.1,
        "y": 0.4,
        "w": 0.35,
        "h": 0.2
      },
      {
        "id": "z2",
        "x": 0.55,
        "y": 0.4,
        "w": 0.35,
        "h": 0.2
      }
    ],
    "correct": "z2",
    "explanation": "The correct answer is 1,200 lb/ft: ASCE 7-16 requires the anchorage force to flexible diaphragms in higher seismic design categories to be amplified above the basic tributary calculation, and this larger, code-required value governs the connection design, not the smaller basic tributary force.",
    "image": "question_images/q_8502.png",
    "domain": "masonry_structures",
    "scenario_id": 85,
    "scenario_title": "Masonry Wall Anchorage to a Flexible Diaphragm",
    "scenario_text": "A single-story masonry bearing wall building has a flexible wood-sheathed roof diaphragm in a high seismic design category. ASCE 7-16 Section 12.11.2.1 requires wall anchorage forces to flexible diaphragms to be amplified above the basic tributary calculation. The basic tributary wall anchorage force is 800 lb/ft; the ASCE 7-16 amplification and minimum-force provisions increase this to 1,200 lb/ft at the roof level. Determine the correct connection detailing and force path."
  },
  {
    "id": 8503,
    "type": "point_and_click",
    "question": "Click the location on the diaphragm plan view where wall anchorage demand is highest due to flexible diaphragm amplification.",
    "image_description": "A plan view of the rectangular roof diaphragm bounded by masonry walls on all four sides. Three zones are marked: the perimeter edge of the diaphragm near the walls, an interior zone partway toward the center, and the exact geometric center of the diaphragm.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.05,
        "y": 0.05,
        "w": 0.9,
        "h": 0.12
      },
      {
        "id": "z2",
        "x": 0.3,
        "y": 0.35,
        "w": 0.4,
        "h": 0.15
      },
      {
        "id": "z3",
        "x": 0.45,
        "y": 0.5,
        "w": 0.1,
        "h": 0.1
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the perimeter edge of the diaphragm: flexible diaphragms amplify demand near their edges where they connect to the walls, which is exactly why ASCE 7-16 requires anchorage forces there to exceed what a basic tributary calculation alone would give.",
    "image": "question_images/q_8503.png",
    "domain": "masonry_structures",
    "scenario_id": 85,
    "scenario_title": "Masonry Wall Anchorage to a Flexible Diaphragm",
    "scenario_text": "A single-story masonry bearing wall building has a flexible wood-sheathed roof diaphragm in a high seismic design category. ASCE 7-16 Section 12.11.2.1 requires wall anchorage forces to flexible diaphragms to be amplified above the basic tributary calculation. The basic tributary wall anchorage force is 800 lb/ft; the ASCE 7-16 amplification and minimum-force provisions increase this to 1,200 lb/ft at the roof level. Determine the correct connection detailing and force path."
  },
  {
    "id": 8504,
    "type": "drag_and_drop_order",
    "question": "Arrange the steps in the correct order to determine the required wall anchorage force.",
    "items": [
      {
        "id": "s1",
        "text": "Determine the seismic design category (SDC)"
      },
      {
        "id": "s2",
        "text": "Compute the basic tributary anchorage force"
      },
      {
        "id": "s3",
        "text": "Apply the ASCE 7-16 flexible-diaphragm amplification and minimum force provisions"
      },
      {
        "id": "s4",
        "text": "Select the larger governing anchorage force"
      },
      {
        "id": "s5",
        "text": "Design continuous cross ties and anchors to transfer the force into the diaphragm"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4",
      "s5"
    ],
    "explanation": "The correct order establishes the seismic design category first (since it triggers whether amplification applies), computes the basic force, applies the amplification and minimum provisions, selects the governing larger value, and finally designs the physical connection to deliver that force.",
    "domain": "masonry_structures",
    "scenario_id": 85,
    "scenario_title": "Masonry Wall Anchorage to a Flexible Diaphragm",
    "scenario_text": "A single-story masonry bearing wall building has a flexible wood-sheathed roof diaphragm in a high seismic design category. ASCE 7-16 Section 12.11.2.1 requires wall anchorage forces to flexible diaphragms to be amplified above the basic tributary calculation. The basic tributary wall anchorage force is 800 lb/ft; the ASCE 7-16 amplification and minimum-force provisions increase this to 1,200 lb/ft at the roof level. Determine the correct connection detailing and force path."
  },
  {
    "id": 8505,
    "type": "drag_and_drop_position",
    "question": "Drag each label to its correct location on the building section.",
    "image_description": "A building cross-section with a masonry wall on the left, a flat wood roof diaphragm at the top, a connector symbol at the wall-to-roof intersection, and a horizontal member running along the underside of the diaphragm representing a continuous cross tie.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Masonry wall"
      },
      {
        "id": "d2",
        "label": "Flexible wood diaphragm"
      },
      {
        "id": "d3",
        "label": "Wall anchor/strap connection"
      },
      {
        "id": "d4",
        "label": "Continuous cross tie"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.1,
        "y": 0.35,
        "w": 0.15,
        "h": 0.4
      },
      {
        "id": "z2",
        "x": 0.306,
        "y": 0.08,
        "w": 0.6,
        "h": 0.08
      },
      {
        "id": "z3",
        "x": 0.19399999999999998,
        "y": 0.14,
        "w": 0.1,
        "h": 0.08
      },
      {
        "id": "z4",
        "x": 0.3,
        "y": 0.2,
        "w": 0.55,
        "h": 0.06
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3",
      "z4": "d4"
    },
    "explanation": "The correct placement is the wall on the left, the diaphragm along the top, the anchor connector right at the wall-to-roof intersection, and the continuous cross tie running along the underside of the diaphragm: this is the full load path for out-of-plane wall force into a flexible diaphragm.",
    "image": "question_images/q_8505.png",
    "domain": "masonry_structures",
    "scenario_id": 85,
    "scenario_title": "Masonry Wall Anchorage to a Flexible Diaphragm",
    "scenario_text": "A single-story masonry bearing wall building has a flexible wood-sheathed roof diaphragm in a high seismic design category. ASCE 7-16 Section 12.11.2.1 requires wall anchorage forces to flexible diaphragms to be amplified above the basic tributary calculation. The basic tributary wall anchorage force is 800 lb/ft; the ASCE 7-16 amplification and minimum-force provisions increase this to 1,200 lb/ft at the roof level. Determine the correct connection detailing and force path."
  },
  {
    "id": 8506,
    "type": "drag_and_drop_position",
    "question": "Drag each force value to whether it governs or does not govern the wall anchorage design.",
    "image_description": "Two result boxes labeled 'governs (larger required force)' and 'does not govern (smaller, non-amplified force)'.",
    "drag_items": [
      {
        "id": "d1",
        "label": "800 lb/ft basic tributary force"
      },
      {
        "id": "d2",
        "label": "1,200 lb/ft amplified flexible-diaphragm force"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.1,
        "y": 0.5,
        "w": 0.35,
        "h": 0.2
      },
      {
        "id": "z2",
        "x": 0.55,
        "y": 0.5,
        "w": 0.35,
        "h": 0.2
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2"
    },
    "explanation": "The correct match is 800 lb/ft as not governing and 1,200 lb/ft as governing: because ASCE 7-16 requires the amplified flexible-diaphragm force to be used, the larger 1,200 lb/ft value controls the anchorage connection design at the roof level.",
    "image": "question_images/q_8506.png",
    "domain": "masonry_structures",
    "scenario_id": 85,
    "scenario_title": "Masonry Wall Anchorage to a Flexible Diaphragm",
    "scenario_text": "A single-story masonry bearing wall building has a flexible wood-sheathed roof diaphragm in a high seismic design category. ASCE 7-16 Section 12.11.2.1 requires wall anchorage forces to flexible diaphragms to be amplified above the basic tributary calculation. The basic tributary wall anchorage force is 800 lb/ft; the ASCE 7-16 amplification and minimum-force provisions increase this to 1,200 lb/ft at the roof level. Determine the correct connection detailing and force path."
  },
  {
    "id": 8601,
    "type": "point_and_click",
    "question": "On the footing plan, click the critical section used to check two-way (punching) shear.",
    "image_description": "Plan view of the 8 ft by 8 ft square footing (outline from 0.1 to 0.9 in both directions) with the 16 in by 16 in column shown centered as a smaller square from 0.4167 to 0.5833 in both x and y. Four reference bands are drawn at increasing distance from the column face: a band at the column face itself, a band offset d/2 = 10 in from the face, a band offset d = 20 in from the face, and the outer footing edge.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.5,
        "y": 0.3125,
        "w": 0.1,
        "h": 0.045
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.4167,
        "w": 0.1,
        "h": 0.04
      },
      {
        "id": "z3",
        "x": 0.5,
        "y": 0.2083,
        "w": 0.1,
        "h": 0.045
      },
      {
        "id": "z4",
        "x": 0.5,
        "y": 0.1,
        "w": 0.1,
        "h": 0.04
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the band at d/2 = 10 in from the column face: ACI 318-14 Chapter 13 (via Chapter 22) locates the two-way shear critical perimeter at d/2 from the face of the column on all four sides. This perimeter almost always governs footing thickness, so it must be checked before flexure or one-way shear are finalized.",
    "image": "question_images/q_8601.png",
    "domain": "foundations_and_retaining_structures",
    "scenario_id": 86,
    "scenario_title": "Square Spread Footing, Critical Sections and Design Sequence",
    "scenario_text": "Column C1 carries a service dead load of 180 kips and a service live load of 120 kips (total service load 300 kips, factored load Pu = 408 kips using 1.2D + 1.6L). Allowable net soil bearing pressure is 5,000 psf. The column is 16 in by 16 in square. An 8 ft by 8 ft square footing is selected, thickness 24 in, effective depth d = 20 in."
  },
  {
    "id": 8602,
    "type": "point_and_click",
    "question": "Click the critical section for the one-way (beam) shear check on this footing.",
    "image_description": "Same plan view as the punching shear diagram, but the one-way shear reference line now spans the full width of the footing at a distance d = 20 in from the column face, drawn as a wide horizontal band across nearly the whole footing rather than a small perimeter box.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.5,
        "y": 0.3125,
        "w": 0.1,
        "h": 0.045
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.4167,
        "w": 0.1,
        "h": 0.04
      },
      {
        "id": "z3",
        "x": 0.125,
        "y": 0.18580000000000002,
        "w": 0.75,
        "h": 0.045
      },
      {
        "id": "z4",
        "x": 0.5,
        "y": 0.1,
        "w": 0.1,
        "h": 0.04
      }
    ],
    "correct": "z3",
    "explanation": "The correct answer is the full-width band at d = 20 in from the column face: one-way shear is checked like a wide beam across the entire footing width at distance d from the column face. For a square footing this check rarely governs, but it must still be verified, especially since this footing is close to the aspect ratio where it starts to matter.",
    "image": "question_images/q_8602.png",
    "domain": "foundations_and_retaining_structures",
    "scenario_id": 86,
    "scenario_title": "Square Spread Footing, Critical Sections and Design Sequence",
    "scenario_text": "Column C1 carries a service dead load of 180 kips and a service live load of 120 kips (total service load 300 kips, factored load Pu = 408 kips using 1.2D + 1.6L). Allowable net soil bearing pressure is 5,000 psf. The column is 16 in by 16 in square. An 8 ft by 8 ft square footing is selected, thickness 24 in, effective depth d = 20 in."
  },
  {
    "id": 8603,
    "type": "point_and_click",
    "question": "Click the critical section used for flexural (moment) design of this footing.",
    "image_description": "Same footing plan, with a full-width horizontal band drawn exactly at the face of the column, representing the flexural critical section, alongside the previously shown d/2 and d offset bands for contrast.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.5,
        "y": 0.3125,
        "w": 0.1,
        "h": 0.045
      },
      {
        "id": "z2",
        "x": 0.125,
        "y": 0.3967,
        "w": 0.75,
        "h": 0.04
      },
      {
        "id": "z3",
        "x": 0.5,
        "y": 0.2083,
        "w": 0.1,
        "h": 0.045
      },
      {
        "id": "z4",
        "x": 0.5,
        "y": 0.1,
        "w": 0.1,
        "h": 0.04
      }
    ],
    "correct": "z2",
    "explanation": "The correct answer is the full-width band at the column face: footings act as cantilevers bending up from the column face under net factored soil pressure, so ACI 318-14 places the flexural critical section right at the face of the column, not offset by d/2 or d like the two shear checks.",
    "image": "question_images/q_8603.png",
    "domain": "foundations_and_retaining_structures",
    "scenario_id": 86,
    "scenario_title": "Square Spread Footing, Critical Sections and Design Sequence",
    "scenario_text": "Column C1 carries a service dead load of 180 kips and a service live load of 120 kips (total service load 300 kips, factored load Pu = 408 kips using 1.2D + 1.6L). Allowable net soil bearing pressure is 5,000 psf. The column is 16 in by 16 in square. An 8 ft by 8 ft square footing is selected, thickness 24 in, effective depth d = 20 in."
  },
  {
    "id": 8604,
    "type": "drag_and_drop_position",
    "question": "Drag each design check onto the location on the footing cross section where it is evaluated.",
    "image_description": "Elevation (side) cross section of the footing: column stub at the top center, footing slab in the middle, and the soil bearing interface drawn as a line at the bottom. Four horizontal reference lines at increasing depth mark, from bottom to top: the soil bearing interface, the two-way shear perimeter at d/2 from the column face, a full-width one-way shear band at d from the column face, and a full-width flexure band at the column face.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Bearing pressure check, P/A less than or equal to allowable (uses service loads)"
      },
      {
        "id": "d2",
        "label": "Two-way (punching) shear at d/2 from column face"
      },
      {
        "id": "d3",
        "label": "One-way (beam) shear at d from column face"
      },
      {
        "id": "d4",
        "label": "Flexural design at the face of the column"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.2,
        "y": 0.82,
        "w": 0.6,
        "h": 0.06
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.65,
        "w": 0.12,
        "h": 0.05
      },
      {
        "id": "z3",
        "x": 0.2,
        "y": 0.475,
        "w": 0.6,
        "h": 0.05
      },
      {
        "id": "z4",
        "x": 0.2,
        "y": 0.32499999999999996,
        "w": 0.6,
        "h": 0.05
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d3",
      "z3": "d2",
      "z4": "d4"
    },
    "explanation": "The correct pairing places bearing pressure at the soil interface using service loads (z1), one-way (beam) shear at d from the column face (z2, farther from the column than two-way shear), two-way (punching) shear at d/2 from the column face (z3, closer to the column since d/2 is less than d), and flexure at the face of the column (z4, nearest the column). All three concrete checks use factored loads per ACI 318-14 Chapter 13. Mixing service and factored loads across these checks is the single most common error in this problem type.",
    "image": "question_images/q_8604.png",
    "domain": "foundations_and_retaining_structures",
    "scenario_id": 86,
    "scenario_title": "Square Spread Footing, Critical Sections and Design Sequence",
    "scenario_text": "Column C1 carries a service dead load of 180 kips and a service live load of 120 kips (total service load 300 kips, factored load Pu = 408 kips using 1.2D + 1.6L). Allowable net soil bearing pressure is 5,000 psf. The column is 16 in by 16 in square. An 8 ft by 8 ft square footing is selected, thickness 24 in, effective depth d = 20 in."
  },
  {
    "id": 8605,
    "type": "drag_and_drop_order",
    "question": "Arrange the design steps for this spread footing in the correct order, from first performed to last.",
    "items": [
      {
        "id": "s1",
        "text": "Compute required footing plan area using total service load and allowable net soil bearing pressure"
      },
      {
        "id": "s2",
        "text": "Compute factored net soil bearing pressure using factored column loads over the selected footing area"
      },
      {
        "id": "s3",
        "text": "Check two-way (punching) shear at the critical section d/2 from the column face"
      },
      {
        "id": "s4",
        "text": "Check one-way (beam) shear at the critical section a distance d from the column face"
      },
      {
        "id": "s5",
        "text": "Design flexural reinforcement using the factored moment at the face of the column"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4",
      "s5"
    ],
    "explanation": "The correct order is s1, s2, s3, s4, s5: plan area is set first using service loads and allowable bearing pressure, then every remaining step uses factored loads, with two-way shear checked before one-way shear since it is the more common governing case, and flexure designed last using the factored moment at the column face.",
    "domain": "foundations_and_retaining_structures",
    "scenario_id": 86,
    "scenario_title": "Square Spread Footing, Critical Sections and Design Sequence",
    "scenario_text": "Column C1 carries a service dead load of 180 kips and a service live load of 120 kips (total service load 300 kips, factored load Pu = 408 kips using 1.2D + 1.6L). Allowable net soil bearing pressure is 5,000 psf. The column is 16 in by 16 in square. An 8 ft by 8 ft square footing is selected, thickness 24 in, effective depth d = 20 in."
  },
  {
    "id": 8606,
    "type": "drag_and_drop_position",
    "question": "Drag each offset distance label onto the matching reference line on the footing cross section.",
    "image_description": "Same elevation cross section as the earlier drag item, with three horizontal reference lines shown at the column face, at d/2 from the face, and at d from the face, unlabeled.",
    "drag_items": [
      {
        "id": "d1",
        "label": "d/2 = 10 in from column face"
      },
      {
        "id": "d2",
        "label": "d = 20 in from column face"
      },
      {
        "id": "d3",
        "label": "0 in (column face itself)"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.5,
        "y": 0.65,
        "w": 0.12,
        "h": 0.05
      },
      {
        "id": "z2",
        "x": 0.2,
        "y": 0.475,
        "w": 0.6,
        "h": 0.05
      },
      {
        "id": "z3",
        "x": 0.2,
        "y": 0.32499999999999996,
        "w": 0.6,
        "h": 0.05
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct pairing is z1 to d1, z2 to d2, and z3 to d3: getting these three offsets right, and not swapping d/2 with d, is exactly the kind of critical section confusion ACI 318-14 Chapter 13 problems are designed to test on this exam.",
    "image": "question_images/q_8606.png",
    "domain": "foundations_and_retaining_structures",
    "scenario_id": 86,
    "scenario_title": "Square Spread Footing, Critical Sections and Design Sequence",
    "scenario_text": "Column C1 carries a service dead load of 180 kips and a service live load of 120 kips (total service load 300 kips, factored load Pu = 408 kips using 1.2D + 1.6L). Allowable net soil bearing pressure is 5,000 psf. The column is 16 in by 16 in square. An 8 ft by 8 ft square footing is selected, thickness 24 in, effective depth d = 20 in."
  },
  {
    "id": 8701,
    "type": "point_and_click",
    "question": "Click the location on the footing plan where the combined footing's centroid must be placed to match the resultant of the two column loads.",
    "image_description": "Plan view of a long rectangular combined footing running left to right. C1 is shown at the very left edge (property line), C2 is shown 20 ft to the right of C1. A required resultant location is marked at 12.8 ft from C1, which is where the footing's area centroid must fall.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.4938,
        "y": 0.5,
        "w": 0.08,
        "h": 0.15
      },
      {
        "id": "z2",
        "x": 0.15,
        "y": 0.5,
        "w": 0.08,
        "h": 0.15
      },
      {
        "id": "z3",
        "x": 0.7154,
        "y": 0.5,
        "w": 0.08,
        "h": 0.15
      },
      {
        "id": "z4",
        "x": 0.5,
        "y": 0.2,
        "w": 0.08,
        "h": 0.1
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the point 12.8 ft from C1: the resultant location is found by taking moments about C1, (320 kips times 20 ft) divided by the total 500 kips, which equals 12.8 ft. The footing must be shaped so its area centroid falls exactly there, producing a uniform bearing pressure instead of a tipping, non-uniform distribution.",
    "image": "question_images/q_8701.png",
    "domain": "foundations_and_retaining_structures",
    "scenario_id": 87,
    "scenario_title": "Combined Rectangular Footing, Load Resultant and Shear Perimeters",
    "scenario_text": "Exterior column C1 sits directly on a property line and carries a service load of 180 kips. Interior column C2, located 20 ft from C1, carries a service load of 320 kips. Because C1 cannot have a footing extending past the property line, a combined footing is used. Allowable net soil bearing pressure is 3,500 psf. The footing is proportioned so its area centroid coincides with the resultant of the two column loads."
  },
  {
    "id": 8702,
    "type": "point_and_click",
    "question": "Click the correct two-way (punching) shear critical section for interior column C2.",
    "image_description": "Same combined footing plan, with a full four-sided perimeter box drawn around C2 offset d/2 from all four column faces, contrasted with a partial perimeter drawn around C1 and other reference locations.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.7154,
        "y": 0.5,
        "w": 0.09,
        "h": 0.12
      },
      {
        "id": "z2",
        "x": 0.15,
        "y": 0.5,
        "w": 0.09,
        "h": 0.12
      },
      {
        "id": "z3",
        "x": 0.4938,
        "y": 0.5,
        "w": 0.08,
        "h": 0.12
      },
      {
        "id": "z4",
        "x": 0.2,
        "y": 0.825,
        "w": 0.6,
        "h": 0.05
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the closed four-sided perimeter around C2: because C2 is fully surrounded by footing concrete on all sides, its two-way shear critical section is a complete d/2 perimeter on all four faces, just like an ordinary interior spread footing per ACI 318-14 Chapter 13.",
    "image": "question_images/q_8702.png",
    "domain": "foundations_and_retaining_structures",
    "scenario_id": 87,
    "scenario_title": "Combined Rectangular Footing, Load Resultant and Shear Perimeters",
    "scenario_text": "Exterior column C1 sits directly on a property line and carries a service load of 180 kips. Interior column C2, located 20 ft from C1, carries a service load of 320 kips. Because C1 cannot have a footing extending past the property line, a combined footing is used. Allowable net soil bearing pressure is 3,500 psf. The footing is proportioned so its area centroid coincides with the resultant of the two column loads."
  },
  {
    "id": 8703,
    "type": "point_and_click",
    "question": "Click the correct two-way (punching) shear critical section for edge column C1, which sits at the property line.",
    "image_description": "Same combined footing plan, now highlighting a three-sided perimeter around C1, open on the side toward the property line where no footing concrete extends beyond the column.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.15,
        "y": 0.5,
        "w": 0.09,
        "h": 0.12
      },
      {
        "id": "z2",
        "x": 0.7154,
        "y": 0.5,
        "w": 0.09,
        "h": 0.12
      },
      {
        "id": "z3",
        "x": 0.4938,
        "y": 0.5,
        "w": 0.08,
        "h": 0.12
      },
      {
        "id": "z4",
        "x": 0.2,
        "y": 0.825,
        "w": 0.6,
        "h": 0.05
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the three-sided perimeter around C1: since the footing cannot extend past the property line beyond C1, the critical shear perimeter is truncated and only wraps the three faces where concrete actually exists, reducing bo compared to a full four-sided perimeter and requiring a lower shear capacity to be checked against.",
    "image": "question_images/q_8703.png",
    "domain": "foundations_and_retaining_structures",
    "scenario_id": 87,
    "scenario_title": "Combined Rectangular Footing, Load Resultant and Shear Perimeters",
    "scenario_text": "Exterior column C1 sits directly on a property line and carries a service load of 180 kips. Interior column C2, located 20 ft from C1, carries a service load of 320 kips. Because C1 cannot have a footing extending past the property line, a combined footing is used. Allowable net soil bearing pressure is 3,500 psf. The footing is proportioned so its area centroid coincides with the resultant of the two column loads."
  },
  {
    "id": 8704,
    "type": "drag_and_drop_position",
    "question": "Drag each label onto the correct end of the combined footing.",
    "image_description": "Plan view of a trapezoidal combined footing, wider at the C2 end and narrower at the C1 end near the property line.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Wider end, placed near heavier column C2 (320 kips)"
      },
      {
        "id": "d2",
        "label": "Narrower end, placed near lighter column C1 (180 kips), limited by the property line"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.75,
        "y": 0.3,
        "w": 0.2,
        "h": 0.15
      },
      {
        "id": "z2",
        "x": 0.2,
        "y": 0.3,
        "w": 0.2,
        "h": 0.15
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2"
    },
    "explanation": "The correct pairing puts the wider end near C2 and the narrower end near C1: a trapezoidal shape shifts extra area toward the heavier column, which is necessary to keep the footing's area centroid aligned with the load resultant when space at the light-column end is restricted.",
    "image": "question_images/q_8704.png",
    "domain": "foundations_and_retaining_structures",
    "scenario_id": 87,
    "scenario_title": "Combined Rectangular Footing, Load Resultant and Shear Perimeters",
    "scenario_text": "Exterior column C1 sits directly on a property line and carries a service load of 180 kips. Interior column C2, located 20 ft from C1, carries a service load of 320 kips. Because C1 cannot have a footing extending past the property line, a combined footing is used. Allowable net soil bearing pressure is 3,500 psf. The footing is proportioned so its area centroid coincides with the resultant of the two column loads."
  },
  {
    "id": 8705,
    "type": "drag_and_drop_order",
    "question": "Arrange the combined footing design steps in the correct order, from first performed to last.",
    "items": [
      {
        "id": "s1",
        "text": "Compute the total service load and required footing area using the allowable net soil bearing pressure"
      },
      {
        "id": "s2",
        "text": "Locate the resultant of the two column service loads relative to column C1"
      },
      {
        "id": "s3",
        "text": "Establish the footing length and shape so the footing area centroid coincides with the load resultant"
      },
      {
        "id": "s4",
        "text": "Convert to factored column loads and compute the factored net soil bearing pressure over the footing area"
      },
      {
        "id": "s5",
        "text": "Check two-way shear, one-way shear, and design flexural reinforcement using the factored soil pressure"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4",
      "s5"
    ],
    "explanation": "The correct order is s1 through s5: total required area and the load resultant location are both needed before the footing shape can be established, and only after the shape is fixed does the design move to factored-load shear and flexure checks.",
    "domain": "foundations_and_retaining_structures",
    "scenario_id": 87,
    "scenario_title": "Combined Rectangular Footing, Load Resultant and Shear Perimeters",
    "scenario_text": "Exterior column C1 sits directly on a property line and carries a service load of 180 kips. Interior column C2, located 20 ft from C1, carries a service load of 320 kips. Because C1 cannot have a footing extending past the property line, a combined footing is used. Allowable net soil bearing pressure is 3,500 psf. The footing is proportioned so its area centroid coincides with the resultant of the two column loads."
  },
  {
    "id": 8706,
    "type": "drag_and_drop_position",
    "question": "Drag each load-level label onto the part of the design where it applies.",
    "image_description": "Overall combined footing plan outline representing the sizing/bearing check, alongside a detail callout near column C2 representing the shear and flexure design.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Use service (ASD) loads"
      },
      {
        "id": "d2",
        "label": "Use factored (LRFD) loads"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.15000000000000002,
        "y": 0.10999999999999999,
        "w": 0.7,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.7154,
        "y": 0.65,
        "w": 0.15,
        "h": 0.1
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2"
    },
    "explanation": "The correct pairing uses service loads for sizing the footing against allowable bearing pressure, and factored loads for the concrete shear and flexure design near C2, matching ACI 318-14's factored-load requirement for member design as distinct from the geotechnical bearing check.",
    "image": "question_images/q_8706.png",
    "domain": "foundations_and_retaining_structures",
    "scenario_id": 87,
    "scenario_title": "Combined Rectangular Footing, Load Resultant and Shear Perimeters",
    "scenario_text": "Exterior column C1 sits directly on a property line and carries a service load of 180 kips. Interior column C2, located 20 ft from C1, carries a service load of 320 kips. Because C1 cannot have a footing extending past the property line, a combined footing is used. Allowable net soil bearing pressure is 3,500 psf. The footing is proportioned so its area centroid coincides with the resultant of the two column loads."
  },
  {
    "id": 8801,
    "type": "point_and_click",
    "question": "Click the column whose two-way (punching) shear critical perimeter is most reduced, being open on two sides.",
    "image_description": "Plan view of the mat foundation outline, with corner column C1 near the top-left corner, edge column C2 along the middle of the top edge, and interior column C3 near the center of the mat.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.15,
        "y": 0.15,
        "w": 0.08,
        "h": 0.06
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.15,
        "w": 0.08,
        "h": 0.06
      },
      {
        "id": "z3",
        "x": 0.5,
        "y": 0.5,
        "w": 0.08,
        "h": 0.06
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is corner column C1: a corner column has its two-way shear perimeter open on two adjacent sides, giving it the smallest critical perimeter bo of the three columns and, generally, the least shear capacity, so it deserves the first look on any mat shear check.",
    "image": "question_images/q_8801.png",
    "domain": "foundations_and_retaining_structures",
    "scenario_id": 88,
    "scenario_title": "Mat Foundation, Corner, Edge, and Interior Column Shear",
    "scenario_text": "A mat foundation supports three representative columns: corner column C1, edge column C2 along the mat perimeter, and interior column C3 near the mat center. All three carry similar factored column loads. Mat thickness gives an effective depth d = 24 in. The rigid method is used, so bearing pressure under the mat varies linearly, P/A plus or minus Mc/I."
  },
  {
    "id": 8802,
    "type": "point_and_click",
    "question": "Click the correct two-way shear critical section for edge column C2, which sits along the mat perimeter.",
    "image_description": "Detail near column C2 showing a three-sided perimeter box offset d/2 from the column faces, open along the mat's outer edge, contrasted with a full four-sided perimeter shown elsewhere and other distractor locations.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.5,
        "y": 0.2,
        "w": 0.14,
        "h": 0.09
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.55,
        "w": 0.14,
        "h": 0.09
      },
      {
        "id": "z3",
        "x": 0.18,
        "y": 0.18,
        "w": 0.12,
        "h": 0.08
      },
      {
        "id": "z4",
        "x": 0.3,
        "y": 0.3,
        "w": 0.08,
        "h": 0.06
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the three-sided perimeter open along the mat edge: an edge column has one face at the mat boundary, so its critical shear perimeter only wraps the three faces where mat concrete surrounds it, reducing bo compared to an interior column and making the edge column govern before the interior column does.",
    "image": "question_images/q_8802.png",
    "domain": "foundations_and_retaining_structures",
    "scenario_id": 88,
    "scenario_title": "Mat Foundation, Corner, Edge, and Interior Column Shear",
    "scenario_text": "A mat foundation supports three representative columns: corner column C1, edge column C2 along the mat perimeter, and interior column C3 near the mat center. All three carry similar factored column loads. Mat thickness gives an effective depth d = 24 in. The rigid method is used, so bearing pressure under the mat varies linearly, P/A plus or minus Mc/I."
  },
  {
    "id": 8803,
    "type": "point_and_click",
    "question": "Click the location of the one-way shear check near interior column C3, at a distance d from the column face across the full mat width.",
    "image_description": "Plan view of the mat with a wide horizontal band drawn across most of the mat width, offset a distance d below the center of column C3, representing the one-way shear reference line, alongside other reference points near C1 and C2.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.15000000000000002,
        "y": 0.5599999999999999,
        "w": 0.7,
        "h": 0.04
      },
      {
        "id": "z2",
        "x": 0.15000000000000002,
        "y": 0.48,
        "w": 0.7,
        "h": 0.04
      },
      {
        "id": "z3",
        "x": 0.5,
        "y": 0.2,
        "w": 0.5,
        "h": 0.04
      },
      {
        "id": "z4",
        "x": 0.15,
        "y": 0.15,
        "w": 0.08,
        "h": 0.06
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the full-width band offset a distance d from column C3's face: one-way shear on a mat is checked exactly like on an individual footing, across the full width at distance d from the column face, and this check still applies on a mat even though the slab looks massive.",
    "image": "question_images/q_8803.png",
    "domain": "foundations_and_retaining_structures",
    "scenario_id": 88,
    "scenario_title": "Mat Foundation, Corner, Edge, and Interior Column Shear",
    "scenario_text": "A mat foundation supports three representative columns: corner column C1, edge column C2 along the mat perimeter, and interior column C3 near the mat center. All three carry similar factored column loads. Mat thickness gives an effective depth d = 24 in. The rigid method is used, so bearing pressure under the mat varies linearly, P/A plus or minus Mc/I."
  },
  {
    "id": 8804,
    "type": "drag_and_drop_position",
    "question": "Drag each column-type description onto the matching column on the mat plan.",
    "image_description": "Mat foundation plan showing C1 near the corner, C2 along the top edge, and C3 near the center, unlabeled.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Corner column, 2 open sides, most reduced shear perimeter"
      },
      {
        "id": "d2",
        "label": "Edge column, 1 open side"
      },
      {
        "id": "d3",
        "label": "Interior column, full 4-sided perimeter, generally least critical"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.15,
        "y": 0.15,
        "w": 0.1,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.15,
        "w": 0.1,
        "h": 0.08
      },
      {
        "id": "z3",
        "x": 0.5,
        "y": 0.5,
        "w": 0.1,
        "h": 0.08
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct pairing is C1 as the corner column, C2 as the edge column, and C3 as the interior column: recognizing which columns have a reduced shear perimeter is the mat-specific concept this exam favors, since a mat's overall bulk does not protect its edge and corner columns from punching shear.",
    "image": "question_images/q_8804.png",
    "domain": "foundations_and_retaining_structures",
    "scenario_id": 88,
    "scenario_title": "Mat Foundation, Corner, Edge, and Interior Column Shear",
    "scenario_text": "A mat foundation supports three representative columns: corner column C1, edge column C2 along the mat perimeter, and interior column C3 near the mat center. All three carry similar factored column loads. Mat thickness gives an effective depth d = 24 in. The rigid method is used, so bearing pressure under the mat varies linearly, P/A plus or minus Mc/I."
  },
  {
    "id": 8805,
    "type": "drag_and_drop_order",
    "question": "Arrange the investigative priority for checking punching shear across this mat foundation, from highest priority to lowest.",
    "items": [
      {
        "id": "s1",
        "text": "Identify corner columns, perimeter open on two sides, least shear capacity"
      },
      {
        "id": "s2",
        "text": "Check edge columns, perimeter open on one side"
      },
      {
        "id": "s3",
        "text": "Check interior columns, full four-sided perimeter, generally least critical"
      },
      {
        "id": "s4",
        "text": "Confirm mat thickness satisfies the governing (most critical) column check"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4"
    ],
    "explanation": "The correct order is s1, s2, s3, s4: corner columns have the smallest shear perimeter and should be checked first, followed by edge columns, then interior columns, and finally the mat thickness is confirmed against whichever column actually governs.",
    "domain": "foundations_and_retaining_structures",
    "scenario_id": 88,
    "scenario_title": "Mat Foundation, Corner, Edge, and Interior Column Shear",
    "scenario_text": "A mat foundation supports three representative columns: corner column C1, edge column C2 along the mat perimeter, and interior column C3 near the mat center. All three carry similar factored column loads. Mat thickness gives an effective depth d = 24 in. The rigid method is used, so bearing pressure under the mat varies linearly, P/A plus or minus Mc/I."
  },
  {
    "id": 8806,
    "type": "drag_and_drop_position",
    "question": "Drag each bearing pressure label onto the correct edge of the mat pressure diagram.",
    "image_description": "Cross section of the mat showing a linearly varying bearing pressure diagram under net moment, high pressure on one edge and low pressure on the opposite edge, per the rigid method P/A plus or minus Mc/I.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Maximum bearing pressure, P/A + Mc/I"
      },
      {
        "id": "d2",
        "label": "Minimum bearing pressure, P/A - Mc/I"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.2,
        "y": 0.8,
        "w": 0.15,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.8,
        "y": 0.8,
        "w": 0.15,
        "h": 0.08
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2"
    },
    "explanation": "The correct pairing places maximum pressure, P/A + Mc/I, on the edge in the direction the moment pushes down, and minimum pressure, P/A - Mc/I, on the opposite edge, since the rigid method assumes a mat stiff enough to keep pressure varying linearly across its width.",
    "image": "question_images/q_8806.png",
    "domain": "foundations_and_retaining_structures",
    "scenario_id": 88,
    "scenario_title": "Mat Foundation, Corner, Edge, and Interior Column Shear",
    "scenario_text": "A mat foundation supports three representative columns: corner column C1, edge column C2 along the mat perimeter, and interior column C3 near the mat center. All three carry similar factored column loads. Mat thickness gives an effective depth d = 24 in. The rigid method is used, so bearing pressure under the mat varies linearly, P/A plus or minus Mc/I."
  },
  {
    "id": 8901,
    "type": "point_and_click",
    "question": "Using the elastic pile group method, click the pile that carries the maximum reaction under the combined axial load and moment.",
    "image_description": "Plan view showing the pier as a rectangle above a row of four piles below it, labeled at -4.5 ft, -1.5 ft, +1.5 ft, and +4.5 ft from the centroid. Computed reactions are 120 kips, 140 kips, 160 kips, and 180 kips respectively, per P/n plus or minus Mc divided by the sum of d squared (sum = 45 ft-squared).",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.15,
        "y": 0.65,
        "w": 0.08,
        "h": 0.06
      },
      {
        "id": "z2",
        "x": 0.383,
        "y": 0.65,
        "w": 0.08,
        "h": 0.06
      },
      {
        "id": "z3",
        "x": 0.617,
        "y": 0.65,
        "w": 0.08,
        "h": 0.06
      },
      {
        "id": "z4",
        "x": 0.85,
        "y": 0.65,
        "w": 0.08,
        "h": 0.06
      }
    ],
    "correct": "z4",
    "explanation": "The correct answer is the pile at +4.5 ft: its reaction is 600/4 + (300 times 4.5)/45 = 150 + 30 = 180 kips, the largest of the four, since it sits farthest from the centroid on the side the moment adds to, exactly like the eccentric bolt group equation applied to a pile pattern.",
    "image": "question_images/q_8901.png",
    "domain": "foundations_and_retaining_structures",
    "scenario_id": 89,
    "scenario_title": "Linear Pile Cap Under a Boundary Pier, Elastic Pile Group Method",
    "scenario_text": "A boundary element pier, 16 in by 40 in, bears on a pile cap with four piles arranged in a single row along the pier's long axis, spaced 3 ft on center at distances of -4.5 ft, -1.5 ft, +1.5 ft, and +4.5 ft from the group centroid. The pier delivers a factored axial load P = 600 kips and a factored moment M = 300 kip-ft about the axis of the pile row. Cap effective depth d = 20 in."
  },
  {
    "id": 8902,
    "type": "point_and_click",
    "question": "Click the pile that carries the minimum reaction under the combined axial load and moment.",
    "image_description": "Same plan view of the four-pile row with computed reactions 120, 140, 160, and 180 kips at -4.5, -1.5, +1.5, and +4.5 ft respectively.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.15,
        "y": 0.65,
        "w": 0.08,
        "h": 0.06
      },
      {
        "id": "z2",
        "x": 0.383,
        "y": 0.65,
        "w": 0.08,
        "h": 0.06
      },
      {
        "id": "z3",
        "x": 0.617,
        "y": 0.65,
        "w": 0.08,
        "h": 0.06
      },
      {
        "id": "z4",
        "x": 0.85,
        "y": 0.65,
        "w": 0.08,
        "h": 0.06
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the pile at -4.5 ft: its reaction is 600/4 - (300 times 4.5)/45 = 150 - 30 = 120 kips, the smallest of the four, since it sits farthest from the centroid on the side the moment subtracts from.",
    "image": "question_images/q_8902.png",
    "domain": "foundations_and_retaining_structures",
    "scenario_id": 89,
    "scenario_title": "Linear Pile Cap Under a Boundary Pier, Elastic Pile Group Method",
    "scenario_text": "A boundary element pier, 16 in by 40 in, bears on a pile cap with four piles arranged in a single row along the pier's long axis, spaced 3 ft on center at distances of -4.5 ft, -1.5 ft, +1.5 ft, and +4.5 ft from the group centroid. The pier delivers a factored axial load P = 600 kips and a factored moment M = 300 kip-ft about the axis of the pile row. Cap effective depth d = 20 in."
  },
  {
    "id": 8903,
    "type": "point_and_click",
    "question": "Click the location of the two-way (punching) shear critical section, d/2 from the face of the pier.",
    "image_description": "Elevation/plan hybrid showing the pier rectangle with its face, then a critical perimeter line offset d/2 = 10 in from the pier face, then a one-way shear line further out at d = 20 in, and one of the piles marked separately for contrast.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.695,
        "y": 0.5,
        "w": 0.06,
        "h": 0.15
      },
      {
        "id": "z2",
        "x": 0.63,
        "y": 0.42,
        "w": 0.05,
        "h": 0.1
      },
      {
        "id": "z3",
        "x": 0.76,
        "y": 0.5,
        "w": 0.06,
        "h": 0.15
      },
      {
        "id": "z4",
        "x": 0.617,
        "y": 0.65,
        "w": 0.06,
        "h": 0.06
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the perimeter line offset d/2 = 10 in from the pier face: ACI 318-14 Chapter 13 places the two-way shear critical section at d/2 from the column or pier face for pile caps just as for spread footings, though the perimeter can be truncated where nearby piles change how shear actually transfers.",
    "image": "question_images/q_8903.png",
    "domain": "foundations_and_retaining_structures",
    "scenario_id": 89,
    "scenario_title": "Linear Pile Cap Under a Boundary Pier, Elastic Pile Group Method",
    "scenario_text": "A boundary element pier, 16 in by 40 in, bears on a pile cap with four piles arranged in a single row along the pier's long axis, spaced 3 ft on center at distances of -4.5 ft, -1.5 ft, +1.5 ft, and +4.5 ft from the group centroid. The pier delivers a factored axial load P = 600 kips and a factored moment M = 300 kip-ft about the axis of the pile row. Cap effective depth d = 20 in."
  },
  {
    "id": 8904,
    "type": "drag_and_drop_position",
    "question": "Drag each label onto the pile it describes, based on whether that pile's reaction is included in or excluded from the two-way shear demand at the d/2 perimeter.",
    "image_description": "Plan view of the four piles at -4.5, -1.5, +1.5, and +4.5 ft, with the two-way shear perimeter drawn extending to about 2.5 ft from the pier centerline on each side, showing the two inner piles falling entirely inside that perimeter and the two outer piles falling outside it.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Included: outer pile at +4.5 ft, outside the two-way shear perimeter"
      },
      {
        "id": "d2",
        "label": "Included: outer pile at -4.5 ft, outside the two-way shear perimeter"
      },
      {
        "id": "d3",
        "label": "Excluded: inner pile at +1.5 ft, falls inside the assumed critical shear perimeter"
      },
      {
        "id": "d4",
        "label": "Excluded: inner pile at -1.5 ft, falls inside the assumed critical shear perimeter"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.15,
        "y": 0.65,
        "w": 0.08,
        "h": 0.06
      },
      {
        "id": "z2",
        "x": 0.383,
        "y": 0.65,
        "w": 0.08,
        "h": 0.06
      },
      {
        "id": "z3",
        "x": 0.617,
        "y": 0.65,
        "w": 0.08,
        "h": 0.06
      },
      {
        "id": "z4",
        "x": 0.85,
        "y": 0.65,
        "w": 0.08,
        "h": 0.06
      }
    ],
    "correct": {
      "z1": "d2",
      "z2": "d4",
      "z3": "d3",
      "z4": "d1"
    },
    "explanation": "The correct pairing excludes the two inner piles at plus/minus 1.5 ft, since they fall entirely inside the assumed d/2 shear critical section, and includes the two outer piles at plus/minus 4.5 ft, since they sit outside the perimeter and transfer load across it. This exception is not something the reference handbook flags automatically.",
    "image": "question_images/q_8904.png",
    "domain": "foundations_and_retaining_structures",
    "scenario_id": 89,
    "scenario_title": "Linear Pile Cap Under a Boundary Pier, Elastic Pile Group Method",
    "scenario_text": "A boundary element pier, 16 in by 40 in, bears on a pile cap with four piles arranged in a single row along the pier's long axis, spaced 3 ft on center at distances of -4.5 ft, -1.5 ft, +1.5 ft, and +4.5 ft from the group centroid. The pier delivers a factored axial load P = 600 kips and a factored moment M = 300 kip-ft about the axis of the pile row. Cap effective depth d = 20 in."
  },
  {
    "id": 8905,
    "type": "drag_and_drop_order",
    "question": "Arrange the pile cap design steps in the correct order, from first performed to last.",
    "items": [
      {
        "id": "s1",
        "text": "Determine each pile's distance from the pile group centroid along the moment axis"
      },
      {
        "id": "s2",
        "text": "Compute the sum of (distance squared) for all piles in the group"
      },
      {
        "id": "s3",
        "text": "Calculate individual pile reactions using P/n plus or minus Mc divided by the sum of d squared"
      },
      {
        "id": "s4",
        "text": "Identify piles falling entirely inside the critical two-way shear perimeter and exclude their reaction from that check"
      },
      {
        "id": "s5",
        "text": "Design the cap for the governing two-way shear, one-way shear, and flexure using factored pile reactions"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4",
      "s5"
    ],
    "explanation": "The correct order is s1 through s5: pile geometry must be established before the elastic pile group equation can be applied, individual reactions must be known before deciding which piles fall inside the shear perimeter, and only then can the cap itself be sized for shear and flexure.",
    "domain": "foundations_and_retaining_structures",
    "scenario_id": 89,
    "scenario_title": "Linear Pile Cap Under a Boundary Pier, Elastic Pile Group Method",
    "scenario_text": "A boundary element pier, 16 in by 40 in, bears on a pile cap with four piles arranged in a single row along the pier's long axis, spaced 3 ft on center at distances of -4.5 ft, -1.5 ft, +1.5 ft, and +4.5 ft from the group centroid. The pier delivers a factored axial load P = 600 kips and a factored moment M = 300 kip-ft about the axis of the pile row. Cap effective depth d = 20 in."
  },
  {
    "id": 8906,
    "type": "drag_and_drop_position",
    "question": "Drag each critical section label onto the matching location on the pile cap elevation.",
    "image_description": "Elevation of the pile cap showing the pier face, a one-way shear reference line offset d = 20 in from the pier face across the full cap width, and the flexure reference line at the pier face itself.",
    "drag_items": [
      {
        "id": "d1",
        "label": "One-way shear critical section, d from pier face"
      },
      {
        "id": "d2",
        "label": "Flexural critical section, at pier face"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.76,
        "y": 0.35,
        "w": 0.06,
        "h": 0.1
      },
      {
        "id": "z2",
        "x": 0.63,
        "y": 0.35,
        "w": 0.05,
        "h": 0.1
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2"
    },
    "explanation": "The correct pairing is the one-way shear section at distance d from the pier face and the flexural section right at the pier face, matching ACI 318-14 Chapter 13's critical section locations for a pile cap designed like a wide beam or footing.",
    "image": "question_images/q_8906.png",
    "domain": "foundations_and_retaining_structures",
    "scenario_id": 89,
    "scenario_title": "Linear Pile Cap Under a Boundary Pier, Elastic Pile Group Method",
    "scenario_text": "A boundary element pier, 16 in by 40 in, bears on a pile cap with four piles arranged in a single row along the pier's long axis, spaced 3 ft on center at distances of -4.5 ft, -1.5 ft, +1.5 ft, and +4.5 ft from the group centroid. The pier delivers a factored axial load P = 600 kips and a factored moment M = 300 kip-ft about the axis of the pile row. Cap effective depth d = 20 in."
  },
  {
    "id": 9001,
    "type": "point_and_click",
    "question": "Click the location on the wall elevation where ACTIVE earth pressure develops.",
    "image_description": "Elevation cross section of the cantilever wall: stem vertical at center, toe extending left at the base, heel extending right at the base, backfill soil shown behind the wall on the right side from ground surface down to the footing, and a small zone in front of the toe on the left.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.65,
        "y": 0.4,
        "w": 0.25,
        "h": 0.3
      },
      {
        "id": "z2",
        "x": 0.25,
        "y": 0.75,
        "w": 0.15,
        "h": 0.08
      },
      {
        "id": "z3",
        "x": 0.45,
        "y": 0.4,
        "w": 0.04,
        "h": 0.3
      },
      {
        "id": "z4",
        "x": 0.65,
        "y": 0.1,
        "w": 0.2,
        "h": 0.03
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the backfill zone behind the wall: active pressure develops when the wall deflects slightly away from the retained soil, allowing it to expand and mobilize its full shear strength in a way that reduces pressure, which is the condition assumed for a free-standing cantilever wall.",
    "image": "question_images/q_9001.png",
    "domain": "foundations_and_retaining_structures",
    "scenario_id": 90,
    "scenario_title": "Cantilever Retaining Wall, Stability Checks and Water Table",
    "scenario_text": "A cantilever retaining wall retains 14 ft of sandy backfill, friction angle phi = 32 degrees, giving Ka = tan squared (45 - phi/2) = 0.307. Moist unit weight above the water table is 120 pcf. The water table sits 5 ft above the base of the footing, so buoyant unit weight (57.6 pcf) plus a separate hydrostatic pressure (62.4 pcf) apply below it. A uniform surcharge of 250 psf acts on the ground surface behind the wall. The footing is 8 ft wide."
  },
  {
    "id": 9002,
    "type": "point_and_click",
    "question": "Click the location on the wall elevation where PASSIVE pressure could develop, if the designer chooses to count on it.",
    "image_description": "Same wall elevation, highlighting the small soil zone in front of the toe near the base of the footing.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.65,
        "y": 0.4,
        "w": 0.25,
        "h": 0.3
      },
      {
        "id": "z2",
        "x": 0.25,
        "y": 0.75,
        "w": 0.15,
        "h": 0.08
      },
      {
        "id": "z3",
        "x": 0.45,
        "y": 0.4,
        "w": 0.04,
        "h": 0.3
      },
      {
        "id": "z4",
        "x": 0.65,
        "y": 0.1,
        "w": 0.2,
        "h": 0.03
      }
    ],
    "correct": "z2",
    "explanation": "The correct answer is the soil zone in front of the toe: passive pressure develops only where soil is compressed as the wall or footing moves into it, which for a cantilever wall is the limited zone in front of the toe, and it is only counted on if the problem allows crediting that resistance in the sliding check.",
    "image": "question_images/q_9002.png",
    "domain": "foundations_and_retaining_structures",
    "scenario_id": 90,
    "scenario_title": "Cantilever Retaining Wall, Stability Checks and Water Table",
    "scenario_text": "A cantilever retaining wall retains 14 ft of sandy backfill, friction angle phi = 32 degrees, giving Ka = tan squared (45 - phi/2) = 0.307. Moist unit weight above the water table is 120 pcf. The water table sits 5 ft above the base of the footing, so buoyant unit weight (57.6 pcf) plus a separate hydrostatic pressure (62.4 pcf) apply below it. A uniform surcharge of 250 psf acts on the ground surface behind the wall. The footing is 8 ft wide."
  },
  {
    "id": 9003,
    "type": "point_and_click",
    "question": "On the pure triangular active soil pressure diagram (excluding hydrostatic and surcharge effects), click the point of application of the resultant force.",
    "image_description": "Backfill zone behind the wall with four marked candidate heights above the footing base: H/3 above the base, H/2 above the base, 2H/3 above the base, and at the top of the wall, where H is the total 14 ft retained height.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.65,
        "y": 0.617,
        "w": 0.15,
        "h": 0.04
      },
      {
        "id": "z2",
        "x": 0.65,
        "y": 0.5,
        "w": 0.15,
        "h": 0.04
      },
      {
        "id": "z3",
        "x": 0.65,
        "y": 0.383,
        "w": 0.15,
        "h": 0.04
      },
      {
        "id": "z4",
        "x": 0.65,
        "y": 0.15,
        "w": 0.15,
        "h": 0.04
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is H/3 above the base: a triangular pressure distribution's resultant acts at one third of the height up from the base, exactly at the centroid of that triangle, which is a common point candidates misplace at H/2 by confusing it with a uniform load's centroid.",
    "image": "question_images/q_9003.png",
    "domain": "foundations_and_retaining_structures",
    "scenario_id": 90,
    "scenario_title": "Cantilever Retaining Wall, Stability Checks and Water Table",
    "scenario_text": "A cantilever retaining wall retains 14 ft of sandy backfill, friction angle phi = 32 degrees, giving Ka = tan squared (45 - phi/2) = 0.307. Moist unit weight above the water table is 120 pcf. The water table sits 5 ft above the base of the footing, so buoyant unit weight (57.6 pcf) plus a separate hydrostatic pressure (62.4 pcf) apply below it. A uniform surcharge of 250 psf acts on the ground surface behind the wall. The footing is 8 ft wide."
  },
  {
    "id": 9004,
    "type": "drag_and_drop_position",
    "question": "Drag each pressure component description onto the matching region of the combined lateral pressure diagram.",
    "image_description": "Full lateral pressure diagram behind the wall from ground surface to footing base, showing a thin uniform rectangular band at the top from the surcharge, a triangular region above the water table line, and a steeper triangular region below the water table line down to the base.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Triangular pressure above the water table, Ka times moist unit weight times z"
      },
      {
        "id": "d2",
        "label": "Steeper triangular increase below the water table using buoyant unit weight, plus a separate hydrostatic water pressure triangle"
      },
      {
        "id": "d3",
        "label": "Uniform rectangular pressure block from the surface surcharge, Ka times surcharge, constant with depth"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.75,
        "y": 0.37,
        "w": 0.12,
        "h": 0.15
      },
      {
        "id": "z2",
        "x": 0.75,
        "y": 0.725,
        "w": 0.12,
        "h": 0.15
      },
      {
        "id": "z3",
        "x": 0.75,
        "y": 0.17,
        "w": 0.12,
        "h": 0.04
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct pairing places moist-weight triangular pressure above the water table, buoyant-weight pressure plus a separate hydrostatic triangle below it, and the constant surcharge block across the full height. Forgetting the separate hydrostatic term below the water table is one of the most common ways to get an otherwise correct wall problem wrong.",
    "image": "question_images/q_9004.png",
    "domain": "foundations_and_retaining_structures",
    "scenario_id": 90,
    "scenario_title": "Cantilever Retaining Wall, Stability Checks and Water Table",
    "scenario_text": "A cantilever retaining wall retains 14 ft of sandy backfill, friction angle phi = 32 degrees, giving Ka = tan squared (45 - phi/2) = 0.307. Moist unit weight above the water table is 120 pcf. The water table sits 5 ft above the base of the footing, so buoyant unit weight (57.6 pcf) plus a separate hydrostatic pressure (62.4 pcf) apply below it. A uniform surcharge of 250 psf acts on the ground surface behind the wall. The footing is 8 ft wide."
  },
  {
    "id": 9005,
    "type": "drag_and_drop_order",
    "question": "Arrange the retaining wall stability and design steps in the correct order, from first performed to last.",
    "items": [
      {
        "id": "s1",
        "text": "Compute the lateral earth pressure resultant force and its point of application using service-level (unfactored) loads"
      },
      {
        "id": "s2",
        "text": "Check overturning stability: resisting moment about the toe divided by overturning moment must be at least 1.5"
      },
      {
        "id": "s3",
        "text": "Check sliding stability: resisting friction force, plus passive resistance if permitted, divided by driving horizontal force must be at least 1.5"
      },
      {
        "id": "s4",
        "text": "Check bearing pressure using P/A plus or minus Mc/I and confirm eccentricity is within B/6 of the footing centerline"
      },
      {
        "id": "s5",
        "text": "If designing the concrete stem and footing, convert to factored loads for shear and flexural design per ACI 318-14"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4",
      "s5"
    ],
    "explanation": "The correct order is s1 through s5: the lateral force must be known before any stability ratio can be computed, overturning and sliding are the two geotechnical stability checks performed at service level, bearing pressure follows using the same service-level forces, and only the final concrete design step switches to factored loads.",
    "domain": "foundations_and_retaining_structures",
    "scenario_id": 90,
    "scenario_title": "Cantilever Retaining Wall, Stability Checks and Water Table",
    "scenario_text": "A cantilever retaining wall retains 14 ft of sandy backfill, friction angle phi = 32 degrees, giving Ka = tan squared (45 - phi/2) = 0.307. Moist unit weight above the water table is 120 pcf. The water table sits 5 ft above the base of the footing, so buoyant unit weight (57.6 pcf) plus a separate hydrostatic pressure (62.4 pcf) apply below it. A uniform surcharge of 250 psf acts on the ground surface behind the wall. The footing is 8 ft wide."
  },
  {
    "id": 9006,
    "type": "drag_and_drop_position",
    "question": "Drag each eccentricity condition onto the matching point on the footing eccentricity number line, where B = 8 ft and B/6 = 1.33 ft.",
    "image_description": "Number line representing the 8 ft footing width centered at zero, with the middle third boundary marked at plus and minus 1.33 ft, and two candidate eccentricity points marked further out on the line.",
    "drag_items": [
      {
        "id": "d1",
        "label": "e = 1.0 ft, within the middle third (B/6 = 1.33 ft), trapezoidal pressure, both edges positive"
      },
      {
        "id": "d2",
        "label": "e = 1.6 ft, outside the middle third (B/6 = 1.33 ft), triangular pressure over a reduced effective width"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.55,
        "y": 0.5,
        "w": 0.08,
        "h": 0.1
      },
      {
        "id": "z2",
        "x": 0.75,
        "y": 0.5,
        "w": 0.08,
        "h": 0.1
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2"
    },
    "explanation": "The correct pairing places e = 1.0 ft inside the middle third since it is less than B/6 = 1.33 ft, giving a full trapezoidal pressure distribution with both edges positive, while e = 1.6 ft exceeds B/6 and produces a triangular distribution over a reduced effective width because soil cannot resist a negative (tension) pressure.",
    "image": "question_images/q_9006.png",
    "domain": "foundations_and_retaining_structures",
    "scenario_id": 90,
    "scenario_title": "Cantilever Retaining Wall, Stability Checks and Water Table",
    "scenario_text": "A cantilever retaining wall retains 14 ft of sandy backfill, friction angle phi = 32 degrees, giving Ka = tan squared (45 - phi/2) = 0.307. Moist unit weight above the water table is 120 pcf. The water table sits 5 ft above the base of the footing, so buoyant unit weight (57.6 pcf) plus a separate hydrostatic pressure (62.4 pcf) apply below it. A uniform surcharge of 250 psf acts on the ground surface behind the wall. The footing is 8 ft wide."
  },
  {
    "id": 9101,
    "type": "point_and_click",
    "question": "Click the single fully interior column on the framing plan, the one whose tributary area is bounded by adjacent framed spans on all four sides.",
    "image_description": "A 3x3 column grid plan. Vertical gridlines 1, 2, 3 at x = 0.25, 0.5, 0.75; horizontal gridlines A, B, C at y = 0.75, 0.5, 0.25 (A at top). Columns are drawn as filled dots at each of the 9 intersections, each labeled with its grid designation (A1, A2, A3, B1, B2, B3, C1, C2, C3). Dimension strings along the top show 28 ft and 32 ft bay widths; dimension strings along the left show 30 ft and 26 ft bay widths.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.47,
        "y": 0.47,
        "w": 0.08,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.47,
        "y": 0.72,
        "w": 0.08,
        "h": 0.08
      },
      {
        "id": "z3",
        "x": 0.22,
        "y": 0.47,
        "w": 0.08,
        "h": 0.08
      },
      {
        "id": "z4",
        "x": 0.22,
        "y": 0.22,
        "w": 0.08,
        "h": 0.08
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is column B2: it is the only column with a framed span on all four sides, so its tributary area per ASCE 7-16 Section 4.7 uses the full average of the adjacent bays in both directions and KLL = 4. A2, B1, and A1 each have at least one unframed side and are edge or corner columns instead.",
    "image": "question_images/q_9101.png",
    "domain": "loads_lateral_earth_pressure_and_analysis_methods",
    "scenario_id": 91,
    "scenario_title": "Office Floor Column Grid Tributary Area Takedown",
    "scenario_text": "A three-bay by three-bay office building framing plan has column gridlines 1, 2, and 3 spaced at 28 ft and 32 ft in the X direction, and gridlines A, B, and C spaced at 30 ft and 26 ft in the Y direction. All columns support one office floor with Lo = 50 psf per ASCE 7-16 Table 4.3-1. KLL = 4 for interior columns and for edge and corner columns alike when there is no cantilever slab condition -- only the tributary area differs by position, not the live load element factor. Column B2 is the only fully interior column. Columns A1, A3, C1, and C3 are corner columns, and A2, B1, B3, and C2 are edge columns."
  },
  {
    "id": 9102,
    "type": "point_and_click",
    "question": "Corner columns take tributary area equal to only half of each adjacent bay in both directions. Click the corner column with the SMALLEST tributary area on this plan (half of the 28 ft bay by half of the 26 ft bay).",
    "image_description": "Same 3x3 column grid plan as the prior item, all 9 columns labeled and visible with the 28/32 ft and 30/26 ft bay dimension strings shown.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.22,
        "y": 0.22,
        "w": 0.08,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.22,
        "y": 0.72,
        "w": 0.08,
        "h": 0.08
      },
      {
        "id": "z3",
        "x": 0.72,
        "y": 0.72,
        "w": 0.08,
        "h": 0.08
      },
      {
        "id": "z4",
        "x": 0.72,
        "y": 0.22,
        "w": 0.08,
        "h": 0.08
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is column C1: its tributary area is half of the 28 ft bay (14 ft) times half of the 26 ft bay (13 ft), or 182 sf, the smallest of the four corner conditions. A1 uses the 28 ft and 30 ft half-bays, A3 the 32 ft and 30 ft half-bays, and C3 the 32 ft and 26 ft half-bays, all larger than C1.",
    "image": "question_images/q_9102.png",
    "domain": "loads_lateral_earth_pressure_and_analysis_methods",
    "scenario_id": 91,
    "scenario_title": "Office Floor Column Grid Tributary Area Takedown",
    "scenario_text": "A three-bay by three-bay office building framing plan has column gridlines 1, 2, and 3 spaced at 28 ft and 32 ft in the X direction, and gridlines A, B, and C spaced at 30 ft and 26 ft in the Y direction. All columns support one office floor with Lo = 50 psf per ASCE 7-16 Table 4.3-1. KLL = 4 for interior columns and for edge and corner columns alike when there is no cantilever slab condition -- only the tributary area differs by position, not the live load element factor. Column B2 is the only fully interior column. Columns A1, A3, C1, and C3 are corner columns, and A2, B1, B3, and C2 are edge columns."
  },
  {
    "id": 9103,
    "type": "point_and_click",
    "question": "Click the edge column located along gridline 1 (the left edge of the building), which carries the SAME KLL = 4 as the interior column but only half the tributary width of the adjacent bay in the X direction.",
    "image_description": "Same 3x3 column grid plan as the prior items with all 9 labeled columns and bay dimensions visible.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.22,
        "y": 0.47,
        "w": 0.08,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.47,
        "y": 0.72,
        "w": 0.08,
        "h": 0.08
      },
      {
        "id": "z3",
        "x": 0.72,
        "y": 0.47,
        "w": 0.08,
        "h": 0.08
      },
      {
        "id": "z4",
        "x": 0.47,
        "y": 0.22,
        "w": 0.08,
        "h": 0.08
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is column B1: it sits on gridline 1 at the building edge, so it only picks up half of the 28 ft bay in the X direction while spanning the full average of the 30 ft and 26 ft bays in the Y direction. Per ASCE 7-16 Table 4.7-1, edge columns without a cantilever slab use the same KLL = 4 as interior columns -- the tributary area is smaller, but the live load element factor is not. B3 and C2 are edge columns on different gridlines.",
    "image": "question_images/q_9103.png",
    "domain": "loads_lateral_earth_pressure_and_analysis_methods",
    "scenario_id": 91,
    "scenario_title": "Office Floor Column Grid Tributary Area Takedown",
    "scenario_text": "A three-bay by three-bay office building framing plan has column gridlines 1, 2, and 3 spaced at 28 ft and 32 ft in the X direction, and gridlines A, B, and C spaced at 30 ft and 26 ft in the Y direction. All columns support one office floor with Lo = 50 psf per ASCE 7-16 Table 4.3-1. KLL = 4 for interior columns and for edge and corner columns alike when there is no cantilever slab condition -- only the tributary area differs by position, not the live load element factor. Column B2 is the only fully interior column. Columns A1, A3, C1, and C3 are corner columns, and A2, B1, B3, and C2 are edge columns."
  },
  {
    "id": 9104,
    "type": "drag_and_drop_position",
    "question": "Drag each KLL value to the column type it applies to per ASCE 7-16 Section 4.7 (Table 4.7-1).",
    "image_description": "A vertical stack of three labeled boxes on the left half of the image: top box reads 'Interior column,' middle box reads 'Interior beam,' bottom box reads 'One-way slab.' Three empty drop targets sit to the right of each box at the same height.",
    "drag_items": [
      {
        "id": "d1",
        "label": "KLL = 4"
      },
      {
        "id": "d2",
        "label": "KLL = 2"
      },
      {
        "id": "d3",
        "label": "KLL = 1"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.75,
        "y": 0.75,
        "w": 0.15,
        "h": 0.1
      },
      {
        "id": "z2",
        "x": 0.75,
        "y": 0.5,
        "w": 0.15,
        "h": 0.1
      },
      {
        "id": "z3",
        "x": 0.75,
        "y": 0.25,
        "w": 0.15,
        "h": 0.1
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct answer matches KLL = 4 to interior columns, KLL = 2 to interior beams, and KLL = 1 to one-way slabs, per ASCE 7-16 Table 4.7-1. Edge and corner columns without a cantilever slab condition also use KLL = 4, the same as interior columns -- column position alone does not change this factor, only certain cantilever-slab conditions do. These values approximate the ratio of a member's true influence area to its tributary area and directly scale the KLL times AT term in the live load reduction equation of ASCE 7-16 Section 4.7.",
    "image": "question_images/q_9104.png",
    "domain": "loads_lateral_earth_pressure_and_analysis_methods",
    "scenario_id": 91,
    "scenario_title": "Office Floor Column Grid Tributary Area Takedown",
    "scenario_text": "A three-bay by three-bay office building framing plan has column gridlines 1, 2, and 3 spaced at 28 ft and 32 ft in the X direction, and gridlines A, B, and C spaced at 30 ft and 26 ft in the Y direction. All columns support one office floor with Lo = 50 psf per ASCE 7-16 Table 4.3-1. KLL = 4 for interior columns and for edge and corner columns alike when there is no cantilever slab condition -- only the tributary area differs by position, not the live load element factor. Column B2 is the only fully interior column. Columns A1, A3, C1, and C3 are corner columns, and A2, B1, B3, and C2 are edge columns."
  },
  {
    "id": 9105,
    "type": "drag_and_drop_order",
    "question": "Arrange the steps to compute the reduced live load for column B2 in the correct order.",
    "items": [
      {
        "id": "s1",
        "text": "Determine Lo = 50 psf and AT = 840 sf (30 ft average width by 28 ft average depth) from the framing plan"
      },
      {
        "id": "s2",
        "text": "Compute KLL times AT = 4 x 840 = 3360 sf and confirm it exceeds the 400 sf minimum for reduction to apply"
      },
      {
        "id": "s3",
        "text": "Calculate L = Lo(0.25 + 15/sqrt(KLL times AT)) using the 3360 sf value"
      },
      {
        "id": "s4",
        "text": "Check that L is not less than 0.4Lo for one floor (or 0.5Lo for two or more floors) and adopt the governing value"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4"
    ],
    "explanation": "The correct order is s1, s2, s3, s4: first establish Lo and AT from the plan, then verify the 400 sf threshold in ASCE 7-16 Section 4.7 is met before reducing, then apply the reduction equation, and finally check the result against the 0.4 or 0.5 floor multiplier before adopting the design live load.",
    "domain": "loads_lateral_earth_pressure_and_analysis_methods",
    "scenario_id": 91,
    "scenario_title": "Office Floor Column Grid Tributary Area Takedown",
    "scenario_text": "A three-bay by three-bay office building framing plan has column gridlines 1, 2, and 3 spaced at 28 ft and 32 ft in the X direction, and gridlines A, B, and C spaced at 30 ft and 26 ft in the Y direction. All columns support one office floor with Lo = 50 psf per ASCE 7-16 Table 4.3-1. KLL = 4 for interior columns and for edge and corner columns alike when there is no cantilever slab condition -- only the tributary area differs by position, not the live load element factor. Column B2 is the only fully interior column. Columns A1, A3, C1, and C3 are corner columns, and A2, B1, B3, and C2 are edge columns."
  },
  {
    "id": 9106,
    "type": "drag_and_drop_position",
    "question": "Drag each column label to the tributary area classification it represents on this framing plan.",
    "image_description": "A legend diagram with three horizontally arranged boxes: left box labeled 'Interior (all four sides framed),' middle box labeled 'Corner (two half-spans),' right box labeled 'Edge (one half-span, one full averaged span).' Three column labels sit above the boxes as draggable tokens.",
    "drag_items": [
      {
        "id": "d1",
        "label": "B2"
      },
      {
        "id": "d2",
        "label": "A1"
      },
      {
        "id": "d3",
        "label": "C2"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.25,
        "y": 0.3,
        "w": 0.15,
        "h": 0.15
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.3,
        "w": 0.15,
        "h": 0.15
      },
      {
        "id": "z3",
        "x": 0.75,
        "y": 0.3,
        "w": 0.15,
        "h": 0.15
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct answer places B2 as interior, A1 as corner, and C2 as edge. B2 has framing on all four sides, A1 has framing on only two adjacent sides and takes half of each adjacent bay, and C2 has framing on three sides with a full averaged span in one direction and a half-span in the other.",
    "image": "question_images/q_9106.png",
    "domain": "loads_lateral_earth_pressure_and_analysis_methods",
    "scenario_id": 91,
    "scenario_title": "Office Floor Column Grid Tributary Area Takedown",
    "scenario_text": "A three-bay by three-bay office building framing plan has column gridlines 1, 2, and 3 spaced at 28 ft and 32 ft in the X direction, and gridlines A, B, and C spaced at 30 ft and 26 ft in the Y direction. All columns support one office floor with Lo = 50 psf per ASCE 7-16 Table 4.3-1. KLL = 4 for interior columns and for edge and corner columns alike when there is no cantilever slab condition -- only the tributary area differs by position, not the live load element factor. Column B2 is the only fully interior column. Columns A1, A3, C1, and C3 are corner columns, and A2, B1, B3, and C2 are edge columns."
  },
  {
    "id": 9201,
    "type": "point_and_click",
    "question": "Click the location on the roof cross-section where the PEAK snow drift surcharge pressure occurs.",
    "image_description": "A roof cross-section elevation. A lower roof surface runs from left to right at a low elevation; a vertical wall step rises 8 ft on the right side up to a higher roof. A triangular drift wedge is drawn hugging the base of the step, tallest right at the wall and tapering down to the left over a measured width, sitting on top of a shallow uniform balanced snow layer that extends across the whole lower roof.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.78,
        "y": 0.55,
        "w": 0.1,
        "h": 0.12
      },
      {
        "id": "z2",
        "x": 0.55,
        "y": 0.68,
        "w": 0.1,
        "h": 0.1
      },
      {
        "id": "z3",
        "x": 0.2,
        "y": 0.78,
        "w": 0.1,
        "h": 0.08
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the location immediately adjacent to the vertical step: ASCE 7-16 Section 7.7 places the maximum drift surcharge right at the wall, where the balanced pressure pf plus hd times gamma both act together, then the load tapers linearly to zero across the drift width moving away from the step.",
    "image": "question_images/q_9201.png",
    "domain": "loads_lateral_earth_pressure_and_analysis_methods",
    "scenario_id": 92,
    "scenario_title": "Roof Step Snow Drift at an Adjacent Higher Roof",
    "scenario_text": "A lower roof sits adjacent to a higher roof section with an 8 ft vertical step between them. Ground snow load pg = 30 psf, with Ce = 1.0, Ct = 1.0, and Is = 1.0. The flat roof snow load is pf = 0.7 x Ce x Ct x Is x pg = 21 psf. Snow density gamma = 0.13pg + 14 = 17.9 pcf. The upper roof length contributing to the drift is 100 ft."
  },
  {
    "id": 9202,
    "type": "point_and_click",
    "question": "Click the region of the roof cross-section representing the BALANCED (non-drift) snow load, unaffected by the step.",
    "image_description": "The same roof cross-section as the prior item: lower roof with a triangular drift wedge tallest at the step on the right, tapering to zero over a measured width, sitting on a shallow uniform layer that continues across the full lower roof including the far left area beyond the drift's influence.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.2,
        "y": 0.78,
        "w": 0.1,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.78,
        "y": 0.55,
        "w": 0.1,
        "h": 0.12
      },
      {
        "id": "z3",
        "x": 0.55,
        "y": 0.68,
        "w": 0.1,
        "h": 0.1
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the far left region beyond the drift width: it carries only the uniform balanced load pf = 21 psf with no added surcharge, since it lies outside the geometric reach of the drift generated by the 8 ft step and the 100 ft upper roof length.",
    "image": "question_images/q_9202.png",
    "domain": "loads_lateral_earth_pressure_and_analysis_methods",
    "scenario_id": 92,
    "scenario_title": "Roof Step Snow Drift at an Adjacent Higher Roof",
    "scenario_text": "A lower roof sits adjacent to a higher roof section with an 8 ft vertical step between them. Ground snow load pg = 30 psf, with Ce = 1.0, Ct = 1.0, and Is = 1.0. The flat roof snow load is pf = 0.7 x Ce x Ct x Is x pg = 21 psf. Snow density gamma = 0.13pg + 14 = 17.9 pcf. The upper roof length contributing to the drift is 100 ft."
  },
  {
    "id": 9203,
    "type": "point_and_click",
    "question": "The balanced snow depth hb = pf/gamma = 21/17.9 = 1.17 ft, and hc = 8 minus 1.17 = 6.83 ft, giving hc/hb = 5.84. Click the box stating the correct conclusion about whether drift must be considered.",
    "image_description": "Three text boxes arranged vertically: top box reads 'Drift must be considered because hc/hb exceeds 0.2,' middle box reads 'Drift is not required because hc/hb is below 0.2,' bottom box reads 'Drift only applies to sloped roofs, not flat roofs.'",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.5,
        "y": 0.8,
        "w": 0.5,
        "h": 0.12
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.5,
        "w": 0.5,
        "h": 0.12
      },
      {
        "id": "z3",
        "x": 0.5,
        "y": 0.2,
        "w": 0.5,
        "h": 0.12
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the top box: ASCE 7-16 Section 7.7.1 requires drift to be considered whenever hc/hb exceeds 0.2, and 5.84 is far above that threshold, so the leeward drift load must be added to the balanced load on this lower roof.",
    "image": "question_images/q_9203.png",
    "domain": "loads_lateral_earth_pressure_and_analysis_methods",
    "scenario_id": 92,
    "scenario_title": "Roof Step Snow Drift at an Adjacent Higher Roof",
    "scenario_text": "A lower roof sits adjacent to a higher roof section with an 8 ft vertical step between them. Ground snow load pg = 30 psf, with Ce = 1.0, Ct = 1.0, and Is = 1.0. The flat roof snow load is pf = 0.7 x Ce x Ct x Is x pg = 21 psf. Snow density gamma = 0.13pg + 14 = 17.9 pcf. The upper roof length contributing to the drift is 100 ft."
  },
  {
    "id": 9204,
    "type": "drag_and_drop_position",
    "question": "Drag each computed pressure value to its correct location on the roof cross-section.",
    "image_description": "The roof cross-section: lower roof extending left with a shallow uniform layer, a triangular drift wedge tallest at the step on the right tapering left over a measured width w, and the vertical wall step on the far right.",
    "drag_items": [
      {
        "id": "d1",
        "label": "pf = 21 psf (balanced load, flat region)"
      },
      {
        "id": "d2",
        "label": "pf + hd(gamma) = about 84 psf (peak at the step)"
      },
      {
        "id": "d3",
        "label": "w = 4hd = about 14 ft (taper width)"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.2,
        "y": 0.78,
        "w": 0.12,
        "h": 0.1
      },
      {
        "id": "z2",
        "x": 0.8,
        "y": 0.55,
        "w": 0.12,
        "h": 0.1
      },
      {
        "id": "z3",
        "x": 0.55,
        "y": 0.68,
        "w": 0.15,
        "h": 0.08
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct answer places 21 psf on the flat balanced region, 84 psf at the peak against the step, and the 14 ft taper width spanning the sloped face of the drift wedge. The peak equals the balanced pf plus the drift surcharge hd times gamma, and it tapers linearly to pf over w = 4hd per ASCE 7-16 Section 7.7, Figure 7-9.",
    "image": "question_images/q_9204.png",
    "domain": "loads_lateral_earth_pressure_and_analysis_methods",
    "scenario_id": 92,
    "scenario_title": "Roof Step Snow Drift at an Adjacent Higher Roof",
    "scenario_text": "A lower roof sits adjacent to a higher roof section with an 8 ft vertical step between them. Ground snow load pg = 30 psf, with Ce = 1.0, Ct = 1.0, and Is = 1.0. The flat roof snow load is pf = 0.7 x Ce x Ct x Is x pg = 21 psf. Snow density gamma = 0.13pg + 14 = 17.9 pcf. The upper roof length contributing to the drift is 100 ft."
  },
  {
    "id": 9205,
    "type": "drag_and_drop_order",
    "question": "Arrange the snow drift calculation steps for this roof step in the correct order.",
    "items": [
      {
        "id": "s1",
        "text": "Compute pf = 0.7 x Ce x Ct x Is x pg = 21 psf"
      },
      {
        "id": "s2",
        "text": "Compute snow density gamma = 0.13pg + 14 = 17.9 pcf and balanced depth hb = pf/gamma = 1.17 ft"
      },
      {
        "id": "s3",
        "text": "Compute hc = roof step height minus hb = 8 minus 1.17 = 6.83 ft and confirm hc/hb exceeds 0.2"
      },
      {
        "id": "s4",
        "text": "Determine hd from the 100 ft upper roof length and compare it against hc to check for truncation"
      },
      {
        "id": "s5",
        "text": "Compute the peak surcharge as hd times gamma added to pf, tapering to zero over width w = 4hd"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4",
      "s5"
    ],
    "explanation": "The correct order is s1 through s5: the flat roof load must be found first since it feeds gamma and hb, then hc and the 0.2 screening ratio, then hd from the upper roof fetch length with a truncation check against hc, and finally the surcharge magnitude and taper width per ASCE 7-16 Section 7.7.",
    "domain": "loads_lateral_earth_pressure_and_analysis_methods",
    "scenario_id": 92,
    "scenario_title": "Roof Step Snow Drift at an Adjacent Higher Roof",
    "scenario_text": "A lower roof sits adjacent to a higher roof section with an 8 ft vertical step between them. Ground snow load pg = 30 psf, with Ce = 1.0, Ct = 1.0, and Is = 1.0. The flat roof snow load is pf = 0.7 x Ce x Ct x Is x pg = 21 psf. Snow density gamma = 0.13pg + 14 = 17.9 pcf. The upper roof length contributing to the drift is 100 ft."
  },
  {
    "id": 9206,
    "type": "drag_and_drop_position",
    "question": "Drag each term to its correct definition.",
    "image_description": "Three definition boxes arranged vertically on the right: 'Balanced snow depth on the lower roof,' 'Clear height difference between roofs after balanced snow accumulates,' and 'Drift height read from the chart based on upper roof length.' Three term labels sit as draggable tokens on the left.",
    "drag_items": [
      {
        "id": "d1",
        "label": "hb"
      },
      {
        "id": "d2",
        "label": "hc"
      },
      {
        "id": "d3",
        "label": "hd"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.6,
        "y": 0.72,
        "w": 0.3,
        "h": 0.12
      },
      {
        "id": "z2",
        "x": 0.6,
        "y": 0.44,
        "w": 0.3,
        "h": 0.12
      },
      {
        "id": "z3",
        "x": 0.6,
        "y": 0.16,
        "w": 0.3,
        "h": 0.12
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct answer matches hb to the balanced snow depth, hc to the clear height remaining after balanced snow sits on the lower roof, and hd to the drift height obtained from the ASCE 7-16 Figure 7.7-1 chart based on the upper roof's contributing length and the ground snow load.",
    "image": "question_images/q_9206.png",
    "domain": "loads_lateral_earth_pressure_and_analysis_methods",
    "scenario_id": 92,
    "scenario_title": "Roof Step Snow Drift at an Adjacent Higher Roof",
    "scenario_text": "A lower roof sits adjacent to a higher roof section with an 8 ft vertical step between them. Ground snow load pg = 30 psf, with Ce = 1.0, Ct = 1.0, and Is = 1.0. The flat roof snow load is pf = 0.7 x Ce x Ct x Is x pg = 21 psf. Snow density gamma = 0.13pg + 14 = 17.9 pcf. The upper roof length contributing to the drift is 100 ft."
  },
  {
    "id": 9301,
    "type": "point_and_click",
    "question": "Among the five combinations shown, click the one that produces the MAXIMUM DOWNWARD gravity force on this beam.",
    "image_description": "Five stacked text boxes listing load combinations: '1.4D,' '1.2D + 1.6L + 0.5Lr,' '1.2D + 1.6Lr + 0.5W,' '1.2D + 1.0W + 1.0L + 0.5Lr,' and '0.9D + 1.0W.'",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.22499999999999998,
        "y": 0.85,
        "w": 0.55,
        "h": 0.1
      },
      {
        "id": "z2",
        "x": 0.22499999999999998,
        "y": 0.6699999999999999,
        "w": 0.55,
        "h": 0.1
      },
      {
        "id": "z3",
        "x": 0.22499999999999998,
        "y": 0.49000000000000005,
        "w": 0.55,
        "h": 0.1
      },
      {
        "id": "z4",
        "x": 0.22499999999999998,
        "y": 0.31,
        "w": 0.55,
        "h": 0.1
      },
      {
        "id": "z5",
        "x": 0.22499999999999998,
        "y": 0.13,
        "w": 0.55,
        "h": 0.1
      }
    ],
    "correct": "z2",
    "explanation": "The correct answer is 1.2D + 1.6L + 0.5Lr: with no floor live load L on this roof beam, this reduces to 1.2(150) + 0.5(70) = 215 plf, the largest of the five combinations shown here, exceeding 1.4D = 210 plf and the wind-inclusive combinations. Note that ASCE 7-16's own basic combination 3, 1.2D + 1.6Lr + (L or 0.5W), can also be evaluated using its L branch instead of its 0.5W branch when L = 0, which would give 1.2D + 1.6Lr = 292 plf, an even larger gravity demand than any combination shown here. Always check every applicable branch of a combination on the real exam, not just the version listed in a given problem set.",
    "image": "question_images/q_9301.png",
    "domain": "loads_lateral_earth_pressure_and_analysis_methods",
    "scenario_id": 93,
    "scenario_title": "Governing Load Combination for a Roof Beam Under Wind Uplift",
    "scenario_text": "A roof beam carries dead load D = 150 plf, roof live load Lr = 70 plf, and a strength-level net wind uplift W = -220 plf (negative indicating an upward force). Ground snow does not govern for this roof and there is no seismic demand on this member. Using the ASCE 7-16 Chapter 2 LRFD basic combinations, the beam must be checked for both maximum downward gravity force and net uplift."
  },
  {
    "id": 9302,
    "type": "point_and_click",
    "question": "Click the load combination that governs the beam's connection and anchorage design for NET UPLIFT.",
    "image_description": "The same five stacked load combination text boxes as the prior item.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.22499999999999998,
        "y": 0.85,
        "w": 0.55,
        "h": 0.1
      },
      {
        "id": "z2",
        "x": 0.22499999999999998,
        "y": 0.6699999999999999,
        "w": 0.55,
        "h": 0.1
      },
      {
        "id": "z3",
        "x": 0.22499999999999998,
        "y": 0.49000000000000005,
        "w": 0.55,
        "h": 0.1
      },
      {
        "id": "z4",
        "x": 0.22499999999999998,
        "y": 0.31,
        "w": 0.55,
        "h": 0.1
      },
      {
        "id": "z5",
        "x": 0.22499999999999998,
        "y": 0.13,
        "w": 0.55,
        "h": 0.1
      }
    ],
    "correct": "z5",
    "explanation": "The correct answer is 0.9D + 1.0W: this equals 0.9(150) minus 220 = -85 plf, a net uplift, because it minimizes the stabilizing dead load while keeping the full strength-level wind demand, per ASCE 7-16 Section 2.3.3.",
    "image": "question_images/q_9302.png",
    "domain": "loads_lateral_earth_pressure_and_analysis_methods",
    "scenario_id": 93,
    "scenario_title": "Governing Load Combination for a Roof Beam Under Wind Uplift",
    "scenario_text": "A roof beam carries dead load D = 150 plf, roof live load Lr = 70 plf, and a strength-level net wind uplift W = -220 plf (negative indicating an upward force). Ground snow does not govern for this roof and there is no seismic demand on this member. Using the ASCE 7-16 Chapter 2 LRFD basic combinations, the beam must be checked for both maximum downward gravity force and net uplift."
  },
  {
    "id": 9303,
    "type": "point_and_click",
    "question": "Click the correct wind load factor used in ASCE 7-16 LRFD combinations, given that the wind pressures from Chapters 26 through 31 are already provided at the strength level.",
    "image_description": "Three number boxes arranged side by side: '1.6,' '1.0,' and '0.6.'",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.2,
        "y": 0.5,
        "w": 0.15,
        "h": 0.15
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.5,
        "w": 0.15,
        "h": 0.15
      },
      {
        "id": "z3",
        "x": 0.8,
        "y": 0.5,
        "w": 0.15,
        "h": 0.15
      }
    ],
    "correct": "z2",
    "explanation": "The correct answer is 1.0: since ASCE 7-10, wind pressures generated from Chapters 26 through 31 are already at the strength (ultimate) level, so the LRFD load factor is 1.0 rather than the 1.6 factor used in older codes on service-level wind pressures.",
    "image": "question_images/q_9303.png",
    "domain": "loads_lateral_earth_pressure_and_analysis_methods",
    "scenario_id": 93,
    "scenario_title": "Governing Load Combination for a Roof Beam Under Wind Uplift",
    "scenario_text": "A roof beam carries dead load D = 150 plf, roof live load Lr = 70 plf, and a strength-level net wind uplift W = -220 plf (negative indicating an upward force). Ground snow does not govern for this roof and there is no seismic demand on this member. Using the ASCE 7-16 Chapter 2 LRFD basic combinations, the beam must be checked for both maximum downward gravity force and net uplift."
  },
  {
    "id": 9304,
    "type": "drag_and_drop_position",
    "question": "Drag each computed force value to the load combination that produces it.",
    "image_description": "Three labeled boxes: '1.2D + 1.6L + 0.5Lr,' '1.2D + 1.6Lr + 0.5W,' and '0.9D + 1.0W,' each with an empty drop target beside it.",
    "drag_items": [
      {
        "id": "d1",
        "label": "215 plf downward"
      },
      {
        "id": "d2",
        "label": "182 plf downward"
      },
      {
        "id": "d3",
        "label": "-85 plf (net uplift)"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.8,
        "y": 0.75,
        "w": 0.15,
        "h": 0.1
      },
      {
        "id": "z2",
        "x": 0.8,
        "y": 0.5,
        "w": 0.15,
        "h": 0.1
      },
      {
        "id": "z3",
        "x": 0.8,
        "y": 0.25,
        "w": 0.15,
        "h": 0.1
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct answer matches 215 plf to 1.2D + 1.6L + 0.5Lr (1.2(150) + 0.5(70)), 182 plf to 1.2D + 1.6Lr + 0.5W (1.2(150) + 1.6(70) + 0.5(-220)), and -85 plf to 0.9D + 1.0W (0.9(150) - 220), each following the ASCE 7-16 Section 2.3.1 basic combinations.",
    "image": "question_images/q_9304.png",
    "domain": "loads_lateral_earth_pressure_and_analysis_methods",
    "scenario_id": 93,
    "scenario_title": "Governing Load Combination for a Roof Beam Under Wind Uplift",
    "scenario_text": "A roof beam carries dead load D = 150 plf, roof live load Lr = 70 plf, and a strength-level net wind uplift W = -220 plf (negative indicating an upward force). Ground snow does not govern for this roof and there is no seismic demand on this member. Using the ASCE 7-16 Chapter 2 LRFD basic combinations, the beam must be checked for both maximum downward gravity force and net uplift."
  },
  {
    "id": 9305,
    "type": "drag_and_drop_order",
    "question": "Arrange the combinations in order from the largest downward force to the largest net uplift (most negative).",
    "items": [
      {
        "id": "s1",
        "text": "1.2D + 1.6L + 0.5Lr = 215 plf"
      },
      {
        "id": "s2",
        "text": "1.4D = 210 plf"
      },
      {
        "id": "s3",
        "text": "1.2D + 1.6Lr + 0.5W = 182 plf"
      },
      {
        "id": "s4",
        "text": "1.2D + 1.0W + 1.0L + 0.5Lr = -5 plf"
      },
      {
        "id": "s5",
        "text": "0.9D + 1.0W = -85 plf"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4",
      "s5"
    ],
    "explanation": "The correct order is s1 through s5, from 215 plf down to -85 plf: this ordering shows how the same set of loads can govern completely different checks on the same beam, with gravity combinations controlling bending and the 0.9D combination controlling uplift and anchorage.",
    "domain": "loads_lateral_earth_pressure_and_analysis_methods",
    "scenario_id": 93,
    "scenario_title": "Governing Load Combination for a Roof Beam Under Wind Uplift",
    "scenario_text": "A roof beam carries dead load D = 150 plf, roof live load Lr = 70 plf, and a strength-level net wind uplift W = -220 plf (negative indicating an upward force). Ground snow does not govern for this roof and there is no seismic demand on this member. Using the ASCE 7-16 Chapter 2 LRFD basic combinations, the beam must be checked for both maximum downward gravity force and net uplift."
  },
  {
    "id": 9306,
    "type": "drag_and_drop_position",
    "question": "Drag each load term to its correct description.",
    "image_description": "Three description boxes: 'Dead load, permanent and always present,' 'Roof live load, transient and reducible per ASCE 7-16 Section 4.8,' and 'Wind load, already provided at the strength level with a 1.0 LRFD factor.' Three term labels sit as draggable tokens.",
    "drag_items": [
      {
        "id": "d1",
        "label": "D"
      },
      {
        "id": "d2",
        "label": "Lr"
      },
      {
        "id": "d3",
        "label": "W"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.575,
        "y": 0.72,
        "w": 0.35,
        "h": 0.12
      },
      {
        "id": "z2",
        "x": 0.575,
        "y": 0.44,
        "w": 0.35,
        "h": 0.12
      },
      {
        "id": "z3",
        "x": 0.575,
        "y": 0.16,
        "w": 0.35,
        "h": 0.12
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct answer matches D to the permanent dead load description, Lr to the roof live load reduced per Section 4.8 rather than Section 4.7, and W to the wind load, which already carries a strength-level factor of 1.0 in ASCE 7-16 LRFD combinations.",
    "image": "question_images/q_9306.png",
    "domain": "loads_lateral_earth_pressure_and_analysis_methods",
    "scenario_id": 93,
    "scenario_title": "Governing Load Combination for a Roof Beam Under Wind Uplift",
    "scenario_text": "A roof beam carries dead load D = 150 plf, roof live load Lr = 70 plf, and a strength-level net wind uplift W = -220 plf (negative indicating an upward force). Ground snow does not govern for this roof and there is no seismic demand on this member. Using the ASCE 7-16 Chapter 2 LRFD basic combinations, the beam must be checked for both maximum downward gravity force and net uplift."
  },
  {
    "id": 9401,
    "type": "point_and_click",
    "question": "Click the location of the maximum POSITIVE moment in an END span, where the coefficient ln squared over 11 applies because the discontinuous end is unrestrained.",
    "image_description": "An elevation of a four-span continuous beam supported on 5 supports, spans labeled Span 1 through Span 4 left to right. Span 1 and Span 4 are end spans resting on masonry walls (drawn as hatched blocks); Spans 2 and 3 are interior spans between columns. Midspan points are marked with small ticks in each span, and support locations are marked at each of the 5 supports.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.13,
        "y": 0.5,
        "w": 0.08,
        "h": 0.1
      },
      {
        "id": "z2",
        "x": 0.38,
        "y": 0.5,
        "w": 0.08,
        "h": 0.1
      },
      {
        "id": "z3",
        "x": 0.25,
        "y": 0.25,
        "w": 0.06,
        "h": 0.1
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the midspan of Span 1: ACI 318-14 Section 6.5 assigns ln squared over 11 to positive moment in an end span whose discontinuous end is unrestrained (resting on a wall rather than framed integrally), giving 3.2(22 squared)/11 = 140.8 kip-ft.",
    "image": "question_images/q_9401.png",
    "domain": "loads_lateral_earth_pressure_and_analysis_methods",
    "scenario_id": 94,
    "scenario_title": "Four-Span Continuous Beam Using ACI 318-14 Approximate Coefficients",
    "scenario_text": "A four-span continuous beam has equal clear spans ln = 22 ft and a uniform factored load wu = 3.2 kips/ft. The beam satisfies all ACI 318-14 Section 6.5 applicability conditions: two or more spans, spans within 20 percent of each other, a uniformly distributed load, and unfactored live load not exceeding three times unfactored dead load. Both end spans rest on unrestrained masonry walls with no integral connection to a spandrel or column."
  },
  {
    "id": 9402,
    "type": "point_and_click",
    "question": "Click the location of the negative moment at the EXTERIOR FACE of the first interior support, where the coefficient ln squared over 10 applies because the beam has more than two spans.",
    "image_description": "The same four-span beam elevation as the prior item, with Span 1 through Span 4 labeled, end spans on masonry walls, and all 5 supports and 4 midspan points marked.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.25,
        "y": 0.25,
        "w": 0.06,
        "h": 0.1
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.25,
        "w": 0.06,
        "h": 0.1
      },
      {
        "id": "z3",
        "x": 0.38,
        "y": 0.5,
        "w": 0.08,
        "h": 0.1
      },
      {
        "id": "z4",
        "x": 0.03,
        "y": 0.25,
        "w": 0.06,
        "h": 0.1
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the first interior support (between Span 1 and Span 2): ACI 318-14 Section 6.5.2 assigns ln squared over 10 to the exterior face of the first interior support when the beam has more than two spans, giving 3.2(22 squared)/10 = 154.9 kip-ft, larger than the ln squared over 9 value used for a two-span beam.",
    "image": "question_images/q_9402.png",
    "domain": "loads_lateral_earth_pressure_and_analysis_methods",
    "scenario_id": 94,
    "scenario_title": "Four-Span Continuous Beam Using ACI 318-14 Approximate Coefficients",
    "scenario_text": "A four-span continuous beam has equal clear spans ln = 22 ft and a uniform factored load wu = 3.2 kips/ft. The beam satisfies all ACI 318-14 Section 6.5 applicability conditions: two or more spans, spans within 20 percent of each other, a uniformly distributed load, and unfactored live load not exceeding three times unfactored dead load. Both end spans rest on unrestrained masonry walls with no integral connection to a spandrel or column."
  },
  {
    "id": 9403,
    "type": "point_and_click",
    "question": "Click the span where the coefficient ln squared over 16 applies for positive moment, which is used only for an INTERIOR span, not an end span.",
    "image_description": "The same four-span beam elevation with Span 1 through Span 4 labeled, end spans on masonry walls, all 5 supports marked, and midspan ticks in each span.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.38,
        "y": 0.5,
        "w": 0.08,
        "h": 0.1
      },
      {
        "id": "z2",
        "x": 0.13,
        "y": 0.5,
        "w": 0.08,
        "h": 0.1
      },
      {
        "id": "z3",
        "x": 0.87,
        "y": 0.5,
        "w": 0.08,
        "h": 0.1
      },
      {
        "id": "z4",
        "x": 0.25,
        "y": 0.25,
        "w": 0.06,
        "h": 0.1
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the midspan of Span 2 (an interior span): ACI 318-14 Section 6.5.2 reserves ln squared over 16 for positive moment in an interior span, giving 3.2(22 squared)/16 = 96.8 kip-ft, distinct from the ln squared over 11 or 14 coefficients used in end spans.",
    "image": "question_images/q_9403.png",
    "domain": "loads_lateral_earth_pressure_and_analysis_methods",
    "scenario_id": 94,
    "scenario_title": "Four-Span Continuous Beam Using ACI 318-14 Approximate Coefficients",
    "scenario_text": "A four-span continuous beam has equal clear spans ln = 22 ft and a uniform factored load wu = 3.2 kips/ft. The beam satisfies all ACI 318-14 Section 6.5 applicability conditions: two or more spans, spans within 20 percent of each other, a uniformly distributed load, and unfactored live load not exceeding three times unfactored dead load. Both end spans rest on unrestrained masonry walls with no integral connection to a spandrel or column."
  },
  {
    "id": 9404,
    "type": "drag_and_drop_position",
    "question": "Drag each computed moment value to its correct location on the beam diagram.",
    "image_description": "The four-span beam elevation with Span 1 through Span 4 labeled, end spans on masonry walls, all 5 supports and 4 midspan points marked with empty drop targets at the midspan of Span 1, the midspan of Span 2, and the first interior support.",
    "drag_items": [
      {
        "id": "d1",
        "label": "96.8 kip-ft (positive, interior span)"
      },
      {
        "id": "d2",
        "label": "140.8 kip-ft (positive, end span, unrestrained)"
      },
      {
        "id": "d3",
        "label": "154.9 kip-ft (negative, exterior face of first interior support)"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.38,
        "y": 0.5,
        "w": 0.08,
        "h": 0.1
      },
      {
        "id": "z2",
        "x": 0.13,
        "y": 0.5,
        "w": 0.08,
        "h": 0.1
      },
      {
        "id": "z3",
        "x": 0.25,
        "y": 0.25,
        "w": 0.06,
        "h": 0.1
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct answer places 96.8 kip-ft at the interior span midspan (ln squared over 16), 140.8 kip-ft at the end span midspan (ln squared over 11), and 154.9 kip-ft at the first interior support face (ln squared over 10), all computed from wu ln squared = 3.2(22 squared) = 1548.8 kip-ft per ACI 318-14 Section 6.5.2.",
    "image": "question_images/q_9404.png",
    "domain": "loads_lateral_earth_pressure_and_analysis_methods",
    "scenario_id": 94,
    "scenario_title": "Four-Span Continuous Beam Using ACI 318-14 Approximate Coefficients",
    "scenario_text": "A four-span continuous beam has equal clear spans ln = 22 ft and a uniform factored load wu = 3.2 kips/ft. The beam satisfies all ACI 318-14 Section 6.5 applicability conditions: two or more spans, spans within 20 percent of each other, a uniformly distributed load, and unfactored live load not exceeding three times unfactored dead load. Both end spans rest on unrestrained masonry walls with no integral connection to a spandrel or column."
  },
  {
    "id": 9405,
    "type": "drag_and_drop_order",
    "question": "Arrange the steps to compute the interior span positive moment in the correct order.",
    "items": [
      {
        "id": "s1",
        "text": "Confirm ACI 318-14 Section 6.5 applicability: 4 spans, equal ln, uniform load, unfactored live-to-dead ratio of 3 or less"
      },
      {
        "id": "s2",
        "text": "Compute wu ln squared = 3.2 x 22 squared = 1548.8 kip-ft"
      },
      {
        "id": "s3",
        "text": "Select the coefficient 1/16 for positive moment in an interior span"
      },
      {
        "id": "s4",
        "text": "Multiply 1548.8 by 1/16 to get 96.8 kip-ft"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4"
    ],
    "explanation": "The correct order is s1 through s4: the applicability conditions must be confirmed before using the approximate coefficients at all, then wu ln squared is computed once, the correct coefficient is selected based on span type and location, and finally the coefficient is applied to get the moment.",
    "domain": "loads_lateral_earth_pressure_and_analysis_methods",
    "scenario_id": 94,
    "scenario_title": "Four-Span Continuous Beam Using ACI 318-14 Approximate Coefficients",
    "scenario_text": "A four-span continuous beam has equal clear spans ln = 22 ft and a uniform factored load wu = 3.2 kips/ft. The beam satisfies all ACI 318-14 Section 6.5 applicability conditions: two or more spans, spans within 20 percent of each other, a uniformly distributed load, and unfactored live load not exceeding three times unfactored dead load. Both end spans rest on unrestrained masonry walls with no integral connection to a spandrel or column."
  },
  {
    "id": 9406,
    "type": "drag_and_drop_position",
    "question": "Drag each ACI 318-14 Table 6.5.2 coefficient to the location on the beam it applies to.",
    "image_description": "The four-span beam elevation with Span 1 through Span 4 labeled, end spans on masonry walls, and empty drop targets at the midspan of Span 1, the first interior support, and the midspan of Span 2.",
    "drag_items": [
      {
        "id": "d1",
        "label": "1/11 (end span, discontinuous end unrestrained)"
      },
      {
        "id": "d2",
        "label": "1/10 (negative, exterior face of first interior support, more than two spans)"
      },
      {
        "id": "d3",
        "label": "1/16 (positive, interior span)"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.13,
        "y": 0.5,
        "w": 0.08,
        "h": 0.1
      },
      {
        "id": "z2",
        "x": 0.25,
        "y": 0.25,
        "w": 0.06,
        "h": 0.1
      },
      {
        "id": "z3",
        "x": 0.38,
        "y": 0.5,
        "w": 0.08,
        "h": 0.1
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct answer matches 1/11 to the end span midspan since its far end is unrestrained on a masonry wall, 1/10 to the first interior support face since the beam has more than two spans, and 1/16 to the interior span midspan, all per ACI 318-14 Table 6.5.2.",
    "image": "question_images/q_9406.png",
    "domain": "loads_lateral_earth_pressure_and_analysis_methods",
    "scenario_id": 94,
    "scenario_title": "Four-Span Continuous Beam Using ACI 318-14 Approximate Coefficients",
    "scenario_text": "A four-span continuous beam has equal clear spans ln = 22 ft and a uniform factored load wu = 3.2 kips/ft. The beam satisfies all ACI 318-14 Section 6.5 applicability conditions: two or more spans, spans within 20 percent of each other, a uniformly distributed load, and unfactored live load not exceeding three times unfactored dead load. Both end spans rest on unrestrained masonry walls with no integral connection to a spandrel or column."
  },
  {
    "id": 9501,
    "type": "point_and_click",
    "question": "Click the pressure diagram that correctly represents this basement wall's condition (restrained at both top and bottom).",
    "image_description": "Three side-by-side wall cross-section diagrams, each 12 ft tall. Diagram A shows a triangular pressure distribution reaching 690 psf at the base, plus a uniform rectangular surcharge band of 125 psf over its full height. Diagram B shows a smaller triangular distribution reaching only 459.6 psf at the base, with no surcharge band shown. Diagram C shows a triangular distribution that increases sharply with depth to a very large value at the base, representing a passive condition.",
    "hotzones": [
      {
        "id": "zA",
        "x": 0.18,
        "y": 0.5,
        "w": 0.18,
        "h": 0.4
      },
      {
        "id": "zB",
        "x": 0.5,
        "y": 0.5,
        "w": 0.18,
        "h": 0.4
      },
      {
        "id": "zC",
        "x": 0.82,
        "y": 0.5,
        "w": 0.18,
        "h": 0.4
      }
    ],
    "correct": "zA",
    "explanation": "The correct answer is Diagram A: a wall braced at both the floor diaphragm and the slab cannot deflect enough to mobilize the active condition, so it must be designed for the at-rest coefficient K0 = 0.5 combined with the uniform surcharge, not the smaller active pressure in Diagram B or a passive condition that does not apply here.",
    "image": "question_images/q_9501.png",
    "domain": "loads_lateral_earth_pressure_and_analysis_methods",
    "scenario_id": 95,
    "scenario_title": "At-Rest Earth Pressure on a Restrained Basement Wall",
    "scenario_text": "A 12 ft tall basement wall is braced at the top by a floor diaphragm and at the bottom by a slab-on-grade and footing, so it cannot translate or rotate. The backfill has a friction angle phi = 30 degrees and a unit weight gamma = 115 pcf, with a uniform surcharge q = 250 psf from an adjacent parking area. K0 = 1 - sin(30) = 0.5, and for comparison Ka = (1 - sin30)/(1 + sin30) = 0.333."
  },
  {
    "id": 9502,
    "type": "point_and_click",
    "question": "On the correct at-rest pressure diagram, click the location where the MAXIMUM lateral pressure occurs.",
    "image_description": "A single wall cross-section, 12 ft tall, with a triangular soil pressure distribution increasing linearly from zero at the top to 690 psf at the base, overlaid with a uniform 125 psf surcharge band running the full height, giving a total of 815 psf at the base.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.35,
        "y": 0.8400000000000001,
        "w": 0.3,
        "h": 0.12
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.5,
        "w": 0.3,
        "h": 0.12
      },
      {
        "id": "z3",
        "x": 0.5,
        "y": 0.1,
        "w": 0.3,
        "h": 0.12
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the base of the wall, at 12 ft depth: at-rest pressure increases linearly with depth as K0 times gamma times z, so the maximum soil component of 690 psf occurs at the greatest depth, combined with the constant 125 psf surcharge for a total of 815 psf at the base.",
    "image": "question_images/q_9502.png",
    "domain": "loads_lateral_earth_pressure_and_analysis_methods",
    "scenario_id": 95,
    "scenario_title": "At-Rest Earth Pressure on a Restrained Basement Wall",
    "scenario_text": "A 12 ft tall basement wall is braced at the top by a floor diaphragm and at the bottom by a slab-on-grade and footing, so it cannot translate or rotate. The backfill has a friction angle phi = 30 degrees and a unit weight gamma = 115 pcf, with a uniform surcharge q = 250 psf from an adjacent parking area. K0 = 1 - sin(30) = 0.5, and for comparison Ka = (1 - sin30)/(1 + sin30) = 0.333."
  },
  {
    "id": 9503,
    "type": "point_and_click",
    "question": "Click the correct pressure coefficient box to use for this wall, given that it is restrained at both the top and the bottom.",
    "image_description": "Three text boxes arranged side by side: 'Ka = 0.333 (active),' 'K0 = 0.5 (at-rest),' and 'Kp = 3.0 (passive).'",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.18,
        "y": 0.5,
        "w": 0.25,
        "h": 0.15
      },
      {
        "id": "z2",
        "x": 0.46649999999999997,
        "y": 0.5,
        "w": 0.25,
        "h": 0.15
      },
      {
        "id": "z3",
        "x": 0.7284999999999999,
        "y": 0.425,
        "w": 0.25,
        "h": 0.15
      }
    ],
    "correct": "z2",
    "explanation": "The correct answer is K0 = 0.5: a wall restrained at both top and bottom cannot translate or rotate away from the soil enough to mobilize the smaller active pressure, so ASCE 7-16 and standard geotechnical practice require the at-rest coefficient for this condition.",
    "image": "question_images/q_9503.png",
    "domain": "loads_lateral_earth_pressure_and_analysis_methods",
    "scenario_id": 95,
    "scenario_title": "At-Rest Earth Pressure on a Restrained Basement Wall",
    "scenario_text": "A 12 ft tall basement wall is braced at the top by a floor diaphragm and at the bottom by a slab-on-grade and footing, so it cannot translate or rotate. The backfill has a friction angle phi = 30 degrees and a unit weight gamma = 115 pcf, with a uniform surcharge q = 250 psf from an adjacent parking area. K0 = 1 - sin(30) = 0.5, and for comparison Ka = (1 - sin30)/(1 + sin30) = 0.333."
  },
  {
    "id": 9504,
    "type": "drag_and_drop_position",
    "question": "Drag each computed pressure value to its correct location on the at-rest pressure diagram for this wall.",
    "image_description": "A wall cross-section, 12 ft tall, with a triangular soil pressure zone and a uniform surcharge band drawn side by side near the base, with three empty drop targets: one at mid-height for the surcharge band, one at the base for the soil-only component, and one at the base slightly to the right for the combined total.",
    "drag_items": [
      {
        "id": "d1",
        "label": "125 psf (surcharge component, constant with depth)"
      },
      {
        "id": "d2",
        "label": "690 psf (soil component at the base, z = 12 ft)"
      },
      {
        "id": "d3",
        "label": "815 psf (total pressure at the base)"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.3,
        "y": 0.5,
        "w": 0.15,
        "h": 0.12
      },
      {
        "id": "z2",
        "x": 0.6,
        "y": 0.85,
        "w": 0.15,
        "h": 0.1
      },
      {
        "id": "z3",
        "x": 0.85,
        "y": 0.85,
        "w": 0.15,
        "h": 0.1
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct answer places 125 psf as the constant surcharge (K0 times q = 0.5 times 250), 690 psf as the soil pressure at the base (K0 times gamma times z = 0.5 times 115 times 12), and 815 psf as their sum, the total design pressure at the base of this restrained basement wall.",
    "image": "question_images/q_9504.png",
    "domain": "loads_lateral_earth_pressure_and_analysis_methods",
    "scenario_id": 95,
    "scenario_title": "At-Rest Earth Pressure on a Restrained Basement Wall",
    "scenario_text": "A 12 ft tall basement wall is braced at the top by a floor diaphragm and at the bottom by a slab-on-grade and footing, so it cannot translate or rotate. The backfill has a friction angle phi = 30 degrees and a unit weight gamma = 115 pcf, with a uniform surcharge q = 250 psf from an adjacent parking area. K0 = 1 - sin(30) = 0.5, and for comparison Ka = (1 - sin30)/(1 + sin30) = 0.333."
  },
  {
    "id": 9505,
    "type": "drag_and_drop_order",
    "question": "Arrange the steps to determine and apply the correct earth pressure coefficient for this basement wall in the correct order.",
    "items": [
      {
        "id": "s1",
        "text": "Determine whether the wall can translate or rotate away from the soil, or is restrained at the top and bottom"
      },
      {
        "id": "s2",
        "text": "Recognize this wall is braced at both the floor diaphragm and the slab, so it cannot mobilize the active condition"
      },
      {
        "id": "s3",
        "text": "Select K0 = 1 minus sin(phi) = 1 minus sin(30) = 0.5 rather than Ka"
      },
      {
        "id": "s4",
        "text": "Compute the triangular soil pressure p = K0 times gamma times z and add the uniform surcharge pressure K0 times q"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4"
    ],
    "explanation": "The correct order is s1 through s4: the wall's restraint condition must be identified first, since that decision alone determines which coefficient family applies, before selecting K0 over Ka and computing the final combined pressure diagram.",
    "domain": "loads_lateral_earth_pressure_and_analysis_methods",
    "scenario_id": 95,
    "scenario_title": "At-Rest Earth Pressure on a Restrained Basement Wall",
    "scenario_text": "A 12 ft tall basement wall is braced at the top by a floor diaphragm and at the bottom by a slab-on-grade and footing, so it cannot translate or rotate. The backfill has a friction angle phi = 30 degrees and a unit weight gamma = 115 pcf, with a uniform surcharge q = 250 psf from an adjacent parking area. K0 = 1 - sin(30) = 0.5, and for comparison Ka = (1 - sin30)/(1 + sin30) = 0.333."
  },
  {
    "id": 9506,
    "type": "drag_and_drop_position",
    "question": "Drag each coefficient label to the wall condition it applies to.",
    "image_description": "Three condition boxes arranged vertically: 'Wall restrained top and bottom, cannot move,' 'Wall free to rotate or translate away from the soil,' and 'Wall being pushed into the soil (resisting movement).' Three coefficient labels sit as draggable tokens.",
    "drag_items": [
      {
        "id": "d1",
        "label": "K0 (at-rest)"
      },
      {
        "id": "d2",
        "label": "Ka (active)"
      },
      {
        "id": "d3",
        "label": "Kp (passive)"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.575,
        "y": 0.72,
        "w": 0.35,
        "h": 0.12
      },
      {
        "id": "z2",
        "x": 0.575,
        "y": 0.44,
        "w": 0.35,
        "h": 0.12
      },
      {
        "id": "z3",
        "x": 0.575,
        "y": 0.16,
        "w": 0.35,
        "h": 0.12
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct answer matches K0 to a wall restrained top and bottom, Ka to a wall free to rotate or translate away from the soil, and Kp to a wall being pushed into the soil, the largest of the three coefficients since it represents the soil's passive resistance.",
    "image": "question_images/q_9506.png",
    "domain": "loads_lateral_earth_pressure_and_analysis_methods",
    "scenario_id": 95,
    "scenario_title": "At-Rest Earth Pressure on a Restrained Basement Wall",
    "scenario_text": "A 12 ft tall basement wall is braced at the top by a floor diaphragm and at the bottom by a slab-on-grade and footing, so it cannot translate or rotate. The backfill has a friction angle phi = 30 degrees and a unit weight gamma = 115 pcf, with a uniform surcharge q = 250 psf from an adjacent parking area. K0 = 1 - sin(30) = 0.5, and for comparison Ka = (1 - sin30)/(1 + sin30) = 0.333."
  },
  {
    "id": 9601,
    "type": "point_and_click",
    "question": "The connection is being solved by the elastic vector method for eccentric shear. Click the bolt subjected to the greatest resultant (combined direct plus moment-induced) shear force.",
    "image_description": "Side elevation of the bracket plate bolted to a column flange. Four bolts shown in a 2x2 grid: top-left at approximately (0.28,0.25), top-right at (0.42,0.25), bottom-left at (0.28,0.55), bottom-right at (0.42,0.55). The bracket plate extends right to a tip at (0.75,0.45) where a downward load arrow labeled P = 24 kips is applied. A horizontal eccentricity dimension line runs from the bolt group centroid to the load line.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.28,
        "y": 0.25,
        "w": 0.08,
        "h": 0.06
      },
      {
        "id": "z2",
        "x": 0.42,
        "y": 0.25,
        "w": 0.08,
        "h": 0.06
      },
      {
        "id": "z3",
        "x": 0.28,
        "y": 0.55,
        "w": 0.08,
        "h": 0.06
      },
      {
        "id": "z4",
        "x": 0.42,
        "y": 0.55,
        "w": 0.08,
        "h": 0.06
      }
    ],
    "correct": [
      "z2",
      "z4"
    ],
    "explanation": "The correct answer is either the top-right or bottom-right bolt: with a rectangular 2x2 bolt group and a purely horizontal eccentricity combined with a purely vertical applied load, both bolts in the column nearest the load line sit at the same radial distance from the group centroid, so their moment-induced force vectors combine with the direct shear vector to produce the identical resultant (about 13.6 kips each) by the symmetry of the group. Either bolt in that near column governs and should be checked; the two left-column bolts see a smaller combined resultant because their moment-induced component partially opposes the direct shear.",
    "image": "question_images/q_9601.png",
    "domain": "connections_and_joints",
    "scenario_id": 96,
    "scenario_title": "Eccentric Bolted Bracket Connection",
    "scenario_text": "A steel bracket plate is bolted to a column flange with four 7/8 in diameter A325 bearing-type bolts arranged in a 2x2 pattern, spaced 3 in horizontally and 6 in vertically. Plate thickness is 3/8 in, with a 1.25 in edge distance from the bottom bolt row to the plate edge. The bracket extends 5.5 in beyond the bolt group centroid, where a 24 kip vertical shear is applied, producing eccentric in-plane shear on the bolt group."
  },
  {
    "id": 9602,
    "type": "point_and_click",
    "question": "Click the location on the bracket plate most likely to govern by bolt hole bearing and tearout rather than bolt shear.",
    "image_description": "Same bracket elevation as the prior item. Four zones are marked: a strip along the bottom plate edge below the bottom bolt row (small 1.25 in edge distance), a strip along the top plate edge, a strip along the left edge near the column face, and a strip along the right edge near the bracket tip.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.35,
        "y": 0.66,
        "w": 0.14,
        "h": 0.05
      },
      {
        "id": "z2",
        "x": 0.35,
        "y": 0.12,
        "w": 0.14,
        "h": 0.05
      },
      {
        "id": "z3",
        "x": 0.18,
        "y": 0.4,
        "w": 0.06,
        "h": 0.15
      },
      {
        "id": "z4",
        "x": 0.65,
        "y": 0.4,
        "w": 0.06,
        "h": 0.15
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the bottom edge strip: AISC 360 Section J3.10 reduces bearing and tearout capacity when clear distance from a bolt hole to the material edge is small, and the 1.25 in edge distance at the bottom bolt row is close enough to code minimums that tearout, not bolt shear, is likely to govern there.",
    "image": "question_images/q_9602.png",
    "domain": "connections_and_joints",
    "scenario_id": 96,
    "scenario_title": "Eccentric Bolted Bracket Connection",
    "scenario_text": "A steel bracket plate is bolted to a column flange with four 7/8 in diameter A325 bearing-type bolts arranged in a 2x2 pattern, spaced 3 in horizontally and 6 in vertically. Plate thickness is 3/8 in, with a 1.25 in edge distance from the bottom bolt row to the plate edge. The bracket extends 5.5 in beyond the bolt group centroid, where a 24 kip vertical shear is applied, producing eccentric in-plane shear on the bolt group."
  },
  {
    "id": 9603,
    "type": "point_and_click",
    "question": "Click the region representing the governing block shear failure block for this bolt pattern under the applied eccentric shear.",
    "image_description": "Same bracket elevation, now with a shaded region to the right of the bolt column containing the top-right and bottom-right bolts, bounded by the plate edge near the bracket tip, representing the block that would tear out under combined shear and tension rupture planes.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.5,
        "y": 0.4,
        "w": 0.2,
        "h": 0.3
      },
      {
        "id": "z2",
        "x": 0.2,
        "y": 0.4,
        "w": 0.1,
        "h": 0.3
      },
      {
        "id": "z3",
        "x": 0.35,
        "y": 0.15,
        "w": 0.14,
        "h": 0.05
      },
      {
        "id": "z4",
        "x": 0.35,
        "y": 0.68,
        "w": 0.14,
        "h": 0.05
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the region right of the bolt column containing both right-side bolts: AISC 360 Section J4.3 defines block shear as a shear rupture path along the bolt line combined with a tension rupture path to the loaded edge, and this block, closest to the load application and farthest from the fixed column face, is the geometry that governs here.",
    "image": "question_images/q_9603.png",
    "domain": "connections_and_joints",
    "scenario_id": 96,
    "scenario_title": "Eccentric Bolted Bracket Connection",
    "scenario_text": "A steel bracket plate is bolted to a column flange with four 7/8 in diameter A325 bearing-type bolts arranged in a 2x2 pattern, spaced 3 in horizontally and 6 in vertically. Plate thickness is 3/8 in, with a 1.25 in edge distance from the bottom bolt row to the plate edge. The bracket extends 5.5 in beyond the bolt group centroid, where a 24 kip vertical shear is applied, producing eccentric in-plane shear on the bolt group."
  },
  {
    "id": 9604,
    "type": "drag_and_drop_position",
    "question": "Drag each limit state label to the location on the bracket connection where that limit state is checked.",
    "image_description": "Bracket elevation with four labeled drop targets: on the bottom-right bolt itself, on the bottom plate edge strip, on the shaded block shear region right of the bolt column, and on an open area of plate away from any holes.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Bolt shear rupture"
      },
      {
        "id": "d2",
        "label": "Bearing and tearout at bolt hole"
      },
      {
        "id": "d3",
        "label": "Block shear rupture"
      },
      {
        "id": "d4",
        "label": "Gross section yielding"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.42,
        "y": 0.55,
        "w": 0.08,
        "h": 0.06
      },
      {
        "id": "z2",
        "x": 0.35,
        "y": 0.68,
        "w": 0.14,
        "h": 0.05
      },
      {
        "id": "z3",
        "x": 0.53,
        "y": 0.4,
        "w": 0.2,
        "h": 0.3
      },
      {
        "id": "z4",
        "x": 0.62,
        "y": 0.15,
        "w": 0.1,
        "h": 0.06
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3",
      "z4": "d4"
    },
    "explanation": "The correct answer matches each limit state to its physical location: bolt shear rupture occurs at the bolt itself, bearing and tearout at the reduced-edge-distance plate edge, block shear along the torn-out block near the load path, and gross section yielding on the unperforated plate area away from any holes, all per AISC 360 Chapter J.",
    "image": "question_images/q_9604.png",
    "domain": "connections_and_joints",
    "scenario_id": 96,
    "scenario_title": "Eccentric Bolted Bracket Connection",
    "scenario_text": "A steel bracket plate is bolted to a column flange with four 7/8 in diameter A325 bearing-type bolts arranged in a 2x2 pattern, spaced 3 in horizontally and 6 in vertically. Plate thickness is 3/8 in, with a 1.25 in edge distance from the bottom bolt row to the plate edge. The bracket extends 5.5 in beyond the bolt group centroid, where a 24 kip vertical shear is applied, producing eccentric in-plane shear on the bolt group."
  },
  {
    "id": 9605,
    "type": "drag_and_drop_order",
    "question": "Arrange the steps for solving this eccentric bolted bracket connection by the elastic vector method in the correct order.",
    "items": [
      {
        "id": "s1",
        "text": "Locate the centroid of the bolt group"
      },
      {
        "id": "s2",
        "text": "Compute the polar moment (sum of squared distances) of the bolt group about its centroid"
      },
      {
        "id": "s3",
        "text": "Compute the moment as the applied shear times the eccentricity"
      },
      {
        "id": "s4",
        "text": "Calculate the horizontal and vertical force components on the critical bolt and combine them by the square root of the sum of squares"
      },
      {
        "id": "s5",
        "text": "Compare the resultant force on the critical bolt to the single-bolt shear or bearing capacity"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4",
      "s5"
    ],
    "explanation": "The correct order is centroid, polar moment, moment, resultant bolt force, then capacity comparison: this mirrors the elastic vector method AISC 360 Chapter J relies on, where geometry is established first, the applied moment is computed next, and only then is the critical bolt force derived and checked against a table capacity.",
    "domain": "connections_and_joints",
    "scenario_id": 96,
    "scenario_title": "Eccentric Bolted Bracket Connection",
    "scenario_text": "A steel bracket plate is bolted to a column flange with four 7/8 in diameter A325 bearing-type bolts arranged in a 2x2 pattern, spaced 3 in horizontally and 6 in vertically. Plate thickness is 3/8 in, with a 1.25 in edge distance from the bottom bolt row to the plate edge. The bracket extends 5.5 in beyond the bolt group centroid, where a 24 kip vertical shear is applied, producing eccentric in-plane shear on the bolt group."
  },
  {
    "id": 9606,
    "type": "drag_and_drop_position",
    "question": "Drag each dimension or load label onto its correct location on the bracket connection drawing.",
    "image_description": "Bracket elevation with four dimension callouts: a vertical dimension line between the top-left and bottom-left bolts, a horizontal dimension line between the top-left and top-right bolts, a horizontal dimension line from the bolt centroid to the applied load line, and the downward load arrow at the bracket tip.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Bolt spacing, vertical, 6 in"
      },
      {
        "id": "d2",
        "label": "Bolt spacing, horizontal, 3 in"
      },
      {
        "id": "d3",
        "label": "Eccentricity, e = 5.5 in"
      },
      {
        "id": "d4",
        "label": "Applied shear, P = 24 kips"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.18,
        "y": 0.35,
        "w": 0.06,
        "h": 0.15
      },
      {
        "id": "z2",
        "x": 0.3,
        "y": 0.16,
        "w": 0.14,
        "h": 0.05
      },
      {
        "id": "z3",
        "x": 0.5,
        "y": 0.12,
        "w": 0.18,
        "h": 0.05
      },
      {
        "id": "z4",
        "x": 0.72,
        "y": 0.42,
        "w": 0.08,
        "h": 0.06
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3",
      "z4": "d4"
    },
    "explanation": "The correct answer places the vertical spacing dimension between the left-hand bolts, the horizontal spacing dimension between the top bolts, the eccentricity dimension from the bolt centroid to the load line, and the applied load arrow at the bracket tip, which is the geometry the elastic vector method requires to compute the polar moment and applied moment.",
    "image": "question_images/q_9606.png",
    "domain": "connections_and_joints",
    "scenario_id": 96,
    "scenario_title": "Eccentric Bolted Bracket Connection",
    "scenario_text": "A steel bracket plate is bolted to a column flange with four 7/8 in diameter A325 bearing-type bolts arranged in a 2x2 pattern, spaced 3 in horizontally and 6 in vertically. Plate thickness is 3/8 in, with a 1.25 in edge distance from the bottom bolt row to the plate edge. The bracket extends 5.5 in beyond the bolt group centroid, where a 24 kip vertical shear is applied, producing eccentric in-plane shear on the bolt group."
  },
  {
    "id": 9701,
    "type": "point_and_click",
    "question": "Using the instantaneous center of rotation concept, click the point on the weld group predicted to carry the greatest unit force (force per inch of weld).",
    "image_description": "Column flange shown as a vertical line at x=0.15. A vertical fillet weld runs along the column face from (0.18,0.2) to (0.18,0.7). A horizontal return weld runs along the bottom from (0.18,0.72) to (0.35,0.72). The bracket plate extends right to a tip at (0.75,0.45) where a downward load arrow labeled P = 25 kips is applied. Four candidate points are marked: top of the vertical weld, the corner where the vertical and horizontal welds meet, mid-height of the vertical weld, and the far end of the horizontal weld.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.18,
        "y": 0.22,
        "w": 0.06,
        "h": 0.06
      },
      {
        "id": "z2",
        "x": 0.18,
        "y": 0.68,
        "w": 0.06,
        "h": 0.06
      },
      {
        "id": "z3",
        "x": 0.18,
        "y": 0.45,
        "w": 0.06,
        "h": 0.06
      },
      {
        "id": "z4",
        "x": 0.33,
        "y": 0.72,
        "w": 0.06,
        "h": 0.05
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the top of the vertical weld: for an L-shaped weld group whose instantaneous center sits low near the horizontal return leg, the point farthest from the IC develops the largest rotational displacement and therefore the largest unit force, consistent with the coefficient tables in AISC Manual Part 8.",
    "image": "question_images/q_9701.png",
    "domain": "connections_and_joints",
    "scenario_id": 97,
    "scenario_title": "Eccentric Fillet Weld Group on a Welded Bracket",
    "scenario_text": "A bracket plate is welded to a column flange with an L-shaped fillet weld group: an 8 in vertical weld along the column face and a 4 in horizontal return weld along the bottom of the plate, both 5/16 in leg size, E70XX electrode. The bracket extends to a tip 6 in from the weld group centroid, where a 25 kip vertical shear is applied, producing an eccentric shear demand on the weld group solved by the instantaneous center of rotation method."
  },
  {
    "id": 9702,
    "type": "point_and_click",
    "question": "Click the weld segment that is loaded transversely (perpendicular to its own axis) by the applied vertical shear, which AISC 360 permits at 1.5 times the longitudinal strength.",
    "image_description": "Same weld group elevation. Zones cover the horizontal return weld segment, the vertical weld segment, the corner junction between them, and an open bracket plate area away from any weld.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.26,
        "y": 0.72,
        "w": 0.14,
        "h": 0.05
      },
      {
        "id": "z2",
        "x": 0.18,
        "y": 0.4,
        "w": 0.05,
        "h": 0.3
      },
      {
        "id": "z3",
        "x": 0.18,
        "y": 0.7,
        "w": 0.05,
        "h": 0.05
      },
      {
        "id": "z4",
        "x": 0.5,
        "y": 0.45,
        "w": 0.15,
        "h": 0.15
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the horizontal return weld: since the applied shear is vertical, the horizontal segment is loaded perpendicular to its own longitudinal axis, which is the transverse case, while the vertical segment carries the load along its axis and is the longitudinal case, and mixing these up changes which strength increase factor from AISC 360 Section J2.4 applies.",
    "image": "question_images/q_9702.png",
    "domain": "connections_and_joints",
    "scenario_id": 97,
    "scenario_title": "Eccentric Fillet Weld Group on a Welded Bracket",
    "scenario_text": "A bracket plate is welded to a column flange with an L-shaped fillet weld group: an 8 in vertical weld along the column face and a 4 in horizontal return weld along the bottom of the plate, both 5/16 in leg size, E70XX electrode. The bracket extends to a tip 6 in from the weld group centroid, where a 25 kip vertical shear is applied, producing an eccentric shear demand on the weld group solved by the instantaneous center of rotation method."
  },
  {
    "id": 9703,
    "type": "point_and_click",
    "question": "A weld cross-section inset shows the fillet weld profile. Click the effective throat dimension used in the fillet weld strength equation.",
    "image_description": "A small triangular fillet weld cross-section inset drawn near the top-right of the image, showing the two equal legs of the weld and a diagonal dashed line representing the shortest distance from the weld root to the theoretical face of the weld.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.826,
        "y": 0.18,
        "w": 0.05,
        "h": 0.05
      },
      {
        "id": "z2",
        "x": 0.774,
        "y": 0.2,
        "w": 0.04,
        "h": 0.06
      },
      {
        "id": "z3",
        "x": 0.82,
        "y": 0.24,
        "w": 0.06,
        "h": 0.04
      },
      {
        "id": "z4",
        "x": 0.86,
        "y": 0.15,
        "w": 0.03,
        "h": 0.03
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the diagonal dashed line: the effective throat of a fillet weld is 0.707 times the leg size, measured as the shortest distance from the weld root to the theoretical face, and it is this dimension, not the leg size itself, that is multiplied by 0.6 Fexx to get nominal strength per unit length.",
    "image": "question_images/q_9703.png",
    "domain": "connections_and_joints",
    "scenario_id": 97,
    "scenario_title": "Eccentric Fillet Weld Group on a Welded Bracket",
    "scenario_text": "A bracket plate is welded to a column flange with an L-shaped fillet weld group: an 8 in vertical weld along the column face and a 4 in horizontal return weld along the bottom of the plate, both 5/16 in leg size, E70XX electrode. The bracket extends to a tip 6 in from the weld group centroid, where a 25 kip vertical shear is applied, producing an eccentric shear demand on the weld group solved by the instantaneous center of rotation method."
  },
  {
    "id": 9704,
    "type": "drag_and_drop_position",
    "question": "Drag each label to its correct location on the weld group drawing and cross-section inset.",
    "image_description": "Weld group elevation and cross-section inset as in prior items, with four drop targets: the weld leg on the cross-section, the throat line on the cross-section, along the vertical weld length, and along the eccentricity dimension line between the weld centroid and the load line.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Weld leg size, 5/16 in"
      },
      {
        "id": "d2",
        "label": "Effective throat, 0.707 times leg"
      },
      {
        "id": "d3",
        "label": "Weld length, L = 8 in"
      },
      {
        "id": "d4",
        "label": "Eccentricity, e = 6 in"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.774,
        "y": 0.2,
        "w": 0.04,
        "h": 0.06
      },
      {
        "id": "z2",
        "x": 0.826,
        "y": 0.18,
        "w": 0.05,
        "h": 0.05
      },
      {
        "id": "z3",
        "x": 0.18,
        "y": 0.4,
        "w": 0.05,
        "h": 0.3
      },
      {
        "id": "z4",
        "x": 0.45,
        "y": 0.15,
        "w": 0.16,
        "h": 0.05
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3",
      "z4": "d4"
    },
    "explanation": "The correct answer places the leg size on the cross-section leg, the effective throat on the diagonal throat line, the weld length along the full vertical weld, and the eccentricity along the dimension line from the weld centroid to the load, matching the variables needed for AISC Manual Part 8's eccentric weld group tables.",
    "image": "question_images/q_9704.png",
    "domain": "connections_and_joints",
    "scenario_id": 97,
    "scenario_title": "Eccentric Fillet Weld Group on a Welded Bracket",
    "scenario_text": "A bracket plate is welded to a column flange with an L-shaped fillet weld group: an 8 in vertical weld along the column face and a 4 in horizontal return weld along the bottom of the plate, both 5/16 in leg size, E70XX electrode. The bracket extends to a tip 6 in from the weld group centroid, where a 25 kip vertical shear is applied, producing an eccentric shear demand on the weld group solved by the instantaneous center of rotation method."
  },
  {
    "id": 9705,
    "type": "drag_and_drop_order",
    "question": "Arrange the steps for solving this eccentric weld group using the instantaneous center of rotation (IC) method in the correct order.",
    "items": [
      {
        "id": "s1",
        "text": "Locate the centroid, then the instantaneous center of rotation, of the weld group"
      },
      {
        "id": "s2",
        "text": "Determine the k and al geometry ratios for the L-shaped weld group"
      },
      {
        "id": "s3",
        "text": "Enter the AISC Manual Part 8 tables to obtain the coefficient C for that geometry"
      },
      {
        "id": "s4",
        "text": "Compute nominal strength as C times C1 times D times the weld length"
      },
      {
        "id": "s5",
        "text": "Compare the nominal or design strength to the required eccentric shear demand"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4",
      "s5"
    ],
    "explanation": "The correct order is centroid and IC location, geometry ratios, table lookup for C, strength calculation, then demand comparison: the IC method in AISC Manual Part 8 is built exactly around first fixing the group geometry, then indexing into a pre-solved table rather than deriving vector forces by hand.",
    "domain": "connections_and_joints",
    "scenario_id": 97,
    "scenario_title": "Eccentric Fillet Weld Group on a Welded Bracket",
    "scenario_text": "A bracket plate is welded to a column flange with an L-shaped fillet weld group: an 8 in vertical weld along the column face and a 4 in horizontal return weld along the bottom of the plate, both 5/16 in leg size, E70XX electrode. The bracket extends to a tip 6 in from the weld group centroid, where a 25 kip vertical shear is applied, producing an eccentric shear demand on the weld group solved by the instantaneous center of rotation method."
  },
  {
    "id": 9706,
    "type": "drag_and_drop_position",
    "question": "A welding symbol legend shows three weld symbol icons. Drag each weld type name onto its matching symbol.",
    "image_description": "A legend strip along the bottom of the image showing three welding symbol icons: a solid triangular flag symbol, a symbol with a full-depth square groove and no depth callout, and a symbol with a groove and an explicit partial-depth callout number.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Fillet weld symbol"
      },
      {
        "id": "d2",
        "label": "Complete joint penetration (CJP) groove weld symbol"
      },
      {
        "id": "d3",
        "label": "Partial joint penetration (PJP) groove weld symbol"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.15,
        "y": 0.85,
        "w": 0.1,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.4,
        "y": 0.85,
        "w": 0.1,
        "h": 0.08
      },
      {
        "id": "z3",
        "x": 0.65,
        "y": 0.85,
        "w": 0.1,
        "h": 0.08
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3"
    },
    "explanation": "The correct answer matches the triangular flag icon to the fillet weld symbol, the full-depth groove icon with no depth callout to the CJP symbol since it is understood to develop full base metal strength, and the groove icon with an explicit depth callout to the PJP symbol, whose effective throat depends on that stated depth and groove angle rather than full plate thickness.",
    "image": "question_images/q_9706.png",
    "domain": "connections_and_joints",
    "scenario_id": 97,
    "scenario_title": "Eccentric Fillet Weld Group on a Welded Bracket",
    "scenario_text": "A bracket plate is welded to a column flange with an L-shaped fillet weld group: an 8 in vertical weld along the column face and a 4 in horizontal return weld along the bottom of the plate, both 5/16 in leg size, E70XX electrode. The bracket extends to a tip 6 in from the weld group centroid, where a 25 kip vertical shear is applied, producing an eccentric shear demand on the weld group solved by the instantaneous center of rotation method."
  },
  {
    "id": 9801,
    "type": "point_and_click",
    "question": "Click the anchor most likely to govern the concrete breakout in tension check, given its position relative to both nearby foundation edges.",
    "image_description": "Plan view of the base plate with four anchors in a 2x2 grid: top-left at (0.3,0.3), top-right at (0.5,0.3), bottom-left at (0.3,0.5), bottom-right at (0.5,0.5). A foundation edge runs vertically at x=0.15 (left side, ca1 = 4 in) and another runs horizontally at y=0.15 (top side, ca2 = 5 in), making the top-left anchor the closest to both edges.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.3,
        "y": 0.3,
        "w": 0.06,
        "h": 0.06
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.3,
        "w": 0.06,
        "h": 0.06
      },
      {
        "id": "z3",
        "x": 0.3,
        "y": 0.5,
        "w": 0.06,
        "h": 0.06
      },
      {
        "id": "z4",
        "x": 0.5,
        "y": 0.5,
        "w": 0.06,
        "h": 0.06
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the top-left anchor: ACI 318-14 Chapter 17 reduces the projected breakout area and applies edge modification factors as edge distance decreases, and this anchor is closest to two separate free edges simultaneously, giving it the smallest effective breakout area and the lowest breakout capacity in the group.",
    "image": "question_images/q_9801.png",
    "domain": "connections_and_joints",
    "scenario_id": 98,
    "scenario_title": "Anchor Bolt Group Concrete Breakout at a Column Base",
    "scenario_text": "A column base plate is anchored with four cast-in headed anchors in a 2x2 pattern, 8 in on center each way, effective embedment depth hef = 6 in. The group sits near a foundation corner, with edge distance ca1 = 4 in to the nearest side edge and ca2 = 5 in to the nearest adjacent edge. The base connection resists combined tension and shear under wind uplift, and concrete is assumed cracked at service loads per ACI 318-14 Chapter 17."
  },
  {
    "id": 9802,
    "type": "point_and_click",
    "question": "Click the region representing the combined projected concrete breakout area, ANc, for the anchor group, given that the 8 in anchor spacing is less than 3 times hef (18 in).",
    "image_description": "Same plan view. A large shaded rectangle extends outward from all four anchors toward the foundation edges, representing the merged breakout surface. Smaller distractor zones show an isolated single-anchor cone around the bottom-right anchor, an unrelated area near an adjacent column, and a strip along the left edge outside the anchor group footprint.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.24399999999999994,
        "y": 0.4,
        "w": 0.4,
        "h": 0.4
      },
      {
        "id": "z2",
        "x": 0.6559999999999999,
        "y": 0.5,
        "w": 0.1,
        "h": 0.1
      },
      {
        "id": "z3",
        "x": 0.78,
        "y": 0.7,
        "w": 0.1,
        "h": 0.1
      },
      {
        "id": "z4",
        "x": 0.15,
        "y": 0.7,
        "w": 0.08,
        "h": 0.08
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the large combined region spanning all four anchors: since the 8 in spacing is well under the 3hef = 18 in critical spacing, ACI 318-14 requires the breakout cones of adjacent anchors to be treated as overlapping, so the group must use one merged projected area ANc rather than summing four individual anchor breakout capacities.",
    "image": "question_images/q_9802.png",
    "domain": "connections_and_joints",
    "scenario_id": 98,
    "scenario_title": "Anchor Bolt Group Concrete Breakout at a Column Base",
    "scenario_text": "A column base plate is anchored with four cast-in headed anchors in a 2x2 pattern, 8 in on center each way, effective embedment depth hef = 6 in. The group sits near a foundation corner, with edge distance ca1 = 4 in to the nearest side edge and ca2 = 5 in to the nearest adjacent edge. The base connection resists combined tension and shear under wind uplift, and concrete is assumed cracked at service loads per ACI 318-14 Chapter 17."
  },
  {
    "id": 9803,
    "type": "point_and_click",
    "question": "The applied shear acts horizontally toward the nearest free edge. Click the anchor governing the concrete breakout in shear check.",
    "image_description": "Same plan view as prior items, with a horizontal shear arrow drawn pointing left toward the ca1 = 4 in edge.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.3,
        "y": 0.3,
        "w": 0.06,
        "h": 0.06
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.3,
        "w": 0.06,
        "h": 0.06
      },
      {
        "id": "z3",
        "x": 0.3,
        "y": 0.5,
        "w": 0.06,
        "h": 0.06
      },
      {
        "id": "z4",
        "x": 0.5,
        "y": 0.5,
        "w": 0.06,
        "h": 0.06
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the top-left anchor: concrete breakout in shear per ACI 318-14 Chapter 17 depends on the edge distance in the direction of the applied shear, and since this anchor has both the smallest ca1 toward the loaded edge and an additional reduction from the adjacent ca2 edge, it produces the smallest projected shear breakout area of the group.",
    "image": "question_images/q_9803.png",
    "domain": "connections_and_joints",
    "scenario_id": 98,
    "scenario_title": "Anchor Bolt Group Concrete Breakout at a Column Base",
    "scenario_text": "A column base plate is anchored with four cast-in headed anchors in a 2x2 pattern, 8 in on center each way, effective embedment depth hef = 6 in. The group sits near a foundation corner, with edge distance ca1 = 4 in to the nearest side edge and ca2 = 5 in to the nearest adjacent edge. The base connection resists combined tension and shear under wind uplift, and concrete is assumed cracked at service loads per ACI 318-14 Chapter 17."
  },
  {
    "id": 9804,
    "type": "drag_and_drop_position",
    "question": "Drag each anchor limit state to the location on the drawing where it is most clearly governed by that condition.",
    "image_description": "Plan view with an added anchor head cross-section inset. Drop targets are the top-left anchor (closest to both edges), the bottom-right anchor (farthest from both edges), the anchor head cross-section inset, and the shear arrow zone near the left edge.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Concrete breakout in tension (cracked concrete)"
      },
      {
        "id": "d2",
        "label": "Steel strength in tension"
      },
      {
        "id": "d3",
        "label": "Anchor pullout strength"
      },
      {
        "id": "d4",
        "label": "Concrete breakout in shear"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.3,
        "y": 0.3,
        "w": 0.06,
        "h": 0.06
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.5,
        "w": 0.06,
        "h": 0.06
      },
      {
        "id": "z3",
        "x": 0.8,
        "y": 0.3,
        "w": 0.1,
        "h": 0.1
      },
      {
        "id": "z4",
        "x": 0.18,
        "y": 0.6,
        "w": 0.08,
        "h": 0.08
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3",
      "z4": "d4"
    },
    "explanation": "The correct answer places concrete breakout in tension at the edge-limited top-left anchor, steel strength in tension at the interior bottom-right anchor where edge effects are minimal so the anchor's own steel governs, pullout strength at the anchor head cross-section since pullout depends on head bearing rather than plan location, and concrete breakout in shear near the loaded edge, consistent with ACI 318-14 Chapter 17's seven separate limit states.",
    "image": "question_images/q_9804.png",
    "domain": "connections_and_joints",
    "scenario_id": 98,
    "scenario_title": "Anchor Bolt Group Concrete Breakout at a Column Base",
    "scenario_text": "A column base plate is anchored with four cast-in headed anchors in a 2x2 pattern, 8 in on center each way, effective embedment depth hef = 6 in. The group sits near a foundation corner, with edge distance ca1 = 4 in to the nearest side edge and ca2 = 5 in to the nearest adjacent edge. The base connection resists combined tension and shear under wind uplift, and concrete is assumed cracked at service loads per ACI 318-14 Chapter 17."
  },
  {
    "id": 9805,
    "type": "drag_and_drop_order",
    "question": "Arrange the steps for determining whether this anchor group must be checked as a combined breakout surface or as individual anchors, in the correct order.",
    "items": [
      {
        "id": "s1",
        "text": "Determine the effective embedment depth, hef, of the anchors"
      },
      {
        "id": "s2",
        "text": "Compute the critical spacing, 3hef, for an individual anchor's breakout cone"
      },
      {
        "id": "s3",
        "text": "Compare the actual anchor spacing to the critical spacing 3hef"
      },
      {
        "id": "s4",
        "text": "If spacing is less than 3hef, compute the combined projected breakout area, ANc, for the group"
      },
      {
        "id": "s5",
        "text": "Calculate the group breakout capacity using the CCD method with the combined ANc"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4",
      "s5"
    ],
    "explanation": "The correct order is embedment depth, critical spacing, spacing comparison, combined area, then group capacity: ACI 318-14 Chapter 17's concrete capacity design method requires establishing hef and the 3hef benchmark before anything else, since that comparison alone decides whether individual or combined anchor breakout governs.",
    "domain": "connections_and_joints",
    "scenario_id": 98,
    "scenario_title": "Anchor Bolt Group Concrete Breakout at a Column Base",
    "scenario_text": "A column base plate is anchored with four cast-in headed anchors in a 2x2 pattern, 8 in on center each way, effective embedment depth hef = 6 in. The group sits near a foundation corner, with edge distance ca1 = 4 in to the nearest side edge and ca2 = 5 in to the nearest adjacent edge. The base connection resists combined tension and shear under wind uplift, and concrete is assumed cracked at service loads per ACI 318-14 Chapter 17."
  },
  {
    "id": 9806,
    "type": "drag_and_drop_position",
    "question": "Drag each dimension label onto its correct location on the anchor group plan view and cross-section inset.",
    "image_description": "Plan view and anchor head cross-section inset as in prior items, with four drop targets: the embedment depth dimension in the cross-section inset, the left edge distance dimension, the top edge distance dimension, and the spacing dimension between the two top anchors.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Effective embedment depth, hef = 6 in"
      },
      {
        "id": "d2",
        "label": "Edge distance, ca1 = 4 in"
      },
      {
        "id": "d3",
        "label": "Edge distance, ca2 = 5 in"
      },
      {
        "id": "d4",
        "label": "Anchor spacing, s = 8 in"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.8,
        "y": 0.5,
        "w": 0.1,
        "h": 0.15
      },
      {
        "id": "z2",
        "x": 0.2,
        "y": 0.4,
        "w": 0.08,
        "h": 0.05
      },
      {
        "id": "z3",
        "x": 0.35,
        "y": 0.2,
        "w": 0.06,
        "h": 0.06
      },
      {
        "id": "z4",
        "x": 0.4,
        "y": 0.28,
        "w": 0.08,
        "h": 0.05
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3",
      "z4": "d4"
    },
    "explanation": "The correct answer places the embedment depth in the cross-section inset showing the anchor buried in the concrete, ca1 along the left edge distance line, ca2 along the top edge distance line, and the spacing dimension between the two top anchors, matching every variable ACI 318-14 Chapter 17 requires to evaluate this group's breakout capacity.",
    "image": "question_images/q_9806.png",
    "domain": "connections_and_joints",
    "scenario_id": 98,
    "scenario_title": "Anchor Bolt Group Concrete Breakout at a Column Base",
    "scenario_text": "A column base plate is anchored with four cast-in headed anchors in a 2x2 pattern, 8 in on center each way, effective embedment depth hef = 6 in. The group sits near a foundation corner, with edge distance ca1 = 4 in to the nearest side edge and ca2 = 5 in to the nearest adjacent edge. The base connection resists combined tension and shear under wind uplift, and concrete is assumed cracked at service loads per ACI 318-14 Chapter 17."
  },
  {
    "id": 9901,
    "type": "point_and_click",
    "question": "On the podium level framing plan, click the bay where a transfer element is required because the Level 2 shear wall above does not land on a podium column.",
    "image_description": "A framing plan of the podium level showing a 30 ft by 30 ft column grid on gridlines A-E (vertical, left to right) and 1-5 (horizontal, top to bottom). Columns are shown as filled squares at every gridline intersection. A dashed line overlay shows the Level 2 shear wall footprint running along gridline C, offset 15 ft east of the C-3 column into the bay between C-3 and D-3. Three other bays are shown as plain framing with no offset condition: B-2/B-3 (normal bay, column below), D-4/E-4 (normal bay, column below), and A-1/A-2 (storefront bay, discussed in a later item).",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.55,
        "y": 0.5,
        "w": 0.09,
        "h": 0.09
      },
      {
        "id": "z2",
        "x": 0.3,
        "y": 0.35,
        "w": 0.09,
        "h": 0.09
      },
      {
        "id": "z3",
        "x": 0.75,
        "y": 0.7,
        "w": 0.09,
        "h": 0.09
      },
      {
        "id": "z4",
        "x": 0.1,
        "y": 0.75,
        "w": 0.09,
        "h": 0.09
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the bay between gridlines C-3 and D-3: the Level 2 shear wall is offset 15 ft east of the C-3 podium column, so there is no continuous vertical load path from the wall down to a column at that location. A transfer girder or transfer wall is required at the podium level to pick up the shear wall reaction and carry it laterally to the nearest columns, which adds cost, depth, and schedule risk exactly where the theory chapter flags podium transfers as expensive.",
    "image": "question_images/q_9901.png",
    "domain": "conceptual_design_project_planning_and_documentation",
    "scenario_id": 99,
    "scenario_title": "Podium-Level Gravity and Lateral Coordination for a Mixed-Use Building",
    "scenario_text": "A 6-story wood-framed residential building sits atop a 1-story cast-in-place concrete parking podium. Zoning caps overall building height, fixing the typical floor-to-floor height at exactly 10 ft-0 in for Levels 2 through 6. Mechanical ductwork requires 18 in of clear depth below the structural framing at every level, and the ceiling assembly requires an additional 6 in. The podium parking grid is 30 ft by 30 ft on gridlines A through E and 1 through 5. A Level 2 wood shear wall along gridline C lands 15 ft east of the nearest podium column at C-3, with no column below it at the podium level. The architect wants a 24 ft wide storefront glazing opening at the ground floor corner bay A-1/A-2, but the current lateral scheme shows a steel braced frame occupying that exact bay."
  },
  {
    "id": 9902,
    "type": "point_and_click",
    "question": "Click the bay where the current lateral system conflicts with the architectural program.",
    "image_description": "A ground floor lateral bracing plan on the same 30 ft by 30 ft grid, gridlines A-E and 1-5. The corner bay A-1/A-2 shows a steel X-braced frame drawn as diagonal lines spanning the full bay height. Three other bays show plain shear wall symbols with no glazing conflict: C-2/C-3, D-1/D-2, and B-4/B-5.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.12,
        "y": 0.15,
        "w": 0.1,
        "h": 0.1
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.35,
        "w": 0.09,
        "h": 0.09
      },
      {
        "id": "z3",
        "x": 0.75,
        "y": 0.15,
        "w": 0.09,
        "h": 0.09
      },
      {
        "id": "z4",
        "x": 0.3,
        "y": 0.75,
        "w": 0.09,
        "h": 0.09
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is bay A-1/A-2: a braced frame occupies the exact bay where the architect wants a 24 ft wide storefront glazing opening, and diagonal bracing physically blocks that opening. This is the classic conceptual mistake the theory describes, picking a lateral system location without checking it against the architectural program, and it must be resolved by relocating the brace, converting that bay to a moment frame, or shifting the lateral resistance to an adjacent bay.",
    "image": "question_images/q_9902.png",
    "domain": "conceptual_design_project_planning_and_documentation",
    "scenario_id": 99,
    "scenario_title": "Podium-Level Gravity and Lateral Coordination for a Mixed-Use Building",
    "scenario_text": "A 6-story wood-framed residential building sits atop a 1-story cast-in-place concrete parking podium. Zoning caps overall building height, fixing the typical floor-to-floor height at exactly 10 ft-0 in for Levels 2 through 6. Mechanical ductwork requires 18 in of clear depth below the structural framing at every level, and the ceiling assembly requires an additional 6 in. The podium parking grid is 30 ft by 30 ft on gridlines A through E and 1 through 5. A Level 2 wood shear wall along gridline C lands 15 ft east of the nearest podium column at C-3, with no column below it at the podium level. The architect wants a 24 ft wide storefront glazing opening at the ground floor corner bay A-1/A-2, but the current lateral scheme shows a steel braced frame occupying that exact bay."
  },
  {
    "id": 9903,
    "type": "point_and_click",
    "question": "On the building section, click the location showing the tightest structure-to-ceiling depth conflict given the fixed 10 ft floor-to-floor height, the 18 in duct clearance, and the 6 in ceiling assembly.",
    "image_description": "A building section cutting through a typical residential level, showing finished floor at the bottom, then a labeled stack going up: structural framing depth (variable, drawn as a beam symbol), then a duct symbol labeled '18 in required', then a ceiling assembly labeled '6 in', then finished floor above, all within a 10 ft-0 in floor-to-floor dimension line at the far left of the section. A callout at mid-span over the corridor shows the stack is tightest because the duct main runs there at full 18 in depth, versus a callout at the exterior wall line where no ductwork crosses and a callout at a interior partition line where only a branch duct half the depth crosses.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.45,
        "y": 0.4,
        "w": 0.12,
        "h": 0.12
      },
      {
        "id": "z2",
        "x": 0.1,
        "y": 0.4,
        "w": 0.1,
        "h": 0.12
      },
      {
        "id": "z3",
        "x": 0.8,
        "y": 0.6,
        "w": 0.1,
        "h": 0.12
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the corridor mid-span location: this is where the full 18 in duct main runs, and stacking framing depth plus 18 in of duct plus 6 in of ceiling against a fixed 10 ft-0 in floor-to-floor leaves the least remaining allowance for structural depth. Since the floor-to-floor height is fixed by zoning, the engineer must actively manage framing depth as a design variable at this location, for example by selecting a shallower system or routing the duct through web openings, rather than treating member depth as a free output of design.",
    "image": "question_images/q_9903.png",
    "domain": "conceptual_design_project_planning_and_documentation",
    "scenario_id": 99,
    "scenario_title": "Podium-Level Gravity and Lateral Coordination for a Mixed-Use Building",
    "scenario_text": "A 6-story wood-framed residential building sits atop a 1-story cast-in-place concrete parking podium. Zoning caps overall building height, fixing the typical floor-to-floor height at exactly 10 ft-0 in for Levels 2 through 6. Mechanical ductwork requires 18 in of clear depth below the structural framing at every level, and the ceiling assembly requires an additional 6 in. The podium parking grid is 30 ft by 30 ft on gridlines A through E and 1 through 5. A Level 2 wood shear wall along gridline C lands 15 ft east of the nearest podium column at C-3, with no column below it at the podium level. The architect wants a 24 ft wide storefront glazing opening at the ground floor corner bay A-1/A-2, but the current lateral scheme shows a steel braced frame occupying that exact bay."
  },
  {
    "id": 9904,
    "type": "drag_and_drop_position",
    "question": "Drag each structural system label to the level of the building where it is the most appropriate conceptual choice given the constraints in the scenario.",
    "image_description": "A schematic building elevation showing four labeled zones stacked vertically: 'Podium Level (parking, 30x30 grid)' at the bottom, 'Transfer Level (above podium)' just above it, 'Levels 2-6 (residential, 10 ft floor-to-floor)' as a tall middle zone, and 'Roof' at the top. Each zone is an empty drop target box to the right of its label.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Cast-in-place concrete flat slab (fire resistance, long clear spans for car maneuvering)"
      },
      {
        "id": "d2",
        "label": "Wood light-frame platform construction (lightest, shallowest, most economical for repetitive residential floors)"
      },
      {
        "id": "d3",
        "label": "Cast-in-place concrete transfer girder (carries discontinuous shear wall load to the nearest columns)"
      },
      {
        "id": "d4",
        "label": "Light wood roof trusses (minimal additional dead load, no occupied space above)"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.7,
        "y": 0.85,
        "w": 0.2,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.7,
        "y": 0.68,
        "w": 0.2,
        "h": 0.08
      },
      {
        "id": "z3",
        "x": 0.7,
        "y": 0.4,
        "w": 0.2,
        "h": 0.08
      },
      {
        "id": "z4",
        "x": 0.7,
        "y": 0.12,
        "w": 0.2,
        "h": 0.08
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d3",
      "z3": "d2",
      "z4": "d4"
    },
    "explanation": "The correct answer matches the podium to cast-in-place concrete for clear span parking and fire resistance, the transfer level to a concrete transfer girder to carry the discontinuous shear wall load found in the earlier item, the residential floors to wood light-frame construction as the lightest and most economical system for the fixed 10 ft floor-to-floor repetitive layout, and the roof to light wood trusses since there is no occupied space above to justify added weight or depth. Matching system choice to program, span, and constraint at each level is the core judgment this domain tests.",
    "image": "question_images/q_9904.png",
    "domain": "conceptual_design_project_planning_and_documentation",
    "scenario_id": 99,
    "scenario_title": "Podium-Level Gravity and Lateral Coordination for a Mixed-Use Building",
    "scenario_text": "A 6-story wood-framed residential building sits atop a 1-story cast-in-place concrete parking podium. Zoning caps overall building height, fixing the typical floor-to-floor height at exactly 10 ft-0 in for Levels 2 through 6. Mechanical ductwork requires 18 in of clear depth below the structural framing at every level, and the ceiling assembly requires an additional 6 in. The podium parking grid is 30 ft by 30 ft on gridlines A through E and 1 through 5. A Level 2 wood shear wall along gridline C lands 15 ft east of the nearest podium column at C-3, with no column below it at the podium level. The architect wants a 24 ft wide storefront glazing opening at the ground floor corner bay A-1/A-2, but the current lateral scheme shows a steel braced frame occupying that exact bay."
  },
  {
    "id": 9905,
    "type": "drag_and_drop_order",
    "question": "Arrange the following construction sequence steps for pouring the concrete transfer girder at gridline C-3/D-3 in the correct order.",
    "items": [
      {
        "id": "s1",
        "text": "Install temporary shoring towers from the podium slab down to the parking level slab-on-grade below"
      },
      {
        "id": "s2",
        "text": "Form and place reinforcing steel for the transfer girder, noting that the shoring towers -- not the girder -- carry the loads from the levels above during this stage"
      },
      {
        "id": "s3",
        "text": "Pour the transfer girder concrete and allow it to reach specified strength before removing any shoring"
      },
      {
        "id": "s4",
        "text": "Remove the temporary shoring only after the girder and the levels it supports have gained adequate strength"
      },
      {
        "id": "s5",
        "text": "Erect the wood-framed shear wall and residential framing above once the transfer girder is confirmed to carry the load independently"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4",
      "s5"
    ],
    "explanation": "The correct order is shoring first, then forming and reinforcing, then the pour, then shoring removal only after strength gain, then erection of the framing above. This sequence reflects the theory point that while shoring is in place, the temporary towers carry the loads from the levels above down to grade, bypassing the transfer girder entirely; the girder only picks up its full design load once the shoring is removed, making the final in-service condition the girder's critical loading case, not the construction stage. Skipping or reordering the shoring steps is still a common and serious constructability trap, since removing shoring too early would apply full load to a girder that has not yet gained adequate strength.",
    "domain": "conceptual_design_project_planning_and_documentation",
    "scenario_id": 99,
    "scenario_title": "Podium-Level Gravity and Lateral Coordination for a Mixed-Use Building",
    "scenario_text": "A 6-story wood-framed residential building sits atop a 1-story cast-in-place concrete parking podium. Zoning caps overall building height, fixing the typical floor-to-floor height at exactly 10 ft-0 in for Levels 2 through 6. Mechanical ductwork requires 18 in of clear depth below the structural framing at every level, and the ceiling assembly requires an additional 6 in. The podium parking grid is 30 ft by 30 ft on gridlines A through E and 1 through 5. A Level 2 wood shear wall along gridline C lands 15 ft east of the nearest podium column at C-3, with no column below it at the podium level. The architect wants a 24 ft wide storefront glazing opening at the ground floor corner bay A-1/A-2, but the current lateral scheme shows a steel braced frame occupying that exact bay."
  },
  {
    "id": 9906,
    "type": "drag_and_drop_position",
    "question": "Drag each lateral load path element label to its correct location on the building section, from where the seismic force originates down to the foundation.",
    "image_description": "A building section showing, from top to bottom: a roof diaphragm, a Level 6 wood diaphragm, the Level 2 wood shear wall discussed earlier, the concrete transfer girder at the podium, and the foundation. Four empty drop target boxes sit beside these features at their corresponding heights.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Flexible wood diaphragm distributing force by tributary area at each residential level"
      },
      {
        "id": "d2",
        "label": "Level 2 wood shear wall collecting force from the diaphragms above"
      },
      {
        "id": "d3",
        "label": "Concrete transfer girder redistributing the shear wall reaction laterally to the nearest columns"
      },
      {
        "id": "d4",
        "label": "Foundation dowels and footing completing the load path to the ground"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.75,
        "y": 0.15,
        "w": 0.18,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.75,
        "y": 0.38,
        "w": 0.18,
        "h": 0.08
      },
      {
        "id": "z3",
        "x": 0.75,
        "y": 0.62,
        "w": 0.18,
        "h": 0.08
      },
      {
        "id": "z4",
        "x": 0.75,
        "y": 0.85,
        "w": 0.18,
        "h": 0.08
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3",
      "z4": "d4"
    },
    "explanation": "The correct answer places the flexible wood diaphragm at the residential levels, the Level 2 shear wall collecting that force, the transfer girder redistributing the reaction laterally at the podium, and the foundation dowels completing the path to the ground. Every lateral force needs a complete, continuous path from origin to foundation with no gaps at transitions such as this podium level, and the transfer girder from the earlier item is exactly the element that closes what would otherwise be a broken load path.",
    "image": "question_images/q_9906.png",
    "domain": "conceptual_design_project_planning_and_documentation",
    "scenario_id": 99,
    "scenario_title": "Podium-Level Gravity and Lateral Coordination for a Mixed-Use Building",
    "scenario_text": "A 6-story wood-framed residential building sits atop a 1-story cast-in-place concrete parking podium. Zoning caps overall building height, fixing the typical floor-to-floor height at exactly 10 ft-0 in for Levels 2 through 6. Mechanical ductwork requires 18 in of clear depth below the structural framing at every level, and the ceiling assembly requires an additional 6 in. The podium parking grid is 30 ft by 30 ft on gridlines A through E and 1 through 5. A Level 2 wood shear wall along gridline C lands 15 ft east of the nearest podium column at C-3, with no column below it at the podium level. The architect wants a 24 ft wide storefront glazing opening at the ground floor corner bay A-1/A-2, but the current lateral scheme shows a steel braced frame occupying that exact bay."
  },
  {
    "id": 10001,
    "type": "point_and_click",
    "question": "On the shop drawing bearing detail, click the dimension callout that shows the deficient as-erected bearing length conflicting with the contract document minimum.",
    "image_description": "A shop drawing detail of a double-tee to ledger beam bearing condition, showing the tee stem resting on the ledger with a dimension line calling out '2.5 in AS-ERECTED (FIELD MEASURED)' pointing directly at the bearing surface. Nearby, a separate dimension line calls out '3.5 in (CONTRACT DOCUMENT DETAIL)' referencing the original design bearing length on the same detail, and a third callout shows the edge distance dimension unrelated to bearing length, and a fourth callout shows the tee stem width dimension unrelated to bearing length.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.45,
        "y": 0.55,
        "w": 0.12,
        "h": 0.08
      },
      {
        "id": "z2",
        "x": 0.2,
        "y": 0.3,
        "w": 0.12,
        "h": 0.08
      },
      {
        "id": "z3",
        "x": 0.75,
        "y": 0.55,
        "w": 0.1,
        "h": 0.08
      },
      {
        "id": "z4",
        "x": 0.45,
        "y": 0.8,
        "w": 0.1,
        "h": 0.08
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the '2.5 in AS-ERECTED' callout: this is the actual field-measured bearing length that must be checked against the required minimum, not simply the contract document value or unrelated dimensions like edge distance or stem width. The theory is explicit that a bearing question is never just what the code table says, it is whether the actual as-built condition satisfies the requirement, so the field-measured dimension is the number the EOR must analyze.",
    "image": "question_images/q_10001.png",
    "domain": "conceptual_design_project_planning_and_documentation",
    "scenario_id": 100,
    "scenario_title": "Precast Bearing Deficiency RFI and Engineer of Record Review",
    "scenario_text": "A precast double-tee parking structure has typical tee-to-ledger beam connections detailed for 3.5 in of bearing per the contract documents, matching the PCI Design Handbook minimum for the seat width and edge distance used on this project. During erection, the contractor submits an RFI reporting that 40 of the 120 typical connections, all located in the Level 2 structure on gridlines D through F, were erected with only 2.5 in of measured field bearing due to a fabrication tolerance stack-up at the precast plant. The remaining 80 connections on gridlines A through C measured within the detailed 3.5 in. The contractor asks the engineer of record to approve the as-erected condition so erection of Level 3 can continue on schedule."
  },
  {
    "id": 10002,
    "type": "point_and_click",
    "question": "Click the location on the general notes sheet where the minimum bearing length requirement for precast connections is stated.",
    "image_description": "A structural general notes sheet with four numbered note blocks arranged in a column: Note 3 'DESIGN LOADS AND APPLICABLE CODE EDITIONS', Note 7 'MINIMUM BEARING LENGTH FOR PRECAST CONCRETE ELEMENTS: 3.5 IN PER PCI DESIGN HANDBOOK RECOMMENDATIONS FOR THIS SEAT WIDTH AND EDGE DISTANCE', Note 9 'SPECIAL INSPECTION REQUIREMENTS', and Note 12 'CONCRETE MATERIAL STRENGTHS'.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.5,
        "y": 0.2,
        "w": 0.4,
        "h": 0.1
      },
      {
        "id": "z2",
        "x": 0.5,
        "y": 0.4,
        "w": 0.4,
        "h": 0.12
      },
      {
        "id": "z3",
        "x": 0.5,
        "y": 0.62,
        "w": 0.4,
        "h": 0.1
      },
      {
        "id": "z4",
        "x": 0.5,
        "y": 0.82,
        "w": 0.4,
        "h": 0.1
      }
    ],
    "correct": "z2",
    "explanation": "The correct answer is Note 7, which states the 3.5 in minimum bearing length requirement that the field-measured 2.5 in condition falls short of. General notes carry information that is repetitive or impossible to show on every detail, and recognizing which note governs a specific field condition, rather than confusing it with unrelated notes on loads, inspection, or material strength, is a real drawing-interpretation skill this domain tests.",
    "image": "question_images/q_10002.png",
    "domain": "conceptual_design_project_planning_and_documentation",
    "scenario_id": 100,
    "scenario_title": "Precast Bearing Deficiency RFI and Engineer of Record Review",
    "scenario_text": "A precast double-tee parking structure has typical tee-to-ledger beam connections detailed for 3.5 in of bearing per the contract documents, matching the PCI Design Handbook minimum for the seat width and edge distance used on this project. During erection, the contractor submits an RFI reporting that 40 of the 120 typical connections, all located in the Level 2 structure on gridlines D through F, were erected with only 2.5 in of measured field bearing due to a fabrication tolerance stack-up at the precast plant. The remaining 80 connections on gridlines A through C measured within the detailed 3.5 in. The contractor asks the engineer of record to approve the as-erected condition so erection of Level 3 can continue on schedule."
  },
  {
    "id": 10003,
    "type": "point_and_click",
    "question": "On the Level 2 framing plan, click the group of bays that must be individually evaluated and documented for the bearing deficiency, based on where the deficient connections were actually reported.",
    "image_description": "A Level 2 framing plan on gridlines A through F and 1 through 6, showing double-tee bays spanning between ledger beams. Bays between gridlines A-C are shaded one color labeled 'measured at 3.5 in, no deficiency'. Bays between gridlines D-F are shaded a different color labeled 'reported deficient, field measured 2.5 in'. A separate callout box off to the side lists 'Level 3 (not yet erected)' as unrelated to this plan.",
    "hotzones": [
      {
        "id": "z1",
        "x": 0.72,
        "y": 0.5,
        "w": 0.22,
        "h": 0.4
      },
      {
        "id": "z2",
        "x": 0.28,
        "y": 0.5,
        "w": 0.22,
        "h": 0.4
      },
      {
        "id": "z3",
        "x": 0.5,
        "y": 0.9,
        "w": 0.3,
        "h": 0.08
      }
    ],
    "correct": "z1",
    "explanation": "The correct answer is the D-F bay group, the specific 40 connections actually reported as deficient at 2.5 in of bearing. The A-C bays measured within the required 3.5 in and need no individual evaluation, and Level 3 has not yet been erected, so it is not part of this deficiency at all. The theory warns that a fix applied going forward does not resolve units already built, so each already-erected deficient connection in the D-F group needs its own evaluation and documented resolution, not a blanket statement about the connection detail in general.",
    "image": "question_images/q_10003.png",
    "domain": "conceptual_design_project_planning_and_documentation",
    "scenario_id": 100,
    "scenario_title": "Precast Bearing Deficiency RFI and Engineer of Record Review",
    "scenario_text": "A precast double-tee parking structure has typical tee-to-ledger beam connections detailed for 3.5 in of bearing per the contract documents, matching the PCI Design Handbook minimum for the seat width and edge distance used on this project. During erection, the contractor submits an RFI reporting that 40 of the 120 typical connections, all located in the Level 2 structure on gridlines D through F, were erected with only 2.5 in of measured field bearing due to a fabrication tolerance stack-up at the precast plant. The remaining 80 connections on gridlines A through C measured within the detailed 3.5 in. The contractor asks the engineer of record to approve the as-erected condition so erection of Level 3 can continue on schedule."
  },
  {
    "id": 10004,
    "type": "drag_and_drop_order",
    "question": "Arrange the engineer of record's proper steps for responding to this RFI in the correct order.",
    "items": [
      {
        "id": "s1",
        "text": "Obtain the actual field-measured bearing length and edge distance for each of the 40 affected connections"
      },
      {
        "id": "s2",
        "text": "Perform an as-built capacity calculation for the reduced 2.5 in bearing condition, checking for local crushing and spalling under eccentric bearing"
      },
      {
        "id": "s3",
        "text": "Determine and document, in writing, whether each as-erected connection is structurally acceptable, and specify any supplemental repair where it is not"
      },
      {
        "id": "s4",
        "text": "Revise the connection detail as needed for any remaining, not-yet-erected connections to prevent recurrence"
      }
    ],
    "correct": [
      "s1",
      "s2",
      "s3",
      "s4"
    ],
    "explanation": "The correct order is obtaining the field measurements first, then calculating actual as-built capacity, then documenting acceptability in writing with any needed repair, then revising the detail going forward. Approving the change simply to keep the schedule moving, without first performing and documenting an actual capacity calculation, exposes the EOR and the public to real risk, and revising only the forward-looking detail without addressing the 40 already-erected connections leaves those units unresolved.",
    "domain": "conceptual_design_project_planning_and_documentation",
    "scenario_id": 100,
    "scenario_title": "Precast Bearing Deficiency RFI and Engineer of Record Review",
    "scenario_text": "A precast double-tee parking structure has typical tee-to-ledger beam connections detailed for 3.5 in of bearing per the contract documents, matching the PCI Design Handbook minimum for the seat width and edge distance used on this project. During erection, the contractor submits an RFI reporting that 40 of the 120 typical connections, all located in the Level 2 structure on gridlines D through F, were erected with only 2.5 in of measured field bearing due to a fabrication tolerance stack-up at the precast plant. The remaining 80 connections on gridlines A through C measured within the detailed 3.5 in. The contractor asks the engineer of record to approve the as-erected condition so erection of Level 3 can continue on schedule."
  },
  {
    "id": 10005,
    "type": "drag_and_drop_position",
    "question": "Drag each party label to the responsibility that correctly belongs to them in resolving this precast bearing deficiency.",
    "image_description": "A simple responsibility chart with four labeled boxes in a row: 'Precast Fabricator', 'Erection Contractor', 'Engineer of Record', and 'Special Inspector', each with an empty drop target beneath it.",
    "drag_items": [
      {
        "id": "d1",
        "label": "Caused the fabrication tolerance stack-up that produced the reduced bearing, a means and methods and fabrication issue"
      },
      {
        "id": "d2",
        "label": "Reported the field condition through the RFI and requested continued erection approval"
      },
      {
        "id": "d3",
        "label": "Determines whether the as-erected condition is structurally acceptable and documents that determination, regardless of who caused the deviation"
      },
      {
        "id": "d4",
        "label": "Verifies and reports field-measured dimensions as part of the special inspection record for the EOR to review"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.15,
        "y": 0.5,
        "w": 0.18,
        "h": 0.1
      },
      {
        "id": "z2",
        "x": 0.4,
        "y": 0.5,
        "w": 0.18,
        "h": 0.1
      },
      {
        "id": "z3",
        "x": 0.629,
        "y": 0.5,
        "w": 0.18,
        "h": 0.1
      },
      {
        "id": "z4",
        "x": 0.8210000000000001,
        "y": 0.45,
        "w": 0.16,
        "h": 0.1
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3",
      "z4": "d4"
    },
    "explanation": "The correct answer places fabrication tolerance error with the precast fabricator, the RFI submission with the erection contractor, the acceptability determination and written documentation with the engineer of record, and field verification reporting with the special inspector. The theory is explicit that the EOR's construction administration duties do not transfer to the contractor just because the root cause was a fabrication or field tolerance issue, the EOR remains the party who must determine and document structural acceptability.",
    "image": "question_images/q_10005.png",
    "domain": "conceptual_design_project_planning_and_documentation",
    "scenario_id": 100,
    "scenario_title": "Precast Bearing Deficiency RFI and Engineer of Record Review",
    "scenario_text": "A precast double-tee parking structure has typical tee-to-ledger beam connections detailed for 3.5 in of bearing per the contract documents, matching the PCI Design Handbook minimum for the seat width and edge distance used on this project. During erection, the contractor submits an RFI reporting that 40 of the 120 typical connections, all located in the Level 2 structure on gridlines D through F, were erected with only 2.5 in of measured field bearing due to a fabrication tolerance stack-up at the precast plant. The remaining 80 connections on gridlines A through C measured within the detailed 3.5 in. The contractor asks the engineer of record to approve the as-erected condition so erection of Level 3 can continue on schedule."
  },
  {
    "id": 10006,
    "type": "drag_and_drop_position",
    "question": "Drag each project action to the stage of the project where it belongs given the distinction between connections already erected and connections not yet built.",
    "image_description": "Two labeled stage boxes side by side: 'Already-Erected D-F Connections (40 total)' and 'Remaining Not-Yet-Built Connections (Level 3 and above)', each with two empty drop targets stacked beneath it.",
    "drag_items": [
      {
        "id": "d1",
        "label": "As-built capacity calculation for the 2.5 in bearing condition"
      },
      {
        "id": "d2",
        "label": "Written EOR determination and any supplemental repair sketch for the affected units"
      },
      {
        "id": "d3",
        "label": "Revised bearing detail with additional tolerance allowance to prevent recurrence"
      },
      {
        "id": "d4",
        "label": "Updated special inspection checklist confirming the revised detail is met going forward"
      }
    ],
    "drop_zones": [
      {
        "id": "z1",
        "x": 0.25,
        "y": 0.35,
        "w": 0.3,
        "h": 0.1
      },
      {
        "id": "z2",
        "x": 0.25,
        "y": 0.65,
        "w": 0.3,
        "h": 0.1
      },
      {
        "id": "z3",
        "x": 0.6,
        "y": 0.3,
        "w": 0.3,
        "h": 0.1
      },
      {
        "id": "z4",
        "x": 0.6,
        "y": 0.6,
        "w": 0.3,
        "h": 0.1
      }
    ],
    "correct": {
      "z1": "d1",
      "z2": "d2",
      "z3": "d3",
      "z4": "d4"
    },
    "explanation": "The correct answer places the as-built capacity calculation and the written determination or repair sketch with the already-erected units, since those 40 connections need their own individual evaluation and documented resolution. The revised detail and the updated inspection checklist belong with the remaining not-yet-built connections, since revising the detail going forward is necessary but not sufficient and does not by itself resolve the units already in place.",
    "image": "question_images/q_10006.png",
    "domain": "conceptual_design_project_planning_and_documentation",
    "scenario_id": 100,
    "scenario_title": "Precast Bearing Deficiency RFI and Engineer of Record Review",
    "scenario_text": "A precast double-tee parking structure has typical tee-to-ledger beam connections detailed for 3.5 in of bearing per the contract documents, matching the PCI Design Handbook minimum for the seat width and edge distance used on this project. During erection, the contractor submits an RFI reporting that 40 of the 120 typical connections, all located in the Level 2 structure on gridlines D through F, were erected with only 2.5 in of measured field bearing due to a fabrication tolerance stack-up at the precast plant. The remaining 80 connections on gridlines A through C measured within the detailed 3.5 in. The contractor asks the engineer of record to approve the as-erected condition so erection of Level 3 can continue on schedule."
  }
];
