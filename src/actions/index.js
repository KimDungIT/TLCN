import * as Types from "./../constants/ActionTypes";
import callApi from "../utils/apiCaller";
import { notification } from "antd";
import setAuthorization from "./../utils/setAuthorizationToken";
import jwtDecode from "jwt-decode";

//get input search
export const actSearchInputRequest = (searchInput) => {
  return {
    type: Types.SEARCH_INPUT,
    searchInput
  }
}
//get classes by class
export const actFetchClassesByClassRequest = (classTeach, page) => {
  return dispatch => {
    return callApi(`api/classes/class?classTeach=${classTeach}&page=${page}`,
    "GET",
    null).then(res => {
      if(res.status === 200) {
        dispatch(actFetchClassesByClass(res.data));
      }
    }).catch(error => {
      notification.error({
        message: "Error ",
        description: error.message
      });
    });
  }
}
export const actFetchClassesByClass = classes => {
  return {
    type: Types.FETCH_CLASSES_BY_CLASS_TEACH,
    classes
  }
}
//get classes suggest
export const actFetchClassesSuggestRequest = (id, page) => {
  return dispatch => {
    return callApi(`api/classes/classesSuggest?idUser=${id}&page=${page}`,
    "GET",
    null).then(res => {
      if(res.status === 200) {
        dispatch(actFetchClassesSuggest(res.data));
      }
    }).catch(error => {
      notification.error({
        message: "Error ",
        description: error.message
      });
    });
  }
}

export const actFetchClassesSuggest = classesSuggest => {
  return {
    type: Types.FETCH_CLASS_SUGGEST,
    classesSuggest
  }
}

//get top six classes
export const actFetchTopSixRequest = () => {
  return dispatch => {
    return callApi('api/classes/topSix', 
    "GET", 
    null).then(res => {
      if(res.status === 200) {
        dispatch(actFetchTopSix(res.data));
      }
    }).catch(error => {
      notification.error({
        message: "Error ",
        description: error.message
      });
    });
  }
}
export const actFetchTopSix = info => {
  return {
    type: Types.TOP_SIX_CLASSES,
    info
  }
}
//delete class register
export const actDeleteClassRegisterRequest = idClassRegister => {
  return dispatch => {
    return callApi(
      `api/classRegister/changeStatus?idClassRegister=${idClassRegister}`,
      "DELETE",
      null
    ).then(res => {
      if (res.status === 200) {
        dispatch(actDeleteClassRegister(idClassRegister));
        notification.success({
          message: "Success",
          description: "Huỷ lớp thành công!"
        });
      }
    }).catch(error => {
      notification.error({
        message: "Error ",
        description: error.message
      });
    });
  }
}
export const actDeleteClassRegister = idClassRegister => {
  return {
    type: Types.DELETE_CLASS_REGISTER,
    idClassRegister
  }
}

//delete class
export const actDeleteClassRequest = idClass => {
  return dispatch => {
    return callApi(
      `api/classes/changeStatus?idClass=${idClass}`,
      "DELETE",
      null
    ).then(res => {
      if (res.status === 200) {
        dispatch(actDeleteClass(idClass));
        notification.success({
          message: "Success",
          description: "Huỷ lớp thành công!"
        });
      }
    }).catch(error => {
      notification.error({
        message: "Error ",
        description: error.message
      });
    });
  }
}
export const actDeleteClass = idClass => {
  return {
    type: Types.DELETE_CLASS,
    idClass
  }
}

//search dynamic classes
export const actSearchRequest = (searchInput, page) => {
  return dispatch => {
    return callApi(
      `api/classes/spec?page=${page}`, "POST", searchInput).then(res => {
        if (res.status === 200) {
          dispatch(actSearch(res.data));
        }
      }).catch(error => {
        notification.error({
          message: "Error ",
          description: error.message
        });
      })
  }
}
export const actSearch = classes => {
  return {
    type: Types.SEARCH,
    classes
  };
}

//get list class parent register
export const actFetchListClassParentRegisterRequest = (idUser)  => {
  return dispatch => {
    return callApi(
      `api/classes/listClassesOfUser?idUser=${idUser}`,
      "GET",
      null
    )
      .then(res => {
        dispatch(actFetchListClassParentRegister(res.data));
        // if (res.status === 200) {
        //   notification.success({
        //     message: "Success",
        //     description: "Get list tutor register class successfully!"
        //   });
        // }
      })
      .catch(error => {
        notification.error({
          message: "Error ",
          description: error.message
        });
      });
  };
}

export const actFetchListClassParentRegister = classes => {
  return {
    type: Types.FETCH_CLASS_PARENT_REGISTER,
    classes
  };
};

//get list tutor register class by idUser
export const actFetchListClassTutorRegisterRequest = idUser => {
  return dispatch => {
    return callApi(
      `api/classRegister/getListClassTutorRegister?idUser=${idUser}`,
      "GET",
      null
    )
      .then(res => {
        
        if (res.status === 200) {
          dispatch(actFetchListClassTutorRegister(res.data));
          // notification.success({
          //   message: "Success",
          //   description: "Get list tutor register class successfully!"
          // });
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

export const actFetchListClassTutorRegister = classRegister => {
  return {
    type: Types.FETCH_CLASS_TUTOR_REGISTER,
    classRegister
  };
};

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
    return callApi(`api/tutors/changeInfo/${idTutor}`, "POST", tutorInfo).then(res => 
      {
        if(res.status === 200){
          dispatch(actChangeInforTutor(res.data));
          history.goBack();
          // notification.success({
          //   message: "Success",
          //   description: "change info tutor successfully!"
          // });
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
            description: "Đăng ký nhận lớp thành công. Vui lòng chờ trung tâm duyệt đăng ký. Trung tâm sẽ liên hệ với bạn sau!"
          });
        }
      })
      .catch(error => {
        notification.error({
          message: "Tutor has already register this class",
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
        if (res.status === 200) {
          dispatch(actFetchTutorRegisterClass(res.data));
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
        
        if (res.status === 200) {
          dispatch(actGetClass(res.data));
        }
      })
      .catch(error => {
        console.log(error);
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
            description: "Thay đổi thông tin thành công!"
          });
        }
      })
      .catch(error => {
        notification.error({
          message: "Thay đổi thông tin không thành công!",
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
};

//Add tutor
export const actAddTutorRequest = (tutor, idUser, history) => {
  return callApi(`api/tutors/create/?idUser=${idUser}`, "POST", tutor)
    .then(res => {
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
      district: classes.district,
      salary: parseFloat(salary),
      serviceFee: 0.25,
      genderRequirement: classes.requireGender,
      levelRequirement: classes.requireLevel
    })
      .then(res => {
       // dispatch(actAddClass(res.data));
       // history.push("/");
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
// export const actAddClass = classes => {
//   return {
//     type: Types.ADD_CLASSES,
//     classes
//   };
// };

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
export const actFetchClassesRequest = (page) => {
  return dispatch => {
    return callApi(`api/classes?page=${page}`, "GET", null).then(res => {
      dispatch(actFetchClasses(res.data));
      // notification.success({
      //   message: "Success",
      //   description:
      //     "Get classes by status successful!"
      // });
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
    ).then(res => {
        let typeAccount = user.radioTypeAccount;
        if (res.data.role === `[${typeAccount}]`) {
          const token = res.data.access_token;
          localStorage.setItem("token", token);
          setAuthorization(token);
          dispatch(setCurrentUser(jwtDecode(token)));
          if (typeAccount === "PHUHUYNH") {
            history.push("/parent");
          } else {
            history.push("/");
          }
          notification.success({
            message: "Success",
            description: "Đăng nhập thành công!"
          });
        } else {
          notification.error({
            message: "Số điện thoại hoặc mật khẩu không đúng. Vui lòng thử lại!",
            description:
              "Số điện thoại hoặc mật khẩu không đúng. Vui lòng thử lại!"
          });
        }
      })
      .catch(error => {
        notification.error({
          message: "Số điện thoại hoặc mật khẩu không đúng. Vui lòng thử lại!",
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
