import React from "react";
import Avatar from "@mui/material/Avatar";
import classes from "./StudentCard.module.css";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import NotInterestedSharpIcon from "@mui/icons-material/NotInterestedSharp";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import BusinessIcon from "@mui/icons-material/Business";
const STUDENT_DATA = [
  {
    name: "AMAL DAS",
    headline: "Intern at I-BACUS",
    course: "Bachelor of engineering",
    branch: "Electronics and Communication",
    placementStatus: "Placed at I-BACUS TECH",
    image:
      "https://upload.wikimedia.org/wikipedia/en/d/d6/Superman_Man_of_Steel.jpg",
    NumberOfApllication: 5,
    NumberOfApplicationRejected: 2,
    NumberOfApllicationSelected: 2,
    NumberOfApllicationPending: 1,
    NameOfCompaniesApllied: [
      { name: "TCS", date: "30-Mar-2023" },
      { name: "WIPRO", date: "28-Feb-2023" },
      { name: "GOOGLE", date: "25-Jan-2023" },
    ],
    collegeName: "Sri Ranganathar Institute Of Engineering and Technology",
    Batch: 2023,
  },
  {
    name: "ASWIN",
    headline: "Full satck developer",
    course: "Bachelor of engineering",
    branch: "Electronics and Communication",
    placementStatus: "Placed at I-BACUS TECH",
    image:
      "https://cdn.mos.cms.futurecdn.net/5vPndSdDicde7EwTyAtqjk-480-80.jpg",
    NumberOfApllication: 7,
    NumberOfApplicationRejected: 2,
    NumberOfApllicationSelected: 3,
    NumberOfApllicationPending: 2,
    NameOfCompaniesApllied: [
      { name: "TCS", date: "30-Mar-2023" },
      { name: "WIPRO", date: "28-Feb-2023" },
      { name: "GOOGLE", date: "25-Jan-2023" },
    ],
    collegeName: "Sri Ranganathar Institute Of Engineering and Technology",
    Batch: 2023,
  },
  {
    name: "DEVARAJAN",
    headline: "UI/UX Designer",
    course: "Bachelor of engineering",
    branch: "Electronics and Communication",
    placementStatus: "Nil",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCELxs9kucYga4i_DYQ0h7mklSRR8-BI0Gl-c2lHLP1w&s",
    NumberOfApllication: 5,
    NumberOfApplicationRejected: 2,
    NumberOfApllicationSelected: 2,
    NumberOfApllicationPending: 1,
    NameOfCompaniesApllied: [
      { name: "TCS", date: "30-Mar-2023" },
      { name: "WIPRO", date: "28-Feb-2023" },
      { name: "GOOGLE", date: "25-Jan-2023" },
      { name: "GOOGLE", date: "25-Jan-2023" },
    
    ],
    collegeName: "Sri Ranganathar Institute Of Engineering and Technology",
    Batch: 2023,
  },
];

const StudentCard = () => {
  return (
    <div className={classes.content}>
      {STUDENT_DATA.map((data) => (
        <div className={classes.card}>
          <div className={classes.profile}>
            <Avatar alt="Student image" src={data.image} />

            <div className={classes.namings}>
              <h3>{data.name}</h3>
              <p>{data.headline}</p>
            </div>
          </div>

          <div className={classes.details}>
            <div className={classes.courseDetails}>
              <p>
                <span className={classes.courseTitle}>Course</span>
                <span>{` : ${data.course}`}</span>
              </p>
              <p>
                <span className={classes.courseTitle}>Branch</span>
                <span>{` : ${data.branch}`}</span>
              </p>
              <p>
                <span className={classes.courseTitle}>Placement Status</span>
                <span>{` : ${data.placementStatus}`}</span>
              </p>
              <p>
                <span className={classes.courseTitle}>College Name</span>
                <span>{` : ${data.collegeName}`}</span>
              </p>
              <p>
                <span className={classes.courseTitle}>Batch</span>
                <span>{` : ${data.Batch}`}</span>
              </p>
            </div>
            <div className={classes.placementDetails}>
              <p>
                <span className={classes.courseTitle}>
                  Number of Companies Applied
                </span>
                <span>{` : ${data.NumberOfApllication}`}</span>
              </p>
              <p>
                <span className={classes.courseTitle}>
                  <BusinessIcon />
                  Company Name :
                </span>
                <span>
                  {data.NameOfCompaniesApllied.map((company) => (
                    <ul>
                      <li>{`${company.name} - ${company.date}`}</li>
                    </ul>
                  ))}
                </span>
              </p>
              <div className={classes.applicationStatus}>
                <h4>Application Status</h4>
                <p>
                  <span>
                    <CheckBoxRoundedIcon  sx={{fontSize:"1rem"}}/>
                    Selected
                  </span>
                  <span
                    className={classes.applicationNumbers}
                  >{` : ${data.NumberOfApllicationSelected}`}</span>
                </p>
                <p>
                  <NotInterestedSharpIcon sx={{fontSize:"1rem"}} />
                  Rejected
                  <span
                    className={classes.applicationNumbers}
                  >{` : ${data.NumberOfApplicationRejected}`}</span>
                </p>
                <p>
                  <PendingActionsIcon  sx={{fontSize:"1rem"}} />
                  Pending
                  <span
                    className={classes.applicationNumbers}
                  >{` : ${data.NumberOfApllicationPending}`}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentCard;
