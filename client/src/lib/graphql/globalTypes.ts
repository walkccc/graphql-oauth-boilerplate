/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum LoginType {
  GITHUB = "GITHUB",
  GOOGLE = "GOOGLE",
}

export interface LogInInput {
  code: string;
  loginType: LoginType;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
