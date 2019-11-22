import * as Types from "./../constants/ActionTypes";
import callApi from "../utils/apiCaller";
import { notification } from "antd";
import setAuthorization from "./../utils/setAuthorizationToken";
import jwtDecode from "jwt-decode";

//send request change image
export const actChangeImageRequest = (formData) => {
  return dispatch => {
    return  callApi("api/tutors/changeImage", "POST", formData).then(res => {
      dispatch(actChangeImage(res.data));
    }).catch(error => {
      notification.error({
        message: "Error get image",
        description: error.message
      });
    });
  }
}

export const actChangeImage = (image) =>{
  return {
    type: Types.CHANGE_IMAGE,
    image
  }
} 

//send request change information user
export const actChangeInforTutorRequest = (tutorInfo, idTutor, history) => {
  return dispatch => {
    return callApi(`api/tutors/changeInfo/${idTutor}`, 'POST', tutorInfo).then(res => 
      {
        if(res.status === 200){
          dispatch(actChangeInforTutor(res.data));
          history.goBack();
          notification.success({
            message: "Success",
            description: "change info tutor successfully!"
          });
        }
      }).catch(error => {
        notification.error({
          message: "Error change info tutor",
          description: error.message
        });
      });
  }
}

export const actChangeInforTutor = (tutorInfo) => {
  return {
    type: Types.CHANGE_INFO_TUTOR,
    tutorInfo
  }
}

//get name
export const actFetchUserNameRequest = idClass => {
  return dispatch => {
    return callApi(`api/users/getUserByTutor?idClass=${idClass}`, "GET", null)
      .then(res => {
        if (res.status === 200) {
          dispatch(actFetchUserName(res.data));
          notification.success({
            message: "Success",
            description: "Get username successfully!"
          });
        }
      })
      .catch(error => {
        notification.error({
          message: "Error Get username",
          description: error.message
        });
      });
  };
};
// dispatch
export const actFetchUserName = users => {
  return {
    type: Types.FETCH_USER_REGISTER,
    users
  };
};
//tutor register class
export const actTutorRegisterClassRequest = (classRegisterInfo, idClass) => {
  return dispatch => {
    return callApi(
      `api/classRegister/create?idClass=${idClass}`,
      "POST",
      classRegisterInfo
    )
      .then(res => {
        if (res.status === 200) {
          dispatch(actTutorRegisterClass(res.data));
          notification.success({
            message: "Success",
            description: "Tutor register class successfully!"
          });
        }
      })
      .catch(error => {
        notification.error({
          message: "Error tutor register class",
          description: error.message
        });
      });
  };
};

//dispatch redux
export const actTutorRegisterClass = classRegisterInfo => {
  return {
    type: Types.TUTOR_REGISTER_CLASS,
    classRegisterInfo
  };
};

//get list tutor register class
export const actFetchTutorRegisterClassRequest = idClass => {
  return dispatch => {
    return callApi(
      `api/classRegister/getListRegister?idClass=${idClass}`,
      "GET",
      null
    )
      .then(res => {
        dispatch(actFetchTutorRegisterClass(res.data));
        if (res.status === 200) {
          notification.success({
            message: "Success",
            description: "Get list tutor register class successfully!"
          });
        }
      })
      .catch(error => {
        notification.error({
          message: "Error get list tutor register class",
          description: error.message
        });
      });
  };
};

export const actFetchTutorRegisterClass = classRegister => {
  return {
    type: Types.FETCH_TUTOR_REGISTER_CLASS,
    classRegister
  };
};

//get class by id
export const actGetClassRequest = id => {
  return dispatch => {
    return callApi(`api/classes/${id}/register`, "GET", null)
      .then(res => {
        dispatch(actGetClass(res.data));
        if (res.status === 200) {
          notification.success({
            message: "Success",
            description: "Get class successfully!"
          });
        }
      })
      .catch(error => {
        notification.error({
          message: "Error get class",
          description: error.message
        });
      });
  };
};

//dispatch redux
export const actGetClass = classInfo => {
  return {
    type: Types.CLASS_REGISTER,
    classInfo
  };
};

//change information user
export const actChangeInfoUserRequest = infoUser => {
  return dispatch => {
    return callApi("api/users/changeInfo", "POST", infoUser)
      .then(res => {
        dispatch(actChangeInfoUser(res.data));
        if (res.status === 200) {
          notification.success({
            message: "Success",
            description: "Change information user successfully!"
          });
        }
      })
      .catch(error => {
        notification.error({
          message: "Error change information",
          description: error.message
        });
      });
  };
};

export const actChangeInfoUser = infoUser => {
  return {
    type: Types.CHANGE_INFO_USER,
    infoUser
  };
};
//get user
export const actFetchUserRequest = () => {
  return dispatch => {
    return callApi("api/users/getUser", "GET", null).then(res => {
      dispatch(actFetchUser(res.data));
    });
  };
};
export const actFetchUser = infoUser => {
  return {
    type: Types.FETCH_USER,
    infoUser
  };
};

//get tutor
export const actFetchTutorRequest = idUser => {
  return dispatch => {
    return callApi(`api/tutors/getTutor/${idUser}`, "GET", null).then(res => {
      dispatch(actFetchTutor(res.data));
    });
  };
};

export const actFetchTutor = tutor => {
  return {
    type: Types.FETCH_TUTOR,
    tutor
  };
};

//Upload image
export const actUploadImageRequest = fileImage => {
  return callApi("api/tutors/uploadImage", "POST", fileImage);
    // .then(res => {
    //   if (res.status === 200) {
    //     notification.success({
    //       message: "Success",
    //       description: "Upload successfully!"
    //     });
    //   }
    // })
    // .catch(error => {
    //   notification.error({
    //     message: "Error Upload",
    //     description: error.message
    //   });
    // });
};

//Add tutor
export const actAddTutorRequest = (tutor, idUser, history) => {
  return callApi(`api/tutors/create/?idUser=${idUser}`, "POST", tutor)
    .then(res => {
      console.log("Status: ", res.data);
      if (res.status === 200) {
        history.push("/login");
        notification.success({
          message: "Success",
          description: "Add tutor successfully!"
        });
      }
    })
    .catch(error => {
      notification.error({
        message: "Error create tutor",
        description: error.message
      });
    });
};

//Add class
export const actAddClassRequest = (classes, history) => {
  return dispatch => {
    var salary = classes.salary;
    console.log(salary);
    return callApi("api/classes/createClass", "POST", {
      classTeach: classes.classTeach,
      subject: classes.subjects,
      timeTeach: classes.time,
      address: classes.address,
      salary: parseFloat(salary),
      serviceFee: 0.25,
      genderRequirement: classes.requireGender,
      levelRequirement: classes.requireLevel
    })
      .then(res => {
        dispatch(actAddClass(res.data));
        history.push("/");
        if (res.status === 200) {
          notification.success({
            message: "Success",
            description:
              "Đăng ký thành công, vui lòng chờ trung tâm kiểm duyệt!"
          });
        }
      })
      .catch(error => {
        notification.error({
          message: "Error create class",
          description: error.message
        });
      });
  };
};
export const actAddClass = classes => {
  return {
    type: Types.ADD_CLASSES,
    classes
  };
};

//logout
export const logout = () => {
  return dispatch => {
    localStorage.removeItem("token");
    setAuthorization(false);
    dispatch(setCurrentUser({}));
  };
};

//Get classes by status = "Lớp mới"
//send request to server
export const actFetchClassesRequest = () => {
  return dispatch => {
    return callApi("api/classes", "GET", null).then(res => {
      dispatch(actFetchClasses(res.data));
    });
  };
};

//dispatch redux
export const actFetchClasses = classes => {
  return {
    type: Types.FETCH_CLASSES,
    classes
  };
};

//login
//send request to server
export const actLoginRequest = (user, history) => {
  return dispatch => {
    return callApi(
      `oauth/token?username=${user.username}&password=${user.password}&grant_type=password&client_id=client&client_secret=ttgs123`,
      "POST"
    )
      .then(res => {
        let typeAccount = user.radioTypeAccount;
        console.log("type acc: ", typeAccount);
        if (res.data.role === `[${typeAccount}]`) {
          const token = res.data.access_token;
          localStorage.setItem("token", token);
          setAuthorization(token);
          dispatch(setCurrentUser(jwtDecode(token)));

          if (typeAccount === "PHUHUYNH") {
            history.push("/find-tutor");
          } else {
            history.push("/class-list");
          }
          notification.success({
            message: "Success",
            description: "Login successfully!"
          });
        } else {
          notification.error({
            message: "Error login",
            description:
              "Your Username or Password is incorrect. Please try again!"
          });
        }
      })
      .catch(error => {
        notification.error({
          message: "Error login",
          description: error.message
        });
      });
  };
};

//dispatch redux
export const setCurrentUser = user => {
  return {
    type: Types.SET_CURRENT_USER,
    user
  };
};
