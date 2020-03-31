import { CALCULATE } from '../actions';

const initialState = {
  details: {
    rp: 0,
    lc: 0,
    lt: 0,
    pf: 0,
    dp: 0,
    pdp: 0,
    pfr: 0,
    pvh: 0,
    pvp: 0,
    nbh: 0,
    khp: 0,
    phiX: 0,
    bcfp: 0,
    pfp: 0,
    fht: 0,
    ftt: 0,
    cosphi: 0,
  },

  results: {
    rphp: 0, rpp: 0, rfht: 0, tva: 0, rfttc: 0,
  },

  ffacture: {
    erahp: 0, erap: 0, eahp: 0, eap: 0, ipower: 0,
  },

  fcontrat: {
    pscrite: 0, ptrans: 0, ptfact:0, typecontrat: '', loctrans: '',
  },

};

const sum = arr => arr.reduce((a, c) => a + c);

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case CALCULATE: {
      const { contrat, facture } = action.inputs;
      console.log(contrat, facture);

      const { lc } = state.details;

      let cosphi;
      console.log("cosphi", contrat.typecontrat);
      if (contrat.typecontrat === "mt_mt") {
        cosphi = Math.cos(
          Math.atan(
            ((facture.erahp + facture.erap) / (facture.eahp + facture.eap))
              + 0.01,
          ),
        );
      } else if (contrat.typecontrat === "mt_bt") {
        cosphi = Math.cos(
          Math.atan(
            ((facture.erahp + facture.erap) / (facture.eahp + facture.eap))
              + 0.125,
          ),
        );
      } else {
        cosphi = 1;
      }
      console.log(cosphi);
      // cosphi = Math.ceil(cosphi, 2);

      const rp = Math.ceil(facture.ipower / 5.0) * 5;
      const lt = contrat.loctrans === 'oui' ? Math.max(29 * contrat.ptfact + 6700, ...[0, 9600]) : 0.0;
      const pf = Math.max(contrat.pscrite) * 3700;
      const dp = rp > contrat.pscrite ? rp - contrat.pscrite : 0;
      const pdp = dp * 3700;
      const pfr = contrat.typecontrat === 'mt_bt' ? contrat.ptrans * 0.01 * 720 : 0;
      const pvh = contrat.typecontrat === 'mt_bt' ? Math.round(0.03 * facture.eahp, 0) : 0;
      const pvp = contrat.typecontrat === 'mt_bt' ? Math.round(0.03 * facture.eap, 0) : 0;
      const nbh = Math.round(
        sum([facture.eahp, facture.eap, pfr, pvh, pvp])
          / Math.max(contrat.pscrite, rp),
        0,
      );

      let khp = 0;
      if (nbh < 200) {
        khp = 70;
      } else if (nbh > 200 && nbh < 400) {
        khp = 65;
      } else if (nbh > 401) {
        khp = 60;
      } else {
        khp = 65;
      }
      const phiX = cosphi > 0.8 ? 0 : 0.8 - cosphi;
      const bcfp = sum([
        facture.eahp * khp, facture.eap * 85,
        (pfr + pvh) * khp, pvp * 85,
        pf,
      ]);

      const pfp = phiX * bcfp;
      const fht = pf + pdp
      + (facture.eahp + pvh + pfr) * khp
      + (facture.eap + pvp) * 85
      + pfp + lc + lt;
      const tva = fht * 0.1925;

      return {
        ...state,

        details: {
          rp,
          lc,
          lt,
          pf,
          dp,
          pdp,
          pfr,
          pvh,
          pvp,
          nbh,
          khp,
          phiX,
          bcfp,
          pfp,
          fht,
          ftt: Math.ceil(fht * (0.1925 + 1), 0),
          cosphi,
        },

        results: {
          rphp: khp,
          rpp: 85,
          rfht: fht,
          tva,
          rfttc: fht + tva,
        },

        fcontrat: contrat,

        ffacture: facture,

      };
    }

    default:
      return state;
  }
};

export default dataReducer;
