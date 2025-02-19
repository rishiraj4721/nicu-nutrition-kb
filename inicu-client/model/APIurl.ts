export class APIurl {
  url : string;
  testUrl : string;
  getDashboard : string;
  getNotifications : string;
  dashboardExportCsv : string;
  getDashboardVitalDetail : string;
  userList : string;
  getRoles : string;
  setRoleStatus : string;
  setStatus : string;
  addUser : string;
  getBedData : string;
  addRoom : string;
  deleteRoom : string;
  changeBedRoomNo : string;
  deleteBed : string;
  addBed : string;
  getUsageAnalytics : string;
  getSinSheetData : string;
  getQIData : string;
  getAnalyticsUsage :string;
  getSystemicReport : string;
  getDischargedPatients : string;
  listMedicine : string;
  deleteMedicine : string;
  addMedicine : string;
  getEmptyAdvanceAdmissionForm : string;
  getNursingNotes : string;
  setNursingNotes : string;
  getProcedures : string;
  saveProcedures : string;
  admissionFormDropDowns : string;
  getDistrictList : string;
  getAddressList : string;
  validateUhid : string;
  submitAdvanceAdmissionForm : string;
  getAdvanceAdmissionForm : string;
  getChildData : string;
  getFentonCentile : string;
  getDischargeSummary : string;
  getcmData : string;
  getGrowthChart : string;
  saveDischargedSummary : string;
  getFeedDropdownData : string;
  getTpnFeed : string;
  addTpnFeed : string;
  getDropdown : string;
  getPrescription : string;
  addPrescription : string;
  deletePrescription : string;
  editPrescription : string;
  exportPrescriptionCSV : string;
  setDataJaundice : string;
  saveJaundice : string;
  getJaundiceInvestigationsRecd : string;
  getBind : string;
  setBind : string;
  getAssessmentPrintData : string;
  setDataCns : string;
  saveCns : string;
  getSilvermanScore : string;
  getDownesScore : string;
  saveDownesScore : string;
  saveResp : string;
  setDataInfection : string;
  getBell : string;
  getStableNotes : string;
  saveStableNotes : string;
  setDataMiscellaneous : string;
  deleteBabyPrescription: string;
  setBell : string;
  saveInfection : string;
  getSettingReference : string;
  login : string;
  saveNursingOrder : string;
  getDoctorNotesPrintData : string;
  saveMiscellaneous : string;
  saveMiscellaneous2 : string;
  getOutcome : string;
  saveOutcome : string;
  setBabyVisit : string;
  getDailyProgress : string;
  getNursingVitalPrint : string;
  getNursingDropdown : string;
  getNursingData : string;
  setNursingData : string;
  getBabyBloodGasInfoBySampleId : string;
  setNursingEpisode : string;
  saveNursingIntakeOutput : string;
  getNursingIntakeOutput : string;
  getDataResp : string;
  getDropDowns : string;
  weightTracking : string;
  saveWeigthTracking : string;
  getMandatoryFormData : string;
  saveMandatoryData : string;
  getDropDownsAdmission : string;
  getAdvanceAdmissionFormReadmit : string;
  getTestsDetails : string;
  mapTests : string;
  addInicuTest : string;
  getSetting: string;
  registerDevice: string;
  connectRegisteredDevice : string;
  getDeviceExceptions : string;
  deleteBox : string;
  editBoxDetails: string;
  addSetting : string;
  addBoard : string;
  getInicuDevice : string;
  addbeaglebone : string;
  deleteboard : string;
  saveBoxDetails : string;
  generateBoxDetails: string;
  addRegisteredDevice : string;
  getDashboardVitalDetailByUhid : string;
  logo : string;
  getNursingMedication : string;
  saveNursingMedication : string;
  saveNursingBloodProduct : string;
  getNursingEventPrint : string;
  getNursingVentilatorPrint : string;
  getNursingBGPrint : string;
  getNursingIntakeOutputPrint : string;
  getLabOrders : string;
  sendSample : string;
  setDoctorNotesData : string;
  getNeurological : string;
  saveNeurological : string;
  getScreeningNeurologicalPrint : string;
  getHearing : string;
  saveHearing : string;
  getScreeningHearingPrint : string;
  getRop : string;
  saveRop : string;
  getScreeningRopPrint : string;
  getUSG : string;
  saveUSG : string;
  getScreeningUSGPrint : string;
  getMetabolic : string;
  saveMetabolic : string;
  getScreeningMetabolicPrint : string;
  getDeviceHeartBeatUsingFromTo : string;
  disconnectInicuDevice : string;
  addDevice : string;
  addSettingPreference : string;
  disconnectDevice : string;
  getDeviceInfo : string;
  getTestsListMappedUHID : string;
  getInvestigationsOrdered : string;
  getTestItemsList : string;
  getTestsData : string;
  getTestsListMapped : string;
  getGraphData : string;
  getBabyVideo : string;
  getDoctorOrder : string;
  getEmailData : string;
  saveEmailData : string;
  getVitalInfoByDate : string;
  getVentilatorInfoByDate : string;
  getAnalyticsUsageGraph : string;
  getNursingOutputData : string;
  getDailyProgressNotes : string;
  setDailyProgressNotes : string;
  getDoctorOrders : string;
  setMedicationPreparation : string;
  getDoctorBloodProducts : string;
  setDoctorBloodProducts : string;
  saveNursingHeplock : string;
  getVitalData : string;
  stopMedication : string;
  getDoctorTasks : string;
  getNewDoctorTasks : string;
  saveDoctorTasks : string;
  getNurseTasks : string;
  saveNurseTasks : string;
  addBrand : string;
  getAssessmentsStatus : string;
  getOccupancyData : string;
  getExportOccupancy : string;
  editUhid : string;
  getBabyImage : string;
  saveBabyImage: string;
  getBloodBagImage : string;
  saveBloodBagImage: string;
  saveInvestigationPanel : string;
  deleteInvestigationPanel : string;
  editInvestigationPanel : string;
  addHelplineNumbers : string;
  setNursingPrintFormat : string;
  getNursingOuputParameters : string;
  setNursingOutputParameters : string;

  constructor() {
    this.url = 'http://localhost:8383';
    // this.url = 'http://104.211.89.1:9000';
    this.testUrl = 'http://'+location.hostname + ':'+ location.port;
  	this.getDashboard = this.url + '/inicu/getDashboard';
  	this.getNotifications = this.url + '/inicu/getNotifications';
    this.dashboardExportCsv = this.url + '/inicu/exportCsv';
    this.getDashboardVitalDetail = this.url + '/inicu/getDashboardVitalDetail';
  	this.getDischargedPatients = this.url + '/inicu/getDischargedPatients';
  	this.userList = this.url + '/inicu/userList/';
  	this.getRoles = this.url + '/inicu/getRoles/';
  	this.setRoleStatus = this.url + '/inicu/setRoleStatus';
  	this.setStatus = this.url + '/inicu/setStatus';
  	this.addUser = this.url + '/inicu/addUser';

    this.getBedData = this.url +'/inicu/getBedData/test/';
    this.addRoom = this.url + '/inicu/addRoom/';
    this.changeBedRoomNo = this.url +'/inicu/bed/changeBedRoomNo/';
    this.deleteBed = this.url + '/inicu/deleteBed/';
    this.addBed = this.url + '/inicu/addBed/';
    this.deleteRoom = this.url +'/inicu/deleteRoom/';

    this.getUsageAnalytics = this.url +'/inicu/getUsageAnalytics/test';
    this.getSinSheetData = this.url +'/inicu/getSinSheetData/';
    this.getQIData = this.url +'/inicu/getQIData/';
    this.getAnalyticsUsage = this.url + '/inicu/getAnalyticsUsage/';
    this.getSystemicReport = this.url + '/inicu/getSystemicReport/';
    this.getVitalData = this.url + '/inicu/getVitalTracker/';

  	this.listMedicine = this.url + '/inicu/settings/listMedicine';
  	this.deleteMedicine = this.url + '/inicu/settings/deleteMedicine/';
  	this.addMedicine = this.url + '/inicu/settings/addMedicine/';
    this.addBrand = this.url + '/inicu/settings/addBrand/';

    this.getNursingNotes = this.url + '/inicu/getNursingNotes/';
    this.setNursingNotes = this.url + '/inicu/setNursingNotes/';
    this.getProcedures = this.url + '/inicu/getProcedures/';
    this.saveProcedures = this.url + '/inicu/saveProcedures/';
    this.getDischargeSummary = this.url + '/inicu/getDischargeSummary';
    this.saveDischargedSummary = this.url + '/inicu/saveDischargedSummary';
  	this.getFeedDropdownData = this.url + '/inicu/getNursingNotesDropDowns/';
    this.getTpnFeed = this.url + '/inicu/getTpnFeedDetails/';
    this.addTpnFeed = this.url + '/inicu/saveTpnFeedDetails/';
    this.getEmptyAdvanceAdmissionForm = this.url + '/inicu/getEmptyAdvanceAdmissionForm';
    this.admissionFormDropDowns = this.url + '/inicu/admissionFormDropDowns/';
    this.getDistrictList = this.url + '/inicu/getDistrictList';
    this.getAddressList = this.url + '/inicu/getAddressList';
    this.validateUhid = this.url + '/inicu/validateUhid';
    this.submitAdvanceAdmissionForm = this.url +'/inicu/submitAdvanceAdmissionForm/';
    this.getAdvanceAdmissionForm = this.url + '/inicu/getAdvanceAdmissionForm/';
    this.getChildData = this.url + '/inicu/getDashboardUser/';
    this.getFentonCentile = this.url + '/inicu/getFentonCentile/';

    this.getDropdown = this.url + '/inicu/getNursingNotesDropDowns/';
    this.getPrescription = this.url + '/inicu/getBabyPrescription/';
    this.addPrescription = this.url + '/inicu/addBabyPrescription/';
    this.deletePrescription = this.url + '/inicu/deleteBabyPrescription/';
    this.editPrescription = this.url + '/inicu/editBabyPrescription/';
    this.exportPrescriptionCSV = this.url + '/inicu/exportPrescriptionCSV/';
    this.stopMedication = this.url + '/inicu/stopMedication/';

	  this.getcmData = this.url + '/inicu/getDeviceGraphData/';
    this.getGrowthChart = this.url + '/inicu/growthChart/';

    this.setDataJaundice = this.url + '/sys/jaundice/';
    this.saveJaundice = this.url + '/sys/saveJaundice/';
    this.getJaundiceInvestigationsRecd = this.url + '/inicu/getJaundiceInvestigationsRecd/';
    this.getBind = this.url + '/inicu/getBindScore/';
    this.setBind = this.url + '/inicu/saveBindScore/';
    this.getAssessmentPrintData = this.url + '/inicu/printAssessmentModule/';

    this.setDataCns = this.url +'/sys/cns/';
    this.saveCns = this.url + '/sys/saveCns/';

    this.saveDischargedSummary = this.url + '/inicu/saveDischargedSummary';
    this.getSilvermanScore = this.url + '/inicu/getSilvermanScore/';
    this.getDownesScore = this.url + '/inicu/getDownesScore/';
    this.saveDownesScore = this.url + '/inicu/saveDownesScore/';
    this.saveResp = this.url + '/sys/saveResp/';

    this.setDataInfection = this.url + '/sys/infection/';
    this.getBell = this.url + '/inicu/getBellScore/';

    this.deleteBabyPrescription = this.url + '/inicu/deleteBabyPrescription';
    this.setBell = this.url + '/inicu/saveBellScore/';
    this.saveInfection = this.url + '/sys/saveInfect/';

    this.getSettingReference = this.url + '/inicu/getInicuSettingPresference';
    this.login = this.url + '/inicu/login';
    this.setDataMiscellaneous = this.url + '/sys/miscellaneous/';
    this.saveMiscellaneous = this.url + '/sys/saveMiscellaneous/';
    this.saveMiscellaneous2 = this.url + '/sys/saveMiscellaneous2/';

    this.getDoctorNotesPrintData = this.url + '/inicu/getDoctorNotesPrint';

    this.getOutcome = this.url + '/inicu/getDichargeOutCome/';
    this.saveOutcome = this.url + '/inicu/saveDichargeOutCome/';

    this.setBabyVisit = this.url + '/inicu/addBabyVisit/';
    this.getDailyProgress = this.url + '/inicu/getNursingDailyProgressInfo';

    this.getNursingVitalPrint = this.url + '/inicu/getNursingVitalPrint';
    this.getNursingEventPrint = this.url + '/inicu/getNursingEventPrint';
    this.getNursingVentilatorPrint = this.url + '/inicu/getNursingVentilatorPrint';
    this.getNursingBGPrint = this.url + '/inicu/getNursingBGPrint';
    this.getNursingIntakeOutputPrint = this.url + '/inicu/getNursingIntakeOutputPrint';
    this.getNursingDropdown = this.url + '/inicu/getNursingNotesDropDowns';
    this.getNursingData = this.url + '/inicu/getNursingObservationInfo';
    this.setNursingData = this.url + '/inicu/addNursingObservationInfo/';
    this.getBabyBloodGasInfoBySampleId = this.url + '/inicu/getBabyBloodGasInfoBySampleId';
    this.setNursingEpisode = this.url + '/inicu/saveNursingEpisode/';

    this.getStableNotes = this.url + '/inicu/getStableNotes/';
    this.saveStableNotes = this.url + '/inicu/saveStableNotes/';
    this.saveNursingIntakeOutput = this.url + '/inicu/saveNursingInputs/';
    this.getNursingIntakeOutput = this.url + '/inicu/getNursingInputs/';
    this.getDataResp = this.url + '/inicu/assessment/respSystem/';
    this.getDropDowns = this.url + '/inicu/getDoctorNotesDropDowns';
    this.weightTracking = this.url + '/inicu/getDashboardWeightTracking';
    this.saveWeigthTracking = this.url + '/inicu/saveDashboardWeightTracking';
    this.getMandatoryFormData = this.url + '/inicu/getMandatoryFormData/';
    this.saveMandatoryData = this.url + '/inicu/submitMandatoryForm/';
    this.getDropDownsAdmission = this.url + '/inicu/admissionFormDropDowns/';
    this.getAdvanceAdmissionFormReadmit = this.url + '/inicu/getAdvanceAdmissionFormReadmit';
    this.getTestsDetails = this.url + '/inicu/getTestsDetails/';
    this.mapTests = this.url + '/inicu/mapTests/';
    this.addInicuTest = this.url + '/inicu/addInicuTest/';

    this.setNursingOutputParameters = this.url + '/inicu/setNursingOutputParameters/';
    this.getSetting = this.url + '/inicu/settings/getsettingDetails/';
    this.registerDevice = this.url + '/inicu/getregisterDevice';
    this.getNursingOuputParameters = this.url + '/inicu/getNursingOuputParameters';
    this.connectRegisteredDevice =  this.url + '/inicu/connectRegisteredDevice/';
    this.getDeviceExceptions =  this.url + '/inicu/getDeviceExceptions/';
    this.editBoxDetails = this.url + '/inicu/editBox';
    this.deleteBox = this.url + '/inicu/deleteBox/';
    this.addSetting = this.url + '/inicu/settings/addSetting/';
    this.addBoard = this.url + 'inicu/addBoards';
    this.getInicuDevice = this.url + 'inicu/getInicuDevices';
    this.addbeaglebone = this.url + 'inicu/addboard';
    this.deleteboard = this.url + 'inicu/deleteBoard';
    this.saveBoxDetails =  this.url + '/inicu/saveNewBox';
    this.generateBoxDetails = this.url + '/inicu/generateBoxDetails';
    this.addRegisteredDevice = this.url + '/inicu/adddRegisteredDevice';
    this.logo = this.url + '/inicu/settings/savelogo';

    this.getDashboardVitalDetailByUhid = this.url + '/inicu/getDashboardVitalDetailByUhid/';

    this.getNursingMedication = this.url + '/inicu/getNursingMedication/';
    this.saveNursingMedication = this.url + '/inicu/saveNursingMedication/';
    this.saveNursingBloodProduct = this.url + '/inicu/saveNursingBloodProduct/';

    this.getLabOrders = this.url + '/inicu/getLabOrders/';
    this.sendSample = this.url + '/inicu/sentSample/';

    this.getNeurological = this.url + '/inicu/getNeurological/';
    this.saveNeurological = this.url + '/inicu/saveNeurological/';
    this.getScreeningNeurologicalPrint = this.url + '/inicu/getScreeningNeurologicalPrint/';
    this.getHearing = this.url + '/inicu/getHearing/';
    this.saveHearing = this.url + '/inicu/saveHearing/';
    this.getScreeningHearingPrint = this.url + '/inicu/getScreeningHearingPrint/';
    this.getRop = this.url + '/inicu/getRop/';
    this.saveRop = this.url + '/inicu/saveRop/';
    this.getScreeningRopPrint = this.url + '/inicu/getScreeningRopPrint/';
    this.getUSG = this.url + '/inicu/getUSG/';
    this.saveUSG = this.url + '/inicu/saveUSG/';
    this.getScreeningUSGPrint = this.url + '/inicu/getScreeningUSGPrint/';
	  this.getMetabolic = this.url + '/inicu/getMetabolic/';
    this.saveMetabolic = this.url + '/inicu/saveMetabolic/';
    this.getScreeningMetabolicPrint = this.url + '/inicu/getScreeningMetabolicPrint/';
    this.setDoctorNotesData = this.url + '/inicu/saveDoctorNotesData/';
    this.saveNursingOrder = this.url + '/inicu/getAssessmentNursingOrder/';
    this.getDeviceHeartBeatUsingFromTo = this.url + '/inicu/getDeviceHeartBeatUsingFromTo/';
    this.disconnectInicuDevice = this.url + '/inicu/disconnectInicuDevice/';
    this.addDevice = this.url + '/inicu/connectDevice/';
    this.addSettingPreference = this.url + '/inicu/getAddSettingPreference/';
    this.disconnectDevice = this.url + '/inicu/disconnectDevice';
    this.getDeviceInfo = this.url + '/inicu/getDeviceData';

    this.getTestsListMappedUHID = this.url + '/inicu/getTestsListUHID';
    this.getInvestigationsOrdered = this.url + '/inicu/getInvestigationsOrdered';
    this.getTestItemsList = this.url + '/inicu/getTestItemsList';
    this.getTestsData = this.url + '/inicu/getTestResults';
    this.getTestsListMapped = this.url + '/inicu/getTestsListMapped';
    this.getGraphData = this.url + '/inicu/getTestItemResults';
    this.getBabyVideo = this.url + '/inicu/getBabyVideo/';

    this.getDoctorOrder = this.url + '/inicu/getDoctorOrder/';
    this.getEmailData = this.url + '/inicu/getEmailData/';
    this.saveEmailData = this.url + '/inicu/saveEmailData/';
    this.getVitalInfoByDate = this.url + '/inicu/getVitalInfoByDate';
    this.getVentilatorInfoByDate = this.url + '/inicu/getVentilatorInfoByDate';
    this.getAnalyticsUsageGraph = this.url + '/inicu/getAnalyticsUsageGraph/';

    this.getNursingOutputData = this.url + '/inicu/getAllNursingData/';
    this.getDailyProgressNotes = this.url + '/inicu/getDailyProgressNotes/';
    this.setDailyProgressNotes = this.url + '/inicu/setDailyProgressNotes/';
    this.getDoctorOrders = this.url + '/inicu/getDoctorOrders/';
    this.setMedicationPreparation = this.url + '/inicu/setMedicationPreparation/';
    this.getDoctorBloodProducts = this.url + '/inicu/getDoctorBloodProducts/';
    this.setDoctorBloodProducts = this.url + '/inicu/setDoctorBloodProducts/';
    this.saveNursingHeplock = this.url + '/inicu/setNursingHeplock/';
    this.getDoctorTasks = this.url + '/inicu/getDoctorDailyTasks';
    this.getNewDoctorTasks = this.url + '/inicu/getNewDoctorDailyTasks';
    this.saveDoctorTasks = this.url + '/inicu/saveDoctorDailyTasks';
    this.getNurseTasks = this.url + '/inicu/getNurseDailyTasks';
    this.saveNurseTasks = this.url + '/inicu/saveNurseDailyTasks';
    this.getAssessmentsStatus = this.url + '/inicu/getAssessmentsStatus';
    this.getOccupancyData = this.url + '/inicu/getOccupancyData/';
    this.getExportOccupancy = this.url + '/inicu/getExportOccupancy/';
    this.editUhid = this.url + '/inicu/editUhid/';
    this.getBabyImage = this.url+ '/inicu/extractImage';
    this.saveBabyImage = this.url+ '/inicu/storeImage';
    this.getBloodBagImage = this.url+ '/inicu/extractImageForExchangeTransfusion';
    this.saveBloodBagImage = this.url+ '/inicu/storeImageForExchangeTransfusion';
    this.saveInvestigationPanel = this.url+ '/inicu/saveInvestigationPannel/';
    this.deleteInvestigationPanel = this.url+ '/inicu/deleteInvestigationPannel/';
    this.editInvestigationPanel = this.url+ '/inicu/editInvestigationPannel/';
   	this.addHelplineNumbers = this.url + '/inicu/addHelplineNumbers/';
    this.setNursingPrintFormat = this.url + '/inicu/setNursingPrintFormat';
    this.init();
  }
  init(){
    console.log('the hardcoded URL is');
    console.log(this.url);
    console.log('the fetched out URL is');
    console.log(this.testUrl);
  }
}
