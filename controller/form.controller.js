const Handover = require("../models/handover.model");
const initalShiftInspection = require("../models/initialshiftinspection.model");
const productionParameters = require("../models/productionparameters.model");
const Materials = require("../models/materials.model");
const productionResults = require("../models/productionresults.model");
const imdReject = require("../models/imdreject.model");
const totalResinUsage = require("../models/totalresinusage.model");
const dailyReport = require("../models/dailyreport.model");
//-------------------------------Handover Form-----------------------------------------------
exports.handoverForm = async function(req, res) {
    const {operatorname,machine,lineproduction,tanggal,shift} = req.body;

    const handover = new Handover({
        operatorname: operatorname,
        machine: machine,
        lineproduction: lineproduction,
        tanggal: tanggal,
        shift: shift
    });

    handover.save();

    return(res.status(201).json({
        status: true,
        message: "Form handover has been submit"
    }))
}
//------------------------------Initial Shift Inspection-------------------------------------
exports.initalShiftInspectionForm = async function(req, res) {
    const {operatorname, shift, leveloilgbdropdown,  stateleveloilgbtext,  noteleveloilgbtext, leveloilhydraulicdropdown,
           stateleveloilhydraulictext, noteleveloilhydraulictext, dehumudifierdropdown, statedehumudifiertext,
           tempdehumudifiertext, dpdehumudifiertext, regdehumudifiertext,  capcoolerdropdown, statecapcoolertext, 
           valblowertext,  valmotorcapcoolertext,  unscrambledropdown,  stateunscrambletext,  imdcameradropdown,
           stateimdcameratext, coolingchillerdropdown,  statecoolingchillertext, intempcoolingchillertext, 
           inpresscoolingchillertext,  towerdropdown, statetower,  intemptower, inpresstower} = req.body;

    const initalShift = new initalShiftInspection({
        operatorname: operatorname,
        shift: shift,
        leveloilgbdropdown: leveloilgbdropdown,
        stateleveloilgbtext:  stateleveloilgbtext,
        noteleveloilgbtext:  noteleveloilgbtext,
        leveloilhydraulicdropdown: leveloilhydraulicdropdown,
        stateleveloilhydraulictext:  stateleveloilhydraulictext,
        noteleveloilhydraulictext: noteleveloilhydraulictext,
        dehumudifierdropdown: dehumudifierdropdown,
        statedehumudifiertext:  statedehumudifiertext,
        tempdehumudifiertext:   tempdehumudifiertext,
        dpdehumudifiertext: dpdehumudifiertext,
        regdehumudifiertext: regdehumudifiertext,
        capcoolerdropdown:  capcoolerdropdown,
        statecapcoolertext: statecapcoolertext,
        valblowertext:  valblowertext,
        valmotorcapcoolertext:  valmotorcapcoolertext,
        unscrambledropdown:  unscrambledropdown,
        stateunscrambletext:  stateunscrambletext,
        imdcameradropdown:  imdcameradropdown,
        stateimdcameratext:   stateimdcameratext,
        coolingchillerdropdown: coolingchillerdropdown,
        statecoolingchillertext:  statecoolingchillertext,
        intempcoolingchillertext:   intempcoolingchillertext,
        inpresscoolingchillertext: inpresscoolingchillertext,
        towerdropdown: towerdropdown,
        statetower: statetower,
        intemptower: intemptower,
        inpresstower: inpresstower


    });

    initalShift.save();

    return(res.status(201).json({
        status: true,
        message: "Initial shift inspection form has been submit"
    }))
}

//------------------------------Production Parameters----------------------------------------

exports.productionParametersForm = async function(req, res) {
    const {operatorname,shift,  parameterproduksichoice, valactual1hours,  valactual2hours,  valactual3hours, valactual4hours,
           valactual5hours,   valactual6hours,  valactual7hours,  valactual8hours   } = req.body;

    const prodParameters = new productionParameters({
        operatorname: operatorname,
        shift: shift,
        parameterproduksichoice:  parameterproduksichoice,
        valactual1hours:  valactual1hours,
        valactual2hours:  valactual2hours,
        valactual3hours:  valactual3hours,
        valactual4hours:  valactual4hours,
        valactual5hours:  valactual5hours,
        valactual6hours:  valactual6hours, 
        valactual7hours:  valactual7hours,
        valactual8hours:  valactual8hours,

    });

    prodParameters.save();

    return(res.status(201).json({
        status: true,
        message: "Production parameters form has been submit"
    }))
}

//------------------------------Materials ---------------------------------------------------
exports.materialsForm = async function(req, res) {
    const {operatorname, shift, materialused, kodetext, spectext,weightmattext, tanggal,  notetext} = req.body;

    const materialMain = new Materials({
        operatorname: operatorname,
        shift: shift,
        materialused: materialused,
        kodetext:  kodetext,
        spectext: spectext,
        weightmattext:  weightmattext,
        tanggal: tanggal,
        notetext : notetext
        
    });

    materialMain.save();

    return(res.status(201).json({
        status: true,
        message: "Materials form has been submit"
    }))
}


//------------------------------Production Results ----------------------------------------
exports.productionResultsForm = async function(req, res) {
    const {operatorname,shift, prodresult, qtytotalcaptext, weighttotalcaptext,  prodresult2, qtygoodcaptext,
           weightgoodcaptext, prodresult3, qtyrejectpurgingcaptext,  weighrejectpurgingvaltext, prodresult4,
           qtyrejectimdvaltext, weighrejectimdvaltext, prodresult5, weightrejectpurgingextrudertext, prodresult6,
           weighttotalrejectvaltext } = req.body;

    const prodResults = new productionResults({
        operatorname: operatorname,
        shift: shift,
        prodresult:  prodresult,
        qtytotalcaptext: qtytotalcaptext,
        weighttotalcaptext: weighttotalcaptext,
        prodresult2:  prodresult2,
        qtygoodcaptext: qtygoodcaptext,
        weightgoodcaptext: weightgoodcaptext,
        prodresult3: prodresult3,
        qtyrejectpurgingcaptext: qtyrejectpurgingcaptext,
        weighrejectpurgingvaltext:  weighrejectpurgingvaltext,
        prodresult4: prodresult4,
        qtyrejectimdvaltext: qtyrejectimdvaltext,
        weighrejectimdvaltext: weighrejectimdvaltext,
        prodresult5: prodresult5,
        weightrejectpurgingextrudertext: weightrejectpurgingextrudertext,
        prodresult6: prodresult6,
        weighttotalrejectvaltext: weighttotalrejectvaltext
    });

    prodResults.save();

    return(res.status(201).json({
        status: true,
        message: "Production result form has been submit"
    }))
}


//------------------------------IMD Reject -------------------------------------------------
exports.imdRejectForm = async function(req, res) {
    const {operatorname,shift, flash, ovality, warna, bintik, shorts  } = req.body;

    const IMDreject = new imdReject({
        operatorname: operatorname,
        shift: shift,
        flash: flash,
        ovality: ovality,
        warna: warna,
        bintik: bintik,
        shorts: shorts

    });

    IMDreject.save();

    return(res.status(201).json({
        status: true,
        message: "IMD reject form has been submit"
    }))
}


//------------------------------Total Resin Usage ------------------------------------------
exports.totalResinUsageForm = async function(req, res) {
    const {operatorname,shift, materialschoice, valactualweight, percent} = req.body;

    const TotalresinUsage = new totalResinUsage({
        operatorname: operatorname,
        shift: shift,
        materialschoice: materialschoice,
        valactualweight: valactualweight,
        percent: percent
    });

    TotalresinUsage.save();

    return(res.status(201).json({
        status: true,
        message: "Total resin usage form has been submit"
    }))
}

//------------------------------Daily Report -------------------------------------------------
exports.dailyReportForm = async function(req, res) {
    const {operatorname, machine, lineproduction, shift, troubletime, myreport} = req.body;

    const Dailyreport = new dailyReport({
        operatorname: operatorname,
        machine: machine,
        lineproduction: lineproduction,
        shift: shift,
        troubletime: troubletime,
        myreport : myreport

    });

    Dailyreport.save();

    return(res.status(201).json({
        status: true,
        message: "Daily report form has been submit"
    }))
}


