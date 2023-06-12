import React, { FC, useMemo } from "react";
import { View, Image, Text } from "react-native";
import { useThemeContext } from "../../../../shared/hooks/useThemeContext";
import { cryptoIconStyles } from "./cryptoIcon.style";

export interface ICryptoIcon {
    code: string;
    size?: "sm" | "md" | "lg";
}

export const CryptoIcon: FC<ICryptoIcon> = ({ code, size }) => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => cryptoIconStyles(theme), [theme]);

    switch (code) {
        case "usdt":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require(`../../../../assets/crypto-icons/usdt.png`)}
                />
            );
        case "$pac":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/$pac.png")}
                />
            );
        case "amp":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/amp.png")}
                />
            );
        case "auto":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/auto.png")}
                />
            );
        case "bix":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/bix.png")}
                />
            );
        case "btcz":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/btcz.png")}
                />
            );
        case "cix":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/cix.png")}
                />
            );
        case "cvc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/cvc.png")}
                />
            );
        case "drgn":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/drgn.png")}
                />
            );
        case "enj":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/enj.png")}
                />
            );
        case "fil":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/fil.png")}
                />
            );
        case "gno":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/gno.png")}
                />
            );
        case "hsr":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/hsr.png")}
                />
            );
        case "jnt":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/jnt.png")}
                />
            );
        case "lun":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/lun.png")}
                />
            );
        case "mod":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/mod.png")}
                />
            );
        case "nkn":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/nkn.png")}
                />
            );
        case "ox":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/ox.png")}
                />
            );
        case "powr":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/powr.png")}
                />
            );
        case "rcn":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/rcn.png")}
                />
            );
        case "san":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/san.png")}
                />
            );
        case "sol":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/sol.png")}
                />
            );
        case "tau":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/tau.png")}
                />
            );
        case "tzc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/tzc.png")}
                />
            );
        case "wabi":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/wabi.png")}
                />
            );
        case "xlm":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/xlm.png")}
                />
            );
        case "zcl":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/zcl.png")}
                />
            );
        case "0xbtc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/0xbtc.png")}
                />
            );
        case "ampl":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/ampl.png")}
                />
            );
        case "avax":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/avax.png")}
                />
            );
        case "blcn":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/blcn.png")}
                />
            );
        case "btdx":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/btdx.png")}
                />
            );
        case "clam":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/clam.png")}
                />
            );
        case "d":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/d.png")}
                />
            );
        case "drop":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/drop.png")}
                />
            );
        case "entrp":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/entrp.png")}
                />
            );
        case "fjc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/fjc.png")}
                />
            );
        case "gnt":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/gnt.png")}
                />
            );
        case "ht":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/ht.png")}
                />
            );
        case "jpy":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/jpy.png")}
                />
            );
        case "maid":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/maid.png")}
                />
            );
        case "mona":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/mona.png")}
                />
            );
        case "nlc2":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/nlc2.png")}
                />
            );
        case "oxt":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/oxt.png")}
                />
            );
        case "ppc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/ppc.png")}
                />
            );
        case "rdd":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/rdd.png")}
                />
            );
        case "sand":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/sand.png")}
                />
            );
        case "spacehbit":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/spacehbit.png")}
                />
            );
        case "tbx":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/tbx.png")}
                />
            );
        case "ubq":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/ubq.png")}
                />
            );
        case "wan":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/wan.png")}
                />
            );
        case "xmcc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/xmcc.png")}
                />
            );
        case "zec":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/zec.png")}
                />
            );
        case "1inch":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/1inch.png")}
                />
            );
        case "ankr":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/ankr.png")}
                />
            );
        case "aywa":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/aywa.png")}
                />
            );
        case "blk":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/blk.png")}
                />
            );
        case "btg":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/btg.png")}
                />
            );
        case "cloak":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/cloak.png")}
                />
            );
        case "dai":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/dai.png")}
                />
            );
        case "dta":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/dta.png")}
                />
            );
        case "eon":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/eon.png")}
                />
            );
        case "fldc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/fldc.png")}
                />
            );
        case "gold":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/gold.png")}
                />
            );
        case "html":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/html.png")}
                />
            );
        case "kcs":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/kcs.png")}
                />
            );
        case "mana":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/mana.png")}
                />
            );
        case "msr":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/msr.png")}
                />
            );
        case "nlg":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/nlg.png")}
                />
            );
        case "oxy":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/oxy.png")}
                />
            );
        case "ppp":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/ppp.png")}
                />
            );
        case "rdn":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/rdn.png")}
                />
            );
        case "sbd":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/sbd.png")}
                />
            );
        case "spank":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/spank.png")}
                />
            );
        case "tel":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/tel.png")}
                />
            );
        case "uma":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/uma.png")}
                />
            );
        case "waves":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/waves.png")}
                />
            );
        case "xmg":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/xmg.png")}
                />
            );
        case "zel":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/zel.png")}
                />
            );
        case "2give":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/2give.png")}
                />
            );
        case "ant":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/ant.png")}
                />
            );
        case "bab":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/bab.png")}
                />
            );
        case "block":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/block.png")}
                />
            );
        case "btm":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/btm.png")}
                />
            );
        case "cmm":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/cmm.png")}
                />
            );
        case "dash":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/dash.png")}
                />
            );
        case "dth":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/dth.png")}
                />
            );
        case "eop":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/eop.png")}
                />
            );
        case "flo":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/flo.png")}
                />
            );
        case "grc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/grc.png")}
                />
            );
        case "huc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/huc.png")}
                />
            );
        case "kin":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/kin.png")}
                />
            );
        case "matic":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/matic.png")}
                />
            );
        case "mth":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/mth.png")}
                />
            );
        case "nmc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/nmc.png")}
                />
            );
        case "part":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/part.png")}
                />
            );
        case "ppt":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/ppt.png")}
                />
            );
        case "ren":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/ren.png")}
                />
            );
        case "sberbank":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/sberbank.png")}
                />
            );
        case "sphtx":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/sphtx.png")}
                />
            );
        case "ten":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/ten.png")}
                />
            );
        case "uni":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/uni.png")}
                />
            );
        case "wax":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/wax.png")}
                />
            );
        case "xmo":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/xmo.png")}
                />
            );
        case "zen":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/zen.png")}
                />
            );
        case "aave":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/aave.png")}
                />
            );
        case "ape":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/ape.png")}
                />
            );
        case "bal":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/bal.png")}
                />
            );
        case "blz":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/blz.png")}
                />
            );
        case "bts":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/bts.png")}
                />
            );
        case "cmt":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/cmt.png")}
                />
            );
        case "dat":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/dat.png")}
                />
            );
        case "dtr":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/dtr.png")}
                />
            );
        case "eos":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/eos.png")}
                />
            );
        case "flux":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/flux.png")}
                />
            );
        case "grin":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/grin.png")}
                />
            );
        case "husd":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/husd.png")}
                />
            );
        case "klown":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/klown.png")}
                />
            );
        case "max":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/max.png")}
                />
            );
        case "mtl":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/mtl.png")}
                />
            );
        case "nmr":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/nmr.png")}
                />
            );
        case "pasc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/pasc.png")}
                />
            );
        case "pre":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/pre.png")}
                />
            );
        case "rep":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/rep.png")}
                />
            );
        case "sc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/sc.png")}
                />
            );
        case "srn":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/srn.png")}
                />
            );
        case "tern":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/tern.png")}
                />
            );
        case "unity":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/unity.png")}
                />
            );
        case "wbtc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/wbtc.png")}
                />
            );
        case "xmr":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/xmr.png")}
                />
            );
        case "zest":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/zest.png")}
                />
            );
        case "abt":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/abt.png")}
                />
            );
        case "apex":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/apex.png")}
                />
            );
        case "band":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/band.png")}
                />
            );
        case "bnb":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/bnb.png")}
                />
            );
        case "btt":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/btt.png")}
                />
            );
        case "cnd":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/cnd.png")}
                />
            );
        case "data":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/data.png")}
                />
            );
        case "ebst":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/ebst.png")}
                />
            );
        case "eqli":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/eqli.png")}
                />
            );
        case "fsn":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/fsn.png")}
                />
            );
        case "grs":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/grs.png")}
                />
            );
        case "hush":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/hush.png")}
                />
            );
        case "kmd":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/kmd.png")}
                />
            );
        case "mcap":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/mcap.png")}
                />
            );
        case "music":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/music.png")}
                />
            );
        case "npxs":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/npxs.png")}
                />
            );
        case "pasl":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/pasl.png")}
                />
            );
        case "prl":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/prl.png")}
                />
            );
        case "repv2":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/repv2.png")}
                />
            );
        case "ser":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/ser.png")}
                />
            );
        case "stak":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/stak.png")}
                />
            );
        case "tgch":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/tgch.png")}
                />
            );
        case "usd":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/usd.png")}
                />
            );
        case "wgr":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/wgr.png")}
                />
            );
        case "xmy":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/xmy.png")}
                />
            );
        case "zil":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/zil.png")}
                />
            );
        case "act":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/act.png")}
                />
            );
        case "appc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/appc.png")}
                />
            );
        case "bat":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/bat.png")}
                />
            );
        case "bnt":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/bnt.png")}
                />
            );
        case "btx":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/btx.png")}
                />
            );
        case "cnx":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/cnx.png")}
                />
            );
        case "dbc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/dbc.png")}
                />
            );
        case "eca":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/eca.png")}
                />
            );
        case "equa":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/equa.png")}
                />
            );
        case "ftc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/ftc.png")}
                />
            );
        case "grt":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/grt.png")}
                />
            );
        case "icn":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/icn.png")}
                />
            );
        case "knc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/knc.png")}
                />
            );
        case "mco":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/mco.png")}
                />
            );
        case "mzc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/mzc.png")}
                />
            );
        case "ntbc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/ntbc.png")}
                />
            );
        case "pax":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/pax.png")}
                />
            );
        case "pungo":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/pungo.png")}
                />
            );
        case "req":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/req.png")}
                />
            );
        case "shift":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/shift.png")}
                />
            );
        case "start":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/start.png")}
                />
            );
        case "theta":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/theta.png")}
                />
            );
        case "usdc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/usdc.png")}
                />
            );
        case "wicc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/wicc.png")}
                />
            );
        case "xp":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/xp.png")}
                />
            );
        case "zilla":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/zilla.png")}
                />
            );
        case "actn":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/actn.png")}
                />
            );
        case "ardr":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/ardr.png")}
                />
            );
        case "bay":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/bay.png")}
                />
            );
        case "bnty":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/bnty.png")}
                />
            );
        case "burst":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/burst.png")}
                />
            );
        case "cny":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/cny.png")}
                />
            );
        case "dcn":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/dcn.png")}
                />
            );
        case "edg":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/edg.png")}
                />
            );
        case "etc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/etc.png")}
                />
            );
        case "fuel":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/fuel.png")}
                />
            );
        case "gsc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/gsc.png")}
                />
            );
        case "icp":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/icp.png")}
                />
            );
        case "krb":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/krb.png")}
                />
            );
        case "mda":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/mda.png")}
                />
            );
        case "nano":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/nano.png")}
                />
            );
        case "nuls":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/nuls.png")}
                />
            );
        case "paxg":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/paxg.png")}
                />
            );
        case "pura":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/pura.png")}
                />
            );
        case "rhoc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/rhoc.png")}
                />
            );
        case "sib":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/sib.png")}
                />
            );
        case "steem":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/steem.png")}
                />
            );
        case "tix":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/tix.png")}
                />
            );
        case "usdt":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/usdt.png")}
                />
            );
        case "wings":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/wings.png")}
                />
            );
        case "xpa":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/xpa.png")}
                />
            );
        case "zrx":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/zrx.png")}
                />
            );
        case "ada":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/ada.png")}
                />
            );
        case "arg":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/arg.png")}
                />
            );
        case "bcbc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/bcbc.png")}
                />
            );
        case "booty":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/booty.png")}
                />
            );
        case "bze":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/bze.png")}
                />
            );
        case "cob":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/cob.png")}
                />
            );
        case "dcr":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/dcr.png")}
                />
            );
        case "edo":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/edo.png")}
                />
            );
        case "eth":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/eth.png")}
                />
            );
        case "fun":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/fun.png")}
                />
            );
        case "gto":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/gto.png")}
                />
            );
        case "icx":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/icx.png")}
                />
            );
        case "ksm":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/ksm.png")}
                />
            );
        case "mds":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/mds.png")}
                />
            );
        case "nas":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/nas.png")}
                />
            );
        case "nxs":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/nxs.png")}
                />
            );
        case "pay":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/pay.png")}
                />
            );
        case "qash":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/qash.png")}
                />
            );
        case "ric":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/ric.png")}
                />
            );
        case "sin":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/sin.png")}
                />
            );
        case "storj":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/storj.png")}
                />
            );
        case "tkn":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/tkn.png")}
                />
            );
        case "utk":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/utk.png")}
                />
            );
        case "wpr":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/wpr.png")}
                />
            );
        case "xpm":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/xpm.png")}
                />
            );
        case "add":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/add.png")}
                />
            );
        case "ark":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/ark.png")}
                />
            );
        case "bcc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/bcc.png")}
                />
            );
        case "bos":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/bos.png")}
                />
            );
        case "call":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/call.png")}
                />
            );
        case "colx":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/colx.png")}
                />
            );
        case "deez":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/deez.png")}
                />
            );
        case "edoge":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/edoge.png")}
                />
            );
        case "ethos":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/ethos.png")}
                />
            );
        case "game":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/game.png")}
                />
            );
        case "gup":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/gup.png")}
                />
            );
        case "ignis":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/ignis.png")}
                />
            );
        case "lbc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/lbc.png")}
                />
            );
        case "med":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/med.png")}
                />
            );
        case "nav":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/nav.png")}
                />
            );
        case "nxt":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/nxt.png")}
                />
            );
        case "payx":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/payx.png")}
                />
            );
        case "qiwi":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/qiwi.png")}
                />
            );
        case "rise":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/rise.png")}
                />
            );
        case "skl":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/skl.png")}
                />
            );
        case "storm":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/storm.png")}
                />
            );
        case "tks":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/tks.png")}
                />
            );
        case "veri":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/veri.png")}
                />
            );
        case "wtc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/wtc.png")}
                />
            );
        case "xpr":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/xpr.png")}
                />
            );
        case "adx":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/adx.png")}
                />
            );
        case "arn":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/arn.png")}
                />
            );
        case "bcd":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/bcd.png")}
                />
            );
        case "bpt":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/bpt.png")}
                />
            );
        case "cc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/cc.png")}
                />
            );
        case "comp":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/comp.png")}
                />
            );
        case "dent":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/dent.png")}
                />
            );
        case "ela":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/ela.png")}
                />
            );
        case "etn":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/etn.png")}
                />
            );
        case "gas":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/gas.png")}
                />
            );
        case "gusd":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/gusd.png")}
                />
            );
        case "ilk":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/ilk.png")}
                />
            );
        case "lend":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/lend.png")}
                />
            );
        case "meetone":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/meetone.png")}
                />
            );
        case "ncash":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/ncash.png")}
                />
            );
        case "oax":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/oax.png")}
                />
            );
        case "pink":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/pink.png")}
                />
            );
        case "qlc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/qlc.png")}
                />
            );
        case "rlc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/rlc.png")}
                />
            );
        case "sky":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/sky.png")}
                />
            );
        case "stox":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/stox.png")}
                />
            );
        case "tnb":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/tnb.png")}
                />
            );
        case "vet":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/vet.png")}
                />
            );
        case "x":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/x.png")}
                />
            );
        case "xrp":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/xrp.png")}
                />
            );
        case "ae":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/ae.png")}
                />
            );
        case "arnx":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/arnx.png")}
                />
            );
        case "bch":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/bch.png")}
                />
            );
        case "bq":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/bq.png")}
                />
            );
        case "cdn":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/cdn.png")}
                />
            );
        case "coqui":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/coqui.png")}
                />
            );
        case "dew":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/dew.png")}
                />
            );
        case "elec":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/elec.png")}
                />
            );
        case "etp":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/etp.png")}
                />
            );
        case "gbp":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/gbp.png")}
                />
            );
        case "gvt":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/gvt.png")}
                />
            );
        case "ink":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/ink.png")}
                />
            );
        case "leo":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/leo.png")}
                />
            );
        case "mft":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/mft.png")}
                />
            );
        case "ndz":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/ndz.png")}
                />
            );
        case "ok":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/ok.png")}
                />
            );
        case "pirl":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/pirl.png")}
                />
            );
        case "qnt":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/qnt.png")}
                />
            );
        case "rpx":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/rpx.png")}
                />
            );
        case "slr":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/slr.png")}
                />
            );
        case "stq":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/stq.png")}
                />
            );
        case "tnc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/tnc.png")}
                />
            );
        case "via":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/via.png")}
                />
            );
        case "xas":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/xas.png")}
                />
            );
        case "xsg":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/xsg.png")}
                />
            );
        case "aeon":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/aeon.png")}
                />
            );
        case "ary":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/ary.png")}
                />
            );
        case "bcio":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/bcio.png")}
                />
            );
        case "brd":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/brd.png")}
                />
            );
        case "cdt":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/cdt.png")}
                />
            );
        case "cred":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/cred.png")}
                />
            );
        case "dgb":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/dgb.png")}
                />
            );
        case "elf":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/elf.png")}
                />
            );
        case "eur":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/eur.png")}
                />
            );
        case "gbx":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/gbx.png")}
                />
            );
        case "gxs":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/gxs.png")}
                />
            );
        case "ins":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/ins.png")}
                />
            );
        case "link":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/link.png")}
                />
            );
        case "miota":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/miota.png")}
                />
            );
        case "nebl":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/nebl.png")}
                />
            );
        case "omg":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/omg.png")}
                />
            );
        case "pivx":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/pivx.png")}
                />
            );
        case "qrl":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/qrl.png")}
                />
            );
        case "rub":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/rub.png")}
                />
            );
        case "sls":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/sls.png")}
                />
            );
        case "strat":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/strat.png")}
                />
            );
        case "tnt":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/tnt.png")}
                />
            );
        case "vib":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/vib.png")}
                />
            );
        case "xbc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/xbc.png")}
                />
            );
        case "xtz":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/xtz.png")}
                />
            );
        case "aeur":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/aeur.png")}
                />
            );
        case "ast":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/ast.png")}
                />
            );
        case "bcn":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/bcn.png")}
                />
            );
        case "bsd":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/bsd.png")}
                />
            );
        case "cenz":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/cenz.png")}
                />
            );
        case "crpt":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/crpt.png")}
                />
            );
        case "dgd":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/dgd.png")}
                />
            );
        case "elix":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/elix.png")}
                />
            );
        case "evx":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/evx.png")}
                />
            );
        case "gbyte":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/gbyte.png")}
                />
            );
        case "gzr":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/gzr.png")}
                />
            );
        case "ion":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/ion.png")}
                />
            );
        case "lkk":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/lkk.png")}
                />
            );
        case "mith":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/mith.png")}
                />
            );
        case "neo":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/neo.png")}
                />
            );
        case "omni":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/omni.png")}
                />
            );
        case "plr":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/plr.png")}
                />
            );
        case "qsp":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/qsp.png")}
                />
            );
        case "rvn":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/rvn.png")}
                />
            );
        case "smart":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/smart.png")}
                />
            );
        case "stx":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/stx.png")}
                />
            );
        case "tomo":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/tomo.png")}
                />
            );
        case "vibe":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/vibe.png")}
                />
            );
        case "xbp":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/xbp.png")}
                />
            );
        case "xuc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/xuc.png")}
                />
            );
        case "agi":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/agi.png")}
                />
            );
        case "atlas":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/atlas.png")}
                />
            );
        case "bco":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/bco.png")}
                />
            );
        case "bsv":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/bsv.png")}
                />
            );
        case "chain":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/chain.png")}
                />
            );
        case "crv":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/crv.png")}
                />
            );
        case "dlt":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/dlt.png")}
                />
            );
        case "ella":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/ella.png")}
                />
            );
        case "exmo":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/exmo.png")}
                />
            );
        case "generic":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/generic.png")}
                />
            );
        case "hight":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/hight.png")}
                />
            );
        case "iop":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/iop.png")}
                />
            );
        case "loom":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/loom.png")}
                />
            );
        case "mkr":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/mkr.png")}
                />
            );
        case "neos":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/neos.png")}
                />
            );
        case "one":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/one.png")}
                />
            );
        case "poa":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/poa.png")}
                />
            );
        case "qtum":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/qtum.png")}
                />
            );
        case "ryo":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/ryo.png")}
                />
            );
        case "sngls":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/sngls.png")}
                />
            );
        case "sub":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/sub.png")}
                />
            );
        case "tpay":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/tpay.png")}
                />
            );
        case "vivo":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/vivo.png")}
                />
            );
        case "xby":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/xby.png")}
                />
            );
        case "xvc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/xvc.png")}
                />
            );
        case "agrs":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/agrs.png")}
                />
            );
        case "atm":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/atm.png")}
                />
            );
        case "bcpt":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/bcpt.png")}
                />
            );
        case "btc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/btc.png")}
                />
            );
        case "chat":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/chat.png")}
                />
            );
        case "crw":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/crw.png")}
                />
            );
        case "dnt":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/dnt.png")}
                />
            );
        case "emb":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/emb.png")}
                />
            );
        case "exp":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/exp.png")}
                />
            );
        case "gin":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/gin.png")}
                />
            );
        case "hns":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/hns.png")}
                />
            );
        case "iost":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/iost.png")}
                />
            );
        case "lpt":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/lpt.png")}
                />
            );
        case "mln":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/mln.png")}
                />
            );
        case "neu":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/neu.png")}
                />
            );
        case "ong":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/ong.png")}
                />
            );
        case "poe":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/poe.png")}
                />
            );
        case "r":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/r.png")}
                />
            );
        case "safe":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/safe.png")}
                />
            );
        case "snm":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/snm.png")}
                />
            );
        case "sumo":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/sumo.png")}
                />
            );
        case "trig":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/trig.png")}
                />
            );
        case "vrc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/vrc.png")}
                />
            );
        case "xcp":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/xcp.png")}
                />
            );
        case "xvg":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/xvg.png")}
                />
            );
        case "aion":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/aion.png")}
                />
            );
        case "atom":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/atom.png")}
                />
            );
        case "bdl":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/bdl.png")}
                />
            );
        case "btcd":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/btcd.png")}
                />
            );
        case "chips":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/chips.png")}
                />
            );
        case "cs":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/cs.png")}
                />
            );
        case "dock":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/dock.png")}
                />
            );
        case "emc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/emc.png")}
                />
            );
        case "fair":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/fair.png")}
                />
            );
        case "glxt":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/glxt.png")}
                />
            );
        case "hodl":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/hodl.png")}
                />
            );
        case "iotx":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/iotx.png")}
                />
            );
        case "lrc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/lrc.png")}
                />
            );
        case "mnx":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/mnx.png")}
                />
            );
        case "nexo":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/nexo.png")}
                />
            );
        case "ont":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/ont.png")}
                />
            );
        case "polis":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/polis.png")}
                />
            );
        case "rads":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/rads.png")}
                />
            );
        case "safemoon":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/safemoon.png")}
                />
            );
        case "snt":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/snt.png")}
                />
            );
        case "sushi":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/sushi.png")}
                />
            );
        case "trtl":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/trtl.png")}
                />
            );
        case "vrsc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/vrsc.png")}
                />
            );
        case "xdn":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/xdn.png")}
                />
            );
        case "xzc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/xzc.png")}
                />
            );
        case "algo":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/algo.png")}
                />
            );
        case "audr":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/audr.png")}
                />
            );
        case "beam":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/beam.png")}
                />
            );
        case "btch":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/btch.png")}
                />
            );
        case "chsb":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/chsb.png")}
                />
            );
        case "ctr":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/ctr.png")}
                />
            );
        case "doge":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/doge.png")}
                />
            );
        case "emc2":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/emc2.png")}
                />
            );
        case "fct":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/fct.png")}
                />
            );
        case "gmr":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/gmr.png")}
                />
            );
        case "hot":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/hot.png")}
                />
            );
        case "iq":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/iq.png")}
                />
            );
        case "lsk":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/lsk.png")}
                />
            );
        case "mnz":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/mnz.png")}
                />
            );
        case "ngc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/ngc.png")}
                />
            );
        case "oot":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/oot.png")}
                />
            );
        case "poly":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/poly.png")}
                />
            );
        case "rap":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/rap.png")}
                />
            );
        case "sai":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/sai.png")}
                />
            );
        case "snx":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/snx.png")}
                />
            );
        case "sys":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/sys.png")}
                />
            );
        case "trx":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/trx.png")}
                />
            );
        case "vtc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/vtc.png")}
                />
            );
        case "xem":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/xem.png")}
                />
            );
        case "yfi":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/yfi.png")}
                />
            );
        case "amb":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/amb.png")}
                />
            );
        case "aury":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/aury.png")}
                />
            );
        case "bela":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/bela.png")}
                />
            );
        case "btcp":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/btcp.png")}
                />
            );
        case "chz":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/chz.png")}
                />
            );
        case "ctxc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/ctxc.png")}
                />
            );
        case "dot":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/dot.png")}
                />
            );
        case "eng":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/eng.png")}
                />
            );
        case "fida":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/fida.png")}
                />
            );
        case "gmt":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/gmt.png")}
                />
            );
        case "hpb":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/hpb.png")}
                />
            );
        case "itc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/itc.png")}
                />
            );
        case "ltc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/ltc.png")}
                />
            );
        case "moac":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/moac.png")}
                />
            );
        case "nio":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/nio.png")}
                />
            );
        case "ost":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/ost.png")}
                />
            );
        case "pot":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/pot.png")}
                />
            );
        case "ray":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/ray.png")}
                />
            );
        case "salt":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/salt.png")}
                />
            );
        case "soc":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/soc.png")}
                />
            );
        case "taas":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/taas.png")}
                />
            );
        case "tusd":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/tusd.png")}
                />
            );
        case "vtho":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/vtho.png")}
                />
            );
        case "xin":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/xin.png")}
                />
            );
        case "yoyow":
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require("../../../../assets/crypto-icons/yoyow.png")}
                />
            );

        default:
            return (
                <Image
                    style={size === "sm" ? styles.iconSM : styles.icon}
                    source={require(`../../../../assets/crypto-icons/generic.png`)}
                />
            );
    }
};
