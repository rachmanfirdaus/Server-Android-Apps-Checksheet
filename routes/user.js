const express = require("express");
const router = express.Router();
const { handoverForm, initalShiftInspectionForm, productionParametersForm, materialsForm, productionResultsForm, imdRejectForm, totalResinUsageForm, dailyReportForm  } = require("../controller/form.controller");

router.post('/handover',handoverForm);
router.post('/initial-shift-inspection',initalShiftInspectionForm);
router.post('/production-parameters',productionParametersForm);
router.post('/material-used',materialsForm);
router.post('/production-results',productionResultsForm);
router.post('/imd-reject',imdRejectForm);
router.post('/total-resin-usage',totalResinUsageForm);
router.post('/daily-report',dailyReportForm);

module.exports = router;