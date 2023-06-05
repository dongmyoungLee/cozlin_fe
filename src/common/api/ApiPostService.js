import {apiClient} from "./ApiClient";


export const emailValidService = (userId, flag) => apiClient.post('/mail/confirm', {}, {
    params : {
      email: userId,
      flag: flag,
    }}
)

export const findPwdService = (userId, flag) => apiClient.post('/user/update-pw', {}, {
    params : {
      email: userId,
      flag: flag,
    }}
)

export const findIdService = (userPhone) => apiClient.post('/user/findByUserId', {}, {
    params : {
      phone : userPhone
    }
})


export const signUp = (id, pwd, phone, birthBefore, birthAfter , addr, name) => apiClient.post('/user', {}, {
    params : {
      userId: id,
      userPassword: pwd,
      userPhone: phone,
      userBirth: `${birthBefore + birthAfter}`,
      userAddr: addr,
      userName: name,
    }}
)

export const executeJwtAuthenticationTokenService = (username, password) => apiClient.post('/authenticate', {username, password})

export const findUserJobInfo = (userId) => apiClient.post('/user/job', {}, {
  params : {
    id : userId
  }
})

export const updateUserJobProfile = (id, userDesiredJobGroup, userDesiredJob, userDesiredJobGroupCareer, userJobSkill, userLastCompany, userLastJobGroup, userLastJobGroupCareer, userLastSchoolName, userLastSchoolStatus, userLastSchoolDept) => apiClient.post('/user/job-profile', {}, {
  params : {
    id : id,
    userDesiredJobGroup : userDesiredJobGroup,
    userDesiredJob : userDesiredJob,
    userDesiredJobGroupCareer : userDesiredJobGroupCareer,
    userJobSkill : userJobSkill,
    userLastCompany : userLastCompany,
    userLastJobGroup : userLastJobGroup,
    userLastJobGroupCareer : userLastJobGroupCareer,
    userLastSchoolName : userLastSchoolName,
    userLastSchoolStatus : userLastSchoolStatus,
    userLastSchoolDept : userLastSchoolDept,
  }
})



