import ajax from '../helper/ajax';
import urls from '../utils/urls';
const { API_URL } = urls;
const AUTH_API_PREFIX = 'aaa';
const CMS_API_PREFIX = 'cms';

export function fetchApiKeys(payload) {
  const url = `${API_URL}/${AUTH_API_PREFIX}/getApiKeys.json`;
  return ajax.get(url);
}

export function getLogin(payload) {
  const { email, password } = payload;
  const url = `${API_URL}/${AUTH_API_PREFIX}/login.json`;
  return ajax.get(url, { login: email, password, type: 'access-token' });
}

export function getSignup(payload) {
  const { email, password } = payload;
  const url = `${API_URL}/${AUTH_API_PREFIX}/signup.json`;
  return ajax.get(url, { signup: email, password });
}

export function fetchMetricsSkills(payload) {
  const { languageValue } = payload;
  const url = `${urls.API_URL}/cms/getSkillMetricsData.json`;
  return ajax.get(url, {
    language: languageValue,
  });
}

export function fetchLanguageOptions(payload) {
  console.log(payload, 'groupValue');
  const { groupValue } = payload;
  const url = `${urls.API_URL}/cms/getAllLanguages.json`;
  return ajax.get(url, { group: groupValue });
}

export function fetchGroupOptions() {
  const url = `${urls.API_URL}/cms/getGroups.json`;
  return ajax.get(url, {});
}

export function fetchSkills(payload) {
  // console.log(payload, "Payload api")
  const {
    groupValue,
    language,
    filterName,
    filterType,
    showReviewedSkills,
    showStaffPicks,
  } = payload;
  const url = `${API_URL}/${CMS_API_PREFIX}/getSkillList.json`;
  return ajax.get(url, {
    group: groupValue,
    // group: 'All',
    language: language,
    // language: ['en'],
    applyFilter: 'true',
    filter_name: filterName,
    // filter_name: "ascending",
    filter_type: filterType,
    // filter_type: '',
    reviewed: showReviewedSkills,
    // reviewed: false,
    // staff_picks: false,
    staff_picks: showStaffPicks,
  });
}
