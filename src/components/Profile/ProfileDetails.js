import React from "react";
import classes from "./ProfileDetails.module.css"
import ProfileCard from "./UI/ProfileCard";

const ProfileDetails = () => {
  return (
    <div className={classes.details}>
      <ProfileCard CardName="education">
        <div>
          <h3>Education :</h3>
          <h4>Sri Ranganathar Institute of engineering and Technology</h4>
          <div className={classes.graduationDetails}>
            <h4>Degree : </h4>
            <p> B.tech</p>
          </div>
          <div className={classes.graduationDetails}>
            <h4>Graduated : </h4>
            <p> NO</p>
          </div>
          <div className={classes.graduationDetails}>
            <h4>Graduation Year : </h4>
            <p> 2019-2023</p>
          </div>
        </div>
      </ProfileCard>
      <ProfileCard CardName="status">
        <h3>Status : </h3>
        <p> Not Working</p>
      </ProfileCard>
      <ProfileCard CardName="skills">
        <h3>Skills : </h3>
        <div className={classes.skillItem}>
          <div className={classes.skillCard}>
            <p>Nodejs</p>
          </div>
          <div className={classes.skillCard}>
            <p>Reactjs</p>
          </div>
          <div className={classes.skillCard}>
            <p>Angular</p>
          </div>
          <div className={classes.skillCard}>
            <p>Java</p>
          </div>
          <div className={classes.skillCard}>
            <p>Reactjs</p>
          </div>
          <div className={classes.skillCard}>
            <p>.net</p>
          </div>
          <div className={classes.skillCard}>
            <p>C programming</p>
          </div>
          <div className={classes.skillCard}>
            <p>React Native</p>
          </div>
          <div className={classes.skillCard}>
            <p>python</p>
          </div>
        </div>
      </ProfileCard>
    </div>
  );
};

export default ProfileDetails;
