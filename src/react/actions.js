export const SET_IS_SSR = "SET_IS_SSR";
export const SET_KASEGI_DATA = "SET_KASEGI_DATA";
export const SET_KASEGI_COMPARED_SKILL = "SET_KASEGI_COMPARED_SKILL";
export const SET_LIST_DATA = "SET_LIST_DATA";
export const SET_SKILL_DATA = "SET_SKILL_DATA";
export const SET_SKILL_SAVED_LIST = "SET_SKILL_SAVED_LIST";
export const SET_SKILL_COMPARED_SKILL = "SET_SKILL_COMPARED_SKILL";
export const SET_SAVED_SKILL_DATA = "SET_SAVED_SKILL_DATA";
export const SET_TEST = "SET_TEST";

export function setTest(value) {
  return { type: SET_TEST, value };
}

export function setIsSSR(value) {
  return { type: SET_IS_SSR, value };
}

export function setKasegiData(data) {
  return { type: SET_KASEGI_DATA, data };
}

export function setKasegiComparedSkill(data) {
  return { type: SET_KASEGI_COMPARED_SKILL, data };
}

export function setListData(data) {
  return { type: SET_LIST_DATA, data };
}

export function setSkillData(data) {
  return { type: SET_SKILL_DATA, data };
}

export function setSkillComparedSkill(data) {
  return { type: SET_SKILL_COMPARED_SKILL, data };
}

export function setSkillSavedList(data) {
  return { type: SET_SKILL_SAVED_LIST, data };
}

export function setSavedSkillData(data) {
  return { type: SET_SAVED_SKILL_DATA, data };
}
