const { Schema, model} = require ('mongoose');


const diagnosticoSchema = Schema({

    autoriza:{
        type: String,
        required: true
    },
    firma:{
        type: String,
        required: true
    },
    nombreEmpresa:{
        type: String
    },
    antiguedad:{
        type: String
    },
    typeOrganizacion:{
        type: String
    },
    dSocio1:{
        type: String
    },
    dSocio2:{
        type: String
    },
    dSocio3:{
        type:String
    },
    eTipoSociedad:{
        type: String
    },
    fPoliticas:{
        type: String
    },
    gPoliticasSi:{
        type:String
    },
    hSeguroEmpresarial:{
        type: String
    },
    iOrganigrama:{
        type: String
    },
    // etapa2
    aVision:{
        type: String
    },
    bMision:{
        type: String
    },
    cCreencias:{
        type: String
    },
    dValores:{
        type: String
    },
    ePrincipios:{
        type: String
    },
    fTipoDeLiderazgo:{
        type: String
    },
    gEquipoDirectivo:{
        type: String
    },
    hLogros:{
        type: String
    },
    iProyectos:{
        type: String
    },
    fortalezasDirectivo:{
        type: String
    },
    debilidadesDirectivo:{
        type: String
    },
    // Etapa3
    aProgramaCrecimiento:{
        type: String
    },
    bRasgos:{
        type: String
    },
    cCapacitacion:{
        type: String
    },
    dPlanDeVida:{
        type:String
    },
    eInduccion:{
        type: String
    },
    ePorque:{
        type: String
    },
    fMujeres:{
        type: Number
    },
    gHombres:{
        type: Number
    },
    hReactivo:{
        type: String
    },
    fortalezasGeneral:{
        type: String
    },
    debilidadesGeneral:{
        type: String
    },
    // Etapa4
    aObjetivos:{
        type: String
    },
    bFodaTime:{
        type: String
    },
    bFodaPlanea:{
        type: String
    },
    bFodaOportunidades:{
        type: String
    },
    bFodaAmenazas:{
        type:String
    },
    bFodaEstrategia:{
        type: String
    },
    cControlGestion:{
        type: String
    },
    cEsquema:{
        type: String
    },
    // Etapa5
    aTipoEmpresa:{
        type:String
    },
    bPlantas:{
        type: Number
    },
    bTamaño:{
        type: Number
    },
    cLineasPro:{
        type: String
    },
    dNumerosEmpleados:{
        type: Number
    },
    eCapacidadProductiva:{
        type: String
    },
    fModificacionsPlanta:{
        type: String
    },
    gPorqueModificacion:{
        type: String
    },
    hTecnologia:{
        type: String
    },
    iManteyRep:{
        type: String
    },
    jMateriaPrima:{
        type: String
    },
    kHerramientas:{
        type: String
    },
    lSuministroG:{
        type: String
    },
    mFortalezas:{
        type: String
    },
    mDebilidades:{
        type: String
    },
    // Etapa6

    aMercadotecnica:{
        type: String
    },
    bParticipacion:{
        type: String
    },
    
    cLineasProd:{
        type: String
    },
    dProdProm:{
        type: String
    },
    eRegMar:{
        type: String
    },
    fProm:{
        type: String
    },
    gCadenaDis:{
        type: String
    },
    hEscala:{
        type: String
    },
    iTipoPublic:{
        type: String
    },
    jFuerzaVen:{
        type: String
    },
    kTipoDeCapac:{
        type: String
    },
    lFortalezas:{
        type: String
    },
    lDebilidades:{
        type: String
    },
    // etapa7
    
    aPatentes:{
        type: String
    },
    bInvProyect:{
        type: String
    },
    cInvUniv:{
        type: String
    },
    dProdCal:{
        type: String
    },
    eProveeduria:{
        type: String
    },
    //Etapa8
    aPrincObj:{
        type: String
    },
    // b pendiente
    cPersonaFina:{
        type:String
    },
    dPresupuesto:{
        type: String
    },
    eEndeudamiento:{
        type: String
    },
    fVentasCredito:{
        type: String
    },
    gApalancamiento:{
        type: String
    },
    hMinImpA:{
        type: String
    },
    hMinImpB:{
        type: String
    },
    hMinImpC:{
        type: String
    },

    // Etapa9

    aCadenaValor:{
        type: String
    },
    aCadenaValorPor:{
        type: String
    },
    // b pendiente
    cVentajaComp:{
        type: String
    },
    dConsiAli:{
        type: String
    },
    eConoPort:{
        type: String
    },
    fCertificaciones:{
        type: String
    },
    gCertiType:{
        type: String
    },
    gCertiTypeCuales:{
        type: String
    },
    hConoceA:{
        type: String
    },
    hConoceB:{
        type: String
    },
    hConoceC:{
        type: String
    },
    hConoceD:{
        type: String
    },
    hConoce5:{
        type: String
    },
    hConoce6:{
        type: String
    },
    hConoce7:{
        type: String
    },
    hConoce8:{
        type: String
    },
    hConoce9:{
        type: String
    },
    hConoce10:{
        type: String
    },
    iComentariosAdi:{
        type: String
    },
    file1:{
        type: String
    },
    file2:{
        type: String
    }
});


module.exports = model('diagnostico' , diagnosticoSchema);