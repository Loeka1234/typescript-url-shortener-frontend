import React from "react";
import { IconContext } from "react-icons";

// Styles
import styles from "./styles/WhyChooseUs.module.css";
// Icons
import {
    FcLock,
    FcComboChart,
    FcElectronics,
    FcMultipleDevices,
    FcApproval,
    FcAssistant,
} from "react-icons/fc";

export interface Props {}

const WhyChooseUs: React.SFC<Props> = () => {
    return (
        <div className={styles.grid}>
            <IconContext.Provider value={{ size: "64px", style: { margin: "1rem" } }}>
                <div>
                    <FcLock />
                    <h1>Secure</h1>
                    <p>
                        We have the most secure servers equipped with the HTTPS
                        protocol and data encryption.
                    </p>
                </div>
                <div>
                    <FcComboChart />
                    <h1>Analytics</h1>
                    <p>Track the analytics of your shortened links.</p>
                </div>
                <div>
                    <FcElectronics />
                    <h1>Fast</h1>
                    <p>Our servers guarantee the fastest speed.</p>
                </div>
                <div>
                    <FcMultipleDevices />
                    <h1>Multiple devices</h1>
                    <p>
                        We are compatible across all devices such as laptops,
                        mobiles and more.
                    </p>
                </div>
                <div>
                    <FcApproval />
                    <h1>Reliable</h1>
                    <p>
                        Links that try to disseminate spam, viruses and malware
                        are deleted.
                    </p>
                </div>
                <div>
                    <FcAssistant />
                    <h1>Great team</h1>
                    <p>You can always contact us if you have any questions.</p>
                </div>
            </IconContext.Provider>
        </div>
    );
};

export default WhyChooseUs;
