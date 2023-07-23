import React, {useState} from "react"
import { Button, TextField } from '@material-ui/core';

const Referral = ({ referrals }) => {
  return (
    <div>
      <h2>Referrals</h2>
      <ul>
        {referrals.map((referral) => (
          <li key={referral.id}>{referral.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default Referral;