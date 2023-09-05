import React from "react";
import styles from "./Team.module.css";
import member1 from "../../assets/teamMember1.png";
import member2 from "../../assets/teamMember2.png";
import member3 from "../../assets/teamMember3.png";
import member4 from "../../assets/teamMember4.png";
import member5 from "../../assets/teamMember5.png";
import member6 from "../../assets/teamMember6.png";

const Team = () => {
    return (
        <div className={styles.teamSection}>
            <div className={styles.teamContainer}>
                <h2 className={styles.teamHeader}>Our Team</h2>
                <div className={styles.teamMembers}>
                    <div className={styles.teamRow}>
                        <div className={styles.teamIndividual}>
                            <div className={styles.teamIndividualContainer}>
                                <img
                                    className={styles.teamIndividualIcon}
                                    src={member1}
                                    alt="team member"
                                />
                                <div className={styles.teamDetail}>
                                    <h5 className={styles.teamIndividualName}>Danial Def</h5>
                                    <p className={styles.teamIndividualCasesSolved}>301 Cases</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.teamIndividual}>
                            <div className={styles.teamIndividualContainer}>
                                <img
                                    className={styles.teamIndividualIcon}
                                    src={member2}
                                    alt="team member"
                                />
                                <div className={styles.teamDetail}>
                                    <h5 className={styles.teamIndividualName}>Sanfole</h5>
                                    <p className={styles.teamIndividualCasesSolved}>850 Cases</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.teamIndividual}>
                            <div className={styles.teamIndividualContainer}>
                                <img
                                    className={styles.teamIndividualIcon}
                                    src={member3}
                                    alt="team member"
                                />
                                <div className={styles.teamDetail}>
                                    <h5 className={styles.teamIndividualName}>Cesforila</h5>
                                    <p className={styles.teamIndividualCasesSolved}>470 Cases</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.teamRow}>
                        <div className={styles.teamIndividual}>
                            <div className={styles.teamIndividualContainer}>
                                <img
                                    className={styles.teamIndividualIcon}
                                    src={member4}
                                    alt="team member"
                                />
                                <div className={styles.teamDetail}>
                                    <h5 className={styles.teamIndividualName}>Colleen</h5>
                                    <p className={styles.teamIndividualCasesSolved}>180 Cases</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.teamIndividual}>
                            <div className={styles.teamIndividualContainer}>
                                <img
                                    className={styles.teamIndividualIcon}
                                    src={member5}
                                    alt="team member"
                                />
                                <div className={styles.teamDetail}>
                                    <h5 className={styles.teamIndividualName}>Haldone</h5>
                                    <p className={styles.teamIndividualCasesSolved}>212 Cases</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.teamIndividual}>
                            <div className={styles.teamIndividualContainer}>
                                <img
                                    className={styles.teamIndividualIcon}
                                    src={member6}
                                    alt="team member"
                                />
                                <div className={styles.teamDetail}>
                                    <h5 className={styles.teamIndividualName}>Nik Jeo</h5>
                                    <p className={styles.teamIndividualCasesSolved}>350 Cases</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
