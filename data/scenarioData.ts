export interface LocationNode {
  id: string;
  name: string;
  distanceMiles: number;
  x: number; // SVG canvas coordinate X
  y: number; // SVG canvas coordinate Y
  isHub?: boolean;
  driveTimeMins: number;
  trainOption?: {
    fare: number;
    taxiFare: number;
    totalCost: number;
    travelTimeMins: number;
    description: string;
  };
}

export interface PlanMetrics {
  vehicleMiles: number;
  paidRideTime: string; // e.g. "8h 40m"
  paidRideTimeMinutes: number;
  vehicleDriverTime: string; // e.g. "4h 20m"
  vehicleDriverTimeMinutes: number;
  handoversWaiting: string; // e.g. "3h 20m"
  handoversWaitingMinutes: number;
  totalPaidHours: string; // e.g. "20h 55m"
  totalPaidHoursDecimal: number;
  lastCarHome: string; // e.g. "12:55"
  totalCost: number; // e.g. 466.37
  routeSequence: string[];
  independentDrivers?: {
    locationId: string;
    locationName: string;
    mode: string;
    fare: number;
    taxiFare: number;
    totalCost: number;
    timeMins: number;
  }[];
}

export const HUB_LOCATION: LocationNode = {
  id: "birmingham",
  name: "Birmingham",
  distanceMiles: 0,
  x: 220,
  y: 330,
  isHub: true,
  driveTimeMins: 0,
};

export const DESTINATIONS: LocationNode[] = [
  {
    id: "coventry",
    name: "Coventry",
    distanceMiles: 20,
    x: 360,
    y: 340,
    driveTimeMins: 30,
  },
  {
    id: "rugby",
    name: "Rugby",
    distanceMiles: 33,
    x: 480,
    y: 320,
    driveTimeMins: 45,
  },
  {
    id: "leicester",
    name: "Leicester",
    distanceMiles: 42,
    x: 490,
    y: 200,
    driveTimeMins: 55,
    trainOption: {
      fare: 22,
      taxiFare: 9,
      totalCost: 31,
      travelTimeMins: 65,
      description: "Direct train from BHM New St + 8 min taxi",
    },
  },
  {
    id: "northampton",
    name: "Northampton",
    distanceMiles: 52,
    x: 580,
    y: 370,
    driveTimeMins: 65,
  },
  {
    id: "milton_keynes",
    name: "Milton Keynes",
    distanceMiles: 72,
    x: 670,
    y: 430,
    driveTimeMins: 80,
  },
];

export const ALL_LOCATIONS = [HUB_LOCATION, ...DESTINATIONS];

export const CURRENT_PLAN: PlanMetrics = {
  vehicleMiles: 178,
  paidRideTime: "8h 40m",
  paidRideTimeMinutes: 520,
  vehicleDriverTime: "4h 20m",
  vehicleDriverTimeMinutes: 260,
  handoversWaiting: "3h 20m",
  handoversWaitingMinutes: 200,
  totalPaidHours: "20h 55m",
  totalPaidHoursDecimal: 20.91,
  lastCarHome: "12:55",
  totalCost: 466.37,
  routeSequence: [
    "birmingham",
    "coventry",
    "leicester",
    "rugby",
    "northampton",
    "milton_keynes",
    "birmingham",
  ],
};

export const OPTIMISED_PLAN: PlanMetrics = {
  vehicleMiles: 145,
  paidRideTime: "6h 05m",
  paidRideTimeMinutes: 365,
  vehicleDriverTime: "3h 30m",
  vehicleDriverTimeMinutes: 210,
  handoversWaiting: "2h 05m",
  handoversWaitingMinutes: 125,
  totalPaidHours: "16h 15m",
  totalPaidHoursDecimal: 16.25,
  lastCarHome: "11:50",
  totalCost: 408.84,
  routeSequence: [
    "birmingham",
    "coventry",
    "rugby",
    "northampton",
    "milton_keynes",
    "birmingham",
  ],
  independentDrivers: [
    {
      locationId: "leicester",
      locationName: "Leicester",
      mode: "Train + Taxi",
      fare: 22,
      taxiFare: 9,
      totalCost: 31,
      timeMins: 65,
    },
  ],
};

export const SAVINGS_SUMMARY = {
  costSaved: 57.53,
  percentageSaved: 12.3,
  hoursSaved: "4h 40m",
  milesSaved: 33,
  timeEarlier: "1h 05m",
};

export const COST_BREAKDOWN = [
  {
    name: "Paid time sitting in vehicle",
    percentage: 34,
    color: "#6366F1", // Indigo
    description: "Drivers traveling as passengers waiting for their drop-off point.",
  },
  {
    name: "Waiting at sellers",
    percentage: 26,
    color: "#F59E0B", // Amber
    description: "Drivers standing by while sellers locate keys, paperwork, or clear access.",
  },
  {
    name: "Wasted / failed journeys",
    percentage: 17,
    color: "#F43F5E", // Rose
    description: "Seller unprepared, incorrect car details, or missing documents on arrival.",
  },
  {
    name: "Outlying cars",
    percentage: 13,
    color: "#8B5CF6", // Purple
    description: "Isolated collection locations forcing multi-mile route detours.",
  },
  {
    name: "Vehicle returning empty",
    percentage: 7,
    color: "#64748B", // Slate
    description: "Positioning shuttle running empty legs after dropping final driver.",
  },
  {
    name: "Planning time",
    percentage: 3,
    color: "#0EA5E9", // Sky
    description: "Manual dispatcher time spent mapping routes and making phone calls.",
  },
];

export const CORE_INSIGHT_SPLIT = {
  fixedPercentage: 28,
  fixedLabel: "Fixed Return Distance",
  fixedDesc: "Distance driven once the car is purchased and returning directly to hub.",
  controllablePercentage: 72,
  controllableLabel: "Controllable Positioning & Waste",
  controllableDesc: "Passenger travel, waiting time, routing detours, and failed collection trips.",
};

export const LEICESTER_DECISION = {
  keepOnVehicle: {
    title: "Keep Leicester on Shuttle Route",
    additionalMiles: 33,
    additionalMilesCost: 19.8,
    additionalRideTimeMins: 115,
    additionalPaidTimeCost: 66.06,
    totalCost: 85.86,
    reasons: [
      "Forces 33 extra shuttle miles to loop north to Leicester",
      "Adds 115 driver-minutes of paid passenger sitting time",
      "Delays final collections at Northampton & MK by 45 mins",
    ],
  },
  sendSeparately: {
    title: "Send Leicester Driver Independently",
    trainFare: 22.0,
    taxiFare: 9.0,
    travelTimeMins: 65,
    driverHourlyRate: 16.0,
    driverTimeCost: 17.33, // 65/60 * £16
    totalCost: 48.33,
    netSavings: 37.53,
    reasons: [
      "Direct 65-minute train + short taxi from Birmingham",
      "Frees shuttle to take optimal south-east corridor (Coventry → Rugby → MK)",
      "Reduces total paid hours across all 6 drivers by 4h 40m",
    ],
  },
};

export const MATH_FORMULATION = {
  objective: "min Z = ∑ (c_hourly * T_driver) + ∑ (c_mile * M_shuttle) + ∑ (c_transit * K_transit) + ∑ (c_hold * H_car)",
  explanation: `
  Where:
  - T_driver: Total paid hours per driver (including transit, waiting, driving, and handovers)
  - M_shuttle: Total vehicle positioning miles for the primary transport shuttle
  - K_transit: Direct out-of-pocket public transit fares (train, taxi, rideshare)
  - H_car: Operational holding cost if collection is deferred to a future slot

  Subject to operational constraints:
  1. Seller Readiness Window: Arrival time t_i ∈ [Early_i, Late_i]
  2. Driver Shift Limits: Total elapsed time T_d ≤ 9.0 hours
  3. Vehicle Capacity: Shuttle passenger seats ≤ 6 drivers
  4. Mode Availability: Transit fare K_i available iff public link time ≤ 90 mins
  `,
};

export const PRODUCT_MODULES = [
  {
    id: "collections",
    title: "Collections & Sellers",
    desc: "Real-time seller readiness tracking, automated slot reconfirmation, and photo document checks before driver dispatch.",
    badge: "Operational Live View",
  },
  {
    id: "planner",
    title: "Dynamic Optimisation Engine",
    desc: "Multi-modal journey solver evaluating multi-driver shuttles vs train/taxi options in real time based on live traffic.",
    badge: "Core Engine",
  },
  {
    id: "exceptions",
    title: "Exception Handler",
    desc: "Automated instant re-routing and fallback dispatch when sellers delay or vehicles encounter breakdown.",
    badge: "Automated Control",
  },
  {
    id: "analytics",
    title: "Cost & Unit Economics",
    desc: "Granular dashboard tracking cost-per-collection, waiting time percentage, and driver travel mode performance.",
    badge: "Executive Insights",
  },
];

export const ROADMAP_PHASES = [
  {
    phase: "PHASE 1",
    title: "Process & Readiness",
    points: [
      "Digital collection requests",
      "Seller SMS slot confirmation",
      "Driver pre-departure checklist",
      "Actual time-on-site capture",
    ],
  },
  {
    phase: "PHASE 2",
    title: "Engine & Comparison",
    points: [
      "Travel-time API integration",
      "Multi-modal optimisation solver",
      "Side-by-side plan comparison",
      "Collection cost breakdown visibility",
    ],
  },
  {
    phase: "PHASE 3",
    title: "Live Operations & Replanning",
    points: [
      "Live driver GPS tracking",
      "Dynamic seller ETAs",
      "Real-time exception handling",
      "Mid-route shift replanning",
    ],
  },
  {
    phase: "PHASE 4",
    title: "Predictive Intelligence",
    points: [
      "Seller reliability scoring model",
      "Automated photo/document checks",
      "Dynamic fleet hold vs collect predictions",
      "CarPlanet ERP API integration",
    ],
  },
];
