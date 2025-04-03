(() => {
var exports = {};
exports.id = "pages/dashboard";
exports.ids = ["pages/dashboard"];
exports.modules = {

/***/ "./components/FundRiserCard.js":
/*!*************************************!*\
  !*** ./components/FundRiserCard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_interactions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/interactions */ "./redux/interactions.js");
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helper/helper */ "./helper/helper.js");
/* harmony import */ var _helper_toastMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helper/toastMessage */ "./helper/toastMessage.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\navee\\Desktop\\CrowdMint-A-Blockchain-Based-Crowdfunding-Platform\\client\\components\\FundRiserCard.js";









const colorMaker = state => {
  if (state === 'Fundraising') {
    return 'bg-cyan-500';
  } else if (state === 'Expired') {
    return 'bg-red-500';
  } else {
    return 'bg-emerald-500';
  }
};

const FundRiserCard = ({
  props,
  pushWithdrawRequests
}) => {
  const {
    0: btnLoader,
    1: setBtnLoader
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: amount,
    1: setAmount
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const crowdFundingContract = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.fundingReducer.contract);
  const account = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.web3Reducer.account);
  const web3 = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.web3Reducer.connection);

  const contributeAmount = (projectId, minContribution) => {
    if (amount < minContribution) {
      (0,_helper_toastMessage__WEBPACK_IMPORTED_MODULE_5__.toastError)(`Minimum contribution amount is ${minContribution}`);
      return;
    }

    setBtnLoader(projectId);
    const contributionAmount = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_4__.etherToWei)(amount);
    const data = {
      contractAddress: projectId,
      amount: contributionAmount,
      account: account
    };

    const onSuccess = () => {
      setBtnLoader(false);
      setAmount(0);
      (0,_helper_toastMessage__WEBPACK_IMPORTED_MODULE_5__.toastSuccess)(`Successfully contributed ${amount} ETH`);
    };

    const onError = message => {
      setBtnLoader(false);
      (0,_helper_toastMessage__WEBPACK_IMPORTED_MODULE_5__.toastError)(message);
    };

    (0,_redux_interactions__WEBPACK_IMPORTED_MODULE_3__.contribute)(crowdFundingContract, data, dispatch, onSuccess, onError);
  };

  const requestForWithdraw = projectId => {
    setBtnLoader(projectId);
    const contributionAmount = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_4__.etherToWei)(amount);
    const data = {
      description: `${amount} ETH requested for withdraw`,
      amount: contributionAmount,
      recipient: account,
      account: account
    };

    const onSuccess = data => {
      setBtnLoader(false);
      setAmount(0);

      if (pushWithdrawRequests) {
        pushWithdrawRequests(data);
      }

      (0,_helper_toastMessage__WEBPACK_IMPORTED_MODULE_5__.toastSuccess)(`Successfully requested for withdraw ${amount} ETH`);
    };

    const onError = message => {
      setBtnLoader(false);
      (0,_helper_toastMessage__WEBPACK_IMPORTED_MODULE_5__.toastError)(message);
    };

    (0,_redux_interactions__WEBPACK_IMPORTED_MODULE_3__.createWithdrawRequest)(web3, projectId, data, onSuccess, onError);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    className: "card relative overflow-hidden my-4",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: `ribbon ${colorMaker(props.state)}`,
      children: props.state
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: `/project-details/${props.address}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
        className: "font-sans text-xl text-gray font-semibold hover:text-sky-500 hover:cursor-pointer",
        children: props.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
      className: "font-sans text-sm text-stone-800 tracking-tight",
      children: props.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "flex flex-col lg:flex-row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "inner-card my-6 w-full lg:w-2/5",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          className: "text-md font-bold font-sans text-gray",
          children: "Targeted contribution"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 9
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          className: "text-sm font-bold font-sans text-gray-600 ",
          children: [props.goalAmount, " ETH "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 9
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          className: "text-md font-bold font-sans text-gray",
          children: "Deadline"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 9
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          className: "text-sm font-bold font-sans text-gray-600 ",
          children: props.deadline
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "inner-card my-6 w-full lg:w-3/5",
        children: props.state !== "Successful" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("label", {
            className: "text-sm text-gray-700 font-semibold",
            children: "Contribution amount :"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "flex flex-row",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
              type: "number",
              placeholder: "Type here",
              value: amount,
              onChange: e => setAmount(e.target.value),
              disabled: btnLoader === props.address,
              className: "input rounded-l-md"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
              className: "button",
              onClick: () => contributeAmount(props.address, props.minContribution),
              disabled: btnLoader === props.address,
              children: btnLoader === props.address ? "Loading..." : "Contribute"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
            className: "text-sm text-red-600",
            children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
              className: "font-bold",
              children: "NOTE : "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 50
            }, undefined), " Minimum contribution is ", props.minContribution, " ETH "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, undefined)]
        }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
            className: "text-md font-bold font-sans text-gray",
            children: "Contract balance"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
            className: "text-sm font-bold font-sans text-gray-600 ",
            children: [props.contractBalance, " ETH "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 13
          }, undefined), props.creator === account ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("label", {
              className: "text-sm text-gray-700 font-semibold",
              children: "Withdraw request :"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "flex flex-row",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
                type: "number",
                placeholder: "Type here",
                value: amount,
                onChange: e => setAmount(e.target.value),
                disabled: btnLoader === props.address,
                className: "input rounded-l-md"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                className: "button",
                onClick: () => requestForWithdraw(props.address),
                children: btnLoader === props.address ? "Loading..." : "Withdraw"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 15
            }, undefined)]
          }, void 0, true) : ""]
        }, void 0, true)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }, undefined), props.state !== "Successful" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "w-full bg-gray-200 rounded-full",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "progress",
        style: {
          width: `${props.progress}%`
        },
        children: [" ", props.progress, "% "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }, undefined) : ""]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FundRiserCard);

/***/ }),

/***/ "./components/FundRiserForm.js":
/*!*************************************!*\
  !*** ./components/FundRiserForm.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_interactions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/interactions */ "./redux/interactions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helper/helper */ "./helper/helper.js");
/* harmony import */ var _helper_toastMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helper/toastMessage */ "./helper/toastMessage.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\navee\\Desktop\\CrowdMint-A-Blockchain-Based-Crowdfunding-Platform\\client\\components\\FundRiserForm.js";









const FundRiserForm = () => {
  const crowdFundingContract = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.fundingReducer.contract);
  const account = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.web3Reducer.account);
  const web3 = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.web3Reducer.connection);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const {
    0: title,
    1: setTitle
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: description,
    1: setDescription
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: targetedContributionAmount,
    1: setTargetedContributionAmount
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: minimumContributionAmount,
    1: setMinimumContributionAmount
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: deadline,
    1: setDeadline
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: btnLoading,
    1: setBtnLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const riseFund = e => {
    e.preventDefault();
    setBtnLoading(true);
    const unixDate = moment__WEBPACK_IMPORTED_MODULE_1___default()(deadline).valueOf();

    const onSuccess = () => {
      setBtnLoading(false);
      setTitle("");
      setDescription("");
      setTargetedContributionAmount("");
      setMinimumContributionAmount("");
      setDeadline("");
      (0,_helper_toastMessage__WEBPACK_IMPORTED_MODULE_5__.toastSuccess)("Fund raising started 🎉");
    };

    const onError = error => {
      setBtnLoading(false);
      (0,_helper_toastMessage__WEBPACK_IMPORTED_MODULE_5__.toastError)(error);
    };

    const data = {
      minimumContribution: (0,_helper_helper__WEBPACK_IMPORTED_MODULE_4__.etherToWei)(minimumContributionAmount),
      deadline: Number(unixDate),
      targetContribution: (0,_helper_helper__WEBPACK_IMPORTED_MODULE_4__.etherToWei)(targetedContributionAmount),
      projectTitle: title,
      projectDesc: description,
      account: account
    };
    (0,_redux_interactions__WEBPACK_IMPORTED_MODULE_2__.startFundRaising)(web3, crowdFundingContract, data, onSuccess, onError, dispatch);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
      className: "font-sans font-bold text-xl",
      children: "Start Your Fundraising For Free "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("form", {
      onSubmit: e => riseFund(e),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "form-control my-1",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("label", {
          className: "text-sm text-gray-700",
          children: "Title :"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
          type: "text",
          placeholder: "Type here",
          className: "form-control-input border-neutral-400 focus:ring-neutral-200",
          value: title,
          onChange: e => setTitle(e.target.value),
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "form-control my-1",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("label", {
          className: "text-sm text-gray-700",
          children: "Description :"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("textarea", {
          placeholder: "Type here",
          className: "form-control-input border-neutral-400 focus:ring-neutral-200",
          value: description,
          onChange: e => setDescription(e.target.value),
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "form-control my-1",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("label", {
          className: "text-sm text-gray-700",
          children: "Targeted contribution amount :"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
          type: "number",
          placeholder: "Type here",
          className: "form-control-input border-neutral-400 focus:ring-neutral-200",
          value: targetedContributionAmount,
          onChange: e => setTargetedContributionAmount(e.target.value),
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "form-control my-1",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("label", {
          className: "text-sm text-gray-700",
          children: "Minimum contribution amount :"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
          type: "number",
          placeholder: "Type here",
          className: "form-control-input border-neutral-400 focus:ring-neutral-200",
          value: minimumContributionAmount,
          onChange: e => setMinimumContributionAmount(e.target.value),
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "form-control date-picker my-1",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("label", {
          className: "text-sm text-gray-700",
          children: "Deadline :"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
          type: "date",
          placeholder: "Type here",
          className: "form-control-input border-neutral-400 focus:ring-neutral-200",
          value: deadline,
          onChange: e => setDeadline(e.target.value),
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
        className: "p-2 w-full bg-[#F56D91] text-white rounded-md hover:bg-[#d15677]",
        disabled: btnLoading,
        children: btnLoading ? "Loading..." : "Raise fund"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FundRiserForm);

/***/ }),

/***/ "./components/Loader.js":
/*!******************************!*\
  !*** ./components/Loader.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\navee\\Desktop\\CrowdMint-A-Blockchain-Based-Crowdfunding-Platform\\client\\components\\Loader.js";



const Loader = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "text-center",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
      role: "status",
      className: "inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",
      viewBox: "0 0 100 101",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
        fill: "currentColor"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
        fill: "currentFill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\navee\\Desktop\\CrowdMint-A-Blockchain-Based-Crowdfunding-Platform\\client\\components\\Navbar.js";






const Navbar = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    0: openMenu,
    1: setOpenMenu
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const account = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.web3Reducer.account);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("nav", {
      className: "bg-[#F7F5F2]",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "max-w-7xl mx-auto px-2 sm:px-6 lg:px-8",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "relative flex items-center justify-between h-16",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "absolute inset-y-0 left-0 flex items-center sm:hidden",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
              type: "button",
              className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-greay hover:bg-[#F7C984] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
              "aria-controls": "mobile-menu",
              "aria-expanded": "false",
              onClick: () => setOpenMenu(!openMenu),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                className: "sr-only",
                children: "Open main menu"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 21,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("i", {
                className: "fa-solid fa-bars"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "flex-1 flex items-center justify-center sm:items-stretch sm:justify-start",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "flex-shrink-0 flex items-center",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h4", {
                className: "font-mono text-xl text-greay font-bold hidden lg:block",
                children: "CrowdMint"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 23
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "hidden sm:block sm:ml-6",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: "flex space-x-4",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  href: "/dashboard",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                    className: `${router.pathname === "/dashboard" ? "bg-[#F7C984]" : ""} text-greay px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer hover:bg-[#F7C984] hover:text-greay`,
                    children: "Dashboard"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 31,
                    columnNumber: 47
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 31,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  href: "/my-contributions",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                    className: `${router.pathname === "/my-contributions" ? "bg-[#F7C984]" : ""} text-greay px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer hover:bg-[#F7C984] hover:text-greay`,
                    children: "My Contribution"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 32,
                    columnNumber: 52
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 32,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
              type: "button",
              className: "p-1 w-40 truncate rounded-full text-greay hover:text-greay ",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                children: account
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "ml-3 relative",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
                  type: "button",
                  className: "bg-[#F7C984] flex text-sm rounded-md focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-white",
                  id: "user-menu-button",
                  "aria-expanded": "false",
                  "aria-haspopup": "true",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                    className: "sr-only",
                    children: "Open User Menu"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 45,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                    className: "h-8 w-8 rounded-full"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 46,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 44,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: `sm:hidden ${!openMenu ? "hidden" : ""}`,
        id: "mobile-menu",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "px-2 pt-2 pb-3 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
            href: "#",
            className: "bg-[#F7C984] text-greay block px-3 py-2 rounded-md text-base font-medium",
            "aria-current": "page",
            children: "Dashboard"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
            href: "#",
            className: "text-greay hover:bg-[#F7C984] hover:text-greay block px-3 py-2 rounded-md text-base font-medium",
            children: "Team"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
            href: "#",
            className: "text-greay hover:bg-[#F7C984] hover:text-greay block px-3 py-2 rounded-md text-base font-medium",
            children: "Projects"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
            href: "#",
            className: "text-greay hover:bg-[#F7C984] hover:text-greay block px-3 py-2 rounded-md text-base font-medium",
            children: "Calendar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./helper/authWrapper.js":
/*!*******************************!*\
  !*** ./helper/authWrapper.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLocalStorageData": () => (/* binding */ getLocalStorageData),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\navee\\Desktop\\CrowdMint-A-Blockchain-Based-Crowdfunding-Platform\\client\\helper\\authWrapper.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const getLocalStorageData = name => {
  var value;

  if (false) {}

  return value;
};

const authWrapper = WrappedComponent => {
  // eslint-disable-next-line react/display-name
  return props => {
    //  if (typeof window !== "undefined") {
    //    const router = useRouter();
    //     const walletAddress = localStorage.getItem("ADDRESS");
    //     console.log(walletAddress)
    //   if (walletAddress) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(WrappedComponent, _objectSpread({}, props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }, undefined)]
    }, void 0, true); //   } else {
    //     router.replace("/");
    //     return  null;
    //   }
    // }
    // return <div>Window not found</div>
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authWrapper);

/***/ }),

/***/ "./helper/helper.js":
/*!**************************!*\
  !*** ./helper/helper.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weiToEther": () => (/* binding */ weiToEther),
/* harmony export */   "etherToWei": () => (/* binding */ etherToWei),
/* harmony export */   "unixToDate": () => (/* binding */ unixToDate),
/* harmony export */   "state": () => (/* binding */ state),
/* harmony export */   "projectDataFormatter": () => (/* binding */ projectDataFormatter),
/* harmony export */   "groupContributionByProject": () => (/* binding */ groupContributionByProject),
/* harmony export */   "groupContributors": () => (/* binding */ groupContributors),
/* harmony export */   "withdrawRequestDataFormatter": () => (/* binding */ withdrawRequestDataFormatter),
/* harmony export */   "connectWithWallet": () => (/* binding */ connectWithWallet),
/* harmony export */   "chainOrAccountChangedHandler": () => (/* binding */ chainOrAccountChangedHandler)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



const weiToEther = num => {
  return web3__WEBPACK_IMPORTED_MODULE_1___default().utils.fromWei(num, 'ether');
};
const etherToWei = num => {
  const weiBigNumber = web3__WEBPACK_IMPORTED_MODULE_1___default().utils.toWei(num, 'ether');
  const wei = weiBigNumber.toString();
  return wei;
};
const unixToDate = unixDate => {
  return moment__WEBPACK_IMPORTED_MODULE_0___default()(unixDate).format("DD/MM/YYYY");
};
const state = ["Fundraising", "Expired", "Successful"];
const projectDataFormatter = (data, contractAddress) => {
  const formattedData = {
    address: contractAddress,
    creator: data === null || data === void 0 ? void 0 : data.projectStarter,
    contractBalance: data.balance ? weiToEther(data.balance) : 0,
    title: data.title,
    description: data.desc,
    minContribution: weiToEther(data.minContribution),
    goalAmount: weiToEther(data.goalAmount),
    currentAmount: weiToEther(data.currentAmount),
    state: state[Number(data.currentState)],
    deadline: unixToDate(Number(data.projectDeadline)),
    progress: Math.round(Number(weiToEther(data.currentAmount)) / Number(weiToEther(data.goalAmount)) * 100)
  };
  return formattedData;
};

const formatProjectContributions = contributions => {
  const formattedData = contributions.map(data => {
    return {
      projectAddress: data.returnValues.projectAddress,
      contributor: data.returnValues.contributor,
      amount: Number(weiToEther(data.returnValues.contributedAmount))
    };
  });
  return formattedData;
};

const groupContributionByProject = contributions => {
  const contributionList = formatProjectContributions(contributions); //const contributionGroupByProject = _.map(_.groupBy(contributionList, 'projectAddress'), (o,projectAddress,address) => { return {projectAddress:projectAddress, contributor: address,amount: _.sumBy(o,'amount') }})

  return contributionList;
};

const formatContribution = contributions => {
  const formattedData = contributions.map(data => {
    return {
      contributor: data.returnValues.contributor,
      amount: Number(weiToEther(data.returnValues.amount))
    };
  });
  return formattedData;
};

const groupContributors = contributions => {
  const contributorList = formatContribution(contributions);

  const contributorGroup = lodash__WEBPACK_IMPORTED_MODULE_2___default().map(lodash__WEBPACK_IMPORTED_MODULE_2___default().groupBy(contributorList, 'contributor'), (o, address) => {
    return {
      contributor: address,
      amount: lodash__WEBPACK_IMPORTED_MODULE_2___default().sumBy(o, 'amount')
    };
  });

  return contributorGroup;
};
const withdrawRequestDataFormatter = data => {
  return {
    requestId: data.requestId,
    totalVote: data.noOfVotes,
    amount: weiToEther(data.amount),
    status: data.isCompleted ? "Completed" : "Pending",
    desc: data.description,
    reciptant: data.reciptent
  };
};
const connectWithWallet = async onSuccess => {
  //connect web3 with http provider
  if (window.ethereum) {
    window.ethereum.request({
      method: "eth_requestAccounts"
    }).then(res => {
      onSuccess();
    }).catch(error => {
      alert(error.message);
    });
  } else {
    window.alert("Non-Ethereum browser detected. You should consider trying MetaMask!");
  }
};
const chainOrAccountChangedHandler = () => {
  // reload the page to avoid any errors with chain or account change.
  window.location.reload();
};

/***/ }),

/***/ "./helper/toastMessage.js":
/*!********************************!*\
  !*** ./helper/toastMessage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toastSuccess": () => (/* binding */ toastSuccess),
/* harmony export */   "toastError": () => (/* binding */ toastError)
/* harmony export */ });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_0__);

const toastSuccess = msg => {
  react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.success(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  });
};
const toastError = msg => {
  react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  });
};

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js");

var _router1 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router1).useRouter();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.default.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  _react.default.useEffect(() => {
    const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router).isLocalURL(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}

const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/utils/get-asset-path-from-route */ "../shared/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


let devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (true) {
      (devBuildPromise || Promise.resolve()).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
          if (!cancelled) {
            reject(err);
          }
        }, ms));
      });
    }

    if (false) {}
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute).default(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        const routeFilesPromise = getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        });

        if (true) {
          devBuildPromise = new Promise(resolve => {
            if (routeFilesPromise) {
              return routeFilesPromise.finally(() => {
                resolve();
              });
            }
          });
        }

        return resolvePromiseWithTimeout(routeFilesPromise, MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Router", ({
  enumerable: true,
  get: function () {
    return _router.default;
  }
}));
Object.defineProperty(exports, "withRouter", ({
  enumerable: true,
  get: function () {
    return _withRouter.default;
  }
}));
exports.useRouter = useRouter;
exports.createRouter = createRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js"));

var _routerContext = __webpack_require__(/*! ../shared/lib/router-context */ "../shared/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const singletonRouter = {
  router: null,
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
}

var _default = singletonRouter;
exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
}

function createRouter(...args) {
  singletonRouter.router = new _router.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}

function makePublicRouterInstance(router) {
  const _router1 = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router1[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router1[property]) ? [] : {}, _router1[property]) // makes sure query is not stateful
      ;
      continue;
    }

    instance[property] = _router1[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router1[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router).useRouter()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/router/router.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/router.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../../server/denormalize-page-path */ "../../../server/denormalize-page-path");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "../i18n/normalize-locale-path");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../mitt"));

var _utils = __webpack_require__(/*! ../utils */ "../shared/lib/utils");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./utils/is-dynamic");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./utils/parse-relative-url");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./utils/querystring");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?5c99"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./utils/route-matcher");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./utils/route-regex");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash).normalizePathTrailingSlash(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {} else {
    return false;
  }
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils).getLocationOrigin();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  let urlAsString = typeof href === 'string' ? href : (0, _utils).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  const urlAsStringNoProto = urlProtoMatch ? urlAsString.substr(urlProtoMatch[0].length) : urlAsString;
  const urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
    const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils).getLocationOrigin();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader).markAssetError(err);
    }

    throw err;
  });
}

class Router {
  constructor(pathname1, query1, as1, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component: Component1,
    err: err1,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    // Static Data Cache
    this.sdc = {}; // In-flight Server Data Requests, for deduping

    this.sdr = {};
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname: pathname1,
          query: query1
        } = this;
        this.changeState('replaceState', (0, _utils).formatWithValidation({
          pathname: addBasePath(pathname1),
          query: query1
        }), (0, _utils).getURL());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as: as1,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname: pathname1
      } = (0, _parseRelativeUrl).parseRelativeUrl(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as1 === this.asPath && pathname1 === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as1, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[this.route] = {
        Component: Component1,
        initial: true,
        props: initialProps,
        err: err1,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname1;
    this.query = query1; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? pathname1 : as1;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    const prevLocale = this.locale;

    if (false) { var ref; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as;
    let localeChange = prevLocale !== this.locale; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs) && !localeChange) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname1,
      query: query1
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader).getClientBuildManifest());
    } catch (err1) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname1 = pathname1 ? (0, _normalizeTrailingSlash).removePathTrailingSlash(delBasePath(pathname1)) : pathname1;

    if (shouldResolveHref && pathname1 !== '/_error') {
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname1, pages);

        if (parsed.pathname !== pathname1) {
          pathname1 = parsed.pathname;
          parsed.pathname = addBasePath(pathname1);
          url = (0, _utils).formatWithValidation(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic).isDynamicRoute(route)) {
      const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex).getRouteRegex(route);
      const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query1) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query1[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils).formatWithValidation(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query1, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query1, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var ref, ref1;
      let routeInfo = await this.getRouteInfo(route, pathname1, query1, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query1, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname1 === '/_error' && ((ref = self.__NEXT_DATA__.props) === null || ref === void 0 ? void 0 : (ref1 = ref.pageProps) === null || ref1 === void 0 ? void 0 : ref1.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      var _scroll;

      const shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname1, query1, cleanedAs, routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err1) {
      if (err1.cancelled) {
        return false;
      }

      throw err1;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils).getURL() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component1;
      let styleSheets;
      let props;

      if (typeof Component1 === 'undefined' || typeof styleSheets === 'undefined') {
        ({
          page: Component1,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component: Component1,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component1, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component: Component1,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component1)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils).formatWithValidation({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component1, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err2) {
      return this.handleRouteInfoError(err2, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname2
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname2) {
        pathname2 = parsed.pathname;
        parsed.pathname = pathname2;
        url = (0, _utils).formatWithValidation(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname2); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err2 = new Error('Loading initial props cancelled');
        err2.cancelled = true;
        throw err2;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err2 => {
      delete this.sdr[resourceKey];
      throw err2;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App1
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App1);

    ctx.AppTree = AppTree;
    return (0, _utils).loadGetInitialProps(App1, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

Router.events = (0, _mitt).default();
exports.default = Router;

/***/ }),

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_authWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/authWrapper */ "./helper/authWrapper.js");
/* harmony import */ var _components_FundRiserForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FundRiserForm */ "./components/FundRiserForm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_FundRiserCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/FundRiserCard */ "./components/FundRiserCard.js");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Loader */ "./components/Loader.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\navee\\Desktop\\CrowdMint-A-Blockchain-Based-Crowdfunding-Platform\\client\\pages\\dashboard.js";








const Dashboard = () => {
  const projectsList = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.projectReducer.projects);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    className: "px-2 py-4 flex flex-col lg:px-12 lg:flex-row ",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "lg:w-7/12 my-2 lg:my-0 lg:mx-2",
      children: projectsList !== undefined ? projectsList.length > 0 ? projectsList.map((data, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_FundRiserCard__WEBPACK_IMPORTED_MODULE_4__.default, {
        props: data
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 15
      }, undefined)) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
        className: "text-2xl font-bold text-gray-500 text-center font-sans",
        children: "No project found !"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "card lg:w-5/12 h-fit my-4",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_FundRiserForm__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_helper_authWrapper__WEBPACK_IMPORTED_MODULE_1__.default)(Dashboard));

/***/ }),

/***/ "./redux/actions.js":
/*!**************************!*\
  !*** ./redux/actions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "web3Loaded": () => (/* binding */ web3Loaded),
/* harmony export */   "walletAddressLoaded": () => (/* binding */ walletAddressLoaded),
/* harmony export */   "crowdFundingContractLoaded": () => (/* binding */ crowdFundingContractLoaded),
/* harmony export */   "projectContractsLoaded": () => (/* binding */ projectContractsLoaded),
/* harmony export */   "projectsLoaded": () => (/* binding */ projectsLoaded),
/* harmony export */   "newProjectContractsLoaded": () => (/* binding */ newProjectContractsLoaded),
/* harmony export */   "newProjectsLoaded": () => (/* binding */ newProjectsLoaded),
/* harmony export */   "amountContributor": () => (/* binding */ amountContributor),
/* harmony export */   "withdrawContractBalance": () => (/* binding */ withdrawContractBalance)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./redux/types.js");
 // Web3 actions

const web3Loaded = web3 => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.WEB3_LOADED,
    payload: web3
  };
};
const walletAddressLoaded = address => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.WALLET_ADDRESS_LOADED,
    payload: address
  };
}; // Crowd funding actions

const crowdFundingContractLoaded = contract => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.CROWD_FUNDING_CONTRACT_LOADED,
    payload: contract
  };
}; // Project actions

const projectContractsLoaded = contracts => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.PROJECT_CONTRACTS_LOADED,
    payload: contracts
  };
};
const projectsLoaded = projects => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.PROJECTS_LOADED,
    payload: projects
  };
};
const newProjectContractsLoaded = contract => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.NEW_PROJECT_CONTRACT_LOADED,
    payload: contract
  };
};
const newProjectsLoaded = project => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.NEW_PROJECT_LOADED,
    payload: project
  };
};
const amountContributor = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.INCREASE_PROGRESS,
    payload: data
  };
};
const withdrawContractBalance = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.WITHDRAW_BALANCE,
    payload: data
  };
};

/***/ }),

/***/ "./redux/interactions.js":
/*!*******************************!*\
  !*** ./redux/interactions.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadWeb3": () => (/* binding */ loadWeb3),
/* harmony export */   "loadAccount": () => (/* binding */ loadAccount),
/* harmony export */   "loadCrowdFundingContract": () => (/* binding */ loadCrowdFundingContract),
/* harmony export */   "startFundRaising": () => (/* binding */ startFundRaising),
/* harmony export */   "getAllFunding": () => (/* binding */ getAllFunding),
/* harmony export */   "contribute": () => (/* binding */ contribute),
/* harmony export */   "getContributors": () => (/* binding */ getContributors),
/* harmony export */   "createWithdrawRequest": () => (/* binding */ createWithdrawRequest),
/* harmony export */   "getAllWithdrawRequest": () => (/* binding */ getAllWithdrawRequest),
/* harmony export */   "voteWithdrawRequest": () => (/* binding */ voteWithdrawRequest),
/* harmony export */   "withdrawAmount": () => (/* binding */ withdrawAmount),
/* harmony export */   "getMyContributionList": () => (/* binding */ getMyContributionList)
/* harmony export */ });
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./redux/actions.js");
/* harmony import */ var _artifacts_contracts_Crowdfunding_sol_Crowdfunding_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../artifacts/contracts/Crowdfunding.sol/Crowdfunding.json */ "./artifacts/contracts/Crowdfunding.sol/Crowdfunding.json");
/* harmony import */ var _artifacts_contracts_Project_sol_Project_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../artifacts/contracts/Project.sol/Project.json */ "./artifacts/contracts/Project.sol/Project.json");
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helper/helper */ "./helper/helper.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const crowdFundingContractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; //Load web3 

const loadWeb3 = async dispatch => {
  const web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())((web3__WEBPACK_IMPORTED_MODULE_0___default().givenProvider) || "http://localhost:8545");
  dispatch(_actions__WEBPACK_IMPORTED_MODULE_1__.web3Loaded(web3));
  return web3;
}; // Load connected wallet

const loadAccount = async (web3, dispatch) => {
  const account = await web3.eth.getAccounts();
  const network = await web3.eth.net.getId(); //   if (network !== Number(process.env.REACT_APP_NETWORK_ID)) {
  //     alert("Contract not deployed in this network !");
  //   }

  dispatch(_actions__WEBPACK_IMPORTED_MODULE_1__.walletAddressLoaded(account[0]));
  localStorage.setItem("ADDRESS", account[0]);
  return account;
}; //Connect with crowd funding contract

const loadCrowdFundingContract = async (web3, dispatch) => {
  const crowdFunding = new web3.eth.Contract(_artifacts_contracts_Crowdfunding_sol_Crowdfunding_json__WEBPACK_IMPORTED_MODULE_2__.abi, crowdFundingContractAddress);
  dispatch(_actions__WEBPACK_IMPORTED_MODULE_1__.crowdFundingContractLoaded(crowdFunding));
  return crowdFunding;
}; // Start fund raising project

const startFundRaising = async (web3, CrowdFundingContract, data, onSuccess, onError, dispatch) => {
  const {
    minimumContribution,
    deadline,
    targetContribution,
    projectTitle,
    projectDesc,
    account
  } = data;
  await CrowdFundingContract.methods.createProject(minimumContribution, deadline, targetContribution, projectTitle, projectDesc).send({
    from: account
  }).on('receipt', function (receipt) {
    const projectsReceipt = receipt.events.ProjectStarted.returnValues;
    const contractAddress = projectsReceipt.projectContractAddress;
    const formattedProjectData = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_4__.projectDataFormatter)(projectsReceipt, contractAddress);
    var projectConnector = new web3.eth.Contract(_artifacts_contracts_Project_sol_Project_json__WEBPACK_IMPORTED_MODULE_3__.abi, contractAddress);
    dispatch(_actions__WEBPACK_IMPORTED_MODULE_1__.newProjectContractsLoaded(projectConnector));
    dispatch(_actions__WEBPACK_IMPORTED_MODULE_1__.newProjectsLoaded(formattedProjectData));
    onSuccess();
  }).on('error', function (error) {
    onError(error.message);
  });
}; // 1 - Get all funding project address
// 2 - Connect with funding project contract
// 3 - Get project details 

const getAllFunding = async (CrowdFundingContract, web3, dispatch) => {
  const fundingProjectList = await CrowdFundingContract.methods.returnAllProjects().call();
  const projectContracts = [];
  const projects = [];
  await Promise.all(fundingProjectList.map(async data => {
    var projectConnector = new web3.eth.Contract(_artifacts_contracts_Project_sol_Project_json__WEBPACK_IMPORTED_MODULE_3__.abi, data);
    const details = await projectConnector.methods.getProjectDetails().call();
    projectContracts.push(projectConnector);
    const formattedProjectData = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_4__.projectDataFormatter)(details, data);
    projects.push(formattedProjectData);
  }));
  dispatch(_actions__WEBPACK_IMPORTED_MODULE_1__.projectContractsLoaded(projectContracts));
  dispatch(_actions__WEBPACK_IMPORTED_MODULE_1__.projectsLoaded(projects));
}; // Contribute in fund raising project

const contribute = async (crowdFundingContract, data, dispatch, onSuccess, onError) => {
  const {
    contractAddress,
    amount,
    account
  } = data;
  await crowdFundingContract.methods.contribute(contractAddress).send({
    from: account,
    value: amount
  }).on('receipt', function (receipt) {
    dispatch(_actions__WEBPACK_IMPORTED_MODULE_1__.amountContributor({
      projectId: contractAddress,
      amount: amount
    }));
    onSuccess();
  }).on('error', function (error) {
    onError(error.message);
  });
}; // Get all contributors by contract address

const getContributors = async (web3, contractAddress, onSuccess, onError) => {
  try {
    var projectConnector = new web3.eth.Contract(_artifacts_contracts_Project_sol_Project_json__WEBPACK_IMPORTED_MODULE_3__.abi, contractAddress);
    const getContributions = await projectConnector.getPastEvents("FundingReceived", {
      fromBlock: 0,
      toBlock: 'latest'
    });
    onSuccess((0,_helper_helper__WEBPACK_IMPORTED_MODULE_4__.groupContributors)(getContributions));
  } catch (error) {
    onError(error);
  }
}; // Request for withdraw amount

const createWithdrawRequest = async (web3, contractAddress, data, onSuccess, onError) => {
  const {
    description,
    amount,
    recipient,
    account
  } = data;
  var projectConnector = new web3.eth.Contract(_artifacts_contracts_Project_sol_Project_json__WEBPACK_IMPORTED_MODULE_3__.abi, contractAddress);
  await projectConnector.methods.createWithdrawRequest(description, amount, recipient).send({
    from: account
  }).on('receipt', function (receipt) {
    const withdrawReqReceipt = receipt.events.WithdrawRequestCreated.returnValues;
    const formattedReqData = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_4__.withdrawRequestDataFormatter)(withdrawReqReceipt, withdrawReqReceipt.requestId);
    onSuccess(formattedReqData);
  }).on('error', function (error) {
    onError(error.message);
  });
}; // Get all withdraw request

const getAllWithdrawRequest = async (web3, contractAddress, onLoadRequest) => {
  var projectConnector = new web3.eth.Contract(_artifacts_contracts_Project_sol_Project_json__WEBPACK_IMPORTED_MODULE_3__.abi, contractAddress);
  var withdrawRequestCount = await projectConnector.methods.numOfWithdrawRequests().call();
  var withdrawRequests = [];

  if (withdrawRequestCount <= 0) {
    onLoadRequest(withdrawRequests);
    return;
  }

  for (var i = 1; i <= withdrawRequestCount; i++) {
    const req = await projectConnector.methods.withdrawRequests(i - 1).call();
    withdrawRequests.push((0,_helper_helper__WEBPACK_IMPORTED_MODULE_4__.withdrawRequestDataFormatter)(_objectSpread(_objectSpread({}, req), {}, {
      requestId: i - 1
    })));
  }

  onLoadRequest(withdrawRequests);
}; // Vote for withdraw request

const voteWithdrawRequest = async (web3, data, onSuccess, onError) => {
  const {
    contractAddress,
    reqId,
    account
  } = data;
  var projectConnector = new web3.eth.Contract(_artifacts_contracts_Project_sol_Project_json__WEBPACK_IMPORTED_MODULE_3__.abi, contractAddress);
  await projectConnector.methods.voteWithdrawRequest(reqId).send({
    from: account
  }).on('receipt', function (receipt) {
    console.log(receipt);
    onSuccess();
  }).on('error', function (error) {
    onError(error.message);
  });
}; // Withdraw requested amount 

const withdrawAmount = async (web3, dispatch, data, onSuccess, onError) => {
  const {
    contractAddress,
    reqId,
    account,
    amount
  } = data;
  var projectConnector = new web3.eth.Contract(_artifacts_contracts_Project_sol_Project_json__WEBPACK_IMPORTED_MODULE_3__.abi, contractAddress);
  await projectConnector.methods.withdrawRequestedAmount(reqId).send({
    from: account
  }).on('receipt', function (receipt) {
    console.log(receipt);
    dispatch(_actions__WEBPACK_IMPORTED_MODULE_1__.withdrawContractBalance({
      contractAddress: contractAddress,
      withdrawAmount: amount
    }));
    onSuccess();
  }).on('error', function (error) {
    onError(error.message);
  });
}; //Get my contributions

const getMyContributionList = async (crowdFundingContract, account) => {
  const getContributions = await crowdFundingContract.getPastEvents("ContributionReceived", {
    filter: {
      contributor: account
    },
    fromBlock: 0,
    toBlock: 'latest'
  });
  return (0,_helper_helper__WEBPACK_IMPORTED_MODULE_4__.groupContributionByProject)(getContributions);
};

/***/ }),

/***/ "./redux/types.js":
/*!************************!*\
  !*** ./redux/types.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WEB3_LOADED": () => (/* binding */ WEB3_LOADED),
/* harmony export */   "WALLET_ADDRESS_LOADED": () => (/* binding */ WALLET_ADDRESS_LOADED),
/* harmony export */   "CROWD_FUNDING_CONTRACT_LOADED": () => (/* binding */ CROWD_FUNDING_CONTRACT_LOADED),
/* harmony export */   "PROJECT_CONTRACTS_LOADED": () => (/* binding */ PROJECT_CONTRACTS_LOADED),
/* harmony export */   "PROJECTS_LOADED": () => (/* binding */ PROJECTS_LOADED),
/* harmony export */   "NEW_PROJECT_CONTRACT_LOADED": () => (/* binding */ NEW_PROJECT_CONTRACT_LOADED),
/* harmony export */   "NEW_PROJECT_LOADED": () => (/* binding */ NEW_PROJECT_LOADED),
/* harmony export */   "INCREASE_PROGRESS": () => (/* binding */ INCREASE_PROGRESS),
/* harmony export */   "WITHDRAW_BALANCE": () => (/* binding */ WITHDRAW_BALANCE)
/* harmony export */ });
const WEB3_LOADED = "WEB3_LOADED";
const WALLET_ADDRESS_LOADED = "WALLET_ADDRESS_LOADED"; //Crowd funding

const CROWD_FUNDING_CONTRACT_LOADED = "CROWD_FUNDING_CONTRACT_LOADED"; // Project

const PROJECT_CONTRACTS_LOADED = "PROJECT_CONTRACTS_LOADED";
const PROJECTS_LOADED = "PROJECTS_LOADED";
const NEW_PROJECT_CONTRACT_LOADED = "NEW_PROJECT_CONTRACT_LOADED";
const NEW_PROJECT_LOADED = "NEW_PROJECT_LOADED";
const INCREASE_PROGRESS = "INCREASE_PROGRESS";
const WITHDRAW_BALANCE = "WITHDRAW_BALANCE";

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("moment");

/***/ }),

/***/ "../../../server/denormalize-page-path":
/*!************************************************************!*\
  !*** external "next/dist/server/denormalize-page-path.js" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ "../i18n/normalize-locale-path":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/normalize-locale-path.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ "../mitt":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/mitt.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "../shared/lib/router-context":
/*!*********************************************************!*\
  !*** external "next/dist/shared/lib/router-context.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "../shared/lib/router/utils/get-asset-path-from-route":
/*!*********************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-asset-path-from-route.js" ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./utils/is-dynamic":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/is-dynamic.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ "./utils/parse-relative-url":
/*!**************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/parse-relative-url.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "./utils/querystring":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/querystring.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "./utils/route-matcher":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-matcher.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "./utils/route-regex":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-regex.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("web3");

/***/ }),

/***/ "?5c99":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "./artifacts/contracts/Crowdfunding.sol/Crowdfunding.json":
/*!****************************************************************!*\
  !*** ./artifacts/contracts/Crowdfunding.sol/Crowdfunding.json ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"_format":"hh-sol-artifact-1","contractName":"Crowdfunding","sourceName":"contracts/Crowdfunding.sol","abi":[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"projectAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"contributedAmount","type":"uint256"},{"indexed":true,"internalType":"address","name":"contributor","type":"address"}],"name":"ContributionReceived","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"projectContractAddress","type":"address"},{"indexed":false,"internalType":"address","name":"creator","type":"address"},{"indexed":false,"internalType":"uint256","name":"minContribution","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"projectDeadline","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"goalAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"currentAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"noOfContributors","type":"uint256"},{"indexed":false,"internalType":"string","name":"title","type":"string"},{"indexed":false,"internalType":"string","name":"desc","type":"string"},{"indexed":false,"internalType":"uint256","name":"currentState","type":"uint256"}],"name":"ProjectStarted","type":"event"},{"inputs":[{"internalType":"address","name":"_projectAddress","type":"address"}],"name":"contribute","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"minimumContribution","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint256","name":"targetContribution","type":"uint256"},{"internalType":"string","name":"projectTitle","type":"string"},{"internalType":"string","name":"projectDesc","type":"string"}],"name":"createProject","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"returnAllProjects","outputs":[{"internalType":"contract Project[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"}],"bytecode":"0x608060405234801561001057600080fd5b506136e4806100206000396000f3fe608060405260043610620000385760003560e01c806373e888fd146200003d57806385b6e28e146200005d578063a429078b146200008d575b600080fd5b6200005b6004803603810190620000559190620005f7565b620000bb565b005b3480156200006a57600080fd5b50620000756200038c565b60405162000084919062000a09565b60405180910390f35b3480156200009a57600080fd5b50620000b96004803603810190620000b391906200067b565b6200041c565b005b60008173ffffffffffffffffffffffffffffffffffffffff1663937e09b16040518163ffffffff1660e01b815260040160206040518083038186803b1580156200010457600080fd5b505afa15801562000119573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200013f91906200064f565b905060008273ffffffffffffffffffffffffffffffffffffffff1663c19d93fb6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200018a57600080fd5b505afa1580156200019f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001c5919062000623565b90506000600281111562000202577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8160028111156200023c577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b146200027f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002769062000a2d565b60405180910390fd5b81341015620002c5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002bc9062000a4f565b60405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff166373e888fd34336040518363ffffffff1660e01b815260040162000301919062000886565b6000604051808303818588803b1580156200031b57600080fd5b505af115801562000330573d6000803e3d6000fd5b50505050503373ffffffffffffffffffffffffffffffffffffffff167f0829c5c9dc5d14e41b11cfca0f01f76eba69b648ddcf9f84afba16ba8a76bf1c84346040516200037f92919062000961565b60405180910390a2505050565b606060008054806020026020016040519081016040528092919081815260200182805480156200041257602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311620003c7575b5050505050905090565b600033868686868660405162000432906200051b565b62000443969594939291906200098e565b604051809103906000f08015801562000460573d6000803e3d6000fd5b5090506000819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f73cc6512e7ecc537961f06c435b8c36be561c23851b3c990165a8cd7968dc6c681338888886000808a8a60006040516200050b9a99989796959493929190620008a3565b60405180910390a1505050505050565b6129bd8062000cf283390190565b6000620005406200053a8462000a9a565b62000a71565b9050828152602081018484840111156200055957600080fd5b6200056684828562000b9f565b509392505050565b6000813590506200057f8162000cac565b92915050565b600081519050620005968162000cc6565b92915050565b600082601f830112620005ae57600080fd5b8135620005c084826020860162000529565b91505092915050565b600081359050620005da8162000cd7565b92915050565b600081519050620005f18162000cd7565b92915050565b6000602082840312156200060a57600080fd5b60006200061a848285016200056e565b91505092915050565b6000602082840312156200063657600080fd5b6000620006468482850162000585565b91505092915050565b6000602082840312156200066257600080fd5b60006200067284828501620005e0565b91505092915050565b600080600080600060a086880312156200069457600080fd5b6000620006a488828901620005c9565b9550506020620006b788828901620005c9565b9450506040620006ca88828901620005c9565b935050606086013567ffffffffffffffff811115620006e857600080fd5b620006f6888289016200059c565b925050608086013567ffffffffffffffff8111156200071457600080fd5b62000722888289016200059c565b9150509295509295909350565b60006200073d8383620007c4565b60208301905092915050565b620007548162000b25565b82525050565b6000620007678262000ae0565b62000773818562000b03565b9350620007808362000ad0565b8060005b83811015620007b75781516200079b88826200072f565b9750620007a88362000af6565b92505060018101905062000784565b5085935050505092915050565b620007cf8162000b63565b82525050565b620007e08162000b8b565b82525050565b6000620007f38262000aeb565b620007ff818562000b14565b93506200081181856020860162000bae565b6200081c8162000c49565b840191505092915050565b600062000836600d8362000b14565b9150620008438262000c5a565b602082019050919050565b60006200085d60208362000b14565b91506200086a8262000c83565b602082019050919050565b620008808162000b59565b82525050565b60006020820190506200089d600083018462000749565b92915050565b600061014082019050620008bb600083018d62000749565b620008ca602083018c62000749565b620008d9604083018b62000875565b620008e8606083018a62000875565b620008f7608083018962000875565b6200090660a0830188620007d5565b6200091560c0830187620007d5565b81810360e0830152620009298186620007e6565b9050818103610100830152620009408185620007e6565b905062000952610120830184620007d5565b9b9a5050505050505050505050565b600060408201905062000978600083018562000749565b62000987602083018462000875565b9392505050565b600060c082019050620009a5600083018962000749565b620009b4602083018862000875565b620009c3604083018762000875565b620009d2606083018662000875565b8181036080830152620009e68185620007e6565b905081810360a0830152620009fc8184620007e6565b9050979650505050505050565b6000602082019050818103600083015262000a2581846200075a565b905092915050565b6000602082019050818103600083015262000a488162000827565b9050919050565b6000602082019050818103600083015262000a6a816200084e565b9050919050565b600062000a7d62000a90565b905062000a8b828262000be4565b919050565b6000604051905090565b600067ffffffffffffffff82111562000ab85762000ab762000c1a565b5b62000ac38262000c49565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600062000b328262000b39565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600062000b708262000b77565b9050919050565b600062000b848262000b39565b9050919050565b600062000b988262000b59565b9050919050565b82818337600083830152505050565b60005b8381101562000bce57808201518184015260208101905062000bb1565b8381111562000bde576000848401525b50505050565b62000bef8262000c49565b810181811067ffffffffffffffff8211171562000c115762000c1062000c1a565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f496e76616c696420737461746500000000000000000000000000000000000000600082015250565b7f436f6e747269627574696f6e20616d6f756e7420697320746f6f206c6f772021600082015250565b62000cb78162000b25565b811462000cc357600080fd5b50565b6003811062000cd457600080fd5b50565b62000ce28162000b59565b811462000cee57600080fd5b5056fe60806040526000600960006101000a81548160ff0219169083600281111562000051577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b02179055506000600c553480156200006857600080fd5b50604051620029bd380380620029bd83398181016040528101906200008e919062000279565b856000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508460018190555083600281905550826003819055508160079080519060200190620000fb92919062000129565b5080600890805190602001906200011492919062000129565b50600060058190555050505050505062000523565b828054620001379062000414565b90600052602060002090601f0160209004810192826200015b5760008555620001a7565b82601f106200017657805160ff1916838001178555620001a7565b82800160010185558215620001a7579182015b82811115620001a657825182559160200191906001019062000189565b5b509050620001b69190620001ba565b5090565b5b80821115620001d5576000816000905550600101620001bb565b5090565b6000620001f0620001ea846200036a565b62000341565b9050828152602081018484840111156200020957600080fd5b62000216848285620003de565b509392505050565b6000815190506200022f81620004ef565b92915050565b600082601f8301126200024757600080fd5b815162000259848260208601620001d9565b91505092915050565b600081519050620002738162000509565b92915050565b60008060008060008060c087890312156200029357600080fd5b6000620002a389828a016200021e565b9650506020620002b689828a0162000262565b9550506040620002c989828a0162000262565b9450506060620002dc89828a0162000262565b935050608087015167ffffffffffffffff811115620002fa57600080fd5b6200030889828a0162000235565b92505060a087015167ffffffffffffffff8111156200032657600080fd5b6200033489828a0162000235565b9150509295509295509295565b60006200034d62000360565b90506200035b82826200044a565b919050565b6000604051905090565b600067ffffffffffffffff821115620003885762000387620004af565b5b6200039382620004de565b9050602081019050919050565b6000620003ad82620003b4565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b83811015620003fe578082015181840152602081019050620003e1565b838111156200040e576000848401525b50505050565b600060028204905060018216806200042d57607f821691505b6020821081141562000444576200044362000480565b5b50919050565b6200045582620004de565b810181811067ffffffffffffffff82111715620004775762000476620004af565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b620004fa81620003a0565b81146200050657600080fd5b50565b6200051481620003d4565b81146200052057600080fd5b50565b61248a80620005336000396000f3fe60806040526004361061011f5760003560e01c8063937e09b1116100a0578063c19d93fb11610064578063c19d93fb146103bc578063c3e20c9f146103e7578063c59ee1dc14610412578063d5cef1331461043d578063ff3a9c7e146104685761011f565b8063937e09b1146102d1578063992a7dfb146102fc578063a46752ae1461033d578063b40141bf14610366578063b82c86d6146103915761011f565b80634c4cea5a116100e75780634c4cea5a1461020d5780634e695a37146102385780636f9fb98a1461026157806373e888fd1461028c578063752e19f9146102a85761011f565b806302d05d3f1461012457806303c29d581461014f5780631f6d49421461017a57806324274ee9146101b757806329dcb0cf146101e2575b600080fd5b34801561013057600080fd5b5061013961049c565b6040516101469190611a77565b60405180910390f35b34801561015b57600080fd5b506101646104c0565b6040516101719190611bd2565b60405180910390f35b34801561018657600080fd5b506101a1600480360381019061019c9190611761565b61054e565b6040516101ae9190611d6e565b60405180910390f35b3480156101c357600080fd5b506101cc610566565b6040516101d99190611d6e565b60405180910390f35b3480156101ee57600080fd5b506101f761056c565b6040516102049190611d6e565b60405180910390f35b34801561021957600080fd5b50610222610572565b60405161022f9190611d6e565b60405180910390f35b34801561024457600080fd5b5061025f600480360381019061025a91906117f1565b610578565b005b34801561026d57600080fd5b5061027661075d565b6040516102839190611d6e565b60405180910390f35b6102a660048036038101906102a19190611761565b610765565b005b3480156102b457600080fd5b506102cf60048036038101906102ca91906117f1565b6109ca565b005b3480156102dd57600080fd5b506102e6610d25565b6040516102f39190611d6e565b60405180910390f35b34801561030857600080fd5b50610323600480360381019061031e91906117f1565b610d2b565b604051610334959493929190611bf4565b60405180910390f35b34801561034957600080fd5b50610364600480360381019061035f919061178a565b610e16565b005b34801561037257600080fd5b5061037b6110b3565b6040516103889190611d6e565b60405180910390f35b34801561039d57600080fd5b506103a66110b9565b6040516103b39190611d6e565b60405180910390f35b3480156103c857600080fd5b506103d16110bf565b6040516103de9190611bb7565b60405180910390f35b3480156103f357600080fd5b506103fc6110d2565b6040516104099190611bd2565b60405180910390f35b34801561041e57600080fd5b50610427611160565b6040516104349190611d6e565b60405180910390f35b34801561044957600080fd5b50610452611166565b60405161045f9190611b9c565b60405180910390f35b34801561047457600080fd5b5061047d6113ca565b6040516104939a99989796959493929190611a92565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600880546104cd90612070565b80601f01602080910402602001604051908101604052809291908181526020018280546104f990612070565b80156105465780601f1061051b57610100808354040283529160200191610546565b820191906000526020600020905b81548152906001019060200180831161052957829003601f168201915b505050505081565b600a6020528060005260406000206000915090505481565b60065481565b60025481565b60045481565b6000600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054116105fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105f190611d0e565b60405180910390fd5b6000600b60008381526020019081526020016000209050600015158160030160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146106a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069d90611cae565b60405180910390fd5b60018160030160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060018160020160008282546107159190611ee0565b925050819055507fa2925e4595bf873fa82c22a1a89809777347023bf2b502d32710157a5eb8199c338260020154604051610751929190611b3c565b60405180910390a15050565b600047905090565b60008060028111156107a0577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600960009054906101000a900460ff1660028111156107e8577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b14610828576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081f90611cee565b60405180910390fd5b600254421061086c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086390611cce565b60405180910390fd5b6001543410156108b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108a890611d2e565b60405180910390fd5b6000600a60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541415610912576006600081548092919061090c906120d3565b91905055505b34600a60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546109619190611ee0565b92505081905550346005600082825461097a9190611ee0565b925050819055507f5cdc4ab8d637538ead6cc1904d4160343656c8c82bd266635cfd31ac008fffe082346005546040516109b693929190611b65565b60405180910390a16109c6611550565b5050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a58576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4f90611c8e565b60405180910390fd5b6002806002811115610a93577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600960009054906101000a900460ff166002811115610adb577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b14610b1b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b1290611cee565b60405180910390fd5b6002544210610b5f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5690611cce565b60405180910390fd5b6000600b60008481526020019081526020016000209050600015158160040160009054906101000a900460ff16151514610bce576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc590611d4e565b60405180910390fd5b6002600654610bdd9190611f36565b81600201541015610c23576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c1a90611c6e565b60405180910390fd5b8060040160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc82600101549081150290604051600060405180830381858888f19350505050158015610c91573d6000803e3d6000fd5b5060018160040160006101000a81548160ff0219169083151502179055507f2af8d60b878c5e8de57c8ff96e03c6cfab6de26b47e989757345cc1dceaac99883826000018360010154846002015460018660040160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051610d1896959493929190611df1565b60405180910390a1505050565b60015481565b600b602052806000526040600020600091509050806000018054610d4e90612070565b80601f0160208091040260200160405190810160405280929190818152602001828054610d7a90612070565b8015610dc75780601f10610d9c57610100808354040283529160200191610dc7565b820191906000526020600020905b815481529060010190602001808311610daa57829003601f168201915b5050505050908060010154908060020154908060040160009054906101000a900460ff16908060040160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905085565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610ea4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e9b90611c8e565b60405180910390fd5b6002806002811115610edf577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600960009054906101000a900460ff166002811115610f27577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b14610f67576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f5e90611cee565b60405180910390fd5b6002544210610fab576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fa290611cce565b60405180910390fd5b6000600b6000600c5481526020019081526020016000209050600c6000815480929190610fd7906120d3565b919050555084816000019080519060200190610ff4929190611617565b508381600101819055506000816002018190555060008160040160006101000a81548160ff021916908315150217905550828160040160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f9883a4e4f8698e4cc93bafb8d0d2376cb8c51dd322cb9fd80d02c691fcdea503600c548686600080886040516110a496959493929190611d89565b60405180910390a15050505050565b600c5481565b60035481565b600960009054906101000a900460ff1681565b600780546110df90612070565b80601f016020809104026020016040519081016040528092919081815260200182805461110b90612070565b80156111585780601f1061112d57610100808354040283529160200191611158565b820191906000526020600020905b81548152906001019060200180831161113b57829003601f168201915b505050505081565b60055481565b600060018060028111156111a3577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600960009054906101000a900460ff1660028111156111eb577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b1461122b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161122290611cee565b60405180910390fd5b600254421061126f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161126690611cce565b60405180910390fd5b6000600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054116112f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112e890611c4e565b60405180910390fd5b60003390508073ffffffffffffffffffffffffffffffffffffffff166108fc600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549081150290604051600060405180830381858888f1935050505015801561137b573d6000803e3d6000fd5b506000600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060019250505090565b60008060008060008060608060008060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff169950600154985060025497506003549650600454955060055494506007805461142290612070565b80601f016020809104026020016040519081016040528092919081815260200182805461144e90612070565b801561149b5780601f106114705761010080835404028352916020019161149b565b820191906000526020600020905b81548152906001019060200180831161147e57829003601f168201915b50505050509350600880546114af90612070565b80601f01602080910402602001604051908101604052809291908181526020018280546114db90612070565b80156115285780601f106114fd57610100808354040283529160200191611528565b820191906000526020600020905b81548152906001019060200180831161150b57829003601f168201915b50505050509250600960009054906101000a900460ff16915047905090919293949596979899565b600354600554106115b1576002600960006101000a81548160ff021916908360028111156115a7577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b021790555061160e565b60025442111561160d576001600960006101000a81548160ff02191690836002811115611607577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b02179055505b5b42600481905550565b82805461162390612070565b90600052602060002090601f016020900481019282611645576000855561168c565b82601f1061165e57805160ff191683800117855561168c565b8280016001018555821561168c579182015b8281111561168b578251825591602001919060010190611670565b5b509050611699919061169d565b5090565b5b808211156116b657600081600090555060010161169e565b5090565b60006116cd6116c884611e7e565b611e59565b9050828152602081018484840111156116e557600080fd5b6116f084828561202e565b509392505050565b6000813590506117078161240f565b92915050565b60008135905061171c81612426565b92915050565b600082601f83011261173357600080fd5b81356117438482602086016116ba565b91505092915050565b60008135905061175b8161243d565b92915050565b60006020828403121561177357600080fd5b6000611781848285016116f8565b91505092915050565b60008060006060848603121561179f57600080fd5b600084013567ffffffffffffffff8111156117b957600080fd5b6117c586828701611722565b93505060206117d68682870161174c565b92505060406117e78682870161170d565b9150509250925092565b60006020828403121561180357600080fd5b60006118118482850161174c565b91505092915050565b61182381611fd4565b82525050565b61183281611f79565b82525050565b61184181611f67565b82525050565b61185081611f8b565b82525050565b61185f81611fe6565b82525050565b61186e81611ff8565b82525050565b600061187f82611ec4565b6118898185611ecf565b935061189981856020860161203d565b6118a281612207565b840191505092915050565b600081546118ba81612070565b6118c48186611ecf565b945060018216600081146118df57600181146118f157611924565b60ff1983168652602086019350611924565b6118fa85611eaf565b60005b8381101561191c578154818901526001820191506020810190506118fd565b808801955050505b50505092915050565b600061193a602583611ecf565b915061194582612218565b604082019050919050565b600061195d603a83611ecf565b915061196882612267565b604082019050919050565b6000611980603183611ecf565b915061198b826122b6565b604082019050919050565b60006119a3601783611ecf565b91506119ae82612305565b602082019050919050565b60006119c6601483611ecf565b91506119d18261232e565b602082019050919050565b60006119e9600d83611ecf565b91506119f482612357565b602082019050919050565b6000611a0c601b83611ecf565b9150611a1782612380565b602082019050919050565b6000611a2f602083611ecf565b9150611a3a826123a9565b602082019050919050565b6000611a52601983611ecf565b9150611a5d826123d2565b602082019050919050565b611a7181611fca565b82525050565b6000602082019050611a8c6000830184611829565b92915050565b600061014082019050611aa8600083018d611829565b611ab5602083018c611a68565b611ac2604083018b611a68565b611acf606083018a611a68565b611adc6080830189611a68565b611ae960a0830188611a68565b81810360c0830152611afb8187611874565b905081810360e0830152611b0f8186611874565b9050611b1f610100830185611856565b611b2d610120830184611a68565b9b9a5050505050505050505050565b6000604082019050611b516000830185611838565b611b5e6020830184611a68565b9392505050565b6000606082019050611b7a6000830186611838565b611b876020830185611a68565b611b946040830184611a68565b949350505050565b6000602082019050611bb16000830184611847565b92915050565b6000602082019050611bcc6000830184611856565b92915050565b60006020820190508181036000830152611bec8184611874565b905092915050565b600060a0820190508181036000830152611c0e8188611874565b9050611c1d6020830187611a68565b611c2a6040830186611a68565b611c376060830185611847565b611c446080830184611829565b9695505050505050565b60006020820190508181036000830152611c678161192d565b9050919050565b60006020820190508181036000830152611c8781611950565b9050919050565b60006020820190508181036000830152611ca781611973565b9050919050565b60006020820190508181036000830152611cc781611996565b9050919050565b60006020820190508181036000830152611ce7816119b9565b9050919050565b60006020820190508181036000830152611d07816119dc565b9050919050565b60006020820190508181036000830152611d27816119ff565b9050919050565b60006020820190508181036000830152611d4781611a22565b9050919050565b60006020820190508181036000830152611d6781611a45565b9050919050565b6000602082019050611d836000830184611a68565b92915050565b600060c082019050611d9e6000830189611a68565b8181036020830152611db08188611874565b9050611dbf6040830187611a68565b611dcc6060830186611865565b611dd96080830185611847565b611de660a083018461181a565b979650505050505050565b600060c082019050611e066000830189611a68565b8181036020830152611e1881886118ad565b9050611e276040830187611a68565b611e346060830186611a68565b611e416080830185611847565b611e4e60a083018461181a565b979650505050505050565b6000611e63611e74565b9050611e6f82826120a2565b919050565b6000604051905090565b600067ffffffffffffffff821115611e9957611e986121d8565b5b611ea282612207565b9050602081019050919050565b60008190508160005260206000209050919050565b600081519050919050565b600082825260208201905092915050565b6000611eeb82611fca565b9150611ef683611fca565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611f2b57611f2a61211c565b5b828201905092915050565b6000611f4182611fca565b9150611f4c83611fca565b925082611f5c57611f5b61214b565b5b828204905092915050565b6000611f7282611faa565b9050919050565b6000611f8482611faa565b9050919050565b60008115159050919050565b6000819050611fa5826123fb565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000611fdf8261200a565b9050919050565b6000611ff182611f97565b9050919050565b600061200382611fca565b9050919050565b60006120158261201c565b9050919050565b600061202782611faa565b9050919050565b82818337600083830152505050565b60005b8381101561205b578082015181840152602081019050612040565b8381111561206a576000848401525b50505050565b6000600282049050600182168061208857607f821691505b6020821081141561209c5761209b6121a9565b5b50919050565b6120ab82612207565b810181811067ffffffffffffffff821117156120ca576120c96121d8565b5b80604052505050565b60006120de82611fca565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156121115761211061211c565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f596f7520646f206e6f742068617665206120636f6e747269627574656420616d60008201527f6f756e7421000000000000000000000000000000000000000000000000000000602082015250565b7f4174206c6561737420353025206f6620636f6e7472696275746f7273206e656560008201527f6420746f20766f746520666f7220746869732072657175657374000000000000602082015250565b7f596f7520646f206e6f7420686176652061636365737320746f20706572666f7260008201527f6d2074686973206f7065726174696f6e21000000000000000000000000000000602082015250565b7f596f75206861766520616c726561647920766f74656421000000000000000000600082015250565b7f446561646c696e65206861732070617373656421000000000000000000000000600082015250565b7f496e76616c696420737461746500000000000000000000000000000000000000600082015250565b7f4f6e6c7920636f6e7472696275746f72732063616e20766f7465210000000000600082015250565b7f436f6e747269627574696f6e20616d6f756e7420697320746f6f206c6f772021600082015250565b7f5265717565737420616c726561647920636f6d706c6574656400000000000000600082015250565b6003811061240c5761240b61217a565b5b50565b61241881611f67565b811461242357600080fd5b50565b61242f81611f79565b811461243a57600080fd5b50565b61244681611fca565b811461245157600080fd5b5056fea2646970667358221220eedd29c8c97a011182089d321988b1f425d10c5138bc13aa5304f1d4dfeaa13564736f6c63430008040033a2646970667358221220d1de76c339737294c91d3bd025a17f03a777c7f09bf5b1382553630a3f65a0d664736f6c63430008040033","deployedBytecode":"0x608060405260043610620000385760003560e01c806373e888fd146200003d57806385b6e28e146200005d578063a429078b146200008d575b600080fd5b6200005b6004803603810190620000559190620005f7565b620000bb565b005b3480156200006a57600080fd5b50620000756200038c565b60405162000084919062000a09565b60405180910390f35b3480156200009a57600080fd5b50620000b96004803603810190620000b391906200067b565b6200041c565b005b60008173ffffffffffffffffffffffffffffffffffffffff1663937e09b16040518163ffffffff1660e01b815260040160206040518083038186803b1580156200010457600080fd5b505afa15801562000119573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200013f91906200064f565b905060008273ffffffffffffffffffffffffffffffffffffffff1663c19d93fb6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200018a57600080fd5b505afa1580156200019f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001c5919062000623565b90506000600281111562000202577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8160028111156200023c577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b146200027f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002769062000a2d565b60405180910390fd5b81341015620002c5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002bc9062000a4f565b60405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff166373e888fd34336040518363ffffffff1660e01b815260040162000301919062000886565b6000604051808303818588803b1580156200031b57600080fd5b505af115801562000330573d6000803e3d6000fd5b50505050503373ffffffffffffffffffffffffffffffffffffffff167f0829c5c9dc5d14e41b11cfca0f01f76eba69b648ddcf9f84afba16ba8a76bf1c84346040516200037f92919062000961565b60405180910390a2505050565b606060008054806020026020016040519081016040528092919081815260200182805480156200041257602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311620003c7575b5050505050905090565b600033868686868660405162000432906200051b565b62000443969594939291906200098e565b604051809103906000f08015801562000460573d6000803e3d6000fd5b5090506000819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f73cc6512e7ecc537961f06c435b8c36be561c23851b3c990165a8cd7968dc6c681338888886000808a8a60006040516200050b9a99989796959493929190620008a3565b60405180910390a1505050505050565b6129bd8062000cf283390190565b6000620005406200053a8462000a9a565b62000a71565b9050828152602081018484840111156200055957600080fd5b6200056684828562000b9f565b509392505050565b6000813590506200057f8162000cac565b92915050565b600081519050620005968162000cc6565b92915050565b600082601f830112620005ae57600080fd5b8135620005c084826020860162000529565b91505092915050565b600081359050620005da8162000cd7565b92915050565b600081519050620005f18162000cd7565b92915050565b6000602082840312156200060a57600080fd5b60006200061a848285016200056e565b91505092915050565b6000602082840312156200063657600080fd5b6000620006468482850162000585565b91505092915050565b6000602082840312156200066257600080fd5b60006200067284828501620005e0565b91505092915050565b600080600080600060a086880312156200069457600080fd5b6000620006a488828901620005c9565b9550506020620006b788828901620005c9565b9450506040620006ca88828901620005c9565b935050606086013567ffffffffffffffff811115620006e857600080fd5b620006f6888289016200059c565b925050608086013567ffffffffffffffff8111156200071457600080fd5b62000722888289016200059c565b9150509295509295909350565b60006200073d8383620007c4565b60208301905092915050565b620007548162000b25565b82525050565b6000620007678262000ae0565b62000773818562000b03565b9350620007808362000ad0565b8060005b83811015620007b75781516200079b88826200072f565b9750620007a88362000af6565b92505060018101905062000784565b5085935050505092915050565b620007cf8162000b63565b82525050565b620007e08162000b8b565b82525050565b6000620007f38262000aeb565b620007ff818562000b14565b93506200081181856020860162000bae565b6200081c8162000c49565b840191505092915050565b600062000836600d8362000b14565b9150620008438262000c5a565b602082019050919050565b60006200085d60208362000b14565b91506200086a8262000c83565b602082019050919050565b620008808162000b59565b82525050565b60006020820190506200089d600083018462000749565b92915050565b600061014082019050620008bb600083018d62000749565b620008ca602083018c62000749565b620008d9604083018b62000875565b620008e8606083018a62000875565b620008f7608083018962000875565b6200090660a0830188620007d5565b6200091560c0830187620007d5565b81810360e0830152620009298186620007e6565b9050818103610100830152620009408185620007e6565b905062000952610120830184620007d5565b9b9a5050505050505050505050565b600060408201905062000978600083018562000749565b62000987602083018462000875565b9392505050565b600060c082019050620009a5600083018962000749565b620009b4602083018862000875565b620009c3604083018762000875565b620009d2606083018662000875565b8181036080830152620009e68185620007e6565b905081810360a0830152620009fc8184620007e6565b9050979650505050505050565b6000602082019050818103600083015262000a2581846200075a565b905092915050565b6000602082019050818103600083015262000a488162000827565b9050919050565b6000602082019050818103600083015262000a6a816200084e565b9050919050565b600062000a7d62000a90565b905062000a8b828262000be4565b919050565b6000604051905090565b600067ffffffffffffffff82111562000ab85762000ab762000c1a565b5b62000ac38262000c49565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600062000b328262000b39565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600062000b708262000b77565b9050919050565b600062000b848262000b39565b9050919050565b600062000b988262000b59565b9050919050565b82818337600083830152505050565b60005b8381101562000bce57808201518184015260208101905062000bb1565b8381111562000bde576000848401525b50505050565b62000bef8262000c49565b810181811067ffffffffffffffff8211171562000c115762000c1062000c1a565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f496e76616c696420737461746500000000000000000000000000000000000000600082015250565b7f436f6e747269627574696f6e20616d6f756e7420697320746f6f206c6f772021600082015250565b62000cb78162000b25565b811462000cc357600080fd5b50565b6003811062000cd457600080fd5b50565b62000ce28162000b59565b811462000cee57600080fd5b5056fe60806040526000600960006101000a81548160ff0219169083600281111562000051577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b02179055506000600c553480156200006857600080fd5b50604051620029bd380380620029bd83398181016040528101906200008e919062000279565b856000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508460018190555083600281905550826003819055508160079080519060200190620000fb92919062000129565b5080600890805190602001906200011492919062000129565b50600060058190555050505050505062000523565b828054620001379062000414565b90600052602060002090601f0160209004810192826200015b5760008555620001a7565b82601f106200017657805160ff1916838001178555620001a7565b82800160010185558215620001a7579182015b82811115620001a657825182559160200191906001019062000189565b5b509050620001b69190620001ba565b5090565b5b80821115620001d5576000816000905550600101620001bb565b5090565b6000620001f0620001ea846200036a565b62000341565b9050828152602081018484840111156200020957600080fd5b62000216848285620003de565b509392505050565b6000815190506200022f81620004ef565b92915050565b600082601f8301126200024757600080fd5b815162000259848260208601620001d9565b91505092915050565b600081519050620002738162000509565b92915050565b60008060008060008060c087890312156200029357600080fd5b6000620002a389828a016200021e565b9650506020620002b689828a0162000262565b9550506040620002c989828a0162000262565b9450506060620002dc89828a0162000262565b935050608087015167ffffffffffffffff811115620002fa57600080fd5b6200030889828a0162000235565b92505060a087015167ffffffffffffffff8111156200032657600080fd5b6200033489828a0162000235565b9150509295509295509295565b60006200034d62000360565b90506200035b82826200044a565b919050565b6000604051905090565b600067ffffffffffffffff821115620003885762000387620004af565b5b6200039382620004de565b9050602081019050919050565b6000620003ad82620003b4565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b83811015620003fe578082015181840152602081019050620003e1565b838111156200040e576000848401525b50505050565b600060028204905060018216806200042d57607f821691505b6020821081141562000444576200044362000480565b5b50919050565b6200045582620004de565b810181811067ffffffffffffffff82111715620004775762000476620004af565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b620004fa81620003a0565b81146200050657600080fd5b50565b6200051481620003d4565b81146200052057600080fd5b50565b61248a80620005336000396000f3fe60806040526004361061011f5760003560e01c8063937e09b1116100a0578063c19d93fb11610064578063c19d93fb146103bc578063c3e20c9f146103e7578063c59ee1dc14610412578063d5cef1331461043d578063ff3a9c7e146104685761011f565b8063937e09b1146102d1578063992a7dfb146102fc578063a46752ae1461033d578063b40141bf14610366578063b82c86d6146103915761011f565b80634c4cea5a116100e75780634c4cea5a1461020d5780634e695a37146102385780636f9fb98a1461026157806373e888fd1461028c578063752e19f9146102a85761011f565b806302d05d3f1461012457806303c29d581461014f5780631f6d49421461017a57806324274ee9146101b757806329dcb0cf146101e2575b600080fd5b34801561013057600080fd5b5061013961049c565b6040516101469190611a77565b60405180910390f35b34801561015b57600080fd5b506101646104c0565b6040516101719190611bd2565b60405180910390f35b34801561018657600080fd5b506101a1600480360381019061019c9190611761565b61054e565b6040516101ae9190611d6e565b60405180910390f35b3480156101c357600080fd5b506101cc610566565b6040516101d99190611d6e565b60405180910390f35b3480156101ee57600080fd5b506101f761056c565b6040516102049190611d6e565b60405180910390f35b34801561021957600080fd5b50610222610572565b60405161022f9190611d6e565b60405180910390f35b34801561024457600080fd5b5061025f600480360381019061025a91906117f1565b610578565b005b34801561026d57600080fd5b5061027661075d565b6040516102839190611d6e565b60405180910390f35b6102a660048036038101906102a19190611761565b610765565b005b3480156102b457600080fd5b506102cf60048036038101906102ca91906117f1565b6109ca565b005b3480156102dd57600080fd5b506102e6610d25565b6040516102f39190611d6e565b60405180910390f35b34801561030857600080fd5b50610323600480360381019061031e91906117f1565b610d2b565b604051610334959493929190611bf4565b60405180910390f35b34801561034957600080fd5b50610364600480360381019061035f919061178a565b610e16565b005b34801561037257600080fd5b5061037b6110b3565b6040516103889190611d6e565b60405180910390f35b34801561039d57600080fd5b506103a66110b9565b6040516103b39190611d6e565b60405180910390f35b3480156103c857600080fd5b506103d16110bf565b6040516103de9190611bb7565b60405180910390f35b3480156103f357600080fd5b506103fc6110d2565b6040516104099190611bd2565b60405180910390f35b34801561041e57600080fd5b50610427611160565b6040516104349190611d6e565b60405180910390f35b34801561044957600080fd5b50610452611166565b60405161045f9190611b9c565b60405180910390f35b34801561047457600080fd5b5061047d6113ca565b6040516104939a99989796959493929190611a92565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600880546104cd90612070565b80601f01602080910402602001604051908101604052809291908181526020018280546104f990612070565b80156105465780601f1061051b57610100808354040283529160200191610546565b820191906000526020600020905b81548152906001019060200180831161052957829003601f168201915b505050505081565b600a6020528060005260406000206000915090505481565b60065481565b60025481565b60045481565b6000600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054116105fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105f190611d0e565b60405180910390fd5b6000600b60008381526020019081526020016000209050600015158160030160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146106a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069d90611cae565b60405180910390fd5b60018160030160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060018160020160008282546107159190611ee0565b925050819055507fa2925e4595bf873fa82c22a1a89809777347023bf2b502d32710157a5eb8199c338260020154604051610751929190611b3c565b60405180910390a15050565b600047905090565b60008060028111156107a0577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600960009054906101000a900460ff1660028111156107e8577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b14610828576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081f90611cee565b60405180910390fd5b600254421061086c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086390611cce565b60405180910390fd5b6001543410156108b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108a890611d2e565b60405180910390fd5b6000600a60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541415610912576006600081548092919061090c906120d3565b91905055505b34600a60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546109619190611ee0565b92505081905550346005600082825461097a9190611ee0565b925050819055507f5cdc4ab8d637538ead6cc1904d4160343656c8c82bd266635cfd31ac008fffe082346005546040516109b693929190611b65565b60405180910390a16109c6611550565b5050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a58576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4f90611c8e565b60405180910390fd5b6002806002811115610a93577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600960009054906101000a900460ff166002811115610adb577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b14610b1b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b1290611cee565b60405180910390fd5b6002544210610b5f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5690611cce565b60405180910390fd5b6000600b60008481526020019081526020016000209050600015158160040160009054906101000a900460ff16151514610bce576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc590611d4e565b60405180910390fd5b6002600654610bdd9190611f36565b81600201541015610c23576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c1a90611c6e565b60405180910390fd5b8060040160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc82600101549081150290604051600060405180830381858888f19350505050158015610c91573d6000803e3d6000fd5b5060018160040160006101000a81548160ff0219169083151502179055507f2af8d60b878c5e8de57c8ff96e03c6cfab6de26b47e989757345cc1dceaac99883826000018360010154846002015460018660040160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051610d1896959493929190611df1565b60405180910390a1505050565b60015481565b600b602052806000526040600020600091509050806000018054610d4e90612070565b80601f0160208091040260200160405190810160405280929190818152602001828054610d7a90612070565b8015610dc75780601f10610d9c57610100808354040283529160200191610dc7565b820191906000526020600020905b815481529060010190602001808311610daa57829003601f168201915b5050505050908060010154908060020154908060040160009054906101000a900460ff16908060040160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905085565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610ea4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e9b90611c8e565b60405180910390fd5b6002806002811115610edf577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600960009054906101000a900460ff166002811115610f27577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b14610f67576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f5e90611cee565b60405180910390fd5b6002544210610fab576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fa290611cce565b60405180910390fd5b6000600b6000600c5481526020019081526020016000209050600c6000815480929190610fd7906120d3565b919050555084816000019080519060200190610ff4929190611617565b508381600101819055506000816002018190555060008160040160006101000a81548160ff021916908315150217905550828160040160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f9883a4e4f8698e4cc93bafb8d0d2376cb8c51dd322cb9fd80d02c691fcdea503600c548686600080886040516110a496959493929190611d89565b60405180910390a15050505050565b600c5481565b60035481565b600960009054906101000a900460ff1681565b600780546110df90612070565b80601f016020809104026020016040519081016040528092919081815260200182805461110b90612070565b80156111585780601f1061112d57610100808354040283529160200191611158565b820191906000526020600020905b81548152906001019060200180831161113b57829003601f168201915b505050505081565b60055481565b600060018060028111156111a3577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600960009054906101000a900460ff1660028111156111eb577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b1461122b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161122290611cee565b60405180910390fd5b600254421061126f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161126690611cce565b60405180910390fd5b6000600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054116112f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112e890611c4e565b60405180910390fd5b60003390508073ffffffffffffffffffffffffffffffffffffffff166108fc600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549081150290604051600060405180830381858888f1935050505015801561137b573d6000803e3d6000fd5b506000600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060019250505090565b60008060008060008060608060008060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff169950600154985060025497506003549650600454955060055494506007805461142290612070565b80601f016020809104026020016040519081016040528092919081815260200182805461144e90612070565b801561149b5780601f106114705761010080835404028352916020019161149b565b820191906000526020600020905b81548152906001019060200180831161147e57829003601f168201915b50505050509350600880546114af90612070565b80601f01602080910402602001604051908101604052809291908181526020018280546114db90612070565b80156115285780601f106114fd57610100808354040283529160200191611528565b820191906000526020600020905b81548152906001019060200180831161150b57829003601f168201915b50505050509250600960009054906101000a900460ff16915047905090919293949596979899565b600354600554106115b1576002600960006101000a81548160ff021916908360028111156115a7577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b021790555061160e565b60025442111561160d576001600960006101000a81548160ff02191690836002811115611607577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b02179055505b5b42600481905550565b82805461162390612070565b90600052602060002090601f016020900481019282611645576000855561168c565b82601f1061165e57805160ff191683800117855561168c565b8280016001018555821561168c579182015b8281111561168b578251825591602001919060010190611670565b5b509050611699919061169d565b5090565b5b808211156116b657600081600090555060010161169e565b5090565b60006116cd6116c884611e7e565b611e59565b9050828152602081018484840111156116e557600080fd5b6116f084828561202e565b509392505050565b6000813590506117078161240f565b92915050565b60008135905061171c81612426565b92915050565b600082601f83011261173357600080fd5b81356117438482602086016116ba565b91505092915050565b60008135905061175b8161243d565b92915050565b60006020828403121561177357600080fd5b6000611781848285016116f8565b91505092915050565b60008060006060848603121561179f57600080fd5b600084013567ffffffffffffffff8111156117b957600080fd5b6117c586828701611722565b93505060206117d68682870161174c565b92505060406117e78682870161170d565b9150509250925092565b60006020828403121561180357600080fd5b60006118118482850161174c565b91505092915050565b61182381611fd4565b82525050565b61183281611f79565b82525050565b61184181611f67565b82525050565b61185081611f8b565b82525050565b61185f81611fe6565b82525050565b61186e81611ff8565b82525050565b600061187f82611ec4565b6118898185611ecf565b935061189981856020860161203d565b6118a281612207565b840191505092915050565b600081546118ba81612070565b6118c48186611ecf565b945060018216600081146118df57600181146118f157611924565b60ff1983168652602086019350611924565b6118fa85611eaf565b60005b8381101561191c578154818901526001820191506020810190506118fd565b808801955050505b50505092915050565b600061193a602583611ecf565b915061194582612218565b604082019050919050565b600061195d603a83611ecf565b915061196882612267565b604082019050919050565b6000611980603183611ecf565b915061198b826122b6565b604082019050919050565b60006119a3601783611ecf565b91506119ae82612305565b602082019050919050565b60006119c6601483611ecf565b91506119d18261232e565b602082019050919050565b60006119e9600d83611ecf565b91506119f482612357565b602082019050919050565b6000611a0c601b83611ecf565b9150611a1782612380565b602082019050919050565b6000611a2f602083611ecf565b9150611a3a826123a9565b602082019050919050565b6000611a52601983611ecf565b9150611a5d826123d2565b602082019050919050565b611a7181611fca565b82525050565b6000602082019050611a8c6000830184611829565b92915050565b600061014082019050611aa8600083018d611829565b611ab5602083018c611a68565b611ac2604083018b611a68565b611acf606083018a611a68565b611adc6080830189611a68565b611ae960a0830188611a68565b81810360c0830152611afb8187611874565b905081810360e0830152611b0f8186611874565b9050611b1f610100830185611856565b611b2d610120830184611a68565b9b9a5050505050505050505050565b6000604082019050611b516000830185611838565b611b5e6020830184611a68565b9392505050565b6000606082019050611b7a6000830186611838565b611b876020830185611a68565b611b946040830184611a68565b949350505050565b6000602082019050611bb16000830184611847565b92915050565b6000602082019050611bcc6000830184611856565b92915050565b60006020820190508181036000830152611bec8184611874565b905092915050565b600060a0820190508181036000830152611c0e8188611874565b9050611c1d6020830187611a68565b611c2a6040830186611a68565b611c376060830185611847565b611c446080830184611829565b9695505050505050565b60006020820190508181036000830152611c678161192d565b9050919050565b60006020820190508181036000830152611c8781611950565b9050919050565b60006020820190508181036000830152611ca781611973565b9050919050565b60006020820190508181036000830152611cc781611996565b9050919050565b60006020820190508181036000830152611ce7816119b9565b9050919050565b60006020820190508181036000830152611d07816119dc565b9050919050565b60006020820190508181036000830152611d27816119ff565b9050919050565b60006020820190508181036000830152611d4781611a22565b9050919050565b60006020820190508181036000830152611d6781611a45565b9050919050565b6000602082019050611d836000830184611a68565b92915050565b600060c082019050611d9e6000830189611a68565b8181036020830152611db08188611874565b9050611dbf6040830187611a68565b611dcc6060830186611865565b611dd96080830185611847565b611de660a083018461181a565b979650505050505050565b600060c082019050611e066000830189611a68565b8181036020830152611e1881886118ad565b9050611e276040830187611a68565b611e346060830186611a68565b611e416080830185611847565b611e4e60a083018461181a565b979650505050505050565b6000611e63611e74565b9050611e6f82826120a2565b919050565b6000604051905090565b600067ffffffffffffffff821115611e9957611e986121d8565b5b611ea282612207565b9050602081019050919050565b60008190508160005260206000209050919050565b600081519050919050565b600082825260208201905092915050565b6000611eeb82611fca565b9150611ef683611fca565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611f2b57611f2a61211c565b5b828201905092915050565b6000611f4182611fca565b9150611f4c83611fca565b925082611f5c57611f5b61214b565b5b828204905092915050565b6000611f7282611faa565b9050919050565b6000611f8482611faa565b9050919050565b60008115159050919050565b6000819050611fa5826123fb565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000611fdf8261200a565b9050919050565b6000611ff182611f97565b9050919050565b600061200382611fca565b9050919050565b60006120158261201c565b9050919050565b600061202782611faa565b9050919050565b82818337600083830152505050565b60005b8381101561205b578082015181840152602081019050612040565b8381111561206a576000848401525b50505050565b6000600282049050600182168061208857607f821691505b6020821081141561209c5761209b6121a9565b5b50919050565b6120ab82612207565b810181811067ffffffffffffffff821117156120ca576120c96121d8565b5b80604052505050565b60006120de82611fca565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156121115761211061211c565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f596f7520646f206e6f742068617665206120636f6e747269627574656420616d60008201527f6f756e7421000000000000000000000000000000000000000000000000000000602082015250565b7f4174206c6561737420353025206f6620636f6e7472696275746f7273206e656560008201527f6420746f20766f746520666f7220746869732072657175657374000000000000602082015250565b7f596f7520646f206e6f7420686176652061636365737320746f20706572666f7260008201527f6d2074686973206f7065726174696f6e21000000000000000000000000000000602082015250565b7f596f75206861766520616c726561647920766f74656421000000000000000000600082015250565b7f446561646c696e65206861732070617373656421000000000000000000000000600082015250565b7f496e76616c696420737461746500000000000000000000000000000000000000600082015250565b7f4f6e6c7920636f6e7472696275746f72732063616e20766f7465210000000000600082015250565b7f436f6e747269627574696f6e20616d6f756e7420697320746f6f206c6f772021600082015250565b7f5265717565737420616c726561647920636f6d706c6574656400000000000000600082015250565b6003811061240c5761240b61217a565b5b50565b61241881611f67565b811461242357600080fd5b50565b61242f81611f79565b811461243a57600080fd5b50565b61244681611fca565b811461245157600080fd5b5056fea2646970667358221220eedd29c8c97a011182089d321988b1f425d10c5138bc13aa5304f1d4dfeaa13564736f6c63430008040033a2646970667358221220d1de76c339737294c91d3bd025a17f03a777c7f09bf5b1382553630a3f65a0d664736f6c63430008040033","linkReferences":{},"deployedLinkReferences":{}}');

/***/ }),

/***/ "./artifacts/contracts/Project.sol/Project.json":
/*!******************************************************!*\
  !*** ./artifacts/contracts/Project.sol/Project.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"_format":"hh-sol-artifact-1","contractName":"Project","sourceName":"contracts/Project.sol","abi":[{"inputs":[{"internalType":"address","name":"_creator","type":"address"},{"internalType":"uint256","name":"_minimumContribution","type":"uint256"},{"internalType":"uint256","name":"_deadline","type":"uint256"},{"internalType":"uint256","name":"_targetContribution","type":"uint256"},{"internalType":"string","name":"_projectTitle","type":"string"},{"internalType":"string","name":"_projectDes","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"requestId","type":"uint256"},{"indexed":false,"internalType":"string","name":"description","type":"string"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"noOfVotes","type":"uint256"},{"indexed":false,"internalType":"bool","name":"isCompleted","type":"bool"},{"indexed":false,"internalType":"address","name":"reciptent","type":"address"}],"name":"AmountWithdrawSuccessful","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"contributor","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"currentTotal","type":"uint256"}],"name":"FundingReceived","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"requestId","type":"uint256"},{"indexed":false,"internalType":"string","name":"description","type":"string"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"noOfVotes","type":"uint256"},{"indexed":false,"internalType":"bool","name":"isCompleted","type":"bool"},{"indexed":false,"internalType":"address","name":"reciptent","type":"address"}],"name":"WithdrawRequestCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"voter","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalVote","type":"uint256"}],"name":"WithdrawVote","type":"event"},{"inputs":[],"name":"completeAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_contributor","type":"address"}],"name":"contribute","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"contributors","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_description","type":"string"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address payable","name":"_reciptent","type":"address"}],"name":"createWithdrawRequest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"creator","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deadline","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getProjectDetails","outputs":[{"internalType":"address payable","name":"projectStarter","type":"address"},{"internalType":"uint256","name":"minContribution","type":"uint256"},{"internalType":"uint256","name":"projectDeadline","type":"uint256"},{"internalType":"uint256","name":"goalAmount","type":"uint256"},{"internalType":"uint256","name":"completedTime","type":"uint256"},{"internalType":"uint256","name":"currentAmount","type":"uint256"},{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"desc","type":"string"},{"internalType":"enum Project.State","name":"currentState","type":"uint8"},{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minimumContribution","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"noOfContributers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numOfWithdrawRequests","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"projectDes","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"projectTitle","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"raisedAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"requestRefund","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"state","outputs":[{"internalType":"enum Project.State","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"targetContribution","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_requestId","type":"uint256"}],"name":"voteWithdrawRequest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_requestId","type":"uint256"}],"name":"withdrawRequestedAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"withdrawRequests","outputs":[{"internalType":"string","name":"description","type":"string"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"noOfVotes","type":"uint256"},{"internalType":"bool","name":"isCompleted","type":"bool"},{"internalType":"address payable","name":"reciptent","type":"address"}],"stateMutability":"view","type":"function"}],"bytecode":"0x60806040526000600960006101000a81548160ff0219169083600281111562000051577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b02179055506000600c553480156200006857600080fd5b50604051620029bd380380620029bd83398181016040528101906200008e919062000279565b856000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508460018190555083600281905550826003819055508160079080519060200190620000fb92919062000129565b5080600890805190602001906200011492919062000129565b50600060058190555050505050505062000523565b828054620001379062000414565b90600052602060002090601f0160209004810192826200015b5760008555620001a7565b82601f106200017657805160ff1916838001178555620001a7565b82800160010185558215620001a7579182015b82811115620001a657825182559160200191906001019062000189565b5b509050620001b69190620001ba565b5090565b5b80821115620001d5576000816000905550600101620001bb565b5090565b6000620001f0620001ea846200036a565b62000341565b9050828152602081018484840111156200020957600080fd5b62000216848285620003de565b509392505050565b6000815190506200022f81620004ef565b92915050565b600082601f8301126200024757600080fd5b815162000259848260208601620001d9565b91505092915050565b600081519050620002738162000509565b92915050565b60008060008060008060c087890312156200029357600080fd5b6000620002a389828a016200021e565b9650506020620002b689828a0162000262565b9550506040620002c989828a0162000262565b9450506060620002dc89828a0162000262565b935050608087015167ffffffffffffffff811115620002fa57600080fd5b6200030889828a0162000235565b92505060a087015167ffffffffffffffff8111156200032657600080fd5b6200033489828a0162000235565b9150509295509295509295565b60006200034d62000360565b90506200035b82826200044a565b919050565b6000604051905090565b600067ffffffffffffffff821115620003885762000387620004af565b5b6200039382620004de565b9050602081019050919050565b6000620003ad82620003b4565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b83811015620003fe578082015181840152602081019050620003e1565b838111156200040e576000848401525b50505050565b600060028204905060018216806200042d57607f821691505b6020821081141562000444576200044362000480565b5b50919050565b6200045582620004de565b810181811067ffffffffffffffff82111715620004775762000476620004af565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b620004fa81620003a0565b81146200050657600080fd5b50565b6200051481620003d4565b81146200052057600080fd5b50565b61248a80620005336000396000f3fe60806040526004361061011f5760003560e01c8063937e09b1116100a0578063c19d93fb11610064578063c19d93fb146103bc578063c3e20c9f146103e7578063c59ee1dc14610412578063d5cef1331461043d578063ff3a9c7e146104685761011f565b8063937e09b1146102d1578063992a7dfb146102fc578063a46752ae1461033d578063b40141bf14610366578063b82c86d6146103915761011f565b80634c4cea5a116100e75780634c4cea5a1461020d5780634e695a37146102385780636f9fb98a1461026157806373e888fd1461028c578063752e19f9146102a85761011f565b806302d05d3f1461012457806303c29d581461014f5780631f6d49421461017a57806324274ee9146101b757806329dcb0cf146101e2575b600080fd5b34801561013057600080fd5b5061013961049c565b6040516101469190611a77565b60405180910390f35b34801561015b57600080fd5b506101646104c0565b6040516101719190611bd2565b60405180910390f35b34801561018657600080fd5b506101a1600480360381019061019c9190611761565b61054e565b6040516101ae9190611d6e565b60405180910390f35b3480156101c357600080fd5b506101cc610566565b6040516101d99190611d6e565b60405180910390f35b3480156101ee57600080fd5b506101f761056c565b6040516102049190611d6e565b60405180910390f35b34801561021957600080fd5b50610222610572565b60405161022f9190611d6e565b60405180910390f35b34801561024457600080fd5b5061025f600480360381019061025a91906117f1565b610578565b005b34801561026d57600080fd5b5061027661075d565b6040516102839190611d6e565b60405180910390f35b6102a660048036038101906102a19190611761565b610765565b005b3480156102b457600080fd5b506102cf60048036038101906102ca91906117f1565b6109ca565b005b3480156102dd57600080fd5b506102e6610d25565b6040516102f39190611d6e565b60405180910390f35b34801561030857600080fd5b50610323600480360381019061031e91906117f1565b610d2b565b604051610334959493929190611bf4565b60405180910390f35b34801561034957600080fd5b50610364600480360381019061035f919061178a565b610e16565b005b34801561037257600080fd5b5061037b6110b3565b6040516103889190611d6e565b60405180910390f35b34801561039d57600080fd5b506103a66110b9565b6040516103b39190611d6e565b60405180910390f35b3480156103c857600080fd5b506103d16110bf565b6040516103de9190611bb7565b60405180910390f35b3480156103f357600080fd5b506103fc6110d2565b6040516104099190611bd2565b60405180910390f35b34801561041e57600080fd5b50610427611160565b6040516104349190611d6e565b60405180910390f35b34801561044957600080fd5b50610452611166565b60405161045f9190611b9c565b60405180910390f35b34801561047457600080fd5b5061047d6113ca565b6040516104939a99989796959493929190611a92565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600880546104cd90612070565b80601f01602080910402602001604051908101604052809291908181526020018280546104f990612070565b80156105465780601f1061051b57610100808354040283529160200191610546565b820191906000526020600020905b81548152906001019060200180831161052957829003601f168201915b505050505081565b600a6020528060005260406000206000915090505481565b60065481565b60025481565b60045481565b6000600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054116105fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105f190611d0e565b60405180910390fd5b6000600b60008381526020019081526020016000209050600015158160030160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146106a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069d90611cae565b60405180910390fd5b60018160030160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060018160020160008282546107159190611ee0565b925050819055507fa2925e4595bf873fa82c22a1a89809777347023bf2b502d32710157a5eb8199c338260020154604051610751929190611b3c565b60405180910390a15050565b600047905090565b60008060028111156107a0577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600960009054906101000a900460ff1660028111156107e8577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b14610828576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081f90611cee565b60405180910390fd5b600254421061086c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086390611cce565b60405180910390fd5b6001543410156108b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108a890611d2e565b60405180910390fd5b6000600a60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541415610912576006600081548092919061090c906120d3565b91905055505b34600a60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546109619190611ee0565b92505081905550346005600082825461097a9190611ee0565b925050819055507f5cdc4ab8d637538ead6cc1904d4160343656c8c82bd266635cfd31ac008fffe082346005546040516109b693929190611b65565b60405180910390a16109c6611550565b5050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a58576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4f90611c8e565b60405180910390fd5b6002806002811115610a93577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600960009054906101000a900460ff166002811115610adb577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b14610b1b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b1290611cee565b60405180910390fd5b6002544210610b5f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5690611cce565b60405180910390fd5b6000600b60008481526020019081526020016000209050600015158160040160009054906101000a900460ff16151514610bce576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc590611d4e565b60405180910390fd5b6002600654610bdd9190611f36565b81600201541015610c23576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c1a90611c6e565b60405180910390fd5b8060040160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc82600101549081150290604051600060405180830381858888f19350505050158015610c91573d6000803e3d6000fd5b5060018160040160006101000a81548160ff0219169083151502179055507f2af8d60b878c5e8de57c8ff96e03c6cfab6de26b47e989757345cc1dceaac99883826000018360010154846002015460018660040160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051610d1896959493929190611df1565b60405180910390a1505050565b60015481565b600b602052806000526040600020600091509050806000018054610d4e90612070565b80601f0160208091040260200160405190810160405280929190818152602001828054610d7a90612070565b8015610dc75780601f10610d9c57610100808354040283529160200191610dc7565b820191906000526020600020905b815481529060010190602001808311610daa57829003601f168201915b5050505050908060010154908060020154908060040160009054906101000a900460ff16908060040160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905085565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610ea4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e9b90611c8e565b60405180910390fd5b6002806002811115610edf577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600960009054906101000a900460ff166002811115610f27577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b14610f67576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f5e90611cee565b60405180910390fd5b6002544210610fab576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fa290611cce565b60405180910390fd5b6000600b6000600c5481526020019081526020016000209050600c6000815480929190610fd7906120d3565b919050555084816000019080519060200190610ff4929190611617565b508381600101819055506000816002018190555060008160040160006101000a81548160ff021916908315150217905550828160040160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f9883a4e4f8698e4cc93bafb8d0d2376cb8c51dd322cb9fd80d02c691fcdea503600c548686600080886040516110a496959493929190611d89565b60405180910390a15050505050565b600c5481565b60035481565b600960009054906101000a900460ff1681565b600780546110df90612070565b80601f016020809104026020016040519081016040528092919081815260200182805461110b90612070565b80156111585780601f1061112d57610100808354040283529160200191611158565b820191906000526020600020905b81548152906001019060200180831161113b57829003601f168201915b505050505081565b60055481565b600060018060028111156111a3577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600960009054906101000a900460ff1660028111156111eb577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b1461122b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161122290611cee565b60405180910390fd5b600254421061126f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161126690611cce565b60405180910390fd5b6000600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054116112f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112e890611c4e565b60405180910390fd5b60003390508073ffffffffffffffffffffffffffffffffffffffff166108fc600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549081150290604051600060405180830381858888f1935050505015801561137b573d6000803e3d6000fd5b506000600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060019250505090565b60008060008060008060608060008060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff169950600154985060025497506003549650600454955060055494506007805461142290612070565b80601f016020809104026020016040519081016040528092919081815260200182805461144e90612070565b801561149b5780601f106114705761010080835404028352916020019161149b565b820191906000526020600020905b81548152906001019060200180831161147e57829003601f168201915b50505050509350600880546114af90612070565b80601f01602080910402602001604051908101604052809291908181526020018280546114db90612070565b80156115285780601f106114fd57610100808354040283529160200191611528565b820191906000526020600020905b81548152906001019060200180831161150b57829003601f168201915b50505050509250600960009054906101000a900460ff16915047905090919293949596979899565b600354600554106115b1576002600960006101000a81548160ff021916908360028111156115a7577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b021790555061160e565b60025442111561160d576001600960006101000a81548160ff02191690836002811115611607577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b02179055505b5b42600481905550565b82805461162390612070565b90600052602060002090601f016020900481019282611645576000855561168c565b82601f1061165e57805160ff191683800117855561168c565b8280016001018555821561168c579182015b8281111561168b578251825591602001919060010190611670565b5b509050611699919061169d565b5090565b5b808211156116b657600081600090555060010161169e565b5090565b60006116cd6116c884611e7e565b611e59565b9050828152602081018484840111156116e557600080fd5b6116f084828561202e565b509392505050565b6000813590506117078161240f565b92915050565b60008135905061171c81612426565b92915050565b600082601f83011261173357600080fd5b81356117438482602086016116ba565b91505092915050565b60008135905061175b8161243d565b92915050565b60006020828403121561177357600080fd5b6000611781848285016116f8565b91505092915050565b60008060006060848603121561179f57600080fd5b600084013567ffffffffffffffff8111156117b957600080fd5b6117c586828701611722565b93505060206117d68682870161174c565b92505060406117e78682870161170d565b9150509250925092565b60006020828403121561180357600080fd5b60006118118482850161174c565b91505092915050565b61182381611fd4565b82525050565b61183281611f79565b82525050565b61184181611f67565b82525050565b61185081611f8b565b82525050565b61185f81611fe6565b82525050565b61186e81611ff8565b82525050565b600061187f82611ec4565b6118898185611ecf565b935061189981856020860161203d565b6118a281612207565b840191505092915050565b600081546118ba81612070565b6118c48186611ecf565b945060018216600081146118df57600181146118f157611924565b60ff1983168652602086019350611924565b6118fa85611eaf565b60005b8381101561191c578154818901526001820191506020810190506118fd565b808801955050505b50505092915050565b600061193a602583611ecf565b915061194582612218565b604082019050919050565b600061195d603a83611ecf565b915061196882612267565b604082019050919050565b6000611980603183611ecf565b915061198b826122b6565b604082019050919050565b60006119a3601783611ecf565b91506119ae82612305565b602082019050919050565b60006119c6601483611ecf565b91506119d18261232e565b602082019050919050565b60006119e9600d83611ecf565b91506119f482612357565b602082019050919050565b6000611a0c601b83611ecf565b9150611a1782612380565b602082019050919050565b6000611a2f602083611ecf565b9150611a3a826123a9565b602082019050919050565b6000611a52601983611ecf565b9150611a5d826123d2565b602082019050919050565b611a7181611fca565b82525050565b6000602082019050611a8c6000830184611829565b92915050565b600061014082019050611aa8600083018d611829565b611ab5602083018c611a68565b611ac2604083018b611a68565b611acf606083018a611a68565b611adc6080830189611a68565b611ae960a0830188611a68565b81810360c0830152611afb8187611874565b905081810360e0830152611b0f8186611874565b9050611b1f610100830185611856565b611b2d610120830184611a68565b9b9a5050505050505050505050565b6000604082019050611b516000830185611838565b611b5e6020830184611a68565b9392505050565b6000606082019050611b7a6000830186611838565b611b876020830185611a68565b611b946040830184611a68565b949350505050565b6000602082019050611bb16000830184611847565b92915050565b6000602082019050611bcc6000830184611856565b92915050565b60006020820190508181036000830152611bec8184611874565b905092915050565b600060a0820190508181036000830152611c0e8188611874565b9050611c1d6020830187611a68565b611c2a6040830186611a68565b611c376060830185611847565b611c446080830184611829565b9695505050505050565b60006020820190508181036000830152611c678161192d565b9050919050565b60006020820190508181036000830152611c8781611950565b9050919050565b60006020820190508181036000830152611ca781611973565b9050919050565b60006020820190508181036000830152611cc781611996565b9050919050565b60006020820190508181036000830152611ce7816119b9565b9050919050565b60006020820190508181036000830152611d07816119dc565b9050919050565b60006020820190508181036000830152611d27816119ff565b9050919050565b60006020820190508181036000830152611d4781611a22565b9050919050565b60006020820190508181036000830152611d6781611a45565b9050919050565b6000602082019050611d836000830184611a68565b92915050565b600060c082019050611d9e6000830189611a68565b8181036020830152611db08188611874565b9050611dbf6040830187611a68565b611dcc6060830186611865565b611dd96080830185611847565b611de660a083018461181a565b979650505050505050565b600060c082019050611e066000830189611a68565b8181036020830152611e1881886118ad565b9050611e276040830187611a68565b611e346060830186611a68565b611e416080830185611847565b611e4e60a083018461181a565b979650505050505050565b6000611e63611e74565b9050611e6f82826120a2565b919050565b6000604051905090565b600067ffffffffffffffff821115611e9957611e986121d8565b5b611ea282612207565b9050602081019050919050565b60008190508160005260206000209050919050565b600081519050919050565b600082825260208201905092915050565b6000611eeb82611fca565b9150611ef683611fca565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611f2b57611f2a61211c565b5b828201905092915050565b6000611f4182611fca565b9150611f4c83611fca565b925082611f5c57611f5b61214b565b5b828204905092915050565b6000611f7282611faa565b9050919050565b6000611f8482611faa565b9050919050565b60008115159050919050565b6000819050611fa5826123fb565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000611fdf8261200a565b9050919050565b6000611ff182611f97565b9050919050565b600061200382611fca565b9050919050565b60006120158261201c565b9050919050565b600061202782611faa565b9050919050565b82818337600083830152505050565b60005b8381101561205b578082015181840152602081019050612040565b8381111561206a576000848401525b50505050565b6000600282049050600182168061208857607f821691505b6020821081141561209c5761209b6121a9565b5b50919050565b6120ab82612207565b810181811067ffffffffffffffff821117156120ca576120c96121d8565b5b80604052505050565b60006120de82611fca565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156121115761211061211c565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f596f7520646f206e6f742068617665206120636f6e747269627574656420616d60008201527f6f756e7421000000000000000000000000000000000000000000000000000000602082015250565b7f4174206c6561737420353025206f6620636f6e7472696275746f7273206e656560008201527f6420746f20766f746520666f7220746869732072657175657374000000000000602082015250565b7f596f7520646f206e6f7420686176652061636365737320746f20706572666f7260008201527f6d2074686973206f7065726174696f6e21000000000000000000000000000000602082015250565b7f596f75206861766520616c726561647920766f74656421000000000000000000600082015250565b7f446561646c696e65206861732070617373656421000000000000000000000000600082015250565b7f496e76616c696420737461746500000000000000000000000000000000000000600082015250565b7f4f6e6c7920636f6e7472696275746f72732063616e20766f7465210000000000600082015250565b7f436f6e747269627574696f6e20616d6f756e7420697320746f6f206c6f772021600082015250565b7f5265717565737420616c726561647920636f6d706c6574656400000000000000600082015250565b6003811061240c5761240b61217a565b5b50565b61241881611f67565b811461242357600080fd5b50565b61242f81611f79565b811461243a57600080fd5b50565b61244681611fca565b811461245157600080fd5b5056fea2646970667358221220eedd29c8c97a011182089d321988b1f425d10c5138bc13aa5304f1d4dfeaa13564736f6c63430008040033","deployedBytecode":"0x60806040526004361061011f5760003560e01c8063937e09b1116100a0578063c19d93fb11610064578063c19d93fb146103bc578063c3e20c9f146103e7578063c59ee1dc14610412578063d5cef1331461043d578063ff3a9c7e146104685761011f565b8063937e09b1146102d1578063992a7dfb146102fc578063a46752ae1461033d578063b40141bf14610366578063b82c86d6146103915761011f565b80634c4cea5a116100e75780634c4cea5a1461020d5780634e695a37146102385780636f9fb98a1461026157806373e888fd1461028c578063752e19f9146102a85761011f565b806302d05d3f1461012457806303c29d581461014f5780631f6d49421461017a57806324274ee9146101b757806329dcb0cf146101e2575b600080fd5b34801561013057600080fd5b5061013961049c565b6040516101469190611a77565b60405180910390f35b34801561015b57600080fd5b506101646104c0565b6040516101719190611bd2565b60405180910390f35b34801561018657600080fd5b506101a1600480360381019061019c9190611761565b61054e565b6040516101ae9190611d6e565b60405180910390f35b3480156101c357600080fd5b506101cc610566565b6040516101d99190611d6e565b60405180910390f35b3480156101ee57600080fd5b506101f761056c565b6040516102049190611d6e565b60405180910390f35b34801561021957600080fd5b50610222610572565b60405161022f9190611d6e565b60405180910390f35b34801561024457600080fd5b5061025f600480360381019061025a91906117f1565b610578565b005b34801561026d57600080fd5b5061027661075d565b6040516102839190611d6e565b60405180910390f35b6102a660048036038101906102a19190611761565b610765565b005b3480156102b457600080fd5b506102cf60048036038101906102ca91906117f1565b6109ca565b005b3480156102dd57600080fd5b506102e6610d25565b6040516102f39190611d6e565b60405180910390f35b34801561030857600080fd5b50610323600480360381019061031e91906117f1565b610d2b565b604051610334959493929190611bf4565b60405180910390f35b34801561034957600080fd5b50610364600480360381019061035f919061178a565b610e16565b005b34801561037257600080fd5b5061037b6110b3565b6040516103889190611d6e565b60405180910390f35b34801561039d57600080fd5b506103a66110b9565b6040516103b39190611d6e565b60405180910390f35b3480156103c857600080fd5b506103d16110bf565b6040516103de9190611bb7565b60405180910390f35b3480156103f357600080fd5b506103fc6110d2565b6040516104099190611bd2565b60405180910390f35b34801561041e57600080fd5b50610427611160565b6040516104349190611d6e565b60405180910390f35b34801561044957600080fd5b50610452611166565b60405161045f9190611b9c565b60405180910390f35b34801561047457600080fd5b5061047d6113ca565b6040516104939a99989796959493929190611a92565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600880546104cd90612070565b80601f01602080910402602001604051908101604052809291908181526020018280546104f990612070565b80156105465780601f1061051b57610100808354040283529160200191610546565b820191906000526020600020905b81548152906001019060200180831161052957829003601f168201915b505050505081565b600a6020528060005260406000206000915090505481565b60065481565b60025481565b60045481565b6000600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054116105fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105f190611d0e565b60405180910390fd5b6000600b60008381526020019081526020016000209050600015158160030160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146106a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069d90611cae565b60405180910390fd5b60018160030160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060018160020160008282546107159190611ee0565b925050819055507fa2925e4595bf873fa82c22a1a89809777347023bf2b502d32710157a5eb8199c338260020154604051610751929190611b3c565b60405180910390a15050565b600047905090565b60008060028111156107a0577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600960009054906101000a900460ff1660028111156107e8577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b14610828576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081f90611cee565b60405180910390fd5b600254421061086c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086390611cce565b60405180910390fd5b6001543410156108b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108a890611d2e565b60405180910390fd5b6000600a60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541415610912576006600081548092919061090c906120d3565b91905055505b34600a60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546109619190611ee0565b92505081905550346005600082825461097a9190611ee0565b925050819055507f5cdc4ab8d637538ead6cc1904d4160343656c8c82bd266635cfd31ac008fffe082346005546040516109b693929190611b65565b60405180910390a16109c6611550565b5050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a58576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4f90611c8e565b60405180910390fd5b6002806002811115610a93577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600960009054906101000a900460ff166002811115610adb577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b14610b1b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b1290611cee565b60405180910390fd5b6002544210610b5f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5690611cce565b60405180910390fd5b6000600b60008481526020019081526020016000209050600015158160040160009054906101000a900460ff16151514610bce576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc590611d4e565b60405180910390fd5b6002600654610bdd9190611f36565b81600201541015610c23576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c1a90611c6e565b60405180910390fd5b8060040160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc82600101549081150290604051600060405180830381858888f19350505050158015610c91573d6000803e3d6000fd5b5060018160040160006101000a81548160ff0219169083151502179055507f2af8d60b878c5e8de57c8ff96e03c6cfab6de26b47e989757345cc1dceaac99883826000018360010154846002015460018660040160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051610d1896959493929190611df1565b60405180910390a1505050565b60015481565b600b602052806000526040600020600091509050806000018054610d4e90612070565b80601f0160208091040260200160405190810160405280929190818152602001828054610d7a90612070565b8015610dc75780601f10610d9c57610100808354040283529160200191610dc7565b820191906000526020600020905b815481529060010190602001808311610daa57829003601f168201915b5050505050908060010154908060020154908060040160009054906101000a900460ff16908060040160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905085565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610ea4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e9b90611c8e565b60405180910390fd5b6002806002811115610edf577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600960009054906101000a900460ff166002811115610f27577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b14610f67576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f5e90611cee565b60405180910390fd5b6002544210610fab576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fa290611cce565b60405180910390fd5b6000600b6000600c5481526020019081526020016000209050600c6000815480929190610fd7906120d3565b919050555084816000019080519060200190610ff4929190611617565b508381600101819055506000816002018190555060008160040160006101000a81548160ff021916908315150217905550828160040160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f9883a4e4f8698e4cc93bafb8d0d2376cb8c51dd322cb9fd80d02c691fcdea503600c548686600080886040516110a496959493929190611d89565b60405180910390a15050505050565b600c5481565b60035481565b600960009054906101000a900460ff1681565b600780546110df90612070565b80601f016020809104026020016040519081016040528092919081815260200182805461110b90612070565b80156111585780601f1061112d57610100808354040283529160200191611158565b820191906000526020600020905b81548152906001019060200180831161113b57829003601f168201915b505050505081565b60055481565b600060018060028111156111a3577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600960009054906101000a900460ff1660028111156111eb577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b1461122b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161122290611cee565b60405180910390fd5b600254421061126f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161126690611cce565b60405180910390fd5b6000600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054116112f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112e890611c4e565b60405180910390fd5b60003390508073ffffffffffffffffffffffffffffffffffffffff166108fc600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549081150290604051600060405180830381858888f1935050505015801561137b573d6000803e3d6000fd5b506000600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060019250505090565b60008060008060008060608060008060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff169950600154985060025497506003549650600454955060055494506007805461142290612070565b80601f016020809104026020016040519081016040528092919081815260200182805461144e90612070565b801561149b5780601f106114705761010080835404028352916020019161149b565b820191906000526020600020905b81548152906001019060200180831161147e57829003601f168201915b50505050509350600880546114af90612070565b80601f01602080910402602001604051908101604052809291908181526020018280546114db90612070565b80156115285780601f106114fd57610100808354040283529160200191611528565b820191906000526020600020905b81548152906001019060200180831161150b57829003601f168201915b50505050509250600960009054906101000a900460ff16915047905090919293949596979899565b600354600554106115b1576002600960006101000a81548160ff021916908360028111156115a7577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b021790555061160e565b60025442111561160d576001600960006101000a81548160ff02191690836002811115611607577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b02179055505b5b42600481905550565b82805461162390612070565b90600052602060002090601f016020900481019282611645576000855561168c565b82601f1061165e57805160ff191683800117855561168c565b8280016001018555821561168c579182015b8281111561168b578251825591602001919060010190611670565b5b509050611699919061169d565b5090565b5b808211156116b657600081600090555060010161169e565b5090565b60006116cd6116c884611e7e565b611e59565b9050828152602081018484840111156116e557600080fd5b6116f084828561202e565b509392505050565b6000813590506117078161240f565b92915050565b60008135905061171c81612426565b92915050565b600082601f83011261173357600080fd5b81356117438482602086016116ba565b91505092915050565b60008135905061175b8161243d565b92915050565b60006020828403121561177357600080fd5b6000611781848285016116f8565b91505092915050565b60008060006060848603121561179f57600080fd5b600084013567ffffffffffffffff8111156117b957600080fd5b6117c586828701611722565b93505060206117d68682870161174c565b92505060406117e78682870161170d565b9150509250925092565b60006020828403121561180357600080fd5b60006118118482850161174c565b91505092915050565b61182381611fd4565b82525050565b61183281611f79565b82525050565b61184181611f67565b82525050565b61185081611f8b565b82525050565b61185f81611fe6565b82525050565b61186e81611ff8565b82525050565b600061187f82611ec4565b6118898185611ecf565b935061189981856020860161203d565b6118a281612207565b840191505092915050565b600081546118ba81612070565b6118c48186611ecf565b945060018216600081146118df57600181146118f157611924565b60ff1983168652602086019350611924565b6118fa85611eaf565b60005b8381101561191c578154818901526001820191506020810190506118fd565b808801955050505b50505092915050565b600061193a602583611ecf565b915061194582612218565b604082019050919050565b600061195d603a83611ecf565b915061196882612267565b604082019050919050565b6000611980603183611ecf565b915061198b826122b6565b604082019050919050565b60006119a3601783611ecf565b91506119ae82612305565b602082019050919050565b60006119c6601483611ecf565b91506119d18261232e565b602082019050919050565b60006119e9600d83611ecf565b91506119f482612357565b602082019050919050565b6000611a0c601b83611ecf565b9150611a1782612380565b602082019050919050565b6000611a2f602083611ecf565b9150611a3a826123a9565b602082019050919050565b6000611a52601983611ecf565b9150611a5d826123d2565b602082019050919050565b611a7181611fca565b82525050565b6000602082019050611a8c6000830184611829565b92915050565b600061014082019050611aa8600083018d611829565b611ab5602083018c611a68565b611ac2604083018b611a68565b611acf606083018a611a68565b611adc6080830189611a68565b611ae960a0830188611a68565b81810360c0830152611afb8187611874565b905081810360e0830152611b0f8186611874565b9050611b1f610100830185611856565b611b2d610120830184611a68565b9b9a5050505050505050505050565b6000604082019050611b516000830185611838565b611b5e6020830184611a68565b9392505050565b6000606082019050611b7a6000830186611838565b611b876020830185611a68565b611b946040830184611a68565b949350505050565b6000602082019050611bb16000830184611847565b92915050565b6000602082019050611bcc6000830184611856565b92915050565b60006020820190508181036000830152611bec8184611874565b905092915050565b600060a0820190508181036000830152611c0e8188611874565b9050611c1d6020830187611a68565b611c2a6040830186611a68565b611c376060830185611847565b611c446080830184611829565b9695505050505050565b60006020820190508181036000830152611c678161192d565b9050919050565b60006020820190508181036000830152611c8781611950565b9050919050565b60006020820190508181036000830152611ca781611973565b9050919050565b60006020820190508181036000830152611cc781611996565b9050919050565b60006020820190508181036000830152611ce7816119b9565b9050919050565b60006020820190508181036000830152611d07816119dc565b9050919050565b60006020820190508181036000830152611d27816119ff565b9050919050565b60006020820190508181036000830152611d4781611a22565b9050919050565b60006020820190508181036000830152611d6781611a45565b9050919050565b6000602082019050611d836000830184611a68565b92915050565b600060c082019050611d9e6000830189611a68565b8181036020830152611db08188611874565b9050611dbf6040830187611a68565b611dcc6060830186611865565b611dd96080830185611847565b611de660a083018461181a565b979650505050505050565b600060c082019050611e066000830189611a68565b8181036020830152611e1881886118ad565b9050611e276040830187611a68565b611e346060830186611a68565b611e416080830185611847565b611e4e60a083018461181a565b979650505050505050565b6000611e63611e74565b9050611e6f82826120a2565b919050565b6000604051905090565b600067ffffffffffffffff821115611e9957611e986121d8565b5b611ea282612207565b9050602081019050919050565b60008190508160005260206000209050919050565b600081519050919050565b600082825260208201905092915050565b6000611eeb82611fca565b9150611ef683611fca565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611f2b57611f2a61211c565b5b828201905092915050565b6000611f4182611fca565b9150611f4c83611fca565b925082611f5c57611f5b61214b565b5b828204905092915050565b6000611f7282611faa565b9050919050565b6000611f8482611faa565b9050919050565b60008115159050919050565b6000819050611fa5826123fb565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000611fdf8261200a565b9050919050565b6000611ff182611f97565b9050919050565b600061200382611fca565b9050919050565b60006120158261201c565b9050919050565b600061202782611faa565b9050919050565b82818337600083830152505050565b60005b8381101561205b578082015181840152602081019050612040565b8381111561206a576000848401525b50505050565b6000600282049050600182168061208857607f821691505b6020821081141561209c5761209b6121a9565b5b50919050565b6120ab82612207565b810181811067ffffffffffffffff821117156120ca576120c96121d8565b5b80604052505050565b60006120de82611fca565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156121115761211061211c565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f596f7520646f206e6f742068617665206120636f6e747269627574656420616d60008201527f6f756e7421000000000000000000000000000000000000000000000000000000602082015250565b7f4174206c6561737420353025206f6620636f6e7472696275746f7273206e656560008201527f6420746f20766f746520666f7220746869732072657175657374000000000000602082015250565b7f596f7520646f206e6f7420686176652061636365737320746f20706572666f7260008201527f6d2074686973206f7065726174696f6e21000000000000000000000000000000602082015250565b7f596f75206861766520616c726561647920766f74656421000000000000000000600082015250565b7f446561646c696e65206861732070617373656421000000000000000000000000600082015250565b7f496e76616c696420737461746500000000000000000000000000000000000000600082015250565b7f4f6e6c7920636f6e7472696275746f72732063616e20766f7465210000000000600082015250565b7f436f6e747269627574696f6e20616d6f756e7420697320746f6f206c6f772021600082015250565b7f5265717565737420616c726561647920636f6d706c6574656400000000000000600082015250565b6003811061240c5761240b61217a565b5b50565b61241881611f67565b811461242357600080fd5b50565b61242f81611f79565b811461243a57600080fd5b50565b61244681611fca565b811461245157600080fd5b5056fea2646970667358221220eedd29c8c97a011182089d321988b1f425d10c5138bc13aa5304f1d4dfeaa13564736f6c63430008040033","linkReferences":{},"deployedLinkReferences":{}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/dashboard.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixHQUFHLGtCQUF6Qjs7Ozs7Ozs7OztBQ1pQLHlHQUE4Qzs7Ozs7Ozs7Ozs7O0FDQTlDOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL0Z1bmRSaXNlckNhcmQuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9GdW5kUmlzZXJGb3JtLmpzIiwid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvTG9hZGVyLmpzIiwid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvTmF2YmFyLmpzIiwid2VicGFjazovL2NsaWVudC8uL2hlbHBlci9hdXRoV3JhcHBlci5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9oZWxwZXIvaGVscGVyLmpzIiwid2VicGFjazovL2NsaWVudC8uL2hlbHBlci90b2FzdE1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9kYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vcmVkdXgvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9yZWR1eC9pbnRlcmFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vcmVkdXgvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qc1wiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIndlYjNcIiIsIndlYnBhY2s6Ly9jbGllbnQvaWdub3JlZHxDOlxcVXNlcnNcXG5hdmVlXFxEZXNrdG9wXFxDcm93ZE1pbnQtQS1CbG9ja2NoYWluLUJhc2VkLUNyb3dkZnVuZGluZy1QbGF0Zm9ybVxcY2xpZW50XFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXHNoYXJlZFxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBjb250cmlidXRlLCBjcmVhdGVXaXRoZHJhd1JlcXVlc3QgfSBmcm9tICcuLi9yZWR1eC9pbnRlcmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBldGhlclRvV2VpIH0gZnJvbSAnLi4vaGVscGVyL2hlbHBlcic7XHJcbmltcG9ydCB7IHRvYXN0U3VjY2Vzcyx0b2FzdEVycm9yIH0gZnJvbSAnLi4vaGVscGVyL3RvYXN0TWVzc2FnZSdcclxuXHJcbmNvbnN0IGNvbG9yTWFrZXIgPSAoc3RhdGUpID0+e1xyXG4gICAgaWYoc3RhdGUgPT09ICdGdW5kcmFpc2luZycpe1xyXG4gICAgICAgIHJldHVybiAnYmctY3lhbi01MDAnXHJcbiAgICB9ZWxzZSBpZihzdGF0ZSA9PT0gJ0V4cGlyZWQnKXtcclxuICAgICAgICByZXR1cm4gJ2JnLXJlZC01MDAnXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gJ2JnLWVtZXJhbGQtNTAwJ1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBGdW5kUmlzZXJDYXJkID0gKHtwcm9wcyxwdXNoV2l0aGRyYXdSZXF1ZXN0c30pID0+IHtcclxuXHJcbiAgY29uc3QgW2J0bkxvYWRlciwgc2V0QnRuTG9hZGVyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFthbW91bnQsIHNldEFtb3VudF0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBjcm93ZEZ1bmRpbmdDb250cmFjdCA9IHVzZVNlbGVjdG9yKHN0YXRlPT5zdGF0ZS5mdW5kaW5nUmVkdWNlci5jb250cmFjdClcclxuICBjb25zdCBhY2NvdW50ID0gdXNlU2VsZWN0b3Ioc3RhdGU9PnN0YXRlLndlYjNSZWR1Y2VyLmFjY291bnQpXHJcbiAgY29uc3Qgd2ViMyA9IHVzZVNlbGVjdG9yKHN0YXRlPT5zdGF0ZS53ZWIzUmVkdWNlci5jb25uZWN0aW9uKVxyXG5cclxuICBjb25zdCBjb250cmlidXRlQW1vdW50ID0gKHByb2plY3RJZCxtaW5Db250cmlidXRpb24pID0+e1xyXG5cclxuICAgIGlmKGFtb3VudCA8IG1pbkNvbnRyaWJ1dGlvbil7XHJcbiAgICAgIHRvYXN0RXJyb3IoYE1pbmltdW0gY29udHJpYnV0aW9uIGFtb3VudCBpcyAke21pbkNvbnRyaWJ1dGlvbn1gKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEJ0bkxvYWRlcihwcm9qZWN0SWQpXHJcbiAgICBjb25zdCBjb250cmlidXRpb25BbW91bnQgPSBldGhlclRvV2VpKGFtb3VudCk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgY29udHJhY3RBZGRyZXNzOnByb2plY3RJZCxcclxuICAgICAgYW1vdW50OmNvbnRyaWJ1dGlvbkFtb3VudCxcclxuICAgICAgYWNjb3VudDphY2NvdW50XHJcbiAgICB9XHJcbiAgICBjb25zdCBvblN1Y2Nlc3MgPSAoKSA9PntcclxuICAgICAgc2V0QnRuTG9hZGVyKGZhbHNlKVxyXG4gICAgICBzZXRBbW91bnQoMClcclxuICAgICAgdG9hc3RTdWNjZXNzKGBTdWNjZXNzZnVsbHkgY29udHJpYnV0ZWQgJHthbW91bnR9IEVUSGApXHJcbiAgICB9XHJcbiAgICBjb25zdCBvbkVycm9yID0gKG1lc3NhZ2UpID0+e1xyXG4gICAgICBzZXRCdG5Mb2FkZXIoZmFsc2UpXHJcbiAgICAgIHRvYXN0RXJyb3IobWVzc2FnZSlcclxuICAgIH1cclxuICAgIGNvbnRyaWJ1dGUoY3Jvd2RGdW5kaW5nQ29udHJhY3QsZGF0YSxkaXNwYXRjaCxvblN1Y2Nlc3Msb25FcnJvcilcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlcXVlc3RGb3JXaXRoZHJhdyA9IChwcm9qZWN0SWQpID0+e1xyXG4gICAgc2V0QnRuTG9hZGVyKHByb2plY3RJZClcclxuICAgIGNvbnN0IGNvbnRyaWJ1dGlvbkFtb3VudCA9IGV0aGVyVG9XZWkoYW1vdW50KTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkZXNjcmlwdGlvbjpgJHthbW91bnR9IEVUSCByZXF1ZXN0ZWQgZm9yIHdpdGhkcmF3YCxcclxuICAgICAgYW1vdW50OmNvbnRyaWJ1dGlvbkFtb3VudCxcclxuICAgICAgcmVjaXBpZW50OmFjY291bnQsXHJcbiAgICAgIGFjY291bnQ6YWNjb3VudFxyXG4gICAgfVxyXG4gICAgY29uc3Qgb25TdWNjZXNzID0gKGRhdGEpID0+e1xyXG4gICAgICBzZXRCdG5Mb2FkZXIoZmFsc2UpXHJcbiAgICAgIHNldEFtb3VudCgwKVxyXG4gICAgICBpZihwdXNoV2l0aGRyYXdSZXF1ZXN0cyl7XHJcbiAgICAgICAgcHVzaFdpdGhkcmF3UmVxdWVzdHMoZGF0YSlcclxuICAgICAgfVxyXG4gICAgICB0b2FzdFN1Y2Nlc3MoYFN1Y2Nlc3NmdWxseSByZXF1ZXN0ZWQgZm9yIHdpdGhkcmF3ICR7YW1vdW50fSBFVEhgKVxyXG4gICAgfVxyXG4gICAgY29uc3Qgb25FcnJvciA9IChtZXNzYWdlKSA9PntcclxuICAgICAgc2V0QnRuTG9hZGVyKGZhbHNlKVxyXG4gICAgICB0b2FzdEVycm9yKG1lc3NhZ2UpXHJcbiAgICB9XHJcbiAgICBjcmVhdGVXaXRoZHJhd1JlcXVlc3Qod2ViMyxwcm9qZWN0SWQsZGF0YSxvblN1Y2Nlc3Msb25FcnJvcilcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIG15LTRcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgcmliYm9uICR7Y29sb3JNYWtlcihwcm9wcy5zdGF0ZSl9YH0+e3Byb3BzLnN0YXRlfTwvZGl2PlxyXG4gICAgPExpbmsgaHJlZj17YC9wcm9qZWN0LWRldGFpbHMvJHtwcm9wcy5hZGRyZXNzfWB9ID5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtc2FucyB0ZXh0LXhsIHRleHQtZ3JheSBmb250LXNlbWlib2xkIGhvdmVyOnRleHQtc2t5LTUwMCBob3ZlcjpjdXJzb3ItcG9pbnRlclwiPntwcm9wcy50aXRsZX08L2gxPlxyXG4gICAgPC9MaW5rPlxyXG4gICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zYW5zIHRleHQtc20gdGV4dC1zdG9uZS04MDAgdHJhY2tpbmctdGlnaHRcIj57cHJvcHMuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXItY2FyZCBteS02IHctZnVsbCBsZzp3LTIvNVwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbWQgZm9udC1ib2xkIGZvbnQtc2FucyB0ZXh0LWdyYXlcIj5UYXJnZXRlZCBjb250cmlidXRpb248L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgZm9udC1zYW5zIHRleHQtZ3JheS02MDAgXCI+e3Byb3BzLmdvYWxBbW91bnR9IEVUSCA8L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tZCBmb250LWJvbGQgZm9udC1zYW5zIHRleHQtZ3JheVwiPkRlYWRsaW5lPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIGZvbnQtc2FucyB0ZXh0LWdyYXktNjAwIFwiPntwcm9wcy5kZWFkbGluZX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyLWNhcmQgbXktNiB3LWZ1bGwgbGc6dy0zLzVcIj5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm9wcy5zdGF0ZSAhPT0gXCJTdWNjZXNzZnVsXCIgP1xyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTcwMCBmb250LXNlbWlib2xkXCI+Q29udHJpYnV0aW9uIGFtb3VudCA6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIlR5cGUgaGVyZVwiIHZhbHVlPXthbW91bnR9IG9uQ2hhbmdlPXsoZSk9PnNldEFtb3VudChlLnRhcmdldC52YWx1ZSl9IGRpc2FibGVkPXtidG5Mb2FkZXIgPT09IHByb3BzLmFkZHJlc3N9IGNsYXNzTmFtZT1cImlucHV0IHJvdW5kZWQtbC1tZFwiIC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCk9PmNvbnRyaWJ1dGVBbW91bnQocHJvcHMuYWRkcmVzcyxwcm9wcy5taW5Db250cmlidXRpb24pfVxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtidG5Mb2FkZXIgPT09IHByb3BzLmFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2J0bkxvYWRlciA9PT0gcHJvcHMuYWRkcmVzcz9cIkxvYWRpbmcuLi5cIjpcIkNvbnRyaWJ1dGVcIn1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXJlZC02MDBcIj4gPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+Tk9URSA6IDwvc3Bhbj4gTWluaW11bSBjb250cmlidXRpb24gaXMge3Byb3BzLm1pbkNvbnRyaWJ1dGlvbn0gRVRIIDwvcD5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgOlxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tZCBmb250LWJvbGQgZm9udC1zYW5zIHRleHQtZ3JheVwiPkNvbnRyYWN0IGJhbGFuY2U8L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIGZvbnQtc2FucyB0ZXh0LWdyYXktNjAwIFwiPntwcm9wcy5jb250cmFjdEJhbGFuY2V9IEVUSCA8L3A+XHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcHJvcHMuY3JlYXRvciA9PT0gYWNjb3VudD9cclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS03MDAgZm9udC1zZW1pYm9sZFwiPldpdGhkcmF3IHJlcXVlc3QgOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiVHlwZSBoZXJlXCIgdmFsdWU9e2Ftb3VudH0gb25DaGFuZ2U9eyhlKT0+c2V0QW1vdW50KGUudGFyZ2V0LnZhbHVlKX0gZGlzYWJsZWQ9e2J0bkxvYWRlciA9PT0gcHJvcHMuYWRkcmVzc30gY2xhc3NOYW1lPVwiaW5wdXQgcm91bmRlZC1sLW1kXCIgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgb25DbGljaz17KCk9PnJlcXVlc3RGb3JXaXRoZHJhdyhwcm9wcy5hZGRyZXNzKX0+XHJcbiAgICAgICAgICAgICAgICAgIHtidG5Mb2FkZXIgPT09IHByb3BzLmFkZHJlc3M/XCJMb2FkaW5nLi4uXCI6XCJXaXRoZHJhd1wifVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICA6XCJcIlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIHtcclxuICAgICAgcHJvcHMuc3RhdGUgIT09IFwiU3VjY2Vzc2Z1bFwiID9cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmF5LTIwMCByb3VuZGVkLWZ1bGxcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3NcIiBzdHlsZT17eyB3aWR0aDogYCR7cHJvcHMucHJvZ3Jlc3N9JWAgfX0+IHtwcm9wcy5wcm9ncmVzc30lIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgOlwiXCJcclxuICAgIH1cclxuXHJcbiAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGdW5kUmlzZXJDYXJkIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXHJcbmltcG9ydCB7IHN0YXJ0RnVuZFJhaXNpbmcgfSBmcm9tICcuLi9yZWR1eC9pbnRlcmFjdGlvbnMnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBldGhlclRvV2VpIH0gZnJvbSAnLi4vaGVscGVyL2hlbHBlcidcclxuaW1wb3J0IHsgdG9hc3RTdWNjZXNzLHRvYXN0RXJyb3IgfSBmcm9tICcuLi9oZWxwZXIvdG9hc3RNZXNzYWdlJ1xyXG5cclxuY29uc3QgRnVuZFJpc2VyRm9ybSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBjcm93ZEZ1bmRpbmdDb250cmFjdCA9IHVzZVNlbGVjdG9yKHN0YXRlPT5zdGF0ZS5mdW5kaW5nUmVkdWNlci5jb250cmFjdClcclxuICAgIGNvbnN0IGFjY291bnQgPSB1c2VTZWxlY3RvcihzdGF0ZT0+c3RhdGUud2ViM1JlZHVjZXIuYWNjb3VudClcclxuICAgIGNvbnN0IHdlYjMgPSB1c2VTZWxlY3RvcihzdGF0ZT0+c3RhdGUud2ViM1JlZHVjZXIuY29ubmVjdGlvbilcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHJcbiAgICBjb25zdCBbdGl0bGUsc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtkZXNjcmlwdGlvbixzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW3RhcmdldGVkQ29udHJpYnV0aW9uQW1vdW50LHNldFRhcmdldGVkQ29udHJpYnV0aW9uQW1vdW50XSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbbWluaW11bUNvbnRyaWJ1dGlvbkFtb3VudCxzZXRNaW5pbXVtQ29udHJpYnV0aW9uQW1vdW50XSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbZGVhZGxpbmUsc2V0RGVhZGxpbmVdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtidG5Mb2FkaW5nLHNldEJ0bkxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG5cclxuICAgIGNvbnN0IHJpc2VGdW5kID0gKGUpID0+e1xyXG4gICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgc2V0QnRuTG9hZGluZyh0cnVlKVxyXG4gICAgICAgY29uc3QgdW5peERhdGUgPSBtb21lbnQoZGVhZGxpbmUpLnZhbHVlT2YoKVxyXG5cclxuICAgICAgIGNvbnN0IG9uU3VjY2VzcyA9ICgpID0+e1xyXG4gICAgICAgIHNldEJ0bkxvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgc2V0VGl0bGUoXCJcIilcclxuICAgICAgICBzZXREZXNjcmlwdGlvbihcIlwiKVxyXG4gICAgICAgIHNldFRhcmdldGVkQ29udHJpYnV0aW9uQW1vdW50KFwiXCIpXHJcbiAgICAgICAgc2V0TWluaW11bUNvbnRyaWJ1dGlvbkFtb3VudChcIlwiKVxyXG4gICAgICAgIHNldERlYWRsaW5lKFwiXCIpXHJcbiAgICAgICAgdG9hc3RTdWNjZXNzKFwiRnVuZCByYWlzaW5nIHN0YXJ0ZWQg8J+OiVwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgIGNvbnN0IG9uRXJyb3IgPSAoZXJyb3IpID0+e1xyXG4gICAgICAgICBzZXRCdG5Mb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgICB0b2FzdEVycm9yKGVycm9yKTtcclxuICAgICAgIH1cclxuXHJcbiAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIG1pbmltdW1Db250cmlidXRpb246ZXRoZXJUb1dlaShtaW5pbXVtQ29udHJpYnV0aW9uQW1vdW50KSxcclxuICAgICAgICBkZWFkbGluZTpOdW1iZXIodW5peERhdGUpLFxyXG4gICAgICAgIHRhcmdldENvbnRyaWJ1dGlvbjpldGhlclRvV2VpKHRhcmdldGVkQ29udHJpYnV0aW9uQW1vdW50KSxcclxuICAgICAgICBwcm9qZWN0VGl0bGU6dGl0bGUsXHJcbiAgICAgICAgcHJvamVjdERlc2M6ZGVzY3JpcHRpb24sXHJcbiAgICAgICAgYWNjb3VudDphY2NvdW50XHJcbiAgICAgICB9XHJcblxyXG4gICAgICAgc3RhcnRGdW5kUmFpc2luZyh3ZWIzLGNyb3dkRnVuZGluZ0NvbnRyYWN0LGRhdGEsb25TdWNjZXNzLG9uRXJyb3IsZGlzcGF0Y2gpXHJcbiAgICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LXNhbnMgZm9udC1ib2xkIHRleHQteGxcIj5TdGFydCBZb3VyIEZ1bmRyYWlzaW5nIEZvciBGcmVlIDwvaDE+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKT0+cmlzZUZ1bmQoZSl9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBteS0xXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNzAwXCI+VGl0bGUgOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlR5cGUgaGVyZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1pbnB1dCBib3JkZXItbmV1dHJhbC00MDAgZm9jdXM6cmluZy1uZXV0cmFsLTIwMFwiIHZhbHVlPXt0aXRsZX0gb25DaGFuZ2U9eyhlKT0+c2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfSByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBteS0xXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNzAwXCI+RGVzY3JpcHRpb24gOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcGxhY2Vob2xkZXI9XCJUeXBlIGhlcmVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtaW5wdXQgYm9yZGVyLW5ldXRyYWwtNDAwIGZvY3VzOnJpbmctbmV1dHJhbC0yMDBcIiB2YWx1ZT17ZGVzY3JpcHRpb259IG9uQ2hhbmdlPXsoZSk9PnNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX0gcmVxdWlyZWQ+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG15LTFcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS03MDBcIj5UYXJnZXRlZCBjb250cmlidXRpb24gYW1vdW50IDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIlR5cGUgaGVyZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1pbnB1dCBib3JkZXItbmV1dHJhbC00MDAgZm9jdXM6cmluZy1uZXV0cmFsLTIwMFwiIHZhbHVlPXt0YXJnZXRlZENvbnRyaWJ1dGlvbkFtb3VudH0gb25DaGFuZ2U9eyhlKT0+c2V0VGFyZ2V0ZWRDb250cmlidXRpb25BbW91bnQoZS50YXJnZXQudmFsdWUpfSByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBteS0xXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNzAwXCI+TWluaW11bSBjb250cmlidXRpb24gYW1vdW50IDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIlR5cGUgaGVyZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1pbnB1dCBib3JkZXItbmV1dHJhbC00MDAgZm9jdXM6cmluZy1uZXV0cmFsLTIwMFwiIHZhbHVlPXttaW5pbXVtQ29udHJpYnV0aW9uQW1vdW50fSBvbkNoYW5nZT17KGUpPT5zZXRNaW5pbXVtQ29udHJpYnV0aW9uQW1vdW50KGUudGFyZ2V0LnZhbHVlKX0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZGF0ZS1waWNrZXIgbXktMVwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTcwMFwiPkRlYWRsaW5lIDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgcGxhY2Vob2xkZXI9XCJUeXBlIGhlcmVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtaW5wdXQgYm9yZGVyLW5ldXRyYWwtNDAwIGZvY3VzOnJpbmctbmV1dHJhbC0yMDBcIiB2YWx1ZT17ZGVhZGxpbmV9IG9uQ2hhbmdlPXsoZSk9PnNldERlYWRsaW5lKGUudGFyZ2V0LnZhbHVlKX0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicC0yIHctZnVsbCBiZy1bI0Y1NkQ5MV0gdGV4dC13aGl0ZSByb3VuZGVkLW1kIGhvdmVyOmJnLVsjZDE1Njc3XVwiIGRpc2FibGVkPXtidG5Mb2FkaW5nfSA+e2J0bkxvYWRpbmc/XCJMb2FkaW5nLi4uXCI6XCJSYWlzZSBmdW5kXCJ9PC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGdW5kUmlzZXJGb3JtIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgTG9hZGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgPHN2ZyByb2xlPVwic3RhdHVzXCIgY2xhc3NOYW1lPVwiaW5saW5lIG1yLTIgdy04IGgtOCB0ZXh0LWdyYXktMjAwIGFuaW1hdGUtc3BpbiBkYXJrOnRleHQtZ3JheS02MDAgZmlsbC1ibHVlLTYwMFwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTEwMCA1MC41OTA4QzEwMCA3OC4yMDUxIDc3LjYxNDIgMTAwLjU5MSA1MCAxMDAuNTkxQzIyLjM4NTggMTAwLjU5MSAwIDc4LjIwNTEgMCA1MC41OTA4QzAgMjIuOTc2NiAyMi4zODU4IDAuNTkwODIgNTAgMC41OTA4MkM3Ny42MTQyIDAuNTkwODIgMTAwIDIyLjk3NjYgMTAwIDUwLjU5MDhaTTkuMDgxNDQgNTAuNTkwOEM5LjA4MTQ0IDczLjE4OTUgMjcuNDAxMyA5MS41MDk0IDUwIDkxLjUwOTRDNzIuNTk4NyA5MS41MDk0IDkwLjkxODYgNzMuMTg5NSA5MC45MTg2IDUwLjU5MDhDOTAuOTE4NiAyNy45OTIxIDcyLjU5ODcgOS42NzIyNiA1MCA5LjY3MjI2QzI3LjQwMTMgOS42NzIyNiA5LjA4MTQ0IDI3Ljk5MjEgOS4wODE0NCA1MC41OTA4WlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNOTMuOTY3NiAzOS4wNDA5Qzk2LjM5MyAzOC40MDM4IDk3Ljg2MjQgMzUuOTExNiA5Ny4wMDc5IDMzLjU1MzlDOTUuMjkzMiAyOC44MjI3IDkyLjg3MSAyNC4zNjkyIDg5LjgxNjcgMjAuMzQ4Qzg1Ljg0NTIgMTUuMTE5MiA4MC44ODI2IDEwLjcyMzggNzUuMjEyNCA3LjQxMjg5QzY5LjU0MjIgNC4xMDE5NCA2My4yNzU0IDEuOTQwMjUgNTYuNzY5OCAxLjA1MTI0QzUxLjc2NjYgMC4zNjc1NDEgNDYuNjk3NiAwLjQ0Njg0MyA0MS43MzQ1IDEuMjc4NzNDMzkuMjYxMyAxLjY5MzI4IDM3LjgxMyA0LjE5Nzc4IDM4LjQ1MDEgNi42MjMyNkMzOS4wODczIDkuMDQ4NzQgNDEuNTY5NCAxMC40NzE3IDQ0LjA1MDUgMTAuMTA3MUM0Ny44NTExIDkuNTQ4NTUgNTEuNzE5MSA5LjUyNjg5IDU1LjU0MDIgMTAuMDQ5MUM2MC44NjQyIDEwLjc3NjYgNjUuOTkyOCAxMi41NDU3IDcwLjYzMzEgMTUuMjU1MkM3NS4yNzM1IDE3Ljk2NDggNzkuMzM0NyAyMS41NjE5IDgyLjU4NDkgMjUuODQxQzg0LjkxNzUgMjguOTEyMSA4Ni43OTk3IDMyLjI5MTMgODguMTgxMSAzNS44NzU4Qzg5LjA4MyAzOC4yMTU4IDkxLjU0MjEgMzkuNjc4MSA5My45Njc2IDM5LjA0MDlaXCIgZmlsbD1cImN1cnJlbnRGaWxsXCIvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkZXIiLCJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBbb3Blbk1lbnUsc2V0T3Blbk1lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgYWNjb3VudCA9IHVzZVNlbGVjdG9yKHN0YXRlPT5zdGF0ZS53ZWIzUmVkdWNlci5hY2NvdW50KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICB7LyogPCEtLSBUaGlzIGV4YW1wbGUgcmVxdWlyZXMgVGFpbHdpbmQgQ1NTIHYyLjArIC0tPiAqL31cclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImJnLVsjRjdGNUYyXVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtMiBzbTpweC02IGxnOnB4LThcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gaC0xNlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXktMCBsZWZ0LTAgZmxleCBpdGVtcy1jZW50ZXIgc206aGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICB7LyogPCEtLSBNb2JpbGUgbWVudSBidXR0b24tLT4gKi99XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC0yIHJvdW5kZWQtbWQgdGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LWdyZWF5IGhvdmVyOmJnLVsjRjdDOTg0XSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5zZXQgZm9jdXM6cmluZy13aGl0ZVwiIGFyaWEtY29udHJvbHM9XCJtb2JpbGUtbWVudVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIG9uQ2xpY2s9eygpPT5zZXRPcGVuTWVudSghb3Blbk1lbnUpfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5PcGVuIG1haW4gbWVudTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLWJhcnNcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNtOml0ZW1zLXN0cmV0Y2ggc206anVzdGlmeS1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIGZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSdmb250LW1vbm8gdGV4dC14bCB0ZXh0LWdyZWF5IGZvbnQtYm9sZCBoaWRkZW4gbGc6YmxvY2snPkNyb3dkTWludDwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmJsb2NrIHNtOm1sLTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Rhc2hib2FyZFwiICA+PHNwYW4gY2xhc3NOYW1lPXtgJHtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL2Rhc2hib2FyZFwiP1wiYmctWyNGN0M5ODRdXCI6XCJcIn0gdGV4dC1ncmVheSBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LXNtIGZvbnQtbWVkaXVtIGhvdmVyOmN1cnNvci1wb2ludGVyIGhvdmVyOmJnLVsjRjdDOTg0XSBob3Zlcjp0ZXh0LWdyZWF5YH0+RGFzaGJvYXJkPC9zcGFuPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL215LWNvbnRyaWJ1dGlvbnNcIj48c3BhbiBjbGFzc05hbWU9e2Ake3JvdXRlci5wYXRobmFtZSA9PT0gXCIvbXktY29udHJpYnV0aW9uc1wiP1wiYmctWyNGN0M5ODRdXCI6XCJcIn0gdGV4dC1ncmVheSBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LXNtIGZvbnQtbWVkaXVtIGhvdmVyOmN1cnNvci1wb2ludGVyIGhvdmVyOmJnLVsjRjdDOTg0XSBob3Zlcjp0ZXh0LWdyZWF5YH0+TXkgQ29udHJpYnV0aW9uPC9zcGFuPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXktMCByaWdodC0wIGZsZXggaXRlbXMtY2VudGVyIHByLTIgc206c3RhdGljIHNtOmluc2V0LWF1dG8gc206bWwtNiBzbTpwci0wXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJwLTEgdy00MCB0cnVuY2F0ZSByb3VuZGVkLWZ1bGwgdGV4dC1ncmVheSBob3Zlcjp0ZXh0LWdyZWF5IFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiA+e2FjY291bnR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIDwhLS0gUHJvZmlsZSAgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0zIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJnLVsjRjdDOTg0XSBmbGV4IHRleHQtc20gcm91bmRlZC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0wIGZvY3VzOnJpbmctb2Zmc2V0LTAgZm9jdXM6cmluZy13aGl0ZVwiIGlkPVwidXNlci1tZW51LWJ1dHRvblwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPk9wZW4gVXNlciBNZW51PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC04IHctOCByb3VuZGVkLWZ1bGxcIiA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiA8IS0tIE1vYmlsZSBtZW51LCBzaG93L2hpZGUgYmFzZWQgb24gbWVudSBzdGF0ZS4gLS0+ICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc206aGlkZGVuICR7IW9wZW5NZW51P1wiaGlkZGVuXCI6XCJcIn1gfSBpZD1cIm1vYmlsZS1tZW51XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMiBwdC0yIHBiLTMgc3BhY2UteS0xXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYmctWyNGN0M5ODRdIHRleHQtZ3JlYXkgYmxvY2sgcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtXCIgYXJpYS1jdXJyZW50PVwicGFnZVwiPkRhc2hib2FyZDwvYT5cclxuXHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwidGV4dC1ncmVheSBob3ZlcjpiZy1bI0Y3Qzk4NF0gaG92ZXI6dGV4dC1ncmVheSBibG9jayBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LWJhc2UgZm9udC1tZWRpdW1cIj5UZWFtPC9hPlxyXG5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyZWF5IGhvdmVyOmJnLVsjRjdDOTg0XSBob3Zlcjp0ZXh0LWdyZWF5IGJsb2NrIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtYmFzZSBmb250LW1lZGl1bVwiPlByb2plY3RzPC9hPlxyXG5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyZWF5IGhvdmVyOmJnLVsjRjdDOTg0XSBob3Zlcjp0ZXh0LWdyZWF5IGJsb2NrIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtYmFzZSBmb250LW1lZGl1bVwiPkNhbGVuZGFyPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhciIsImltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TG9jYWxTdG9yYWdlRGF0YSA9IChuYW1lKSA9PntcclxuICB2YXIgdmFsdWU7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKG5hbWUpXHJcbiAgfVxyXG4gIHJldHVybiB2YWx1ZVxyXG59XHJcblxyXG5jb25zdCBhdXRoV3JhcHBlciA9IChXcmFwcGVkQ29tcG9uZW50KSA9PiB7XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2Rpc3BsYXktbmFtZVxyXG4gIHJldHVybiAocHJvcHMpID0+IHtcclxuXHJcbiAgICAvLyAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIC8vICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgICBcclxuICAgIC8vICAgICBjb25zdCB3YWxsZXRBZGRyZXNzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJBRERSRVNTXCIpO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHdhbGxldEFkZHJlc3MpXHJcblxyXG4gICAgLy8gICBpZiAod2FsbGV0QWRkcmVzcykge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgICAgIDxXcmFwcGVkQ29tcG9uZW50IHsuLi5wcm9wc30gLz5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIC8vICAgfSBlbHNlIHtcclxuICAgIC8vICAgICByb3V0ZXIucmVwbGFjZShcIi9cIik7XHJcbiAgICAvLyAgICAgcmV0dXJuICBudWxsO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gcmV0dXJuIDxkaXY+V2luZG93IG5vdCBmb3VuZDwvZGl2PlxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhdXRoV3JhcHBlcjtcclxuIiwiXHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5pbXBvcnQgd2ViMyBmcm9tIFwid2ViM1wiO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHdlaVRvRXRoZXIgPSAobnVtKSA9PntcclxuICAgIHJldHVybiB3ZWIzLnV0aWxzLmZyb21XZWkobnVtLCAnZXRoZXInKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZXRoZXJUb1dlaSA9IChudW0pID0+IHtcclxuICBjb25zdCB3ZWlCaWdOdW1iZXIgPSB3ZWIzLnV0aWxzLnRvV2VpKG51bSwgJ2V0aGVyJyk7XHJcbiAgY29uc3Qgd2VpID0gd2VpQmlnTnVtYmVyLnRvU3RyaW5nKCk7XHJcbiAgcmV0dXJuIHdlaVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdW5peFRvRGF0ZSA9ICh1bml4RGF0ZSkgPT57XHJcbiAgcmV0dXJuIG1vbWVudCh1bml4RGF0ZSkuZm9ybWF0KFwiREQvTU0vWVlZWVwiKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHN0YXRlID0gW1wiRnVuZHJhaXNpbmdcIixcIkV4cGlyZWRcIixcIlN1Y2Nlc3NmdWxcIl07XHJcblxyXG5leHBvcnQgY29uc3QgcHJvamVjdERhdGFGb3JtYXR0ZXIgPSAoZGF0YSxjb250cmFjdEFkZHJlc3MpID0+e1xyXG4gIGNvbnN0IGZvcm1hdHRlZERhdGEgPSB7XHJcbiAgICBhZGRyZXNzOmNvbnRyYWN0QWRkcmVzcyxcclxuICAgIGNyZWF0b3I6ZGF0YT8ucHJvamVjdFN0YXJ0ZXIsXHJcbiAgICBjb250cmFjdEJhbGFuY2U6IGRhdGEuYmFsYW5jZT93ZWlUb0V0aGVyKGRhdGEuYmFsYW5jZSk6MCxcclxuICAgIHRpdGxlOmRhdGEudGl0bGUsXHJcbiAgICBkZXNjcmlwdGlvbjpkYXRhLmRlc2MsXHJcbiAgICBtaW5Db250cmlidXRpb246d2VpVG9FdGhlcihkYXRhLm1pbkNvbnRyaWJ1dGlvbiksXHJcbiAgICBnb2FsQW1vdW50OndlaVRvRXRoZXIoZGF0YS5nb2FsQW1vdW50KSxcclxuICAgIGN1cnJlbnRBbW91bnQ6d2VpVG9FdGhlcihkYXRhLmN1cnJlbnRBbW91bnQpLFxyXG4gICAgc3RhdGU6c3RhdGVbTnVtYmVyKGRhdGEuY3VycmVudFN0YXRlKV0sXHJcbiAgICBkZWFkbGluZTp1bml4VG9EYXRlKE51bWJlcihkYXRhLnByb2plY3REZWFkbGluZSkpLFxyXG4gICAgcHJvZ3Jlc3M6TWF0aC5yb3VuZCgoTnVtYmVyKHdlaVRvRXRoZXIoZGF0YS5jdXJyZW50QW1vdW50KSkvTnVtYmVyKHdlaVRvRXRoZXIoZGF0YS5nb2FsQW1vdW50KSkpKjEwMClcclxuICB9XHJcbiAgcmV0dXJuIGZvcm1hdHRlZERhdGE7XHJcbn1cclxuXHJcblxyXG5jb25zdCBmb3JtYXRQcm9qZWN0Q29udHJpYnV0aW9ucyA9IChjb250cmlidXRpb25zKSA9PntcclxuICBjb25zdCBmb3JtYXR0ZWREYXRhID0gY29udHJpYnV0aW9ucy5tYXAoZGF0YT0+e1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvamVjdEFkZHJlc3M6ZGF0YS5yZXR1cm5WYWx1ZXMucHJvamVjdEFkZHJlc3MsXHJcbiAgICAgIGNvbnRyaWJ1dG9yOmRhdGEucmV0dXJuVmFsdWVzLmNvbnRyaWJ1dG9yLFxyXG4gICAgICBhbW91bnQ6TnVtYmVyKHdlaVRvRXRoZXIoZGF0YS5yZXR1cm5WYWx1ZXMuY29udHJpYnV0ZWRBbW91bnQpKVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgcmV0dXJuIGZvcm1hdHRlZERhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBncm91cENvbnRyaWJ1dGlvbkJ5UHJvamVjdCA9IChjb250cmlidXRpb25zKSA9PiB7XHJcbiAgY29uc3QgY29udHJpYnV0aW9uTGlzdCA9IGZvcm1hdFByb2plY3RDb250cmlidXRpb25zKGNvbnRyaWJ1dGlvbnMpO1xyXG4gIC8vY29uc3QgY29udHJpYnV0aW9uR3JvdXBCeVByb2plY3QgPSBfLm1hcChfLmdyb3VwQnkoY29udHJpYnV0aW9uTGlzdCwgJ3Byb2plY3RBZGRyZXNzJyksIChvLHByb2plY3RBZGRyZXNzLGFkZHJlc3MpID0+IHsgcmV0dXJuIHtwcm9qZWN0QWRkcmVzczpwcm9qZWN0QWRkcmVzcywgY29udHJpYnV0b3I6IGFkZHJlc3MsYW1vdW50OiBfLnN1bUJ5KG8sJ2Ftb3VudCcpIH19KVxyXG4gIHJldHVybiBjb250cmlidXRpb25MaXN0O1xyXG59XHJcblxyXG5jb25zdCBmb3JtYXRDb250cmlidXRpb24gPSAoY29udHJpYnV0aW9ucykgPT57XHJcbiAgY29uc3QgZm9ybWF0dGVkRGF0YSA9IGNvbnRyaWJ1dGlvbnMubWFwKGRhdGE9PntcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNvbnRyaWJ1dG9yOmRhdGEucmV0dXJuVmFsdWVzLmNvbnRyaWJ1dG9yLFxyXG4gICAgICBhbW91bnQ6TnVtYmVyKHdlaVRvRXRoZXIoZGF0YS5yZXR1cm5WYWx1ZXMuYW1vdW50KSlcclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiBmb3JtYXR0ZWREYXRhO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ3JvdXBDb250cmlidXRvcnMgPSAoY29udHJpYnV0aW9ucykgPT4ge1xyXG4gIGNvbnN0IGNvbnRyaWJ1dG9yTGlzdCA9IGZvcm1hdENvbnRyaWJ1dGlvbihjb250cmlidXRpb25zKTtcclxuICBjb25zdCBjb250cmlidXRvckdyb3VwID0gXy5tYXAoXy5ncm91cEJ5KGNvbnRyaWJ1dG9yTGlzdCwgJ2NvbnRyaWJ1dG9yJyksIChvLGFkZHJlc3MpID0+IHsgcmV0dXJuIHsgY29udHJpYnV0b3I6IGFkZHJlc3MsYW1vdW50OiBfLnN1bUJ5KG8sJ2Ftb3VudCcpIH19KVxyXG4gIHJldHVybiBjb250cmlidXRvckdyb3VwO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgd2l0aGRyYXdSZXF1ZXN0RGF0YUZvcm1hdHRlciA9IChkYXRhKSA9PntcclxuICByZXR1cm57XHJcbiAgICAgcmVxdWVzdElkOmRhdGEucmVxdWVzdElkLFxyXG4gICAgIHRvdGFsVm90ZTpkYXRhLm5vT2ZWb3RlcyxcclxuICAgICBhbW91bnQ6d2VpVG9FdGhlcihkYXRhLmFtb3VudCksXHJcbiAgICAgc3RhdHVzOmRhdGEuaXNDb21wbGV0ZWQ/XCJDb21wbGV0ZWRcIjpcIlBlbmRpbmdcIixcclxuICAgICBkZXNjOmRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgcmVjaXB0YW50OmRhdGEucmVjaXB0ZW50XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjb25uZWN0V2l0aFdhbGxldCA9IGFzeW5jIChvblN1Y2Nlc3MpID0+IHtcclxuICAvL2Nvbm5lY3Qgd2ViMyB3aXRoIGh0dHAgcHJvdmlkZXJcclxuICBpZiAod2luZG93LmV0aGVyZXVtKSB7XHJcbiAgIHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHttZXRob2Q6XCJldGhfcmVxdWVzdEFjY291bnRzXCJ9KVxyXG4gICAudGhlbihyZXM9PntcclxuICAgIG9uU3VjY2VzcygpXHJcbiAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSlcclxuICAgfSlcclxuICB9IGVsc2Uge1xyXG4gICAgd2luZG93LmFsZXJ0KFxyXG4gICAgICBcIk5vbi1FdGhlcmV1bSBicm93c2VyIGRldGVjdGVkLiBZb3Ugc2hvdWxkIGNvbnNpZGVyIHRyeWluZyBNZXRhTWFzayFcIlxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2hhaW5PckFjY291bnRDaGFuZ2VkSGFuZGxlciA9ICgpID0+IHtcclxuICAvLyByZWxvYWQgdGhlIHBhZ2UgdG8gYXZvaWQgYW55IGVycm9ycyB3aXRoIGNoYWluIG9yIGFjY291bnQgY2hhbmdlLlxyXG4gIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxufVxyXG4iLCJpbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB0b2FzdFN1Y2Nlc3MgPSAobXNnKSA9PntcclxuICAgIHRvYXN0LnN1Y2Nlc3MobXNnLCB7XHJcbiAgICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXHJcbiAgICAgICAgYXV0b0Nsb3NlOiA1MDAwLFxyXG4gICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgICAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHRvYXN0RXJyb3IgPSAobXNnKSA9PntcclxuICAgIHRvYXN0LmVycm9yKG1zZywge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxyXG4gICAgICAgIGF1dG9DbG9zZTogNTAwMCxcclxuICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgfSk7XHJcbn0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIik7XG52YXIgX3JvdXRlcjEgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XG52YXIgX3VzZUludGVyc2VjdGlvbiA9IHJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBwcmVmZXRjaGVkID0ge1xufTtcbmZ1bmN0aW9uIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuO1xuICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAgIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAgIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICAgIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycik9PntcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9IG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCkge1xuICAgIGNvbnN0IHsgdGFyZ2V0ICB9ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICByZXR1cm4gdGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJyB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyO1xufVxuZnVuY3Rpb24gbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpIHtcbiAgICBjb25zdCB7IG5vZGVOYW1lICB9ID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgICAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gICAgaWYgKHNjcm9sbCA9PSBudWxsICYmIGFzLmluZGV4T2YoJyMnKSA+PSAwKSB7XG4gICAgICAgIHNjcm9sbCA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICAgICAgc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBzY3JvbGxcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIExpbmsocHJvcHMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJncykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgaHJlZjogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzID0gT2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtcbiAgICAgICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSA9PSBudWxsIHx8IHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgYXM6IHRydWUsXG4gICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgICAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICAgICAgICBsb2NhbGU6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wcyA9IE9iamVjdC5rZXlzKG9wdGlvbmFsUHJvcHNHdWFyZCk7XG4gICAgICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldO1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdyZXBsYWNlJyB8fCBrZXkgPT09ICdzY3JvbGwnIHx8IGtleSA9PT0gJ3NoYWxsb3cnIHx8IGtleSA9PT0gJ3Bhc3NIcmVmJyB8fCBrZXkgPT09ICdwcmVmZXRjaCcpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgICAgICAgICAgY29uc3QgXyA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgICAgICBjb25zdCBoYXNXYXJuZWQgPSBfcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO1xuICAgICAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICAgICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZTtcbiAgICBjb25zdCByb3V0ZXIgPSAoMCwgX3JvdXRlcjEpLnVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHsgaHJlZiAsIGFzICB9ID0gX3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e1xuICAgICAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9ICgwLCBfcm91dGVyKS5yZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmhyZWYsIHRydWUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgICAgICAgYXM6IHByb3BzLmFzID8gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuYXMpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcbiAgICAgICAgfTtcbiAgICB9LCBbXG4gICAgICAgIHJvdXRlcixcbiAgICAgICAgcHJvcHMuaHJlZixcbiAgICAgICAgcHJvcHMuYXNcbiAgICBdKTtcbiAgICBsZXQgeyBjaGlsZHJlbiAsIHJlcGxhY2UgLCBzaGFsbG93ICwgc2Nyb2xsICwgbG9jYWxlICB9ID0gcHJvcHM7XG4gICAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY2hpbGRyZW4gPSAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIG51bGwsIGNoaWxkcmVuKTtcbiAgICB9XG4gICAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgbGV0IGNoaWxkO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE11bHRpcGxlIGNoaWxkcmVuIHdlcmUgcGFzc2VkIHRvIDxMaW5rPiB3aXRoIFxcYGhyZWZcXGAgb2YgXFxgJHtwcm9wcy5ocmVmfVxcYCBidXQgb25seSBvbmUgY2hpbGQgaXMgc3VwcG9ydGVkIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2xpbmstbXVsdGlwbGUtY2hpbGRyZW5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCIgXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgIH1cbiAgICBjb25zdCBjaGlsZFJlZiA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmO1xuICAgIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSAoMCwgX3VzZUludGVyc2VjdGlvbikudXNlSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgcm9vdE1hcmdpbjogJzIwMHB4J1xuICAgIH0pO1xuICAgIGNvbnN0IHNldFJlZiA9IF9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtcbiAgICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbCk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBjaGlsZFJlZixcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmXG4gICAgXSk7XG4gICAgX3JlYWN0LmRlZmF1bHQudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZik7XG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV07XG4gICAgICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBhcyxcbiAgICAgICAgaHJlZixcbiAgICAgICAgaXNWaXNpYmxlLFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHAsXG4gICAgICAgIHJvdXRlclxuICAgIF0pO1xuICAgIGNvbnN0IGNoaWxkUHJvcHMgPSB7XG4gICAgICAgIHJlZjogc2V0UmVmLFxuICAgICAgICBvbkNsaWNrOiAoZSk9PntcbiAgICAgICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZSk9PntcbiAgICAgICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO1xuICAgICAgICB9XG4gICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgIHByaW9yaXR5OiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpIHtcbiAgICAgICAgY29uc3QgY3VyTG9jYWxlID0gdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAgICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAgICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICAgICAgY29uc3QgbG9jYWxlRG9tYWluID0gcm91dGVyICYmIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJiAoMCwgX3JvdXRlcikuZ2V0RG9tYWluTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcywgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzKTtcbiAgICAgICAgY2hpbGRQcm9wcy5ocmVmID0gbG9jYWxlRG9tYWluIHx8ICgwLCBfcm91dGVyKS5hZGRCYXNlUGF0aCgoMCwgX3JvdXRlcikuYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpO1xuICAgIH1cbiAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpKTtcbn1cbnZhciBfZGVmYXVsdCA9IExpbms7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSB2b2lkIDA7XG5mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGg7XG59XG5jb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSCA/IChwYXRoKT0+e1xuICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCk7XG4gICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLyc7XG4gICAgfVxufSA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSBleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IHZvaWQgMDtcbmNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oY2IpIHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjYih7XG4gICAgICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgMSk7XG59O1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaztcbmNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjayAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oaWQpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcbn07XG5leHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IGNhbmNlbElkbGVDYWxsYmFjaztcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5tYXJrQXNzZXRFcnJvciA9IG1hcmtBc3NldEVycm9yO1xuZXhwb3J0cy5pc0Fzc2V0RXJyb3IgPSBpc0Fzc2V0RXJyb3I7XG5leHBvcnRzLmdldENsaWVudEJ1aWxkTWFuaWZlc3QgPSBnZXRDbGllbnRCdWlsZE1hbmlmZXN0O1xuZXhwb3J0cy5jcmVhdGVSb3V0ZUxvYWRlciA9IGNyZWF0ZVJvdXRlTG9hZGVyO1xudmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDA7XG5mdW5jdGlvbiB3aXRoRnV0dXJlKGtleSwgbWFwLCBnZW5lcmF0b3IpIHtcbiAgICBsZXQgZW50cnkgPSBtYXAuZ2V0KGtleSk7XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KTtcbiAgICB9XG4gICAgbGV0IHJlc29sdmVyO1xuICAgIGNvbnN0IHByb20gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgcmVzb2x2ZXIgPSByZXNvbHZlO1xuICAgIH0pO1xuICAgIG1hcC5zZXQoa2V5LCBlbnRyeSA9IHtcbiAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZXIsXG4gICAgICAgIGZ1dHVyZTogcHJvbVxuICAgIH0pO1xuICAgIHJldHVybiBnZW5lcmF0b3IgPyBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSk9PihyZXNvbHZlcih2YWx1ZSksIHZhbHVlKVxuICAgICkgOiBwcm9tO1xufVxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaykge1xuICAgIHRyeSB7XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIHJldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSB8fCBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmNvbnN0IGNhblByZWZldGNoID0gaGFzUHJlZmV0Y2goKTtcbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsIGFzLCBsaW5rKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaik9PntcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgICAgICBpZiAoYXMpIGxpbmsuYXMgPSBhcztcbiAgICAgICAgbGluay5yZWwgPSBgcHJlZmV0Y2hgO1xuICAgICAgICBsaW5rLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgbGluay5vbmxvYWQgPSByZXM7XG4gICAgICAgIGxpbmsub25lcnJvciA9IHJlajtcbiAgICAgICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICAgICAgbGluay5ocmVmID0gaHJlZjtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB9KTtcbn1cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTtcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycikge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVycjtcbn1cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsIHNjcmlwdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAgICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgICAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmU7XG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gKCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuICAgICAgICA7XG4gICAgICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgICAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICAgICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAgICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgICAgIHNjcmlwdC5zcmMgPSBzcmM7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9KTtcbn1cbi8vIFdlIHdhaXQgZm9yIHBhZ2VzIHRvIGJlIGJ1aWx0IGluIGRldiBiZWZvcmUgd2Ugc3RhcnQgdGhlIHJvdXRlIHRyYW5zaXRpb25cbi8vIHRpbWVvdXQgdG8gcHJldmVudCBhbiB1bi1uZWNlc3NhcnkgaGFyZCBuYXZpZ2F0aW9uIGluIGRldmVsb3BtZW50LlxubGV0IGRldkJ1aWxkUHJvbWlzZTtcbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHAsIG1zLCBlcnIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBwLnRoZW4oKHIpPT57XG4gICAgICAgICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzb2x2ZShyKTtcbiAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgLy8gV2Ugd3JhcCB0aGVzZSBjaGVja3Mgc2VwYXJhdGVseSBmb3IgYmV0dGVyIGRlYWQtY29kZSBlbGltaW5hdGlvbiBpblxuICAgICAgICAvLyBwcm9kdWN0aW9uIGJ1bmRsZXMuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKGRldkJ1aWxkUHJvbWlzZSB8fCBQcm9taXNlLnJlc29sdmUoKSkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgbXMpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIG1zKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpIHtcbiAgICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcbiAgICB9XG4gICAgY29uc3Qgb25CdWlsZE1hbmlmZXN0ID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICAgICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7XG4gICAgICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpPT57XG4gICAgICAgICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XG4gICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTtcbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgc2NyaXB0czogW1xuICAgICAgICAgICAgICAgIGFzc2V0UHJlZml4ICsgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArIGVuY29kZVVSSSgoMCwgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSkuZGVmYXVsdChyb3V0ZSwgJy5qcycpKSwgXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgICAgICAgY3NzOiBbXVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCk9PntcbiAgICAgICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcCgoZW50cnkpPT5hc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5qcycpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuY3NzJylcbiAgICAgICAgICAgIClcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KSB7XG4gICAgY29uc3QgZW50cnlwb2ludHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgbG9hZGVkU2NyaXB0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBzdHlsZVNoZWV0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCByb3V0ZXMgPSBuZXcgTWFwKCk7XG4gICAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYykge1xuICAgICAgICBsZXQgcHJvbSA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYyk7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCBwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpIHtcbiAgICAgICAgbGV0IHByb20gPSBzdHlsZVNoZWV0cy5nZXQoaHJlZik7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICBzdHlsZVNoZWV0cy5zZXQoaHJlZiwgcHJvbSA9IGZldGNoKGhyZWYpLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KT0+KHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogaHJlZixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGV4dFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2hlbkVudHJ5cG9pbnQgKHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVudHJ5cG9pbnQgKHJvdXRlLCBleGVjdXRlKSB7XG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSkudGhlbigoZm4pPT5mbigpXG4gICAgICAgICAgICApLnRoZW4oKGV4cG9ydHMpPT4oe1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0IHx8IGV4cG9ydHMsXG4gICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHNcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLCAoZXJyKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLnRoZW4oKGlucHV0KT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dCk7XG4gICAgICAgICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZFJvdXRlIChyb3V0ZSwgcHJlZmV0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCByb3V0ZXMsICgpPT57XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVGaWxlc1Byb21pc2UgPSBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigoeyBzY3JpcHRzICwgY3NzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKSA/IFtdIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLCBcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbigoZW50cnlwb2ludCk9Pih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHJlc1sxXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGV2QnVpbGRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm91dGVGaWxlc1Byb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVGaWxlc1Byb21pc2UuZmluYWxseSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChyb3V0ZUZpbGVzUHJvbWlzZSwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKSkudGhlbigoeyBlbnRyeXBvaW50ICwgc3R5bGVzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogc3R5bGVzXG4gICAgICAgICAgICAgICAgICAgIH0sIGVudHJ5cG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlcztcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJlZmV0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJlZmV0Y2ggKHJvdXRlKSB7XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAgICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICAgICAgICBsZXQgY247XG4gICAgICAgICAgICBpZiAoY24gPSBuYXZpZ2F0b3IuY29ubmVjdGlvbikge1xuICAgICAgICAgICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICAgICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigob3V0cHV0KT0+UHJvbWlzZS5hbGwoY2FuUHJlZmV0Y2ggPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCk9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpXG4gICAgICAgICAgICAgICAgKSA6IFtdKVxuICAgICAgICAgICAgKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSwgdHJ1ZSkuY2F0Y2goKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAgICgpPT57XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0O1xuICAgIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwid2l0aFJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3dpdGhSb3V0ZXIuZGVmYXVsdDtcbiAgICB9XG59KTtcbmV4cG9ydHMudXNlUm91dGVyID0gdXNlUm91dGVyO1xuZXhwb3J0cy5jcmVhdGVSb3V0ZXIgPSBjcmVhdGVSb3V0ZXI7XG5leHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSA9IG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKSk7XG52YXIgX3JvdXRlckNvbnRleHQgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dFwiKTtcbnZhciBfd2l0aFJvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3Qgc2luZ2xldG9uUm91dGVyID0ge1xuICAgIHJvdXRlcjogbnVsbCxcbiAgICByZWFkeUNhbGxiYWNrczogW10sXG4gICAgcmVhZHkgKGNiKSB7XG4gICAgICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKCk7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgICAncGF0aG5hbWUnLFxuICAgICdyb3V0ZScsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnYXNQYXRoJyxcbiAgICAnY29tcG9uZW50cycsXG4gICAgJ2lzRmFsbGJhY2snLFxuICAgICdiYXNlUGF0aCcsXG4gICAgJ2xvY2FsZScsXG4gICAgJ2xvY2FsZXMnLFxuICAgICdkZWZhdWx0TG9jYWxlJyxcbiAgICAnaXNSZWFkeScsXG4gICAgJ2lzUHJldmlldycsXG4gICAgJ2lzTG9jYWxlRG9tYWluJyxcbiAgICAnZG9tYWluTG9jYWxlcycsIFxuXTtcbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAgICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIFxuXTtcbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICAgJ3B1c2gnLFxuICAgICdyZXBsYWNlJyxcbiAgICAncmVsb2FkJyxcbiAgICAnYmFjaycsXG4gICAgJ3ByZWZldGNoJyxcbiAgICAnYmVmb3JlUG9wU3RhdGUnLCBcbl07XG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICAgIGdldCAoKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIH1cbn0pO1xudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuICAgIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAgIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAgIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICBzaW5nbGV0b25Sb3V0ZXJbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKTtcbiAgICB9O1xufSk7XG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpPT57XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57XG4gICAgICAgIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKT0+e1xuICAgICAgICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtcbiAgICAgICAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXI7XG4gICAgICAgICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuZnVuY3Rpb24gZ2V0Um91dGVyKCkge1xuICAgIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICsgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxudmFyIF9kZWZhdWx0ID0gc2luZ2xldG9uUm91dGVyO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5mdW5jdGlvbiB1c2VSb3V0ZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7XG59XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoLi4uYXJncykge1xuICAgIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgX3JvdXRlci5kZWZhdWx0KC4uLmFyZ3MpO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYik9PmNiKClcbiAgICApO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdO1xuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxuZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcikge1xuICAgIGNvbnN0IF9yb3V0ZXIxID0gcm91dGVyO1xuICAgIGNvbnN0IGluc3RhbmNlID0ge1xuICAgIH07XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7XG4gICAgICAgIGlmICh0eXBlb2YgX3JvdXRlcjFbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXIxW3Byb3BlcnR5XSkgPyBbXSA6IHtcbiAgICAgICAgICAgIH0sIF9yb3V0ZXIxW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXIxW3Byb3BlcnR5XTtcbiAgICB9XG4gICAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICAgIGluc3RhbmNlLmV2ZW50cyA9IF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XG4gICAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICAgICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgICAgICByZXR1cm4gX3JvdXRlcjFbZmllbGRdKC4uLmFyZ3MpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy51c2VJbnRlcnNlY3Rpb24gPSB1c2VJbnRlcnNlY3Rpb247XG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHsgcm9vdE1hcmdpbiAsIGRpc2FibGVkICB9KSB7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtcbiAgICBjb25zdCB1bm9ic2VydmUgPSAoMCwgX3JlYWN0KS51c2VSZWYoKTtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSAoMCwgX3JlYWN0KS51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgc2V0UmVmID0gKDAsIF9yZWFjdCkudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KCk7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm47XG4gICAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoZWwsIChpc1Zpc2libGUpPT5pc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpXG4gICAgICAgICAgICAsIHtcbiAgICAgICAgICAgICAgICByb290TWFyZ2luXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgaXNEaXNhYmxlZCxcbiAgICAgICAgcm9vdE1hcmdpbixcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgICgwLCBfcmVhY3QpLnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFZpc2libGUodHJ1ZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKT0+KDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5jYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgIHJldHVybiBbXG4gICAgICAgIHNldFJlZixcbiAgICAgICAgdmlzaWJsZVxuICAgIF07XG59XG5mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgY29uc3QgeyBpZCAsIG9ic2VydmVyICwgZWxlbWVudHMgIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKTtcbiAgICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spO1xuICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpIHtcbiAgICAgICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7XG4gICAgICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICAgICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpIHtcbiAgICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJztcbiAgICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKTtcbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbiAgICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcyk9PntcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSk9PntcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDA7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgb3B0aW9ucyk7XG4gICAgb2JzZXJ2ZXJzLnNldChpZCwgaW5zdGFuY2UgPSB7XG4gICAgICAgIGlkLFxuICAgICAgICBvYnNlcnZlcixcbiAgICAgICAgZWxlbWVudHNcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB3aXRoUm91dGVyO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCkge1xuICAgIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKSB7XG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgcm91dGVyOiAoMCwgX3JvdXRlcikudXNlUm91dGVyKClcbiAgICAgICAgfSwgcHJvcHMpKSk7XG4gICAgfVxuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICBXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBuYW1lID0gQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bic7XG4gICAgICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgO1xuICAgIH1cbiAgICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpdGgtcm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXREb21haW5Mb2NhbGUgPSBnZXREb21haW5Mb2NhbGU7XG5leHBvcnRzLmFkZExvY2FsZSA9IGFkZExvY2FsZTtcbmV4cG9ydHMuZGVsTG9jYWxlID0gZGVsTG9jYWxlO1xuZXhwb3J0cy5oYXNCYXNlUGF0aCA9IGhhc0Jhc2VQYXRoO1xuZXhwb3J0cy5hZGRCYXNlUGF0aCA9IGFkZEJhc2VQYXRoO1xuZXhwb3J0cy5kZWxCYXNlUGF0aCA9IGRlbEJhc2VQYXRoO1xuZXhwb3J0cy5pc0xvY2FsVVJMID0gaXNMb2NhbFVSTDtcbmV4cG9ydHMuaW50ZXJwb2xhdGVBcyA9IGludGVycG9sYXRlQXM7XG5leHBvcnRzLnJlc29sdmVIcmVmID0gcmVzb2x2ZUhyZWY7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2ggPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTtcbnZhciBfcm91dGVMb2FkZXIgPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTtcbnZhciBfZGVub3JtYWxpemVQYWdlUGF0aCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoXCIpO1xudmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoID0gcmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO1xudmFyIF9taXR0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7XG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIF9pc0R5bmFtaWMgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xudmFyIF9wYXJzZVJlbGF0aXZlVXJsID0gcmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO1xudmFyIF9xdWVyeXN0cmluZyA9IHJlcXVpcmUoXCIuL3V0aWxzL3F1ZXJ5c3RyaW5nXCIpO1xudmFyIF9yZXNvbHZlUmV3cml0ZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO1xudmFyIF9yb3V0ZU1hdGNoZXIgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xudmFyIF9yb3V0ZVJlZ2V4ID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlO1xuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlO1xufVxuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgICAgIGNhbmNlbGxlZDogdHJ1ZVxuICAgIH0pO1xufVxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoLCBwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpID8gcGF0aCA9PT0gJy8nID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YCA6IHBhdGg7XG59XG5mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCwgbG9jYWxlLCBsb2NhbGVzLCBkb21haW5Mb2NhbGVzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgbG9jYWxlID0gbG9jYWxlIHx8ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpO1xuICAgICAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgICAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YmFzZVBhdGggfHwgJyd9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLCBsb2NhbGUsIGRlZmF1bHRMb2NhbGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgJiYgcGF0aExvd2VyICE9PSAnLycgKyBsb2NhbGVMb3dlciA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKSA6IHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGgsIGxvY2FsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgICAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiAocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpIHx8IHBhdGhMb3dlciA9PT0gJy8nICsgbG9jYWxlTG93ZXIpID8gKHBhdGhuYW1lLmxlbmd0aCA9PT0gbG9jYWxlLmxlbmd0aCArIDEgPyAnLycgOiAnJykgKyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgOiBwYXRoO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoKSB7XG4gICAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpO1xuICAgIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpO1xuICAgIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpO1xufVxuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gICAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpO1xufVxuZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7XG4gICAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWA7XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCkge1xuICAgIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpIHx8IHVybC5zdGFydHNXaXRoKCc/JykpIHJldHVybiB0cnVlO1xuICAgIHRyeSB7XG4gICAgICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgICAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKTtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KSB7XG4gICAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJyc7XG4gICAgY29uc3QgZHluYW1pY1JlZ2V4ID0gKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3VwcztcbiAgICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9IC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHwgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5O1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gcm91dGU7XG4gICAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7XG4gICAgaWYgKCFwYXJhbXMuZXZlcnkoKHBhcmFtKT0+e1xuICAgICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJyc7XG4gICAgICAgIGNvbnN0IHsgcmVwZWF0ICwgb3B0aW9uYWwgIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXTtcbiAgICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYDtcbiAgICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFtcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPSBpbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLCByZXBlYXQgPyB2YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAoc2VnbWVudCk9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICApLmpvaW4oJy8nKSA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpIHx8ICcvJyk7XG4gICAgfSkpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuICAgICAgICA7XG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwYXJhbXMsXG4gICAgICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGVcbiAgICB9O1xufVxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpIHtcbiAgICBjb25zdCBmaWx0ZXJlZFF1ZXJ5ID0ge1xuICAgIH07XG4gICAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmaWx0ZXJlZFF1ZXJ5O1xufVxuZnVuY3Rpb24gcmVzb2x2ZUhyZWYocm91dGVyLCBocmVmLCByZXNvbHZlQXMpIHtcbiAgICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICAgIGxldCBiYXNlO1xuICAgIGxldCB1cmxBc1N0cmluZyA9IHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKTtcbiAgICAvLyByZXBlYXRlZCBzbGFzaGVzIGFuZCBiYWNrc2xhc2hlcyBpbiB0aGUgVVJMIGFyZSBjb25zaWRlcmVkXG4gICAgLy8gaW52YWxpZCBhbmQgd2lsbCBuZXZlciBtYXRjaCBhIE5leHQuanMgcGFnZS9maWxlXG4gICAgY29uc3QgdXJsUHJvdG9NYXRjaCA9IHVybEFzU3RyaW5nLm1hdGNoKC9eW2EtekEtWl17MSx9OlxcL1xcLy8pO1xuICAgIGNvbnN0IHVybEFzU3RyaW5nTm9Qcm90byA9IHVybFByb3RvTWF0Y2ggPyB1cmxBc1N0cmluZy5zdWJzdHIodXJsUHJvdG9NYXRjaFswXS5sZW5ndGgpIDogdXJsQXNTdHJpbmc7XG4gICAgY29uc3QgdXJsUGFydHMgPSB1cmxBc1N0cmluZ05vUHJvdG8uc3BsaXQoJz8nKTtcbiAgICBpZiAoKHVybFBhcnRzWzBdIHx8ICcnKS5tYXRjaCgvKFxcL1xcL3xcXFxcKS8pKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gbmV4dC9yb3V0ZXI6ICR7dXJsQXNTdHJpbmd9LCByZXBlYXRlZCBmb3J3YXJkLXNsYXNoZXMgKC8vKSBvciBiYWNrc2xhc2hlcyBcXFxcIGFyZSBub3QgdmFsaWQgaW4gdGhlIGhyZWZgKTtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFVybCA9ICgwLCBfdXRpbHMpLm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyh1cmxBc1N0cmluZ05vUHJvdG8pO1xuICAgICAgICB1cmxBc1N0cmluZyA9ICh1cmxQcm90b01hdGNoID8gdXJsUHJvdG9NYXRjaFswXSA6ICcnKSArIG5vcm1hbGl6ZWRVcmw7XG4gICAgfVxuICAgIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgdXJsQXNTdHJpbmdcbiAgICAgICAgXSA6IHVybEFzU3RyaW5nO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBiYXNlID0gbmV3IFVSTCh1cmxBc1N0cmluZy5zdGFydHNXaXRoKCcjJykgPyByb3V0ZXIuYXNQYXRoIDogcm91dGVyLnBhdGhuYW1lLCAnaHR0cDovL24nKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIC8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKCcvJywgJ2h0dHA6Ly9uJyk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSk7XG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSk7XG4gICAgICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnO1xuICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJiBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiYgcmVzb2x2ZUFzKSB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9ICgwLCBfcXVlcnlzdHJpbmcpLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKTtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVzdWx0ICwgcGFyYW1zICB9ID0gaW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSwgZmluYWxVcmwucGF0aG5hbWUsIHF1ZXJ5KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW4gPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpIDogZmluYWxVcmwuaHJlZjtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHJlc29sdmVkSHJlZixcbiAgICAgICAgICAgIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICBdIDogcmVzb2x2ZWRIcmVmO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcbiAgICB9XG59XG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpIHtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybDtcbn1cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsIHVybCwgYXMpIHtcbiAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlciwgdXJsLCB0cnVlKTtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO1xuICAgIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKTtcbiAgICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO1xuICAgIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzO1xuICAgIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZik7XG4gICAgY29uc3QgcHJlcGFyZWRBcyA9IGFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLCBhcykpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWY7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICAgICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKSB7XG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goKDAsIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoKS5kZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lKSk7XG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhuYW1lO1xuICAgIH1cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpPT57XG4gICAgICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhZ2UpICYmICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUgPSBwYWdlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpO1xufVxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPSBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiYgISFmdW5jdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgdiA9ICdfX25leHQnO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlO1xuICAgIH0gY2F0Y2ggKG4pIHtcbiAgICB9XG59KCk7XG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO1xuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyKSB7XG4gICAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnIpPT57XG4gICAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgICAvLyBsb29wLlxuICAgICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgICAgICAoMCwgX3JvdXRlTG9hZGVyKS5tYXJrQXNzZXRFcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbn1cbmNsYXNzIFJvdXRlciB7XG4gICAgY29uc3RydWN0b3IocGF0aG5hbWUxLCBxdWVyeTEsIGFzMSwgeyBpbml0aWFsUHJvcHMgLCBwYWdlTG9hZGVyICwgQXBwICwgd3JhcEFwcCAsIENvbXBvbmVudDogQ29tcG9uZW50MSAsIGVycjogZXJyMSAsIHN1YnNjcmlwdGlvbiAsIGlzRmFsbGJhY2sgLCBsb2NhbGUgLCBsb2NhbGVzICwgZGVmYXVsdExvY2FsZSAsIGRvbWFpbkxvY2FsZXMgLCBpc1ByZXZpZXcgIH0pe1xuICAgICAgICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICAgICAgICB0aGlzLnNkYyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbiAgICAgICAgdGhpcy5zZHIgPSB7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2lkeCA9IDA7XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKT0+e1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgLCBxdWVyeTogcXVlcnkxICB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnkxXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBmb3JjZWRTY3JvbGw7XG4gICAgICAgICAgICBjb25zdCB7IHVybCAsIGFzOiBhczEgLCBvcHRpb25zICwgaWR4ICB9ID0gc3RhdGU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogc2VsZi5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faWR4ID0gaWR4O1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICB9ID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMxID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZTEgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzMSwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgICAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgIH0pLCBmb3JjZWRTY3JvbGwpO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICAgICAgdGhpcy5yb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcbiAgICAgICAgICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyOiBlcnIxLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1BcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgICAgICAgQ29tcG9uZW50OiBBcHAsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogW11cbiAgICAgICAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWUxO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnkxO1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9ICgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYXRobmFtZTEpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUxIDogYXMxO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICB0aGlzLmlzUmVhZHkgPSAhIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8IHNlbGYuX19ORVhUX0RBVEFfXy5hcHBHaXAgJiYgIXNlbGYuX19ORVhUX0RBVEFfXy5nc3AgfHwgIWF1dG9FeHBvcnREeW5hbWljICYmICFzZWxmLmxvY2F0aW9uLnNlYXJjaCAmJiAhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7XG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXc7XG4gICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICAgICAgICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlcztcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzO1xuICAgICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHNlbGYubG9jYXRpb24uaG9zdG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMxLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IGFzMSAhPT0gcGF0aG5hbWUxO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcbiAgICAgICAgICAgICAgICB9KSwgKDAsIF91dGlscykuZ2V0VVJMKCksIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAgICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqLyBiYWNrKCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi8gcHVzaCh1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqLyByZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICAoeyB1cmwgLCBhcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGFzeW5jIGNoYW5nZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMsIGZvcmNlZFNjcm9sbCkge1xuICAgICAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWYgPSB1cmwgPT09IGFzIHx8IG9wdGlvbnMuX2ggfHwgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7XG4gICAgICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgICAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICAgICAgaWYgKG9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJldkxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UgPyB0aGlzLmRlZmF1bHRMb2NhbGUgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKTtcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCgoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgoaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsIHRoaXMubG9jYWxlcykucGF0aG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVmO1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgICAgICAgICBpZiAoISgocmVmID0gdGhpcy5sb2NhbGVzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZi5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUodGhpcy5kb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgICAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgICAgICAgICBpZiAoIWRpZE5hdmlnYXRlICYmIGRldGVjdGVkRG9tYWluICYmIHRoaXMuaXNMb2NhbGVEb21haW4gJiYgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJyl9YDtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKT0+e1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgICAgaWYgKF91dGlscy5TVCkge1xuICAgICAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHNoYWxsb3cgPWZhbHNlICB9ID0gb3B0aW9ucztcbiAgICAgICAgY29uc3Qgcm91dGVQcm9wcyA9IHtcbiAgICAgICAgICAgIHNoYWxsb3dcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgICAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIGFzID0gYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLCBvcHRpb25zLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSk7XG4gICAgICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgdGhpcy5sb2NhbGUpO1xuICAgICAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXM7XG4gICAgICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBwcmV2TG9jYWxlICE9PSB0aGlzLmxvY2FsZTtcbiAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbCk7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSBwYXJzZWQ7XG4gICAgICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAgICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgICAgIGxldCBwYWdlcywgcmV3cml0ZXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgICAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgfVxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgICAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXM7XG4gICAgICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAgICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgICAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgICAgICBwYXRobmFtZTEgPSBwYXRobmFtZTEgPyAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lMSkpIDogcGF0aG5hbWUxO1xuICAgICAgICBpZiAoc2hvdWxkUmVzb2x2ZUhyZWYgJiYgcGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcywgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBxdWVyeTEsIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aDtcbiAgICAgICAgICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZTEsIHBhZ2VzKTtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcGFyc2VkLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICsgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKTtcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpO1xuICAgICAgICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWU7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkxKSA6IHtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKChwYXJhbSk9PiFxdWVyeTFbcGFyYW1dXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7c2hvdWxkSW50ZXJwb2xhdGUgPyBgSW50ZXJwb2xhdGluZyBocmVmYCA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgKyBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYCA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICsgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZSA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJyA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcyd9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgfSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTEsIGludGVycG9sYXRlZEFzLnBhcmFtcylcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeTEsIHJvdXRlTWF0Y2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciByZWYsIHJlZjE7XG4gICAgICAgICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lMSwgcXVlcnkxLCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICBsZXQgeyBlcnJvciAsIHByb3BzICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgICAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5wYWdlUHJvcHMgJiYgcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsICwgYXM6IG5ld0FzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIGRlc3RpbmF0aW9uLCBkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFVztcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGU7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsIG5vdEZvdW5kUm91dGUsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWxsb3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9IGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiYgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuX2ggJiYgcGF0aG5hbWUxID09PSAnL19lcnJvcicgJiYgKChyZWYgPSBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKHJlZjEgPSByZWYucGFnZVByb3BzKSA9PT0gbnVsbCB8fCByZWYxID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYxLnN0YXR1c0NvZGUpID09PSA1MDAgJiYgKHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5wYWdlUHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgICAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZTtcbiAgICAgICAgICAgIHZhciBfc2Nyb2xsO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkU2Nyb2xsID0gKF9zY3JvbGwgPSBvcHRpb25zLnNjcm9sbCkgIT09IG51bGwgJiYgX3Njcm9sbCAhPT0gdm9pZCAwID8gX3Njcm9sbCA6ICFpc1ZhbGlkU2hhbGxvd1JvdXRlO1xuICAgICAgICAgICAgY29uc3QgcmVzZXRTY3JvbGwgPSBzaG91bGRTY3JvbGwgPyB7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICB9IDogbnVsbDtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgY2xlYW5lZEFzLCByb3V0ZUluZm8sIGZvcmNlZFNjcm9sbCAhPT0gbnVsbCAmJiBmb3JjZWRTY3JvbGwgIT09IHZvaWQgMCA/IGZvcmNlZFNjcm9sbCA6IHJlc2V0U2Nyb2xsKS5jYXRjaCgoZSk9PntcbiAgICAgICAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZTtcbiAgICAgICAgICAgICAgICBlbHNlIHRocm93IGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xuICAgICAgICAgICAgaWYgKGVycjEuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCAoMCwgX3V0aWxzKS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3c7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMVxuICAgICAgICAgICAgfSwgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgICAgICcnLCBhcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoMCwgX3JvdXRlTG9hZGVyKS5pc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgQ29tcG9uZW50MTtcbiAgICAgICAgICAgIGxldCBzdHlsZVNoZWV0cztcbiAgICAgICAgICAgIGxldCBwcm9wcztcbiAgICAgICAgICAgIGlmICh0eXBlb2YgQ29tcG9uZW50MSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHN0eWxlU2hlZXRzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICh7IHBhZ2U6IENvbXBvbmVudDEgLCBzdHlsZVNoZWV0cyAgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSB7XG4gICAgICAgICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQxLFxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mbyA/IHVuZGVmaW5lZCA6IGV4aXN0aW5nUm91dGVJbmZvO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvID8gY2FjaGVkUm91dGVJbmZvIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1BcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBDb21wb25lbnQxICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlICB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQxKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRhdGFIcmVmO1xuICAgICAgICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICAgICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgfSksIHJlc29sdmVkQXMsIF9fTl9TU0csIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRyA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIDogX19OX1NTUCA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlczogdGhpcy5sb2NhbGVzLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TG9jYWxlOiB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgIH0gY2F0Y2ggKGVycjIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycjIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi8gYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGlmIChoYXNoID09PSAnJyB8fCBoYXNoID09PSAndG9wJykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcbiAgICAgICAgaWYgKGlkRWwpIHtcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO1xuICAgICAgICBpZiAobmFtZUVsKSB7XG4gICAgICAgICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cmxJc05ldyhhc1BhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovIGFzeW5jIHByZWZldGNoKHVybCwgYXNQYXRoID0gdXJsLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgbGV0IHBhcnNlZCA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUyICB9ID0gcGFyc2VkO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZTIsIHRoaXMubG9jYWxlcykucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgbGV0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGFzUGF0aCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZTtcbiAgICAgICAgICAgICAgICBhc1BhdGggPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcbiAgICAgICAgbGV0IHJlc29sdmVkQXMgPSBhc1BhdGg7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzUGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGxldCByZXdyaXRlcztcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBwYXJzZWQucXVlcnksIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTIpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSBwYXJzZWQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMik7XG4gICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZyk9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNTc2cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZih1cmwsIHJlc29sdmVkQXMsIHRydWUsIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHRoaXMubG9jYWxlKSkgOiBmYWxzZTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLCBcbiAgICAgICAgXSk7XG4gICAgfVxuICAgIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gdGhpcy5jbGMgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIyID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7XG4gICAgICAgICAgICAgICAgZXJyMi5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmICF0aGlzLmlzUHJldmlldyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGE7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogcmVzb3VyY2VLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmICh0aGlzLnNkcltyZXNvdXJjZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pLmNhdGNoKChlcnIyKT0+e1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcDEgIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcDEpO1xuICAgICAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWU7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzKS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcDEsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHhcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcywgcm91dGVQcm9wcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQsIHJlc2V0U2Nyb2xsKTtcbiAgICB9XG59XG5Sb3V0ZXIuZXZlbnRzID0gKDAsIF9taXR0KS5kZWZhdWx0KCk7XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBhdXRoV3JhcHBlciBmcm9tIFwiLi4vaGVscGVyL2F1dGhXcmFwcGVyXCI7XHJcbmltcG9ydCBGdW5kUmlzZXJGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL0Z1bmRSaXNlckZvcm1cIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IEZ1bmRSaXNlckNhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvRnVuZFJpc2VyQ2FyZFwiO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0xvYWRlclwiO1xyXG5cclxuY29uc3QgRGFzaGJvYXJkID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBwcm9qZWN0c0xpc3QgPSB1c2VTZWxlY3RvcihzdGF0ZT0+c3RhdGUucHJvamVjdFJlZHVjZXIucHJvamVjdHMpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTIgcHktNCBmbGV4IGZsZXgtY29sIGxnOnB4LTEyIGxnOmZsZXgtcm93IFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOnctNy8xMiBteS0yIGxnOm15LTAgbGc6bXgtMlwiPlxyXG4gICAgICAgIHtwcm9qZWN0c0xpc3QgIT09IHVuZGVmaW5lZD9cclxuICAgICAgICAgIHByb2plY3RzTGlzdC5sZW5ndGggPiAwID9cclxuICAgICAgICAgICAgcHJvamVjdHNMaXN0Lm1hcCgoZGF0YSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxGdW5kUmlzZXJDYXJkIHByb3BzPXtkYXRhfSBrZXk9e2l9Lz5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgIDpcclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1ncmF5LTUwMCB0ZXh0LWNlbnRlciBmb250LXNhbnNcIj5ObyBwcm9qZWN0IGZvdW5kICE8L2gxPlxyXG4gICAgICAgIDpcclxuICAgICAgICA8TG9hZGVyLz5cclxuICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGxnOnctNS8xMiBoLWZpdCBteS00XCI+XHJcbiAgICAgICAgICA8RnVuZFJpc2VyRm9ybS8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGF1dGhXcmFwcGVyKERhc2hib2FyZCk7XHJcbiIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gXCIuL3R5cGVzXCJcclxuXHJcbi8vIFdlYjMgYWN0aW9uc1xyXG5cclxuZXhwb3J0IGNvbnN0IHdlYjNMb2FkZWQgPSAod2ViMykgPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTp0eXBlcy5XRUIzX0xPQURFRCxcclxuICAgICAgICBwYXlsb2FkOndlYjNcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHdhbGxldEFkZHJlc3NMb2FkZWQgPSAoYWRkcmVzcykgPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTp0eXBlcy5XQUxMRVRfQUREUkVTU19MT0FERUQsXHJcbiAgICAgICAgcGF5bG9hZDphZGRyZXNzXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIENyb3dkIGZ1bmRpbmcgYWN0aW9uc1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyb3dkRnVuZGluZ0NvbnRyYWN0TG9hZGVkID0gKGNvbnRyYWN0KSA9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOnR5cGVzLkNST1dEX0ZVTkRJTkdfQ09OVFJBQ1RfTE9BREVELFxyXG4gICAgICAgIHBheWxvYWQ6Y29udHJhY3RcclxuICAgIH1cclxufVxyXG5cclxuLy8gUHJvamVjdCBhY3Rpb25zXHJcblxyXG5leHBvcnQgY29uc3QgcHJvamVjdENvbnRyYWN0c0xvYWRlZCA9IChjb250cmFjdHMpPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTp0eXBlcy5QUk9KRUNUX0NPTlRSQUNUU19MT0FERUQsXHJcbiAgICAgICAgcGF5bG9hZDpjb250cmFjdHNcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2plY3RzTG9hZGVkID0gKHByb2plY3RzKT0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6dHlwZXMuUFJPSkVDVFNfTE9BREVELFxyXG4gICAgICAgIHBheWxvYWQ6cHJvamVjdHNcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG5ld1Byb2plY3RDb250cmFjdHNMb2FkZWQgPSAoY29udHJhY3QpPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTp0eXBlcy5ORVdfUFJPSkVDVF9DT05UUkFDVF9MT0FERUQsXHJcbiAgICAgICAgcGF5bG9hZDpjb250cmFjdFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbmV3UHJvamVjdHNMb2FkZWQgPSAocHJvamVjdCk9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOnR5cGVzLk5FV19QUk9KRUNUX0xPQURFRCxcclxuICAgICAgICBwYXlsb2FkOnByb2plY3RcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFtb3VudENvbnRyaWJ1dG9yID0gKGRhdGEpPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTp0eXBlcy5JTkNSRUFTRV9QUk9HUkVTUyxcclxuICAgICAgICBwYXlsb2FkOmRhdGFcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHdpdGhkcmF3Q29udHJhY3RCYWxhbmNlID0gKGRhdGEpPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTp0eXBlcy5XSVRIRFJBV19CQUxBTkNFLFxyXG4gICAgICAgIHBheWxvYWQ6ZGF0YVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCI7XHJcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgQ3Jvd2RGdW5kaW5nIGZyb20gJy4uL2FydGlmYWN0cy9jb250cmFjdHMvQ3Jvd2RmdW5kaW5nLnNvbC9Dcm93ZGZ1bmRpbmcuanNvbidcclxuaW1wb3J0IFByb2plY3QgZnJvbSAnLi4vYXJ0aWZhY3RzL2NvbnRyYWN0cy9Qcm9qZWN0LnNvbC9Qcm9qZWN0Lmpzb24nXHJcbmltcG9ydCB7IGdyb3VwQ29udHJpYnV0aW9uQnlQcm9qZWN0LCBncm91cENvbnRyaWJ1dG9ycywgcHJvamVjdERhdGFGb3JtYXR0ZXIsIHdpdGhkcmF3UmVxdWVzdERhdGFGb3JtYXR0ZXJ9IGZyb20gXCIuLi9oZWxwZXIvaGVscGVyXCI7XHJcblxyXG5jb25zdCBjcm93ZEZ1bmRpbmdDb250cmFjdEFkZHJlc3MgPSBcIjB4NUZiREIyMzE1Njc4YWZlY2IzNjdmMDMyZDkzRjY0MmY2NDE4MGFhM1wiO1xyXG5cclxuLy9Mb2FkIHdlYjMgXHJcbmV4cG9ydCBjb25zdCBsb2FkV2ViMyA9IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIGNvbnN0IHdlYjMgPSBuZXcgV2ViMyhXZWIzLmdpdmVuUHJvdmlkZXIgfHwgXCJodHRwOi8vbG9jYWxob3N0Ojg1NDVcIik7XHJcbiAgZGlzcGF0Y2goYWN0aW9ucy53ZWIzTG9hZGVkKHdlYjMpKTtcclxuICByZXR1cm4gd2ViMztcclxufTtcclxuXHJcbi8vIExvYWQgY29ubmVjdGVkIHdhbGxldFxyXG5leHBvcnQgY29uc3QgbG9hZEFjY291bnQgPSBhc3luYyAod2ViMywgZGlzcGF0Y2gpID0+IHtcclxuICBjb25zdCBhY2NvdW50ID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICBjb25zdCBuZXR3b3JrID0gYXdhaXQgd2ViMy5ldGgubmV0LmdldElkKCk7XHJcblxyXG4vLyAgIGlmIChuZXR3b3JrICE9PSBOdW1iZXIocHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX05FVFdPUktfSUQpKSB7XHJcbi8vICAgICBhbGVydChcIkNvbnRyYWN0IG5vdCBkZXBsb3llZCBpbiB0aGlzIG5ldHdvcmsgIVwiKTtcclxuLy8gICB9XHJcbiAgZGlzcGF0Y2goYWN0aW9ucy53YWxsZXRBZGRyZXNzTG9hZGVkKGFjY291bnRbMF0pKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkFERFJFU1NcIixhY2NvdW50WzBdKVxyXG4gIHJldHVybiBhY2NvdW50O1xyXG59O1xyXG5cclxuLy9Db25uZWN0IHdpdGggY3Jvd2QgZnVuZGluZyBjb250cmFjdFxyXG5leHBvcnQgY29uc3QgbG9hZENyb3dkRnVuZGluZ0NvbnRyYWN0ID0gYXN5bmMod2ViMyxkaXNwYXRjaCkgPT57XHJcbiAgY29uc3QgY3Jvd2RGdW5kaW5nID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KENyb3dkRnVuZGluZy5hYmksY3Jvd2RGdW5kaW5nQ29udHJhY3RBZGRyZXNzKTtcclxuICBkaXNwYXRjaChhY3Rpb25zLmNyb3dkRnVuZGluZ0NvbnRyYWN0TG9hZGVkKGNyb3dkRnVuZGluZykpO1xyXG4gIHJldHVybiBjcm93ZEZ1bmRpbmc7XHJcbn1cclxuXHJcbi8vIFN0YXJ0IGZ1bmQgcmFpc2luZyBwcm9qZWN0XHJcbmV4cG9ydCBjb25zdCBzdGFydEZ1bmRSYWlzaW5nID0gYXN5bmMod2ViMyxDcm93ZEZ1bmRpbmdDb250cmFjdCxkYXRhLG9uU3VjY2VzcyxvbkVycm9yLGRpc3BhdGNoKSA9PntcclxuICBjb25zdCB7bWluaW11bUNvbnRyaWJ1dGlvbixkZWFkbGluZSx0YXJnZXRDb250cmlidXRpb24scHJvamVjdFRpdGxlLHByb2plY3REZXNjLGFjY291bnR9ID0gZGF0YTtcclxuXHJcbiAgYXdhaXQgQ3Jvd2RGdW5kaW5nQ29udHJhY3QubWV0aG9kcy5jcmVhdGVQcm9qZWN0KG1pbmltdW1Db250cmlidXRpb24sZGVhZGxpbmUsdGFyZ2V0Q29udHJpYnV0aW9uLHByb2plY3RUaXRsZSxwcm9qZWN0RGVzYykuc2VuZCh7ZnJvbTphY2NvdW50fSlcclxuICAub24oJ3JlY2VpcHQnLCBmdW5jdGlvbihyZWNlaXB0KXsgXHJcblxyXG4gICAgY29uc3QgcHJvamVjdHNSZWNlaXB0ID0gcmVjZWlwdC5ldmVudHMuUHJvamVjdFN0YXJ0ZWQucmV0dXJuVmFsdWVzO1xyXG4gICAgY29uc3QgY29udHJhY3RBZGRyZXNzID0gcHJvamVjdHNSZWNlaXB0LnByb2plY3RDb250cmFjdEFkZHJlc3M7XHJcblxyXG4gICAgY29uc3QgZm9ybWF0dGVkUHJvamVjdERhdGEgPSBwcm9qZWN0RGF0YUZvcm1hdHRlcihwcm9qZWN0c1JlY2VpcHQsY29udHJhY3RBZGRyZXNzKVxyXG4gICAgdmFyIHByb2plY3RDb25uZWN0b3IgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoUHJvamVjdC5hYmksY29udHJhY3RBZGRyZXNzKTtcclxuXHJcbiAgICBkaXNwYXRjaChhY3Rpb25zLm5ld1Byb2plY3RDb250cmFjdHNMb2FkZWQocHJvamVjdENvbm5lY3RvcikpO1xyXG4gICAgZGlzcGF0Y2goYWN0aW9ucy5uZXdQcm9qZWN0c0xvYWRlZChmb3JtYXR0ZWRQcm9qZWN0RGF0YSkpO1xyXG5cclxuICAgIG9uU3VjY2VzcygpXHJcbiAgfSlcclxuICAub24oJ2Vycm9yJywgZnVuY3Rpb24oZXJyb3IpeyBcclxuICAgIG9uRXJyb3IoZXJyb3IubWVzc2FnZSlcclxuICB9KVxyXG59XHJcblxyXG4vLyAxIC0gR2V0IGFsbCBmdW5kaW5nIHByb2plY3QgYWRkcmVzc1xyXG4vLyAyIC0gQ29ubmVjdCB3aXRoIGZ1bmRpbmcgcHJvamVjdCBjb250cmFjdFxyXG4vLyAzIC0gR2V0IHByb2plY3QgZGV0YWlscyBcclxuZXhwb3J0IGNvbnN0IGdldEFsbEZ1bmRpbmcgPSBhc3luYyhDcm93ZEZ1bmRpbmdDb250cmFjdCx3ZWIzLGRpc3BhdGNoKSA9PntcclxuICAgXHJcbiAgY29uc3QgZnVuZGluZ1Byb2plY3RMaXN0ID0gYXdhaXQgQ3Jvd2RGdW5kaW5nQ29udHJhY3QubWV0aG9kcy5yZXR1cm5BbGxQcm9qZWN0cygpLmNhbGwoKVxyXG4gIFxyXG4gICBjb25zdCBwcm9qZWN0Q29udHJhY3RzID0gW107XHJcbiAgIGNvbnN0IHByb2plY3RzID0gW107XHJcblxyXG4gICBhd2FpdCBQcm9taXNlLmFsbChmdW5kaW5nUHJvamVjdExpc3QubWFwKGFzeW5jIChkYXRhKT0+e1xyXG4gICAgdmFyIHByb2plY3RDb25uZWN0b3IgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoUHJvamVjdC5hYmksZGF0YSk7XHJcbiAgICBjb25zdCBkZXRhaWxzID0gYXdhaXQgcHJvamVjdENvbm5lY3Rvci5tZXRob2RzLmdldFByb2plY3REZXRhaWxzKCkuY2FsbCgpXHJcbiAgICBwcm9qZWN0Q29udHJhY3RzLnB1c2gocHJvamVjdENvbm5lY3Rvcik7XHJcbiAgICBjb25zdCBmb3JtYXR0ZWRQcm9qZWN0RGF0YSA9IHByb2plY3REYXRhRm9ybWF0dGVyKGRldGFpbHMsZGF0YSlcclxuICAgIHByb2plY3RzLnB1c2goZm9ybWF0dGVkUHJvamVjdERhdGEpXHJcbiAgIH0pKVxyXG5cclxuICAgZGlzcGF0Y2goYWN0aW9ucy5wcm9qZWN0Q29udHJhY3RzTG9hZGVkKHByb2plY3RDb250cmFjdHMpKTtcclxuICAgZGlzcGF0Y2goYWN0aW9ucy5wcm9qZWN0c0xvYWRlZChwcm9qZWN0cykpO1xyXG5cclxufVxyXG5cclxuLy8gQ29udHJpYnV0ZSBpbiBmdW5kIHJhaXNpbmcgcHJvamVjdFxyXG5leHBvcnQgY29uc3QgY29udHJpYnV0ZSA9IGFzeW5jKGNyb3dkRnVuZGluZ0NvbnRyYWN0LGRhdGEsZGlzcGF0Y2gsb25TdWNjZXNzLG9uRXJyb3IpID0+e1xyXG4gIGNvbnN0IHtjb250cmFjdEFkZHJlc3MsYW1vdW50LGFjY291bnR9ID0gZGF0YTtcclxuICBhd2FpdCBjcm93ZEZ1bmRpbmdDb250cmFjdC5tZXRob2RzLmNvbnRyaWJ1dGUoY29udHJhY3RBZGRyZXNzKS5zZW5kKHtmcm9tOmFjY291bnQsdmFsdWU6YW1vdW50fSlcclxuICAub24oJ3JlY2VpcHQnLCBmdW5jdGlvbihyZWNlaXB0KXtcclxuICAgIGRpc3BhdGNoKGFjdGlvbnMuYW1vdW50Q29udHJpYnV0b3Ioe3Byb2plY3RJZDpjb250cmFjdEFkZHJlc3MsYW1vdW50OmFtb3VudH0pKVxyXG4gICAgb25TdWNjZXNzKClcclxuICB9KVxyXG4gIC5vbignZXJyb3InLCBmdW5jdGlvbihlcnJvcil7IFxyXG4gICAgb25FcnJvcihlcnJvci5tZXNzYWdlKVxyXG4gIH0pXHJcbn1cclxuXHJcbi8vIEdldCBhbGwgY29udHJpYnV0b3JzIGJ5IGNvbnRyYWN0IGFkZHJlc3NcclxuZXhwb3J0IGNvbnN0IGdldENvbnRyaWJ1dG9ycyA9IGFzeW5jICh3ZWIzLGNvbnRyYWN0QWRkcmVzcyxvblN1Y2Nlc3Msb25FcnJvcikgPT57XHJcbiAgdHJ5IHtcclxuICAgIHZhciBwcm9qZWN0Q29ubmVjdG9yID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFByb2plY3QuYWJpLGNvbnRyYWN0QWRkcmVzcyk7XHJcbiAgICBjb25zdCBnZXRDb250cmlidXRpb25zID0gYXdhaXQgcHJvamVjdENvbm5lY3Rvci5nZXRQYXN0RXZlbnRzKFwiRnVuZGluZ1JlY2VpdmVkXCIse1xyXG4gICAgICBmcm9tQmxvY2s6IDAsXHJcbiAgICAgIHRvQmxvY2s6ICdsYXRlc3QnXHJcbiAgICB9KVxyXG4gICAgb25TdWNjZXNzKGdyb3VwQ29udHJpYnV0b3JzKGdldENvbnRyaWJ1dGlvbnMpKVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBvbkVycm9yKGVycm9yKVxyXG4gIH1cclxufVxyXG5cclxuLy8gUmVxdWVzdCBmb3Igd2l0aGRyYXcgYW1vdW50XHJcbmV4cG9ydCBjb25zdCBjcmVhdGVXaXRoZHJhd1JlcXVlc3QgPSBhc3luYyAod2ViMyxjb250cmFjdEFkZHJlc3MsZGF0YSxvblN1Y2Nlc3Msb25FcnJvcikgPT57XHJcbiAgY29uc3Qge2Rlc2NyaXB0aW9uLGFtb3VudCxyZWNpcGllbnQsYWNjb3VudH0gPSBkYXRhO1xyXG4gICAgdmFyIHByb2plY3RDb25uZWN0b3IgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoUHJvamVjdC5hYmksY29udHJhY3RBZGRyZXNzKTtcclxuICAgIGF3YWl0IHByb2plY3RDb25uZWN0b3IubWV0aG9kcy5jcmVhdGVXaXRoZHJhd1JlcXVlc3QoZGVzY3JpcHRpb24sYW1vdW50LHJlY2lwaWVudCkuc2VuZCh7ZnJvbTphY2NvdW50fSlcclxuICAgIC5vbigncmVjZWlwdCcsIGZ1bmN0aW9uKHJlY2VpcHQpe1xyXG4gICAgICBjb25zdCB3aXRoZHJhd1JlcVJlY2VpcHQgPSByZWNlaXB0LmV2ZW50cy5XaXRoZHJhd1JlcXVlc3RDcmVhdGVkLnJldHVyblZhbHVlcztcclxuICAgICAgY29uc3QgZm9ybWF0dGVkUmVxRGF0YSA9IHdpdGhkcmF3UmVxdWVzdERhdGFGb3JtYXR0ZXIod2l0aGRyYXdSZXFSZWNlaXB0LHdpdGhkcmF3UmVxUmVjZWlwdC5yZXF1ZXN0SWQpXHJcbiAgICAgIG9uU3VjY2Vzcyhmb3JtYXR0ZWRSZXFEYXRhKVxyXG4gICAgfSlcclxuICAgIC5vbignZXJyb3InLCBmdW5jdGlvbihlcnJvcil7IFxyXG4gICAgICBvbkVycm9yKGVycm9yLm1lc3NhZ2UpXHJcbiAgICB9KVxyXG59XHJcblxyXG4vLyBHZXQgYWxsIHdpdGhkcmF3IHJlcXVlc3RcclxuZXhwb3J0IGNvbnN0IGdldEFsbFdpdGhkcmF3UmVxdWVzdCA9IGFzeW5jICh3ZWIzLGNvbnRyYWN0QWRkcmVzcyxvbkxvYWRSZXF1ZXN0KSA9PntcclxuICB2YXIgcHJvamVjdENvbm5lY3RvciA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChQcm9qZWN0LmFiaSxjb250cmFjdEFkZHJlc3MpO1xyXG4gIHZhciB3aXRoZHJhd1JlcXVlc3RDb3VudCA9IGF3YWl0IHByb2plY3RDb25uZWN0b3IubWV0aG9kcy5udW1PZldpdGhkcmF3UmVxdWVzdHMoKS5jYWxsKCk7XHJcbiAgdmFyIHdpdGhkcmF3UmVxdWVzdHMgPSBbXTtcclxuXHJcbiAgaWYod2l0aGRyYXdSZXF1ZXN0Q291bnQgPD0gMCl7XHJcbiAgICBvbkxvYWRSZXF1ZXN0KHdpdGhkcmF3UmVxdWVzdHMpXHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIGZvcih2YXIgaT0xO2k8PXdpdGhkcmF3UmVxdWVzdENvdW50O2krKyl7XHJcbiAgICBjb25zdCByZXEgPSBhd2FpdCBwcm9qZWN0Q29ubmVjdG9yLm1ldGhvZHMud2l0aGRyYXdSZXF1ZXN0cyhpLTEpLmNhbGwoKTtcclxuICAgIHdpdGhkcmF3UmVxdWVzdHMucHVzaCh3aXRoZHJhd1JlcXVlc3REYXRhRm9ybWF0dGVyKHsuLi5yZXEscmVxdWVzdElkOmktMX0pKTtcclxuICB9XHJcbiAgb25Mb2FkUmVxdWVzdCh3aXRoZHJhd1JlcXVlc3RzKVxyXG59XHJcblxyXG4vLyBWb3RlIGZvciB3aXRoZHJhdyByZXF1ZXN0XHJcbmV4cG9ydCBjb25zdCB2b3RlV2l0aGRyYXdSZXF1ZXN0ID0gYXN5bmMgKHdlYjMsZGF0YSxvblN1Y2Nlc3Msb25FcnJvcikgPT57XHJcbiAgY29uc3Qge2NvbnRyYWN0QWRkcmVzcyxyZXFJZCxhY2NvdW50fSA9IGRhdGE7XHJcbiAgdmFyIHByb2plY3RDb25uZWN0b3IgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoUHJvamVjdC5hYmksY29udHJhY3RBZGRyZXNzKTtcclxuICBhd2FpdCBwcm9qZWN0Q29ubmVjdG9yLm1ldGhvZHMudm90ZVdpdGhkcmF3UmVxdWVzdChyZXFJZCkuc2VuZCh7ZnJvbTphY2NvdW50fSlcclxuICAub24oJ3JlY2VpcHQnLCBmdW5jdGlvbihyZWNlaXB0KXtcclxuICAgIGNvbnNvbGUubG9nKHJlY2VpcHQpXHJcbiAgICBvblN1Y2Nlc3MoKVxyXG4gIH0pXHJcbiAgLm9uKCdlcnJvcicsIGZ1bmN0aW9uKGVycm9yKXsgXHJcbiAgICBvbkVycm9yKGVycm9yLm1lc3NhZ2UpXHJcbiAgfSlcclxuXHJcbn1cclxuXHJcbi8vIFdpdGhkcmF3IHJlcXVlc3RlZCBhbW91bnQgXHJcbmV4cG9ydCBjb25zdCB3aXRoZHJhd0Ftb3VudCA9IGFzeW5jICh3ZWIzLGRpc3BhdGNoLGRhdGEsb25TdWNjZXNzLG9uRXJyb3IpID0+e1xyXG4gIGNvbnN0IHtjb250cmFjdEFkZHJlc3MscmVxSWQsYWNjb3VudCxhbW91bnR9ID0gZGF0YTtcclxuICB2YXIgcHJvamVjdENvbm5lY3RvciA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChQcm9qZWN0LmFiaSxjb250cmFjdEFkZHJlc3MpO1xyXG4gIGF3YWl0IHByb2plY3RDb25uZWN0b3IubWV0aG9kcy53aXRoZHJhd1JlcXVlc3RlZEFtb3VudChyZXFJZCkuc2VuZCh7ZnJvbTphY2NvdW50fSlcclxuICAub24oJ3JlY2VpcHQnLCBmdW5jdGlvbihyZWNlaXB0KXtcclxuICAgIGNvbnNvbGUubG9nKHJlY2VpcHQpXHJcbiAgICBkaXNwYXRjaChhY3Rpb25zLndpdGhkcmF3Q29udHJhY3RCYWxhbmNlKHtcclxuICAgICAgY29udHJhY3RBZGRyZXNzOmNvbnRyYWN0QWRkcmVzcyxcclxuICAgICAgd2l0aGRyYXdBbW91bnQ6YW1vdW50XHJcbiAgICB9KSlcclxuICAgIG9uU3VjY2VzcygpXHJcbiAgfSlcclxuICAub24oJ2Vycm9yJywgZnVuY3Rpb24oZXJyb3IpeyBcclxuICAgIG9uRXJyb3IoZXJyb3IubWVzc2FnZSlcclxuICB9KVxyXG59XHJcblxyXG4vL0dldCBteSBjb250cmlidXRpb25zXHJcbmV4cG9ydCBjb25zdCBnZXRNeUNvbnRyaWJ1dGlvbkxpc3QgPSBhc3luYyhjcm93ZEZ1bmRpbmdDb250cmFjdCxhY2NvdW50KSA9PntcclxuICBjb25zdCBnZXRDb250cmlidXRpb25zID0gYXdhaXQgY3Jvd2RGdW5kaW5nQ29udHJhY3QuZ2V0UGFzdEV2ZW50cyhcIkNvbnRyaWJ1dGlvblJlY2VpdmVkXCIse1xyXG4gICAgZmlsdGVyOiB7IGNvbnRyaWJ1dG9yOiBhY2NvdW50IH0sXHJcbiAgICBmcm9tQmxvY2s6IDAsXHJcbiAgICB0b0Jsb2NrOiAnbGF0ZXN0J1xyXG4gIH0pXHJcbiAgcmV0dXJuIGdyb3VwQ29udHJpYnV0aW9uQnlQcm9qZWN0KGdldENvbnRyaWJ1dGlvbnMpO1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBXRUIzX0xPQURFRCA9IFwiV0VCM19MT0FERURcIjtcclxuZXhwb3J0IGNvbnN0IFdBTExFVF9BRERSRVNTX0xPQURFRCA9IFwiV0FMTEVUX0FERFJFU1NfTE9BREVEXCI7XHJcblxyXG4vL0Nyb3dkIGZ1bmRpbmdcclxuZXhwb3J0IGNvbnN0IENST1dEX0ZVTkRJTkdfQ09OVFJBQ1RfTE9BREVEID0gXCJDUk9XRF9GVU5ESU5HX0NPTlRSQUNUX0xPQURFRFwiO1xyXG5cclxuLy8gUHJvamVjdFxyXG5leHBvcnQgY29uc3QgUFJPSkVDVF9DT05UUkFDVFNfTE9BREVEID0gXCJQUk9KRUNUX0NPTlRSQUNUU19MT0FERURcIjtcclxuZXhwb3J0IGNvbnN0IFBST0pFQ1RTX0xPQURFRCA9IFwiUFJPSkVDVFNfTE9BREVEXCI7XHJcbmV4cG9ydCBjb25zdCBORVdfUFJPSkVDVF9DT05UUkFDVF9MT0FERUQgPSBcIk5FV19QUk9KRUNUX0NPTlRSQUNUX0xPQURFRFwiO1xyXG5leHBvcnQgY29uc3QgTkVXX1BST0pFQ1RfTE9BREVEID0gXCJORVdfUFJPSkVDVF9MT0FERURcIjtcclxuZXhwb3J0IGNvbnN0IElOQ1JFQVNFX1BST0dSRVNTID0gXCJJTkNSRUFTRV9QUk9HUkVTU1wiO1xyXG5leHBvcnQgY29uc3QgV0lUSERSQVdfQkFMQU5DRSA9IFwiV0lUSERSQVdfQkFMQU5DRVwiOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9hc3RpZnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYjNcIik7IiwiLyogKGlnbm9yZWQpICovIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMaW5rIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImNvbnRyaWJ1dGUiLCJjcmVhdGVXaXRoZHJhd1JlcXVlc3QiLCJldGhlclRvV2VpIiwidG9hc3RTdWNjZXNzIiwidG9hc3RFcnJvciIsImNvbG9yTWFrZXIiLCJzdGF0ZSIsIkZ1bmRSaXNlckNhcmQiLCJwcm9wcyIsInB1c2hXaXRoZHJhd1JlcXVlc3RzIiwiYnRuTG9hZGVyIiwic2V0QnRuTG9hZGVyIiwiYW1vdW50Iiwic2V0QW1vdW50IiwiZGlzcGF0Y2giLCJjcm93ZEZ1bmRpbmdDb250cmFjdCIsImZ1bmRpbmdSZWR1Y2VyIiwiY29udHJhY3QiLCJhY2NvdW50Iiwid2ViM1JlZHVjZXIiLCJ3ZWIzIiwiY29ubmVjdGlvbiIsImNvbnRyaWJ1dGVBbW91bnQiLCJwcm9qZWN0SWQiLCJtaW5Db250cmlidXRpb24iLCJjb250cmlidXRpb25BbW91bnQiLCJkYXRhIiwiY29udHJhY3RBZGRyZXNzIiwib25TdWNjZXNzIiwib25FcnJvciIsIm1lc3NhZ2UiLCJyZXF1ZXN0Rm9yV2l0aGRyYXciLCJkZXNjcmlwdGlvbiIsInJlY2lwaWVudCIsImFkZHJlc3MiLCJ0aXRsZSIsImdvYWxBbW91bnQiLCJkZWFkbGluZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnRyYWN0QmFsYW5jZSIsImNyZWF0b3IiLCJ3aWR0aCIsInByb2dyZXNzIiwidXNlRWZmZWN0IiwibW9tZW50Iiwic3RhcnRGdW5kUmFpc2luZyIsIkZ1bmRSaXNlckZvcm0iLCJzZXRUaXRsZSIsInNldERlc2NyaXB0aW9uIiwidGFyZ2V0ZWRDb250cmlidXRpb25BbW91bnQiLCJzZXRUYXJnZXRlZENvbnRyaWJ1dGlvbkFtb3VudCIsIm1pbmltdW1Db250cmlidXRpb25BbW91bnQiLCJzZXRNaW5pbXVtQ29udHJpYnV0aW9uQW1vdW50Iiwic2V0RGVhZGxpbmUiLCJidG5Mb2FkaW5nIiwic2V0QnRuTG9hZGluZyIsInJpc2VGdW5kIiwicHJldmVudERlZmF1bHQiLCJ1bml4RGF0ZSIsInZhbHVlT2YiLCJlcnJvciIsIm1pbmltdW1Db250cmlidXRpb24iLCJOdW1iZXIiLCJ0YXJnZXRDb250cmlidXRpb24iLCJwcm9qZWN0VGl0bGUiLCJwcm9qZWN0RGVzYyIsIkxvYWRlciIsInVzZVJvdXRlciIsIk5hdmJhciIsInJvdXRlciIsIm9wZW5NZW51Iiwic2V0T3Blbk1lbnUiLCJwYXRobmFtZSIsIlJvdXRlciIsImdldExvY2FsU3RvcmFnZURhdGEiLCJuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImF1dGhXcmFwcGVyIiwiV3JhcHBlZENvbXBvbmVudCIsIl8iLCJ3ZWlUb0V0aGVyIiwibnVtIiwidXRpbHMiLCJmcm9tV2VpIiwid2VpQmlnTnVtYmVyIiwidG9XZWkiLCJ3ZWkiLCJ0b1N0cmluZyIsInVuaXhUb0RhdGUiLCJmb3JtYXQiLCJwcm9qZWN0RGF0YUZvcm1hdHRlciIsImZvcm1hdHRlZERhdGEiLCJwcm9qZWN0U3RhcnRlciIsImJhbGFuY2UiLCJkZXNjIiwiY3VycmVudEFtb3VudCIsImN1cnJlbnRTdGF0ZSIsInByb2plY3REZWFkbGluZSIsIk1hdGgiLCJyb3VuZCIsImZvcm1hdFByb2plY3RDb250cmlidXRpb25zIiwiY29udHJpYnV0aW9ucyIsIm1hcCIsInByb2plY3RBZGRyZXNzIiwicmV0dXJuVmFsdWVzIiwiY29udHJpYnV0b3IiLCJjb250cmlidXRlZEFtb3VudCIsImdyb3VwQ29udHJpYnV0aW9uQnlQcm9qZWN0IiwiY29udHJpYnV0aW9uTGlzdCIsImZvcm1hdENvbnRyaWJ1dGlvbiIsImdyb3VwQ29udHJpYnV0b3JzIiwiY29udHJpYnV0b3JMaXN0IiwiY29udHJpYnV0b3JHcm91cCIsImdyb3VwQnkiLCJvIiwic3VtQnkiLCJ3aXRoZHJhd1JlcXVlc3REYXRhRm9ybWF0dGVyIiwicmVxdWVzdElkIiwidG90YWxWb3RlIiwibm9PZlZvdGVzIiwic3RhdHVzIiwiaXNDb21wbGV0ZWQiLCJyZWNpcHRhbnQiLCJyZWNpcHRlbnQiLCJjb25uZWN0V2l0aFdhbGxldCIsIndpbmRvdyIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsInRoZW4iLCJyZXMiLCJjYXRjaCIsImFsZXJ0IiwiY2hhaW5PckFjY291bnRDaGFuZ2VkSGFuZGxlciIsImxvY2F0aW9uIiwicmVsb2FkIiwidG9hc3QiLCJtc2ciLCJzdWNjZXNzIiwicG9zaXRpb24iLCJhdXRvQ2xvc2UiLCJoaWRlUHJvZ3Jlc3NCYXIiLCJjbG9zZU9uQ2xpY2siLCJwYXVzZU9uSG92ZXIiLCJkcmFnZ2FibGUiLCJ1bmRlZmluZWQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJkZWZhdWx0IiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfcm91dGVyIiwiX3JvdXRlcjEiLCJfdXNlSW50ZXJzZWN0aW9uIiwib2JqIiwiX19lc01vZHVsZSIsInByZWZldGNoZWQiLCJwcmVmZXRjaCIsImhyZWYiLCJhcyIsIm9wdGlvbnMiLCJpc0xvY2FsVVJMIiwiZXJyIiwiY3VyTG9jYWxlIiwibG9jYWxlIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsInJlcGxhY2UiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJpbmRleE9mIiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsIkVycm9yIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwia2V5cyIsImZvckVhY2giLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwidXNlUmVmIiwiY3VycmVudCIsImNvbnNvbGUiLCJ3YXJuIiwicCIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwicmVzb2x2ZUhyZWYiLCJjaGlsZHJlbiIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUmVmIiwicmVmIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwiaXNWaXNpYmxlIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsInNldFJlZiIsInVzZUNhbGxiYWNrIiwiZWwiLCJzaG91bGRQcmVmZXRjaCIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5IiwidHlwZSIsImxvY2FsZURvbWFpbiIsImlzTG9jYWxlRG9tYWluIiwiZ2V0RG9tYWluTG9jYWxlIiwibG9jYWxlcyIsImRvbWFpbkxvY2FsZXMiLCJhZGRCYXNlUGF0aCIsImFkZExvY2FsZSIsImRlZmF1bHRMb2NhbGUiLCJjbG9uZUVsZW1lbnQiLCJfZGVmYXVsdCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwYXRoIiwiZW5kc1dpdGgiLCJzbGljZSIsInByb2Nlc3MiLCJlbnYiLCJfX05FWFRfVFJBSUxJTkdfU0xBU0giLCJ0ZXN0IiwicmVxdWVzdElkbGVDYWxsYmFjayIsImNhbmNlbElkbGVDYWxsYmFjayIsInNlbGYiLCJiaW5kIiwiY2IiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJtYXgiLCJpZCIsImNsZWFyVGltZW91dCIsIm1hcmtBc3NldEVycm9yIiwiaXNBc3NldEVycm9yIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsImNyZWF0ZVJvdXRlTG9hZGVyIiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJnZXQiLCJmdXR1cmUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlc29sdmVyIiwicHJvbSIsInNldCIsImhhc1ByZWZldGNoIiwibGluayIsImRvY3VtZW50IiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJjYW5QcmVmZXRjaCIsInByZWZldGNoVmlhRG9tIiwicmVqIiwicXVlcnlTZWxlY3RvciIsInJlbCIsImNyb3NzT3JpZ2luIiwiX19ORVhUX0NST1NTX09SSUdJTiIsIm9ubG9hZCIsIm9uZXJyb3IiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYXBwZW5kU2NyaXB0Iiwic3JjIiwic2NyaXB0IiwicmVqZWN0IiwiYm9keSIsImRldkJ1aWxkUHJvbWlzZSIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJtcyIsImNhbmNlbGxlZCIsInIiLCJfX0JVSUxEX01BTklGRVNUIiwib25CdWlsZE1hbmlmZXN0IiwiX19CVUlMRF9NQU5JRkVTVF9DQiIsImdldEZpbGVzRm9yUm91dGUiLCJhc3NldFByZWZpeCIsInJvdXRlIiwic2NyaXB0cyIsImVuY29kZVVSSSIsImNzcyIsIm1hbmlmZXN0IiwiYWxsRmlsZXMiLCJmaWx0ZXIiLCJ2IiwiZW50cnlwb2ludHMiLCJNYXAiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJtYXliZUV4ZWN1dGVTY3JpcHQiLCJmZXRjaFN0eWxlU2hlZXQiLCJmZXRjaCIsIm9rIiwidGV4dCIsImNvbnRlbnQiLCJ3aGVuRW50cnlwb2ludCIsIm9uRW50cnlwb2ludCIsImV4ZWN1dGUiLCJmbiIsImNvbXBvbmVudCIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwicm91dGVGaWxlc1Byb21pc2UiLCJhbGwiLCJoYXMiLCJlbnRyeXBvaW50Iiwic3R5bGVzIiwiZmluYWxseSIsImFzc2lnbiIsImNuIiwibmF2aWdhdG9yIiwic2F2ZURhdGEiLCJlZmZlY3RpdmVUeXBlIiwib3V0cHV0IiwiZW51bWVyYWJsZSIsIl93aXRoUm91dGVyIiwiY3JlYXRlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiX3JvdXRlckNvbnRleHQiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwicHVzaCIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwic3RhY2siLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsImluc3RhbmNlIiwicHJvcGVydHkiLCJBcnJheSIsImlzQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ0YWdOYW1lIiwib2JzZXJ2ZSIsImlkbGVDYWxsYmFjayIsImVsZW1lbnQiLCJjYWxsYmFjayIsIm9ic2VydmVyIiwiZWxlbWVudHMiLCJjcmVhdGVPYnNlcnZlciIsImRlbGV0ZSIsInNpemUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJkaXNwbGF5TmFtZSIsImRlbExvY2FsZSIsImhhc0Jhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZUFzIiwiX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2giLCJfcm91dGVMb2FkZXIiLCJfZGVub3JtYWxpemVQYWdlUGF0aCIsIl9ub3JtYWxpemVMb2NhbGVQYXRoIiwiX21pdHQiLCJfdXRpbHMiLCJfaXNEeW5hbWljIiwiX3BhcnNlUmVsYXRpdmVVcmwiLCJfcXVlcnlzdHJpbmciLCJfcmVzb2x2ZVJld3JpdGVzIiwiX3JvdXRlTWF0Y2hlciIsIl9yb3V0ZVJlZ2V4IiwiZGV0ZWN0RG9tYWluTG9jYWxlIiwiX19ORVhUX0kxOE5fU1VQUE9SVCIsImJhc2VQYXRoIiwiX19ORVhUX1JPVVRFUl9CQVNFUEFUSCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJhZGRQYXRoUHJlZml4IiwicHJlZml4Iiwic3RhcnRzV2l0aCIsInBhdGhOb1F1ZXJ5SGFzaCIsIm5vcm1hbGl6ZUxvY2FsZVBhdGgiLCJkZXRlY3RlZExvY2FsZSIsImRldGVjdGVkRG9tYWluIiwiaHR0cCIsImRvbWFpbiIsInBhdGhMb3dlciIsInRvTG93ZXJDYXNlIiwibG9jYWxlTG93ZXIiLCJsZW5ndGgiLCJzdWJzdHIiLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiVVJMIiwib3JpZ2luIiwiYXNQYXRobmFtZSIsInF1ZXJ5IiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiZ2V0Um91dGVNYXRjaGVyIiwicGFyYW1zIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJzZWdtZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwiam9pbiIsInJlc3VsdCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsImZpbHRlcmVkUXVlcnkiLCJpbmNsdWRlcyIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwidXJsUHJvdG9NYXRjaCIsIm1hdGNoIiwidXJsQXNTdHJpbmdOb1Byb3RvIiwidXJsUGFydHMiLCJzcGxpdCIsIm5vcm1hbGl6ZWRVcmwiLCJub3JtYWxpemVSZXBlYXRlZFNsYXNoZXMiLCJhc1BhdGgiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaXNEeW5hbWljUm91dGUiLCJzZWFyY2hQYXJhbXMiLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IiwiaGFzaCIsInN0cmlwT3JpZ2luIiwicHJlcGFyZVVybEFzIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJwcmVwYXJlZEFzIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhZ2VzIiwiY2xlYW5QYXRobmFtZSIsImRlbm9ybWFsaXplUGFnZVBhdGgiLCJzb21lIiwicGFnZSIsInJlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJfX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OIiwiaGlzdG9yeSIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJuIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJqc29uIiwibm90Rm91bmQiLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsImNvbnN0cnVjdG9yIiwicGF0aG5hbWUxIiwicXVlcnkxIiwiYXMxIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJDb21wb25lbnQxIiwiZXJyMSIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJpc1ByZXZpZXciLCJzZGMiLCJzZHIiLCJfaWR4Iiwib25Qb3BTdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwiSlNPTiIsInN0cmluZ2lmeSIsIngiLCJwYWdlWE9mZnNldCIsInkiLCJwYWdlWU9mZnNldCIsInBhcnNlIiwicGFyc2VSZWxhdGl2ZVVybCIsImlzU3NyIiwiX2JwcyIsImNoYW5nZSIsIl9zaGFsbG93IiwiY29tcG9uZW50cyIsImluaXRpYWwiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJzdWIiLCJjbGMiLCJfd3JhcEFwcCIsImlzUmVhZHkiLCJnc3NwIiwiZ2lwIiwiYXBwR2lwIiwiZ3NwIiwic2VhcmNoIiwiX19ORVhUX0hBU19SRVdSSVRFUyIsImhvc3RuYW1lIiwiX3Nob3VsZFJlc29sdmVIcmVmIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFJlc3RvcmF0aW9uIiwiYmFjayIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJwcmV2TG9jYWxlIiwicGFyc2VkQXMiLCJsb2NhbGVQYXRoUmVzdWx0IiwiZGlkTmF2aWdhdGUiLCJhc05vQmFzZVBhdGgiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJfaW5GbGlnaHRSb3V0ZSIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsImxvY2FsZUNoYW5nZSIsIm9ubHlBSGFzaENoYW5nZSIsImVtaXQiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3IiwicmV3cml0ZXNSZXN1bHQiLCJtYXRjaGVkUGFnZSIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicmVmMSIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJub3RGb3VuZFJvdXRlIiwiZmV0Y2hDb21wb25lbnQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsIl9zY3JvbGwiLCJzaG91bGRTY3JvbGwiLCJyZXNldFNjcm9sbCIsImRvY3VtZW50RWxlbWVudCIsImxhbmciLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiZXJyMiIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwYXRobmFtZTIiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcDEiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsIkRhc2hib2FyZCIsInByb2plY3RzTGlzdCIsInByb2plY3RSZWR1Y2VyIiwicHJvamVjdHMiLCJpIiwidHlwZXMiLCJ3ZWIzTG9hZGVkIiwiV0VCM19MT0FERUQiLCJwYXlsb2FkIiwid2FsbGV0QWRkcmVzc0xvYWRlZCIsIldBTExFVF9BRERSRVNTX0xPQURFRCIsImNyb3dkRnVuZGluZ0NvbnRyYWN0TG9hZGVkIiwiQ1JPV0RfRlVORElOR19DT05UUkFDVF9MT0FERUQiLCJwcm9qZWN0Q29udHJhY3RzTG9hZGVkIiwiY29udHJhY3RzIiwiUFJPSkVDVF9DT05UUkFDVFNfTE9BREVEIiwicHJvamVjdHNMb2FkZWQiLCJQUk9KRUNUU19MT0FERUQiLCJuZXdQcm9qZWN0Q29udHJhY3RzTG9hZGVkIiwiTkVXX1BST0pFQ1RfQ09OVFJBQ1RfTE9BREVEIiwibmV3UHJvamVjdHNMb2FkZWQiLCJwcm9qZWN0IiwiTkVXX1BST0pFQ1RfTE9BREVEIiwiYW1vdW50Q29udHJpYnV0b3IiLCJJTkNSRUFTRV9QUk9HUkVTUyIsIndpdGhkcmF3Q29udHJhY3RCYWxhbmNlIiwiV0lUSERSQVdfQkFMQU5DRSIsIldlYjMiLCJhY3Rpb25zIiwiQ3Jvd2RGdW5kaW5nIiwiUHJvamVjdCIsImNyb3dkRnVuZGluZ0NvbnRyYWN0QWRkcmVzcyIsImxvYWRXZWIzIiwiZ2l2ZW5Qcm92aWRlciIsImxvYWRBY2NvdW50IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJuZXR3b3JrIiwibmV0IiwiZ2V0SWQiLCJsb2FkQ3Jvd2RGdW5kaW5nQ29udHJhY3QiLCJjcm93ZEZ1bmRpbmciLCJDb250cmFjdCIsImFiaSIsIkNyb3dkRnVuZGluZ0NvbnRyYWN0IiwibWV0aG9kcyIsImNyZWF0ZVByb2plY3QiLCJzZW5kIiwiZnJvbSIsInJlY2VpcHQiLCJwcm9qZWN0c1JlY2VpcHQiLCJQcm9qZWN0U3RhcnRlZCIsInByb2plY3RDb250cmFjdEFkZHJlc3MiLCJmb3JtYXR0ZWRQcm9qZWN0RGF0YSIsInByb2plY3RDb25uZWN0b3IiLCJnZXRBbGxGdW5kaW5nIiwiZnVuZGluZ1Byb2plY3RMaXN0IiwicmV0dXJuQWxsUHJvamVjdHMiLCJjYWxsIiwicHJvamVjdENvbnRyYWN0cyIsImRldGFpbHMiLCJnZXRQcm9qZWN0RGV0YWlscyIsImdldENvbnRyaWJ1dG9ycyIsImdldENvbnRyaWJ1dGlvbnMiLCJnZXRQYXN0RXZlbnRzIiwiZnJvbUJsb2NrIiwidG9CbG9jayIsIndpdGhkcmF3UmVxUmVjZWlwdCIsIldpdGhkcmF3UmVxdWVzdENyZWF0ZWQiLCJmb3JtYXR0ZWRSZXFEYXRhIiwiZ2V0QWxsV2l0aGRyYXdSZXF1ZXN0Iiwib25Mb2FkUmVxdWVzdCIsIndpdGhkcmF3UmVxdWVzdENvdW50IiwibnVtT2ZXaXRoZHJhd1JlcXVlc3RzIiwid2l0aGRyYXdSZXF1ZXN0cyIsInJlcSIsInZvdGVXaXRoZHJhd1JlcXVlc3QiLCJyZXFJZCIsImxvZyIsIndpdGhkcmF3QW1vdW50Iiwid2l0aGRyYXdSZXF1ZXN0ZWRBbW91bnQiLCJnZXRNeUNvbnRyaWJ1dGlvbkxpc3QiXSwic291cmNlUm9vdCI6IiJ9