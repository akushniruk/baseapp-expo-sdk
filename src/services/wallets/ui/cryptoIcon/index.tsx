import React, { FC, useMemo } from "react";
import { View, Image, Text } from "react-native";
import { useThemeContext } from "../../../../shared/hooks/useThemeContext";
import { cryptoIconStyles } from "./cryptoIcon.style";

export interface ICryptoIcon {
    code: string;
}

export const CryptoIcon: FC<ICryptoIcon> = ({ code }) => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => cryptoIconStyles(theme), [theme]);

    switch (code) {
        case "usdt":
            return <Image style={styles.icon} source={require(`../../../../assets/crypto-icons/usdt.png`)} />;
        case "$pac.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/pac.png")} />;
        case "amp.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/amp.png")} />;
        case "auto.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/auto.png")} />;
        case "bix.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/bix.png")} />;
        case "btcz.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/btcz.png")} />;
        case "cix.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/cix.png")} />;
        case "cvc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/cvc.png")} />;
        case "drgn.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/drgn.png")} />;
        case "enj.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/enj.png")} />;
        case "fil.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/fil.png")} />;
        case "gno.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/gno.png")} />;
        case "hsr.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/hsr.png")} />;
        case "jnt.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/jnt.png")} />;
        case "lun.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/lun.png")} />;
        case "mod.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/mod.png")} />;
        case "nkn.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/nkn.png")} />;
        case "ox.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/ox.png")} />;
        case "powr.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/powr.png")} />;
        case "rcn.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/rcn.png")} />;
        case "san.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/san.png")} />;
        case "sol.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/sol.png")} />;
        case "tau.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/tau.png")} />;
        case "tzc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/tzc.png")} />;
        case "wabi.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/wabi.png")} />;
        case "xlm.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/xlm.png")} />;
        case "zcl.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/zcl.png")} />;
        case "0xbtc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/0xbtc.png")} />;
        case "ampl.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/ampl.png")} />;
        case "avax.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/avax.png")} />;
        case "blcn.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/blcn.png")} />;
        case "btdx.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/btdx.png")} />;
        case "clam.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/clam.png")} />;
        case "d.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/d.png")} />;
        case "drop.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/drop.png")} />;
        case "entrp.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/entrp.png")} />;
        case "fjc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/fjc.png")} />;
        case "gnt.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/gnt.png")} />;
        case "ht.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/ht.png")} />;
        case "jpy.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/jpy.png")} />;
        case "maid.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/maid.png")} />;
        case "mona.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/mona.png")} />;
        case "nlc2.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/nlc2.png")} />;
        case "oxt.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/oxt.png")} />;
        case "ppc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/ppc.png")} />;
        case "rdd.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/rdd.png")} />;
        case "sand.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/sand.png")} />;
        case "spacehbit.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/spacehbit.png")} />;
        case "tbx.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/tbx.png")} />;
        case "ubq.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/ubq.png")} />;
        case "wan.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/wan.png")} />;
        case "xmcc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/xmcc.png")} />;
        case "zec.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/zec.png")} />;
        case "1inch.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/1inch.png")} />;
        case "ankr.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/ankr.png")} />;
        case "aywa.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/aywa.png")} />;
        case "blk.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/blk.png")} />;
        case "btg.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/btg.png")} />;
        case "cloak.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/cloak.png")} />;
        case "dai.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/dai.png")} />;
        case "dta.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/dta.png")} />;
        case "eon.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/eon.png")} />;
        case "fldc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/fldc.png")} />;
        case "gold.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/gold.png")} />;
        case "html.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/html.png")} />;
        case "kcs.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/kcs.png")} />;
        case "mana.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/mana.png")} />;
        case "msr.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/msr.png")} />;
        case "nlg.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/nlg.png")} />;
        case "oxy.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/oxy.png")} />;
        case "ppp.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/ppp.png")} />;
        case "rdn.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/rdn.png")} />;
        case "sbd.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/sbd.png")} />;
        case "spank.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/spank.png")} />;
        case "tel.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/tel.png")} />;
        case "uma.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/uma.png")} />;
        case "waves.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/waves.png")} />;
        case "xmg.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/xmg.png")} />;
        case "zel.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/zel.png")} />;
        case "2give.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/2give.png")} />;
        case "ant.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/ant.png")} />;
        case "bab.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/bab.png")} />;
        case "block.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/block.png")} />;
        case "btm.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/btm.png")} />;
        case "cmm.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/cmm.png")} />;
        case "dash.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/dash.png")} />;
        case "dth.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/dth.png")} />;
        case "eop.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/eop.png")} />;
        case "flo.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/flo.png")} />;
        case "grc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/grc.png")} />;
        case "huc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/huc.png")} />;
        case "kin.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/kin.png")} />;
        case "matic.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/matic.png")} />;
        case "mth.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/mth.png")} />;
        case "nmc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/nmc.png")} />;
        case "part.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/part.png")} />;
        case "ppt.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/ppt.png")} />;
        case "ren.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/ren.png")} />;
        case "sberbank.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/sberbank.png")} />;
        case "sphtx.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/sphtx.png")} />;
        case "ten.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/ten.png")} />;
        case "uni.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/uni.png")} />;
        case "wax.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/wax.png")} />;
        case "xmo.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/xmo.png")} />;
        case "zen.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/zen.png")} />;
        case "aave.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/aave.png")} />;
        case "ape.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/ape.png")} />;
        case "bal.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/bal.png")} />;
        case "blz.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/blz.png")} />;
        case "bts.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/bts.png")} />;
        case "cmt.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/cmt.png")} />;
        case "dat.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/dat.png")} />;
        case "dtr.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/dtr.png")} />;
        case "eos.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/eos.png")} />;
        case "flux.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/flux.png")} />;
        case "grin.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/grin.png")} />;
        case "husd.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/husd.png")} />;
        case "klown.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/klown.png")} />;
        case "max.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/max.png")} />;
        case "mtl.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/mtl.png")} />;
        case "nmr.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/nmr.png")} />;
        case "pasc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/pasc.png")} />;
        case "pre.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/pre.png")} />;
        case "rep.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/rep.png")} />;
        case "sc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/sc.png")} />;
        case "srn.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/srn.png")} />;
        case "tern.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/tern.png")} />;
        case "unity.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/unity.png")} />;
        case "wbtc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/wbtc.png")} />;
        case "xmr.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/xmr.png")} />;
        case "zest.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/zest.png")} />;
        case "abt.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/abt.png")} />;
        case "apex.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/apex.png")} />;
        case "band.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/band.png")} />;
        case "bnb.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/bnb.png")} />;
        case "btt.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/btt.png")} />;
        case "cnd.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/cnd.png")} />;
        case "data.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/data.png")} />;
        case "ebst.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/ebst.png")} />;
        case "eqli.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/eqli.png")} />;
        case "fsn.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/fsn.png")} />;
        case "grs.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/grs.png")} />;
        case "hush.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/hush.png")} />;
        case "kmd.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/kmd.png")} />;
        case "mcap.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/mcap.png")} />;
        case "music.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/music.png")} />;
        case "npxs.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/npxs.png")} />;
        case "pasl.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/pasl.png")} />;
        case "prl.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/prl.png")} />;
        case "repv2.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/repv2.png")} />;
        case "ser.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/ser.png")} />;
        case "stak.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/stak.png")} />;
        case "tgch.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/tgch.png")} />;
        case "usd.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/usd.png")} />;
        case "wgr.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/wgr.png")} />;
        case "xmy.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/xmy.png")} />;
        case "zil.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/zil.png")} />;
        case "act.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/act.png")} />;
        case "appc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/appc.png")} />;
        case "bat.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/bat.png")} />;
        case "bnt.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/bnt.png")} />;
        case "btx.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/btx.png")} />;
        case "cnx.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/cnx.png")} />;
        case "dbc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/dbc.png")} />;
        case "eca.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/eca.png")} />;
        case "equa.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/equa.png")} />;
        case "ftc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/ftc.png")} />;
        case "grt.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/grt.png")} />;
        case "icn.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/icn.png")} />;
        case "knc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/knc.png")} />;
        case "mco.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/mco.png")} />;
        case "mzc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/mzc.png")} />;
        case "ntbc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/ntbc.png")} />;
        case "pax.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/pax.png")} />;
        case "pungo.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/pungo.png")} />;
        case "req.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/req.png")} />;
        case "shift.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/shift.png")} />;
        case "start.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/start.png")} />;
        case "theta.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/theta.png")} />;
        case "usdc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/usdc.png")} />;
        case "wicc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/wicc.png")} />;
        case "xp.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/xp.png")} />;
        case "zilla.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/zilla.png")} />;
        case "actn.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/actn.png")} />;
        case "ardr.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/ardr.png")} />;
        case "bay.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/bay.png")} />;
        case "bnty.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/bnty.png")} />;
        case "burst.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/burst.png")} />;
        case "cny.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/cny.png")} />;
        case "dcn.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/dcn.png")} />;
        case "edg.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/edg.png")} />;
        case "etc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/etc.png")} />;
        case "fuel.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/fuel.png")} />;
        case "gsc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/gsc.png")} />;
        case "icp.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/icp.png")} />;
        case "krb.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/krb.png")} />;
        case "mda.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/mda.png")} />;
        case "nano.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/nano.png")} />;
        case "nuls.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/nuls.png")} />;
        case "paxg.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/paxg.png")} />;
        case "pura.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/pura.png")} />;
        case "rhoc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/rhoc.png")} />;
        case "sib.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/sib.png")} />;
        case "steem.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/steem.png")} />;
        case "tix.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/tix.png")} />;
        case "usdt.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/usdt.png")} />;
        case "wings.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/wings.png")} />;
        case "xpa.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/xpa.png")} />;
        case "zrx.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/zrx.png")} />;
        case "ada.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/ada.png")} />;
        case "arg.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/arg.png")} />;
        case "bcbc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/bcbc.png")} />;
        case "booty.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/booty.png")} />;
        case "bze.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/bze.png")} />;
        case "cob.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/cob.png")} />;
        case "dcr.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/dcr.png")} />;
        case "edo.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/edo.png")} />;
        case "eth.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/eth.png")} />;
        case "fun.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/fun.png")} />;
        case "gto.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/gto.png")} />;
        case "icx.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/icx.png")} />;
        case "ksm.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/ksm.png")} />;
        case "mds.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/mds.png")} />;
        case "nas.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/nas.png")} />;
        case "nxs.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/nxs.png")} />;
        case "pay.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/pay.png")} />;
        case "qash.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/qash.png")} />;
        case "ric.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/ric.png")} />;
        case "sin.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/sin.png")} />;
        case "storj.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/storj.png")} />;
        case "tkn.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/tkn.png")} />;
        case "utk.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/utk.png")} />;
        case "wpr.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/wpr.png")} />;
        case "xpm.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/xpm.png")} />;
        case "add.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/add.png")} />;
        case "ark.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/ark.png")} />;
        case "bcc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/bcc.png")} />;
        case "bos.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/bos.png")} />;
        case "call.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/call.png")} />;
        case "colx.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/colx.png")} />;
        case "deez.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/deez.png")} />;
        case "edoge.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/edoge.png")} />;
        case "ethos.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/ethos.png")} />;
        case "game.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/game.png")} />;
        case "gup.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/gup.png")} />;
        case "ignis.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/ignis.png")} />;
        case "lbc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/lbc.png")} />;
        case "med.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/med.png")} />;
        case "nav.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/nav.png")} />;
        case "nxt.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/nxt.png")} />;
        case "payx.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/payx.png")} />;
        case "qiwi.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/qiwi.png")} />;
        case "rise.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/rise.png")} />;
        case "skl.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/skl.png")} />;
        case "storm.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/storm.png")} />;
        case "tks.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/tks.png")} />;
        case "veri.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/veri.png")} />;
        case "wtc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/wtc.png")} />;
        case "xpr.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/xpr.png")} />;
        case "adx.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/adx.png")} />;
        case "arn.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/arn.png")} />;
        case "bcd.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/bcd.png")} />;
        case "bpt.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/bpt.png")} />;
        case "cc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/cc.png")} />;
        case "comp.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/comp.png")} />;
        case "dent.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/dent.png")} />;
        case "ela.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/ela.png")} />;
        case "etn.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/etn.png")} />;
        case "gas.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/gas.png")} />;
        case "gusd.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/gusd.png")} />;
        case "ilk.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/ilk.png")} />;
        case "lend.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/lend.png")} />;
        case "meetone.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/meetone.png")} />;
        case "ncash.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/ncash.png")} />;
        case "oax.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/oax.png")} />;
        case "pink.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/pink.png")} />;
        case "qlc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/qlc.png")} />;
        case "rlc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/rlc.png")} />;
        case "sky.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/sky.png")} />;
        case "stox.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/stox.png")} />;
        case "tnb.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/tnb.png")} />;
        case "vet.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/vet.png")} />;
        case "x.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/x.png")} />;
        case "xrp.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/xrp.png")} />;
        case "ae.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/ae.png")} />;
        case "arnx.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/arnx.png")} />;
        case "bch.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/bch.png")} />;
        case "bq.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/bq.png")} />;
        case "cdn.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/cdn.png")} />;
        case "coqui.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/coqui.png")} />;
        case "dew.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/dew.png")} />;
        case "elec.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/elec.png")} />;
        case "etp.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/etp.png")} />;
        case "gbp.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/gbp.png")} />;
        case "gvt.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/gvt.png")} />;
        case "ink.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/ink.png")} />;
        case "leo.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/leo.png")} />;
        case "mft.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/mft.png")} />;
        case "ndz.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/ndz.png")} />;
        case "ok.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/ok.png")} />;
        case "pirl.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/pirl.png")} />;
        case "qnt.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/qnt.png")} />;
        case "rpx.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/rpx.png")} />;
        case "slr.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/slr.png")} />;
        case "stq.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/stq.png")} />;
        case "tnc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/tnc.png")} />;
        case "via.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/via.png")} />;
        case "xas.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/xas.png")} />;
        case "xsg.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/xsg.png")} />;
        case "aeon.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/aeon.png")} />;
        case "ary.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/ary.png")} />;
        case "bcio.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/bcio.png")} />;
        case "brd.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/brd.png")} />;
        case "cdt.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/cdt.png")} />;
        case "cred.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/cred.png")} />;
        case "dgb.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/dgb.png")} />;
        case "elf.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/elf.png")} />;
        case "eur.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/eur.png")} />;
        case "gbx.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/gbx.png")} />;
        case "gxs.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/gxs.png")} />;
        case "ins.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/ins.png")} />;
        case "link.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/link.png")} />;
        case "miota.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/miota.png")} />;
        case "nebl.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/nebl.png")} />;
        case "omg.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/omg.png")} />;
        case "pivx.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/pivx.png")} />;
        case "qrl.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/qrl.png")} />;
        case "rub.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/rub.png")} />;
        case "sls.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/sls.png")} />;
        case "strat.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/strat.png")} />;
        case "tnt.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/tnt.png")} />;
        case "vib.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/vib.png")} />;
        case "xbc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/xbc.png")} />;
        case "xtz.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/xtz.png")} />;
        case "aeur.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/aeur.png")} />;
        case "ast.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/ast.png")} />;
        case "bcn.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/bcn.png")} />;
        case "bsd.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/bsd.png")} />;
        case "cenz.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/cenz.png")} />;
        case "crpt.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/crpt.png")} />;
        case "dgd.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/dgd.png")} />;
        case "elix.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/elix.png")} />;
        case "evx.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/evx.png")} />;
        case "gbyte.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/gbyte.png")} />;
        case "gzr.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/gzr.png")} />;
        case "ion.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/ion.png")} />;
        case "lkk.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/lkk.png")} />;
        case "mith.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/mith.png")} />;
        case "neo.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/neo.png")} />;
        case "omni.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/omni.png")} />;
        case "plr.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/plr.png")} />;
        case "qsp.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/qsp.png")} />;
        case "rvn.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/rvn.png")} />;
        case "smart.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/smart.png")} />;
        case "stx.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/stx.png")} />;
        case "tomo.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/tomo.png")} />;
        case "vibe.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/vibe.png")} />;
        case "xbp.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/xbp.png")} />;
        case "xuc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/xuc.png")} />;
        case "agi.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/agi.png")} />;
        case "atlas.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/atlas.png")} />;
        case "bco.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/bco.png")} />;
        case "bsv.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/bsv.png")} />;
        case "chain.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/chain.png")} />;
        case "crv.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/crv.png")} />;
        case "dlt.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/dlt.png")} />;
        case "ella.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/ella.png")} />;
        case "exmo.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/exmo.png")} />;
        case "generic.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/generic.png")} />;
        case "hight.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/hight.png")} />;
        case "iop.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/iop.png")} />;
        case "loom.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/loom.png")} />;
        case "mkr.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/mkr.png")} />;
        case "neos.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/neos.png")} />;
        case "one.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/one.png")} />;
        case "poa.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/poa.png")} />;
        case "qtum.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/qtum.png")} />;
        case "ryo.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/ryo.png")} />;
        case "sngls.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/sngls.png")} />;
        case "sub.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/sub.png")} />;
        case "tpay.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/tpay.png")} />;
        case "vivo.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/vivo.png")} />;
        case "xby.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/xby.png")} />;
        case "xvc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/xvc.png")} />;
        case "agrs.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/agrs.png")} />;
        case "atm.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/atm.png")} />;
        case "bcpt.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/bcpt.png")} />;
        case "btc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/btc.png")} />;
        case "chat.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/chat.png")} />;
        case "crw.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/crw.png")} />;
        case "dnt.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/dnt.png")} />;
        case "emb.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/emb.png")} />;
        case "exp.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/exp.png")} />;
        case "gin.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/gin.png")} />;
        case "hns.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/hns.png")} />;
        case "iost.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/iost.png")} />;
        case "lpt.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/lpt.png")} />;
        case "mln.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/mln.png")} />;
        case "neu.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/neu.png")} />;
        case "ong.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/ong.png")} />;
        case "poe.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/poe.png")} />;
        case "r.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/r.png")} />;
        case "safe.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/safe.png")} />;
        case "snm.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/snm.png")} />;
        case "sumo.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/sumo.png")} />;
        case "trig.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/trig.png")} />;
        case "vrc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/vrc.png")} />;
        case "xcp.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/xcp.png")} />;
        case "xvg.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/xvg.png")} />;
        case "aion.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/aion.png")} />;
        case "atom.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/atom.png")} />;
        case "bdl.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/bdl.png")} />;
        case "btcd.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/btcd.png")} />;
        case "chips.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/chips.png")} />;
        case "cs.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/cs.png")} />;
        case "dock.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/dock.png")} />;
        case "emc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/emc.png")} />;
        case "fair.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/fair.png")} />;
        case "glxt.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/glxt.png")} />;
        case "hodl.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/hodl.png")} />;
        case "iotx.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/iotx.png")} />;
        case "lrc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/lrc.png")} />;
        case "mnx.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/mnx.png")} />;
        case "nexo.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/nexo.png")} />;
        case "ont.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/ont.png")} />;
        case "polis.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/polis.png")} />;
        case "rads.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/rads.png")} />;
        case "safemoon.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/safemoon.png")} />;
        case "snt.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/snt.png")} />;
        case "sushi.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/sushi.png")} />;
        case "trtl.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/trtl.png")} />;
        case "vrsc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/vrsc.png")} />;
        case "xdn.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/xdn.png")} />;
        case "xzc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/xzc.png")} />;
        case "algo.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/algo.png")} />;
        case "audr.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/audr.png")} />;
        case "beam.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/beam.png")} />;
        case "btch.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/btch.png")} />;
        case "chsb.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/chsb.png")} />;
        case "ctr.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/ctr.png")} />;
        case "doge.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/doge.png")} />;
        case "emc2.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/emc2.png")} />;
        case "fct.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/fct.png")} />;
        case "gmr.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/gmr.png")} />;
        case "hot.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/hot.png")} />;
        case "iq.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/iq.png")} />;
        case "lsk.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/lsk.png")} />;
        case "mnz.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/mnz.png")} />;
        case "ngc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/ngc.png")} />;
        case "oot.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/oot.png")} />;
        case "poly.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/poly.png")} />;
        case "rap.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/rap.png")} />;
        case "sai.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/sai.png")} />;
        case "snx.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/snx.png")} />;
        case "sys.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/sys.png")} />;
        case "trx.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/trx.png")} />;
        case "vtc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/vtc.png")} />;
        case "xem.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/xem.png")} />;
        case "yfi.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/yfi.png")} />;
        case "amb.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/amb.png")} />;
        case "aury.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/aury.png")} />;
        case "bela.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/bela.png")} />;
        case "btcp.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/btcp.png")} />;
        case "chz.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/chz.png")} />;
        case "ctxc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/ctxc.png")} />;
        case "dot.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/dot.png")} />;
        case "eng.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/eng.png")} />;
        case "fida.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/fida.png")} />;
        case "gmt.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/gmt.png")} />;
        case "hpb.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/hpb.png")} />;
        case "itc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/itc.png")} />;
        case "ltc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/ltc.png")} />;
        case "moac.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/moac.png")} />;
        case "nio.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/nio.png")} />;
        case "ost.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/ost.png")} />;
        case "pot.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/pot.png")} />;
        case "ray.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/ray.png")} />;
        case "salt.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/salt.png")} />;
        case "soc.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/soc.png")} />;
        case "taas.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/taas.png")} />;
        case "tusd.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/tusd.png")} />;
        case "vtho.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/vtho.png")} />;
        case "xin.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/xin.png")} />;
        case "yoyow.png":
            return <Image style={styles.icon} source={require("../../../../assets/crypto-icons/yoyow.png")} />;

        default:
            return <Image style={styles.icon} source={require(`../../../../assets/crypto-icons/generic.png`)} />;
    }
};
