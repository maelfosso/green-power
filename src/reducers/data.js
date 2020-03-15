import { CALCULATE } from '../actions';

const initialState = {
  rp: 0, lc: 0, lt: 0, pf: 0,
  pdp: 0, pfr: 0, pvh: 0, pvp: 0,
  nbh: 0, khp: 0, phiX: 0, bcfp: 0,
  pfp: 0, fht: 0, ftt: 0,

  rphp: 0, rpp: 0, rfht: 0, rfttc: 0
};

const dataReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case CALCULATE:
      const { contrat, facture } = action.inputs;
      
      const { lc } = state;

      const rp = Math.ceil(facture.ipower / 5.0) * 5;
      const lt = contrat.loctrans === 'oui' ? Math.max(29 * contrat.ptfact + 6700, ...[0, 9600]) : 0.0;
      const pf = Math.max(contrat.pscrite) * 3700;
      const pdp = (rp > contrat.pscrite ? rp - contrat.pscrite : 0) * 3700;
      const pfr = contrat.typecontrat === "mt_bt" ? contrat.ptrans * 0.01 * 720 : 0;
      const pvh = contrat.typecontrat === "mt_bt" ? Math.round(0.03 * facture.ehp, 0) : 0;
      const pvp = contrat.typecontrat === "mt_bt" ? Math.round(0.03 * facture.ep, 0) : 0;
      const nbh = Math.round(
        sum([facture.ehp, facture.ep, pfr, pvh, pvp])
          / Math.max(facture.ehp, facture.ep)
        , 
        0
      );

      let khp = 0;
      if (nbh < 200) {
        khp = 70;
      } else if (200 < nbh && nbh < 400) {
        khp = 65;
      } else if (nbh > 401) {
        khp = 60
      } else {
        khp = 65
      }
      const phiX = facture.cosphi > 0.8 ? 0 : 0.8 - facture.cosphi;
      const bcfp = sum([
        facture * khp, facture.ep * 85,
        (pfr + pvh) * khp, facture.cosphi * 85,
        pf
      ]);
      const pfp = phiX * bcfp;
      const fht = pf + pdp 
      + (facture.ehp + pvh + pfr) * khp 
      + (facture.ep + pvp) * 85
      + pfp + lc + lt;

      const tva = fht * 0.01925;

      return {
        ...state,
        rp, lt,
        pf, pdp,
        pfr, pvh, pvp, nbh,
        khp, phiX, bcfp,
        pfp, fht,
        ftt: Math.ceil(fht * (0.01925 + 1), 0),

        rphp: khp,
        rpp: 85,
        rfht: fht,
        tva,
        rfttc: fht + tva
      };

    default:
      return state;
  }
}

const sum = (arr) => {
  return arr.reduce((a, c) => a + c);
}
export default dataReducer;