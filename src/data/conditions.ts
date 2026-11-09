export type Condition = {
  id: string;
  name: string;
  category: string;
};

export const conditions: Condition[] = [
  {
    id: "diabetes",
    name: "Diabetes",
    category: "Metabolic",
  },
  {
    id: "hypertension",
    name: "Hypertension",
    category: "Cardiovascular",
  },
  {
    id: "asthma",
    name: "Asthma",
    category: "Respiratory",
  },
  {
    id: "heart-disease",
    name: "Heart disease",
    category: "Cardiovascular",
  },
  {
    id: "kidney-disease",
    name: "Kidney disease",
    category: "Kidney",
  },
  {
    id: "arthritis",
    name: "Arthritis",
    category: "Musculoskeletal",
  },
  {
    id: "migraine",
    name: "Migraine",
    category: "Neurological",
  },
  {
    id: "epilepsy",
    name: "Epilepsy",
    category: "Neurological",
  },
  {
    id: "eczema",
    name: "Eczema",
    category: "Skin",
  },
  {
    id: "psoriasis",
    name: "Psoriasis",
    category: "Skin",
  },
  {
    id: "thyroid-disorder",
    name: "Thyroid disorder",
    category: "Endocrine",
  },
  {
    id: "cancer",
    name: "Cancer",
    category: "Oncology",
  },
];
