import InfraData from './allCommitteeData/InfraData';
import WebData from './allCommitteeData/webData';
import FinanceData from './allCommitteeData/FinanceData';
import SocialMediaData from './allCommitteeData/SocialMediaData';
import PRHospitalityData from './allCommitteeData/PRHospitalityData';
import ManagerialData from './allCommitteeData/ManagerialData';

const committeeData = {
  "Infra and Think Tank": InfraData,
  "Web Development and Design": WebData,
  "Finance and Documentation": FinanceData,
  "Social Media and Cinematography": SocialMediaData,
  "Public Relation and Hospitality": PRHospitalityData,
  "Managerial": ManagerialData
};

export default committeeData;
