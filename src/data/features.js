
import easytouse from 'images/features/easyToUse.svg'
import easyToUseData from 'data/feature-easyToUseData';
import nSPVLinks from "data/nSpvLinks"
import nspv from 'images/features/nspv.svg';
import transparent from 'images/features/transparent.svg'
import openSourceData from 'data/feature-opensourceData'
import BannerBorder from 'components/Molecules/banners/BannerBorder';
import React from 'react';

const features = [
    {
        title: "Tokel is Easy to Use",
        subtitle: "Created with people in mind",
        desc: "We are focusing on bringing simple, easy to use blockchain technology to everybody, in an non exclusive, inexpensive way.",
        image: easytouse,
        data: easyToUseData
    },
    {
        title: "Truly Decentralized Technology",
        subtitle: "nSPV - Super Light Client",
        desc: "Over 100x quicker and lighter when compared traditional SPV.",
        links: nSPVLinks,
        bg: nspv,
        // eslint-disable-next-line react/display-name
        banner: <BannerBorder />
    },
    {
        title: "Open Source. Open Community",
        subtitle: "Tokel is Transparent",
        desc: "We are a proud open source project which will always stay that way.",
        image: transparent,
        data: openSourceData
    }                     
]

export default features