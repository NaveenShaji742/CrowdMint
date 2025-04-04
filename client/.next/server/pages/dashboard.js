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
  if (state === 'Fundraising') return 'bg-cyan-500';
  if (state === 'Expired') return 'bg-red-500';
  return 'bg-emerald-500';
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
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const crowdFundingContract = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.fundingReducer.contract);
  const account = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.web3Reducer.account);
  const web3 = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.web3Reducer.connection);

  const contributeAmount = (projectId, minContribution) => {
    const numericAmount = parseFloat(amount);

    if (isNaN(numericAmount) || numericAmount < minContribution) {
      (0,_helper_toastMessage__WEBPACK_IMPORTED_MODULE_5__.toastError)(`Minimum contribution amount is ${minContribution} ETH`);
      return;
    }

    setBtnLoader(projectId);
    const contributionAmount = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_4__.etherToWei)(numericAmount);
    const data = {
      contractAddress: projectId,
      amount: contributionAmount,
      account: account
    };

    const onSuccess = () => {
      setBtnLoader(false);
      setAmount('');
      (0,_helper_toastMessage__WEBPACK_IMPORTED_MODULE_5__.toastSuccess)(`Successfully contributed ${numericAmount} ETH`);
    };

    const onError = message => {
      setBtnLoader(false);
      (0,_helper_toastMessage__WEBPACK_IMPORTED_MODULE_5__.toastError)(message);
    };

    (0,_redux_interactions__WEBPACK_IMPORTED_MODULE_3__.contribute)(crowdFundingContract, data, dispatch, onSuccess, onError);
  };

  const requestForWithdraw = projectId => {
    const numericAmount = parseFloat(amount);

    if (isNaN(numericAmount) || numericAmount <= 0) {
      (0,_helper_toastMessage__WEBPACK_IMPORTED_MODULE_5__.toastError)(`Please enter a valid withdraw amount`);
      return;
    }

    setBtnLoader(projectId);
    const contributionAmount = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_4__.etherToWei)(numericAmount);
    const data = {
      description: `${numericAmount} ETH requested for withdraw`,
      amount: contributionAmount,
      recipient: account,
      account: account
    };

    const onSuccess = data => {
      setBtnLoader(false);
      setAmount('');
      if (pushWithdrawRequests) pushWithdrawRequests(data);
      (0,_helper_toastMessage__WEBPACK_IMPORTED_MODULE_5__.toastSuccess)(`Successfully requested withdraw of ${numericAmount} ETH`);
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
      lineNumber: 88,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: `/project-details/${props.address}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
        className: "font-sans text-xl text-gray font-semibold hover:text-sky-500 hover:cursor-pointer",
        children: props.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
      className: "font-sans text-sm text-stone-800 tracking-tight",
      children: props.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "flex flex-col lg:flex-row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "inner-card my-6 w-full lg:w-2/5",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          className: "text-md font-bold font-sans text-gray",
          children: "Targeted contribution"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          className: "text-sm font-bold font-sans text-gray-600 ",
          children: [props.goalAmount, " ETH"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          className: "text-md font-bold font-sans text-gray",
          children: "Deadline"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          className: "text-sm font-bold font-sans text-gray-600 ",
          children: props.deadline
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "inner-card my-6 w-full lg:w-3/5",
        children: props.state !== 'Successful' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("label", {
            className: "text-sm text-gray-700 font-semibold",
            children: "Contribution amount:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "flex flex-row",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
              type: "number",
              step: "any",
              placeholder: "Type here",
              value: amount,
              onChange: e => setAmount(e.target.value),
              disabled: btnLoader === props.address,
              className: "input rounded-l-md"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
              className: "button",
              onClick: () => contributeAmount(props.address, props.minContribution),
              disabled: btnLoader === props.address,
              children: btnLoader === props.address ? 'Loading...' : 'Contribute'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
            className: "text-sm text-red-600",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
              className: "font-bold",
              children: "NOTE:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 17
            }, undefined), " Minimum contribution is ", props.minContribution, " ETH"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 15
          }, undefined)]
        }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
            className: "text-md font-bold font-sans text-gray",
            children: "Contract balance"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
            className: "text-sm font-bold font-sans text-gray-600 ",
            children: [props.contractBalance, " ETH"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 15
          }, undefined), props.creator === account && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("label", {
              className: "text-sm text-gray-700 font-semibold",
              children: "Withdraw request:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 19
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "flex flex-row",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
                type: "number",
                step: "any",
                placeholder: "Type here",
                value: amount,
                onChange: e => setAmount(e.target.value),
                disabled: btnLoader === props.address,
                className: "input rounded-l-md"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 21
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                className: "button",
                onClick: () => requestForWithdraw(props.address),
                disabled: btnLoader === props.address,
                children: btnLoader === props.address ? 'Loading...' : 'Withdraw'
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 21
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 19
            }, undefined)]
          }, void 0, true)]
        }, void 0, true)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, undefined), props.state !== 'Successful' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "w-full bg-gray-200 rounded-full",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "progress",
        style: {
          width: `${props.progress}%`
        },
        children: [props.progress, "%"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 87,
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
  return web3__WEBPACK_IMPORTED_MODULE_1___default().utils.fromWei(num.toString(), 'ether');
};
const etherToWei = num => {
  const str = typeof num === "string" ? num : num.toString(); // ensure input is a string

  const wei = web3__WEBPACK_IMPORTED_MODULE_1___default().utils.toWei(str, 'ether');
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
  return contributions.map(data => ({
    projectAddress: data.returnValues.projectAddress,
    contributor: data.returnValues.contributor,
    amount: Number(weiToEther(data.returnValues.contributedAmount))
  }));
};

const groupContributionByProject = contributions => {
  const contributionList = formatProjectContributions(contributions);
  return contributionList;
};

const formatContribution = contributions => {
  return contributions.map(data => ({
    contributor: data.returnValues.contributor,
    amount: Number(weiToEther(data.returnValues.amount))
  }));
};

const groupContributors = contributions => {
  const contributorList = formatContribution(contributions);

  const contributorGroup = lodash__WEBPACK_IMPORTED_MODULE_2___default().map(lodash__WEBPACK_IMPORTED_MODULE_2___default().groupBy(contributorList, 'contributor'), (o, address) => ({
    contributor: address,
    amount: lodash__WEBPACK_IMPORTED_MODULE_2___default().sumBy(o, 'amount')
  }));

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
module.exports = JSON.parse('{"_format":"hh-sol-artifact-1","contractName":"Crowdfunding","sourceName":"contracts/Crowdfunding.sol","abi":[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"projectAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"contributedAmount","type":"uint256"},{"indexed":true,"internalType":"address","name":"contributor","type":"address"}],"name":"ContributionReceived","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"projectContractAddress","type":"address"},{"indexed":false,"internalType":"address","name":"creator","type":"address"},{"indexed":false,"internalType":"uint256","name":"minContribution","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"projectDeadline","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"goalAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"currentAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"noOfContributors","type":"uint256"},{"indexed":false,"internalType":"string","name":"title","type":"string"},{"indexed":false,"internalType":"string","name":"desc","type":"string"},{"indexed":false,"internalType":"uint256","name":"currentState","type":"uint256"}],"name":"ProjectStarted","type":"event"},{"inputs":[{"internalType":"address","name":"_projectAddress","type":"address"}],"name":"contribute","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"minimumContribution","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint256","name":"targetContribution","type":"uint256"},{"internalType":"string","name":"projectTitle","type":"string"},{"internalType":"string","name":"projectDesc","type":"string"}],"name":"createProject","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"returnAllProjects","outputs":[{"internalType":"contract Project[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"}],"bytecode":"0x608060405234801561001057600080fd5b506136e4806100206000396000f3fe608060405260043610620000385760003560e01c806373e888fd146200003d57806385b6e28e146200005d578063a429078b146200008d575b600080fd5b6200005b6004803603810190620000559190620005f7565b620000bb565b005b3480156200006a57600080fd5b50620000756200038c565b60405162000084919062000a09565b60405180910390f35b3480156200009a57600080fd5b50620000b96004803603810190620000b391906200067b565b6200041c565b005b60008173ffffffffffffffffffffffffffffffffffffffff1663937e09b16040518163ffffffff1660e01b815260040160206040518083038186803b1580156200010457600080fd5b505afa15801562000119573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200013f91906200064f565b905060008273ffffffffffffffffffffffffffffffffffffffff1663c19d93fb6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200018a57600080fd5b505afa1580156200019f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001c5919062000623565b90506000600281111562000202577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8160028111156200023c577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b146200027f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002769062000a2d565b60405180910390fd5b81341015620002c5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002bc9062000a4f565b60405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff166373e888fd34336040518363ffffffff1660e01b815260040162000301919062000886565b6000604051808303818588803b1580156200031b57600080fd5b505af115801562000330573d6000803e3d6000fd5b50505050503373ffffffffffffffffffffffffffffffffffffffff167f0829c5c9dc5d14e41b11cfca0f01f76eba69b648ddcf9f84afba16ba8a76bf1c84346040516200037f92919062000961565b60405180910390a2505050565b606060008054806020026020016040519081016040528092919081815260200182805480156200041257602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311620003c7575b5050505050905090565b600033868686868660405162000432906200051b565b62000443969594939291906200098e565b604051809103906000f08015801562000460573d6000803e3d6000fd5b5090506000819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f73cc6512e7ecc537961f06c435b8c36be561c23851b3c990165a8cd7968dc6c681338888886000808a8a60006040516200050b9a99989796959493929190620008a3565b60405180910390a1505050505050565b6129bd8062000cf283390190565b6000620005406200053a8462000a9a565b62000a71565b9050828152602081018484840111156200055957600080fd5b6200056684828562000b9f565b509392505050565b6000813590506200057f8162000cac565b92915050565b600081519050620005968162000cc6565b92915050565b600082601f830112620005ae57600080fd5b8135620005c084826020860162000529565b91505092915050565b600081359050620005da8162000cd7565b92915050565b600081519050620005f18162000cd7565b92915050565b6000602082840312156200060a57600080fd5b60006200061a848285016200056e565b91505092915050565b6000602082840312156200063657600080fd5b6000620006468482850162000585565b91505092915050565b6000602082840312156200066257600080fd5b60006200067284828501620005e0565b91505092915050565b600080600080600060a086880312156200069457600080fd5b6000620006a488828901620005c9565b9550506020620006b788828901620005c9565b9450506040620006ca88828901620005c9565b935050606086013567ffffffffffffffff811115620006e857600080fd5b620006f6888289016200059c565b925050608086013567ffffffffffffffff8111156200071457600080fd5b62000722888289016200059c565b9150509295509295909350565b60006200073d8383620007c4565b60208301905092915050565b620007548162000b25565b82525050565b6000620007678262000ae0565b62000773818562000b03565b9350620007808362000ad0565b8060005b83811015620007b75781516200079b88826200072f565b9750620007a88362000af6565b92505060018101905062000784565b5085935050505092915050565b620007cf8162000b63565b82525050565b620007e08162000b8b565b82525050565b6000620007f38262000aeb565b620007ff818562000b14565b93506200081181856020860162000bae565b6200081c8162000c49565b840191505092915050565b600062000836600d8362000b14565b9150620008438262000c5a565b602082019050919050565b60006200085d60208362000b14565b91506200086a8262000c83565b602082019050919050565b620008808162000b59565b82525050565b60006020820190506200089d600083018462000749565b92915050565b600061014082019050620008bb600083018d62000749565b620008ca602083018c62000749565b620008d9604083018b62000875565b620008e8606083018a62000875565b620008f7608083018962000875565b6200090660a0830188620007d5565b6200091560c0830187620007d5565b81810360e0830152620009298186620007e6565b9050818103610100830152620009408185620007e6565b905062000952610120830184620007d5565b9b9a5050505050505050505050565b600060408201905062000978600083018562000749565b62000987602083018462000875565b9392505050565b600060c082019050620009a5600083018962000749565b620009b4602083018862000875565b620009c3604083018762000875565b620009d2606083018662000875565b8181036080830152620009e68185620007e6565b905081810360a0830152620009fc8184620007e6565b9050979650505050505050565b6000602082019050818103600083015262000a2581846200075a565b905092915050565b6000602082019050818103600083015262000a488162000827565b9050919050565b6000602082019050818103600083015262000a6a816200084e565b9050919050565b600062000a7d62000a90565b905062000a8b828262000be4565b919050565b6000604051905090565b600067ffffffffffffffff82111562000ab85762000ab762000c1a565b5b62000ac38262000c49565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600062000b328262000b39565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600062000b708262000b77565b9050919050565b600062000b848262000b39565b9050919050565b600062000b988262000b59565b9050919050565b82818337600083830152505050565b60005b8381101562000bce57808201518184015260208101905062000bb1565b8381111562000bde576000848401525b50505050565b62000bef8262000c49565b810181811067ffffffffffffffff8211171562000c115762000c1062000c1a565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f496e76616c696420737461746500000000000000000000000000000000000000600082015250565b7f436f6e747269627574696f6e20616d6f756e7420697320746f6f206c6f772021600082015250565b62000cb78162000b25565b811462000cc357600080fd5b50565b6003811062000cd457600080fd5b50565b62000ce28162000b59565b811462000cee57600080fd5b5056fe60806040526000600960006101000a81548160ff0219169083600281111562000051577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b02179055506000600c553480156200006857600080fd5b50604051620029bd380380620029bd83398181016040528101906200008e919062000279565b856000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508460018190555083600281905550826003819055508160079080519060200190620000fb92919062000129565b5080600890805190602001906200011492919062000129565b50600060058190555050505050505062000523565b828054620001379062000414565b90600052602060002090601f0160209004810192826200015b5760008555620001a7565b82601f106200017657805160ff1916838001178555620001a7565b82800160010185558215620001a7579182015b82811115620001a657825182559160200191906001019062000189565b5b509050620001b69190620001ba565b5090565b5b80821115620001d5576000816000905550600101620001bb565b5090565b6000620001f0620001ea846200036a565b62000341565b9050828152602081018484840111156200020957600080fd5b62000216848285620003de565b509392505050565b6000815190506200022f81620004ef565b92915050565b600082601f8301126200024757600080fd5b815162000259848260208601620001d9565b91505092915050565b600081519050620002738162000509565b92915050565b60008060008060008060c087890312156200029357600080fd5b6000620002a389828a016200021e565b9650506020620002b689828a0162000262565b9550506040620002c989828a0162000262565b9450506060620002dc89828a0162000262565b935050608087015167ffffffffffffffff811115620002fa57600080fd5b6200030889828a0162000235565b92505060a087015167ffffffffffffffff8111156200032657600080fd5b6200033489828a0162000235565b9150509295509295509295565b60006200034d62000360565b90506200035b82826200044a565b919050565b6000604051905090565b600067ffffffffffffffff821115620003885762000387620004af565b5b6200039382620004de565b9050602081019050919050565b6000620003ad82620003b4565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b83811015620003fe578082015181840152602081019050620003e1565b838111156200040e576000848401525b50505050565b600060028204905060018216806200042d57607f821691505b6020821081141562000444576200044362000480565b5b50919050565b6200045582620004de565b810181811067ffffffffffffffff82111715620004775762000476620004af565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b620004fa81620003a0565b81146200050657600080fd5b50565b6200051481620003d4565b81146200052057600080fd5b50565b61248a80620005336000396000f3fe60806040526004361061011f5760003560e01c8063937e09b1116100a0578063c19d93fb11610064578063c19d93fb146103bc578063c3e20c9f146103e7578063c59ee1dc14610412578063d5cef1331461043d578063ff3a9c7e146104685761011f565b8063937e09b1146102d1578063992a7dfb146102fc578063a46752ae1461033d578063b40141bf14610366578063b82c86d6146103915761011f565b80634c4cea5a116100e75780634c4cea5a1461020d5780634e695a37146102385780636f9fb98a1461026157806373e888fd1461028c578063752e19f9146102a85761011f565b806302d05d3f1461012457806303c29d581461014f5780631f6d49421461017a57806324274ee9146101b757806329dcb0cf146101e2575b600080fd5b34801561013057600080fd5b5061013961049c565b6040516101469190611a77565b60405180910390f35b34801561015b57600080fd5b506101646104c0565b6040516101719190611bd2565b60405180910390f35b34801561018657600080fd5b506101a1600480360381019061019c9190611761565b61054e565b6040516101ae9190611d6e565b60405180910390f35b3480156101c357600080fd5b506101cc610566565b6040516101d99190611d6e565b60405180910390f35b3480156101ee57600080fd5b506101f761056c565b6040516102049190611d6e565b60405180910390f35b34801561021957600080fd5b50610222610572565b60405161022f9190611d6e565b60405180910390f35b34801561024457600080fd5b5061025f600480360381019061025a91906117f1565b610578565b005b34801561026d57600080fd5b5061027661075d565b6040516102839190611d6e565b60405180910390f35b6102a660048036038101906102a19190611761565b610765565b005b3480156102b457600080fd5b506102cf60048036038101906102ca91906117f1565b6109ca565b005b3480156102dd57600080fd5b506102e6610d25565b6040516102f39190611d6e565b60405180910390f35b34801561030857600080fd5b50610323600480360381019061031e91906117f1565b610d2b565b604051610334959493929190611bf4565b60405180910390f35b34801561034957600080fd5b50610364600480360381019061035f919061178a565b610e16565b005b34801561037257600080fd5b5061037b6110b3565b6040516103889190611d6e565b60405180910390f35b34801561039d57600080fd5b506103a66110b9565b6040516103b39190611d6e565b60405180910390f35b3480156103c857600080fd5b506103d16110bf565b6040516103de9190611bb7565b60405180910390f35b3480156103f357600080fd5b506103fc6110d2565b6040516104099190611bd2565b60405180910390f35b34801561041e57600080fd5b50610427611160565b6040516104349190611d6e565b60405180910390f35b34801561044957600080fd5b50610452611166565b60405161045f9190611b9c565b60405180910390f35b34801561047457600080fd5b5061047d6113ca565b6040516104939a99989796959493929190611a92565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600880546104cd90612070565b80601f01602080910402602001604051908101604052809291908181526020018280546104f990612070565b80156105465780601f1061051b57610100808354040283529160200191610546565b820191906000526020600020905b81548152906001019060200180831161052957829003601f168201915b505050505081565b600a6020528060005260406000206000915090505481565b60065481565b60025481565b60045481565b6000600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054116105fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105f190611d0e565b60405180910390fd5b6000600b60008381526020019081526020016000209050600015158160030160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146106a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069d90611cae565b60405180910390fd5b60018160030160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060018160020160008282546107159190611ee0565b925050819055507fa2925e4595bf873fa82c22a1a89809777347023bf2b502d32710157a5eb8199c338260020154604051610751929190611b3c565b60405180910390a15050565b600047905090565b60008060028111156107a0577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600960009054906101000a900460ff1660028111156107e8577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b14610828576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081f90611cee565b60405180910390fd5b600254421061086c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086390611cce565b60405180910390fd5b6001543410156108b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108a890611d2e565b60405180910390fd5b6000600a60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541415610912576006600081548092919061090c906120d3565b91905055505b34600a60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546109619190611ee0565b92505081905550346005600082825461097a9190611ee0565b925050819055507f5cdc4ab8d637538ead6cc1904d4160343656c8c82bd266635cfd31ac008fffe082346005546040516109b693929190611b65565b60405180910390a16109c6611550565b5050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a58576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4f90611c8e565b60405180910390fd5b6002806002811115610a93577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600960009054906101000a900460ff166002811115610adb577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b14610b1b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b1290611cee565b60405180910390fd5b6002544210610b5f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5690611cce565b60405180910390fd5b6000600b60008481526020019081526020016000209050600015158160040160009054906101000a900460ff16151514610bce576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc590611d4e565b60405180910390fd5b6002600654610bdd9190611f36565b81600201541015610c23576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c1a90611c6e565b60405180910390fd5b8060040160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc82600101549081150290604051600060405180830381858888f19350505050158015610c91573d6000803e3d6000fd5b5060018160040160006101000a81548160ff0219169083151502179055507f2af8d60b878c5e8de57c8ff96e03c6cfab6de26b47e989757345cc1dceaac99883826000018360010154846002015460018660040160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051610d1896959493929190611df1565b60405180910390a1505050565b60015481565b600b602052806000526040600020600091509050806000018054610d4e90612070565b80601f0160208091040260200160405190810160405280929190818152602001828054610d7a90612070565b8015610dc75780601f10610d9c57610100808354040283529160200191610dc7565b820191906000526020600020905b815481529060010190602001808311610daa57829003601f168201915b5050505050908060010154908060020154908060040160009054906101000a900460ff16908060040160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905085565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610ea4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e9b90611c8e565b60405180910390fd5b6002806002811115610edf577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600960009054906101000a900460ff166002811115610f27577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b14610f67576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f5e90611cee565b60405180910390fd5b6002544210610fab576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fa290611cce565b60405180910390fd5b6000600b6000600c5481526020019081526020016000209050600c6000815480929190610fd7906120d3565b919050555084816000019080519060200190610ff4929190611617565b508381600101819055506000816002018190555060008160040160006101000a81548160ff021916908315150217905550828160040160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f9883a4e4f8698e4cc93bafb8d0d2376cb8c51dd322cb9fd80d02c691fcdea503600c548686600080886040516110a496959493929190611d89565b60405180910390a15050505050565b600c5481565b60035481565b600960009054906101000a900460ff1681565b600780546110df90612070565b80601f016020809104026020016040519081016040528092919081815260200182805461110b90612070565b80156111585780601f1061112d57610100808354040283529160200191611158565b820191906000526020600020905b81548152906001019060200180831161113b57829003601f168201915b505050505081565b60055481565b600060018060028111156111a3577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600960009054906101000a900460ff1660028111156111eb577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b1461122b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161122290611cee565b60405180910390fd5b600254421061126f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161126690611cce565b60405180910390fd5b6000600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054116112f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112e890611c4e565b60405180910390fd5b60003390508073ffffffffffffffffffffffffffffffffffffffff166108fc600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549081150290604051600060405180830381858888f1935050505015801561137b573d6000803e3d6000fd5b506000600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060019250505090565b60008060008060008060608060008060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff169950600154985060025497506003549650600454955060055494506007805461142290612070565b80601f016020809104026020016040519081016040528092919081815260200182805461144e90612070565b801561149b5780601f106114705761010080835404028352916020019161149b565b820191906000526020600020905b81548152906001019060200180831161147e57829003601f168201915b50505050509350600880546114af90612070565b80601f01602080910402602001604051908101604052809291908181526020018280546114db90612070565b80156115285780601f106114fd57610100808354040283529160200191611528565b820191906000526020600020905b81548152906001019060200180831161150b57829003601f168201915b50505050509250600960009054906101000a900460ff16915047905090919293949596979899565b600354600554106115b1576002600960006101000a81548160ff021916908360028111156115a7577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b021790555061160e565b60025442111561160d576001600960006101000a81548160ff02191690836002811115611607577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b02179055505b5b42600481905550565b82805461162390612070565b90600052602060002090601f016020900481019282611645576000855561168c565b82601f1061165e57805160ff191683800117855561168c565b8280016001018555821561168c579182015b8281111561168b578251825591602001919060010190611670565b5b509050611699919061169d565b5090565b5b808211156116b657600081600090555060010161169e565b5090565b60006116cd6116c884611e7e565b611e59565b9050828152602081018484840111156116e557600080fd5b6116f084828561202e565b509392505050565b6000813590506117078161240f565b92915050565b60008135905061171c81612426565b92915050565b600082601f83011261173357600080fd5b81356117438482602086016116ba565b91505092915050565b60008135905061175b8161243d565b92915050565b60006020828403121561177357600080fd5b6000611781848285016116f8565b91505092915050565b60008060006060848603121561179f57600080fd5b600084013567ffffffffffffffff8111156117b957600080fd5b6117c586828701611722565b93505060206117d68682870161174c565b92505060406117e78682870161170d565b9150509250925092565b60006020828403121561180357600080fd5b60006118118482850161174c565b91505092915050565b61182381611fd4565b82525050565b61183281611f79565b82525050565b61184181611f67565b82525050565b61185081611f8b565b82525050565b61185f81611fe6565b82525050565b61186e81611ff8565b82525050565b600061187f82611ec4565b6118898185611ecf565b935061189981856020860161203d565b6118a281612207565b840191505092915050565b600081546118ba81612070565b6118c48186611ecf565b945060018216600081146118df57600181146118f157611924565b60ff1983168652602086019350611924565b6118fa85611eaf565b60005b8381101561191c578154818901526001820191506020810190506118fd565b808801955050505b50505092915050565b600061193a602583611ecf565b915061194582612218565b604082019050919050565b600061195d603a83611ecf565b915061196882612267565b604082019050919050565b6000611980603183611ecf565b915061198b826122b6565b604082019050919050565b60006119a3601783611ecf565b91506119ae82612305565b602082019050919050565b60006119c6601483611ecf565b91506119d18261232e565b602082019050919050565b60006119e9600d83611ecf565b91506119f482612357565b602082019050919050565b6000611a0c601b83611ecf565b9150611a1782612380565b602082019050919050565b6000611a2f602083611ecf565b9150611a3a826123a9565b602082019050919050565b6000611a52601983611ecf565b9150611a5d826123d2565b602082019050919050565b611a7181611fca565b82525050565b6000602082019050611a8c6000830184611829565b92915050565b600061014082019050611aa8600083018d611829565b611ab5602083018c611a68565b611ac2604083018b611a68565b611acf606083018a611a68565b611adc6080830189611a68565b611ae960a0830188611a68565b81810360c0830152611afb8187611874565b905081810360e0830152611b0f8186611874565b9050611b1f610100830185611856565b611b2d610120830184611a68565b9b9a5050505050505050505050565b6000604082019050611b516000830185611838565b611b5e6020830184611a68565b9392505050565b6000606082019050611b7a6000830186611838565b611b876020830185611a68565b611b946040830184611a68565b949350505050565b6000602082019050611bb16000830184611847565b92915050565b6000602082019050611bcc6000830184611856565b92915050565b60006020820190508181036000830152611bec8184611874565b905092915050565b600060a0820190508181036000830152611c0e8188611874565b9050611c1d6020830187611a68565b611c2a6040830186611a68565b611c376060830185611847565b611c446080830184611829565b9695505050505050565b60006020820190508181036000830152611c678161192d565b9050919050565b60006020820190508181036000830152611c8781611950565b9050919050565b60006020820190508181036000830152611ca781611973565b9050919050565b60006020820190508181036000830152611cc781611996565b9050919050565b60006020820190508181036000830152611ce7816119b9565b9050919050565b60006020820190508181036000830152611d07816119dc565b9050919050565b60006020820190508181036000830152611d27816119ff565b9050919050565b60006020820190508181036000830152611d4781611a22565b9050919050565b60006020820190508181036000830152611d6781611a45565b9050919050565b6000602082019050611d836000830184611a68565b92915050565b600060c082019050611d9e6000830189611a68565b8181036020830152611db08188611874565b9050611dbf6040830187611a68565b611dcc6060830186611865565b611dd96080830185611847565b611de660a083018461181a565b979650505050505050565b600060c082019050611e066000830189611a68565b8181036020830152611e1881886118ad565b9050611e276040830187611a68565b611e346060830186611a68565b611e416080830185611847565b611e4e60a083018461181a565b979650505050505050565b6000611e63611e74565b9050611e6f82826120a2565b919050565b6000604051905090565b600067ffffffffffffffff821115611e9957611e986121d8565b5b611ea282612207565b9050602081019050919050565b60008190508160005260206000209050919050565b600081519050919050565b600082825260208201905092915050565b6000611eeb82611fca565b9150611ef683611fca565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611f2b57611f2a61211c565b5b828201905092915050565b6000611f4182611fca565b9150611f4c83611fca565b925082611f5c57611f5b61214b565b5b828204905092915050565b6000611f7282611faa565b9050919050565b6000611f8482611faa565b9050919050565b60008115159050919050565b6000819050611fa5826123fb565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000611fdf8261200a565b9050919050565b6000611ff182611f97565b9050919050565b600061200382611fca565b9050919050565b60006120158261201c565b9050919050565b600061202782611faa565b9050919050565b82818337600083830152505050565b60005b8381101561205b578082015181840152602081019050612040565b8381111561206a576000848401525b50505050565b6000600282049050600182168061208857607f821691505b6020821081141561209c5761209b6121a9565b5b50919050565b6120ab82612207565b810181811067ffffffffffffffff821117156120ca576120c96121d8565b5b80604052505050565b60006120de82611fca565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156121115761211061211c565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f596f7520646f206e6f742068617665206120636f6e747269627574656420616d60008201527f6f756e7421000000000000000000000000000000000000000000000000000000602082015250565b7f4174206c6561737420353025206f6620636f6e7472696275746f7273206e656560008201527f6420746f20766f746520666f7220746869732072657175657374000000000000602082015250565b7f596f7520646f206e6f7420686176652061636365737320746f20706572666f7260008201527f6d2074686973206f7065726174696f6e21000000000000000000000000000000602082015250565b7f596f75206861766520616c726561647920766f74656421000000000000000000600082015250565b7f446561646c696e65206861732070617373656421000000000000000000000000600082015250565b7f496e76616c696420737461746500000000000000000000000000000000000000600082015250565b7f4f6e6c7920636f6e7472696275746f72732063616e20766f7465210000000000600082015250565b7f436f6e747269627574696f6e20616d6f756e7420697320746f6f206c6f772021600082015250565b7f5265717565737420616c726561647920636f6d706c6574656400000000000000600082015250565b6003811061240c5761240b61217a565b5b50565b61241881611f67565b811461242357600080fd5b50565b61242f81611f79565b811461243a57600080fd5b50565b61244681611fca565b811461245157600080fd5b5056fea2646970667358221220eedd29c8c97a011182089d321988b1f425d10c5138bc13aa5304f1d4dfeaa13564736f6c63430008040033a264697066735822122038e376544fff5b6aabb3bb7c07be8b4dc5cc17d7aafe7a3e0446b27828fb361364736f6c63430008040033","deployedBytecode":"0x608060405260043610620000385760003560e01c806373e888fd146200003d57806385b6e28e146200005d578063a429078b146200008d575b600080fd5b6200005b6004803603810190620000559190620005f7565b620000bb565b005b3480156200006a57600080fd5b50620000756200038c565b60405162000084919062000a09565b60405180910390f35b3480156200009a57600080fd5b50620000b96004803603810190620000b391906200067b565b6200041c565b005b60008173ffffffffffffffffffffffffffffffffffffffff1663937e09b16040518163ffffffff1660e01b815260040160206040518083038186803b1580156200010457600080fd5b505afa15801562000119573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200013f91906200064f565b905060008273ffffffffffffffffffffffffffffffffffffffff1663c19d93fb6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200018a57600080fd5b505afa1580156200019f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001c5919062000623565b90506000600281111562000202577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8160028111156200023c577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b146200027f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002769062000a2d565b60405180910390fd5b81341015620002c5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002bc9062000a4f565b60405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff166373e888fd34336040518363ffffffff1660e01b815260040162000301919062000886565b6000604051808303818588803b1580156200031b57600080fd5b505af115801562000330573d6000803e3d6000fd5b50505050503373ffffffffffffffffffffffffffffffffffffffff167f0829c5c9dc5d14e41b11cfca0f01f76eba69b648ddcf9f84afba16ba8a76bf1c84346040516200037f92919062000961565b60405180910390a2505050565b606060008054806020026020016040519081016040528092919081815260200182805480156200041257602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311620003c7575b5050505050905090565b600033868686868660405162000432906200051b565b62000443969594939291906200098e565b604051809103906000f08015801562000460573d6000803e3d6000fd5b5090506000819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f73cc6512e7ecc537961f06c435b8c36be561c23851b3c990165a8cd7968dc6c681338888886000808a8a60006040516200050b9a99989796959493929190620008a3565b60405180910390a1505050505050565b6129bd8062000cf283390190565b6000620005406200053a8462000a9a565b62000a71565b9050828152602081018484840111156200055957600080fd5b6200056684828562000b9f565b509392505050565b6000813590506200057f8162000cac565b92915050565b600081519050620005968162000cc6565b92915050565b600082601f830112620005ae57600080fd5b8135620005c084826020860162000529565b91505092915050565b600081359050620005da8162000cd7565b92915050565b600081519050620005f18162000cd7565b92915050565b6000602082840312156200060a57600080fd5b60006200061a848285016200056e565b91505092915050565b6000602082840312156200063657600080fd5b6000620006468482850162000585565b91505092915050565b6000602082840312156200066257600080fd5b60006200067284828501620005e0565b91505092915050565b600080600080600060a086880312156200069457600080fd5b6000620006a488828901620005c9565b9550506020620006b788828901620005c9565b9450506040620006ca88828901620005c9565b935050606086013567ffffffffffffffff811115620006e857600080fd5b620006f6888289016200059c565b925050608086013567ffffffffffffffff8111156200071457600080fd5b62000722888289016200059c565b9150509295509295909350565b60006200073d8383620007c4565b60208301905092915050565b620007548162000b25565b82525050565b6000620007678262000ae0565b62000773818562000b03565b9350620007808362000ad0565b8060005b83811015620007b75781516200079b88826200072f565b9750620007a88362000af6565b92505060018101905062000784565b5085935050505092915050565b620007cf8162000b63565b82525050565b620007e08162000b8b565b82525050565b6000620007f38262000aeb565b620007ff818562000b14565b93506200081181856020860162000bae565b6200081c8162000c49565b840191505092915050565b600062000836600d8362000b14565b9150620008438262000c5a565b602082019050919050565b60006200085d60208362000b14565b91506200086a8262000c83565b602082019050919050565b620008808162000b59565b82525050565b60006020820190506200089d600083018462000749565b92915050565b600061014082019050620008bb600083018d62000749565b620008ca602083018c62000749565b620008d9604083018b62000875565b620008e8606083018a62000875565b620008f7608083018962000875565b6200090660a0830188620007d5565b6200091560c0830187620007d5565b81810360e0830152620009298186620007e6565b9050818103610100830152620009408185620007e6565b905062000952610120830184620007d5565b9b9a5050505050505050505050565b600060408201905062000978600083018562000749565b62000987602083018462000875565b9392505050565b600060c082019050620009a5600083018962000749565b620009b4602083018862000875565b620009c3604083018762000875565b620009d2606083018662000875565b8181036080830152620009e68185620007e6565b905081810360a0830152620009fc8184620007e6565b9050979650505050505050565b6000602082019050818103600083015262000a2581846200075a565b905092915050565b6000602082019050818103600083015262000a488162000827565b9050919050565b6000602082019050818103600083015262000a6a816200084e565b9050919050565b600062000a7d62000a90565b905062000a8b828262000be4565b919050565b6000604051905090565b600067ffffffffffffffff82111562000ab85762000ab762000c1a565b5b62000ac38262000c49565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600062000b328262000b39565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600062000b708262000b77565b9050919050565b600062000b848262000b39565b9050919050565b600062000b988262000b59565b9050919050565b82818337600083830152505050565b60005b8381101562000bce57808201518184015260208101905062000bb1565b8381111562000bde576000848401525b50505050565b62000bef8262000c49565b810181811067ffffffffffffffff8211171562000c115762000c1062000c1a565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f496e76616c696420737461746500000000000000000000000000000000000000600082015250565b7f436f6e747269627574696f6e20616d6f756e7420697320746f6f206c6f772021600082015250565b62000cb78162000b25565b811462000cc357600080fd5b50565b6003811062000cd457600080fd5b50565b62000ce28162000b59565b811462000cee57600080fd5b5056fe60806040526000600960006101000a81548160ff0219169083600281111562000051577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b02179055506000600c553480156200006857600080fd5b50604051620029bd380380620029bd83398181016040528101906200008e919062000279565b856000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508460018190555083600281905550826003819055508160079080519060200190620000fb92919062000129565b5080600890805190602001906200011492919062000129565b50600060058190555050505050505062000523565b828054620001379062000414565b90600052602060002090601f0160209004810192826200015b5760008555620001a7565b82601f106200017657805160ff1916838001178555620001a7565b82800160010185558215620001a7579182015b82811115620001a657825182559160200191906001019062000189565b5b509050620001b69190620001ba565b5090565b5b80821115620001d5576000816000905550600101620001bb565b5090565b6000620001f0620001ea846200036a565b62000341565b9050828152602081018484840111156200020957600080fd5b62000216848285620003de565b509392505050565b6000815190506200022f81620004ef565b92915050565b600082601f8301126200024757600080fd5b815162000259848260208601620001d9565b91505092915050565b600081519050620002738162000509565b92915050565b60008060008060008060c087890312156200029357600080fd5b6000620002a389828a016200021e565b9650506020620002b689828a0162000262565b9550506040620002c989828a0162000262565b9450506060620002dc89828a0162000262565b935050608087015167ffffffffffffffff811115620002fa57600080fd5b6200030889828a0162000235565b92505060a087015167ffffffffffffffff8111156200032657600080fd5b6200033489828a0162000235565b9150509295509295509295565b60006200034d62000360565b90506200035b82826200044a565b919050565b6000604051905090565b600067ffffffffffffffff821115620003885762000387620004af565b5b6200039382620004de565b9050602081019050919050565b6000620003ad82620003b4565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b83811015620003fe578082015181840152602081019050620003e1565b838111156200040e576000848401525b50505050565b600060028204905060018216806200042d57607f821691505b6020821081141562000444576200044362000480565b5b50919050565b6200045582620004de565b810181811067ffffffffffffffff82111715620004775762000476620004af565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b620004fa81620003a0565b81146200050657600080fd5b50565b6200051481620003d4565b81146200052057600080fd5b50565b61248a80620005336000396000f3fe60806040526004361061011f5760003560e01c8063937e09b1116100a0578063c19d93fb11610064578063c19d93fb146103bc578063c3e20c9f146103e7578063c59ee1dc14610412578063d5cef1331461043d578063ff3a9c7e146104685761011f565b8063937e09b1146102d1578063992a7dfb146102fc578063a46752ae1461033d578063b40141bf14610366578063b82c86d6146103915761011f565b80634c4cea5a116100e75780634c4cea5a1461020d5780634e695a37146102385780636f9fb98a1461026157806373e888fd1461028c578063752e19f9146102a85761011f565b806302d05d3f1461012457806303c29d581461014f5780631f6d49421461017a57806324274ee9146101b757806329dcb0cf146101e2575b600080fd5b34801561013057600080fd5b5061013961049c565b6040516101469190611a77565b60405180910390f35b34801561015b57600080fd5b506101646104c0565b6040516101719190611bd2565b60405180910390f35b34801561018657600080fd5b506101a1600480360381019061019c9190611761565b61054e565b6040516101ae9190611d6e565b60405180910390f35b3480156101c357600080fd5b506101cc610566565b6040516101d99190611d6e565b60405180910390f35b3480156101ee57600080fd5b506101f761056c565b6040516102049190611d6e565b60405180910390f35b34801561021957600080fd5b50610222610572565b60405161022f9190611d6e565b60405180910390f35b34801561024457600080fd5b5061025f600480360381019061025a91906117f1565b610578565b005b34801561026d57600080fd5b5061027661075d565b6040516102839190611d6e565b60405180910390f35b6102a660048036038101906102a19190611761565b610765565b005b3480156102b457600080fd5b506102cf60048036038101906102ca91906117f1565b6109ca565b005b3480156102dd57600080fd5b506102e6610d25565b6040516102f39190611d6e565b60405180910390f35b34801561030857600080fd5b50610323600480360381019061031e91906117f1565b610d2b565b604051610334959493929190611bf4565b60405180910390f35b34801561034957600080fd5b50610364600480360381019061035f919061178a565b610e16565b005b34801561037257600080fd5b5061037b6110b3565b6040516103889190611d6e565b60405180910390f35b34801561039d57600080fd5b506103a66110b9565b6040516103b39190611d6e565b60405180910390f35b3480156103c857600080fd5b506103d16110bf565b6040516103de9190611bb7565b60405180910390f35b3480156103f357600080fd5b506103fc6110d2565b6040516104099190611bd2565b60405180910390f35b34801561041e57600080fd5b50610427611160565b6040516104349190611d6e565b60405180910390f35b34801561044957600080fd5b50610452611166565b60405161045f9190611b9c565b60405180910390f35b34801561047457600080fd5b5061047d6113ca565b6040516104939a99989796959493929190611a92565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600880546104cd90612070565b80601f01602080910402602001604051908101604052809291908181526020018280546104f990612070565b80156105465780601f1061051b57610100808354040283529160200191610546565b820191906000526020600020905b81548152906001019060200180831161052957829003601f168201915b505050505081565b600a6020528060005260406000206000915090505481565b60065481565b60025481565b60045481565b6000600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054116105fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105f190611d0e565b60405180910390fd5b6000600b60008381526020019081526020016000209050600015158160030160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146106a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069d90611cae565b60405180910390fd5b60018160030160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060018160020160008282546107159190611ee0565b925050819055507fa2925e4595bf873fa82c22a1a89809777347023bf2b502d32710157a5eb8199c338260020154604051610751929190611b3c565b60405180910390a15050565b600047905090565b60008060028111156107a0577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600960009054906101000a900460ff1660028111156107e8577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b14610828576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081f90611cee565b60405180910390fd5b600254421061086c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086390611cce565b60405180910390fd5b6001543410156108b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108a890611d2e565b60405180910390fd5b6000600a60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541415610912576006600081548092919061090c906120d3565b91905055505b34600a60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546109619190611ee0565b92505081905550346005600082825461097a9190611ee0565b925050819055507f5cdc4ab8d637538ead6cc1904d4160343656c8c82bd266635cfd31ac008fffe082346005546040516109b693929190611b65565b60405180910390a16109c6611550565b5050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a58576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4f90611c8e565b60405180910390fd5b6002806002811115610a93577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600960009054906101000a900460ff166002811115610adb577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b14610b1b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b1290611cee565b60405180910390fd5b6002544210610b5f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5690611cce565b60405180910390fd5b6000600b60008481526020019081526020016000209050600015158160040160009054906101000a900460ff16151514610bce576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc590611d4e565b60405180910390fd5b6002600654610bdd9190611f36565b81600201541015610c23576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c1a90611c6e565b60405180910390fd5b8060040160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc82600101549081150290604051600060405180830381858888f19350505050158015610c91573d6000803e3d6000fd5b5060018160040160006101000a81548160ff0219169083151502179055507f2af8d60b878c5e8de57c8ff96e03c6cfab6de26b47e989757345cc1dceaac99883826000018360010154846002015460018660040160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051610d1896959493929190611df1565b60405180910390a1505050565b60015481565b600b602052806000526040600020600091509050806000018054610d4e90612070565b80601f0160208091040260200160405190810160405280929190818152602001828054610d7a90612070565b8015610dc75780601f10610d9c57610100808354040283529160200191610dc7565b820191906000526020600020905b815481529060010190602001808311610daa57829003601f168201915b5050505050908060010154908060020154908060040160009054906101000a900460ff16908060040160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905085565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610ea4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e9b90611c8e565b60405180910390fd5b6002806002811115610edf577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600960009054906101000a900460ff166002811115610f27577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b14610f67576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f5e90611cee565b60405180910390fd5b6002544210610fab576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fa290611cce565b60405180910390fd5b6000600b6000600c5481526020019081526020016000209050600c6000815480929190610fd7906120d3565b919050555084816000019080519060200190610ff4929190611617565b508381600101819055506000816002018190555060008160040160006101000a81548160ff021916908315150217905550828160040160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f9883a4e4f8698e4cc93bafb8d0d2376cb8c51dd322cb9fd80d02c691fcdea503600c548686600080886040516110a496959493929190611d89565b60405180910390a15050505050565b600c5481565b60035481565b600960009054906101000a900460ff1681565b600780546110df90612070565b80601f016020809104026020016040519081016040528092919081815260200182805461110b90612070565b80156111585780601f1061112d57610100808354040283529160200191611158565b820191906000526020600020905b81548152906001019060200180831161113b57829003601f168201915b505050505081565b60055481565b600060018060028111156111a3577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600960009054906101000a900460ff1660028111156111eb577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b1461122b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161122290611cee565b60405180910390fd5b600254421061126f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161126690611cce565b60405180910390fd5b6000600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054116112f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112e890611c4e565b60405180910390fd5b60003390508073ffffffffffffffffffffffffffffffffffffffff166108fc600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549081150290604051600060405180830381858888f1935050505015801561137b573d6000803e3d6000fd5b506000600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060019250505090565b60008060008060008060608060008060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff169950600154985060025497506003549650600454955060055494506007805461142290612070565b80601f016020809104026020016040519081016040528092919081815260200182805461144e90612070565b801561149b5780601f106114705761010080835404028352916020019161149b565b820191906000526020600020905b81548152906001019060200180831161147e57829003601f168201915b50505050509350600880546114af90612070565b80601f01602080910402602001604051908101604052809291908181526020018280546114db90612070565b80156115285780601f106114fd57610100808354040283529160200191611528565b820191906000526020600020905b81548152906001019060200180831161150b57829003601f168201915b50505050509250600960009054906101000a900460ff16915047905090919293949596979899565b600354600554106115b1576002600960006101000a81548160ff021916908360028111156115a7577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b021790555061160e565b60025442111561160d576001600960006101000a81548160ff02191690836002811115611607577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b02179055505b5b42600481905550565b82805461162390612070565b90600052602060002090601f016020900481019282611645576000855561168c565b82601f1061165e57805160ff191683800117855561168c565b8280016001018555821561168c579182015b8281111561168b578251825591602001919060010190611670565b5b509050611699919061169d565b5090565b5b808211156116b657600081600090555060010161169e565b5090565b60006116cd6116c884611e7e565b611e59565b9050828152602081018484840111156116e557600080fd5b6116f084828561202e565b509392505050565b6000813590506117078161240f565b92915050565b60008135905061171c81612426565b92915050565b600082601f83011261173357600080fd5b81356117438482602086016116ba565b91505092915050565b60008135905061175b8161243d565b92915050565b60006020828403121561177357600080fd5b6000611781848285016116f8565b91505092915050565b60008060006060848603121561179f57600080fd5b600084013567ffffffffffffffff8111156117b957600080fd5b6117c586828701611722565b93505060206117d68682870161174c565b92505060406117e78682870161170d565b9150509250925092565b60006020828403121561180357600080fd5b60006118118482850161174c565b91505092915050565b61182381611fd4565b82525050565b61183281611f79565b82525050565b61184181611f67565b82525050565b61185081611f8b565b82525050565b61185f81611fe6565b82525050565b61186e81611ff8565b82525050565b600061187f82611ec4565b6118898185611ecf565b935061189981856020860161203d565b6118a281612207565b840191505092915050565b600081546118ba81612070565b6118c48186611ecf565b945060018216600081146118df57600181146118f157611924565b60ff1983168652602086019350611924565b6118fa85611eaf565b60005b8381101561191c578154818901526001820191506020810190506118fd565b808801955050505b50505092915050565b600061193a602583611ecf565b915061194582612218565b604082019050919050565b600061195d603a83611ecf565b915061196882612267565b604082019050919050565b6000611980603183611ecf565b915061198b826122b6565b604082019050919050565b60006119a3601783611ecf565b91506119ae82612305565b602082019050919050565b60006119c6601483611ecf565b91506119d18261232e565b602082019050919050565b60006119e9600d83611ecf565b91506119f482612357565b602082019050919050565b6000611a0c601b83611ecf565b9150611a1782612380565b602082019050919050565b6000611a2f602083611ecf565b9150611a3a826123a9565b602082019050919050565b6000611a52601983611ecf565b9150611a5d826123d2565b602082019050919050565b611a7181611fca565b82525050565b6000602082019050611a8c6000830184611829565b92915050565b600061014082019050611aa8600083018d611829565b611ab5602083018c611a68565b611ac2604083018b611a68565b611acf606083018a611a68565b611adc6080830189611a68565b611ae960a0830188611a68565b81810360c0830152611afb8187611874565b905081810360e0830152611b0f8186611874565b9050611b1f610100830185611856565b611b2d610120830184611a68565b9b9a5050505050505050505050565b6000604082019050611b516000830185611838565b611b5e6020830184611a68565b9392505050565b6000606082019050611b7a6000830186611838565b611b876020830185611a68565b611b946040830184611a68565b949350505050565b6000602082019050611bb16000830184611847565b92915050565b6000602082019050611bcc6000830184611856565b92915050565b60006020820190508181036000830152611bec8184611874565b905092915050565b600060a0820190508181036000830152611c0e8188611874565b9050611c1d6020830187611a68565b611c2a6040830186611a68565b611c376060830185611847565b611c446080830184611829565b9695505050505050565b60006020820190508181036000830152611c678161192d565b9050919050565b60006020820190508181036000830152611c8781611950565b9050919050565b60006020820190508181036000830152611ca781611973565b9050919050565b60006020820190508181036000830152611cc781611996565b9050919050565b60006020820190508181036000830152611ce7816119b9565b9050919050565b60006020820190508181036000830152611d07816119dc565b9050919050565b60006020820190508181036000830152611d27816119ff565b9050919050565b60006020820190508181036000830152611d4781611a22565b9050919050565b60006020820190508181036000830152611d6781611a45565b9050919050565b6000602082019050611d836000830184611a68565b92915050565b600060c082019050611d9e6000830189611a68565b8181036020830152611db08188611874565b9050611dbf6040830187611a68565b611dcc6060830186611865565b611dd96080830185611847565b611de660a083018461181a565b979650505050505050565b600060c082019050611e066000830189611a68565b8181036020830152611e1881886118ad565b9050611e276040830187611a68565b611e346060830186611a68565b611e416080830185611847565b611e4e60a083018461181a565b979650505050505050565b6000611e63611e74565b9050611e6f82826120a2565b919050565b6000604051905090565b600067ffffffffffffffff821115611e9957611e986121d8565b5b611ea282612207565b9050602081019050919050565b60008190508160005260206000209050919050565b600081519050919050565b600082825260208201905092915050565b6000611eeb82611fca565b9150611ef683611fca565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611f2b57611f2a61211c565b5b828201905092915050565b6000611f4182611fca565b9150611f4c83611fca565b925082611f5c57611f5b61214b565b5b828204905092915050565b6000611f7282611faa565b9050919050565b6000611f8482611faa565b9050919050565b60008115159050919050565b6000819050611fa5826123fb565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000611fdf8261200a565b9050919050565b6000611ff182611f97565b9050919050565b600061200382611fca565b9050919050565b60006120158261201c565b9050919050565b600061202782611faa565b9050919050565b82818337600083830152505050565b60005b8381101561205b578082015181840152602081019050612040565b8381111561206a576000848401525b50505050565b6000600282049050600182168061208857607f821691505b6020821081141561209c5761209b6121a9565b5b50919050565b6120ab82612207565b810181811067ffffffffffffffff821117156120ca576120c96121d8565b5b80604052505050565b60006120de82611fca565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156121115761211061211c565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f596f7520646f206e6f742068617665206120636f6e747269627574656420616d60008201527f6f756e7421000000000000000000000000000000000000000000000000000000602082015250565b7f4174206c6561737420353025206f6620636f6e7472696275746f7273206e656560008201527f6420746f20766f746520666f7220746869732072657175657374000000000000602082015250565b7f596f7520646f206e6f7420686176652061636365737320746f20706572666f7260008201527f6d2074686973206f7065726174696f6e21000000000000000000000000000000602082015250565b7f596f75206861766520616c726561647920766f74656421000000000000000000600082015250565b7f446561646c696e65206861732070617373656421000000000000000000000000600082015250565b7f496e76616c696420737461746500000000000000000000000000000000000000600082015250565b7f4f6e6c7920636f6e7472696275746f72732063616e20766f7465210000000000600082015250565b7f436f6e747269627574696f6e20616d6f756e7420697320746f6f206c6f772021600082015250565b7f5265717565737420616c726561647920636f6d706c6574656400000000000000600082015250565b6003811061240c5761240b61217a565b5b50565b61241881611f67565b811461242357600080fd5b50565b61242f81611f79565b811461243a57600080fd5b50565b61244681611fca565b811461245157600080fd5b5056fea2646970667358221220eedd29c8c97a011182089d321988b1f425d10c5138bc13aa5304f1d4dfeaa13564736f6c63430008040033a264697066735822122038e376544fff5b6aabb3bb7c07be8b4dc5cc17d7aafe7a3e0446b27828fb361364736f6c63430008040033","linkReferences":{},"deployedLinkReferences":{}}');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvZGFzaGJvYXJkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsTUFBTVUsVUFBVSxHQUFJQyxLQUFELElBQVc7QUFDNUIsTUFBSUEsS0FBSyxLQUFLLGFBQWQsRUFBNkIsT0FBTyxhQUFQO0FBQzdCLE1BQUlBLEtBQUssS0FBSyxTQUFkLEVBQXlCLE9BQU8sWUFBUDtBQUN6QixTQUFPLGdCQUFQO0FBQ0QsQ0FKRDs7QUFNQSxNQUFNQyxhQUFhLEdBQUcsQ0FBQztBQUFFQyxFQUFBQSxLQUFGO0FBQVNDLEVBQUFBO0FBQVQsQ0FBRCxLQUFxQztBQUN6RCxRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJmLCtDQUFRLENBQUMsS0FBRCxDQUExQztBQUNBLFFBQU07QUFBQSxPQUFDZ0IsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JqQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBcEM7QUFDQSxRQUFNa0IsUUFBUSxHQUFHaEIsd0RBQVcsRUFBNUI7QUFDQSxRQUFNaUIsb0JBQW9CLEdBQUdoQix3REFBVyxDQUFDTyxLQUFLLElBQUlBLEtBQUssQ0FBQ1UsY0FBTixDQUFxQkMsUUFBL0IsQ0FBeEM7QUFDQSxRQUFNQyxPQUFPLEdBQUduQix3REFBVyxDQUFDTyxLQUFLLElBQUlBLEtBQUssQ0FBQ2EsV0FBTixDQUFrQkQsT0FBNUIsQ0FBM0I7QUFDQSxRQUFNRSxJQUFJLEdBQUdyQix3REFBVyxDQUFDTyxLQUFLLElBQUlBLEtBQUssQ0FBQ2EsV0FBTixDQUFrQkUsVUFBNUIsQ0FBeEI7O0FBRUEsUUFBTUMsZ0JBQWdCLEdBQUcsQ0FBQ0MsU0FBRCxFQUFZQyxlQUFaLEtBQWdDO0FBQ3ZELFVBQU1DLGFBQWEsR0FBR0MsVUFBVSxDQUFDZCxNQUFELENBQWhDOztBQUVBLFFBQUllLEtBQUssQ0FBQ0YsYUFBRCxDQUFMLElBQXdCQSxhQUFhLEdBQUdELGVBQTVDLEVBQTZEO0FBQzNEcEIsTUFBQUEsZ0VBQVUsQ0FBRSxrQ0FBaUNvQixlQUFnQixNQUFuRCxDQUFWO0FBQ0E7QUFDRDs7QUFFRGIsSUFBQUEsWUFBWSxDQUFDWSxTQUFELENBQVo7QUFDQSxVQUFNSyxrQkFBa0IsR0FBRzFCLDBEQUFVLENBQUN1QixhQUFELENBQXJDO0FBRUEsVUFBTUksSUFBSSxHQUFHO0FBQ1hDLE1BQUFBLGVBQWUsRUFBRVAsU0FETjtBQUVYWCxNQUFBQSxNQUFNLEVBQUVnQixrQkFGRztBQUdYVixNQUFBQSxPQUFPLEVBQUVBO0FBSEUsS0FBYjs7QUFNQSxVQUFNYSxTQUFTLEdBQUcsTUFBTTtBQUN0QnBCLE1BQUFBLFlBQVksQ0FBQyxLQUFELENBQVo7QUFDQUUsTUFBQUEsU0FBUyxDQUFDLEVBQUQsQ0FBVDtBQUNBVixNQUFBQSxrRUFBWSxDQUFFLDRCQUEyQnNCLGFBQWMsTUFBM0MsQ0FBWjtBQUNELEtBSkQ7O0FBTUEsVUFBTU8sT0FBTyxHQUFJQyxPQUFELElBQWE7QUFDM0J0QixNQUFBQSxZQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0FQLE1BQUFBLGdFQUFVLENBQUM2QixPQUFELENBQVY7QUFDRCxLQUhEOztBQUtBakMsSUFBQUEsK0RBQVUsQ0FBQ2Usb0JBQUQsRUFBdUJjLElBQXZCLEVBQTZCZixRQUE3QixFQUF1Q2lCLFNBQXZDLEVBQWtEQyxPQUFsRCxDQUFWO0FBQ0QsR0E3QkQ7O0FBK0JBLFFBQU1FLGtCQUFrQixHQUFJWCxTQUFELElBQWU7QUFDeEMsVUFBTUUsYUFBYSxHQUFHQyxVQUFVLENBQUNkLE1BQUQsQ0FBaEM7O0FBRUEsUUFBSWUsS0FBSyxDQUFDRixhQUFELENBQUwsSUFBd0JBLGFBQWEsSUFBSSxDQUE3QyxFQUFnRDtBQUM5Q3JCLE1BQUFBLGdFQUFVLENBQUUsc0NBQUYsQ0FBVjtBQUNBO0FBQ0Q7O0FBRURPLElBQUFBLFlBQVksQ0FBQ1ksU0FBRCxDQUFaO0FBQ0EsVUFBTUssa0JBQWtCLEdBQUcxQiwwREFBVSxDQUFDdUIsYUFBRCxDQUFyQztBQUVBLFVBQU1JLElBQUksR0FBRztBQUNYTSxNQUFBQSxXQUFXLEVBQUcsR0FBRVYsYUFBYyw2QkFEbkI7QUFFWGIsTUFBQUEsTUFBTSxFQUFFZ0Isa0JBRkc7QUFHWFEsTUFBQUEsU0FBUyxFQUFFbEIsT0FIQTtBQUlYQSxNQUFBQSxPQUFPLEVBQUVBO0FBSkUsS0FBYjs7QUFPQSxVQUFNYSxTQUFTLEdBQUlGLElBQUQsSUFBVTtBQUMxQmxCLE1BQUFBLFlBQVksQ0FBQyxLQUFELENBQVo7QUFDQUUsTUFBQUEsU0FBUyxDQUFDLEVBQUQsQ0FBVDtBQUNBLFVBQUlKLG9CQUFKLEVBQTBCQSxvQkFBb0IsQ0FBQ29CLElBQUQsQ0FBcEI7QUFDMUIxQixNQUFBQSxrRUFBWSxDQUFFLHNDQUFxQ3NCLGFBQWMsTUFBckQsQ0FBWjtBQUNELEtBTEQ7O0FBT0EsVUFBTU8sT0FBTyxHQUFJQyxPQUFELElBQWE7QUFDM0J0QixNQUFBQSxZQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0FQLE1BQUFBLGdFQUFVLENBQUM2QixPQUFELENBQVY7QUFDRCxLQUhEOztBQUtBaEMsSUFBQUEsMEVBQXFCLENBQUNtQixJQUFELEVBQU9HLFNBQVAsRUFBa0JNLElBQWxCLEVBQXdCRSxTQUF4QixFQUFtQ0MsT0FBbkMsQ0FBckI7QUFDRCxHQS9CRDs7QUFpQ0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsb0NBQWY7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRyxVQUFTM0IsVUFBVSxDQUFDRyxLQUFLLENBQUNGLEtBQVAsQ0FBYyxFQUFsRDtBQUFBLGdCQUFzREUsS0FBSyxDQUFDRjtBQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBR0UsOERBQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUcsb0JBQW1CRSxLQUFLLENBQUM2QixPQUFRLEVBQTlDO0FBQUEsNkJBQ0U7QUFBSSxpQkFBUyxFQUFDLG1GQUFkO0FBQUEsa0JBQW1HN0IsS0FBSyxDQUFDOEI7QUFBekc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFPRTtBQUFHLGVBQVMsRUFBQyxpREFBYjtBQUFBLGdCQUFnRTlCLEtBQUssQ0FBQzJCO0FBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEYsZUFTRTtBQUFLLGVBQVMsRUFBQywyQkFBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxpQ0FBZjtBQUFBLGdDQUNFO0FBQUcsbUJBQVMsRUFBQyx1Q0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUcsbUJBQVMsRUFBQyw0Q0FBYjtBQUFBLHFCQUEyRDNCLEtBQUssQ0FBQytCLFVBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQUdFO0FBQUcsbUJBQVMsRUFBQyx1Q0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRixlQUlFO0FBQUcsbUJBQVMsRUFBQyw0Q0FBYjtBQUFBLG9CQUEyRC9CLEtBQUssQ0FBQ2dDO0FBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBUUU7QUFBSyxpQkFBUyxFQUFDLGlDQUFmO0FBQUEsa0JBQ0doQyxLQUFLLENBQUNGLEtBQU4sS0FBZ0IsWUFBaEIsZ0JBQ0M7QUFBQSxrQ0FDRTtBQUFPLHFCQUFTLEVBQUMscUNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBRUU7QUFBSyxxQkFBUyxFQUFDLGVBQWY7QUFBQSxvQ0FDRTtBQUNFLGtCQUFJLEVBQUMsUUFEUDtBQUVFLGtCQUFJLEVBQUMsS0FGUDtBQUdFLHlCQUFXLEVBQUMsV0FIZDtBQUlFLG1CQUFLLEVBQUVNLE1BSlQ7QUFLRSxzQkFBUSxFQUFHNkIsQ0FBRCxJQUFPNUIsU0FBUyxDQUFDNEIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FMNUI7QUFNRSxzQkFBUSxFQUFFakMsU0FBUyxLQUFLRixLQUFLLENBQUM2QixPQU5oQztBQU9FLHVCQUFTLEVBQUM7QUFQWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBVUU7QUFDRSx1QkFBUyxFQUFDLFFBRFo7QUFFRSxxQkFBTyxFQUFFLE1BQU1mLGdCQUFnQixDQUFDZCxLQUFLLENBQUM2QixPQUFQLEVBQWdCN0IsS0FBSyxDQUFDZ0IsZUFBdEIsQ0FGakM7QUFHRSxzQkFBUSxFQUFFZCxTQUFTLEtBQUtGLEtBQUssQ0FBQzZCLE9BSGhDO0FBQUEsd0JBS0czQixTQUFTLEtBQUtGLEtBQUssQ0FBQzZCLE9BQXBCLEdBQThCLFlBQTlCLEdBQTZDO0FBTGhEO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGLGVBb0JFO0FBQUcscUJBQVMsRUFBQyxzQkFBYjtBQUFBLG9DQUNFO0FBQU0sdUJBQVMsRUFBQyxXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERiwrQkFDb0U3QixLQUFLLENBQUNnQixlQUQxRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBcEJGO0FBQUEsd0JBREQsZ0JBMEJDO0FBQUEsa0NBQ0U7QUFBRyxxQkFBUyxFQUFDLHVDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBRUU7QUFBRyxxQkFBUyxFQUFDLDRDQUFiO0FBQUEsdUJBQTJEaEIsS0FBSyxDQUFDb0MsZUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGLEVBSUdwQyxLQUFLLENBQUNxQyxPQUFOLEtBQWtCM0IsT0FBbEIsaUJBQ0M7QUFBQSxvQ0FDRTtBQUFPLHVCQUFTLEVBQUMscUNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBRUU7QUFBSyx1QkFBUyxFQUFDLGVBQWY7QUFBQSxzQ0FDRTtBQUNFLG9CQUFJLEVBQUMsUUFEUDtBQUVFLG9CQUFJLEVBQUMsS0FGUDtBQUdFLDJCQUFXLEVBQUMsV0FIZDtBQUlFLHFCQUFLLEVBQUVOLE1BSlQ7QUFLRSx3QkFBUSxFQUFHNkIsQ0FBRCxJQUFPNUIsU0FBUyxDQUFDNEIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FMNUI7QUFNRSx3QkFBUSxFQUFFakMsU0FBUyxLQUFLRixLQUFLLENBQUM2QixPQU5oQztBQU9FLHlCQUFTLEVBQUM7QUFQWjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLGVBVUU7QUFDRSx5QkFBUyxFQUFDLFFBRFo7QUFFRSx1QkFBTyxFQUFFLE1BQU1ILGtCQUFrQixDQUFDMUIsS0FBSyxDQUFDNkIsT0FBUCxDQUZuQztBQUdFLHdCQUFRLEVBQUUzQixTQUFTLEtBQUtGLEtBQUssQ0FBQzZCLE9BSGhDO0FBQUEsMEJBS0czQixTQUFTLEtBQUtGLEtBQUssQ0FBQzZCLE9BQXBCLEdBQThCLFlBQTlCLEdBQTZDO0FBTGhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGO0FBQUEsMEJBTEo7QUFBQTtBQTNCSjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFURixFQTRFRzdCLEtBQUssQ0FBQ0YsS0FBTixLQUFnQixZQUFoQixpQkFDQztBQUFLLGVBQVMsRUFBQyxpQ0FBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxVQUFmO0FBQTBCLGFBQUssRUFBRTtBQUFFd0MsVUFBQUEsS0FBSyxFQUFHLEdBQUV0QyxLQUFLLENBQUN1QyxRQUFTO0FBQTNCLFNBQWpDO0FBQUEsbUJBQW1FdkMsS0FBSyxDQUFDdUMsUUFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE3RUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFvRkQsQ0E1SkQ7O0FBOEpBLGlFQUFleEMsYUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0tBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLE1BQU00QyxhQUFhLEdBQUcsTUFBTTtBQUV4QixRQUFNcEMsb0JBQW9CLEdBQUdoQix3REFBVyxDQUFDTyxLQUFLLElBQUVBLEtBQUssQ0FBQ1UsY0FBTixDQUFxQkMsUUFBN0IsQ0FBeEM7QUFDQSxRQUFNQyxPQUFPLEdBQUduQix3REFBVyxDQUFDTyxLQUFLLElBQUVBLEtBQUssQ0FBQ2EsV0FBTixDQUFrQkQsT0FBMUIsQ0FBM0I7QUFDQSxRQUFNRSxJQUFJLEdBQUdyQix3REFBVyxDQUFDTyxLQUFLLElBQUVBLEtBQUssQ0FBQ2EsV0FBTixDQUFrQkUsVUFBMUIsQ0FBeEI7QUFFQSxRQUFNUCxRQUFRLEdBQUdoQix3REFBVyxFQUE1QjtBQUVBLFFBQU07QUFBQSxPQUFDd0MsS0FBRDtBQUFBLE9BQU9jO0FBQVAsTUFBbUJ4RCwrQ0FBUSxDQUFDLEVBQUQsQ0FBakM7QUFDQSxRQUFNO0FBQUEsT0FBQ3VDLFdBQUQ7QUFBQSxPQUFha0I7QUFBYixNQUErQnpELCtDQUFRLENBQUMsRUFBRCxDQUE3QztBQUNBLFFBQU07QUFBQSxPQUFDMEQsMEJBQUQ7QUFBQSxPQUE0QkM7QUFBNUIsTUFBNkQzRCwrQ0FBUSxDQUFDLEVBQUQsQ0FBM0U7QUFDQSxRQUFNO0FBQUEsT0FBQzRELHlCQUFEO0FBQUEsT0FBMkJDO0FBQTNCLE1BQTJEN0QsK0NBQVEsQ0FBQyxFQUFELENBQXpFO0FBQ0EsUUFBTTtBQUFBLE9BQUM0QyxRQUFEO0FBQUEsT0FBVWtCO0FBQVYsTUFBeUI5RCwrQ0FBUSxDQUFDLEVBQUQsQ0FBdkM7QUFDQSxRQUFNO0FBQUEsT0FBQytELFVBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTZCaEUsK0NBQVEsQ0FBQyxLQUFELENBQTNDOztBQUdBLFFBQU1pRSxRQUFRLEdBQUlwQixDQUFELElBQU07QUFDcEJBLElBQUFBLENBQUMsQ0FBQ3FCLGNBQUY7QUFDQUYsSUFBQUEsYUFBYSxDQUFDLElBQUQsQ0FBYjtBQUNBLFVBQU1HLFFBQVEsR0FBR2QsNkNBQU0sQ0FBQ1QsUUFBRCxDQUFOLENBQWlCd0IsT0FBakIsRUFBakI7O0FBRUEsVUFBTWpDLFNBQVMsR0FBRyxNQUFLO0FBQ3RCNkIsTUFBQUEsYUFBYSxDQUFDLEtBQUQsQ0FBYjtBQUNBUixNQUFBQSxRQUFRLENBQUMsRUFBRCxDQUFSO0FBQ0FDLE1BQUFBLGNBQWMsQ0FBQyxFQUFELENBQWQ7QUFDQUUsTUFBQUEsNkJBQTZCLENBQUMsRUFBRCxDQUE3QjtBQUNBRSxNQUFBQSw0QkFBNEIsQ0FBQyxFQUFELENBQTVCO0FBQ0FDLE1BQUFBLFdBQVcsQ0FBQyxFQUFELENBQVg7QUFDQXZELE1BQUFBLGtFQUFZLENBQUMseUJBQUQsQ0FBWjtBQUNELEtBUkE7O0FBVUEsVUFBTTZCLE9BQU8sR0FBSWlDLEtBQUQsSUFBVTtBQUN4QkwsTUFBQUEsYUFBYSxDQUFDLEtBQUQsQ0FBYjtBQUNBeEQsTUFBQUEsZ0VBQVUsQ0FBQzZELEtBQUQsQ0FBVjtBQUNELEtBSEQ7O0FBS0EsVUFBTXBDLElBQUksR0FBRztBQUNacUMsTUFBQUEsbUJBQW1CLEVBQUNoRSwwREFBVSxDQUFDc0QseUJBQUQsQ0FEbEI7QUFFWmhCLE1BQUFBLFFBQVEsRUFBQzJCLE1BQU0sQ0FBQ0osUUFBRCxDQUZIO0FBR1pLLE1BQUFBLGtCQUFrQixFQUFDbEUsMERBQVUsQ0FBQ29ELDBCQUFELENBSGpCO0FBSVplLE1BQUFBLFlBQVksRUFBQy9CLEtBSkQ7QUFLWmdDLE1BQUFBLFdBQVcsRUFBQ25DLFdBTEE7QUFNWmpCLE1BQUFBLE9BQU8sRUFBQ0E7QUFOSSxLQUFiO0FBU0FnQyxJQUFBQSxxRUFBZ0IsQ0FBQzlCLElBQUQsRUFBTUwsb0JBQU4sRUFBMkJjLElBQTNCLEVBQWdDRSxTQUFoQyxFQUEwQ0MsT0FBMUMsRUFBa0RsQixRQUFsRCxDQUFoQjtBQUNGLEdBOUJEOztBQWdDRixzQkFDRTtBQUFBLDRCQUNJO0FBQUksZUFBUyxFQUFDLDZCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBTSxjQUFRLEVBQUcyQixDQUFELElBQUtvQixRQUFRLENBQUNwQixDQUFELENBQTdCO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFDLG1CQUFmO0FBQUEsZ0NBQ0k7QUFBTyxtQkFBUyxFQUFDLHVCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJO0FBQU8sY0FBSSxFQUFDLE1BQVo7QUFBbUIscUJBQVcsRUFBQyxXQUEvQjtBQUEyQyxtQkFBUyxFQUFDLDhEQUFyRDtBQUFvSCxlQUFLLEVBQUVILEtBQTNIO0FBQWtJLGtCQUFRLEVBQUdHLENBQUQsSUFBS1csUUFBUSxDQUFDWCxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUF6SjtBQUEySyxrQkFBUTtBQUFuTDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUtJO0FBQUssaUJBQVMsRUFBQyxtQkFBZjtBQUFBLGdDQUNJO0FBQU8sbUJBQVMsRUFBQyx1QkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFFSTtBQUFVLHFCQUFXLEVBQUMsV0FBdEI7QUFBa0MsbUJBQVMsRUFBQyw4REFBNUM7QUFBMkcsZUFBSyxFQUFFUixXQUFsSDtBQUErSCxrQkFBUSxFQUFHTSxDQUFELElBQUtZLGNBQWMsQ0FBQ1osQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBNUo7QUFBOEssa0JBQVE7QUFBdEw7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEosZUFTSTtBQUFLLGlCQUFTLEVBQUMsbUJBQWY7QUFBQSxnQ0FDSTtBQUFPLG1CQUFTLEVBQUMsdUJBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUk7QUFBTyxjQUFJLEVBQUMsUUFBWjtBQUFxQixxQkFBVyxFQUFDLFdBQWpDO0FBQTZDLG1CQUFTLEVBQUMsOERBQXZEO0FBQXNILGVBQUssRUFBRVcsMEJBQTdIO0FBQXlKLGtCQUFRLEVBQUdiLENBQUQsSUFBS2MsNkJBQTZCLENBQUNkLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQXJNO0FBQXVOLGtCQUFRO0FBQS9OO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRKLGVBYUk7QUFBSyxpQkFBUyxFQUFDLG1CQUFmO0FBQUEsZ0NBQ0k7QUFBTyxtQkFBUyxFQUFDLHVCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJO0FBQU8sY0FBSSxFQUFDLFFBQVo7QUFBcUIscUJBQVcsRUFBQyxXQUFqQztBQUE2QyxtQkFBUyxFQUFDLDhEQUF2RDtBQUFzSCxlQUFLLEVBQUVhLHlCQUE3SDtBQUF3SixrQkFBUSxFQUFHZixDQUFELElBQUtnQiw0QkFBNEIsQ0FBQ2hCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQW5NO0FBQXFOLGtCQUFRO0FBQTdOO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWJKLGVBaUJJO0FBQUssaUJBQVMsRUFBQywrQkFBZjtBQUFBLGdDQUNJO0FBQU8sbUJBQVMsRUFBQyx1QkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFFSTtBQUFPLGNBQUksRUFBQyxNQUFaO0FBQW1CLHFCQUFXLEVBQUMsV0FBL0I7QUFBMkMsbUJBQVMsRUFBQyw4REFBckQ7QUFBb0gsZUFBSyxFQUFFSCxRQUEzSDtBQUFxSSxrQkFBUSxFQUFHQyxDQUFELElBQUtpQixXQUFXLENBQUNqQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUEvSjtBQUFpTCxrQkFBUTtBQUF6TDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFqQkosZUFzQkk7QUFBUSxpQkFBUyxFQUFDLGtFQUFsQjtBQUFxRixnQkFBUSxFQUFFZ0IsVUFBL0Y7QUFBQSxrQkFBNkdBLFVBQVUsR0FBQyxZQUFELEdBQWM7QUFBckk7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF0Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUEsa0JBREY7QUE2QkQsQ0E3RUQ7O0FBK0VBLGlFQUFlUixhQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RGQTs7O0FBRUEsTUFBTW9CLE1BQU0sR0FBRyxNQUFNO0FBQ25CLHNCQUNFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQSwyQkFDSTtBQUFLLFVBQUksRUFBQyxRQUFWO0FBQW1CLGVBQVMsRUFBQyxpRkFBN0I7QUFBK0csYUFBTyxFQUFDLGFBQXZIO0FBQXFJLFVBQUksRUFBQyxNQUExSTtBQUFpSixXQUFLLEVBQUMsNEJBQXZKO0FBQUEsOEJBQ0k7QUFBTSxTQUFDLEVBQUMsOFdBQVI7QUFBdVgsWUFBSSxFQUFDO0FBQTVYO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFNLFNBQUMsRUFBQywra0JBQVI7QUFBd2xCLFlBQUksRUFBQztBQUE3bEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFRRCxDQVREOztBQVdBLGlFQUFlQSxNQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxNQUFNRSxNQUFNLEdBQUcsTUFBTTtBQUVqQixRQUFNQyxNQUFNLEdBQUdGLHNEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLFFBQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXlCaEYsK0NBQVEsQ0FBQyxLQUFELENBQXZDO0FBQ0EsUUFBTXNCLE9BQU8sR0FBR25CLHdEQUFXLENBQUNPLEtBQUssSUFBRUEsS0FBSyxDQUFDYSxXQUFOLENBQWtCRCxPQUExQixDQUEzQjtBQUVGLHNCQUNFO0FBQUEsMkJBRUk7QUFBSyxlQUFTLEVBQUMsY0FBZjtBQUFBLDhCQUNBO0FBQUssaUJBQVMsRUFBQyx3Q0FBZjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQyxpREFBZjtBQUFBLGtDQUNBO0FBQUsscUJBQVMsRUFBQyx1REFBZjtBQUFBLG1DQUVJO0FBQVEsa0JBQUksRUFBQyxRQUFiO0FBQXNCLHVCQUFTLEVBQUMsNEtBQWhDO0FBQTZNLCtCQUFjLGFBQTNOO0FBQXlPLCtCQUFjLE9BQXZQO0FBQStQLHFCQUFPLEVBQUUsTUFBSTBELFdBQVcsQ0FBQyxDQUFDRCxRQUFGLENBQXZSO0FBQUEsc0NBQ0E7QUFBTSx5QkFBUyxFQUFDLFNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURBLGVBRUE7QUFBRyx5QkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURBLGVBUUE7QUFBSyxxQkFBUyxFQUFDLDJFQUFmO0FBQUEsb0NBQ0k7QUFBSyx1QkFBUyxFQUFDLGlDQUFmO0FBQUEscUNBQ007QUFBSSx5QkFBUyxFQUFDLHdEQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRE47QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixlQUlJO0FBQUssdUJBQVMsRUFBQyx5QkFBZjtBQUFBLHFDQUNBO0FBQUsseUJBQVMsRUFBQyxnQkFBZjtBQUFBLHdDQUNJLDhEQUFDLGtEQUFEO0FBQU0sc0JBQUksRUFBQyxZQUFYO0FBQUEseUNBQTBCO0FBQU0sNkJBQVMsRUFBRyxHQUFFRCxNQUFNLENBQUNHLFFBQVAsS0FBb0IsWUFBcEIsR0FBaUMsY0FBakMsR0FBZ0QsRUFBRywrR0FBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFESixlQUVJLDhEQUFDLGtEQUFEO0FBQU0sc0JBQUksRUFBQyxtQkFBWDtBQUFBLHlDQUErQjtBQUFNLDZCQUFTLEVBQUcsR0FBRUgsTUFBTSxDQUFDRyxRQUFQLEtBQW9CLG1CQUFwQixHQUF3QyxjQUF4QyxHQUF1RCxFQUFHLCtHQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVJBLGVBbUJBO0FBQUsscUJBQVMsRUFBQywyRkFBZjtBQUFBLG9DQUNJO0FBQVEsa0JBQUksRUFBQyxRQUFiO0FBQXNCLHVCQUFTLEVBQUMsNkRBQWhDO0FBQUEscUNBQ0U7QUFBQSwwQkFBUTNEO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosZUFNSTtBQUFLLHVCQUFTLEVBQUMsZUFBZjtBQUFBLHFDQUNBO0FBQUEsdUNBQ0k7QUFBUSxzQkFBSSxFQUFDLFFBQWI7QUFBc0IsMkJBQVMsRUFBQywyR0FBaEM7QUFBNEksb0JBQUUsRUFBQyxrQkFBL0k7QUFBa0ssbUNBQWMsT0FBaEw7QUFBd0wsbUNBQWMsTUFBdE07QUFBQSwwQ0FDQTtBQUFNLDZCQUFTLEVBQUMsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREEsZUFFQTtBQUFLLDZCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFuQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEQSxlQXdDQTtBQUFLLGlCQUFTLEVBQUcsYUFBWSxDQUFDeUQsUUFBRCxHQUFVLFFBQVYsR0FBbUIsRUFBRyxFQUFuRDtBQUFzRCxVQUFFLEVBQUMsYUFBekQ7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsMEJBQWY7QUFBQSxrQ0FDQTtBQUFHLGdCQUFJLEVBQUMsR0FBUjtBQUFZLHFCQUFTLEVBQUMsMEVBQXRCO0FBQWlHLDRCQUFhLE1BQTlHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURBLGVBR0E7QUFBRyxnQkFBSSxFQUFDLEdBQVI7QUFBWSxxQkFBUyxFQUFDLGlHQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFIQSxlQUtBO0FBQUcsZ0JBQUksRUFBQyxHQUFSO0FBQVkscUJBQVMsRUFBQyxpR0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEEsZUFPQTtBQUFHLGdCQUFJLEVBQUMsR0FBUjtBQUFZLHFCQUFTLEVBQUMsaUdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBeENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQTBERCxDQWhFRDs7QUFrRUEsaUVBQWVGLE1BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkVBO0FBQ0E7OztBQUVPLE1BQU1NLG1CQUFtQixHQUFJQyxJQUFELElBQVM7QUFDMUMsTUFBSXJDLEtBQUo7O0FBQ0EsYUFBbUMsRUFFbEM7O0FBQ0QsU0FBT0EsS0FBUDtBQUNELENBTk07O0FBUVAsTUFBTXdDLFdBQVcsR0FBSUMsZ0JBQUQsSUFBc0I7QUFDeEM7QUFDQSxTQUFRNUUsS0FBRCxJQUFXO0FBRWhCO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDSSx3QkFDRTtBQUFBLDhCQUNFLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSw4REFBQyxnQkFBRCxvQkFBc0JBLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQSxvQkFERixDQVRZLENBZWhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNELEdBdEJEO0FBdUJELENBekJEOztBQTJCQSxpRUFBZTJFLFdBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFFTyxNQUFNRyxVQUFVLEdBQUlDLEdBQUQsSUFBUztBQUNqQyxTQUFPbkUseURBQUEsQ0FBbUJtRSxHQUFHLENBQUNHLFFBQUosRUFBbkIsRUFBbUMsT0FBbkMsQ0FBUDtBQUNELENBRk07QUFJQSxNQUFNeEYsVUFBVSxHQUFJcUYsR0FBRCxJQUFTO0FBQ2pDLFFBQU1JLEdBQUcsR0FBRyxPQUFPSixHQUFQLEtBQWUsUUFBZixHQUEwQkEsR0FBMUIsR0FBZ0NBLEdBQUcsQ0FBQ0csUUFBSixFQUE1QyxDQURpQyxDQUMyQjs7QUFDNUQsUUFBTUUsR0FBRyxHQUFHeEUsdURBQUEsQ0FBaUJ1RSxHQUFqQixFQUFzQixPQUF0QixDQUFaO0FBQ0EsU0FBT0MsR0FBUDtBQUNELENBSk07QUFNQSxNQUFNRSxVQUFVLEdBQUkvQixRQUFELElBQWM7QUFDdEMsU0FBT2QsNkNBQU0sQ0FBQ2MsUUFBRCxDQUFOLENBQWlCZ0MsTUFBakIsQ0FBd0IsWUFBeEIsQ0FBUDtBQUNELENBRk07QUFJQSxNQUFNekYsS0FBSyxHQUFHLENBQUMsYUFBRCxFQUFnQixTQUFoQixFQUEyQixZQUEzQixDQUFkO0FBRUEsTUFBTTBGLG9CQUFvQixHQUFHLENBQUNuRSxJQUFELEVBQU9DLGVBQVAsS0FBMkI7QUFDN0QsUUFBTW1FLGFBQWEsR0FBRztBQUNwQjVELElBQUFBLE9BQU8sRUFBRVAsZUFEVztBQUVwQmUsSUFBQUEsT0FBTyxFQUFFaEIsSUFBRixhQUFFQSxJQUFGLHVCQUFFQSxJQUFJLENBQUVxRSxjQUZLO0FBR3BCdEQsSUFBQUEsZUFBZSxFQUFFZixJQUFJLENBQUNzRSxPQUFMLEdBQWViLFVBQVUsQ0FBQ3pELElBQUksQ0FBQ3NFLE9BQU4sQ0FBekIsR0FBMEMsQ0FIdkM7QUFJcEI3RCxJQUFBQSxLQUFLLEVBQUVULElBQUksQ0FBQ1MsS0FKUTtBQUtwQkgsSUFBQUEsV0FBVyxFQUFFTixJQUFJLENBQUN1RSxJQUxFO0FBTXBCNUUsSUFBQUEsZUFBZSxFQUFFOEQsVUFBVSxDQUFDekQsSUFBSSxDQUFDTCxlQUFOLENBTlA7QUFPcEJlLElBQUFBLFVBQVUsRUFBRStDLFVBQVUsQ0FBQ3pELElBQUksQ0FBQ1UsVUFBTixDQVBGO0FBUXBCOEQsSUFBQUEsYUFBYSxFQUFFZixVQUFVLENBQUN6RCxJQUFJLENBQUN3RSxhQUFOLENBUkw7QUFTcEIvRixJQUFBQSxLQUFLLEVBQUVBLEtBQUssQ0FBQzZELE1BQU0sQ0FBQ3RDLElBQUksQ0FBQ3lFLFlBQU4sQ0FBUCxDQVRRO0FBVXBCOUQsSUFBQUEsUUFBUSxFQUFFc0QsVUFBVSxDQUFDM0IsTUFBTSxDQUFDdEMsSUFBSSxDQUFDMEUsZUFBTixDQUFQLENBVkE7QUFXcEJ4RCxJQUFBQSxRQUFRLEVBQUV5RCxJQUFJLENBQUNDLEtBQUwsQ0FBWXRDLE1BQU0sQ0FBQ21CLFVBQVUsQ0FBQ3pELElBQUksQ0FBQ3dFLGFBQU4sQ0FBWCxDQUFOLEdBQXlDbEMsTUFBTSxDQUFDbUIsVUFBVSxDQUFDekQsSUFBSSxDQUFDVSxVQUFOLENBQVgsQ0FBaEQsR0FBaUYsR0FBNUY7QUFYVSxHQUF0QjtBQWFBLFNBQU8wRCxhQUFQO0FBQ0QsQ0FmTTs7QUFpQlAsTUFBTVMsMEJBQTBCLEdBQUlDLGFBQUQsSUFBbUI7QUFDcEQsU0FBT0EsYUFBYSxDQUFDQyxHQUFkLENBQWtCL0UsSUFBSSxLQUFLO0FBQ2hDZ0YsSUFBQUEsY0FBYyxFQUFFaEYsSUFBSSxDQUFDaUYsWUFBTCxDQUFrQkQsY0FERjtBQUVoQ0UsSUFBQUEsV0FBVyxFQUFFbEYsSUFBSSxDQUFDaUYsWUFBTCxDQUFrQkMsV0FGQztBQUdoQ25HLElBQUFBLE1BQU0sRUFBRXVELE1BQU0sQ0FBQ21CLFVBQVUsQ0FBQ3pELElBQUksQ0FBQ2lGLFlBQUwsQ0FBa0JFLGlCQUFuQixDQUFYO0FBSGtCLEdBQUwsQ0FBdEIsQ0FBUDtBQUtELENBTkQ7O0FBUU8sTUFBTUMsMEJBQTBCLEdBQUlOLGFBQUQsSUFBbUI7QUFDM0QsUUFBTU8sZ0JBQWdCLEdBQUdSLDBCQUEwQixDQUFDQyxhQUFELENBQW5EO0FBQ0EsU0FBT08sZ0JBQVA7QUFDRCxDQUhNOztBQUtQLE1BQU1DLGtCQUFrQixHQUFJUixhQUFELElBQW1CO0FBQzVDLFNBQU9BLGFBQWEsQ0FBQ0MsR0FBZCxDQUFrQi9FLElBQUksS0FBSztBQUNoQ2tGLElBQUFBLFdBQVcsRUFBRWxGLElBQUksQ0FBQ2lGLFlBQUwsQ0FBa0JDLFdBREM7QUFFaENuRyxJQUFBQSxNQUFNLEVBQUV1RCxNQUFNLENBQUNtQixVQUFVLENBQUN6RCxJQUFJLENBQUNpRixZQUFMLENBQWtCbEcsTUFBbkIsQ0FBWDtBQUZrQixHQUFMLENBQXRCLENBQVA7QUFJRCxDQUxEOztBQU9PLE1BQU13RyxpQkFBaUIsR0FBSVQsYUFBRCxJQUFtQjtBQUNsRCxRQUFNVSxlQUFlLEdBQUdGLGtCQUFrQixDQUFDUixhQUFELENBQTFDOztBQUNBLFFBQU1XLGdCQUFnQixHQUFHakMsaURBQUEsQ0FDdkJBLHFEQUFBLENBQVVnQyxlQUFWLEVBQTJCLGFBQTNCLENBRHVCLEVBRXZCLENBQUNHLENBQUQsRUFBSW5GLE9BQUosTUFBaUI7QUFBRTBFLElBQUFBLFdBQVcsRUFBRTFFLE9BQWY7QUFBd0J6QixJQUFBQSxNQUFNLEVBQUV5RSxtREFBQSxDQUFRbUMsQ0FBUixFQUFXLFFBQVg7QUFBaEMsR0FBakIsQ0FGdUIsQ0FBekI7O0FBSUEsU0FBT0YsZ0JBQVA7QUFDRCxDQVBNO0FBU0EsTUFBTUksNEJBQTRCLEdBQUk3RixJQUFELElBQVU7QUFDcEQsU0FBTztBQUNMOEYsSUFBQUEsU0FBUyxFQUFFOUYsSUFBSSxDQUFDOEYsU0FEWDtBQUVMQyxJQUFBQSxTQUFTLEVBQUUvRixJQUFJLENBQUNnRyxTQUZYO0FBR0xqSCxJQUFBQSxNQUFNLEVBQUUwRSxVQUFVLENBQUN6RCxJQUFJLENBQUNqQixNQUFOLENBSGI7QUFJTGtILElBQUFBLE1BQU0sRUFBRWpHLElBQUksQ0FBQ2tHLFdBQUwsR0FBbUIsV0FBbkIsR0FBaUMsU0FKcEM7QUFLTDNCLElBQUFBLElBQUksRUFBRXZFLElBQUksQ0FBQ00sV0FMTjtBQU1MNkYsSUFBQUEsU0FBUyxFQUFFbkcsSUFBSSxDQUFDb0c7QUFOWCxHQUFQO0FBUUQsQ0FUTTtBQVdBLE1BQU1DLGlCQUFpQixHQUFHLE1BQU9uRyxTQUFQLElBQXFCO0FBQ3BELE1BQUlvRyxNQUFNLENBQUNDLFFBQVgsRUFBcUI7QUFDbkJELElBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0I7QUFBRUMsTUFBQUEsTUFBTSxFQUFFO0FBQVYsS0FBeEIsRUFDR0MsSUFESCxDQUNRQyxHQUFHLElBQUk7QUFDWHpHLE1BQUFBLFNBQVM7QUFDVixLQUhILEVBR0swRyxLQUhMLENBR1d4RSxLQUFLLElBQUk7QUFDaEJ5RSxNQUFBQSxLQUFLLENBQUN6RSxLQUFLLENBQUNoQyxPQUFQLENBQUw7QUFDRCxLQUxIO0FBTUQsR0FQRCxNQU9PO0FBQ0xrRyxJQUFBQSxNQUFNLENBQUNPLEtBQVAsQ0FDRSxxRUFERjtBQUdEO0FBQ0YsQ0FiTTtBQWVBLE1BQU1DLDRCQUE0QixHQUFHLE1BQU07QUFDaERSLEVBQUFBLE1BQU0sQ0FBQ1MsUUFBUCxDQUFnQkMsTUFBaEI7QUFDRCxDQUZNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RlA7QUFHTyxNQUFNMUksWUFBWSxHQUFJNEksR0FBRCxJQUFRO0FBQ2hDRCxFQUFBQSx5REFBQSxDQUFjQyxHQUFkLEVBQW1CO0FBQ2ZFLElBQUFBLFFBQVEsRUFBRSxXQURLO0FBRWZDLElBQUFBLFNBQVMsRUFBRSxJQUZJO0FBR2ZDLElBQUFBLGVBQWUsRUFBRSxLQUhGO0FBSWZDLElBQUFBLFlBQVksRUFBRSxJQUpDO0FBS2ZDLElBQUFBLFlBQVksRUFBRSxJQUxDO0FBTWZDLElBQUFBLFNBQVMsRUFBRSxJQU5JO0FBT2Z2RyxJQUFBQSxRQUFRLEVBQUV3RztBQVBLLEdBQW5CO0FBU0gsQ0FWTTtBQVlBLE1BQU1uSixVQUFVLEdBQUkySSxHQUFELElBQVE7QUFDOUJELEVBQUFBLHVEQUFBLENBQVlDLEdBQVosRUFBaUI7QUFDYkUsSUFBQUEsUUFBUSxFQUFFLFdBREc7QUFFYkMsSUFBQUEsU0FBUyxFQUFFLElBRkU7QUFHYkMsSUFBQUEsZUFBZSxFQUFFLEtBSEo7QUFJYkMsSUFBQUEsWUFBWSxFQUFFLElBSkQ7QUFLYkMsSUFBQUEsWUFBWSxFQUFFLElBTEQ7QUFNYkMsSUFBQUEsU0FBUyxFQUFFLElBTkU7QUFPYnZHLElBQUFBLFFBQVEsRUFBRXdHO0FBUEcsR0FBakI7QUFTSCxDQVZNOzs7Ozs7Ozs7OztBQ2ZNOztBQUNiQyw4Q0FBNkM7QUFDekM3RyxFQUFBQSxLQUFLLEVBQUU7QUFEa0MsQ0FBN0M7QUFHQStHLGVBQUEsR0FBa0IsS0FBSyxDQUF2Qjs7QUFDQSxJQUFJRSxNQUFNLEdBQUdDLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLG9CQUFELENBQVIsQ0FBbkM7O0FBQ0EsSUFBSUMsT0FBTyxHQUFHRCxtQkFBTyxDQUFDLHlGQUFELENBQXJCOztBQUNBLElBQUlFLFFBQVEsR0FBR0YsbUJBQU8sQ0FBQywyREFBRCxDQUF0Qjs7QUFDQSxJQUFJRyxnQkFBZ0IsR0FBR0gsbUJBQU8sQ0FBQywrRUFBRCxDQUE5Qjs7QUFDQSxTQUFTRCxzQkFBVCxDQUFnQ0ssR0FBaEMsRUFBcUM7QUFDakMsU0FBT0EsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVgsR0FBd0JELEdBQXhCLEdBQThCO0FBQ2pDUCxJQUFBQSxPQUFPLEVBQUVPO0FBRHdCLEdBQXJDO0FBR0g7O0FBQ0QsTUFBTUUsVUFBVSxHQUFHLEVBQW5COztBQUVBLFNBQVNDLFFBQVQsQ0FBa0IzRixNQUFsQixFQUEwQjRGLElBQTFCLEVBQWdDQyxFQUFoQyxFQUFvQ0MsT0FBcEMsRUFBNkM7QUFDekMsTUFBSSxJQUFKLEVBQThDO0FBQzlDLE1BQUksQ0FBQyxDQUFDLEdBQUdULE9BQUosRUFBYVUsVUFBYixDQUF3QkgsSUFBeEIsQ0FBTCxFQUFvQyxPQUZLLENBR3pDO0FBQ0E7QUFDQTtBQUNBOztBQUNBNUYsRUFBQUEsTUFBTSxDQUFDMkYsUUFBUCxDQUFnQkMsSUFBaEIsRUFBc0JDLEVBQXRCLEVBQTBCQyxPQUExQixFQUFtQy9CLEtBQW5DLENBQTBDaUMsR0FBRCxJQUFPO0FBQzVDLGNBQTJDO0FBQ3ZDO0FBQ0EsWUFBTUEsR0FBTjtBQUNIO0FBQ0osR0FMRDtBQU1BLFFBQU1DLFNBQVMsR0FBR0gsT0FBTyxJQUFJLE9BQU9BLE9BQU8sQ0FBQ0ksTUFBZixLQUEwQixXQUFyQyxHQUFtREosT0FBTyxDQUFDSSxNQUEzRCxHQUFvRWxHLE1BQU0sSUFBSUEsTUFBTSxDQUFDa0csTUFBdkcsQ0FieUMsQ0FjekM7O0FBQ0FSLEVBQUFBLFVBQVUsQ0FBQ0UsSUFBSSxHQUFHLEdBQVAsR0FBYUMsRUFBYixJQUFtQkksU0FBUyxHQUFHLE1BQU1BLFNBQVQsR0FBcUIsRUFBakQsQ0FBRCxDQUFWLEdBQW1FLElBQW5FO0FBQ0g7O0FBQ0QsU0FBU0UsZUFBVCxDQUF5QkMsS0FBekIsRUFBZ0M7QUFDNUIsUUFBTTtBQUFFcEksSUFBQUE7QUFBRixNQUFjb0ksS0FBSyxDQUFDQyxhQUExQjtBQUNBLFNBQU9ySSxNQUFNLElBQUlBLE1BQU0sS0FBSyxPQUFyQixJQUFnQ29JLEtBQUssQ0FBQ0UsT0FBdEMsSUFBaURGLEtBQUssQ0FBQ0csT0FBdkQsSUFBa0VILEtBQUssQ0FBQ0ksUUFBeEUsSUFBb0ZKLEtBQUssQ0FBQ0ssTUFBMUYsSUFBb0dMLEtBQUssQ0FBQ00sV0FBTixJQUFxQk4sS0FBSyxDQUFDTSxXQUFOLENBQWtCQyxLQUFsQixLQUE0QixDQUE1SjtBQUNIOztBQUNELFNBQVNDLFdBQVQsQ0FBcUI3SSxDQUFyQixFQUF3QmlDLE1BQXhCLEVBQWdDNEYsSUFBaEMsRUFBc0NDLEVBQXRDLEVBQTBDZ0IsT0FBMUMsRUFBbURDLE9BQW5ELEVBQTREQyxNQUE1RCxFQUFvRWIsTUFBcEUsRUFBNEU7QUFDeEUsUUFBTTtBQUFFYyxJQUFBQTtBQUFGLE1BQWdCakosQ0FBQyxDQUFDc0ksYUFBeEI7O0FBQ0EsTUFBSVcsUUFBUSxLQUFLLEdBQWIsS0FBcUJiLGVBQWUsQ0FBQ3BJLENBQUQsQ0FBZixJQUFzQixDQUFDLENBQUMsR0FBR3NILE9BQUosRUFBYVUsVUFBYixDQUF3QkgsSUFBeEIsQ0FBNUMsQ0FBSixFQUFnRjtBQUM1RTtBQUNBO0FBQ0g7O0FBQ0Q3SCxFQUFBQSxDQUFDLENBQUNxQixjQUFGLEdBTndFLENBT3hFOztBQUNBLE1BQUkySCxNQUFNLElBQUksSUFBVixJQUFrQmxCLEVBQUUsQ0FBQ29CLE9BQUgsQ0FBVyxHQUFYLEtBQW1CLENBQXpDLEVBQTRDO0FBQ3hDRixJQUFBQSxNQUFNLEdBQUcsS0FBVDtBQUNILEdBVnVFLENBV3hFOzs7QUFDQS9HLEVBQUFBLE1BQU0sQ0FBQzZHLE9BQU8sR0FBRyxTQUFILEdBQWUsTUFBdkIsQ0FBTixDQUFxQ2pCLElBQXJDLEVBQTJDQyxFQUEzQyxFQUErQztBQUMzQ2lCLElBQUFBLE9BRDJDO0FBRTNDWixJQUFBQSxNQUYyQztBQUczQ2EsSUFBQUE7QUFIMkMsR0FBL0M7QUFLSDs7QUFDRCxTQUFTNUwsSUFBVCxDQUFjVyxLQUFkLEVBQXFCO0FBQ2pCLFlBQTJDO0FBQ3ZDLGFBQVNvTCxlQUFULENBQXlCQyxJQUF6QixFQUErQjtBQUMzQixhQUFPLElBQUlDLEtBQUosQ0FBVyxnQ0FBK0JELElBQUksQ0FBQ0UsR0FBSSxnQkFBZUYsSUFBSSxDQUFDRyxRQUFTLDZCQUE0QkgsSUFBSSxDQUFDSSxNQUFPLGFBQTlHLElBQThILFNBQWdDLENBQWhDLEdBQXFHLEVBQW5PLENBQVYsQ0FBUDtBQUNILEtBSHNDLENBSXZDOzs7QUFDQSxVQUFNQyxrQkFBa0IsR0FBRztBQUN2QjVCLE1BQUFBLElBQUksRUFBRTtBQURpQixLQUEzQjtBQUdBLFVBQU02QixhQUFhLEdBQUczQyxNQUFNLENBQUM0QyxJQUFQLENBQVlGLGtCQUFaLENBQXRCO0FBQ0FDLElBQUFBLGFBQWEsQ0FBQ0UsT0FBZCxDQUF1Qk4sR0FBRCxJQUFPO0FBQ3pCLFVBQUlBLEdBQUcsS0FBSyxNQUFaLEVBQW9CO0FBQ2hCLFlBQUl2TCxLQUFLLENBQUN1TCxHQUFELENBQUwsSUFBYyxJQUFkLElBQXNCLE9BQU92TCxLQUFLLENBQUN1TCxHQUFELENBQVosS0FBc0IsUUFBdEIsSUFBa0MsT0FBT3ZMLEtBQUssQ0FBQ3VMLEdBQUQsQ0FBWixLQUFzQixRQUFsRixFQUE0RjtBQUN4RixnQkFBTUgsZUFBZSxDQUFDO0FBQ2xCRyxZQUFBQSxHQURrQjtBQUVsQkMsWUFBQUEsUUFBUSxFQUFFLHNCQUZRO0FBR2xCQyxZQUFBQSxNQUFNLEVBQUV6TCxLQUFLLENBQUN1TCxHQUFELENBQUwsS0FBZSxJQUFmLEdBQXNCLE1BQXRCLEdBQStCLE9BQU92TCxLQUFLLENBQUN1TCxHQUFEO0FBSGpDLFdBQUQsQ0FBckI7QUFLSDtBQUNKLE9BUkQsTUFRTztBQUNIO0FBQ0E7QUFDQSxjQUFNMUcsQ0FBQyxHQUFHMEcsR0FBVjtBQUNIO0FBQ0osS0FkRCxFQVR1QyxDQXdCdkM7O0FBQ0EsVUFBTU8sa0JBQWtCLEdBQUc7QUFDdkIvQixNQUFBQSxFQUFFLEVBQUUsSUFEbUI7QUFFdkJnQixNQUFBQSxPQUFPLEVBQUUsSUFGYztBQUd2QkUsTUFBQUEsTUFBTSxFQUFFLElBSGU7QUFJdkJELE1BQUFBLE9BQU8sRUFBRSxJQUpjO0FBS3ZCZSxNQUFBQSxRQUFRLEVBQUUsSUFMYTtBQU12QmxDLE1BQUFBLFFBQVEsRUFBRSxJQU5hO0FBT3ZCTyxNQUFBQSxNQUFNLEVBQUU7QUFQZSxLQUEzQjtBQVNBLFVBQU00QixhQUFhLEdBQUdoRCxNQUFNLENBQUM0QyxJQUFQLENBQVlFLGtCQUFaLENBQXRCO0FBQ0FFLElBQUFBLGFBQWEsQ0FBQ0gsT0FBZCxDQUF1Qk4sR0FBRCxJQUFPO0FBQ3pCLFlBQU1VLE9BQU8sR0FBRyxPQUFPak0sS0FBSyxDQUFDdUwsR0FBRCxDQUE1Qjs7QUFDQSxVQUFJQSxHQUFHLEtBQUssSUFBWixFQUFrQjtBQUNkLFlBQUl2TCxLQUFLLENBQUN1TCxHQUFELENBQUwsSUFBY1UsT0FBTyxLQUFLLFFBQTFCLElBQXNDQSxPQUFPLEtBQUssUUFBdEQsRUFBZ0U7QUFDNUQsZ0JBQU1iLGVBQWUsQ0FBQztBQUNsQkcsWUFBQUEsR0FEa0I7QUFFbEJDLFlBQUFBLFFBQVEsRUFBRSxzQkFGUTtBQUdsQkMsWUFBQUEsTUFBTSxFQUFFUTtBQUhVLFdBQUQsQ0FBckI7QUFLSDtBQUNKLE9BUkQsTUFRTyxJQUFJVixHQUFHLEtBQUssUUFBWixFQUFzQjtBQUN6QixZQUFJdkwsS0FBSyxDQUFDdUwsR0FBRCxDQUFMLElBQWNVLE9BQU8sS0FBSyxRQUE5QixFQUF3QztBQUNwQyxnQkFBTWIsZUFBZSxDQUFDO0FBQ2xCRyxZQUFBQSxHQURrQjtBQUVsQkMsWUFBQUEsUUFBUSxFQUFFLFVBRlE7QUFHbEJDLFlBQUFBLE1BQU0sRUFBRVE7QUFIVSxXQUFELENBQXJCO0FBS0g7QUFDSixPQVJNLE1BUUEsSUFBSVYsR0FBRyxLQUFLLFNBQVIsSUFBcUJBLEdBQUcsS0FBSyxRQUE3QixJQUF5Q0EsR0FBRyxLQUFLLFNBQWpELElBQThEQSxHQUFHLEtBQUssVUFBdEUsSUFBb0ZBLEdBQUcsS0FBSyxVQUFoRyxFQUE0RztBQUMvRyxZQUFJdkwsS0FBSyxDQUFDdUwsR0FBRCxDQUFMLElBQWMsSUFBZCxJQUFzQlUsT0FBTyxLQUFLLFNBQXRDLEVBQWlEO0FBQzdDLGdCQUFNYixlQUFlLENBQUM7QUFDbEJHLFlBQUFBLEdBRGtCO0FBRWxCQyxZQUFBQSxRQUFRLEVBQUUsV0FGUTtBQUdsQkMsWUFBQUEsTUFBTSxFQUFFUTtBQUhVLFdBQUQsQ0FBckI7QUFLSDtBQUNKLE9BUk0sTUFRQTtBQUNIO0FBQ0E7QUFDQSxjQUFNcEgsQ0FBQyxHQUFHMEcsR0FBVjtBQUNIO0FBQ0osS0EvQkQsRUFuQ3VDLENBbUV2QztBQUNBOztBQUNBLFVBQU1XLFNBQVMsR0FBRzlDLE1BQU0sQ0FBQ0QsT0FBUCxDQUFlZ0QsTUFBZixDQUFzQixLQUF0QixDQUFsQjs7QUFDQSxRQUFJbk0sS0FBSyxDQUFDNkosUUFBTixJQUFrQixDQUFDcUMsU0FBUyxDQUFDRSxPQUFqQyxFQUEwQztBQUN0Q0YsTUFBQUEsU0FBUyxDQUFDRSxPQUFWLEdBQW9CLElBQXBCO0FBQ0FDLE1BQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUFhLHNLQUFiO0FBQ0g7QUFDSjs7QUFDRCxRQUFNQyxDQUFDLEdBQUd2TSxLQUFLLENBQUM2SixRQUFOLEtBQW1CLEtBQTdCO0FBQ0EsUUFBTTNGLE1BQU0sR0FBRyxDQUFDLEdBQUdzRixRQUFKLEVBQWN4RixTQUFkLEVBQWY7O0FBQ0EsUUFBTTtBQUFFOEYsSUFBQUEsSUFBRjtBQUFTQyxJQUFBQTtBQUFULE1BQWlCWCxNQUFNLENBQUNELE9BQVAsQ0FBZXFELE9BQWYsQ0FBdUIsTUFBSTtBQUM5QyxVQUFNLENBQUNDLFlBQUQsRUFBZUMsVUFBZixJQUE2QixDQUFDLEdBQUduRCxPQUFKLEVBQWFvRCxXQUFiLENBQXlCekksTUFBekIsRUFBaUNsRSxLQUFLLENBQUM4SixJQUF2QyxFQUE2QyxJQUE3QyxDQUFuQztBQUNBLFdBQU87QUFDSEEsTUFBQUEsSUFBSSxFQUFFMkMsWUFESDtBQUVIMUMsTUFBQUEsRUFBRSxFQUFFL0osS0FBSyxDQUFDK0osRUFBTixHQUFXLENBQUMsR0FBR1IsT0FBSixFQUFhb0QsV0FBYixDQUF5QnpJLE1BQXpCLEVBQWlDbEUsS0FBSyxDQUFDK0osRUFBdkMsQ0FBWCxHQUF3RDJDLFVBQVUsSUFBSUQ7QUFGdkUsS0FBUDtBQUlILEdBTnNCLEVBTXBCLENBQ0N2SSxNQURELEVBRUNsRSxLQUFLLENBQUM4SixJQUZQLEVBR0M5SixLQUFLLENBQUMrSixFQUhQLENBTm9CLENBQXZCOztBQVdBLE1BQUk7QUFBRTZDLElBQUFBLFFBQUY7QUFBYTdCLElBQUFBLE9BQWI7QUFBdUJDLElBQUFBLE9BQXZCO0FBQWlDQyxJQUFBQSxNQUFqQztBQUEwQ2IsSUFBQUE7QUFBMUMsTUFBc0RwSyxLQUExRCxDQXpGaUIsQ0EwRmpCOztBQUNBLE1BQUksT0FBTzRNLFFBQVAsS0FBb0IsUUFBeEIsRUFBa0M7QUFDOUJBLElBQUFBLFFBQVEsR0FBRyxhQUFjeEQsTUFBTSxDQUFDRCxPQUFQLENBQWUwRCxhQUFmLENBQTZCLEdBQTdCLEVBQWtDLElBQWxDLEVBQXdDRCxRQUF4QyxDQUF6QjtBQUNILEdBN0ZnQixDQThGakI7OztBQUNBLE1BQUlFLEtBQUo7O0FBQ0EsWUFBNEM7QUFDeEMsUUFBSTtBQUNBQSxNQUFBQSxLQUFLLEdBQUcxRCxNQUFNLENBQUNELE9BQVAsQ0FBZTRELFFBQWYsQ0FBd0JDLElBQXhCLENBQTZCSixRQUE3QixDQUFSO0FBQ0gsS0FGRCxDQUVFLE9BQU8xQyxHQUFQLEVBQVk7QUFDVixZQUFNLElBQUlvQixLQUFKLENBQVcsOERBQTZEdEwsS0FBSyxDQUFDOEosSUFBSyw0RkFBekUsSUFBd0ssU0FBZ0MsQ0FBaEMsR0FBc0csRUFBOVEsQ0FBVixDQUFOO0FBQ0g7QUFDSixHQU5ELE1BTU8sRUFFTjs7QUFDRCxRQUFNbUQsUUFBUSxHQUFHSCxLQUFLLElBQUksT0FBT0EsS0FBUCxLQUFpQixRQUExQixJQUFzQ0EsS0FBSyxDQUFDSSxHQUE3RDtBQUNBLFFBQU0sQ0FBQ0Msa0JBQUQsRUFBcUJDLFNBQXJCLElBQWtDLENBQUMsR0FBRzNELGdCQUFKLEVBQXNCNEQsZUFBdEIsQ0FBc0M7QUFDMUVDLElBQUFBLFVBQVUsRUFBRTtBQUQ4RCxHQUF0QyxDQUF4Qzs7QUFHQSxRQUFNQyxNQUFNLEdBQUduRSxNQUFNLENBQUNELE9BQVAsQ0FBZXFFLFdBQWYsQ0FBNEJDLEVBQUQsSUFBTTtBQUM1Q04sSUFBQUEsa0JBQWtCLENBQUNNLEVBQUQsQ0FBbEI7O0FBQ0EsUUFBSVIsUUFBSixFQUFjO0FBQ1YsVUFBSSxPQUFPQSxRQUFQLEtBQW9CLFVBQXhCLEVBQW9DQSxRQUFRLENBQUNRLEVBQUQsQ0FBUixDQUFwQyxLQUNLLElBQUksT0FBT1IsUUFBUCxLQUFvQixRQUF4QixFQUFrQztBQUNuQ0EsUUFBQUEsUUFBUSxDQUFDYixPQUFULEdBQW1CcUIsRUFBbkI7QUFDSDtBQUNKO0FBQ0osR0FSYyxFQVFaLENBQ0NSLFFBREQsRUFFQ0Usa0JBRkQsQ0FSWSxDQUFmOztBQVlBL0QsRUFBQUEsTUFBTSxDQUFDRCxPQUFQLENBQWUzRyxTQUFmLENBQXlCLE1BQUk7QUFDekIsVUFBTWtMLGNBQWMsR0FBR04sU0FBUyxJQUFJYixDQUFiLElBQWtCLENBQUMsR0FBR2hELE9BQUosRUFBYVUsVUFBYixDQUF3QkgsSUFBeEIsQ0FBekM7QUFDQSxVQUFNSyxTQUFTLEdBQUcsT0FBT0MsTUFBUCxLQUFrQixXQUFsQixHQUFnQ0EsTUFBaEMsR0FBeUNsRyxNQUFNLElBQUlBLE1BQU0sQ0FBQ2tHLE1BQTVFO0FBQ0EsVUFBTXVELFlBQVksR0FBRy9ELFVBQVUsQ0FBQ0UsSUFBSSxHQUFHLEdBQVAsR0FBYUMsRUFBYixJQUFtQkksU0FBUyxHQUFHLE1BQU1BLFNBQVQsR0FBcUIsRUFBakQsQ0FBRCxDQUEvQjs7QUFDQSxRQUFJdUQsY0FBYyxJQUFJLENBQUNDLFlBQXZCLEVBQXFDO0FBQ2pDOUQsTUFBQUEsUUFBUSxDQUFDM0YsTUFBRCxFQUFTNEYsSUFBVCxFQUFlQyxFQUFmLEVBQW1CO0FBQ3ZCSyxRQUFBQSxNQUFNLEVBQUVEO0FBRGUsT0FBbkIsQ0FBUjtBQUdIO0FBQ0osR0FURCxFQVNHLENBQ0NKLEVBREQsRUFFQ0QsSUFGRCxFQUdDc0QsU0FIRCxFQUlDaEQsTUFKRCxFQUtDbUMsQ0FMRCxFQU1DckksTUFORCxDQVRIOztBQWlCQSxRQUFNMEosVUFBVSxHQUFHO0FBQ2ZWLElBQUFBLEdBQUcsRUFBRUssTUFEVTtBQUVmTSxJQUFBQSxPQUFPLEVBQUc1TCxDQUFELElBQUs7QUFDVixVQUFJNkssS0FBSyxDQUFDOU0sS0FBTixJQUFlLE9BQU84TSxLQUFLLENBQUM5TSxLQUFOLENBQVk2TixPQUFuQixLQUErQixVQUFsRCxFQUE4RDtBQUMxRGYsUUFBQUEsS0FBSyxDQUFDOU0sS0FBTixDQUFZNk4sT0FBWixDQUFvQjVMLENBQXBCO0FBQ0g7O0FBQ0QsVUFBSSxDQUFDQSxDQUFDLENBQUM2TCxnQkFBUCxFQUF5QjtBQUNyQmhELFFBQUFBLFdBQVcsQ0FBQzdJLENBQUQsRUFBSWlDLE1BQUosRUFBWTRGLElBQVosRUFBa0JDLEVBQWxCLEVBQXNCZ0IsT0FBdEIsRUFBK0JDLE9BQS9CLEVBQXdDQyxNQUF4QyxFQUFnRGIsTUFBaEQsQ0FBWDtBQUNIO0FBQ0o7QUFUYyxHQUFuQjs7QUFXQXdELEVBQUFBLFVBQVUsQ0FBQ0csWUFBWCxHQUEyQjlMLENBQUQsSUFBSztBQUMzQixRQUFJLENBQUMsQ0FBQyxHQUFHc0gsT0FBSixFQUFhVSxVQUFiLENBQXdCSCxJQUF4QixDQUFMLEVBQW9DOztBQUNwQyxRQUFJZ0QsS0FBSyxDQUFDOU0sS0FBTixJQUFlLE9BQU84TSxLQUFLLENBQUM5TSxLQUFOLENBQVkrTixZQUFuQixLQUFvQyxVQUF2RCxFQUFtRTtBQUMvRGpCLE1BQUFBLEtBQUssQ0FBQzlNLEtBQU4sQ0FBWStOLFlBQVosQ0FBeUI5TCxDQUF6QjtBQUNIOztBQUNENEgsSUFBQUEsUUFBUSxDQUFDM0YsTUFBRCxFQUFTNEYsSUFBVCxFQUFlQyxFQUFmLEVBQW1CO0FBQ3ZCaUUsTUFBQUEsUUFBUSxFQUFFO0FBRGEsS0FBbkIsQ0FBUjtBQUdILEdBUkQsQ0FySmlCLENBOEpqQjtBQUNBOzs7QUFDQSxNQUFJaE8sS0FBSyxDQUFDK0wsUUFBTixJQUFrQmUsS0FBSyxDQUFDbUIsSUFBTixLQUFlLEdBQWYsSUFBc0IsRUFBRSxVQUFVbkIsS0FBSyxDQUFDOU0sS0FBbEIsQ0FBNUMsRUFBc0U7QUFDbEUsVUFBTW1LLFNBQVMsR0FBRyxPQUFPQyxNQUFQLEtBQWtCLFdBQWxCLEdBQWdDQSxNQUFoQyxHQUF5Q2xHLE1BQU0sSUFBSUEsTUFBTSxDQUFDa0csTUFBNUUsQ0FEa0UsQ0FFbEU7QUFDQTs7QUFDQSxVQUFNOEQsWUFBWSxHQUFHaEssTUFBTSxJQUFJQSxNQUFNLENBQUNpSyxjQUFqQixJQUFtQyxDQUFDLEdBQUc1RSxPQUFKLEVBQWE2RSxlQUFiLENBQTZCckUsRUFBN0IsRUFBaUNJLFNBQWpDLEVBQTRDakcsTUFBTSxJQUFJQSxNQUFNLENBQUNtSyxPQUE3RCxFQUFzRW5LLE1BQU0sSUFBSUEsTUFBTSxDQUFDb0ssYUFBdkYsQ0FBeEQ7QUFDQVYsSUFBQUEsVUFBVSxDQUFDOUQsSUFBWCxHQUFrQm9FLFlBQVksSUFBSSxDQUFDLEdBQUczRSxPQUFKLEVBQWFnRixXQUFiLENBQXlCLENBQUMsR0FBR2hGLE9BQUosRUFBYWlGLFNBQWIsQ0FBdUJ6RSxFQUF2QixFQUEyQkksU0FBM0IsRUFBc0NqRyxNQUFNLElBQUlBLE1BQU0sQ0FBQ3VLLGFBQXZELENBQXpCLENBQWxDO0FBQ0g7O0FBQ0QsU0FBTyxhQUFjckYsTUFBTSxDQUFDRCxPQUFQLENBQWV1RixZQUFmLENBQTRCNUIsS0FBNUIsRUFBbUNjLFVBQW5DLENBQXJCO0FBQ0g7O0FBQ0QsSUFBSWUsUUFBUSxHQUFHdFAsSUFBZjtBQUNBNkosZUFBQSxHQUFrQnlGLFFBQWxCOzs7Ozs7Ozs7OztBQ2pPYTs7QUFDYjNGLDhDQUE2QztBQUN6QzdHLEVBQUFBLEtBQUssRUFBRTtBQURrQyxDQUE3QztBQUdBK0csK0JBQUEsR0FBa0MwRix1QkFBbEM7QUFDQTFGLGtDQUFBLEdBQXFDLEtBQUssQ0FBMUM7O0FBQ0EsU0FBUzBGLHVCQUFULENBQWlDRSxJQUFqQyxFQUF1QztBQUNuQyxTQUFPQSxJQUFJLENBQUNDLFFBQUwsQ0FBYyxHQUFkLEtBQXNCRCxJQUFJLEtBQUssR0FBL0IsR0FBcUNBLElBQUksQ0FBQ0UsS0FBTCxDQUFXLENBQVgsRUFBYyxDQUFDLENBQWYsQ0FBckMsR0FBeURGLElBQWhFO0FBQ0g7O0FBQ0QsTUFBTUQsMEJBQTBCLEdBQUdJLE1BQUEsR0FBcUNILENBQXJDLEdBUS9CRix1QkFSSjtBQVNBMUYsa0NBQUEsR0FBcUMyRiwwQkFBckM7Ozs7Ozs7Ozs7O0FDbEJhOztBQUNiN0YsOENBQTZDO0FBQ3pDN0csRUFBQUEsS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0ErRywyQkFBQSxHQUE4QkEsMEJBQUEsR0FBNkIsS0FBSyxDQUFoRTs7QUFDQSxNQUFNbUcsbUJBQW1CLEdBQUcsT0FBT0UsSUFBUCxLQUFnQixXQUFoQixJQUErQkEsSUFBSSxDQUFDRixtQkFBcEMsSUFBMkRFLElBQUksQ0FBQ0YsbUJBQUwsQ0FBeUJHLElBQXpCLENBQThCN0gsTUFBOUIsQ0FBM0QsSUFBb0csVUFBUzhILEVBQVQsRUFBYTtBQUN6SSxNQUFJQyxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxFQUFaO0FBQ0EsU0FBT0MsVUFBVSxDQUFDLFlBQVc7QUFDekJKLElBQUFBLEVBQUUsQ0FBQztBQUNDSyxNQUFBQSxVQUFVLEVBQUUsS0FEYjtBQUVDQyxNQUFBQSxhQUFhLEVBQUUsWUFBVztBQUN0QixlQUFPL0osSUFBSSxDQUFDZ0ssR0FBTCxDQUFTLENBQVQsRUFBWSxNQUFNTCxJQUFJLENBQUNDLEdBQUwsS0FBYUYsS0FBbkIsQ0FBWixDQUFQO0FBQ0g7QUFKRixLQUFELENBQUY7QUFNSCxHQVBnQixFQU9kLENBUGMsQ0FBakI7QUFRSCxDQVZEOztBQVdBeEcsMkJBQUEsR0FBOEJtRyxtQkFBOUI7O0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsT0FBT0MsSUFBUCxLQUFnQixXQUFoQixJQUErQkEsSUFBSSxDQUFDRCxrQkFBcEMsSUFBMERDLElBQUksQ0FBQ0Qsa0JBQUwsQ0FBd0JFLElBQXhCLENBQTZCN0gsTUFBN0IsQ0FBMUQsSUFBa0csVUFBU3NJLEVBQVQsRUFBYTtBQUN0SSxTQUFPQyxZQUFZLENBQUNELEVBQUQsQ0FBbkI7QUFDSCxDQUZEOztBQUdBL0csMEJBQUEsR0FBNkJvRyxrQkFBN0I7Ozs7Ozs7Ozs7O0FDcEJhOztBQUNidEcsOENBQTZDO0FBQ3pDN0csRUFBQUEsS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0ErRyxzQkFBQSxHQUF5QmlILGNBQXpCO0FBQ0FqSCxvQkFBQSxHQUF1QmtILFlBQXZCO0FBQ0FsSCw4QkFBQSxHQUFpQ21ILHNCQUFqQztBQUNBbkgseUJBQUEsR0FBNEJvSCxpQkFBNUI7O0FBQ0EsSUFBSUMsc0JBQXNCLEdBQUdsSCxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxrSEFBRCxDQUFSLENBQW5EOztBQUNBLElBQUlrSCxvQkFBb0IsR0FBR2xILG1CQUFPLENBQUMseUZBQUQsQ0FBbEM7O0FBQ0EsU0FBU0Qsc0JBQVQsQ0FBZ0NLLEdBQWhDLEVBQXFDO0FBQ2pDLFNBQU9BLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFYLEdBQXdCRCxHQUF4QixHQUE4QjtBQUNqQ1AsSUFBQUEsT0FBTyxFQUFFTztBQUR3QixHQUFyQztBQUdILEVBQ0Q7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLE1BQU0rRyxpQkFBaUIsR0FBRyxJQUExQjs7QUFDQSxTQUFTQyxVQUFULENBQW9CbkYsR0FBcEIsRUFBeUJuRixHQUF6QixFQUE4QnVLLFNBQTlCLEVBQXlDO0FBQ3JDLE1BQUlDLEtBQUssR0FBR3hLLEdBQUcsQ0FBQ3lLLEdBQUosQ0FBUXRGLEdBQVIsQ0FBWjs7QUFDQSxNQUFJcUYsS0FBSixFQUFXO0FBQ1AsUUFBSSxZQUFZQSxLQUFoQixFQUF1QjtBQUNuQixhQUFPQSxLQUFLLENBQUNFLE1BQWI7QUFDSDs7QUFDRCxXQUFPQyxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JKLEtBQWhCLENBQVA7QUFDSDs7QUFDRCxNQUFJSyxRQUFKO0FBQ0EsUUFBTUMsSUFBSSxHQUFHLElBQUlILE9BQUosQ0FBYUMsT0FBRCxJQUFXO0FBQ2hDQyxJQUFBQSxRQUFRLEdBQUdELE9BQVg7QUFDSCxHQUZZLENBQWI7QUFHQTVLLEVBQUFBLEdBQUcsQ0FBQytLLEdBQUosQ0FBUTVGLEdBQVIsRUFBYXFGLEtBQUssR0FBRztBQUNqQkksSUFBQUEsT0FBTyxFQUFFQyxRQURRO0FBRWpCSCxJQUFBQSxNQUFNLEVBQUVJO0FBRlMsR0FBckI7QUFJQSxTQUFPUCxTQUFTLEdBQUdBLFNBQVMsR0FBRzVJLElBQVosQ0FBa0I1RixLQUFELEtBQVU4TyxRQUFRLENBQUM5TyxLQUFELENBQVIsRUFBaUJBLEtBQTNCLENBQWpCLENBQUgsR0FDWitPLElBREo7QUFFSDs7QUFDRCxTQUFTRSxXQUFULENBQXFCQyxJQUFyQixFQUEyQjtBQUN2QixNQUFJO0FBQ0FBLElBQUFBLElBQUksR0FBR0MsUUFBUSxDQUFDekUsYUFBVCxDQUF1QixNQUF2QixDQUFQO0FBQ0EsV0FBTztBQUNQO0FBQ0MsT0FBQyxDQUFDbEYsTUFBTSxDQUFDNEosb0JBQVQsSUFBaUMsQ0FBQyxDQUFDRCxRQUFRLENBQUNFLFlBQTdDLElBQThESCxJQUFJLENBQUNJLE9BQUwsQ0FBYUMsUUFBYixDQUFzQixVQUF0QjtBQUY5RDtBQUdILEdBTEQsQ0FLRSxPQUFPelAsQ0FBUCxFQUFVO0FBQ1IsV0FBTyxLQUFQO0FBQ0g7QUFDSjs7QUFDRCxNQUFNMFAsV0FBVyxHQUFHUCxXQUFXLEVBQS9COztBQUNBLFNBQVNRLGNBQVQsQ0FBd0I5SCxJQUF4QixFQUE4QkMsRUFBOUIsRUFBa0NzSCxJQUFsQyxFQUF3QztBQUNwQyxTQUFPLElBQUlOLE9BQUosQ0FBWSxDQUFDL0ksR0FBRCxFQUFNNkosR0FBTixLQUFZO0FBQzNCLFFBQUlQLFFBQVEsQ0FBQ1EsYUFBVCxDQUF3QiwrQkFBOEJoSSxJQUFLLElBQTNELENBQUosRUFBcUU7QUFDakUsYUFBTzlCLEdBQUcsRUFBVjtBQUNIOztBQUNEcUosSUFBQUEsSUFBSSxHQUFHQyxRQUFRLENBQUN6RSxhQUFULENBQXVCLE1BQXZCLENBQVAsQ0FKMkIsQ0FLM0I7O0FBQ0EsUUFBSTlDLEVBQUosRUFBUXNILElBQUksQ0FBQ3RILEVBQUwsR0FBVUEsRUFBVjtBQUNSc0gsSUFBQUEsSUFBSSxDQUFDVSxHQUFMLEdBQVksVUFBWjtBQUNBVixJQUFBQSxJQUFJLENBQUNXLFdBQUwsR0FBbUIvQyxTQUFuQjtBQUNBb0MsSUFBQUEsSUFBSSxDQUFDYSxNQUFMLEdBQWNsSyxHQUFkO0FBQ0FxSixJQUFBQSxJQUFJLENBQUNjLE9BQUwsR0FBZU4sR0FBZixDQVYyQixDQVczQjs7QUFDQVIsSUFBQUEsSUFBSSxDQUFDdkgsSUFBTCxHQUFZQSxJQUFaO0FBQ0F3SCxJQUFBQSxRQUFRLENBQUNjLElBQVQsQ0FBY0MsV0FBZCxDQUEwQmhCLElBQTFCO0FBQ0gsR0FkTSxDQUFQO0FBZUg7O0FBQ0QsTUFBTWlCLGdCQUFnQixHQUFHQyxNQUFNLENBQUMsa0JBQUQsQ0FBL0I7O0FBQ0EsU0FBU3BDLGNBQVQsQ0FBd0JqRyxHQUF4QixFQUE2QjtBQUN6QixTQUFPbEIsTUFBTSxDQUFDQyxjQUFQLENBQXNCaUIsR0FBdEIsRUFBMkJvSSxnQkFBM0IsRUFBNkMsRUFBN0MsQ0FBUDtBQUVIOztBQUNELFNBQVNsQyxZQUFULENBQXNCbEcsR0FBdEIsRUFBMkI7QUFDdkIsU0FBT0EsR0FBRyxJQUFJb0ksZ0JBQWdCLElBQUlwSSxHQUFsQztBQUNIOztBQUNELFNBQVNzSSxZQUFULENBQXNCQyxHQUF0QixFQUEyQkMsTUFBM0IsRUFBbUM7QUFDL0IsU0FBTyxJQUFJM0IsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVTJCLE1BQVYsS0FBbUI7QUFDbENELElBQUFBLE1BQU0sR0FBR3BCLFFBQVEsQ0FBQ3pFLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBVCxDQURrQyxDQUVsQztBQUNBO0FBQ0E7O0FBQ0E2RixJQUFBQSxNQUFNLENBQUNSLE1BQVAsR0FBZ0JsQixPQUFoQjs7QUFDQTBCLElBQUFBLE1BQU0sQ0FBQ1AsT0FBUCxHQUFpQixNQUFJUSxNQUFNLENBQUN4QyxjQUFjLENBQUMsSUFBSTdFLEtBQUosQ0FBVywwQkFBeUJtSCxHQUFJLEVBQXhDLENBQUQsQ0FBZixDQUEzQixDQU5rQyxDQVFsQztBQUNBOzs7QUFDQUMsSUFBQUEsTUFBTSxDQUFDVixXQUFQLEdBQXFCL0MsU0FBckIsQ0FWa0MsQ0FXbEM7QUFDQTs7QUFDQXlELElBQUFBLE1BQU0sQ0FBQ0QsR0FBUCxHQUFhQSxHQUFiO0FBQ0FuQixJQUFBQSxRQUFRLENBQUNzQixJQUFULENBQWNQLFdBQWQsQ0FBMEJLLE1BQTFCO0FBQ0gsR0FmTSxDQUFQO0FBZ0JILEVBQ0Q7QUFDQTs7O0FBQ0EsSUFBSUcsZUFBSixFQUNBOztBQUNBLFNBQVNDLHlCQUFULENBQW1DdkcsQ0FBbkMsRUFBc0N3RyxFQUF0QyxFQUEwQzdJLEdBQTFDLEVBQStDO0FBQzNDLFNBQU8sSUFBSTZHLE9BQUosQ0FBWSxDQUFDQyxPQUFELEVBQVUyQixNQUFWLEtBQW1CO0FBQ2xDLFFBQUlLLFNBQVMsR0FBRyxLQUFoQjtBQUNBekcsSUFBQUEsQ0FBQyxDQUFDeEUsSUFBRixDQUFRa0wsQ0FBRCxJQUFLO0FBQ1I7QUFDQUQsTUFBQUEsU0FBUyxHQUFHLElBQVo7QUFDQWhDLE1BQUFBLE9BQU8sQ0FBQ2lDLENBQUQsQ0FBUDtBQUNILEtBSkQsRUFJR2hMLEtBSkgsQ0FJUzBLLE1BSlQsRUFGa0MsQ0FPbEM7QUFDQTs7QUFDQSxjQUE0QztBQUN4QyxPQUFDRSxlQUFlLElBQUk5QixPQUFPLENBQUNDLE9BQVIsRUFBcEIsRUFBdUNqSixJQUF2QyxDQUE0QyxNQUFJO0FBQzVDLFNBQUMsR0FBR3lJLG9CQUFKLEVBQTBCbkIsbUJBQTFCLENBQThDLE1BQUlRLFVBQVUsQ0FBQyxNQUFJO0FBQ3pELGNBQUksQ0FBQ21ELFNBQUwsRUFBZ0I7QUFDWkwsWUFBQUEsTUFBTSxDQUFDekksR0FBRCxDQUFOO0FBQ0g7QUFDSixTQUp1RCxFQUlyRDZJLEVBSnFELENBQTVEO0FBTUgsT0FQRDtBQVFIOztBQUNELGVBQTRDLEVBTzNDO0FBQ0osR0EzQk0sQ0FBUDtBQTRCSDs7QUFDRCxTQUFTMUMsc0JBQVQsR0FBa0M7QUFDOUIsTUFBSWQsSUFBSSxDQUFDMkQsZ0JBQVQsRUFBMkI7QUFDdkIsV0FBT25DLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQnpCLElBQUksQ0FBQzJELGdCQUFyQixDQUFQO0FBQ0g7O0FBQ0QsUUFBTUMsZUFBZSxHQUFHLElBQUlwQyxPQUFKLENBQWFDLE9BQUQsSUFBVztBQUMzQztBQUNBLFVBQU12QixFQUFFLEdBQUdGLElBQUksQ0FBQzZELG1CQUFoQjs7QUFDQTdELElBQUFBLElBQUksQ0FBQzZELG1CQUFMLEdBQTJCLE1BQUk7QUFDM0JwQyxNQUFBQSxPQUFPLENBQUN6QixJQUFJLENBQUMyRCxnQkFBTixDQUFQO0FBQ0F6RCxNQUFBQSxFQUFFLElBQUlBLEVBQUUsRUFBUjtBQUNILEtBSEQ7QUFJSCxHQVB1QixDQUF4QjtBQVFBLFNBQU9xRCx5QkFBeUIsQ0FBQ0ssZUFBRCxFQUFrQjFDLGlCQUFsQixFQUFxQ04sY0FBYyxDQUFDLElBQUk3RSxLQUFKLENBQVUsc0NBQVYsQ0FBRCxDQUFuRCxDQUFoQztBQUNIOztBQUNELFNBQVMrSCxnQkFBVCxDQUEwQkMsV0FBMUIsRUFBdUNDLEtBQXZDLEVBQThDO0FBQzFDLFlBQTRDO0FBQ3hDLFdBQU94QyxPQUFPLENBQUNDLE9BQVIsQ0FBZ0I7QUFDbkJ3QyxNQUFBQSxPQUFPLEVBQUUsQ0FDTEYsV0FBVyxHQUFHLDRCQUFkLEdBQTZDRyxTQUFTLENBQUMsQ0FBQyxHQUFHbEQsc0JBQUosRUFBNEJwSCxPQUE1QixDQUFvQ29LLEtBQXBDLEVBQTJDLEtBQTNDLENBQUQsQ0FEakQsQ0FEVTtBQUluQjtBQUNBRyxNQUFBQSxHQUFHLEVBQUU7QUFMYyxLQUFoQixDQUFQO0FBT0g7O0FBQ0QsU0FBT3JELHNCQUFzQixHQUFHdEksSUFBekIsQ0FBK0I0TCxRQUFELElBQVk7QUFDN0MsUUFBSSxFQUFFSixLQUFLLElBQUlJLFFBQVgsQ0FBSixFQUEwQjtBQUN0QixZQUFNeEQsY0FBYyxDQUFDLElBQUk3RSxLQUFKLENBQVcsMkJBQTBCaUksS0FBTSxFQUEzQyxDQUFELENBQXBCO0FBQ0g7O0FBQ0QsVUFBTUssUUFBUSxHQUFHRCxRQUFRLENBQUNKLEtBQUQsQ0FBUixDQUFnQm5OLEdBQWhCLENBQXFCd0ssS0FBRCxJQUFTMEMsV0FBVyxHQUFHLFNBQWQsR0FBMEJHLFNBQVMsQ0FBQzdDLEtBQUQsQ0FBaEUsQ0FBakI7QUFFQSxXQUFPO0FBQ0g0QyxNQUFBQSxPQUFPLEVBQUVJLFFBQVEsQ0FBQ0MsTUFBVCxDQUFpQkMsQ0FBRCxJQUFLQSxDQUFDLENBQUMvRSxRQUFGLENBQVcsS0FBWCxDQUFyQixDQUROO0FBR0gyRSxNQUFBQSxHQUFHLEVBQUVFLFFBQVEsQ0FBQ0MsTUFBVCxDQUFpQkMsQ0FBRCxJQUFLQSxDQUFDLENBQUMvRSxRQUFGLENBQVcsTUFBWCxDQUFyQjtBQUhGLEtBQVA7QUFNSCxHQVpNLENBQVA7QUFhSDs7QUFDRCxTQUFTdUIsaUJBQVQsQ0FBMkJnRCxXQUEzQixFQUF3QztBQUNwQyxRQUFNUyxXQUFXLEdBQUcsSUFBSUMsR0FBSixFQUFwQjtBQUNBLFFBQU1DLGFBQWEsR0FBRyxJQUFJRCxHQUFKLEVBQXRCO0FBQ0EsUUFBTUUsV0FBVyxHQUFHLElBQUlGLEdBQUosRUFBcEI7QUFDQSxRQUFNRyxNQUFNLEdBQUcsSUFBSUgsR0FBSixFQUFmOztBQUNBLFdBQVNJLGtCQUFULENBQTRCM0IsR0FBNUIsRUFBaUM7QUFDN0IsUUFBSXZCLElBQUksR0FBRytDLGFBQWEsQ0FBQ3BELEdBQWQsQ0FBa0I0QixHQUFsQixDQUFYOztBQUNBLFFBQUl2QixJQUFKLEVBQVU7QUFDTixhQUFPQSxJQUFQO0FBQ0gsS0FKNEIsQ0FLN0I7OztBQUNBLFFBQUlJLFFBQVEsQ0FBQ1EsYUFBVCxDQUF3QixnQkFBZVcsR0FBSSxJQUEzQyxDQUFKLEVBQXFEO0FBQ2pELGFBQU8xQixPQUFPLENBQUNDLE9BQVIsRUFBUDtBQUNIOztBQUNEaUQsSUFBQUEsYUFBYSxDQUFDOUMsR0FBZCxDQUFrQnNCLEdBQWxCLEVBQXVCdkIsSUFBSSxHQUFHc0IsWUFBWSxDQUFDQyxHQUFELENBQTFDO0FBQ0EsV0FBT3ZCLElBQVA7QUFDSDs7QUFDRCxXQUFTbUQsZUFBVCxDQUF5QnZLLElBQXpCLEVBQStCO0FBQzNCLFFBQUlvSCxJQUFJLEdBQUdnRCxXQUFXLENBQUNyRCxHQUFaLENBQWdCL0csSUFBaEIsQ0FBWDs7QUFDQSxRQUFJb0gsSUFBSixFQUFVO0FBQ04sYUFBT0EsSUFBUDtBQUNIOztBQUNEZ0QsSUFBQUEsV0FBVyxDQUFDL0MsR0FBWixDQUFnQnJILElBQWhCLEVBQXNCb0gsSUFBSSxHQUFHb0QsS0FBSyxDQUFDeEssSUFBRCxDQUFMLENBQVkvQixJQUFaLENBQWtCQyxHQUFELElBQU87QUFDakQsVUFBSSxDQUFDQSxHQUFHLENBQUN1TSxFQUFULEVBQWE7QUFDVCxjQUFNLElBQUlqSixLQUFKLENBQVcsOEJBQTZCeEIsSUFBSyxFQUE3QyxDQUFOO0FBQ0g7O0FBQ0QsYUFBTzlCLEdBQUcsQ0FBQ3dNLElBQUosR0FBV3pNLElBQVgsQ0FBaUJ5TSxJQUFELEtBQVM7QUFDeEIxSyxRQUFBQSxJQUFJLEVBQUVBLElBRGtCO0FBRXhCMkssUUFBQUEsT0FBTyxFQUFFRDtBQUZlLE9BQVQsQ0FBaEIsQ0FBUDtBQUtILEtBVDRCLEVBUzFCdk0sS0FUMEIsQ0FTbkJpQyxHQUFELElBQU87QUFDWixZQUFNaUcsY0FBYyxDQUFDakcsR0FBRCxDQUFwQjtBQUNILEtBWDRCLENBQTdCO0FBWUEsV0FBT2dILElBQVA7QUFDSDs7QUFDRCxTQUFPO0FBQ0h3RCxJQUFBQSxjQUFjLENBQUVuQixLQUFGLEVBQVM7QUFDbkIsYUFBTzdDLFVBQVUsQ0FBQzZDLEtBQUQsRUFBUVEsV0FBUixDQUFqQjtBQUNILEtBSEU7O0FBSUhZLElBQUFBLFlBQVksQ0FBRXBCLEtBQUYsRUFBU3FCLE9BQVQsRUFBa0I7QUFDMUI3RCxNQUFBQSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0I0RCxPQUFoQixFQUF5QjdNLElBQXpCLENBQStCOE0sRUFBRCxJQUFNQSxFQUFFLEVBQXRDLEVBQ0U5TSxJQURGLENBQ1FtQixPQUFELEtBQVk7QUFDWDRMLFFBQUFBLFNBQVMsRUFBRTVMLE9BQU8sSUFBSUEsT0FBTyxDQUFDQyxPQUFuQixJQUE4QkQsT0FEOUI7QUFFWEEsUUFBQUEsT0FBTyxFQUFFQTtBQUZFLE9BQVosQ0FEUCxFQUtHZ0IsR0FBRCxLQUFRO0FBQ0Z6RyxRQUFBQSxLQUFLLEVBQUV5RztBQURMLE9BQVIsQ0FMRixFQVFFbkMsSUFSRixDQVFRZ04sS0FBRCxJQUFTO0FBQ1osY0FBTUMsR0FBRyxHQUFHakIsV0FBVyxDQUFDbEQsR0FBWixDQUFnQjBDLEtBQWhCLENBQVo7QUFDQVEsUUFBQUEsV0FBVyxDQUFDNUMsR0FBWixDQUFnQm9DLEtBQWhCLEVBQXVCd0IsS0FBdkI7QUFDQSxZQUFJQyxHQUFHLElBQUksYUFBYUEsR0FBeEIsRUFBNkJBLEdBQUcsQ0FBQ2hFLE9BQUosQ0FBWStELEtBQVo7QUFDaEMsT0FaRDtBQWFILEtBbEJFOztBQW1CSEUsSUFBQUEsU0FBUyxDQUFFMUIsS0FBRixFQUFTMUosUUFBVCxFQUFtQjtBQUN4QixhQUFPNkcsVUFBVSxDQUFDNkMsS0FBRCxFQUFRWSxNQUFSLEVBQWdCLE1BQUk7QUFDakMsY0FBTWUsaUJBQWlCLEdBQUc3QixnQkFBZ0IsQ0FBQ0MsV0FBRCxFQUFjQyxLQUFkLENBQWhCLENBQXFDeEwsSUFBckMsQ0FBMEMsQ0FBQztBQUFFeUwsVUFBQUEsT0FBRjtBQUFZRSxVQUFBQTtBQUFaLFNBQUQsS0FBc0I7QUFDdEYsaUJBQU8zQyxPQUFPLENBQUNvRSxHQUFSLENBQVksQ0FDZnBCLFdBQVcsQ0FBQ3FCLEdBQVosQ0FBZ0I3QixLQUFoQixJQUF5QixFQUF6QixHQUE4QnhDLE9BQU8sQ0FBQ29FLEdBQVIsQ0FBWTNCLE9BQU8sQ0FBQ3BOLEdBQVIsQ0FBWWdPLGtCQUFaLENBQVosQ0FEZixFQUVmckQsT0FBTyxDQUFDb0UsR0FBUixDQUFZekIsR0FBRyxDQUFDdE4sR0FBSixDQUFRaU8sZUFBUixDQUFaLENBRmUsQ0FBWixDQUFQO0FBSUgsU0FMeUIsRUFLdkJ0TSxJQUx1QixDQUtqQkMsR0FBRCxJQUFPO0FBQ1gsaUJBQU8sS0FBSzBNLGNBQUwsQ0FBb0JuQixLQUFwQixFQUEyQnhMLElBQTNCLENBQWlDc04sVUFBRCxLQUFlO0FBQzlDQSxZQUFBQSxVQUQ4QztBQUU5Q0MsWUFBQUEsTUFBTSxFQUFFdE4sR0FBRyxDQUFDLENBQUQ7QUFGbUMsV0FBZixDQUFoQyxDQUFQO0FBS0gsU0FYeUIsQ0FBMUI7O0FBWUEsa0JBQTRDO0FBQ3hDNkssVUFBQUEsZUFBZSxHQUFHLElBQUk5QixPQUFKLENBQWFDLE9BQUQsSUFBVztBQUNyQyxnQkFBSWtFLGlCQUFKLEVBQXVCO0FBQ25CLHFCQUFPQSxpQkFBaUIsQ0FBQ0ssT0FBbEIsQ0FBMEIsTUFBSTtBQUNqQ3ZFLGdCQUFBQSxPQUFPO0FBQ1YsZUFGTSxDQUFQO0FBR0g7QUFDSixXQU5pQixDQUFsQjtBQU9IOztBQUNELGVBQU84Qix5QkFBeUIsQ0FBQ29DLGlCQUFELEVBQW9CekUsaUJBQXBCLEVBQXVDTixjQUFjLENBQUMsSUFBSTdFLEtBQUosQ0FBVyxtQ0FBa0NpSSxLQUFNLEVBQW5ELENBQUQsQ0FBckQsQ0FBekIsQ0FBdUl4TCxJQUF2SSxDQUE0SSxDQUFDO0FBQUVzTixVQUFBQSxVQUFGO0FBQWVDLFVBQUFBO0FBQWYsU0FBRCxLQUE0QjtBQUMzSyxnQkFBTXROLEdBQUcsR0FBR2dCLE1BQU0sQ0FBQ3dNLE1BQVAsQ0FBYztBQUN0QkYsWUFBQUEsTUFBTSxFQUFFQTtBQURjLFdBQWQsRUFFVEQsVUFGUyxDQUFaO0FBR0EsaUJBQU8sV0FBV0EsVUFBWCxHQUF3QkEsVUFBeEIsR0FBcUNyTixHQUE1QztBQUNILFNBTE0sRUFLSkMsS0FMSSxDQUtHaUMsR0FBRCxJQUFPO0FBQ1osY0FBSUwsUUFBSixFQUFjO0FBQ1Y7QUFDQSxrQkFBTUssR0FBTjtBQUNIOztBQUNELGlCQUFPO0FBQ0h6RyxZQUFBQSxLQUFLLEVBQUV5RztBQURKLFdBQVA7QUFHSCxTQWJNLENBQVA7QUFjSCxPQXBDZ0IsQ0FBakI7QUFxQ0gsS0F6REU7O0FBMERITCxJQUFBQSxRQUFRLENBQUUwSixLQUFGLEVBQVM7QUFDYjtBQUNBO0FBQ0EsVUFBSWtDLEVBQUo7O0FBQ0EsVUFBSUEsRUFBRSxHQUFHQyxTQUFTLENBQUM3VSxVQUFuQixFQUErQjtBQUMzQjtBQUNBLFlBQUk0VSxFQUFFLENBQUNFLFFBQUgsSUFBZSxLQUFLdkcsSUFBTCxDQUFVcUcsRUFBRSxDQUFDRyxhQUFiLENBQW5CLEVBQWdELE9BQU83RSxPQUFPLENBQUNDLE9BQVIsRUFBUDtBQUNuRDs7QUFDRCxhQUFPcUMsZ0JBQWdCLENBQUNDLFdBQUQsRUFBY0MsS0FBZCxDQUFoQixDQUFxQ3hMLElBQXJDLENBQTJDOE4sTUFBRCxJQUFVOUUsT0FBTyxDQUFDb0UsR0FBUixDQUFZeEQsV0FBVyxHQUFHa0UsTUFBTSxDQUFDckMsT0FBUCxDQUFlcE4sR0FBZixDQUFvQnNNLE1BQUQsSUFBVWQsY0FBYyxDQUFDYyxNQUFELEVBQVMsUUFBVCxDQUEzQyxDQUFILEdBQzFFLEVBRG1ELENBQXBELEVBRUwzSyxJQUZLLENBRUEsTUFBSTtBQUNQLFNBQUMsR0FBR3lJLG9CQUFKLEVBQTBCbkIsbUJBQTFCLENBQThDLE1BQUksS0FBSzRGLFNBQUwsQ0FBZTFCLEtBQWYsRUFBc0IsSUFBdEIsRUFBNEJ0TCxLQUE1QixDQUFrQyxNQUFJLENBQ25GLENBRDZDLENBQWxEO0FBR0gsT0FOTSxFQU1KQSxLQU5JLEVBTUU7QUFDVCxZQUFJLENBQ0gsQ0FSTSxDQUFQO0FBU0g7O0FBM0VFLEdBQVA7QUE2RUg7Ozs7Ozs7Ozs7O0FDdFJZOztBQUNiZSw4Q0FBNkM7QUFDekM3RyxFQUFBQSxLQUFLLEVBQUU7QUFEa0MsQ0FBN0M7QUFHQTZHLDBDQUF5QztBQUNyQzhNLEVBQUFBLFVBQVUsRUFBRSxJQUR5QjtBQUVyQ2pGLEVBQUFBLEdBQUcsRUFBRSxZQUFXO0FBQ1osV0FBT3RILE9BQU8sQ0FBQ0osT0FBZjtBQUNIO0FBSm9DLENBQXpDO0FBTUFILDhDQUE2QztBQUN6QzhNLEVBQUFBLFVBQVUsRUFBRSxJQUQ2QjtBQUV6Q2pGLEVBQUFBLEdBQUcsRUFBRSxZQUFXO0FBQ1osV0FBT2tGLFdBQVcsQ0FBQzVNLE9BQW5CO0FBQ0g7QUFKd0MsQ0FBN0M7QUFNQUQsaUJBQUEsR0FBb0JsRixTQUFwQjtBQUNBa0Ysb0JBQUEsR0FBdUI4TSxZQUF2QjtBQUNBOU0sZ0NBQUEsR0FBbUMrTSx3QkFBbkM7QUFDQS9NLGVBQUEsR0FBa0IsS0FBSyxDQUF2Qjs7QUFDQSxJQUFJRSxNQUFNLEdBQUdDLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLG9CQUFELENBQVIsQ0FBbkM7O0FBQ0EsSUFBSUMsT0FBTyxHQUFHRixzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyx5RkFBRCxDQUFSLENBQXBDOztBQUNBLElBQUk0TSxjQUFjLEdBQUc1TSxtQkFBTyxDQUFDLGtFQUFELENBQTVCOztBQUNBLElBQUl5TSxXQUFXLEdBQUcxTSxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxxRUFBRCxDQUFSLENBQXhDOztBQUNBLFNBQVNELHNCQUFULENBQWdDSyxHQUFoQyxFQUFxQztBQUNqQyxTQUFPQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWCxHQUF3QkQsR0FBeEIsR0FBOEI7QUFDakNQLElBQUFBLE9BQU8sRUFBRU87QUFEd0IsR0FBckM7QUFHSDs7QUFDRCxNQUFNeU0sZUFBZSxHQUFHO0FBQ3BCalMsRUFBQUEsTUFBTSxFQUFFLElBRFk7QUFFcEJrUyxFQUFBQSxjQUFjLEVBQUUsRUFGSTs7QUFHcEJDLEVBQUFBLEtBQUssQ0FBRTVHLEVBQUYsRUFBTTtBQUNQLFFBQUksS0FBS3ZMLE1BQVQsRUFBaUIsT0FBT3VMLEVBQUUsRUFBVDs7QUFDakIsZUFBbUMsRUFFbEM7QUFDSjs7QUFSbUIsQ0FBeEIsRUFVQTs7QUFDQSxNQUFNOEcsaUJBQWlCLEdBQUcsQ0FDdEIsVUFEc0IsRUFFdEIsT0FGc0IsRUFHdEIsT0FIc0IsRUFJdEIsUUFKc0IsRUFLdEIsWUFMc0IsRUFNdEIsWUFOc0IsRUFPdEIsVUFQc0IsRUFRdEIsUUFSc0IsRUFTdEIsU0FUc0IsRUFVdEIsZUFWc0IsRUFXdEIsU0FYc0IsRUFZdEIsV0Fac0IsRUFhdEIsZ0JBYnNCLEVBY3RCLGVBZHNCLENBQTFCO0FBZ0JBLE1BQU1DLFlBQVksR0FBRyxDQUNqQixrQkFEaUIsRUFFakIscUJBRmlCLEVBR2pCLHFCQUhpQixFQUlqQixrQkFKaUIsRUFLakIsaUJBTGlCLEVBTWpCLG9CQU5pQixDQUFyQjtBQVFBLE1BQU1DLGdCQUFnQixHQUFHLENBQ3JCLE1BRHFCLEVBRXJCLFNBRnFCLEVBR3JCLFFBSHFCLEVBSXJCLE1BSnFCLEVBS3JCLFVBTHFCLEVBTXJCLGdCQU5xQixDQUF6QixFQVFBOztBQUNBek4sTUFBTSxDQUFDQyxjQUFQLENBQXNCa04sZUFBdEIsRUFBdUMsUUFBdkMsRUFBaUQ7QUFDN0N0RixFQUFBQSxHQUFHLEdBQUk7QUFDSCxXQUFPdEgsT0FBTyxDQUFDSixPQUFSLENBQWdCdU4sTUFBdkI7QUFDSDs7QUFINEMsQ0FBakQ7QUFLQUgsaUJBQWlCLENBQUMxSyxPQUFsQixDQUEyQjhLLEtBQUQsSUFBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBM04sRUFBQUEsTUFBTSxDQUFDQyxjQUFQLENBQXNCa04sZUFBdEIsRUFBdUNRLEtBQXZDLEVBQThDO0FBQzFDOUYsSUFBQUEsR0FBRyxHQUFJO0FBQ0gsWUFBTTNNLE1BQU0sR0FBRzBTLFNBQVMsRUFBeEI7QUFDQSxhQUFPMVMsTUFBTSxDQUFDeVMsS0FBRCxDQUFiO0FBQ0g7O0FBSnlDLEdBQTlDO0FBTUgsQ0FYRDtBQVlBRixnQkFBZ0IsQ0FBQzVLLE9BQWpCLENBQTBCOEssS0FBRCxJQUFTO0FBQzlCUixFQUFBQSxlQUFlLENBQUNRLEtBQUQsQ0FBZixHQUF5QixDQUFDLEdBQUd0TCxJQUFKLEtBQVc7QUFDaEMsVUFBTW5ILE1BQU0sR0FBRzBTLFNBQVMsRUFBeEI7QUFDQSxXQUFPMVMsTUFBTSxDQUFDeVMsS0FBRCxDQUFOLENBQWMsR0FBR3RMLElBQWpCLENBQVA7QUFDSCxHQUhEO0FBSUgsQ0FMRDtBQU1BbUwsWUFBWSxDQUFDM0ssT0FBYixDQUFzQnZCLEtBQUQsSUFBUztBQUMxQjZMLEVBQUFBLGVBQWUsQ0FBQ0UsS0FBaEIsQ0FBc0IsTUFBSTtBQUN0QjlNLElBQUFBLE9BQU8sQ0FBQ0osT0FBUixDQUFnQnVOLE1BQWhCLENBQXVCRyxFQUF2QixDQUEwQnZNLEtBQTFCLEVBQWlDLENBQUMsR0FBR2UsSUFBSixLQUFXO0FBQ3hDLFlBQU15TCxVQUFVLEdBQUksS0FBSXhNLEtBQUssQ0FBQ3lNLE1BQU4sQ0FBYSxDQUFiLEVBQWdCQyxXQUFoQixFQUE4QixHQUFFMU0sS0FBSyxDQUFDMk0sU0FBTixDQUFnQixDQUFoQixDQUFtQixFQUEzRTtBQUNBLFlBQU1DLGdCQUFnQixHQUFHZixlQUF6Qjs7QUFDQSxVQUFJZSxnQkFBZ0IsQ0FBQ0osVUFBRCxDQUFwQixFQUFrQztBQUM5QixZQUFJO0FBQ0FJLFVBQUFBLGdCQUFnQixDQUFDSixVQUFELENBQWhCLENBQTZCLEdBQUd6TCxJQUFoQztBQUNILFNBRkQsQ0FFRSxPQUFPbkIsR0FBUCxFQUFZO0FBQ1ZtQyxVQUFBQSxPQUFPLENBQUM1SSxLQUFSLENBQWUsd0NBQXVDcVQsVUFBVyxFQUFqRTtBQUNBekssVUFBQUEsT0FBTyxDQUFDNUksS0FBUixDQUFlLEdBQUV5RyxHQUFHLENBQUN6SSxPQUFRLEtBQUl5SSxHQUFHLENBQUNpTixLQUFNLEVBQTNDO0FBQ0g7QUFDSjtBQUNKLEtBWEQ7QUFZSCxHQWJEO0FBY0gsQ0FmRDs7QUFnQkEsU0FBU1AsU0FBVCxHQUFxQjtBQUNqQixNQUFJLENBQUNULGVBQWUsQ0FBQ2pTLE1BQXJCLEVBQTZCO0FBQ3pCLFVBQU16QyxPQUFPLEdBQUcsZ0NBQWdDLHFFQUFoRDtBQUNBLFVBQU0sSUFBSTZKLEtBQUosQ0FBVTdKLE9BQVYsQ0FBTjtBQUNIOztBQUNELFNBQU8wVSxlQUFlLENBQUNqUyxNQUF2QjtBQUNIOztBQUNELElBQUl5SyxRQUFRLEdBQUd3SCxlQUFmO0FBQ0FqTixlQUFBLEdBQWtCeUYsUUFBbEI7O0FBQ0EsU0FBUzNLLFNBQVQsR0FBcUI7QUFDakIsU0FBT29GLE1BQU0sQ0FBQ0QsT0FBUCxDQUFlaU8sVUFBZixDQUEwQmxCLGNBQWMsQ0FBQ21CLGFBQXpDLENBQVA7QUFDSDs7QUFDRCxTQUFTckIsWUFBVCxDQUFzQixHQUFHM0ssSUFBekIsRUFBK0I7QUFDM0I4SyxFQUFBQSxlQUFlLENBQUNqUyxNQUFoQixHQUF5QixJQUFJcUYsT0FBTyxDQUFDSixPQUFaLENBQW9CLEdBQUdrQyxJQUF2QixDQUF6QjtBQUNBOEssRUFBQUEsZUFBZSxDQUFDQyxjQUFoQixDQUErQnZLLE9BQS9CLENBQXdDNEQsRUFBRCxJQUFNQSxFQUFFLEVBQS9DO0FBRUEwRyxFQUFBQSxlQUFlLENBQUNDLGNBQWhCLEdBQWlDLEVBQWpDO0FBQ0EsU0FBT0QsZUFBZSxDQUFDalMsTUFBdkI7QUFDSDs7QUFDRCxTQUFTK1Isd0JBQVQsQ0FBa0MvUixNQUFsQyxFQUEwQztBQUN0QyxRQUFNc0YsUUFBUSxHQUFHdEYsTUFBakI7QUFDQSxRQUFNb1QsUUFBUSxHQUFHLEVBQWpCOztBQUVBLE9BQUssTUFBTUMsUUFBWCxJQUF1QmhCLGlCQUF2QixFQUF5QztBQUNyQyxRQUFJLE9BQU8vTSxRQUFRLENBQUMrTixRQUFELENBQWYsS0FBOEIsUUFBbEMsRUFBNEM7QUFDeENELE1BQUFBLFFBQVEsQ0FBQ0MsUUFBRCxDQUFSLEdBQXFCdk8sTUFBTSxDQUFDd00sTUFBUCxDQUFjZ0MsS0FBSyxDQUFDQyxPQUFOLENBQWNqTyxRQUFRLENBQUMrTixRQUFELENBQXRCLElBQW9DLEVBQXBDLEdBQXlDLEVBQXZELEVBQ2xCL04sUUFBUSxDQUFDK04sUUFBRCxDQURVLENBQXJCLENBQ3VCO0FBRHZCO0FBR0E7QUFDSDs7QUFDREQsSUFBQUEsUUFBUSxDQUFDQyxRQUFELENBQVIsR0FBcUIvTixRQUFRLENBQUMrTixRQUFELENBQTdCO0FBQ0gsR0FacUMsQ0FhdEM7OztBQUNBRCxFQUFBQSxRQUFRLENBQUNaLE1BQVQsR0FBa0JuTixPQUFPLENBQUNKLE9BQVIsQ0FBZ0J1TixNQUFsQztBQUNBRCxFQUFBQSxnQkFBZ0IsQ0FBQzVLLE9BQWpCLENBQTBCOEssS0FBRCxJQUFTO0FBQzlCVyxJQUFBQSxRQUFRLENBQUNYLEtBQUQsQ0FBUixHQUFrQixDQUFDLEdBQUd0TCxJQUFKLEtBQVc7QUFDekIsYUFBTzdCLFFBQVEsQ0FBQ21OLEtBQUQsQ0FBUixDQUFnQixHQUFHdEwsSUFBbkIsQ0FBUDtBQUNILEtBRkQ7QUFHSCxHQUpEO0FBS0EsU0FBT2lNLFFBQVA7QUFDSDs7Ozs7Ozs7Ozs7QUN4Slk7O0FBQ2J0Tyw4Q0FBNkM7QUFDekM3RyxFQUFBQSxLQUFLLEVBQUU7QUFEa0MsQ0FBN0M7QUFHQStHLHVCQUFBLEdBQTBCbUUsZUFBMUI7O0FBQ0EsSUFBSWpFLE1BQU0sR0FBR0UsbUJBQU8sQ0FBQyxvQkFBRCxDQUFwQjs7QUFDQSxJQUFJa0gsb0JBQW9CLEdBQUdsSCxtQkFBTyxDQUFDLHlGQUFELENBQWxDOztBQUNBLE1BQU1vTyx1QkFBdUIsR0FBRyxPQUFPQyxvQkFBUCxLQUFnQyxXQUFoRTs7QUFDQSxTQUFTdEssZUFBVCxDQUF5QjtBQUFFQyxFQUFBQSxVQUFGO0FBQWVzSyxFQUFBQTtBQUFmLENBQXpCLEVBQXFEO0FBQ2pELFFBQU1DLFVBQVUsR0FBR0QsUUFBUSxJQUFJLENBQUNGLHVCQUFoQztBQUNBLFFBQU1JLFNBQVMsR0FBRyxDQUFDLEdBQUcxTyxNQUFKLEVBQVkrQyxNQUFaLEVBQWxCO0FBQ0EsUUFBTSxDQUFDNEwsT0FBRCxFQUFVQyxVQUFWLElBQXdCLENBQUMsR0FBRzVPLE1BQUosRUFBWWhLLFFBQVosQ0FBcUIsS0FBckIsQ0FBOUI7QUFDQSxRQUFNbU8sTUFBTSxHQUFHLENBQUMsR0FBR25FLE1BQUosRUFBWW9FLFdBQVosQ0FBeUJDLEVBQUQsSUFBTTtBQUN6QyxRQUFJcUssU0FBUyxDQUFDMUwsT0FBZCxFQUF1QjtBQUNuQjBMLE1BQUFBLFNBQVMsQ0FBQzFMLE9BQVY7QUFDQTBMLE1BQUFBLFNBQVMsQ0FBQzFMLE9BQVYsR0FBb0JyRCxTQUFwQjtBQUNIOztBQUNELFFBQUk4TyxVQUFVLElBQUlFLE9BQWxCLEVBQTJCOztBQUMzQixRQUFJdEssRUFBRSxJQUFJQSxFQUFFLENBQUN3SyxPQUFiLEVBQXNCO0FBQ2xCSCxNQUFBQSxTQUFTLENBQUMxTCxPQUFWLEdBQW9COEwsT0FBTyxDQUFDekssRUFBRCxFQUFNTCxTQUFELElBQWFBLFNBQVMsSUFBSTRLLFVBQVUsQ0FBQzVLLFNBQUQsQ0FBekMsRUFDekI7QUFDRUUsUUFBQUE7QUFERixPQUR5QixDQUEzQjtBQUlIO0FBQ0osR0FaYyxFQVlaLENBQ0N1SyxVQURELEVBRUN2SyxVQUZELEVBR0N5SyxPQUhELENBWlksQ0FBZjtBQWlCQSxHQUFDLEdBQUczTyxNQUFKLEVBQVk1RyxTQUFaLENBQXNCLE1BQUk7QUFDdEIsUUFBSSxDQUFDa1YsdUJBQUwsRUFBOEI7QUFDMUIsVUFBSSxDQUFDSyxPQUFMLEVBQWM7QUFDVixjQUFNSSxZQUFZLEdBQUcsQ0FBQyxHQUFHM0gsb0JBQUosRUFBMEJuQixtQkFBMUIsQ0FBOEMsTUFBSTJJLFVBQVUsQ0FBQyxJQUFELENBQTVELENBQXJCO0FBRUEsZUFBTyxNQUFJLENBQUMsR0FBR3hILG9CQUFKLEVBQTBCbEIsa0JBQTFCLENBQTZDNkksWUFBN0MsQ0FBWDtBQUVIO0FBQ0o7QUFDSixHQVRELEVBU0csQ0FDQ0osT0FERCxDQVRIO0FBWUEsU0FBTyxDQUNIeEssTUFERyxFQUVId0ssT0FGRyxDQUFQO0FBSUg7O0FBQ0QsU0FBU0csT0FBVCxDQUFpQkUsT0FBakIsRUFBMEJDLFFBQTFCLEVBQW9Dck8sT0FBcEMsRUFBNkM7QUFDekMsUUFBTTtBQUFFaUcsSUFBQUEsRUFBRjtBQUFPcUksSUFBQUEsUUFBUDtBQUFrQkMsSUFBQUE7QUFBbEIsTUFBZ0NDLGNBQWMsQ0FBQ3hPLE9BQUQsQ0FBcEQ7QUFDQXVPLEVBQUFBLFFBQVEsQ0FBQ3BILEdBQVQsQ0FBYWlILE9BQWIsRUFBc0JDLFFBQXRCO0FBQ0FDLEVBQUFBLFFBQVEsQ0FBQ0osT0FBVCxDQUFpQkUsT0FBakI7QUFDQSxTQUFPLFNBQVNOLFNBQVQsR0FBcUI7QUFDeEJTLElBQUFBLFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQkwsT0FBaEI7QUFDQUUsSUFBQUEsUUFBUSxDQUFDUixTQUFULENBQW1CTSxPQUFuQixFQUZ3QixDQUd4Qjs7QUFDQSxRQUFJRyxRQUFRLENBQUNHLElBQVQsS0FBa0IsQ0FBdEIsRUFBeUI7QUFDckJKLE1BQUFBLFFBQVEsQ0FBQ0ssVUFBVDtBQUNBQyxNQUFBQSxTQUFTLENBQUNILE1BQVYsQ0FBaUJ4SSxFQUFqQjtBQUNIO0FBQ0osR0FSRDtBQVNIOztBQUNELE1BQU0ySSxTQUFTLEdBQUcsSUFBSTVFLEdBQUosRUFBbEI7O0FBQ0EsU0FBU3dFLGNBQVQsQ0FBd0J4TyxPQUF4QixFQUFpQztBQUM3QixRQUFNaUcsRUFBRSxHQUFHakcsT0FBTyxDQUFDc0QsVUFBUixJQUFzQixFQUFqQztBQUNBLE1BQUlnSyxRQUFRLEdBQUdzQixTQUFTLENBQUMvSCxHQUFWLENBQWNaLEVBQWQsQ0FBZjs7QUFDQSxNQUFJcUgsUUFBSixFQUFjO0FBQ1YsV0FBT0EsUUFBUDtBQUNIOztBQUNELFFBQU1pQixRQUFRLEdBQUcsSUFBSXZFLEdBQUosRUFBakI7QUFDQSxRQUFNc0UsUUFBUSxHQUFHLElBQUlYLG9CQUFKLENBQTBCa0IsT0FBRCxJQUFXO0FBQ2pEQSxJQUFBQSxPQUFPLENBQUNoTixPQUFSLENBQWlCK0UsS0FBRCxJQUFTO0FBQ3JCLFlBQU15SCxRQUFRLEdBQUdFLFFBQVEsQ0FBQzFILEdBQVQsQ0FBYUQsS0FBSyxDQUFDMU8sTUFBbkIsQ0FBakI7QUFDQSxZQUFNa0wsU0FBUyxHQUFHd0QsS0FBSyxDQUFDa0ksY0FBTixJQUF3QmxJLEtBQUssQ0FBQ21JLGlCQUFOLEdBQTBCLENBQXBFOztBQUNBLFVBQUlWLFFBQVEsSUFBSWpMLFNBQWhCLEVBQTJCO0FBQ3ZCaUwsUUFBQUEsUUFBUSxDQUFDakwsU0FBRCxDQUFSO0FBQ0g7QUFDSixLQU5EO0FBT0gsR0FSZ0IsRUFRZHBELE9BUmMsQ0FBakI7QUFTQTRPLEVBQUFBLFNBQVMsQ0FBQ3pILEdBQVYsQ0FBY2xCLEVBQWQsRUFBa0JxSCxRQUFRLEdBQUc7QUFDekJySCxJQUFBQSxFQUR5QjtBQUV6QnFJLElBQUFBLFFBRnlCO0FBR3pCQyxJQUFBQTtBQUh5QixHQUE3QjtBQUtBLFNBQU9qQixRQUFQO0FBQ0g7Ozs7Ozs7Ozs7O0FDbkZZOztBQUNidE8sOENBQTZDO0FBQ3pDN0csRUFBQUEsS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0ErRyxlQUFBLEdBQWtCOFAsVUFBbEI7O0FBQ0EsSUFBSTVQLE1BQU0sR0FBR0Msc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsb0JBQUQsQ0FBUixDQUFuQzs7QUFDQSxJQUFJQyxPQUFPLEdBQUdELG1CQUFPLENBQUMsMkRBQUQsQ0FBckI7O0FBQ0EsU0FBU0Qsc0JBQVQsQ0FBZ0NLLEdBQWhDLEVBQXFDO0FBQ2pDLFNBQU9BLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFYLEdBQXdCRCxHQUF4QixHQUE4QjtBQUNqQ1AsSUFBQUEsT0FBTyxFQUFFTztBQUR3QixHQUFyQztBQUdIOztBQUNELFNBQVNzUCxVQUFULENBQW9CQyxpQkFBcEIsRUFBdUM7QUFDbkMsV0FBU0MsaUJBQVQsQ0FBMkJsWixLQUEzQixFQUFrQztBQUM5QixXQUFPLGFBQWNvSixNQUFNLENBQUNELE9BQVAsQ0FBZTBELGFBQWYsQ0FBNkJvTSxpQkFBN0IsRUFBZ0RqUSxNQUFNLENBQUN3TSxNQUFQLENBQWM7QUFDL0V0UixNQUFBQSxNQUFNLEVBQUUsQ0FBQyxHQUFHcUYsT0FBSixFQUFhdkYsU0FBYjtBQUR1RSxLQUFkLEVBRWxFaEUsS0FGa0UsQ0FBaEQsQ0FBckI7QUFHSDs7QUFDRGtaLEVBQUFBLGlCQUFpQixDQUFDQyxlQUFsQixHQUFvQ0YsaUJBQWlCLENBQUNFLGVBQXREO0FBQ0FELEVBQUFBLGlCQUFpQixDQUFDRSxtQkFBbEIsR0FBd0NILGlCQUFpQixDQUFDRyxtQkFBMUQ7O0FBQ0EsWUFBMkM7QUFDdkMsVUFBTTVVLElBQUksR0FBR3lVLGlCQUFpQixDQUFDSSxXQUFsQixJQUFpQ0osaUJBQWlCLENBQUN6VSxJQUFuRCxJQUEyRCxTQUF4RTtBQUNBMFUsSUFBQUEsaUJBQWlCLENBQUNHLFdBQWxCLEdBQWlDLGNBQWE3VSxJQUFLLEdBQW5EO0FBQ0g7O0FBQ0QsU0FBTzBVLGlCQUFQO0FBQ0g7Ozs7Ozs7Ozs7O0FDekJZOztBQUNibFEsOENBQTZDO0FBQ3pDN0csRUFBQUEsS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0ErRyx1QkFBQSxHQUEwQmtGLGVBQTFCO0FBQ0FsRixpQkFBQSxHQUFvQnNGLFNBQXBCO0FBQ0F0RixpQkFBQSxHQUFvQm9RLFNBQXBCO0FBQ0FwUSxtQkFBQSxHQUFzQnFRLFdBQXRCO0FBQ0FyUSxtQkFBQSxHQUFzQnFGLFdBQXRCO0FBQ0FyRixtQkFBQSxHQUFzQnNRLFdBQXRCO0FBQ0F0USxrQkFBQSxHQUFxQmUsVUFBckI7QUFDQWYscUJBQUEsR0FBd0J1USxhQUF4QjtBQUNBdlEsbUJBQUEsR0FBc0J5RCxXQUF0QjtBQUNBekQsZUFBQSxHQUFrQixLQUFLLENBQXZCOztBQUNBLElBQUl3USx1QkFBdUIsR0FBR3BRLG1CQUFPLENBQUMsNkdBQUQsQ0FBckM7O0FBQ0EsSUFBSXFRLFlBQVksR0FBR3JRLG1CQUFPLENBQUMscUZBQUQsQ0FBMUI7O0FBQ0EsSUFBSXNRLG9CQUFvQixHQUFHdFEsbUJBQU8sQ0FBQyxvRkFBRCxDQUFsQzs7QUFDQSxJQUFJdVEsb0JBQW9CLEdBQUd2USxtQkFBTyxDQUFDLG9FQUFELENBQWxDOztBQUNBLElBQUl3USxLQUFLLEdBQUd6USxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyx3QkFBRCxDQUFSLENBQWxDOztBQUNBLElBQUl5USxNQUFNLEdBQUd6USxtQkFBTyxDQUFDLHFDQUFELENBQXBCOztBQUNBLElBQUkwUSxVQUFVLEdBQUcxUSxtQkFBTyxDQUFDLDhDQUFELENBQXhCOztBQUNBLElBQUkyUSxpQkFBaUIsR0FBRzNRLG1CQUFPLENBQUMsOERBQUQsQ0FBL0I7O0FBQ0EsSUFBSTRRLFlBQVksR0FBRzVRLG1CQUFPLENBQUMsZ0RBQUQsQ0FBMUI7O0FBQ0EsSUFBSTZRLGdCQUFnQixHQUFHOVEsc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsdUNBQUQsQ0FBUixDQUE3Qzs7QUFDQSxJQUFJOFEsYUFBYSxHQUFHOVEsbUJBQU8sQ0FBQyxvREFBRCxDQUEzQjs7QUFDQSxJQUFJK1EsV0FBVyxHQUFHL1EsbUJBQU8sQ0FBQyxnREFBRCxDQUF6Qjs7QUFDQSxTQUFTRCxzQkFBVCxDQUFnQ0ssR0FBaEMsRUFBcUM7QUFDakMsU0FBT0EsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVgsR0FBd0JELEdBQXhCLEdBQThCO0FBQ2pDUCxJQUFBQSxPQUFPLEVBQUVPO0FBRHdCLEdBQXJDO0FBR0g7O0FBQ0QsSUFBSTRRLGtCQUFKOztBQUNBLElBQUlyTCxLQUFKLEVBQXFDLEVBRXBDOztBQUNELE1BQU11TCxRQUFRLEdBQUd2TCxNQUFBLElBQXNDLEVBQXZEOztBQUNBLFNBQVN5TCxzQkFBVCxHQUFrQztBQUM5QixTQUFPMVIsTUFBTSxDQUFDd00sTUFBUCxDQUFjLElBQUlsSyxLQUFKLENBQVUsaUJBQVYsQ0FBZCxFQUE0QztBQUMvQzBILElBQUFBLFNBQVMsRUFBRTtBQURvQyxHQUE1QyxDQUFQO0FBR0g7O0FBQ0QsU0FBUzJILGFBQVQsQ0FBdUI3TCxJQUF2QixFQUE2QjhMLE1BQTdCLEVBQXFDO0FBQ2pDLFNBQU9BLE1BQU0sSUFBSTlMLElBQUksQ0FBQytMLFVBQUwsQ0FBZ0IsR0FBaEIsQ0FBVixHQUFpQy9MLElBQUksS0FBSyxHQUFULEdBQWUsQ0FBQyxHQUFHNEssdUJBQUosRUFBNkI3SywwQkFBN0IsQ0FBd0QrTCxNQUF4RCxDQUFmLEdBQWtGLEdBQUVBLE1BQU8sR0FBRUUsZUFBZSxDQUFDaE0sSUFBRCxDQUFmLEtBQTBCLEdBQTFCLEdBQWdDQSxJQUFJLENBQUNtSSxTQUFMLENBQWUsQ0FBZixDQUFoQyxHQUFvRG5JLElBQUssRUFBdkwsR0FBMkxBLElBQWxNO0FBQ0g7O0FBQ0QsU0FBU1YsZUFBVCxDQUF5QlUsSUFBekIsRUFBK0IxRSxNQUEvQixFQUF1Q2lFLE9BQXZDLEVBQWdEQyxhQUFoRCxFQUErRDtBQUMzRCxNQUFJVyxLQUFKLEVBQXFDLEVBQXJDLE1BT087QUFDSCxXQUFPLEtBQVA7QUFDSDtBQUNKOztBQUNELFNBQVNULFNBQVQsQ0FBbUJNLElBQW5CLEVBQXlCMUUsTUFBekIsRUFBaUNxRSxhQUFqQyxFQUFnRDtBQUM1QyxNQUFJUSxLQUFKLEVBQXFDLEVBS3BDOztBQUNELFNBQU9ILElBQVA7QUFDSDs7QUFDRCxTQUFTd0ssU0FBVCxDQUFtQnhLLElBQW5CLEVBQXlCMUUsTUFBekIsRUFBaUM7QUFDN0IsTUFBSTZFLEtBQUosRUFBcUMsRUFLcEM7O0FBQ0QsU0FBT0gsSUFBUDtBQUNIOztBQUNELFNBQVNnTSxlQUFULENBQXlCaE0sSUFBekIsRUFBK0I7QUFDM0IsUUFBTTJNLFVBQVUsR0FBRzNNLElBQUksQ0FBQzNELE9BQUwsQ0FBYSxHQUFiLENBQW5CO0FBQ0EsUUFBTXVRLFNBQVMsR0FBRzVNLElBQUksQ0FBQzNELE9BQUwsQ0FBYSxHQUFiLENBQWxCOztBQUNBLE1BQUlzUSxVQUFVLEdBQUcsQ0FBQyxDQUFkLElBQW1CQyxTQUFTLEdBQUcsQ0FBQyxDQUFwQyxFQUF1QztBQUNuQzVNLElBQUFBLElBQUksR0FBR0EsSUFBSSxDQUFDbUksU0FBTCxDQUFlLENBQWYsRUFBa0J3RSxVQUFVLEdBQUcsQ0FBQyxDQUFkLEdBQWtCQSxVQUFsQixHQUErQkMsU0FBakQsQ0FBUDtBQUNIOztBQUNELFNBQU81TSxJQUFQO0FBQ0g7O0FBQ0QsU0FBU3lLLFdBQVQsQ0FBcUJ6SyxJQUFyQixFQUEyQjtBQUN2QkEsRUFBQUEsSUFBSSxHQUFHZ00sZUFBZSxDQUFDaE0sSUFBRCxDQUF0QjtBQUNBLFNBQU9BLElBQUksS0FBSzBMLFFBQVQsSUFBcUIxTCxJQUFJLENBQUMrTCxVQUFMLENBQWdCTCxRQUFRLEdBQUcsR0FBM0IsQ0FBNUI7QUFDSDs7QUFDRCxTQUFTak0sV0FBVCxDQUFxQk8sSUFBckIsRUFBMkI7QUFDdkI7QUFDQSxTQUFPNkwsYUFBYSxDQUFDN0wsSUFBRCxFQUFPMEwsUUFBUCxDQUFwQjtBQUNIOztBQUNELFNBQVNoQixXQUFULENBQXFCMUssSUFBckIsRUFBMkI7QUFDdkJBLEVBQUFBLElBQUksR0FBR0EsSUFBSSxDQUFDRSxLQUFMLENBQVd3TCxRQUFRLENBQUNlLE1BQXBCLENBQVA7QUFDQSxNQUFJLENBQUN6TSxJQUFJLENBQUMrTCxVQUFMLENBQWdCLEdBQWhCLENBQUwsRUFBMkIvTCxJQUFJLEdBQUksSUFBR0EsSUFBSyxFQUFoQjtBQUMzQixTQUFPQSxJQUFQO0FBQ0g7O0FBQ0QsU0FBUzdFLFVBQVQsQ0FBb0IwUixHQUFwQixFQUF5QjtBQUNyQjtBQUNBLE1BQUlBLEdBQUcsQ0FBQ2QsVUFBSixDQUFlLEdBQWYsS0FBdUJjLEdBQUcsQ0FBQ2QsVUFBSixDQUFlLEdBQWYsQ0FBdkIsSUFBOENjLEdBQUcsQ0FBQ2QsVUFBSixDQUFlLEdBQWYsQ0FBbEQsRUFBdUUsT0FBTyxJQUFQOztBQUN2RSxNQUFJO0FBQ0E7QUFDQSxVQUFNZSxjQUFjLEdBQUcsQ0FBQyxHQUFHN0IsTUFBSixFQUFZOEIsaUJBQVosRUFBdkI7QUFDQSxVQUFNQyxRQUFRLEdBQUcsSUFBSUMsR0FBSixDQUFRSixHQUFSLEVBQWFDLGNBQWIsQ0FBakI7QUFDQSxXQUFPRSxRQUFRLENBQUNFLE1BQVQsS0FBb0JKLGNBQXBCLElBQXNDckMsV0FBVyxDQUFDdUMsUUFBUSxDQUFDelgsUUFBVixDQUF4RDtBQUNILEdBTEQsQ0FLRSxPQUFPUSxDQUFQLEVBQVU7QUFDUixXQUFPLEtBQVA7QUFDSDtBQUNKOztBQUNELFNBQVM0VSxhQUFULENBQXVCbEcsS0FBdkIsRUFBOEIwSSxVQUE5QixFQUEwQ0MsS0FBMUMsRUFBaUQ7QUFDN0MsTUFBSUMsaUJBQWlCLEdBQUcsRUFBeEI7QUFDQSxRQUFNQyxZQUFZLEdBQUcsQ0FBQyxHQUFHL0IsV0FBSixFQUFpQmdDLGFBQWpCLENBQStCOUksS0FBL0IsQ0FBckI7QUFDQSxRQUFNK0ksYUFBYSxHQUFHRixZQUFZLENBQUNHLE1BQW5DO0FBQ0EsUUFBTUMsY0FBYyxHQUFHO0FBQ3ZCLEdBQUNQLFVBQVUsS0FBSzFJLEtBQWYsR0FBdUIsQ0FBQyxHQUFHNkcsYUFBSixFQUFtQnFDLGVBQW5CLENBQW1DTCxZQUFuQyxFQUFpREgsVUFBakQsQ0FBdkIsR0FBc0YsRUFBdkYsS0FBOEY7QUFDOUY7QUFDQUMsRUFBQUEsS0FIQTtBQUlBQyxFQUFBQSxpQkFBaUIsR0FBRzVJLEtBQXBCO0FBQ0EsUUFBTW1KLE1BQU0sR0FBRzFULE1BQU0sQ0FBQzRDLElBQVAsQ0FBWTBRLGFBQVosQ0FBZjs7QUFDQSxNQUFJLENBQUNJLE1BQU0sQ0FBQ0MsS0FBUCxDQUFjQyxLQUFELElBQVM7QUFDdkIsUUFBSXphLEtBQUssR0FBR3FhLGNBQWMsQ0FBQ0ksS0FBRCxDQUFkLElBQXlCLEVBQXJDO0FBQ0EsVUFBTTtBQUFFQyxNQUFBQSxNQUFGO0FBQVdDLE1BQUFBO0FBQVgsUUFBeUJSLGFBQWEsQ0FBQ00sS0FBRCxDQUE1QyxDQUZ1QixDQUd2QjtBQUNBOztBQUNBLFFBQUlHLFFBQVEsR0FBSSxJQUFHRixNQUFNLEdBQUcsS0FBSCxHQUFXLEVBQUcsR0FBRUQsS0FBTSxHQUEvQzs7QUFDQSxRQUFJRSxRQUFKLEVBQWM7QUFDVkMsTUFBQUEsUUFBUSxHQUFJLEdBQUUsQ0FBQzVhLEtBQUQsR0FBUyxHQUFULEdBQWUsRUFBRyxJQUFHNGEsUUFBUyxHQUE1QztBQUNIOztBQUNELFFBQUlGLE1BQU0sSUFBSSxDQUFDckYsS0FBSyxDQUFDQyxPQUFOLENBQWN0VixLQUFkLENBQWYsRUFBcUNBLEtBQUssR0FBRyxDQUN6Q0EsS0FEeUMsQ0FBUjtBQUdyQyxXQUFPLENBQUMyYSxRQUFRLElBQUlGLEtBQUssSUFBSUosY0FBdEIsTUFDTkwsaUJBQWlCLEdBQUdBLGlCQUFpQixDQUFDcFIsT0FBbEIsQ0FBMEJnUyxRQUExQixFQUFvQ0YsTUFBTSxHQUFHMWEsS0FBSyxDQUFDaUUsR0FBTixFQUFVO0FBQzVFO0FBQ0E7QUFDQTtBQUNDNFcsSUFBQUEsT0FBRCxJQUFXQyxrQkFBa0IsQ0FBQ0QsT0FBRCxDQUpxQyxFQUtoRUUsSUFMZ0UsQ0FLM0QsR0FMMkQsQ0FBSCxHQUtqREQsa0JBQWtCLENBQUM5YSxLQUFELENBTFgsS0FLdUIsR0FOckMsQ0FBUDtBQU9ILEdBbkJJLENBQUwsRUFtQkk7QUFDQWdhLElBQUFBLGlCQUFpQixHQUFHLEVBQXBCLENBQXVCO0FBQXZCLEtBREEsQ0FHSjtBQUNBO0FBQ0M7O0FBQ0QsU0FBTztBQUNITyxJQUFBQSxNQURHO0FBRUhTLElBQUFBLE1BQU0sRUFBRWhCO0FBRkwsR0FBUDtBQUlIOztBQUNELFNBQVNpQixrQkFBVCxDQUE0QmxCLEtBQTVCLEVBQW1DUSxNQUFuQyxFQUEyQztBQUN2QyxRQUFNVyxhQUFhLEdBQUcsRUFBdEI7QUFFQXJVLEVBQUFBLE1BQU0sQ0FBQzRDLElBQVAsQ0FBWXNRLEtBQVosRUFBbUJyUSxPQUFuQixDQUE0Qk4sR0FBRCxJQUFPO0FBQzlCLFFBQUksQ0FBQ21SLE1BQU0sQ0FBQ1ksUUFBUCxDQUFnQi9SLEdBQWhCLENBQUwsRUFBMkI7QUFDdkI4UixNQUFBQSxhQUFhLENBQUM5UixHQUFELENBQWIsR0FBcUIyUSxLQUFLLENBQUMzUSxHQUFELENBQTFCO0FBQ0g7QUFDSixHQUpEO0FBS0EsU0FBTzhSLGFBQVA7QUFDSDs7QUFDRCxTQUFTMVEsV0FBVCxDQUFxQnpJLE1BQXJCLEVBQTZCNEYsSUFBN0IsRUFBbUN5VCxTQUFuQyxFQUE4QztBQUMxQztBQUNBLE1BQUlDLElBQUo7QUFDQSxNQUFJQyxXQUFXLEdBQUcsT0FBTzNULElBQVAsS0FBZ0IsUUFBaEIsR0FBMkJBLElBQTNCLEdBQWtDLENBQUMsR0FBR2lRLE1BQUosRUFBWTJELG9CQUFaLENBQWlDNVQsSUFBakMsQ0FBcEQsQ0FIMEMsQ0FJMUM7QUFDQTs7QUFDQSxRQUFNNlQsYUFBYSxHQUFHRixXQUFXLENBQUNHLEtBQVosQ0FBa0Isb0JBQWxCLENBQXRCO0FBQ0EsUUFBTUMsa0JBQWtCLEdBQUdGLGFBQWEsR0FBR0YsV0FBVyxDQUFDakMsTUFBWixDQUFtQm1DLGFBQWEsQ0FBQyxDQUFELENBQWIsQ0FBaUJwQyxNQUFwQyxDQUFILEdBQWlEa0MsV0FBekY7QUFDQSxRQUFNSyxRQUFRLEdBQUdELGtCQUFrQixDQUFDRSxLQUFuQixDQUF5QixHQUF6QixDQUFqQjs7QUFDQSxNQUFJLENBQUNELFFBQVEsQ0FBQyxDQUFELENBQVIsSUFBZSxFQUFoQixFQUFvQkYsS0FBcEIsQ0FBMEIsV0FBMUIsQ0FBSixFQUE0QztBQUN4Q3ZSLElBQUFBLE9BQU8sQ0FBQzVJLEtBQVIsQ0FBZSx1Q0FBc0NnYSxXQUFZLDZFQUFqRTtBQUNBLFVBQU1PLGFBQWEsR0FBRyxDQUFDLEdBQUdqRSxNQUFKLEVBQVlrRSx3QkFBWixDQUFxQ0osa0JBQXJDLENBQXRCO0FBQ0FKLElBQUFBLFdBQVcsR0FBRyxDQUFDRSxhQUFhLEdBQUdBLGFBQWEsQ0FBQyxDQUFELENBQWhCLEdBQXNCLEVBQXBDLElBQTBDSyxhQUF4RDtBQUNILEdBYnlDLENBYzFDOzs7QUFDQSxNQUFJLENBQUMvVCxVQUFVLENBQUN3VCxXQUFELENBQWYsRUFBOEI7QUFDMUIsV0FBT0YsU0FBUyxHQUFHLENBQ2ZFLFdBRGUsQ0FBSCxHQUVaQSxXQUZKO0FBR0g7O0FBQ0QsTUFBSTtBQUNBRCxJQUFBQSxJQUFJLEdBQUcsSUFBSXpCLEdBQUosQ0FBUTBCLFdBQVcsQ0FBQzVDLFVBQVosQ0FBdUIsR0FBdkIsSUFBOEIzVyxNQUFNLENBQUNnYSxNQUFyQyxHQUE4Q2hhLE1BQU0sQ0FBQ0csUUFBN0QsRUFBdUUsVUFBdkUsQ0FBUDtBQUNILEdBRkQsQ0FFRSxPQUFPUSxDQUFQLEVBQVU7QUFDUjtBQUNBMlksSUFBQUEsSUFBSSxHQUFHLElBQUl6QixHQUFKLENBQVEsR0FBUixFQUFhLFVBQWIsQ0FBUDtBQUNIOztBQUNELE1BQUk7QUFDQSxVQUFNb0MsUUFBUSxHQUFHLElBQUlwQyxHQUFKLENBQVEwQixXQUFSLEVBQXFCRCxJQUFyQixDQUFqQjtBQUNBVyxJQUFBQSxRQUFRLENBQUM5WixRQUFULEdBQW9CLENBQUMsR0FBR3FWLHVCQUFKLEVBQTZCN0ssMEJBQTdCLENBQXdEc1AsUUFBUSxDQUFDOVosUUFBakUsQ0FBcEI7QUFDQSxRQUFJK1osY0FBYyxHQUFHLEVBQXJCOztBQUNBLFFBQUksQ0FBQyxHQUFHcEUsVUFBSixFQUFnQnFFLGNBQWhCLENBQStCRixRQUFRLENBQUM5WixRQUF4QyxLQUFxRDhaLFFBQVEsQ0FBQ0csWUFBOUQsSUFBOEVmLFNBQWxGLEVBQTZGO0FBQ3pGLFlBQU1yQixLQUFLLEdBQUcsQ0FBQyxHQUFHaEMsWUFBSixFQUFrQnFFLHNCQUFsQixDQUF5Q0osUUFBUSxDQUFDRyxZQUFsRCxDQUFkO0FBQ0EsWUFBTTtBQUFFbkIsUUFBQUEsTUFBRjtBQUFXVCxRQUFBQTtBQUFYLFVBQXVCakQsYUFBYSxDQUFDMEUsUUFBUSxDQUFDOVosUUFBVixFQUFvQjhaLFFBQVEsQ0FBQzlaLFFBQTdCLEVBQXVDNlgsS0FBdkMsQ0FBMUM7O0FBQ0EsVUFBSWlCLE1BQUosRUFBWTtBQUNSaUIsUUFBQUEsY0FBYyxHQUFHLENBQUMsR0FBR3JFLE1BQUosRUFBWTJELG9CQUFaLENBQWlDO0FBQzlDclosVUFBQUEsUUFBUSxFQUFFOFksTUFEb0M7QUFFOUNxQixVQUFBQSxJQUFJLEVBQUVMLFFBQVEsQ0FBQ0ssSUFGK0I7QUFHOUN0QyxVQUFBQSxLQUFLLEVBQUVrQixrQkFBa0IsQ0FBQ2xCLEtBQUQsRUFBUVEsTUFBUjtBQUhxQixTQUFqQyxDQUFqQjtBQUtIO0FBQ0osS0FkRCxDQWVBOzs7QUFDQSxVQUFNalEsWUFBWSxHQUFHMFIsUUFBUSxDQUFDbkMsTUFBVCxLQUFvQndCLElBQUksQ0FBQ3hCLE1BQXpCLEdBQWtDbUMsUUFBUSxDQUFDclUsSUFBVCxDQUFja0YsS0FBZCxDQUFvQm1QLFFBQVEsQ0FBQ25DLE1BQVQsQ0FBZ0JULE1BQXBDLENBQWxDLEdBQWdGNEMsUUFBUSxDQUFDclUsSUFBOUc7QUFDQSxXQUFPeVQsU0FBUyxHQUFHLENBQ2Y5USxZQURlLEVBRWYyUixjQUFjLElBQUkzUixZQUZILENBQUgsR0FHWkEsWUFISjtBQUlILEdBckJELENBcUJFLE9BQU81SCxDQUFQLEVBQVU7QUFDUixXQUFPMFksU0FBUyxHQUFHLENBQ2ZFLFdBRGUsQ0FBSCxHQUVaQSxXQUZKO0FBR0g7QUFDSjs7QUFDRCxTQUFTZ0IsV0FBVCxDQUFxQjlDLEdBQXJCLEVBQTBCO0FBQ3RCLFFBQU1LLE1BQU0sR0FBRyxDQUFDLEdBQUdqQyxNQUFKLEVBQVk4QixpQkFBWixFQUFmO0FBQ0EsU0FBT0YsR0FBRyxDQUFDZCxVQUFKLENBQWVtQixNQUFmLElBQXlCTCxHQUFHLENBQUMxRSxTQUFKLENBQWMrRSxNQUFNLENBQUNULE1BQXJCLENBQXpCLEdBQXdESSxHQUEvRDtBQUNIOztBQUNELFNBQVMrQyxZQUFULENBQXNCeGEsTUFBdEIsRUFBOEJ5WCxHQUE5QixFQUFtQzVSLEVBQW5DLEVBQXVDO0FBQ25DO0FBQ0E7QUFDQSxNQUFJLENBQUMwQyxZQUFELEVBQWVDLFVBQWYsSUFBNkJDLFdBQVcsQ0FBQ3pJLE1BQUQsRUFBU3lYLEdBQVQsRUFBYyxJQUFkLENBQTVDO0FBQ0EsUUFBTUssTUFBTSxHQUFHLENBQUMsR0FBR2pDLE1BQUosRUFBWThCLGlCQUFaLEVBQWY7QUFDQSxRQUFNOEMsYUFBYSxHQUFHbFMsWUFBWSxDQUFDb08sVUFBYixDQUF3Qm1CLE1BQXhCLENBQXRCO0FBQ0EsUUFBTTRDLFdBQVcsR0FBR2xTLFVBQVUsSUFBSUEsVUFBVSxDQUFDbU8sVUFBWCxDQUFzQm1CLE1BQXRCLENBQWxDO0FBQ0F2UCxFQUFBQSxZQUFZLEdBQUdnUyxXQUFXLENBQUNoUyxZQUFELENBQTFCO0FBQ0FDLEVBQUFBLFVBQVUsR0FBR0EsVUFBVSxHQUFHK1IsV0FBVyxDQUFDL1IsVUFBRCxDQUFkLEdBQTZCQSxVQUFwRDtBQUNBLFFBQU1tUyxXQUFXLEdBQUdGLGFBQWEsR0FBR2xTLFlBQUgsR0FBa0I4QixXQUFXLENBQUM5QixZQUFELENBQTlEO0FBQ0EsUUFBTXFTLFVBQVUsR0FBRy9VLEVBQUUsR0FBRzBVLFdBQVcsQ0FBQzlSLFdBQVcsQ0FBQ3pJLE1BQUQsRUFBUzZGLEVBQVQsQ0FBWixDQUFkLEdBQTBDMkMsVUFBVSxJQUFJRCxZQUE3RTtBQUNBLFNBQU87QUFDSGtQLElBQUFBLEdBQUcsRUFBRWtELFdBREY7QUFFSDlVLElBQUFBLEVBQUUsRUFBRTZVLFdBQVcsR0FBR0UsVUFBSCxHQUFnQnZRLFdBQVcsQ0FBQ3VRLFVBQUQ7QUFGdkMsR0FBUDtBQUlIOztBQUNELFNBQVNDLG1CQUFULENBQTZCMWEsUUFBN0IsRUFBdUMyYSxLQUF2QyxFQUE4QztBQUMxQyxRQUFNQyxhQUFhLEdBQUcsQ0FBQyxHQUFHdkYsdUJBQUosRUFBNkI5Syx1QkFBN0IsQ0FBcUQsQ0FBQyxHQUFHZ0wsb0JBQUosRUFBMEJzRixtQkFBMUIsQ0FBOEM3YSxRQUE5QyxDQUFyRCxDQUF0Qjs7QUFDQSxNQUFJNGEsYUFBYSxLQUFLLE1BQWxCLElBQTRCQSxhQUFhLEtBQUssU0FBbEQsRUFBNkQ7QUFDekQsV0FBTzVhLFFBQVA7QUFDSCxHQUp5QyxDQUsxQzs7O0FBQ0EsTUFBSSxDQUFDMmEsS0FBSyxDQUFDMUIsUUFBTixDQUFlMkIsYUFBZixDQUFMLEVBQW9DO0FBQ2hDO0FBQ0FELElBQUFBLEtBQUssQ0FBQ0csSUFBTixDQUFZQyxJQUFELElBQVE7QUFDZixVQUFJLENBQUMsR0FBR3BGLFVBQUosRUFBZ0JxRSxjQUFoQixDQUErQmUsSUFBL0IsS0FBd0MsQ0FBQyxHQUFHL0UsV0FBSixFQUFpQmdDLGFBQWpCLENBQStCK0MsSUFBL0IsRUFBcUNDLEVBQXJDLENBQXdDalEsSUFBeEMsQ0FBNkM2UCxhQUE3QyxDQUE1QyxFQUF5RztBQUNyRzVhLFFBQUFBLFFBQVEsR0FBRythLElBQVg7QUFDQSxlQUFPLElBQVA7QUFDSDtBQUNKLEtBTEQ7QUFNSDs7QUFDRCxTQUFPLENBQUMsR0FBRzFGLHVCQUFKLEVBQTZCOUssdUJBQTdCLENBQXFEdkssUUFBckQsQ0FBUDtBQUNIOztBQUNELE1BQU1pYix1QkFBdUIsR0FBR3JRLE1BQUEsSUFBbUgsQ0FBbko7QUFRQSxNQUFNNFEsa0JBQWtCLEdBQUd0TixNQUFNLENBQUMsb0JBQUQsQ0FBakM7O0FBQ0EsU0FBU3VOLFVBQVQsQ0FBb0JuRSxHQUFwQixFQUF5Qm9FLFFBQXpCLEVBQW1DO0FBQy9CLFNBQU96TCxLQUFLLENBQUNxSCxHQUFELEVBQU07QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FxRSxJQUFBQSxXQUFXLEVBQUU7QUFaQyxHQUFOLENBQUwsQ0FhSmpZLElBYkksQ0FhRUMsR0FBRCxJQUFPO0FBQ1gsUUFBSSxDQUFDQSxHQUFHLENBQUN1TSxFQUFULEVBQWE7QUFDVCxVQUFJd0wsUUFBUSxHQUFHLENBQVgsSUFBZ0IvWCxHQUFHLENBQUNWLE1BQUosSUFBYyxHQUFsQyxFQUF1QztBQUNuQyxlQUFPd1ksVUFBVSxDQUFDbkUsR0FBRCxFQUFNb0UsUUFBUSxHQUFHLENBQWpCLENBQWpCO0FBQ0g7O0FBQ0QsVUFBSS9YLEdBQUcsQ0FBQ1YsTUFBSixLQUFlLEdBQW5CLEVBQXdCO0FBQ3BCLGVBQU9VLEdBQUcsQ0FBQ2lZLElBQUosR0FBV2xZLElBQVgsQ0FBaUIxRyxJQUFELElBQVE7QUFDM0IsY0FBSUEsSUFBSSxDQUFDNmUsUUFBVCxFQUFtQjtBQUNmLG1CQUFPO0FBQ0hBLGNBQUFBLFFBQVEsRUFBRUw7QUFEUCxhQUFQO0FBR0g7O0FBQ0QsZ0JBQU0sSUFBSXZVLEtBQUosQ0FBVyw2QkFBWCxDQUFOO0FBQ0gsU0FQTSxDQUFQO0FBUUg7O0FBQ0QsWUFBTSxJQUFJQSxLQUFKLENBQVcsNkJBQVgsQ0FBTjtBQUNIOztBQUNELFdBQU90RCxHQUFHLENBQUNpWSxJQUFKLEVBQVA7QUFDSCxHQS9CTSxDQUFQO0FBZ0NIOztBQUNELFNBQVNFLGFBQVQsQ0FBdUJDLFFBQXZCLEVBQWlDQyxjQUFqQyxFQUFpRDtBQUM3QyxTQUFPUCxVQUFVLENBQUNNLFFBQUQsRUFBV0MsY0FBYyxHQUFHLENBQUgsR0FBTyxDQUFoQyxDQUFWLENBQTZDcFksS0FBN0MsQ0FBb0RpQyxHQUFELElBQU87QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsUUFBSSxDQUFDbVcsY0FBTCxFQUFxQjtBQUNqQixPQUFDLEdBQUcxRyxZQUFKLEVBQWtCeEosY0FBbEIsQ0FBaUNqRyxHQUFqQztBQUNIOztBQUNELFVBQU1BLEdBQU47QUFDSCxHQVJNLENBQVA7QUFTSDs7QUFDRCxNQUFNNUYsTUFBTixDQUFhO0FBQ1RnYyxFQUFBQSxXQUFXLENBQUNDLFNBQUQsRUFBWUMsTUFBWixFQUFvQkMsR0FBcEIsRUFBeUI7QUFBRUMsSUFBQUEsWUFBRjtBQUFpQkMsSUFBQUEsVUFBakI7QUFBOEJDLElBQUFBLEdBQTlCO0FBQW9DQyxJQUFBQSxPQUFwQztBQUE4Q0MsSUFBQUEsU0FBUyxFQUFFQyxVQUF6RDtBQUFzRTdXLElBQUFBLEdBQUcsRUFBRThXLElBQTNFO0FBQWtGQyxJQUFBQSxZQUFsRjtBQUFpR0MsSUFBQUEsVUFBakc7QUFBOEc5VyxJQUFBQSxNQUE5RztBQUF1SGlFLElBQUFBLE9BQXZIO0FBQWlJSSxJQUFBQSxhQUFqSTtBQUFpSkgsSUFBQUEsYUFBako7QUFBaUs2UyxJQUFBQTtBQUFqSyxHQUF6QixFQUF1TTtBQUM5TTtBQUNBLFNBQUtDLEdBQUwsR0FBVyxFQUFYLENBRjhNLENBSTlNOztBQUNBLFNBQUtDLEdBQUwsR0FBVyxFQUFYO0FBRUEsU0FBS0MsSUFBTCxHQUFZLENBQVo7O0FBQ0EsU0FBS0MsVUFBTCxHQUFtQnRmLENBQUQsSUFBSztBQUNuQixZQUFNbkMsS0FBSyxHQUFHbUMsQ0FBQyxDQUFDbkMsS0FBaEI7O0FBQ0EsVUFBSSxDQUFDQSxLQUFMLEVBQVk7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQUV1RSxVQUFBQSxRQUFRLEVBQUVrYyxTQUFaO0FBQXdCckUsVUFBQUEsS0FBSyxFQUFFc0U7QUFBL0IsWUFBMkMsSUFBakQ7QUFDQSxhQUFLZ0IsV0FBTCxDQUFpQixjQUFqQixFQUFpQyxDQUFDLEdBQUd6SCxNQUFKLEVBQVkyRCxvQkFBWixDQUFpQztBQUM5RHJaLFVBQUFBLFFBQVEsRUFBRWtLLFdBQVcsQ0FBQ2dTLFNBQUQsQ0FEeUM7QUFFOURyRSxVQUFBQSxLQUFLLEVBQUVzRTtBQUZ1RCxTQUFqQyxDQUFqQyxFQUdJLENBQUMsR0FBR3pHLE1BQUosRUFBWTBILE1BQVosRUFISjtBQUlBO0FBQ0g7O0FBQ0QsVUFBSSxDQUFDM2hCLEtBQUssQ0FBQzRoQixHQUFYLEVBQWdCO0FBQ1o7QUFDSDs7QUFDRCxVQUFJQyxZQUFKO0FBQ0EsWUFBTTtBQUFFaEcsUUFBQUEsR0FBRjtBQUFRNVIsUUFBQUEsRUFBRSxFQUFFMFcsR0FBWjtBQUFrQnpXLFFBQUFBLE9BQWxCO0FBQTRCNFgsUUFBQUE7QUFBNUIsVUFBcUM5aEIsS0FBM0M7O0FBQ0EsVUFBSW1QLEtBQUosRUFBMkMsRUF1QjFDOztBQUNELFdBQUtxUyxJQUFMLEdBQVlNLEdBQVo7QUFDQSxZQUFNO0FBQUV2ZCxRQUFBQSxRQUFRLEVBQUVrYztBQUFaLFVBQTJCLENBQUMsR0FBR3RHLGlCQUFKLEVBQXVCbUksZ0JBQXZCLENBQXdDekcsR0FBeEMsQ0FBakMsQ0FqRG1CLENBa0RuQjtBQUNBOztBQUNBLFVBQUksS0FBSzBHLEtBQUwsSUFBYzVCLEdBQUcsS0FBSyxLQUFLdkMsTUFBM0IsSUFBcUNxQyxTQUFTLEtBQUssS0FBS2xjLFFBQTVELEVBQXNFO0FBQ2xFO0FBQ0gsT0F0RGtCLENBdURuQjtBQUNBOzs7QUFDQSxVQUFJLEtBQUtpZSxJQUFMLElBQWEsQ0FBQyxLQUFLQSxJQUFMLENBQVV4aUIsS0FBVixDQUFsQixFQUFvQztBQUNoQztBQUNIOztBQUNELFdBQUt5aUIsTUFBTCxDQUFZLGNBQVosRUFBNEI1RyxHQUE1QixFQUFpQzhFLEdBQWpDLEVBQXNDelgsTUFBTSxDQUFDd00sTUFBUCxDQUFjLEVBQWQsRUFDbkN4TCxPQURtQyxFQUMxQjtBQUNSZ0IsUUFBQUEsT0FBTyxFQUFFaEIsT0FBTyxDQUFDZ0IsT0FBUixJQUFtQixLQUFLd1gsUUFEekI7QUFFUnBZLFFBQUFBLE1BQU0sRUFBRUosT0FBTyxDQUFDSSxNQUFSLElBQWtCLEtBQUtxRTtBQUZ2QixPQUQwQixDQUF0QyxFQUlJa1QsWUFKSjtBQUtILEtBakVELENBUjhNLENBMEU5TTs7O0FBQ0EsU0FBS3BPLEtBQUwsR0FBYSxDQUFDLEdBQUdtRyx1QkFBSixFQUE2QjlLLHVCQUE3QixDQUFxRDJSLFNBQXJELENBQWIsQ0EzRThNLENBNEU5TTs7QUFDQSxTQUFLa0MsVUFBTCxHQUFrQixFQUFsQixDQTdFOE0sQ0ErRTlNO0FBQ0E7QUFDQTs7QUFDQSxRQUFJbEMsU0FBUyxLQUFLLFNBQWxCLEVBQTZCO0FBQ3pCLFdBQUtrQyxVQUFMLENBQWdCLEtBQUtsUCxLQUFyQixJQUE4QjtBQUMxQnVOLFFBQUFBLFNBQVMsRUFBRUMsVUFEZTtBQUUxQjJCLFFBQUFBLE9BQU8sRUFBRSxJQUZpQjtBQUcxQjFpQixRQUFBQSxLQUFLLEVBQUUwZ0IsWUFIbUI7QUFJMUJ4VyxRQUFBQSxHQUFHLEVBQUU4VyxJQUpxQjtBQUsxQjJCLFFBQUFBLE9BQU8sRUFBRWpDLFlBQVksSUFBSUEsWUFBWSxDQUFDaUMsT0FMWjtBQU0xQkMsUUFBQUEsT0FBTyxFQUFFbEMsWUFBWSxJQUFJQSxZQUFZLENBQUNrQztBQU5aLE9BQTlCO0FBUUg7O0FBQ0QsU0FBS0gsVUFBTCxDQUFnQixPQUFoQixJQUEyQjtBQUN2QjNCLE1BQUFBLFNBQVMsRUFBRUYsR0FEWTtBQUV2QjFNLE1BQUFBLFdBQVcsRUFBRTtBQUZVLEtBQTNCLENBNUY4TSxDQWdHOU07QUFDQTs7QUFDQSxTQUFLd0MsTUFBTCxHQUFjcFMsTUFBTSxDQUFDb1MsTUFBckI7QUFDQSxTQUFLaUssVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLdGMsUUFBTCxHQUFnQmtjLFNBQWhCO0FBQ0EsU0FBS3JFLEtBQUwsR0FBYXNFLE1BQWIsQ0FyRzhNLENBc0c5TTtBQUNBOztBQUNBLFVBQU1xQyxpQkFBaUIsR0FBRyxDQUFDLEdBQUc3SSxVQUFKLEVBQWdCcUUsY0FBaEIsQ0FBK0JrQyxTQUEvQixLQUE2Q2hSLElBQUksQ0FBQ3VULGFBQUwsQ0FBbUJDLFVBQTFGOztBQUNBLFNBQUs3RSxNQUFMLEdBQWMyRSxpQkFBaUIsR0FBR3RDLFNBQUgsR0FBZUUsR0FBOUM7QUFDQSxTQUFLakcsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLd0ksR0FBTCxHQUFXL0IsWUFBWDtBQUNBLFNBQUtnQyxHQUFMLEdBQVcsSUFBWDtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JyQyxPQUFoQixDQTdHOE0sQ0E4RzlNO0FBQ0E7O0FBQ0EsU0FBS3dCLEtBQUwsR0FBYSxJQUFiO0FBQ0EsU0FBS25CLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS2lDLE9BQUwsR0FBZSxDQUFDLEVBQUU1VCxJQUFJLENBQUN1VCxhQUFMLENBQW1CTSxJQUFuQixJQUEyQjdULElBQUksQ0FBQ3VULGFBQUwsQ0FBbUJPLEdBQTlDLElBQXFEOVQsSUFBSSxDQUFDdVQsYUFBTCxDQUFtQlEsTUFBbkIsSUFBNkIsQ0FBQy9ULElBQUksQ0FBQ3VULGFBQUwsQ0FBbUJTLEdBQXRHLElBQTZHLENBQUNWLGlCQUFELElBQXNCLENBQUN0VCxJQUFJLENBQUNuSCxRQUFMLENBQWNvYixNQUFyQyxJQUErQyxDQUFDdlUsS0FBL0osQ0FBaEI7QUFDQSxTQUFLa1MsU0FBTCxHQUFpQixDQUFDLENBQUNBLFNBQW5CO0FBQ0EsU0FBS2hULGNBQUwsR0FBc0IsS0FBdEI7O0FBQ0EsUUFBSWMsS0FBSixFQUFxQyxFQU1wQzs7QUFDRCxlQUFtQyxFQXVCbEM7QUFDSjs7QUFDRDVHLEVBQUFBLE1BQU0sR0FBRztBQUNMVixJQUFBQSxNQUFNLENBQUNTLFFBQVAsQ0FBZ0JDLE1BQWhCO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7OztBQUFNeWIsRUFBQUEsSUFBSSxHQUFHO0FBQ0xuYyxJQUFBQSxNQUFNLENBQUM2WCxPQUFQLENBQWVzRSxJQUFmO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFNeE4sRUFBQUEsSUFBSSxDQUFDcUYsR0FBRCxFQUFNNVIsRUFBTixFQUFVQyxPQUFPLEdBQUcsRUFBcEIsRUFDSDtBQUNDLFFBQUlpRixLQUFKLEVBQTJDLEVBYTFDOztBQUNELEtBQUM7QUFBRTBNLE1BQUFBLEdBQUY7QUFBUTVSLE1BQUFBO0FBQVIsUUFBZ0IyVSxZQUFZLENBQUMsSUFBRCxFQUFPL0MsR0FBUCxFQUFZNVIsRUFBWixDQUE3QjtBQUNBLFdBQU8sS0FBS3dZLE1BQUwsQ0FBWSxXQUFaLEVBQXlCNUcsR0FBekIsRUFBOEI1UixFQUE5QixFQUFrQ0MsT0FBbEMsQ0FBUDtBQUNIO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBTWUsRUFBQUEsT0FBTyxDQUFDNFEsR0FBRCxFQUFNNVIsRUFBTixFQUFVQyxPQUFPLEdBQUcsRUFBcEIsRUFDTjtBQUNDLEtBQUM7QUFBRTJSLE1BQUFBLEdBQUY7QUFBUTVSLE1BQUFBO0FBQVIsUUFBZ0IyVSxZQUFZLENBQUMsSUFBRCxFQUFPL0MsR0FBUCxFQUFZNVIsRUFBWixDQUE3QjtBQUNBLFdBQU8sS0FBS3dZLE1BQUwsQ0FBWSxjQUFaLEVBQTRCNUcsR0FBNUIsRUFBaUM1UixFQUFqQyxFQUFxQ0MsT0FBckMsQ0FBUDtBQUNIOztBQUNXLFFBQU51WSxNQUFNLENBQUN6YSxNQUFELEVBQVM2VCxHQUFULEVBQWM1UixFQUFkLEVBQWtCQyxPQUFsQixFQUEyQjJYLFlBQTNCLEVBQXlDO0FBQ2pELFFBQUksQ0FBQzFYLFVBQVUsQ0FBQzBSLEdBQUQsQ0FBZixFQUFzQjtBQUNsQmhVLE1BQUFBLE1BQU0sQ0FBQ1MsUUFBUCxDQUFnQjBCLElBQWhCLEdBQXVCNlIsR0FBdkI7QUFDQSxhQUFPLEtBQVA7QUFDSDs7QUFDRCxVQUFNb0ksaUJBQWlCLEdBQUdwSSxHQUFHLEtBQUs1UixFQUFSLElBQWNDLE9BQU8sQ0FBQ2dhLEVBQXRCLElBQTRCaGEsT0FBTyxDQUFDMlosa0JBQTlELENBTGlELENBTWpEO0FBQ0E7O0FBQ0EsUUFBSTNaLE9BQU8sQ0FBQ2dhLEVBQVosRUFBZ0I7QUFDWixXQUFLYixPQUFMLEdBQWUsSUFBZjtBQUNIOztBQUNELFVBQU1jLFVBQVUsR0FBRyxLQUFLN1osTUFBeEI7O0FBQ0EsUUFBSTZFLEtBQUosRUFBcUMsWUE2Q3BDOztBQUNELFFBQUksQ0FBQ2pGLE9BQU8sQ0FBQ2dhLEVBQWIsRUFBaUI7QUFDYixXQUFLM0IsS0FBTCxHQUFhLEtBQWI7QUFDSCxLQTVEZ0QsQ0E2RGpEOzs7QUFDQSxRQUFJdEksTUFBTSxDQUFDdUssRUFBWCxFQUFlO0FBQ1hDLE1BQUFBLFdBQVcsQ0FBQ0MsSUFBWixDQUFpQixhQUFqQjtBQUNIOztBQUNELFVBQU07QUFBRXhaLE1BQUFBLE9BQU8sR0FBRTtBQUFYLFFBQXNCaEIsT0FBNUI7QUFDQSxVQUFNeWEsVUFBVSxHQUFHO0FBQ2Z6WixNQUFBQTtBQURlLEtBQW5COztBQUdBLFFBQUksS0FBSzBaLGNBQVQsRUFBeUI7QUFDckIsV0FBS0Msa0JBQUwsQ0FBd0IsS0FBS0QsY0FBN0IsRUFBNkNELFVBQTdDO0FBQ0g7O0FBQ0QxYSxJQUFBQSxFQUFFLEdBQUd3RSxXQUFXLENBQUNDLFNBQVMsQ0FBQytLLFdBQVcsQ0FBQ3hQLEVBQUQsQ0FBWCxHQUFrQnlQLFdBQVcsQ0FBQ3pQLEVBQUQsQ0FBN0IsR0FBb0NBLEVBQXJDLEVBQXlDQyxPQUFPLENBQUNJLE1BQWpELEVBQXlELEtBQUtxRSxhQUE5RCxDQUFWLENBQWhCO0FBQ0EsVUFBTW1XLFNBQVMsR0FBR3RMLFNBQVMsQ0FBQ0MsV0FBVyxDQUFDeFAsRUFBRCxDQUFYLEdBQWtCeVAsV0FBVyxDQUFDelAsRUFBRCxDQUE3QixHQUFvQ0EsRUFBckMsRUFBeUMsS0FBS0ssTUFBOUMsQ0FBM0I7QUFDQSxTQUFLc2EsY0FBTCxHQUFzQjNhLEVBQXRCO0FBQ0EsUUFBSThhLFlBQVksR0FBR1osVUFBVSxLQUFLLEtBQUs3WixNQUF2QyxDQTNFaUQsQ0E0RWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsUUFBSSxDQUFDSixPQUFPLENBQUNnYSxFQUFULElBQWUsS0FBS2MsZUFBTCxDQUFxQkYsU0FBckIsQ0FBZixJQUFrRCxDQUFDQyxZQUF2RCxFQUFxRTtBQUNqRSxXQUFLM0csTUFBTCxHQUFjMEcsU0FBZDtBQUNBdGdCLE1BQUFBLE1BQU0sQ0FBQ29TLE1BQVAsQ0FBY3FPLElBQWQsQ0FBbUIsaUJBQW5CLEVBQXNDaGIsRUFBdEMsRUFBMEMwYSxVQUExQyxFQUZpRSxDQUdqRTs7QUFDQSxXQUFLakQsV0FBTCxDQUFpQjFaLE1BQWpCLEVBQXlCNlQsR0FBekIsRUFBOEI1UixFQUE5QixFQUFrQ0MsT0FBbEM7QUFDQSxXQUFLZ2IsWUFBTCxDQUFrQkosU0FBbEI7QUFDQSxXQUFLSyxNQUFMLENBQVksS0FBS3hDLFVBQUwsQ0FBZ0IsS0FBS2xQLEtBQXJCLENBQVosRUFBeUMsSUFBekM7QUFDQWpQLE1BQUFBLE1BQU0sQ0FBQ29TLE1BQVAsQ0FBY3FPLElBQWQsQ0FBbUIsb0JBQW5CLEVBQXlDaGIsRUFBekMsRUFBNkMwYSxVQUE3QztBQUNBLGFBQU8sSUFBUDtBQUNIOztBQUNELFFBQUlTLE1BQU0sR0FBRyxDQUFDLEdBQUdqTCxpQkFBSixFQUF1Qm1JLGdCQUF2QixDQUF3Q3pHLEdBQXhDLENBQWI7QUFDQSxRQUFJO0FBQUV0WCxNQUFBQSxRQUFRLEVBQUVrYyxTQUFaO0FBQXdCckUsTUFBQUEsS0FBSyxFQUFFc0U7QUFBL0IsUUFBMkMwRSxNQUEvQyxDQTVGaUQsQ0E2RmpEO0FBQ0E7QUFDQTs7QUFDQSxRQUFJbEcsS0FBSixFQUFXbUcsUUFBWDs7QUFDQSxRQUFJO0FBQ0FuRyxNQUFBQSxLQUFLLEdBQUcsTUFBTSxLQUFLMkIsVUFBTCxDQUFnQnlFLFdBQWhCLEVBQWQ7QUFDQSxPQUFDO0FBQUVDLFFBQUFBLFVBQVUsRUFBRUY7QUFBZCxVQUE0QixNQUFNLENBQUMsR0FBR3hMLFlBQUosRUFBa0J0SixzQkFBbEIsRUFBbkM7QUFDSCxLQUhELENBR0UsT0FBTzJRLElBQVAsRUFBYTtBQUNYO0FBQ0E7QUFDQXJaLE1BQUFBLE1BQU0sQ0FBQ1MsUUFBUCxDQUFnQjBCLElBQWhCLEdBQXVCQyxFQUF2QjtBQUNBLGFBQU8sS0FBUDtBQUNILEtBekdnRCxDQTBHakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsUUFBSSxDQUFDLEtBQUt1YixRQUFMLENBQWNWLFNBQWQsQ0FBRCxJQUE2QixDQUFDQyxZQUFsQyxFQUFnRDtBQUM1Qy9jLE1BQUFBLE1BQU0sR0FBRyxjQUFUO0FBQ0gsS0FqSGdELENBa0hqRDtBQUNBOzs7QUFDQSxRQUFJNEUsVUFBVSxHQUFHM0MsRUFBakIsQ0FwSGlELENBcUhqRDtBQUNBO0FBQ0E7O0FBQ0F3VyxJQUFBQSxTQUFTLEdBQUdBLFNBQVMsR0FBRyxDQUFDLEdBQUc3Ryx1QkFBSixFQUE2QjlLLHVCQUE3QixDQUFxRDRLLFdBQVcsQ0FBQytHLFNBQUQsQ0FBaEUsQ0FBSCxHQUFrRkEsU0FBdkc7O0FBQ0EsUUFBSXdELGlCQUFpQixJQUFJeEQsU0FBUyxLQUFLLFNBQXZDLEVBQWtEO0FBQzlDdlcsTUFBQUEsT0FBTyxDQUFDMlosa0JBQVIsR0FBNkIsSUFBN0I7O0FBQ0EsVUFBSTFVLEtBQUosRUFBMkQsRUFBM0QsTUFXTztBQUNIaVcsUUFBQUEsTUFBTSxDQUFDN2dCLFFBQVAsR0FBa0IwYSxtQkFBbUIsQ0FBQ3dCLFNBQUQsRUFBWXZCLEtBQVosQ0FBckM7O0FBQ0EsWUFBSWtHLE1BQU0sQ0FBQzdnQixRQUFQLEtBQW9Ca2MsU0FBeEIsRUFBbUM7QUFDL0JBLFVBQUFBLFNBQVMsR0FBRzJFLE1BQU0sQ0FBQzdnQixRQUFuQjtBQUNBNmdCLFVBQUFBLE1BQU0sQ0FBQzdnQixRQUFQLEdBQWtCa0ssV0FBVyxDQUFDZ1MsU0FBRCxDQUE3QjtBQUNBNUUsVUFBQUEsR0FBRyxHQUFHLENBQUMsR0FBRzVCLE1BQUosRUFBWTJELG9CQUFaLENBQWlDd0gsTUFBakMsQ0FBTjtBQUNIO0FBQ0o7QUFDSjs7QUFDRCxVQUFNM1IsS0FBSyxHQUFHLENBQUMsR0FBR21HLHVCQUFKLEVBQTZCOUssdUJBQTdCLENBQXFEMlIsU0FBckQsQ0FBZDs7QUFDQSxRQUFJLENBQUN0VyxVQUFVLENBQUNGLEVBQUQsQ0FBZixFQUFxQjtBQUNqQixnQkFBMkM7QUFDdkMsY0FBTSxJQUFJdUIsS0FBSixDQUFXLGtCQUFpQnFRLEdBQUksY0FBYTVSLEVBQUcsMkNBQXRDLEdBQW9GLG9GQUE5RixDQUFOO0FBQ0g7O0FBQ0RwQyxNQUFBQSxNQUFNLENBQUNTLFFBQVAsQ0FBZ0IwQixJQUFoQixHQUF1QkMsRUFBdkI7QUFDQSxhQUFPLEtBQVA7QUFDSDs7QUFDRDJDLElBQUFBLFVBQVUsR0FBRzRNLFNBQVMsQ0FBQ0UsV0FBVyxDQUFDOU0sVUFBRCxDQUFaLEVBQTBCLEtBQUt0QyxNQUEvQixDQUF0Qjs7QUFDQSxRQUFJLENBQUMsR0FBRzRQLFVBQUosRUFBZ0JxRSxjQUFoQixDQUErQjlLLEtBQS9CLENBQUosRUFBMkM7QUFDdkMsWUFBTTJRLFFBQVEsR0FBRyxDQUFDLEdBQUdqSyxpQkFBSixFQUF1Qm1JLGdCQUF2QixDQUF3QzFWLFVBQXhDLENBQWpCO0FBQ0EsWUFBTXVQLFVBQVUsR0FBR2lJLFFBQVEsQ0FBQzdmLFFBQTVCO0FBQ0EsWUFBTW9oQixVQUFVLEdBQUcsQ0FBQyxHQUFHcEwsV0FBSixFQUFpQmdDLGFBQWpCLENBQStCOUksS0FBL0IsQ0FBbkI7QUFDQSxZQUFNbVMsVUFBVSxHQUFHLENBQUMsR0FBR3RMLGFBQUosRUFBbUJxQyxlQUFuQixDQUFtQ2dKLFVBQW5DLEVBQStDeEosVUFBL0MsQ0FBbkI7QUFDQSxZQUFNMEosaUJBQWlCLEdBQUdwUyxLQUFLLEtBQUswSSxVQUFwQztBQUNBLFlBQU1tQyxjQUFjLEdBQUd1SCxpQkFBaUIsR0FBR2xNLGFBQWEsQ0FBQ2xHLEtBQUQsRUFBUTBJLFVBQVIsRUFBb0J1RSxNQUFwQixDQUFoQixHQUE4QyxFQUF0Rjs7QUFFQSxVQUFJLENBQUNrRixVQUFELElBQWVDLGlCQUFpQixJQUFJLENBQUN2SCxjQUFjLENBQUNqQixNQUF4RCxFQUFnRTtBQUM1RCxjQUFNeUksYUFBYSxHQUFHNWMsTUFBTSxDQUFDNEMsSUFBUCxDQUFZNlosVUFBVSxDQUFDbEosTUFBdkIsRUFBK0IxSSxNQUEvQixDQUF1QytJLEtBQUQsSUFBUyxDQUFDNEQsTUFBTSxDQUFDNUQsS0FBRCxDQUF0RCxDQUF0Qjs7QUFFQSxZQUFJZ0osYUFBYSxDQUFDckssTUFBZCxHQUF1QixDQUEzQixFQUE4QjtBQUMxQixvQkFBMkM7QUFDdkNsUCxZQUFBQSxPQUFPLENBQUNDLElBQVIsQ0FBYyxHQUFFcVosaUJBQWlCLEdBQUksb0JBQUosR0FBMkIsaUNBQWlDLDhCQUFoRixHQUFpSCxlQUFjQyxhQUFhLENBQUMxSSxJQUFkLENBQW1CLElBQW5CLENBQXlCLDhCQUFySztBQUNIOztBQUNELGdCQUFNLElBQUk1UixLQUFKLENBQVUsQ0FBQ3FhLGlCQUFpQixHQUFJLDBCQUF5QmhLLEdBQUksb0NBQW1DaUssYUFBYSxDQUFDMUksSUFBZCxDQUFtQixJQUFuQixDQUF5QixpQ0FBN0YsR0FBaUksOEJBQTZCakIsVUFBVyw4Q0FBNkMxSSxLQUFNLEtBQTlPLElBQXVQLCtDQUE4Q29TLGlCQUFpQixHQUFHLDJCQUFILEdBQWlDLHNCQUF1QixFQUF4WCxDQUFOO0FBQ0g7QUFDSixPQVRELE1BU08sSUFBSUEsaUJBQUosRUFBdUI7QUFDMUI1YixRQUFBQSxFQUFFLEdBQUcsQ0FBQyxHQUFHZ1EsTUFBSixFQUFZMkQsb0JBQVosQ0FBaUMxVSxNQUFNLENBQUN3TSxNQUFQLENBQWMsRUFBZCxFQUNuQzBPLFFBRG1DLEVBQ3pCO0FBQ1Q3ZixVQUFBQSxRQUFRLEVBQUUrWixjQUFjLENBQUNqQixNQURoQjtBQUVUakIsVUFBQUEsS0FBSyxFQUFFa0Isa0JBQWtCLENBQUNvRCxNQUFELEVBQVNwQyxjQUFjLENBQUMxQixNQUF4QjtBQUZoQixTQUR5QixDQUFqQyxDQUFMO0FBS0gsT0FOTSxNQU1BO0FBQ0g7QUFDQTFULFFBQUFBLE1BQU0sQ0FBQ3dNLE1BQVAsQ0FBY2dMLE1BQWQsRUFBc0JrRixVQUF0QjtBQUNIO0FBQ0o7O0FBQ0RwaEIsSUFBQUEsTUFBTSxDQUFDb1MsTUFBUCxDQUFjcU8sSUFBZCxDQUFtQixrQkFBbkIsRUFBdUNoYixFQUF2QyxFQUEyQzBhLFVBQTNDOztBQUNBLFFBQUk7QUFDQSxVQUFJdlgsR0FBSixFQUFTMlksSUFBVDtBQUNBLFVBQUlDLFNBQVMsR0FBRyxNQUFNLEtBQUtDLFlBQUwsQ0FBa0J4UyxLQUFsQixFQUF5QmdOLFNBQXpCLEVBQW9DQyxNQUFwQyxFQUE0Q3pXLEVBQTVDLEVBQWdEMkMsVUFBaEQsRUFBNEQrWCxVQUE1RCxDQUF0QjtBQUNBLFVBQUk7QUFBRWhoQixRQUFBQSxLQUFGO0FBQVV6RCxRQUFBQSxLQUFWO0FBQWtCMmlCLFFBQUFBLE9BQWxCO0FBQTRCQyxRQUFBQTtBQUE1QixVQUF5Q2tELFNBQTdDLENBSEEsQ0FJQTs7QUFDQSxVQUFJLENBQUNuRCxPQUFPLElBQUlDLE9BQVosS0FBd0I1aUIsS0FBNUIsRUFBbUM7QUFDL0IsWUFBSUEsS0FBSyxDQUFDZ21CLFNBQU4sSUFBbUJobUIsS0FBSyxDQUFDZ21CLFNBQU4sQ0FBZ0JDLFlBQXZDLEVBQXFEO0FBQ2pELGdCQUFNQyxXQUFXLEdBQUdsbUIsS0FBSyxDQUFDZ21CLFNBQU4sQ0FBZ0JDLFlBQXBDLENBRGlELENBRWpEO0FBQ0E7QUFDQTs7QUFDQSxjQUFJQyxXQUFXLENBQUNyTCxVQUFaLENBQXVCLEdBQXZCLENBQUosRUFBaUM7QUFDN0Isa0JBQU1zTCxVQUFVLEdBQUcsQ0FBQyxHQUFHbE0saUJBQUosRUFBdUJtSSxnQkFBdkIsQ0FBd0M4RCxXQUF4QyxDQUFuQjtBQUNBQyxZQUFBQSxVQUFVLENBQUM5aEIsUUFBWCxHQUFzQjBhLG1CQUFtQixDQUFDb0gsVUFBVSxDQUFDOWhCLFFBQVosRUFBc0IyYSxLQUF0QixDQUF6QztBQUNBLGtCQUFNO0FBQUVyRCxjQUFBQSxHQUFHLEVBQUV5SyxNQUFQO0FBQWdCcmMsY0FBQUEsRUFBRSxFQUFFc2M7QUFBcEIsZ0JBQStCM0gsWUFBWSxDQUFDLElBQUQsRUFBT3dILFdBQVAsRUFBb0JBLFdBQXBCLENBQWpEO0FBQ0EsbUJBQU8sS0FBSzNELE1BQUwsQ0FBWXphLE1BQVosRUFBb0JzZSxNQUFwQixFQUE0QkMsS0FBNUIsRUFBbUNyYyxPQUFuQyxDQUFQO0FBQ0g7O0FBQ0RyQyxVQUFBQSxNQUFNLENBQUNTLFFBQVAsQ0FBZ0IwQixJQUFoQixHQUF1Qm9jLFdBQXZCO0FBQ0EsaUJBQU8sSUFBSW5WLE9BQUosQ0FBWSxNQUFJLENBQ3RCLENBRE0sQ0FBUDtBQUVIOztBQUNELGFBQUtvUSxTQUFMLEdBQWlCLENBQUMsQ0FBQ25oQixLQUFLLENBQUNzbUIsV0FBekIsQ0FoQitCLENBaUIvQjs7QUFDQSxZQUFJdG1CLEtBQUssQ0FBQ2tnQixRQUFOLEtBQW1CTCxrQkFBdkIsRUFBMkM7QUFDdkMsY0FBSTBHLGFBQUo7O0FBQ0EsY0FBSTtBQUNBLGtCQUFNLEtBQUtDLGNBQUwsQ0FBb0IsTUFBcEIsQ0FBTjtBQUNBRCxZQUFBQSxhQUFhLEdBQUcsTUFBaEI7QUFDSCxXQUhELENBR0UsT0FBTzFoQixDQUFQLEVBQVU7QUFDUjBoQixZQUFBQSxhQUFhLEdBQUcsU0FBaEI7QUFDSDs7QUFDRFQsVUFBQUEsU0FBUyxHQUFHLE1BQU0sS0FBS0MsWUFBTCxDQUFrQlEsYUFBbEIsRUFBaUNBLGFBQWpDLEVBQWdEL0YsTUFBaEQsRUFBd0R6VyxFQUF4RCxFQUE0RDJDLFVBQTVELEVBQXdFO0FBQ3RGMUIsWUFBQUEsT0FBTyxFQUFFO0FBRDZFLFdBQXhFLENBQWxCO0FBR0g7QUFDSjs7QUFDRDFHLE1BQUFBLE1BQU0sQ0FBQ29TLE1BQVAsQ0FBY3FPLElBQWQsQ0FBbUIscUJBQW5CLEVBQTBDaGIsRUFBMUMsRUFBOEMwYSxVQUE5QztBQUNBLFdBQUtqRCxXQUFMLENBQWlCMVosTUFBakIsRUFBeUI2VCxHQUF6QixFQUE4QjVSLEVBQTlCLEVBQWtDQyxPQUFsQzs7QUFDQSxnQkFBMkM7QUFDdkMsY0FBTXljLE9BQU8sR0FBRyxLQUFLaEUsVUFBTCxDQUFnQixPQUFoQixFQUF5QjNCLFNBQXpDO0FBQ0FuWixRQUFBQSxNQUFNLENBQUMrZSxJQUFQLENBQVlDLGFBQVosR0FBNEJGLE9BQU8sQ0FBQ3ROLGVBQVIsS0FBNEJzTixPQUFPLENBQUNyTixtQkFBcEMsSUFBMkQsQ0FBQzBNLFNBQVMsQ0FBQ2hGLFNBQVYsQ0FBb0IzSCxlQUE1RztBQUNIOztBQUNELFVBQUluUCxPQUFPLENBQUNnYSxFQUFSLElBQWN6RCxTQUFTLEtBQUssU0FBNUIsSUFBeUMsQ0FBQyxDQUFDclQsR0FBRyxHQUFHcUMsSUFBSSxDQUFDdVQsYUFBTCxDQUFtQjlpQixLQUExQixNQUFxQyxJQUFyQyxJQUE2Q2tOLEdBQUcsS0FBSyxLQUFLLENBQTFELEdBQThELEtBQUssQ0FBbkUsR0FBdUUsQ0FBQzJZLElBQUksR0FBRzNZLEdBQUcsQ0FBQzhZLFNBQVosTUFBMkIsSUFBM0IsSUFBbUNILElBQUksS0FBSyxLQUFLLENBQWpELEdBQXFELEtBQUssQ0FBMUQsR0FBOERBLElBQUksQ0FBQ2UsVUFBM0ksTUFBMkosR0FBcE0sS0FBNE01bUIsS0FBSyxLQUFLLElBQVYsSUFBa0JBLEtBQUssS0FBSyxLQUFLLENBQWpDLEdBQXFDLEtBQUssQ0FBMUMsR0FBOENBLEtBQUssQ0FBQ2dtQixTQUFoUSxDQUFKLEVBQWdSO0FBQzVRO0FBQ0E7QUFDQWhtQixRQUFBQSxLQUFLLENBQUNnbUIsU0FBTixDQUFnQlksVUFBaEIsR0FBNkIsR0FBN0I7QUFDSCxPQTlDRCxDQStDQTs7O0FBQ0EsWUFBTUMsbUJBQW1CLEdBQUc3YyxPQUFPLENBQUNnQixPQUFSLElBQW1CLEtBQUt1SSxLQUFMLEtBQWVBLEtBQTlEOztBQUNBLFVBQUl1VCxPQUFKOztBQUNBLFlBQU1DLFlBQVksR0FBRyxDQUFDRCxPQUFPLEdBQUc5YyxPQUFPLENBQUNpQixNQUFuQixNQUErQixJQUEvQixJQUF1QzZiLE9BQU8sS0FBSyxLQUFLLENBQXhELEdBQTREQSxPQUE1RCxHQUFzRSxDQUFDRCxtQkFBNUY7QUFDQSxZQUFNRyxXQUFXLEdBQUdELFlBQVksR0FBRztBQUMvQmhGLFFBQUFBLENBQUMsRUFBRSxDQUQ0QjtBQUUvQkUsUUFBQUEsQ0FBQyxFQUFFO0FBRjRCLE9BQUgsR0FHNUIsSUFISjtBQUlBLFlBQU0sS0FBSzlRLEdBQUwsQ0FBU29DLEtBQVQsRUFBZ0JnTixTQUFoQixFQUEyQkMsTUFBM0IsRUFBbUNvRSxTQUFuQyxFQUE4Q2tCLFNBQTlDLEVBQXlEbkUsWUFBWSxLQUFLLElBQWpCLElBQXlCQSxZQUFZLEtBQUssS0FBSyxDQUEvQyxHQUFtREEsWUFBbkQsR0FBa0VxRixXQUEzSCxFQUF3SS9lLEtBQXhJLENBQStJaEcsQ0FBRCxJQUFLO0FBQ3JKLFlBQUlBLENBQUMsQ0FBQytRLFNBQU4sRUFBaUJ2UCxLQUFLLEdBQUdBLEtBQUssSUFBSXhCLENBQWpCLENBQWpCLEtBQ0ssTUFBTUEsQ0FBTjtBQUNSLE9BSEssQ0FBTjs7QUFJQSxVQUFJd0IsS0FBSixFQUFXO0FBQ1BhLFFBQUFBLE1BQU0sQ0FBQ29TLE1BQVAsQ0FBY3FPLElBQWQsQ0FBbUIsa0JBQW5CLEVBQXVDdGhCLEtBQXZDLEVBQThDbWhCLFNBQTlDLEVBQXlESCxVQUF6RDtBQUNBLGNBQU1oaEIsS0FBTjtBQUNIOztBQUNELFVBQUl3TCxLQUFKLEVBQXFDLEVBSXBDOztBQUNEM0ssTUFBQUEsTUFBTSxDQUFDb1MsTUFBUCxDQUFjcU8sSUFBZCxDQUFtQixxQkFBbkIsRUFBMENoYixFQUExQyxFQUE4QzBhLFVBQTlDO0FBQ0EsYUFBTyxJQUFQO0FBQ0gsS0F0RUQsQ0FzRUUsT0FBT3pELElBQVAsRUFBYTtBQUNYLFVBQUlBLElBQUksQ0FBQ2hPLFNBQVQsRUFBb0I7QUFDaEIsZUFBTyxLQUFQO0FBQ0g7O0FBQ0QsWUFBTWdPLElBQU47QUFDSDtBQUNKOztBQUNEUSxFQUFBQSxXQUFXLENBQUMxWixNQUFELEVBQVM2VCxHQUFULEVBQWM1UixFQUFkLEVBQWtCQyxPQUFPLEdBQUcsRUFBNUIsRUFDUjtBQUNDLGNBQTJDO0FBQ3ZDLFVBQUksT0FBT3JDLE1BQU0sQ0FBQzZYLE9BQWQsS0FBMEIsV0FBOUIsRUFBMkM7QUFDdkNuVCxRQUFBQSxPQUFPLENBQUM1SSxLQUFSLENBQWUsMkNBQWY7QUFDQTtBQUNIOztBQUNELFVBQUksT0FBT2tFLE1BQU0sQ0FBQzZYLE9BQVAsQ0FBZTFYLE1BQWYsQ0FBUCxLQUFrQyxXQUF0QyxFQUFtRDtBQUMvQ3VFLFFBQUFBLE9BQU8sQ0FBQzVJLEtBQVIsQ0FBZSwyQkFBMEJxRSxNQUFPLG1CQUFoRDtBQUNBO0FBQ0g7QUFDSjs7QUFDRCxRQUFJQSxNQUFNLEtBQUssV0FBWCxJQUEwQixDQUFDLEdBQUdpUyxNQUFKLEVBQVkwSCxNQUFaLE9BQXlCMVgsRUFBdkQsRUFBMkQ7QUFDdkQsV0FBS3lZLFFBQUwsR0FBZ0J4WSxPQUFPLENBQUNnQixPQUF4QjtBQUNBckQsTUFBQUEsTUFBTSxDQUFDNlgsT0FBUCxDQUFlMVgsTUFBZixFQUF1QjtBQUNuQjZULFFBQUFBLEdBRG1CO0FBRW5CNVIsUUFBQUEsRUFGbUI7QUFHbkJDLFFBQUFBLE9BSG1CO0FBSW5CMFgsUUFBQUEsR0FBRyxFQUFFLElBSmM7QUFLbkJFLFFBQUFBLEdBQUcsRUFBRSxLQUFLTixJQUFMLEdBQVl4WixNQUFNLEtBQUssV0FBWCxHQUF5QixLQUFLd1osSUFBOUIsR0FBcUMsS0FBS0EsSUFBTCxHQUFZO0FBTC9DLE9BQXZCLEVBTUc7QUFDSDtBQUNBO0FBQ0EsUUFUQSxFQVNJdlgsRUFUSjtBQVVIO0FBQ0o7O0FBQ3lCLFFBQXBCb2Qsb0JBQW9CLENBQUNqZCxHQUFELEVBQU03RixRQUFOLEVBQWdCNlgsS0FBaEIsRUFBdUJuUyxFQUF2QixFQUEyQjBhLFVBQTNCLEVBQXVDMkMsYUFBdkMsRUFBc0Q7QUFDNUUsUUFBSWxkLEdBQUcsQ0FBQzhJLFNBQVIsRUFBbUI7QUFDZjtBQUNBLFlBQU05SSxHQUFOO0FBQ0g7O0FBQ0QsUUFBSSxDQUFDLEdBQUd5UCxZQUFKLEVBQWtCdkosWUFBbEIsQ0FBK0JsRyxHQUEvQixLQUF1Q2tkLGFBQTNDLEVBQTBEO0FBQ3REOWlCLE1BQUFBLE1BQU0sQ0FBQ29TLE1BQVAsQ0FBY3FPLElBQWQsQ0FBbUIsa0JBQW5CLEVBQXVDN2EsR0FBdkMsRUFBNENILEVBQTVDLEVBQWdEMGEsVUFBaEQsRUFEc0QsQ0FFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTljLE1BQUFBLE1BQU0sQ0FBQ1MsUUFBUCxDQUFnQjBCLElBQWhCLEdBQXVCQyxFQUF2QixDQVBzRCxDQVF0RDtBQUNBOztBQUNBLFlBQU0yUSxzQkFBc0IsRUFBNUI7QUFDSDs7QUFDRCxRQUFJO0FBQ0EsVUFBSXFHLFVBQUo7QUFDQSxVQUFJN00sV0FBSjtBQUNBLFVBQUlsVSxLQUFKOztBQUNBLFVBQUksT0FBTytnQixVQUFQLEtBQXNCLFdBQXRCLElBQXFDLE9BQU83TSxXQUFQLEtBQXVCLFdBQWhFLEVBQTZFO0FBQ3pFLFNBQUM7QUFBRWtMLFVBQUFBLElBQUksRUFBRTJCLFVBQVI7QUFBcUI3TSxVQUFBQTtBQUFyQixZQUFzQyxNQUFNLEtBQUtzUyxjQUFMLENBQW9CLFNBQXBCLENBQTdDO0FBQ0g7O0FBQ0QsWUFBTVYsU0FBUyxHQUFHO0FBQ2Q5bEIsUUFBQUEsS0FEYztBQUVkOGdCLFFBQUFBLFNBQVMsRUFBRUMsVUFGRztBQUdkN00sUUFBQUEsV0FIYztBQUlkaEssUUFBQUEsR0FKYztBQUtkekcsUUFBQUEsS0FBSyxFQUFFeUc7QUFMTyxPQUFsQjs7QUFPQSxVQUFJLENBQUM0YixTQUFTLENBQUM5bEIsS0FBZixFQUFzQjtBQUNsQixZQUFJO0FBQ0E4bEIsVUFBQUEsU0FBUyxDQUFDOWxCLEtBQVYsR0FBa0IsTUFBTSxLQUFLbVosZUFBTCxDQUFxQjRILFVBQXJCLEVBQWlDO0FBQ3JEN1csWUFBQUEsR0FEcUQ7QUFFckQ3RixZQUFBQSxRQUZxRDtBQUdyRDZYLFlBQUFBO0FBSHFELFdBQWpDLENBQXhCO0FBS0gsU0FORCxDQU1FLE9BQU9tTCxNQUFQLEVBQWU7QUFDYmhiLFVBQUFBLE9BQU8sQ0FBQzVJLEtBQVIsQ0FBYyx5Q0FBZCxFQUF5RDRqQixNQUF6RDtBQUNBdkIsVUFBQUEsU0FBUyxDQUFDOWxCLEtBQVYsR0FBa0IsRUFBbEI7QUFFSDtBQUNKOztBQUNELGFBQU84bEIsU0FBUDtBQUNILEtBNUJELENBNEJFLE9BQU93QixZQUFQLEVBQXFCO0FBQ25CLGFBQU8sS0FBS0gsb0JBQUwsQ0FBMEJHLFlBQTFCLEVBQXdDampCLFFBQXhDLEVBQWtENlgsS0FBbEQsRUFBeURuUyxFQUF6RCxFQUE2RDBhLFVBQTdELEVBQXlFLElBQXpFLENBQVA7QUFDSDtBQUNKOztBQUNpQixRQUFac0IsWUFBWSxDQUFDeFMsS0FBRCxFQUFRbFAsUUFBUixFQUFrQjZYLEtBQWxCLEVBQXlCblMsRUFBekIsRUFBNkIyQyxVQUE3QixFQUF5QytYLFVBQXpDLEVBQXFEO0FBQ25FLFFBQUk7QUFDQSxZQUFNOEMsaUJBQWlCLEdBQUcsS0FBSzlFLFVBQUwsQ0FBZ0JsUCxLQUFoQixDQUExQjs7QUFDQSxVQUFJa1IsVUFBVSxDQUFDelosT0FBWCxJQUFzQnVjLGlCQUF0QixJQUEyQyxLQUFLaFUsS0FBTCxLQUFlQSxLQUE5RCxFQUFxRTtBQUNqRSxlQUFPZ1UsaUJBQVA7QUFDSDs7QUFDRCxZQUFNQyxlQUFlLEdBQUdELGlCQUFpQixJQUFJLGFBQWFBLGlCQUFsQyxHQUFzRHhlLFNBQXRELEdBQWtFd2UsaUJBQTFGO0FBQ0EsWUFBTXpCLFNBQVMsR0FBRzBCLGVBQWUsR0FBR0EsZUFBSCxHQUFxQixNQUFNLEtBQUtoQixjQUFMLENBQW9CalQsS0FBcEIsRUFBMkJ4TCxJQUEzQixDQUFpQ0MsR0FBRCxLQUFRO0FBQzVGOFksUUFBQUEsU0FBUyxFQUFFOVksR0FBRyxDQUFDb1gsSUFENkU7QUFFNUZsTCxRQUFBQSxXQUFXLEVBQUVsTSxHQUFHLENBQUNrTSxXQUYyRTtBQUc1RnlPLFFBQUFBLE9BQU8sRUFBRTNhLEdBQUcsQ0FBQ3lmLEdBQUosQ0FBUTlFLE9BSDJFO0FBSTVGQyxRQUFBQSxPQUFPLEVBQUU1YSxHQUFHLENBQUN5ZixHQUFKLENBQVE3RTtBQUoyRSxPQUFSLENBQWhDLENBQTVEO0FBT0EsWUFBTTtBQUFFOUIsUUFBQUEsU0FBUyxFQUFFQyxVQUFiO0FBQTBCNEIsUUFBQUEsT0FBMUI7QUFBb0NDLFFBQUFBO0FBQXBDLFVBQWlEa0QsU0FBdkQ7O0FBQ0EsZ0JBQTJDO0FBQ3ZDLGNBQU07QUFBRTRCLFVBQUFBO0FBQUYsWUFBMEJwZSxtQkFBTyxDQUFDLDBCQUFELENBQXZDOztBQUNBLFlBQUksQ0FBQ29lLGtCQUFrQixDQUFDM0csVUFBRCxDQUF2QixFQUFxQztBQUNqQyxnQkFBTSxJQUFJelYsS0FBSixDQUFXLHlEQUF3RGpILFFBQVMsR0FBNUUsQ0FBTjtBQUNIO0FBQ0o7O0FBQ0QsVUFBSStiLFFBQUo7O0FBQ0EsVUFBSXVDLE9BQU8sSUFBSUMsT0FBZixFQUF3QjtBQUNwQnhDLFFBQUFBLFFBQVEsR0FBRyxLQUFLTyxVQUFMLENBQWdCZ0gsV0FBaEIsQ0FBNEIsQ0FBQyxHQUFHNU4sTUFBSixFQUFZMkQsb0JBQVosQ0FBaUM7QUFDcEVyWixVQUFBQSxRQURvRTtBQUVwRTZYLFVBQUFBO0FBRm9FLFNBQWpDLENBQTVCLEVBR1B4UCxVQUhPLEVBR0tpVyxPQUhMLEVBR2MsS0FBS3ZZLE1BSG5CLENBQVg7QUFJSDs7QUFDRCxZQUFNcEssS0FBSyxHQUFHLE1BQU0sS0FBSzRuQixRQUFMLENBQWMsTUFBSWpGLE9BQU8sR0FBRyxLQUFLa0YsY0FBTCxDQUFvQnpILFFBQXBCLENBQUgsR0FBbUN3QyxPQUFPLEdBQUcsS0FBS2tGLGNBQUwsQ0FBb0IxSCxRQUFwQixDQUFILEdBQW1DLEtBQUtqSCxlQUFMLENBQXFCNEgsVUFBckIsRUFBaUM7QUFDdko7QUFDSTFjLFFBQUFBLFFBREo7QUFFSTZYLFFBQUFBLEtBRko7QUFHSWdDLFFBQUFBLE1BQU0sRUFBRW5VLEVBSFo7QUFJSUssUUFBQUEsTUFBTSxFQUFFLEtBQUtBLE1BSmpCO0FBS0lpRSxRQUFBQSxPQUFPLEVBQUUsS0FBS0EsT0FMbEI7QUFNSUksUUFBQUEsYUFBYSxFQUFFLEtBQUtBO0FBTnhCLE9BRHNILENBQXRHLENBQXBCO0FBVUFxWCxNQUFBQSxTQUFTLENBQUM5bEIsS0FBVixHQUFrQkEsS0FBbEI7QUFDQSxXQUFLeWlCLFVBQUwsQ0FBZ0JsUCxLQUFoQixJQUF5QnVTLFNBQXpCO0FBQ0EsYUFBT0EsU0FBUDtBQUNILEtBeENELENBd0NFLE9BQU9pQyxJQUFQLEVBQWE7QUFDWCxhQUFPLEtBQUtaLG9CQUFMLENBQTBCWSxJQUExQixFQUFnQzFqQixRQUFoQyxFQUEwQzZYLEtBQTFDLEVBQWlEblMsRUFBakQsRUFBcUQwYSxVQUFyRCxDQUFQO0FBQ0g7QUFDSjs7QUFDRHRULEVBQUFBLEdBQUcsQ0FBQ29DLEtBQUQsRUFBUWxQLFFBQVIsRUFBa0I2WCxLQUFsQixFQUF5Qm5TLEVBQXpCLEVBQTZCMUksSUFBN0IsRUFBbUMybEIsV0FBbkMsRUFBZ0Q7QUFDL0MsU0FBSzlGLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxTQUFLM04sS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS2xQLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBSzZYLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtnQyxNQUFMLEdBQWNuVSxFQUFkO0FBQ0EsV0FBTyxLQUFLa2IsTUFBTCxDQUFZNWpCLElBQVosRUFBa0IybEIsV0FBbEIsQ0FBUDtBQUNIO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7OztBQUFNZ0IsRUFBQUEsY0FBYyxDQUFDdlksRUFBRCxFQUFLO0FBQ2pCLFNBQUs2UyxJQUFMLEdBQVk3UyxFQUFaO0FBQ0g7O0FBQ0RxVixFQUFBQSxlQUFlLENBQUMvYSxFQUFELEVBQUs7QUFDaEIsUUFBSSxDQUFDLEtBQUttVSxNQUFWLEVBQWtCLE9BQU8sS0FBUDtBQUNsQixVQUFNLENBQUMrSixZQUFELEVBQWVDLE9BQWYsSUFBMEIsS0FBS2hLLE1BQUwsQ0FBWUgsS0FBWixDQUFrQixHQUFsQixDQUFoQztBQUNBLFVBQU0sQ0FBQ29LLFlBQUQsRUFBZUMsT0FBZixJQUEwQnJlLEVBQUUsQ0FBQ2dVLEtBQUgsQ0FBUyxHQUFULENBQWhDLENBSGdCLENBSWhCOztBQUNBLFFBQUlxSyxPQUFPLElBQUlILFlBQVksS0FBS0UsWUFBNUIsSUFBNENELE9BQU8sS0FBS0UsT0FBNUQsRUFBcUU7QUFDakUsYUFBTyxJQUFQO0FBQ0gsS0FQZSxDQVFoQjs7O0FBQ0EsUUFBSUgsWUFBWSxLQUFLRSxZQUFyQixFQUFtQztBQUMvQixhQUFPLEtBQVA7QUFDSCxLQVhlLENBWWhCO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxXQUFPRCxPQUFPLEtBQUtFLE9BQW5CO0FBQ0g7O0FBQ0RwRCxFQUFBQSxZQUFZLENBQUNqYixFQUFELEVBQUs7QUFDYixVQUFNLEdBQUd5VSxJQUFILElBQVd6VSxFQUFFLENBQUNnVSxLQUFILENBQVMsR0FBVCxDQUFqQixDQURhLENBRWI7QUFDQTs7QUFDQSxRQUFJUyxJQUFJLEtBQUssRUFBVCxJQUFlQSxJQUFJLEtBQUssS0FBNUIsRUFBbUM7QUFDL0I3VyxNQUFBQSxNQUFNLENBQUMwZ0IsUUFBUCxDQUFnQixDQUFoQixFQUFtQixDQUFuQjtBQUNBO0FBQ0gsS0FQWSxDQVFiOzs7QUFDQSxVQUFNQyxJQUFJLEdBQUdoWCxRQUFRLENBQUNpWCxjQUFULENBQXdCL0osSUFBeEIsQ0FBYjs7QUFDQSxRQUFJOEosSUFBSixFQUFVO0FBQ05BLE1BQUFBLElBQUksQ0FBQ0UsY0FBTDtBQUNBO0FBQ0gsS0FiWSxDQWNiO0FBQ0E7OztBQUNBLFVBQU1DLE1BQU0sR0FBR25YLFFBQVEsQ0FBQ29YLGlCQUFULENBQTJCbEssSUFBM0IsRUFBaUMsQ0FBakMsQ0FBZjs7QUFDQSxRQUFJaUssTUFBSixFQUFZO0FBQ1JBLE1BQUFBLE1BQU0sQ0FBQ0QsY0FBUDtBQUNIO0FBQ0o7O0FBQ0RsRCxFQUFBQSxRQUFRLENBQUNwSCxNQUFELEVBQVM7QUFDYixXQUFPLEtBQUtBLE1BQUwsS0FBZ0JBLE1BQXZCO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFvQixRQUFSclUsUUFBUSxDQUFDOFIsR0FBRCxFQUFNdUMsTUFBTSxHQUFHdkMsR0FBZixFQUFvQjNSLE9BQU8sR0FBRyxFQUE5QixFQUNiO0FBQ0MsUUFBSWtiLE1BQU0sR0FBRyxDQUFDLEdBQUdqTCxpQkFBSixFQUF1Qm1JLGdCQUF2QixDQUF3Q3pHLEdBQXhDLENBQWI7QUFDQSxRQUFJO0FBQUV0WCxNQUFBQSxRQUFRLEVBQUVza0I7QUFBWixRQUEyQnpELE1BQS9COztBQUNBLFFBQUlqVyxLQUFKLEVBQXFDLEVBV3BDOztBQUNELFVBQU0rUCxLQUFLLEdBQUcsTUFBTSxLQUFLMkIsVUFBTCxDQUFnQnlFLFdBQWhCLEVBQXBCO0FBQ0EsUUFBSTFZLFVBQVUsR0FBR3dSLE1BQWpCOztBQUNBLFFBQUlqUCxLQUFKLEVBQStELEVBQS9ELE1BYU87QUFDSGlXLE1BQUFBLE1BQU0sQ0FBQzdnQixRQUFQLEdBQWtCMGEsbUJBQW1CLENBQUNtRyxNQUFNLENBQUM3Z0IsUUFBUixFQUFrQjJhLEtBQWxCLENBQXJDOztBQUNBLFVBQUlrRyxNQUFNLENBQUM3Z0IsUUFBUCxLQUFvQnNrQixTQUF4QixFQUFtQztBQUMvQkEsUUFBQUEsU0FBUyxHQUFHekQsTUFBTSxDQUFDN2dCLFFBQW5CO0FBQ0E2Z0IsUUFBQUEsTUFBTSxDQUFDN2dCLFFBQVAsR0FBa0Jza0IsU0FBbEI7QUFDQWhOLFFBQUFBLEdBQUcsR0FBRyxDQUFDLEdBQUc1QixNQUFKLEVBQVkyRCxvQkFBWixDQUFpQ3dILE1BQWpDLENBQU47QUFDSDtBQUNKOztBQUNELFVBQU0zUixLQUFLLEdBQUcsQ0FBQyxHQUFHbUcsdUJBQUosRUFBNkI5Syx1QkFBN0IsQ0FBcUQrWixTQUFyRCxDQUFkLENBdENELENBdUNDOztBQUNBLGNBQTJDO0FBQ3ZDO0FBQ0g7O0FBQ0QsVUFBTTVYLE9BQU8sQ0FBQ29FLEdBQVIsQ0FBWSxDQUNkLEtBQUt3TCxVQUFMLENBQWdCaUksTUFBaEIsQ0FBdUJyVixLQUF2QixFQUE4QnhMLElBQTlCLENBQW9DOGdCLEtBQUQsSUFBUztBQUN4QyxhQUFPQSxLQUFLLEdBQUcsS0FBS2hCLGNBQUwsQ0FBb0IsS0FBS2xILFVBQUwsQ0FBZ0JnSCxXQUFoQixDQUE0QmhNLEdBQTVCLEVBQWlDalAsVUFBakMsRUFBNkMsSUFBN0MsRUFBbUQsT0FBTzFDLE9BQU8sQ0FBQ0ksTUFBZixLQUEwQixXQUExQixHQUF3Q0osT0FBTyxDQUFDSSxNQUFoRCxHQUF5RCxLQUFLQSxNQUFqSCxDQUFwQixDQUFILEdBQW1KLEtBQS9KO0FBQ0gsS0FGRCxDQURjLEVBSWQsS0FBS3VXLFVBQUwsQ0FBZ0IzVyxPQUFPLENBQUNnRSxRQUFSLEdBQW1CLFVBQW5CLEdBQWdDLFVBQWhELEVBQTREdUYsS0FBNUQsQ0FKYyxDQUFaLENBQU47QUFNSDs7QUFDbUIsUUFBZGlULGNBQWMsQ0FBQ2pULEtBQUQsRUFBUTtBQUN4QixRQUFJUCxTQUFTLEdBQUcsS0FBaEI7O0FBQ0EsVUFBTThWLE1BQU0sR0FBRyxLQUFLN0YsR0FBTCxHQUFXLE1BQUk7QUFDMUJqUSxNQUFBQSxTQUFTLEdBQUcsSUFBWjtBQUNILEtBRkQ7O0FBR0EsVUFBTStWLGVBQWUsR0FBRyxNQUFNLEtBQUtwSSxVQUFMLENBQWdCcUksUUFBaEIsQ0FBeUJ6VixLQUF6QixDQUE5Qjs7QUFDQSxRQUFJUCxTQUFKLEVBQWU7QUFDWCxZQUFNdlAsS0FBSyxHQUFHLElBQUk2SCxLQUFKLENBQVcsd0NBQXVDaUksS0FBTSxHQUF4RCxDQUFkO0FBQ0E5UCxNQUFBQSxLQUFLLENBQUN1UCxTQUFOLEdBQWtCLElBQWxCO0FBQ0EsWUFBTXZQLEtBQU47QUFDSDs7QUFDRCxRQUFJcWxCLE1BQU0sS0FBSyxLQUFLN0YsR0FBcEIsRUFBeUI7QUFDckIsV0FBS0EsR0FBTCxHQUFXLElBQVg7QUFDSDs7QUFDRCxXQUFPOEYsZUFBUDtBQUNIOztBQUNEbkIsRUFBQUEsUUFBUSxDQUFDL1MsRUFBRCxFQUFLO0FBQ1QsUUFBSTdCLFNBQVMsR0FBRyxLQUFoQjs7QUFDQSxVQUFNOFYsTUFBTSxHQUFHLE1BQUk7QUFDZjlWLE1BQUFBLFNBQVMsR0FBRyxJQUFaO0FBQ0gsS0FGRDs7QUFHQSxTQUFLaVEsR0FBTCxHQUFXNkYsTUFBWDtBQUNBLFdBQU9qVSxFQUFFLEdBQUc5TSxJQUFMLENBQVcxRyxJQUFELElBQVE7QUFDckIsVUFBSXluQixNQUFNLEtBQUssS0FBSzdGLEdBQXBCLEVBQXlCO0FBQ3JCLGFBQUtBLEdBQUwsR0FBVyxJQUFYO0FBQ0g7O0FBQ0QsVUFBSWpRLFNBQUosRUFBZTtBQUNYLGNBQU0rVSxJQUFJLEdBQUcsSUFBSXpjLEtBQUosQ0FBVSxpQ0FBVixDQUFiO0FBQ0F5YyxRQUFBQSxJQUFJLENBQUMvVSxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsY0FBTStVLElBQU47QUFDSDs7QUFDRCxhQUFPMW1CLElBQVA7QUFDSCxLQVZNLENBQVA7QUFXSDs7QUFDRHdtQixFQUFBQSxjQUFjLENBQUN6SCxRQUFELEVBQVc7QUFDckIsVUFBTTtBQUFFdFcsTUFBQUEsSUFBSSxFQUFFbWY7QUFBUixRQUFzQixJQUFJbE4sR0FBSixDQUFRcUUsUUFBUixFQUFrQnpZLE1BQU0sQ0FBQ1MsUUFBUCxDQUFnQjBCLElBQWxDLENBQTVCOztBQUNBLFFBQUksS0FBSixFQUFvRixFQUVuRjs7QUFDRCxXQUFPcVcsYUFBYSxDQUFDQyxRQUFELEVBQVcsS0FBS2lDLEtBQWhCLENBQWIsQ0FBb0N0YSxJQUFwQyxDQUEwQzFHLElBQUQsSUFBUTtBQUNwRCxXQUFLK2YsR0FBTCxDQUFTNkgsUUFBVCxJQUFxQjVuQixJQUFyQjtBQUNBLGFBQU9BLElBQVA7QUFDSCxLQUhNLENBQVA7QUFJSDs7QUFDRHltQixFQUFBQSxjQUFjLENBQUMxSCxRQUFELEVBQVc7QUFDckIsVUFBTTtBQUFFdFcsTUFBQUEsSUFBSSxFQUFFb2Y7QUFBUixRQUF5QixJQUFJbk4sR0FBSixDQUFRcUUsUUFBUixFQUFrQnpZLE1BQU0sQ0FBQ1MsUUFBUCxDQUFnQjBCLElBQWxDLENBQS9COztBQUNBLFFBQUksS0FBS3VYLEdBQUwsQ0FBUzZILFdBQVQsQ0FBSixFQUEyQjtBQUN2QixhQUFPLEtBQUs3SCxHQUFMLENBQVM2SCxXQUFULENBQVA7QUFDSDs7QUFDRCxXQUFPLEtBQUs3SCxHQUFMLENBQVM2SCxXQUFULElBQXdCL0ksYUFBYSxDQUFDQyxRQUFELEVBQVcsS0FBS2lDLEtBQWhCLENBQWIsQ0FBb0N0YSxJQUFwQyxDQUEwQzFHLElBQUQsSUFBUTtBQUM1RSxhQUFPLEtBQUtnZ0IsR0FBTCxDQUFTNkgsV0FBVCxDQUFQO0FBQ0EsYUFBTzduQixJQUFQO0FBQ0gsS0FIOEIsRUFHNUI0RyxLQUg0QixDQUdyQjhmLElBQUQsSUFBUTtBQUNiLGFBQU8sS0FBSzFHLEdBQUwsQ0FBUzZILFdBQVQsQ0FBUDtBQUNBLFlBQU1uQixJQUFOO0FBQ0gsS0FOOEIsQ0FBL0I7QUFPSDs7QUFDRDVPLEVBQUFBLGVBQWUsQ0FBQzJILFNBQUQsRUFBWXFJLEdBQVosRUFBaUI7QUFDNUIsVUFBTTtBQUFFckksTUFBQUEsU0FBUyxFQUFFc0k7QUFBYixRQUF1QixLQUFLM0csVUFBTCxDQUFnQixPQUFoQixDQUE3Qjs7QUFDQSxVQUFNNEcsT0FBTyxHQUFHLEtBQUtuRyxRQUFMLENBQWNrRyxJQUFkLENBQWhCOztBQUNBRCxJQUFBQSxHQUFHLENBQUNFLE9BQUosR0FBY0EsT0FBZDtBQUNBLFdBQU8sQ0FBQyxHQUFHdFAsTUFBSixFQUFZdVAsbUJBQVosQ0FBZ0NGLElBQWhDLEVBQXNDO0FBQ3pDQyxNQUFBQSxPQUR5QztBQUV6Q3ZJLE1BQUFBLFNBRnlDO0FBR3pDNWMsTUFBQUEsTUFBTSxFQUFFLElBSGlDO0FBSXpDaWxCLE1BQUFBO0FBSnlDLEtBQXRDLENBQVA7QUFNSDs7QUFDRHhFLEVBQUFBLGtCQUFrQixDQUFDNWEsRUFBRCxFQUFLMGEsVUFBTCxFQUFpQjtBQUMvQixRQUFJLEtBQUt4QixHQUFULEVBQWM7QUFDVjNlLE1BQUFBLE1BQU0sQ0FBQ29TLE1BQVAsQ0FBY3FPLElBQWQsQ0FBbUIsa0JBQW5CLEVBQXVDckssc0JBQXNCLEVBQTdELEVBQWlFM1EsRUFBakUsRUFBcUUwYSxVQUFyRTtBQUNBLFdBQUt4QixHQUFMO0FBQ0EsV0FBS0EsR0FBTCxHQUFXLElBQVg7QUFDSDtBQUNKOztBQUNEZ0MsRUFBQUEsTUFBTSxDQUFDNWpCLElBQUQsRUFBTzJsQixXQUFQLEVBQW9CO0FBQ3RCLFdBQU8sS0FBS2hFLEdBQUwsQ0FBUzNoQixJQUFULEVBQWUsS0FBS29oQixVQUFMLENBQWdCLE9BQWhCLEVBQXlCM0IsU0FBeEMsRUFBbURrRyxXQUFuRCxDQUFQO0FBQ0g7O0FBdnZCUTs7QUF5dkJiMWlCLE1BQU0sQ0FBQ29TLE1BQVAsR0FBZ0IsQ0FBQyxHQUFHb0QsS0FBSixFQUFXM1EsT0FBWCxFQUFoQjtBQUNBRCxlQUFBLEdBQWtCNUUsTUFBbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdmlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLE1BQU1pbEIsU0FBUyxHQUFHLE1BQU07QUFFdEIsUUFBTUMsWUFBWSxHQUFHanFCLHdEQUFXLENBQUNPLEtBQUssSUFBRUEsS0FBSyxDQUFDMnBCLGNBQU4sQ0FBcUJDLFFBQTdCLENBQWhDO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsK0NBQWY7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyxnQ0FBZjtBQUFBLGdCQUNHRixZQUFZLEtBQUt6Z0IsU0FBakIsR0FDQ3lnQixZQUFZLENBQUNqTyxNQUFiLEdBQXNCLENBQXRCLEdBQ0VpTyxZQUFZLENBQUNwakIsR0FBYixDQUFpQixDQUFDL0UsSUFBRCxFQUFPc29CLENBQVAsa0JBQ2YsOERBQUMsOERBQUQ7QUFBZSxhQUFLLEVBQUV0b0I7QUFBdEIsU0FBaUNzb0IsQ0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixDQURGLGdCQUtBO0FBQUksaUJBQVMsRUFBQyx3REFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORCxnQkFRRCw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQWFFO0FBQUssZUFBUyxFQUFDLDJCQUFmO0FBQUEsNkJBQ0ksOERBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFtQkQsQ0F2QkQ7O0FBeUJBLGlFQUFlaGxCLDREQUFXLENBQUM0a0IsU0FBRCxDQUExQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NDOUJBOztBQUVPLE1BQU1NLFVBQVUsR0FBSWpwQixJQUFELElBQVM7QUFDL0IsU0FBTTtBQUNGcU4sSUFBQUEsSUFBSSxFQUFDMmIsK0NBREg7QUFFRkcsSUFBQUEsT0FBTyxFQUFDbnBCO0FBRk4sR0FBTjtBQUlILENBTE07QUFPQSxNQUFNb3BCLG1CQUFtQixHQUFJbm9CLE9BQUQsSUFBWTtBQUMzQyxTQUFNO0FBQ0ZvTSxJQUFBQSxJQUFJLEVBQUMyYix5REFESDtBQUVGRyxJQUFBQSxPQUFPLEVBQUNsb0I7QUFGTixHQUFOO0FBSUgsQ0FMTSxFQU9QOztBQUVPLE1BQU1xb0IsMEJBQTBCLEdBQUl6cEIsUUFBRCxJQUFhO0FBQ25ELFNBQU07QUFDRndOLElBQUFBLElBQUksRUFBQzJiLGlFQURIO0FBRUZHLElBQUFBLE9BQU8sRUFBQ3RwQjtBQUZOLEdBQU47QUFJSCxDQUxNLEVBT1A7O0FBRU8sTUFBTTJwQixzQkFBc0IsR0FBSUMsU0FBRCxJQUFhO0FBQy9DLFNBQU07QUFDRnBjLElBQUFBLElBQUksRUFBQzJiLDREQURIO0FBRUZHLElBQUFBLE9BQU8sRUFBQ007QUFGTixHQUFOO0FBSUgsQ0FMTTtBQU9BLE1BQU1FLGNBQWMsR0FBSWIsUUFBRCxJQUFZO0FBQ3RDLFNBQU07QUFDRnpiLElBQUFBLElBQUksRUFBQzJiLG1EQURIO0FBRUZHLElBQUFBLE9BQU8sRUFBQ0w7QUFGTixHQUFOO0FBSUgsQ0FMTTtBQU9BLE1BQU1lLHlCQUF5QixHQUFJaHFCLFFBQUQsSUFBWTtBQUNqRCxTQUFNO0FBQ0Z3TixJQUFBQSxJQUFJLEVBQUMyYiwrREFESDtBQUVGRyxJQUFBQSxPQUFPLEVBQUN0cEI7QUFGTixHQUFOO0FBSUgsQ0FMTTtBQU9BLE1BQU1rcUIsaUJBQWlCLEdBQUlDLE9BQUQsSUFBVztBQUN4QyxTQUFNO0FBQ0YzYyxJQUFBQSxJQUFJLEVBQUMyYixzREFESDtBQUVGRyxJQUFBQSxPQUFPLEVBQUNhO0FBRk4sR0FBTjtBQUlILENBTE07QUFPQSxNQUFNRSxpQkFBaUIsR0FBSXpwQixJQUFELElBQVE7QUFDckMsU0FBTTtBQUNGNE0sSUFBQUEsSUFBSSxFQUFDMmIscURBREg7QUFFRkcsSUFBQUEsT0FBTyxFQUFDMW9CO0FBRk4sR0FBTjtBQUlILENBTE07QUFPQSxNQUFNMnBCLHVCQUF1QixHQUFJM3BCLElBQUQsSUFBUTtBQUMzQyxTQUFNO0FBQ0Y0TSxJQUFBQSxJQUFJLEVBQUMyYixvREFESDtBQUVGRyxJQUFBQSxPQUFPLEVBQUMxb0I7QUFGTixHQUFOO0FBSUgsQ0FMTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1pcUIsMkJBQTJCLEdBQUcsNENBQXBDLEVBRUE7O0FBQ08sTUFBTUMsUUFBUSxHQUFHLE1BQU9qckIsUUFBUCxJQUFvQjtBQUMxQyxRQUFNTSxJQUFJLEdBQUcsSUFBSXNxQiw2Q0FBSixDQUFTQSwyREFBQSxJQUFzQix1QkFBL0IsQ0FBYjtBQUNBNXFCLEVBQUFBLFFBQVEsQ0FBQzZxQixnREFBQSxDQUFtQnZxQixJQUFuQixDQUFELENBQVI7QUFDQSxTQUFPQSxJQUFQO0FBQ0QsQ0FKTSxFQU1QOztBQUNPLE1BQU02cUIsV0FBVyxHQUFHLE9BQU83cUIsSUFBUCxFQUFhTixRQUFiLEtBQTBCO0FBQ25ELFFBQU1JLE9BQU8sR0FBRyxNQUFNRSxJQUFJLENBQUM4cUIsR0FBTCxDQUFTQyxXQUFULEVBQXRCO0FBQ0EsUUFBTUMsT0FBTyxHQUFHLE1BQU1ockIsSUFBSSxDQUFDOHFCLEdBQUwsQ0FBU0csR0FBVCxDQUFhQyxLQUFiLEVBQXRCLENBRm1ELENBSXJEO0FBQ0E7QUFDQTs7QUFDRXhyQixFQUFBQSxRQUFRLENBQUM2cUIseURBQUEsQ0FBNEJ6cUIsT0FBTyxDQUFDLENBQUQsQ0FBbkMsQ0FBRCxDQUFSO0FBQ0ErRCxFQUFBQSxZQUFZLENBQUNpYixPQUFiLENBQXFCLFNBQXJCLEVBQStCaGYsT0FBTyxDQUFDLENBQUQsQ0FBdEM7QUFDQSxTQUFPQSxPQUFQO0FBQ0QsQ0FWTSxFQVlQOztBQUNPLE1BQU1xckIsd0JBQXdCLEdBQUcsT0FBTW5yQixJQUFOLEVBQVdOLFFBQVgsS0FBdUI7QUFDN0QsUUFBTTByQixZQUFZLEdBQUcsSUFBSXByQixJQUFJLENBQUM4cUIsR0FBTCxDQUFTTyxRQUFiLENBQXNCYix3RkFBdEIsRUFBdUNFLDJCQUF2QyxDQUFyQjtBQUNBaHJCLEVBQUFBLFFBQVEsQ0FBQzZxQixnRUFBQSxDQUFtQ2EsWUFBbkMsQ0FBRCxDQUFSO0FBQ0EsU0FBT0EsWUFBUDtBQUNELENBSk0sRUFNUDs7QUFDTyxNQUFNdHBCLGdCQUFnQixHQUFHLE9BQU05QixJQUFOLEVBQVd1ckIsb0JBQVgsRUFBZ0M5cUIsSUFBaEMsRUFBcUNFLFNBQXJDLEVBQStDQyxPQUEvQyxFQUF1RGxCLFFBQXZELEtBQW1FO0FBQ2pHLFFBQU07QUFBQ29ELElBQUFBLG1CQUFEO0FBQXFCMUIsSUFBQUEsUUFBckI7QUFBOEI0QixJQUFBQSxrQkFBOUI7QUFBaURDLElBQUFBLFlBQWpEO0FBQThEQyxJQUFBQSxXQUE5RDtBQUEwRXBELElBQUFBO0FBQTFFLE1BQXFGVyxJQUEzRjtBQUVBLFFBQU04cUIsb0JBQW9CLENBQUNDLE9BQXJCLENBQTZCQyxhQUE3QixDQUEyQzNvQixtQkFBM0MsRUFBK0QxQixRQUEvRCxFQUF3RTRCLGtCQUF4RSxFQUEyRkMsWUFBM0YsRUFBd0dDLFdBQXhHLEVBQXFId29CLElBQXJILENBQTBIO0FBQUNDLElBQUFBLElBQUksRUFBQzdyQjtBQUFOLEdBQTFILEVBQ0xtVyxFQURLLENBQ0YsU0FERSxFQUNTLFVBQVMyVixPQUFULEVBQWlCO0FBRTlCLFVBQU1DLGVBQWUsR0FBR0QsT0FBTyxDQUFDOVYsTUFBUixDQUFlZ1csY0FBZixDQUE4QnBtQixZQUF0RDtBQUNBLFVBQU1oRixlQUFlLEdBQUdtckIsZUFBZSxDQUFDRSxzQkFBeEM7QUFFQSxVQUFNQyxvQkFBb0IsR0FBR3BuQixvRUFBb0IsQ0FBQ2luQixlQUFELEVBQWlCbnJCLGVBQWpCLENBQWpEO0FBQ0EsUUFBSXVyQixnQkFBZ0IsR0FBRyxJQUFJanNCLElBQUksQ0FBQzhxQixHQUFMLENBQVNPLFFBQWIsQ0FBc0JaLDhFQUF0QixFQUFrQy9wQixlQUFsQyxDQUF2QjtBQUVBaEIsSUFBQUEsUUFBUSxDQUFDNnFCLCtEQUFBLENBQWtDMEIsZ0JBQWxDLENBQUQsQ0FBUjtBQUNBdnNCLElBQUFBLFFBQVEsQ0FBQzZxQix1REFBQSxDQUEwQnlCLG9CQUExQixDQUFELENBQVI7QUFFQXJyQixJQUFBQSxTQUFTO0FBQ1YsR0FiSyxFQWNMc1YsRUFkSyxDQWNGLE9BZEUsRUFjTyxVQUFTcFQsS0FBVCxFQUFlO0FBQzFCakMsSUFBQUEsT0FBTyxDQUFDaUMsS0FBSyxDQUFDaEMsT0FBUCxDQUFQO0FBQ0QsR0FoQkssQ0FBTjtBQWlCRCxDQXBCTSxFQXNCUDtBQUNBO0FBQ0E7O0FBQ08sTUFBTXFyQixhQUFhLEdBQUcsT0FBTVgsb0JBQU4sRUFBMkJ2ckIsSUFBM0IsRUFBZ0NOLFFBQWhDLEtBQTRDO0FBRXZFLFFBQU15c0Isa0JBQWtCLEdBQUcsTUFBTVosb0JBQW9CLENBQUNDLE9BQXJCLENBQTZCWSxpQkFBN0IsR0FBaURDLElBQWpELEVBQWpDO0FBRUMsUUFBTUMsZ0JBQWdCLEdBQUcsRUFBekI7QUFDQSxRQUFNeEQsUUFBUSxHQUFHLEVBQWpCO0FBRUEsUUFBTTNZLE9BQU8sQ0FBQ29FLEdBQVIsQ0FBWTRYLGtCQUFrQixDQUFDM21CLEdBQW5CLENBQXVCLE1BQU8vRSxJQUFQLElBQWM7QUFDdEQsUUFBSXdyQixnQkFBZ0IsR0FBRyxJQUFJanNCLElBQUksQ0FBQzhxQixHQUFMLENBQVNPLFFBQWIsQ0FBc0JaLDhFQUF0QixFQUFrQ2hxQixJQUFsQyxDQUF2QjtBQUNBLFVBQU04ckIsT0FBTyxHQUFHLE1BQU1OLGdCQUFnQixDQUFDVCxPQUFqQixDQUF5QmdCLGlCQUF6QixHQUE2Q0gsSUFBN0MsRUFBdEI7QUFDQUMsSUFBQUEsZ0JBQWdCLENBQUM1VyxJQUFqQixDQUFzQnVXLGdCQUF0QjtBQUNBLFVBQU1ELG9CQUFvQixHQUFHcG5CLG9FQUFvQixDQUFDMm5CLE9BQUQsRUFBUzlyQixJQUFULENBQWpEO0FBQ0Fxb0IsSUFBQUEsUUFBUSxDQUFDcFQsSUFBVCxDQUFjc1csb0JBQWQ7QUFDQSxHQU5pQixDQUFaLENBQU47QUFRQXRzQixFQUFBQSxRQUFRLENBQUM2cUIsNERBQUEsQ0FBK0IrQixnQkFBL0IsQ0FBRCxDQUFSO0FBQ0E1c0IsRUFBQUEsUUFBUSxDQUFDNnFCLG9EQUFBLENBQXVCekIsUUFBdkIsQ0FBRCxDQUFSO0FBRUYsQ0FsQk0sRUFvQlA7O0FBQ08sTUFBTWxxQixVQUFVLEdBQUcsT0FBTWUsb0JBQU4sRUFBMkJjLElBQTNCLEVBQWdDZixRQUFoQyxFQUF5Q2lCLFNBQXpDLEVBQW1EQyxPQUFuRCxLQUE4RDtBQUN0RixRQUFNO0FBQUNGLElBQUFBLGVBQUQ7QUFBaUJsQixJQUFBQSxNQUFqQjtBQUF3Qk0sSUFBQUE7QUFBeEIsTUFBbUNXLElBQXpDO0FBQ0EsUUFBTWQsb0JBQW9CLENBQUM2ckIsT0FBckIsQ0FBNkI1c0IsVUFBN0IsQ0FBd0M4QixlQUF4QyxFQUF5RGdyQixJQUF6RCxDQUE4RDtBQUFDQyxJQUFBQSxJQUFJLEVBQUM3ckIsT0FBTjtBQUFjeUIsSUFBQUEsS0FBSyxFQUFDL0I7QUFBcEIsR0FBOUQsRUFDTHlXLEVBREssQ0FDRixTQURFLEVBQ1MsVUFBUzJWLE9BQVQsRUFBaUI7QUFDOUJsc0IsSUFBQUEsUUFBUSxDQUFDNnFCLHVEQUFBLENBQTBCO0FBQUNwcUIsTUFBQUEsU0FBUyxFQUFDTyxlQUFYO0FBQTJCbEIsTUFBQUEsTUFBTSxFQUFDQTtBQUFsQyxLQUExQixDQUFELENBQVI7QUFDQW1CLElBQUFBLFNBQVM7QUFDVixHQUpLLEVBS0xzVixFQUxLLENBS0YsT0FMRSxFQUtPLFVBQVNwVCxLQUFULEVBQWU7QUFDMUJqQyxJQUFBQSxPQUFPLENBQUNpQyxLQUFLLENBQUNoQyxPQUFQLENBQVA7QUFDRCxHQVBLLENBQU47QUFRRCxDQVZNLEVBWVA7O0FBQ08sTUFBTTRyQixlQUFlLEdBQUcsT0FBT3pzQixJQUFQLEVBQVlVLGVBQVosRUFBNEJDLFNBQTVCLEVBQXNDQyxPQUF0QyxLQUFpRDtBQUM5RSxNQUFJO0FBQ0YsUUFBSXFyQixnQkFBZ0IsR0FBRyxJQUFJanNCLElBQUksQ0FBQzhxQixHQUFMLENBQVNPLFFBQWIsQ0FBc0JaLDhFQUF0QixFQUFrQy9wQixlQUFsQyxDQUF2QjtBQUNBLFVBQU1nc0IsZ0JBQWdCLEdBQUcsTUFBTVQsZ0JBQWdCLENBQUNVLGFBQWpCLENBQStCLGlCQUEvQixFQUFpRDtBQUM5RUMsTUFBQUEsU0FBUyxFQUFFLENBRG1FO0FBRTlFQyxNQUFBQSxPQUFPLEVBQUU7QUFGcUUsS0FBakQsQ0FBL0I7QUFJQWxzQixJQUFBQSxTQUFTLENBQUNxRixpRUFBaUIsQ0FBQzBtQixnQkFBRCxDQUFsQixDQUFUO0FBQ0QsR0FQRCxDQU9FLE9BQU83cEIsS0FBUCxFQUFjO0FBQ2RqQyxJQUFBQSxPQUFPLENBQUNpQyxLQUFELENBQVA7QUFDRDtBQUNGLENBWE0sRUFhUDs7QUFDTyxNQUFNaEUscUJBQXFCLEdBQUcsT0FBT21CLElBQVAsRUFBWVUsZUFBWixFQUE0QkQsSUFBNUIsRUFBaUNFLFNBQWpDLEVBQTJDQyxPQUEzQyxLQUFzRDtBQUN6RixRQUFNO0FBQUNHLElBQUFBLFdBQUQ7QUFBYXZCLElBQUFBLE1BQWI7QUFBb0J3QixJQUFBQSxTQUFwQjtBQUE4QmxCLElBQUFBO0FBQTlCLE1BQXlDVyxJQUEvQztBQUNFLE1BQUl3ckIsZ0JBQWdCLEdBQUcsSUFBSWpzQixJQUFJLENBQUM4cUIsR0FBTCxDQUFTTyxRQUFiLENBQXNCWiw4RUFBdEIsRUFBa0MvcEIsZUFBbEMsQ0FBdkI7QUFDQSxRQUFNdXJCLGdCQUFnQixDQUFDVCxPQUFqQixDQUF5QjNzQixxQkFBekIsQ0FBK0NrQyxXQUEvQyxFQUEyRHZCLE1BQTNELEVBQWtFd0IsU0FBbEUsRUFBNkUwcUIsSUFBN0UsQ0FBa0Y7QUFBQ0MsSUFBQUEsSUFBSSxFQUFDN3JCO0FBQU4sR0FBbEYsRUFDTG1XLEVBREssQ0FDRixTQURFLEVBQ1MsVUFBUzJWLE9BQVQsRUFBaUI7QUFDOUIsVUFBTWtCLGtCQUFrQixHQUFHbEIsT0FBTyxDQUFDOVYsTUFBUixDQUFlaVgsc0JBQWYsQ0FBc0NybkIsWUFBakU7QUFDQSxVQUFNc25CLGdCQUFnQixHQUFHMW1CLDRFQUE0QixDQUFDd21CLGtCQUFELEVBQW9CQSxrQkFBa0IsQ0FBQ3ZtQixTQUF2QyxDQUFyRDtBQUNBNUYsSUFBQUEsU0FBUyxDQUFDcXNCLGdCQUFELENBQVQ7QUFDRCxHQUxLLEVBTUwvVyxFQU5LLENBTUYsT0FORSxFQU1PLFVBQVNwVCxLQUFULEVBQWU7QUFDMUJqQyxJQUFBQSxPQUFPLENBQUNpQyxLQUFLLENBQUNoQyxPQUFQLENBQVA7QUFDRCxHQVJLLENBQU47QUFTSCxDQVpNLEVBY1A7O0FBQ08sTUFBTW9zQixxQkFBcUIsR0FBRyxPQUFPanRCLElBQVAsRUFBWVUsZUFBWixFQUE0QndzQixhQUE1QixLQUE2QztBQUNoRixNQUFJakIsZ0JBQWdCLEdBQUcsSUFBSWpzQixJQUFJLENBQUM4cUIsR0FBTCxDQUFTTyxRQUFiLENBQXNCWiw4RUFBdEIsRUFBa0MvcEIsZUFBbEMsQ0FBdkI7QUFDQSxNQUFJeXNCLG9CQUFvQixHQUFHLE1BQU1sQixnQkFBZ0IsQ0FBQ1QsT0FBakIsQ0FBeUI0QixxQkFBekIsR0FBaURmLElBQWpELEVBQWpDO0FBQ0EsTUFBSWdCLGdCQUFnQixHQUFHLEVBQXZCOztBQUVBLE1BQUdGLG9CQUFvQixJQUFJLENBQTNCLEVBQTZCO0FBQzNCRCxJQUFBQSxhQUFhLENBQUNHLGdCQUFELENBQWI7QUFDQTtBQUNEOztBQUVELE9BQUksSUFBSXRFLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsSUFBRW9FLG9CQUFmLEVBQW9DcEUsQ0FBQyxFQUFyQyxFQUF3QztBQUN0QyxVQUFNdUUsR0FBRyxHQUFHLE1BQU1yQixnQkFBZ0IsQ0FBQ1QsT0FBakIsQ0FBeUI2QixnQkFBekIsQ0FBMEN0RSxDQUFDLEdBQUMsQ0FBNUMsRUFBK0NzRCxJQUEvQyxFQUFsQjtBQUNBZ0IsSUFBQUEsZ0JBQWdCLENBQUMzWCxJQUFqQixDQUFzQnBQLDRFQUE0QixpQ0FBS2duQixHQUFMO0FBQVMvbUIsTUFBQUEsU0FBUyxFQUFDd2lCLENBQUMsR0FBQztBQUFyQixPQUFsRDtBQUNEOztBQUNEbUUsRUFBQUEsYUFBYSxDQUFDRyxnQkFBRCxDQUFiO0FBQ0QsQ0FmTSxFQWlCUDs7QUFDTyxNQUFNRSxtQkFBbUIsR0FBRyxPQUFPdnRCLElBQVAsRUFBWVMsSUFBWixFQUFpQkUsU0FBakIsRUFBMkJDLE9BQTNCLEtBQXNDO0FBQ3ZFLFFBQU07QUFBQ0YsSUFBQUEsZUFBRDtBQUFpQjhzQixJQUFBQSxLQUFqQjtBQUF1QjF0QixJQUFBQTtBQUF2QixNQUFrQ1csSUFBeEM7QUFDQSxNQUFJd3JCLGdCQUFnQixHQUFHLElBQUlqc0IsSUFBSSxDQUFDOHFCLEdBQUwsQ0FBU08sUUFBYixDQUFzQlosOEVBQXRCLEVBQWtDL3BCLGVBQWxDLENBQXZCO0FBQ0EsUUFBTXVyQixnQkFBZ0IsQ0FBQ1QsT0FBakIsQ0FBeUIrQixtQkFBekIsQ0FBNkNDLEtBQTdDLEVBQW9EOUIsSUFBcEQsQ0FBeUQ7QUFBQ0MsSUFBQUEsSUFBSSxFQUFDN3JCO0FBQU4sR0FBekQsRUFDTG1XLEVBREssQ0FDRixTQURFLEVBQ1MsVUFBUzJWLE9BQVQsRUFBaUI7QUFDOUJuZ0IsSUFBQUEsT0FBTyxDQUFDZ2lCLEdBQVIsQ0FBWTdCLE9BQVo7QUFDQWpyQixJQUFBQSxTQUFTO0FBQ1YsR0FKSyxFQUtMc1YsRUFMSyxDQUtGLE9BTEUsRUFLTyxVQUFTcFQsS0FBVCxFQUFlO0FBQzFCakMsSUFBQUEsT0FBTyxDQUFDaUMsS0FBSyxDQUFDaEMsT0FBUCxDQUFQO0FBQ0QsR0FQSyxDQUFOO0FBU0QsQ0FaTSxFQWNQOztBQUNPLE1BQU02c0IsY0FBYyxHQUFHLE9BQU8xdEIsSUFBUCxFQUFZTixRQUFaLEVBQXFCZSxJQUFyQixFQUEwQkUsU0FBMUIsRUFBb0NDLE9BQXBDLEtBQStDO0FBQzNFLFFBQU07QUFBQ0YsSUFBQUEsZUFBRDtBQUFpQjhzQixJQUFBQSxLQUFqQjtBQUF1QjF0QixJQUFBQSxPQUF2QjtBQUErQk4sSUFBQUE7QUFBL0IsTUFBeUNpQixJQUEvQztBQUNBLE1BQUl3ckIsZ0JBQWdCLEdBQUcsSUFBSWpzQixJQUFJLENBQUM4cUIsR0FBTCxDQUFTTyxRQUFiLENBQXNCWiw4RUFBdEIsRUFBa0MvcEIsZUFBbEMsQ0FBdkI7QUFDQSxRQUFNdXJCLGdCQUFnQixDQUFDVCxPQUFqQixDQUF5Qm1DLHVCQUF6QixDQUFpREgsS0FBakQsRUFBd0Q5QixJQUF4RCxDQUE2RDtBQUFDQyxJQUFBQSxJQUFJLEVBQUM3ckI7QUFBTixHQUE3RCxFQUNMbVcsRUFESyxDQUNGLFNBREUsRUFDUyxVQUFTMlYsT0FBVCxFQUFpQjtBQUM5Qm5nQixJQUFBQSxPQUFPLENBQUNnaUIsR0FBUixDQUFZN0IsT0FBWjtBQUNBbHNCLElBQUFBLFFBQVEsQ0FBQzZxQiw2REFBQSxDQUFnQztBQUN2QzdwQixNQUFBQSxlQUFlLEVBQUNBLGVBRHVCO0FBRXZDZ3RCLE1BQUFBLGNBQWMsRUFBQ2x1QjtBQUZ3QixLQUFoQyxDQUFELENBQVI7QUFJQW1CLElBQUFBLFNBQVM7QUFDVixHQVJLLEVBU0xzVixFQVRLLENBU0YsT0FURSxFQVNPLFVBQVNwVCxLQUFULEVBQWU7QUFDMUJqQyxJQUFBQSxPQUFPLENBQUNpQyxLQUFLLENBQUNoQyxPQUFQLENBQVA7QUFDRCxHQVhLLENBQU47QUFZRCxDQWZNLEVBaUJQOztBQUNPLE1BQU0rc0IscUJBQXFCLEdBQUcsT0FBTWp1QixvQkFBTixFQUEyQkcsT0FBM0IsS0FBc0M7QUFDekUsUUFBTTRzQixnQkFBZ0IsR0FBRyxNQUFNL3NCLG9CQUFvQixDQUFDZ3RCLGFBQXJCLENBQW1DLHNCQUFuQyxFQUEwRDtBQUN2RjFaLElBQUFBLE1BQU0sRUFBRTtBQUFFdE4sTUFBQUEsV0FBVyxFQUFFN0Y7QUFBZixLQUQrRTtBQUV2RjhzQixJQUFBQSxTQUFTLEVBQUUsQ0FGNEU7QUFHdkZDLElBQUFBLE9BQU8sRUFBRTtBQUg4RSxHQUExRCxDQUEvQjtBQUtBLFNBQU9obkIsMEVBQTBCLENBQUM2bUIsZ0JBQUQsQ0FBakM7QUFDRCxDQVBNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9LQSxNQUFNeEQsV0FBVyxHQUFHLGFBQXBCO0FBQ0EsTUFBTUcscUJBQXFCLEdBQUcsdUJBQTlCLEVBRVA7O0FBQ08sTUFBTUUsNkJBQTZCLEdBQUcsK0JBQXRDLEVBRVA7O0FBQ08sTUFBTUcsd0JBQXdCLEdBQUcsMEJBQWpDO0FBQ0EsTUFBTUUsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLE1BQU1FLDJCQUEyQixHQUFHLDZCQUFwQztBQUNBLE1BQU1HLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU1FLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1FLGdCQUFnQixHQUFHLGtCQUF6Qjs7Ozs7Ozs7OztBQ1pQLHlHQUE4Qzs7Ozs7Ozs7Ozs7O0FDQTlDOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL0Z1bmRSaXNlckNhcmQuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9GdW5kUmlzZXJGb3JtLmpzIiwid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvTG9hZGVyLmpzIiwid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvTmF2YmFyLmpzIiwid2VicGFjazovL2NsaWVudC8uL2hlbHBlci9hdXRoV3JhcHBlci5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9oZWxwZXIvaGVscGVyLmpzIiwid2VicGFjazovL2NsaWVudC8uL2hlbHBlci90b2FzdE1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9kYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vcmVkdXgvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9yZWR1eC9pbnRlcmFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vcmVkdXgvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qc1wiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIndlYjNcIiIsIndlYnBhY2s6Ly9jbGllbnQvaWdub3JlZHxDOlxcVXNlcnNcXG5hdmVlXFxEZXNrdG9wXFxDcm93ZE1pbnQtQS1CbG9ja2NoYWluLUJhc2VkLUNyb3dkZnVuZGluZy1QbGF0Zm9ybVxcY2xpZW50XFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXHNoYXJlZFxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBjb250cmlidXRlLCBjcmVhdGVXaXRoZHJhd1JlcXVlc3QgfSBmcm9tICcuLi9yZWR1eC9pbnRlcmFjdGlvbnMnXHJcbmltcG9ydCB7IGV0aGVyVG9XZWkgfSBmcm9tICcuLi9oZWxwZXIvaGVscGVyJ1xyXG5pbXBvcnQgeyB0b2FzdFN1Y2Nlc3MsIHRvYXN0RXJyb3IgfSBmcm9tICcuLi9oZWxwZXIvdG9hc3RNZXNzYWdlJ1xyXG5cclxuY29uc3QgY29sb3JNYWtlciA9IChzdGF0ZSkgPT4ge1xyXG4gIGlmIChzdGF0ZSA9PT0gJ0Z1bmRyYWlzaW5nJykgcmV0dXJuICdiZy1jeWFuLTUwMCdcclxuICBpZiAoc3RhdGUgPT09ICdFeHBpcmVkJykgcmV0dXJuICdiZy1yZWQtNTAwJ1xyXG4gIHJldHVybiAnYmctZW1lcmFsZC01MDAnXHJcbn1cclxuXHJcbmNvbnN0IEZ1bmRSaXNlckNhcmQgPSAoeyBwcm9wcywgcHVzaFdpdGhkcmF3UmVxdWVzdHMgfSkgPT4ge1xyXG4gIGNvbnN0IFtidG5Mb2FkZXIsIHNldEJ0bkxvYWRlcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbYW1vdW50LCBzZXRBbW91bnRdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgY29uc3QgY3Jvd2RGdW5kaW5nQ29udHJhY3QgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5mdW5kaW5nUmVkdWNlci5jb250cmFjdClcclxuICBjb25zdCBhY2NvdW50ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUud2ViM1JlZHVjZXIuYWNjb3VudClcclxuICBjb25zdCB3ZWIzID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUud2ViM1JlZHVjZXIuY29ubmVjdGlvbilcclxuXHJcbiAgY29uc3QgY29udHJpYnV0ZUFtb3VudCA9IChwcm9qZWN0SWQsIG1pbkNvbnRyaWJ1dGlvbikgPT4ge1xyXG4gICAgY29uc3QgbnVtZXJpY0Ftb3VudCA9IHBhcnNlRmxvYXQoYW1vdW50KVxyXG5cclxuICAgIGlmIChpc05hTihudW1lcmljQW1vdW50KSB8fCBudW1lcmljQW1vdW50IDwgbWluQ29udHJpYnV0aW9uKSB7XHJcbiAgICAgIHRvYXN0RXJyb3IoYE1pbmltdW0gY29udHJpYnV0aW9uIGFtb3VudCBpcyAke21pbkNvbnRyaWJ1dGlvbn0gRVRIYClcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0QnRuTG9hZGVyKHByb2plY3RJZClcclxuICAgIGNvbnN0IGNvbnRyaWJ1dGlvbkFtb3VudCA9IGV0aGVyVG9XZWkobnVtZXJpY0Ftb3VudClcclxuXHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBjb250cmFjdEFkZHJlc3M6IHByb2plY3RJZCxcclxuICAgICAgYW1vdW50OiBjb250cmlidXRpb25BbW91bnQsXHJcbiAgICAgIGFjY291bnQ6IGFjY291bnRcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvblN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgIHNldEJ0bkxvYWRlcihmYWxzZSlcclxuICAgICAgc2V0QW1vdW50KCcnKVxyXG4gICAgICB0b2FzdFN1Y2Nlc3MoYFN1Y2Nlc3NmdWxseSBjb250cmlidXRlZCAke251bWVyaWNBbW91bnR9IEVUSGApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25FcnJvciA9IChtZXNzYWdlKSA9PiB7XHJcbiAgICAgIHNldEJ0bkxvYWRlcihmYWxzZSlcclxuICAgICAgdG9hc3RFcnJvcihtZXNzYWdlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnRyaWJ1dGUoY3Jvd2RGdW5kaW5nQ29udHJhY3QsIGRhdGEsIGRpc3BhdGNoLCBvblN1Y2Nlc3MsIG9uRXJyb3IpXHJcbiAgfVxyXG5cclxuICBjb25zdCByZXF1ZXN0Rm9yV2l0aGRyYXcgPSAocHJvamVjdElkKSA9PiB7XHJcbiAgICBjb25zdCBudW1lcmljQW1vdW50ID0gcGFyc2VGbG9hdChhbW91bnQpXHJcblxyXG4gICAgaWYgKGlzTmFOKG51bWVyaWNBbW91bnQpIHx8IG51bWVyaWNBbW91bnQgPD0gMCkge1xyXG4gICAgICB0b2FzdEVycm9yKGBQbGVhc2UgZW50ZXIgYSB2YWxpZCB3aXRoZHJhdyBhbW91bnRgKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBzZXRCdG5Mb2FkZXIocHJvamVjdElkKVxyXG4gICAgY29uc3QgY29udHJpYnV0aW9uQW1vdW50ID0gZXRoZXJUb1dlaShudW1lcmljQW1vdW50KVxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRlc2NyaXB0aW9uOiBgJHtudW1lcmljQW1vdW50fSBFVEggcmVxdWVzdGVkIGZvciB3aXRoZHJhd2AsXHJcbiAgICAgIGFtb3VudDogY29udHJpYnV0aW9uQW1vdW50LFxyXG4gICAgICByZWNpcGllbnQ6IGFjY291bnQsXHJcbiAgICAgIGFjY291bnQ6IGFjY291bnRcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvblN1Y2Nlc3MgPSAoZGF0YSkgPT4ge1xyXG4gICAgICBzZXRCdG5Mb2FkZXIoZmFsc2UpXHJcbiAgICAgIHNldEFtb3VudCgnJylcclxuICAgICAgaWYgKHB1c2hXaXRoZHJhd1JlcXVlc3RzKSBwdXNoV2l0aGRyYXdSZXF1ZXN0cyhkYXRhKVxyXG4gICAgICB0b2FzdFN1Y2Nlc3MoYFN1Y2Nlc3NmdWxseSByZXF1ZXN0ZWQgd2l0aGRyYXcgb2YgJHtudW1lcmljQW1vdW50fSBFVEhgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uRXJyb3IgPSAobWVzc2FnZSkgPT4ge1xyXG4gICAgICBzZXRCdG5Mb2FkZXIoZmFsc2UpXHJcbiAgICAgIHRvYXN0RXJyb3IobWVzc2FnZSlcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVXaXRoZHJhd1JlcXVlc3Qod2ViMywgcHJvamVjdElkLCBkYXRhLCBvblN1Y2Nlc3MsIG9uRXJyb3IpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiBteS00XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcmliYm9uICR7Y29sb3JNYWtlcihwcm9wcy5zdGF0ZSl9YH0+e3Byb3BzLnN0YXRlfTwvZGl2PlxyXG5cclxuICAgICAgPExpbmsgaHJlZj17YC9wcm9qZWN0LWRldGFpbHMvJHtwcm9wcy5hZGRyZXNzfWB9PlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LXNhbnMgdGV4dC14bCB0ZXh0LWdyYXkgZm9udC1zZW1pYm9sZCBob3Zlcjp0ZXh0LXNreS01MDAgaG92ZXI6Y3Vyc29yLXBvaW50ZXJcIj57cHJvcHMudGl0bGV9PC9oMT5cclxuICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zYW5zIHRleHQtc20gdGV4dC1zdG9uZS04MDAgdHJhY2tpbmctdGlnaHRcIj57cHJvcHMuZGVzY3JpcHRpb259PC9wPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lci1jYXJkIG15LTYgdy1mdWxsIGxnOnctMi81XCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW1kIGZvbnQtYm9sZCBmb250LXNhbnMgdGV4dC1ncmF5XCI+VGFyZ2V0ZWQgY29udHJpYnV0aW9uPC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgZm9udC1zYW5zIHRleHQtZ3JheS02MDAgXCI+e3Byb3BzLmdvYWxBbW91bnR9IEVUSDwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbWQgZm9udC1ib2xkIGZvbnQtc2FucyB0ZXh0LWdyYXlcIj5EZWFkbGluZTwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIGZvbnQtc2FucyB0ZXh0LWdyYXktNjAwIFwiPntwcm9wcy5kZWFkbGluZX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXItY2FyZCBteS02IHctZnVsbCBsZzp3LTMvNVwiPlxyXG4gICAgICAgICAge3Byb3BzLnN0YXRlICE9PSAnU3VjY2Vzc2Z1bCcgPyAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTcwMCBmb250LXNlbWlib2xkXCI+Q29udHJpYnV0aW9uIGFtb3VudDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICBzdGVwPVwiYW55XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIGhlcmVcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17YW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEFtb3VudChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtidG5Mb2FkZXIgPT09IHByb3BzLmFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IHJvdW5kZWQtbC1tZFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjb250cmlidXRlQW1vdW50KHByb3BzLmFkZHJlc3MsIHByb3BzLm1pbkNvbnRyaWJ1dGlvbil9XHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtidG5Mb2FkZXIgPT09IHByb3BzLmFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtidG5Mb2FkZXIgPT09IHByb3BzLmFkZHJlc3MgPyAnTG9hZGluZy4uLicgOiAnQ29udHJpYnV0ZSd9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtcmVkLTYwMFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+Tk9URTo8L3NwYW4+IE1pbmltdW0gY29udHJpYnV0aW9uIGlzIHtwcm9wcy5taW5Db250cmlidXRpb259IEVUSFxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbWQgZm9udC1ib2xkIGZvbnQtc2FucyB0ZXh0LWdyYXlcIj5Db250cmFjdCBiYWxhbmNlPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIGZvbnQtc2FucyB0ZXh0LWdyYXktNjAwIFwiPntwcm9wcy5jb250cmFjdEJhbGFuY2V9IEVUSDwvcD5cclxuXHJcbiAgICAgICAgICAgICAge3Byb3BzLmNyZWF0b3IgPT09IGFjY291bnQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTcwMCBmb250LXNlbWlib2xkXCI+V2l0aGRyYXcgcmVxdWVzdDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3RlcD1cImFueVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgaGVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBbW91bnQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2J0bkxvYWRlciA9PT0gcHJvcHMuYWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IHJvdW5kZWQtbC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVxdWVzdEZvcldpdGhkcmF3KHByb3BzLmFkZHJlc3MpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2J0bkxvYWRlciA9PT0gcHJvcHMuYWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7YnRuTG9hZGVyID09PSBwcm9wcy5hZGRyZXNzID8gJ0xvYWRpbmcuLi4nIDogJ1dpdGhkcmF3J31cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge3Byb3BzLnN0YXRlICE9PSAnU3VjY2Vzc2Z1bCcgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyYXktMjAwIHJvdW5kZWQtZnVsbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzc1wiIHN0eWxlPXt7IHdpZHRoOiBgJHtwcm9wcy5wcm9ncmVzc30lYCB9fT57cHJvcHMucHJvZ3Jlc3N9JTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGdW5kUmlzZXJDYXJkXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xyXG5pbXBvcnQgeyBzdGFydEZ1bmRSYWlzaW5nIH0gZnJvbSAnLi4vcmVkdXgvaW50ZXJhY3Rpb25zJ1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgZXRoZXJUb1dlaSB9IGZyb20gJy4uL2hlbHBlci9oZWxwZXInXHJcbmltcG9ydCB7IHRvYXN0U3VjY2Vzcyx0b2FzdEVycm9yIH0gZnJvbSAnLi4vaGVscGVyL3RvYXN0TWVzc2FnZSdcclxuXHJcbmNvbnN0IEZ1bmRSaXNlckZvcm0gPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgY3Jvd2RGdW5kaW5nQ29udHJhY3QgPSB1c2VTZWxlY3RvcihzdGF0ZT0+c3RhdGUuZnVuZGluZ1JlZHVjZXIuY29udHJhY3QpXHJcbiAgICBjb25zdCBhY2NvdW50ID0gdXNlU2VsZWN0b3Ioc3RhdGU9PnN0YXRlLndlYjNSZWR1Y2VyLmFjY291bnQpXHJcbiAgICBjb25zdCB3ZWIzID0gdXNlU2VsZWN0b3Ioc3RhdGU9PnN0YXRlLndlYjNSZWR1Y2VyLmNvbm5lY3Rpb24pXHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcblxyXG4gICAgY29uc3QgW3RpdGxlLHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbZGVzY3JpcHRpb24sc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFt0YXJnZXRlZENvbnRyaWJ1dGlvbkFtb3VudCxzZXRUYXJnZXRlZENvbnRyaWJ1dGlvbkFtb3VudF0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW21pbmltdW1Db250cmlidXRpb25BbW91bnQsc2V0TWluaW11bUNvbnRyaWJ1dGlvbkFtb3VudF0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW2RlYWRsaW5lLHNldERlYWRsaW5lXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbYnRuTG9hZGluZyxzZXRCdG5Mb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuXHJcbiAgICBjb25zdCByaXNlRnVuZCA9IChlKSA9PntcclxuICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgIHNldEJ0bkxvYWRpbmcodHJ1ZSlcclxuICAgICAgIGNvbnN0IHVuaXhEYXRlID0gbW9tZW50KGRlYWRsaW5lKS52YWx1ZU9mKClcclxuXHJcbiAgICAgICBjb25zdCBvblN1Y2Nlc3MgPSAoKSA9PntcclxuICAgICAgICBzZXRCdG5Mb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIHNldFRpdGxlKFwiXCIpXHJcbiAgICAgICAgc2V0RGVzY3JpcHRpb24oXCJcIilcclxuICAgICAgICBzZXRUYXJnZXRlZENvbnRyaWJ1dGlvbkFtb3VudChcIlwiKVxyXG4gICAgICAgIHNldE1pbmltdW1Db250cmlidXRpb25BbW91bnQoXCJcIilcclxuICAgICAgICBzZXREZWFkbGluZShcIlwiKVxyXG4gICAgICAgIHRvYXN0U3VjY2VzcyhcIkZ1bmQgcmFpc2luZyBzdGFydGVkIPCfjolcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICBjb25zdCBvbkVycm9yID0gKGVycm9yKSA9PntcclxuICAgICAgICAgc2V0QnRuTG9hZGluZyhmYWxzZSlcclxuICAgICAgICAgdG9hc3RFcnJvcihlcnJvcik7XHJcbiAgICAgICB9XHJcblxyXG4gICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICBtaW5pbXVtQ29udHJpYnV0aW9uOmV0aGVyVG9XZWkobWluaW11bUNvbnRyaWJ1dGlvbkFtb3VudCksXHJcbiAgICAgICAgZGVhZGxpbmU6TnVtYmVyKHVuaXhEYXRlKSxcclxuICAgICAgICB0YXJnZXRDb250cmlidXRpb246ZXRoZXJUb1dlaSh0YXJnZXRlZENvbnRyaWJ1dGlvbkFtb3VudCksXHJcbiAgICAgICAgcHJvamVjdFRpdGxlOnRpdGxlLFxyXG4gICAgICAgIHByb2plY3REZXNjOmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGFjY291bnQ6YWNjb3VudFxyXG4gICAgICAgfVxyXG5cclxuICAgICAgIHN0YXJ0RnVuZFJhaXNpbmcod2ViMyxjcm93ZEZ1bmRpbmdDb250cmFjdCxkYXRhLG9uU3VjY2VzcyxvbkVycm9yLGRpc3BhdGNoKVxyXG4gICAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1zYW5zIGZvbnQtYm9sZCB0ZXh0LXhsXCI+U3RhcnQgWW91ciBGdW5kcmFpc2luZyBGb3IgRnJlZSA8L2gxPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSk9PnJpc2VGdW5kKGUpfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbXktMVwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTcwMFwiPlRpdGxlIDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUeXBlIGhlcmVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtaW5wdXQgYm9yZGVyLW5ldXRyYWwtNDAwIGZvY3VzOnJpbmctbmV1dHJhbC0yMDBcIiB2YWx1ZT17dGl0bGV9IG9uQ2hhbmdlPXsoZSk9PnNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbXktMVwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTcwMFwiPkRlc2NyaXB0aW9uIDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHBsYWNlaG9sZGVyPVwiVHlwZSBoZXJlXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLWlucHV0IGJvcmRlci1uZXV0cmFsLTQwMCBmb2N1czpyaW5nLW5ldXRyYWwtMjAwXCIgdmFsdWU9e2Rlc2NyaXB0aW9ufSBvbkNoYW5nZT17KGUpPT5zZXREZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSl9IHJlcXVpcmVkPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBteS0xXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNzAwXCI+VGFyZ2V0ZWQgY29udHJpYnV0aW9uIGFtb3VudCA6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJUeXBlIGhlcmVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtaW5wdXQgYm9yZGVyLW5ldXRyYWwtNDAwIGZvY3VzOnJpbmctbmV1dHJhbC0yMDBcIiB2YWx1ZT17dGFyZ2V0ZWRDb250cmlidXRpb25BbW91bnR9IG9uQ2hhbmdlPXsoZSk9PnNldFRhcmdldGVkQ29udHJpYnV0aW9uQW1vdW50KGUudGFyZ2V0LnZhbHVlKX0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbXktMVwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTcwMFwiPk1pbmltdW0gY29udHJpYnV0aW9uIGFtb3VudCA6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJUeXBlIGhlcmVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtaW5wdXQgYm9yZGVyLW5ldXRyYWwtNDAwIGZvY3VzOnJpbmctbmV1dHJhbC0yMDBcIiB2YWx1ZT17bWluaW11bUNvbnRyaWJ1dGlvbkFtb3VudH0gb25DaGFuZ2U9eyhlKT0+c2V0TWluaW11bUNvbnRyaWJ1dGlvbkFtb3VudChlLnRhcmdldC52YWx1ZSl9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGRhdGUtcGlja2VyIG15LTFcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS03MDBcIj5EZWFkbGluZSA6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIHBsYWNlaG9sZGVyPVwiVHlwZSBoZXJlXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLWlucHV0IGJvcmRlci1uZXV0cmFsLTQwMCBmb2N1czpyaW5nLW5ldXRyYWwtMjAwXCIgdmFsdWU9e2RlYWRsaW5lfSBvbkNoYW5nZT17KGUpPT5zZXREZWFkbGluZShlLnRhcmdldC52YWx1ZSl9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInAtMiB3LWZ1bGwgYmctWyNGNTZEOTFdIHRleHQtd2hpdGUgcm91bmRlZC1tZCBob3ZlcjpiZy1bI2QxNTY3N11cIiBkaXNhYmxlZD17YnRuTG9hZGluZ30gPntidG5Mb2FkaW5nP1wiTG9hZGluZy4uLlwiOlwiUmFpc2UgZnVuZFwifTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRnVuZFJpc2VyRm9ybSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IExvYWRlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgIDxzdmcgcm9sZT1cInN0YXR1c1wiIGNsYXNzTmFtZT1cImlubGluZSBtci0yIHctOCBoLTggdGV4dC1ncmF5LTIwMCBhbmltYXRlLXNwaW4gZGFyazp0ZXh0LWdyYXktNjAwIGZpbGwtYmx1ZS02MDBcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDFcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0xMDAgNTAuNTkwOEMxMDAgNzguMjA1MSA3Ny42MTQyIDEwMC41OTEgNTAgMTAwLjU5MUMyMi4zODU4IDEwMC41OTEgMCA3OC4yMDUxIDAgNTAuNTkwOEMwIDIyLjk3NjYgMjIuMzg1OCAwLjU5MDgyIDUwIDAuNTkwODJDNzcuNjE0MiAwLjU5MDgyIDEwMCAyMi45NzY2IDEwMCA1MC41OTA4Wk05LjA4MTQ0IDUwLjU5MDhDOS4wODE0NCA3My4xODk1IDI3LjQwMTMgOTEuNTA5NCA1MCA5MS41MDk0QzcyLjU5ODcgOTEuNTA5NCA5MC45MTg2IDczLjE4OTUgOTAuOTE4NiA1MC41OTA4QzkwLjkxODYgMjcuOTkyMSA3Mi41OTg3IDkuNjcyMjYgNTAgOS42NzIyNkMyNy40MDEzIDkuNjcyMjYgOS4wODE0NCAyNy45OTIxIDkuMDgxNDQgNTAuNTkwOFpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTkzLjk2NzYgMzkuMDQwOUM5Ni4zOTMgMzguNDAzOCA5Ny44NjI0IDM1LjkxMTYgOTcuMDA3OSAzMy41NTM5Qzk1LjI5MzIgMjguODIyNyA5Mi44NzEgMjQuMzY5MiA4OS44MTY3IDIwLjM0OEM4NS44NDUyIDE1LjExOTIgODAuODgyNiAxMC43MjM4IDc1LjIxMjQgNy40MTI4OUM2OS41NDIyIDQuMTAxOTQgNjMuMjc1NCAxLjk0MDI1IDU2Ljc2OTggMS4wNTEyNEM1MS43NjY2IDAuMzY3NTQxIDQ2LjY5NzYgMC40NDY4NDMgNDEuNzM0NSAxLjI3ODczQzM5LjI2MTMgMS42OTMyOCAzNy44MTMgNC4xOTc3OCAzOC40NTAxIDYuNjIzMjZDMzkuMDg3MyA5LjA0ODc0IDQxLjU2OTQgMTAuNDcxNyA0NC4wNTA1IDEwLjEwNzFDNDcuODUxMSA5LjU0ODU1IDUxLjcxOTEgOS41MjY4OSA1NS41NDAyIDEwLjA0OTFDNjAuODY0MiAxMC43NzY2IDY1Ljk5MjggMTIuNTQ1NyA3MC42MzMxIDE1LjI1NTJDNzUuMjczNSAxNy45NjQ4IDc5LjMzNDcgMjEuNTYxOSA4Mi41ODQ5IDI1Ljg0MUM4NC45MTc1IDI4LjkxMjEgODYuNzk5NyAzMi4yOTEzIDg4LjE4MTEgMzUuODc1OEM4OS4wODMgMzguMjE1OCA5MS41NDIxIDM5LjY3ODEgOTMuOTY3NiAzOS4wNDA5WlwiIGZpbGw9XCJjdXJyZW50RmlsbFwiLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyIiwiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgW29wZW5NZW51LHNldE9wZW5NZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGFjY291bnQgPSB1c2VTZWxlY3RvcihzdGF0ZT0+c3RhdGUud2ViM1JlZHVjZXIuYWNjb3VudClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgey8qIDwhLS0gVGhpcyBleGFtcGxlIHJlcXVpcmVzIFRhaWx3aW5kIENTUyB2Mi4wKyAtLT4gKi99XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJiZy1bI0Y3RjVGMl1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTIgc206cHgtNiBsZzpweC04XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGgtMTZcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC15LTAgbGVmdC0wIGZsZXggaXRlbXMtY2VudGVyIHNtOmhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgey8qIDwhLS0gTW9iaWxlIG1lbnUgYnV0dG9uLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtMiByb3VuZGVkLW1kIHRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC1ncmVheSBob3ZlcjpiZy1bI0Y3Qzk4NF0gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluc2V0IGZvY3VzOnJpbmctd2hpdGVcIiBhcmlhLWNvbnRyb2xzPVwibW9iaWxlLW1lbnVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBvbkNsaWNrPXsoKT0+c2V0T3Blbk1lbnUoIW9wZW5NZW51KX0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+T3BlbiBtYWluIG1lbnU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1iYXJzXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzbTppdGVtcy1zdHJldGNoIHNtOmp1c3RpZnktc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0nZm9udC1tb25vIHRleHQteGwgdGV4dC1ncmVheSBmb250LWJvbGQgaGlkZGVuIGxnOmJsb2NrJz5Dcm93ZE1pbnQ8L2g0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBzbTpibG9jayBzbTptbC02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kYXNoYm9hcmRcIiAgPjxzcGFuIGNsYXNzTmFtZT17YCR7cm91dGVyLnBhdGhuYW1lID09PSBcIi9kYXNoYm9hcmRcIj9cImJnLVsjRjdDOTg0XVwiOlwiXCJ9IHRleHQtZ3JlYXkgcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1zbSBmb250LW1lZGl1bSBob3ZlcjpjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1bI0Y3Qzk4NF0gaG92ZXI6dGV4dC1ncmVheWB9PkRhc2hib2FyZDwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9teS1jb250cmlidXRpb25zXCI+PHNwYW4gY2xhc3NOYW1lPXtgJHtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL215LWNvbnRyaWJ1dGlvbnNcIj9cImJnLVsjRjdDOTg0XVwiOlwiXCJ9IHRleHQtZ3JlYXkgcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1zbSBmb250LW1lZGl1bSBob3ZlcjpjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1bI0Y3Qzk4NF0gaG92ZXI6dGV4dC1ncmVheWB9Pk15IENvbnRyaWJ1dGlvbjwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC15LTAgcmlnaHQtMCBmbGV4IGl0ZW1zLWNlbnRlciBwci0yIHNtOnN0YXRpYyBzbTppbnNldC1hdXRvIHNtOm1sLTYgc206cHItMFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwicC0xIHctNDAgdHJ1bmNhdGUgcm91bmRlZC1mdWxsIHRleHQtZ3JlYXkgaG92ZXI6dGV4dC1ncmVheSBcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gPnthY2NvdW50fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiA8IS0tIFByb2ZpbGUgIC0tPiAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtMyByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJiZy1bI0Y3Qzk4NF0gZmxleCB0ZXh0LXNtIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMCBmb2N1czpyaW5nLW9mZnNldC0wIGZvY3VzOnJpbmctd2hpdGVcIiBpZD1cInVzZXItbWVudS1idXR0b25cIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5PcGVuIFVzZXIgTWVudTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtOCB3LTggcm91bmRlZC1mdWxsXCIgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogPCEtLSBNb2JpbGUgbWVudSwgc2hvdy9oaWRlIGJhc2VkIG9uIG1lbnUgc3RhdGUuIC0tPiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHNtOmhpZGRlbiAkeyFvcGVuTWVudT9cImhpZGRlblwiOlwiXCJ9YH0gaWQ9XCJtb2JpbGUtbWVudVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTIgcHQtMiBwYi0zIHNwYWNlLXktMVwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJnLVsjRjdDOTg0XSB0ZXh0LWdyZWF5IGJsb2NrIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtYmFzZSBmb250LW1lZGl1bVwiIGFyaWEtY3VycmVudD1cInBhZ2VcIj5EYXNoYm9hcmQ8L2E+XHJcblxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInRleHQtZ3JlYXkgaG92ZXI6YmctWyNGN0M5ODRdIGhvdmVyOnRleHQtZ3JlYXkgYmxvY2sgcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtXCI+VGVhbTwvYT5cclxuXHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwidGV4dC1ncmVheSBob3ZlcjpiZy1bI0Y3Qzk4NF0gaG92ZXI6dGV4dC1ncmVheSBibG9jayBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LWJhc2UgZm9udC1tZWRpdW1cIj5Qcm9qZWN0czwvYT5cclxuXHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwidGV4dC1ncmVheSBob3ZlcjpiZy1bI0Y3Qzk4NF0gaG92ZXI6dGV4dC1ncmVheSBibG9jayBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LWJhc2UgZm9udC1tZWRpdW1cIj5DYWxlbmRhcjwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXIiLCJpbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmJhclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldExvY2FsU3RvcmFnZURhdGEgPSAobmFtZSkgPT57XHJcbiAgdmFyIHZhbHVlO1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShuYW1lKVxyXG4gIH1cclxuICByZXR1cm4gdmFsdWVcclxufVxyXG5cclxuY29uc3QgYXV0aFdyYXBwZXIgPSAoV3JhcHBlZENvbXBvbmVudCkgPT4ge1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9kaXNwbGF5LW5hbWVcclxuICByZXR1cm4gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgLy8gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAvLyAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgICAgXHJcbiAgICAvLyAgICAgY29uc3Qgd2FsbGV0QWRkcmVzcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiQUREUkVTU1wiKTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyh3YWxsZXRBZGRyZXNzKVxyXG5cclxuICAgIC8vICAgaWYgKHdhbGxldEFkZHJlc3MpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgICA8V3JhcHBlZENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICAvLyAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgcm91dGVyLnJlcGxhY2UoXCIvXCIpO1xyXG4gICAgLy8gICAgIHJldHVybiAgbnVsbDtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHJldHVybiA8ZGl2PldpbmRvdyBub3QgZm91bmQ8L2Rpdj5cclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXV0aFdyYXBwZXI7XHJcbiIsImltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5pbXBvcnQgd2ViMyBmcm9tIFwid2ViM1wiO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHdlaVRvRXRoZXIgPSAobnVtKSA9PiB7XHJcbiAgcmV0dXJuIHdlYjMudXRpbHMuZnJvbVdlaShudW0udG9TdHJpbmcoKSwgJ2V0aGVyJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBldGhlclRvV2VpID0gKG51bSkgPT4ge1xyXG4gIGNvbnN0IHN0ciA9IHR5cGVvZiBudW0gPT09IFwic3RyaW5nXCIgPyBudW0gOiBudW0udG9TdHJpbmcoKTsgLy8gZW5zdXJlIGlucHV0IGlzIGEgc3RyaW5nXHJcbiAgY29uc3Qgd2VpID0gd2ViMy51dGlscy50b1dlaShzdHIsICdldGhlcicpO1xyXG4gIHJldHVybiB3ZWk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1bml4VG9EYXRlID0gKHVuaXhEYXRlKSA9PiB7XHJcbiAgcmV0dXJuIG1vbWVudCh1bml4RGF0ZSkuZm9ybWF0KFwiREQvTU0vWVlZWVwiKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHN0YXRlID0gW1wiRnVuZHJhaXNpbmdcIiwgXCJFeHBpcmVkXCIsIFwiU3VjY2Vzc2Z1bFwiXTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0RGF0YUZvcm1hdHRlciA9IChkYXRhLCBjb250cmFjdEFkZHJlc3MpID0+IHtcclxuICBjb25zdCBmb3JtYXR0ZWREYXRhID0ge1xyXG4gICAgYWRkcmVzczogY29udHJhY3RBZGRyZXNzLFxyXG4gICAgY3JlYXRvcjogZGF0YT8ucHJvamVjdFN0YXJ0ZXIsXHJcbiAgICBjb250cmFjdEJhbGFuY2U6IGRhdGEuYmFsYW5jZSA/IHdlaVRvRXRoZXIoZGF0YS5iYWxhbmNlKSA6IDAsXHJcbiAgICB0aXRsZTogZGF0YS50aXRsZSxcclxuICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2MsXHJcbiAgICBtaW5Db250cmlidXRpb246IHdlaVRvRXRoZXIoZGF0YS5taW5Db250cmlidXRpb24pLFxyXG4gICAgZ29hbEFtb3VudDogd2VpVG9FdGhlcihkYXRhLmdvYWxBbW91bnQpLFxyXG4gICAgY3VycmVudEFtb3VudDogd2VpVG9FdGhlcihkYXRhLmN1cnJlbnRBbW91bnQpLFxyXG4gICAgc3RhdGU6IHN0YXRlW051bWJlcihkYXRhLmN1cnJlbnRTdGF0ZSldLFxyXG4gICAgZGVhZGxpbmU6IHVuaXhUb0RhdGUoTnVtYmVyKGRhdGEucHJvamVjdERlYWRsaW5lKSksXHJcbiAgICBwcm9ncmVzczogTWF0aC5yb3VuZCgoTnVtYmVyKHdlaVRvRXRoZXIoZGF0YS5jdXJyZW50QW1vdW50KSkgLyBOdW1iZXIod2VpVG9FdGhlcihkYXRhLmdvYWxBbW91bnQpKSkgKiAxMDApXHJcbiAgfTtcclxuICByZXR1cm4gZm9ybWF0dGVkRGF0YTtcclxufVxyXG5cclxuY29uc3QgZm9ybWF0UHJvamVjdENvbnRyaWJ1dGlvbnMgPSAoY29udHJpYnV0aW9ucykgPT4ge1xyXG4gIHJldHVybiBjb250cmlidXRpb25zLm1hcChkYXRhID0+ICh7XHJcbiAgICBwcm9qZWN0QWRkcmVzczogZGF0YS5yZXR1cm5WYWx1ZXMucHJvamVjdEFkZHJlc3MsXHJcbiAgICBjb250cmlidXRvcjogZGF0YS5yZXR1cm5WYWx1ZXMuY29udHJpYnV0b3IsXHJcbiAgICBhbW91bnQ6IE51bWJlcih3ZWlUb0V0aGVyKGRhdGEucmV0dXJuVmFsdWVzLmNvbnRyaWJ1dGVkQW1vdW50KSlcclxuICB9KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBncm91cENvbnRyaWJ1dGlvbkJ5UHJvamVjdCA9IChjb250cmlidXRpb25zKSA9PiB7XHJcbiAgY29uc3QgY29udHJpYnV0aW9uTGlzdCA9IGZvcm1hdFByb2plY3RDb250cmlidXRpb25zKGNvbnRyaWJ1dGlvbnMpO1xyXG4gIHJldHVybiBjb250cmlidXRpb25MaXN0O1xyXG59XHJcblxyXG5jb25zdCBmb3JtYXRDb250cmlidXRpb24gPSAoY29udHJpYnV0aW9ucykgPT4ge1xyXG4gIHJldHVybiBjb250cmlidXRpb25zLm1hcChkYXRhID0+ICh7XHJcbiAgICBjb250cmlidXRvcjogZGF0YS5yZXR1cm5WYWx1ZXMuY29udHJpYnV0b3IsXHJcbiAgICBhbW91bnQ6IE51bWJlcih3ZWlUb0V0aGVyKGRhdGEucmV0dXJuVmFsdWVzLmFtb3VudCkpXHJcbiAgfSkpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ3JvdXBDb250cmlidXRvcnMgPSAoY29udHJpYnV0aW9ucykgPT4ge1xyXG4gIGNvbnN0IGNvbnRyaWJ1dG9yTGlzdCA9IGZvcm1hdENvbnRyaWJ1dGlvbihjb250cmlidXRpb25zKTtcclxuICBjb25zdCBjb250cmlidXRvckdyb3VwID0gXy5tYXAoXHJcbiAgICBfLmdyb3VwQnkoY29udHJpYnV0b3JMaXN0LCAnY29udHJpYnV0b3InKSxcclxuICAgIChvLCBhZGRyZXNzKSA9PiAoeyBjb250cmlidXRvcjogYWRkcmVzcywgYW1vdW50OiBfLnN1bUJ5KG8sICdhbW91bnQnKSB9KVxyXG4gICk7XHJcbiAgcmV0dXJuIGNvbnRyaWJ1dG9yR3JvdXA7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB3aXRoZHJhd1JlcXVlc3REYXRhRm9ybWF0dGVyID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcmVxdWVzdElkOiBkYXRhLnJlcXVlc3RJZCxcclxuICAgIHRvdGFsVm90ZTogZGF0YS5ub09mVm90ZXMsXHJcbiAgICBhbW91bnQ6IHdlaVRvRXRoZXIoZGF0YS5hbW91bnQpLFxyXG4gICAgc3RhdHVzOiBkYXRhLmlzQ29tcGxldGVkID8gXCJDb21wbGV0ZWRcIiA6IFwiUGVuZGluZ1wiLFxyXG4gICAgZGVzYzogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgIHJlY2lwdGFudDogZGF0YS5yZWNpcHRlbnRcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjb25uZWN0V2l0aFdhbGxldCA9IGFzeW5jIChvblN1Y2Nlc3MpID0+IHtcclxuICBpZiAod2luZG93LmV0aGVyZXVtKSB7XHJcbiAgICB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIgfSlcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBvblN1Y2Nlc3MoKTtcclxuICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgd2luZG93LmFsZXJ0KFxyXG4gICAgICBcIk5vbi1FdGhlcmV1bSBicm93c2VyIGRldGVjdGVkLiBZb3Ugc2hvdWxkIGNvbnNpZGVyIHRyeWluZyBNZXRhTWFzayFcIlxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2hhaW5PckFjY291bnRDaGFuZ2VkSGFuZGxlciA9ICgpID0+IHtcclxuICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgdG9hc3RTdWNjZXNzID0gKG1zZykgPT57XHJcbiAgICB0b2FzdC5zdWNjZXNzKG1zZywge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxyXG4gICAgICAgIGF1dG9DbG9zZTogNTAwMCxcclxuICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0b2FzdEVycm9yID0gKG1zZykgPT57XHJcbiAgICB0b2FzdC5lcnJvcihtc2csIHtcclxuICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcclxuICAgICAgICBhdXRvQ2xvc2U6IDUwMDAsXHJcbiAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgICAgIH0pO1xyXG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyXCIpO1xudmFyIF9yb3V0ZXIxID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xudmFyIF91c2VJbnRlcnNlY3Rpb24gPSByZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3QgcHJlZmV0Y2hlZCA9IHtcbn07XG5mdW5jdGlvbiBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFyb3V0ZXIpIHJldHVybjtcbiAgICBpZiAoISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSByZXR1cm47XG4gICAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpPT57XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBjdXJMb2NhbGUgPSBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWU7XG59XG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcbiAgICBjb25zdCB7IHRhcmdldCAgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgcmV0dXJuIHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicgfHwgZXZlbnQubWV0YUtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMjtcbn1cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKSB7XG4gICAgY29uc3QgeyBub2RlTmFtZSAgfSA9IGUuY3VycmVudFRhcmdldDtcbiAgICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAgICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICAgIGlmIChzY3JvbGwgPT0gbnVsbCAmJiBhcy5pbmRleE9mKCcjJykgPj0gMCkge1xuICAgICAgICBzY3JvbGwgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gICAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgICAgIHNoYWxsb3csXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgc2Nyb2xsXG4gICAgfSk7XG59XG5mdW5jdGlvbiBMaW5rKHByb3BzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgKyAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCIgOiAnJykpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZCA9IHtcbiAgICAgICAgICAgIGhyZWY6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wcyA9IE9iamVjdC5rZXlzKHJlcXVpcmVkUHJvcHNHdWFyZCk7XG4gICAgICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gPT0gbnVsbCB8fCB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgICAgICAgICAgY29uc3QgXyA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZCA9IHtcbiAgICAgICAgICAgIGFzOiB0cnVlLFxuICAgICAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgICAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICAgICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgICAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgICAgICAgbG9jYWxlOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUHJvcHMgPSBPYmplY3Qua2V5cyhvcHRpb25hbFByb3BzR3VhcmQpO1xuICAgICAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XTtcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAncmVwbGFjZScgfHwga2V5ID09PSAnc2Nyb2xsJyB8fCBrZXkgPT09ICdzaGFsbG93JyB8fCBrZXkgPT09ICdwYXNzSHJlZicgfHwga2V5ID09PSAncHJlZmV0Y2gnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICAgICAgICAgIGNvbnN0IF8gPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICAgICAgY29uc3QgaGFzV2FybmVkID0gX3JlYWN0LmRlZmF1bHQudXNlUmVmKGZhbHNlKTtcbiAgICAgICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2U7XG4gICAgY29uc3Qgcm91dGVyID0gKDAsIF9yb3V0ZXIxKS51c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IGhyZWYgLCBhcyAgfSA9IF9yZWFjdC5kZWZhdWx0LnVzZU1lbW8oKCk9PntcbiAgICAgICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSAoMCwgX3JvdXRlcikucmVzb2x2ZUhyZWYocm91dGVyLCBwcm9wcy5ocmVmLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgICAgICAgIGFzOiBwcm9wcy5hcyA/ICgwLCBfcm91dGVyKS5yZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmFzKSA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG4gICAgICAgIH07XG4gICAgfSwgW1xuICAgICAgICByb3V0ZXIsXG4gICAgICAgIHByb3BzLmhyZWYsXG4gICAgICAgIHByb3BzLmFzXG4gICAgXSk7XG4gICAgbGV0IHsgY2hpbGRyZW4gLCByZXBsYWNlICwgc2hhbGxvdyAsIHNjcm9sbCAsIGxvY2FsZSAgfSA9IHByb3BzO1xuICAgIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNoaWxkcmVuID0gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBudWxsLCBjaGlsZHJlbik7XG4gICAgfVxuICAgIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgIGxldCBjaGlsZDtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNdWx0aXBsZSBjaGlsZHJlbiB3ZXJlIHBhc3NlZCB0byA8TGluaz4gd2l0aCBcXGBocmVmXFxgIG9mIFxcYCR7cHJvcHMuaHJlZn1cXGAgYnV0IG9ubHkgb25lIGNoaWxkIGlzIHN1cHBvcnRlZCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9saW5rLW11bHRpcGxlLWNoaWxkcmVuYCArICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFwiIFxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCIgOiAnJykpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICB9XG4gICAgY29uc3QgY2hpbGRSZWYgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZjtcbiAgICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gKDAsIF91c2VJbnRlcnNlY3Rpb24pLnVzZUludGVyc2VjdGlvbih7XG4gICAgICAgIHJvb3RNYXJnaW46ICcyMDBweCdcbiAgICB9KTtcbiAgICBjb25zdCBzZXRSZWYgPSBfcmVhY3QuZGVmYXVsdC51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIHNldEludGVyc2VjdGlvblJlZihlbCk7XG4gICAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgY2hpbGRSZWYsXG4gICAgICAgIHNldEludGVyc2VjdGlvblJlZlxuICAgIF0pO1xuICAgIF9yZWFjdC5kZWZhdWx0LnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmICgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpO1xuICAgICAgICBjb25zdCBjdXJMb2NhbGUgPSB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldO1xuICAgICAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICAgICAgICAgIGxvY2FsZTogY3VyTG9jYWxlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgYXMsXG4gICAgICAgIGhyZWYsXG4gICAgICAgIGlzVmlzaWJsZSxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBwLFxuICAgICAgICByb3V0ZXJcbiAgICBdKTtcbiAgICBjb25zdCBjaGlsZFByb3BzID0ge1xuICAgICAgICByZWY6IHNldFJlZixcbiAgICAgICAgb25DbGljazogKGUpPT57XG4gICAgICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGUpPT57XG4gICAgICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTtcbiAgICAgICAgfVxuICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICBwcmlvcml0eTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAgIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICAgIGlmIChwcm9wcy5wYXNzSHJlZiB8fCBjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSB7XG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgICAgIC8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4gICAgICAgIC8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG4gICAgICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9IHJvdXRlciAmJiByb3V0ZXIuaXNMb2NhbGVEb21haW4gJiYgKDAsIF9yb3V0ZXIpLmdldERvbWFpbkxvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlcyk7XG4gICAgICAgIGNoaWxkUHJvcHMuaHJlZiA9IGxvY2FsZURvbWFpbiB8fCAoMCwgX3JvdXRlcikuYWRkQmFzZVBhdGgoKDAsIF9yb3V0ZXIpLmFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKTtcbiAgICB9XG4gICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKSk7XG59XG52YXIgX2RlZmF1bHQgPSBMaW5rO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmsuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7XG5leHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gdm9pZCAwO1xuZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoO1xufVxuY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0ggPyAocGF0aCk9PntcbiAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpO1xuICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nO1xuICAgIH1cbn0gOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSB2b2lkIDA7XG5jb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjayAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGNiKSB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY2Ioe1xuICAgICAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIDEpO1xufTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2s7XG5jb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2sgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGlkKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZCk7XG59O1xuZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSBjYW5jZWxJZGxlQ2FsbGJhY2s7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMubWFya0Fzc2V0RXJyb3IgPSBtYXJrQXNzZXRFcnJvcjtcbmV4cG9ydHMuaXNBc3NldEVycm9yID0gaXNBc3NldEVycm9yO1xuZXhwb3J0cy5nZXRDbGllbnRCdWlsZE1hbmlmZXN0ID0gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdDtcbmV4cG9ydHMuY3JlYXRlUm91dGVMb2FkZXIgPSBjcmVhdGVSb3V0ZUxvYWRlcjtcbnZhciBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZVwiKSk7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwO1xuZnVuY3Rpb24gd2l0aEZ1dHVyZShrZXksIG1hcCwgZ2VuZXJhdG9yKSB7XG4gICAgbGV0IGVudHJ5ID0gbWFwLmdldChrZXkpO1xuICAgIGlmIChlbnRyeSkge1xuICAgICAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgICAgICAgIHJldHVybiBlbnRyeS5mdXR1cmU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSk7XG4gICAgfVxuICAgIGxldCByZXNvbHZlcjtcbiAgICBjb25zdCBwcm9tID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgIHJlc29sdmVyID0gcmVzb2x2ZTtcbiAgICB9KTtcbiAgICBtYXAuc2V0KGtleSwgZW50cnkgPSB7XG4gICAgICAgIHJlc29sdmU6IHJlc29sdmVyLFxuICAgICAgICBmdXR1cmU6IHByb21cbiAgICB9KTtcbiAgICByZXR1cm4gZ2VuZXJhdG9yID8gZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpPT4ocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSlcbiAgICApIDogcHJvbTtcbn1cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbmspIHtcbiAgICB0cnkge1xuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICByZXR1cm4oLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4gICAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIWRvY3VtZW50LmRvY3VtZW50TW9kZSkgfHwgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5jb25zdCBjYW5QcmVmZXRjaCA9IGhhc1ByZWZldGNoKCk7XG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShocmVmLCBhcywgbGluaykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopPT57XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICAgICAgaWYgKGFzKSBsaW5rLmFzID0gYXM7XG4gICAgICAgIGxpbmsucmVsID0gYHByZWZldGNoYDtcbiAgICAgICAgbGluay5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47XG4gICAgICAgIGxpbmsub25sb2FkID0gcmVzO1xuICAgICAgICBsaW5rLm9uZXJyb3IgPSByZWo7XG4gICAgICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgICAgIGxpbmsuaHJlZiA9IGhyZWY7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgfSk7XG59XG5jb25zdCBBU1NFVF9MT0FEX0VSUk9SID0gU3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJyk7XG5mdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnIpIHtcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge1xuICAgIH0pO1xufVxuZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycikge1xuICAgIHJldHVybiBlcnIgJiYgQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnI7XG59XG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoc3JjLCBzY3JpcHQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgICAgIC8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlO1xuICAgICAgICBzY3JpcHQub25lcnJvciA9ICgpPT5yZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcbiAgICAgICAgO1xuICAgICAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAgICAgLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG4gICAgICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47XG4gICAgICAgIC8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4gICAgICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgICAgICBzY3JpcHQuc3JjID0gc3JjO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfSk7XG59XG4vLyBXZSB3YWl0IGZvciBwYWdlcyB0byBiZSBidWlsdCBpbiBkZXYgYmVmb3JlIHdlIHN0YXJ0IHRoZSByb3V0ZSB0cmFuc2l0aW9uXG4vLyB0aW1lb3V0IHRvIHByZXZlbnQgYW4gdW4tbmVjZXNzYXJ5IGhhcmQgbmF2aWdhdGlvbiBpbiBkZXZlbG9wbWVudC5cbmxldCBkZXZCdWlsZFByb21pc2U7XG4vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChwLCBtcywgZXJyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgcC50aGVuKChyKT0+e1xuICAgICAgICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc29sdmUocik7XG4gICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgICAgIC8vIFdlIHdyYXAgdGhlc2UgY2hlY2tzIHNlcGFyYXRlbHkgZm9yIGJldHRlciBkZWFkLWNvZGUgZWxpbWluYXRpb24gaW5cbiAgICAgICAgLy8gcHJvZHVjdGlvbiBidW5kbGVzLlxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgIChkZXZCdWlsZFByb21pc2UgfHwgUHJvbWlzZS5yZXNvbHZlKCkpLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIG1zKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBtcylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSB7XG4gICAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XG4gICAgfVxuICAgIGNvbnN0IG9uQnVpbGRNYW5pZmVzdCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCO1xuICAgICAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKT0+e1xuICAgICAgICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO1xuICAgICAgICAgICAgY2IgJiYgY2IoKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChvbkJ1aWxkTWFuaWZlc3QsIE1TX01BWF9JRExFX0RFTEFZLCBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKSk7XG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgICAgICAgICBhc3NldFByZWZpeCArICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgKyBlbmNvZGVVUkkoKDAsIF9nZXRBc3NldFBhdGhGcm9tUm91dGUpLmRlZmF1bHQocm91dGUsICcuanMnKSksIFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgICAgICAgIGNzczogW11cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpPT57XG4gICAgICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoKGVudHJ5KT0+YXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuanMnKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KT0+di5lbmRzV2l0aCgnLmNzcycpXG4gICAgICAgICAgICApXG4gICAgICAgIH07XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeCkge1xuICAgIGNvbnN0IGVudHJ5cG9pbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IGxvYWRlZFNjcmlwdHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgc3R5bGVTaGVldHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgcm91dGVzID0gbmV3IE1hcCgpO1xuICAgIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmMpIHtcbiAgICAgICAgbGV0IHByb20gPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpO1xuICAgICAgICBpZiAocHJvbSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb207XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGxvYWRlZFNjcmlwdHMuc2V0KHNyYywgcHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKTtcbiAgICAgICAgcmV0dXJuIHByb207XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmKSB7XG4gICAgICAgIGxldCBwcm9tID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpO1xuICAgICAgICBpZiAocHJvbSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb207XG4gICAgICAgIH1cbiAgICAgICAgc3R5bGVTaGVldHMuc2V0KGhyZWYsIHByb20gPSBmZXRjaChocmVmKS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCk9Pih7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IGhyZWYsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRleHRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycik7XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHByb207XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHdoZW5FbnRyeXBvaW50IChyb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FbnRyeXBvaW50IChyb3V0ZSwgZXhlY3V0ZSkge1xuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpLnRoZW4oKGZuKT0+Zm4oKVxuICAgICAgICAgICAgKS50aGVuKChleHBvcnRzKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBleHBvcnRzICYmIGV4cG9ydHMuZGVmYXVsdCB8fCBleHBvcnRzLFxuICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICwgKGVycik9Pih7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKS50aGVuKChpbnB1dCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpO1xuICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLnNldChyb3V0ZSwgaW5wdXQpO1xuICAgICAgICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRSb3V0ZSAocm91dGUsIHByZWZldGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgcm91dGVzLCAoKT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlRmlsZXNQcm9taXNlID0gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpLnRoZW4oKHsgc2NyaXB0cyAsIGNzcyAgfSk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSkgPyBbXSA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSwgXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oKGVudHJ5cG9pbnQpPT4oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5cG9pbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiByZXNbMV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGRldkJ1aWxkUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdXRlRmlsZXNQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlRmlsZXNQcm9taXNlLmZpbmFsbHkoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocm91dGVGaWxlc1Byb21pc2UsIE1TX01BWF9JRExFX0RFTEFZLCBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSkpLnRoZW4oKHsgZW50cnlwb2ludCAsIHN0eWxlcyAgfSk9PntcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHN0eWxlc1xuICAgICAgICAgICAgICAgICAgICB9LCBlbnRyeXBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXM7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZWZldGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHByZWZldGNoIChyb3V0ZSkge1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuICAgICAgICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxuICAgICAgICAgICAgbGV0IGNuO1xuICAgICAgICAgICAgaWYgKGNuID0gbmF2aWdhdG9yLmNvbm5lY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpLnRoZW4oKG91dHB1dCk9PlByb21pc2UuYWxsKGNhblByZWZldGNoID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpPT5wcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKVxuICAgICAgICAgICAgICAgICkgOiBbXSlcbiAgICAgICAgICAgICkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+dGhpcy5sb2FkUm91dGUocm91dGUsIHRydWUpLmNhdGNoKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4gICAgICAgICAgICAoKT0+e1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1sb2FkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJSb3V0ZXJcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9yb3V0ZXIuZGVmYXVsdDtcbiAgICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIndpdGhSb3V0ZXJcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF93aXRoUm91dGVyLmRlZmF1bHQ7XG4gICAgfVxufSk7XG5leHBvcnRzLnVzZVJvdXRlciA9IHVzZVJvdXRlcjtcbmV4cG9ydHMuY3JlYXRlUm91dGVyID0gY3JlYXRlUm91dGVyO1xuZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2UgPSBtYWtlUHVibGljUm91dGVySW5zdGFuY2U7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIikpO1xudmFyIF9yb3V0ZXJDb250ZXh0ID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHRcIik7XG52YXIgX3dpdGhSb3V0ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IHNpbmdsZXRvblJvdXRlciA9IHtcbiAgICByb3V0ZXI6IG51bGwsXG4gICAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICAgIHJlYWR5IChjYikge1xuICAgICAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICAgJ3BhdGhuYW1lJyxcbiAgICAncm91dGUnLFxuICAgICdxdWVyeScsXG4gICAgJ2FzUGF0aCcsXG4gICAgJ2NvbXBvbmVudHMnLFxuICAgICdpc0ZhbGxiYWNrJyxcbiAgICAnYmFzZVBhdGgnLFxuICAgICdsb2NhbGUnLFxuICAgICdsb2NhbGVzJyxcbiAgICAnZGVmYXVsdExvY2FsZScsXG4gICAgJ2lzUmVhZHknLFxuICAgICdpc1ByZXZpZXcnLFxuICAgICdpc0xvY2FsZURvbWFpbicsXG4gICAgJ2RvbWFpbkxvY2FsZXMnLCBcbl07XG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAgICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAgICdoYXNoQ2hhbmdlQ29tcGxldGUnLCBcbl07XG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAgICdwdXNoJyxcbiAgICAncmVwbGFjZScsXG4gICAgJ3JlbG9hZCcsXG4gICAgJ2JhY2snLFxuICAgICdwcmVmZXRjaCcsXG4gICAgJ2JlZm9yZVBvcFN0YXRlJywgXG5dO1xuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgICBnZXQgKCkge1xuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0LmV2ZW50cztcbiAgICB9XG59KTtcbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm5cbiAgICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgICAgIGdldCAoKSB7XG4gICAgICAgICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKTtcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgc2luZ2xldG9uUm91dGVyW2ZpZWxkXSA9ICguLi5hcmdzKT0+e1xuICAgICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKTtcbiAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncyk7XG4gICAgfTtcbn0pO1xucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KT0+e1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e1xuICAgICAgICBfcm91dGVyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncyk9PntcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKDEpfWA7XG4gICAgICAgICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyO1xuICAgICAgICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbmZ1bmN0aW9uIGdldFJvdXRlcigpIHtcbiAgICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9ICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBvbiB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJztcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjtcbn1cbnZhciBfZGVmYXVsdCA9IHNpbmdsZXRvblJvdXRlcjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuZnVuY3Rpb24gdXNlUm91dGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO1xufVxuZnVuY3Rpb24gY3JlYXRlUm91dGVyKC4uLmFyZ3MpIHtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IF9yb3V0ZXIuZGVmYXVsdCguLi5hcmdzKTtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpPT5jYigpXG4gICAgKTtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXTtcbiAgICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjtcbn1cbmZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpIHtcbiAgICBjb25zdCBfcm91dGVyMSA9IHJvdXRlcjtcbiAgICBjb25zdCBpbnN0YW5jZSA9IHtcbiAgICB9O1xuICAgIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe1xuICAgICAgICBpZiAodHlwZW9mIF9yb3V0ZXIxW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oQXJyYXkuaXNBcnJheShfcm91dGVyMVtwcm9wZXJ0eV0pID8gW10gOiB7XG4gICAgICAgICAgICB9LCBfcm91dGVyMVtwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyMVtwcm9wZXJ0eV07XG4gICAgfVxuICAgIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgICBpbnN0YW5jZS5ldmVudHMgPSBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzKT0+e1xuICAgICAgICAgICAgcmV0dXJuIF9yb3V0ZXIxW2ZpZWxkXSguLi5hcmdzKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudXNlSW50ZXJzZWN0aW9uID0gdXNlSW50ZXJzZWN0aW9uO1xudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJztcbmZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbih7IHJvb3RNYXJnaW4gLCBkaXNhYmxlZCAgfSkge1xuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7XG4gICAgY29uc3QgdW5vYnNlcnZlID0gKDAsIF9yZWFjdCkudXNlUmVmKCk7XG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gKDAsIF9yZWFjdCkudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHNldFJlZiA9ICgwLCBfcmVhY3QpLnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpO1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuO1xuICAgICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKGVsLCAoaXNWaXNpYmxlKT0+aXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKVxuICAgICAgICAgICAgLCB7XG4gICAgICAgICAgICAgICAgcm9vdE1hcmdpblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGlzRGlzYWJsZWQsXG4gICAgICAgIHJvb3RNYXJnaW4sXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICAoMCwgX3JlYWN0KS51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRWaXNpYmxlKHRydWUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCk9PigwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykuY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICByZXR1cm4gW1xuICAgICAgICBzZXRSZWYsXG4gICAgICAgIHZpc2libGVcbiAgICBdO1xufVxuZnVuY3Rpb24gb2JzZXJ2ZShlbGVtZW50LCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgIGNvbnN0IHsgaWQgLCBvYnNlcnZlciAsIGVsZW1lbnRzICB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7XG4gICAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKSB7XG4gICAgICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpO1xuICAgICAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKSB7XG4gICAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJyc7XG4gICAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZCk7XG4gICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG4gICAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpPT57XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpPT57XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIG9wdGlvbnMpO1xuICAgIG9ic2VydmVycy5zZXQoaWQsIGluc3RhbmNlID0ge1xuICAgICAgICBpZCxcbiAgICAgICAgb2JzZXJ2ZXIsXG4gICAgICAgIGVsZW1lbnRzXG4gICAgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gd2l0aFJvdXRlcjtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IHJlcXVpcmUoXCIuL3JvdXRlclwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpIHtcbiAgICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcykge1xuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHJvdXRlcjogKDAsIF9yb3V0ZXIpLnVzZVJvdXRlcigpXG4gICAgICAgIH0sIHByb3BzKSkpO1xuICAgIH1cbiAgICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgV2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xuICAgICAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYDtcbiAgICB9XG4gICAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoLXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0RG9tYWluTG9jYWxlID0gZ2V0RG9tYWluTG9jYWxlO1xuZXhwb3J0cy5hZGRMb2NhbGUgPSBhZGRMb2NhbGU7XG5leHBvcnRzLmRlbExvY2FsZSA9IGRlbExvY2FsZTtcbmV4cG9ydHMuaGFzQmFzZVBhdGggPSBoYXNCYXNlUGF0aDtcbmV4cG9ydHMuYWRkQmFzZVBhdGggPSBhZGRCYXNlUGF0aDtcbmV4cG9ydHMuZGVsQmFzZVBhdGggPSBkZWxCYXNlUGF0aDtcbmV4cG9ydHMuaXNMb2NhbFVSTCA9IGlzTG9jYWxVUkw7XG5leHBvcnRzLmludGVycG9sYXRlQXMgPSBpbnRlcnBvbGF0ZUFzO1xuZXhwb3J0cy5yZXNvbHZlSHJlZiA9IHJlc29sdmVIcmVmO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoID0gcmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7XG52YXIgX3JvdXRlTG9hZGVyID0gcmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXJcIik7XG52YXIgX2Rlbm9ybWFsaXplUGFnZVBhdGggPSByZXF1aXJlKFwiLi4vLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTtcbnZhciBfbm9ybWFsaXplTG9jYWxlUGF0aCA9IHJlcXVpcmUoXCIuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aFwiKTtcbnZhciBfbWl0dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO1xudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbnZhciBfaXNEeW5hbWljID0gcmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTtcbnZhciBfcGFyc2VSZWxhdGl2ZVVybCA9IHJlcXVpcmUoXCIuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybFwiKTtcbnZhciBfcXVlcnlzdHJpbmcgPSByZXF1aXJlKFwiLi91dGlscy9xdWVyeXN0cmluZ1wiKTtcbnZhciBfcmVzb2x2ZVJld3JpdGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9yZXNvbHZlLXJld3JpdGVzXCIpKTtcbnZhciBfcm91dGVNYXRjaGVyID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTtcbnZhciBfcm91dGVSZWdleCA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxubGV0IGRldGVjdERvbWFpbkxvY2FsZTtcbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZTtcbn1cbmNvbnN0IGJhc2VQYXRoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCB8fCAnJztcbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgICAgICBjYW5jZWxsZWQ6IHRydWVcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCwgcHJlZml4KSB7XG4gICAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKSA/IHBhdGggPT09ICcvJyA/ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KSA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWAgOiBwYXRoO1xufVxuZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKHBhdGgsIGxvY2FsZSwgbG9jYWxlcywgZG9tYWluTG9jYWxlcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGxvY2FsZSA9IGxvY2FsZSB8fCAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGU7XG4gICAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKTtcbiAgICAgICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICAgICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2Jhc2VQYXRoIHx8ICcnfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBhZGRMb2NhbGUocGF0aCwgbG9jYWxlLCBkZWZhdWx0TG9jYWxlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpICYmIHBhdGhMb3dlciAhPT0gJy8nICsgbG9jYWxlTG93ZXIgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSkgOiBwYXRoO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLCBsb2NhbGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSB8fCBwYXRoTG93ZXIgPT09ICcvJyArIGxvY2FsZUxvd2VyKSA/IChwYXRobmFtZS5sZW5ndGggPT09IGxvY2FsZS5sZW5ndGggKyAxID8gJy8nIDogJycpICsgcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIDogcGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCkge1xuICAgIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKTtcbiAgICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKTtcbiAgICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoKSB7XG4gICAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKTtcbn1cbmZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpIHtcbiAgICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICAgIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKTtcbn1cbmZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpO1xuICAgIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gO1xuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmwpIHtcbiAgICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gICAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSB8fCB1cmwuc3RhcnRzV2l0aCgnPycpKSByZXR1cm4gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICAgICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgICAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbik7XG4gICAgICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSkge1xuICAgIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnO1xuICAgIGNvbnN0IGR5bmFtaWNSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHM7XG4gICAgY29uc3QgZHluYW1pY01hdGNoZXMgPSAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8IC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeTtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlO1xuICAgIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpO1xuICAgIGlmICghcGFyYW1zLmV2ZXJ5KChwYXJhbSk9PntcbiAgICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnO1xuICAgICAgICBjb25zdCB7IHJlcGVhdCAsIG9wdGlvbmFsICB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV07XG4gICAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWA7XG4gICAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICBdO1xuICAgICAgICByZXR1cm4gKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJiAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID0gaW50ZXJwb2xhdGVkUm91dGUucmVwbGFjZShyZXBsYWNlZCwgcmVwZWF0ID8gdmFsdWUubWFwKC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgKHNlZ21lbnQpPT5lbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgKS5qb2luKCcvJykgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKSB8fCAnLycpO1xuICAgIH0pKSB7XG4gICAgICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcbiAgICAgICAgO1xuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGFyYW1zLFxuICAgICAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlXG4gICAgfTtcbn1cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSB7XG4gICAgY29uc3QgZmlsdGVyZWRRdWVyeSA9IHtcbiAgICB9O1xuICAgIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV07XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZmlsdGVyZWRRdWVyeTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVIcmVmKHJvdXRlciwgaHJlZiwgcmVzb2x2ZUFzKSB7XG4gICAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgICBsZXQgYmFzZTtcbiAgICBsZXQgdXJsQXNTdHJpbmcgPSB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZik7XG4gICAgLy8gcmVwZWF0ZWQgc2xhc2hlcyBhbmQgYmFja3NsYXNoZXMgaW4gdGhlIFVSTCBhcmUgY29uc2lkZXJlZFxuICAgIC8vIGludmFsaWQgYW5kIHdpbGwgbmV2ZXIgbWF0Y2ggYSBOZXh0LmpzIHBhZ2UvZmlsZVxuICAgIGNvbnN0IHVybFByb3RvTWF0Y2ggPSB1cmxBc1N0cmluZy5tYXRjaCgvXlthLXpBLVpdezEsfTpcXC9cXC8vKTtcbiAgICBjb25zdCB1cmxBc1N0cmluZ05vUHJvdG8gPSB1cmxQcm90b01hdGNoID8gdXJsQXNTdHJpbmcuc3Vic3RyKHVybFByb3RvTWF0Y2hbMF0ubGVuZ3RoKSA6IHVybEFzU3RyaW5nO1xuICAgIGNvbnN0IHVybFBhcnRzID0gdXJsQXNTdHJpbmdOb1Byb3RvLnNwbGl0KCc/Jyk7XG4gICAgaWYgKCh1cmxQYXJ0c1swXSB8fCAnJykubWF0Y2goLyhcXC9cXC98XFxcXCkvKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIG5leHQvcm91dGVyOiAke3VybEFzU3RyaW5nfSwgcmVwZWF0ZWQgZm9yd2FyZC1zbGFzaGVzICgvLykgb3IgYmFja3NsYXNoZXMgXFxcXCBhcmUgbm90IHZhbGlkIGluIHRoZSBocmVmYCk7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRVcmwgPSAoMCwgX3V0aWxzKS5ub3JtYWxpemVSZXBlYXRlZFNsYXNoZXModXJsQXNTdHJpbmdOb1Byb3RvKTtcbiAgICAgICAgdXJsQXNTdHJpbmcgPSAodXJsUHJvdG9NYXRjaCA/IHVybFByb3RvTWF0Y2hbMF0gOiAnJykgKyBub3JtYWxpemVkVXJsO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICAgIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgYmFzZSA9IG5ldyBVUkwodXJsQXNTdHJpbmcuc3RhcnRzV2l0aCgnIycpID8gcm91dGVyLmFzUGF0aCA6IHJvdXRlci5wYXRobmFtZSwgJ2h0dHA6Ly9uJyk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICAvLyBmYWxsYmFjayB0byAvIGZvciBpbnZhbGlkIGFzUGF0aCB2YWx1ZXMgZS5nLiAvL1xuICAgICAgICBiYXNlID0gbmV3IFVSTCgnLycsICdodHRwOi8vbicpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpO1xuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpO1xuICAgICAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJztcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiYgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmIHJlc29sdmVBcykge1xuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSAoMCwgX3F1ZXJ5c3RyaW5nKS5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7XG4gICAgICAgICAgICBjb25zdCB7IHJlc3VsdCAsIHBhcmFtcyAgfSA9IGludGVycG9sYXRlQXMoZmluYWxVcmwucGF0aG5hbWUsIGZpbmFsVXJsLnBhdGhuYW1lLCBxdWVyeSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKSA6IGZpbmFsVXJsLmhyZWY7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICByZXNvbHZlZEhyZWYsXG4gICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZcbiAgICAgICAgXSA6IHJlc29sdmVkSHJlZjtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICB1cmxBc1N0cmluZ1xuICAgICAgICBdIDogdXJsQXNTdHJpbmc7XG4gICAgfVxufVxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsKSB7XG4gICAgY29uc3Qgb3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKSA/IHVybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCkgOiB1cmw7XG59XG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyLCB1cmwsIGFzKSB7XG4gICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICBsZXQgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIsIHVybCwgdHJ1ZSk7XG4gICAgY29uc3Qgb3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKTtcbiAgICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7XG4gICAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKTtcbiAgICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBcztcbiAgICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpO1xuICAgIGNvbnN0IHByZXBhcmVkQXMgPSBhcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlciwgYXMpKSA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKVxuICAgIH07XG59XG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLCBwYWdlcykge1xuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKCgwLCBfZGVub3JtYWxpemVQYWdlUGF0aCkuZGVub3JtYWxpemVQYWdlUGF0aChwYXRobmFtZSkpO1xuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICAgIHJldHVybiBwYXRobmFtZTtcbiAgICB9XG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSkpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgICBwYWdlcy5zb21lKChwYWdlKT0+e1xuICAgICAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYWdlKSAmJiAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lID0gcGFnZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKTtcbn1cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID0gcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmICEhZnVuY3Rpb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHYgPSAnX19uZXh0JztcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZTtcbiAgICB9IGNhdGNoIChuKSB7XG4gICAgfVxufSgpO1xuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EID0gU3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKTtcbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cykge1xuICAgIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICB9KS50aGVuKChyZXMpPT57XG4gICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkRcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlcikge1xuICAgIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgICAgLy8gbG9vcC5cbiAgICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICAgICAgKDAsIF9yb3V0ZUxvYWRlcikubWFya0Fzc2V0RXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG59XG5jbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhdGhuYW1lMSwgcXVlcnkxLCBhczEsIHsgaW5pdGlhbFByb3BzICwgcGFnZUxvYWRlciAsIEFwcCAsIHdyYXBBcHAgLCBDb21wb25lbnQ6IENvbXBvbmVudDEgLCBlcnI6IGVycjEgLCBzdWJzY3JpcHRpb24gLCBpc0ZhbGxiYWNrICwgbG9jYWxlICwgbG9jYWxlcyAsIGRlZmF1bHRMb2NhbGUgLCBkb21haW5Mb2NhbGVzICwgaXNQcmV2aWV3ICB9KXtcbiAgICAgICAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgICAgICAgdGhpcy5zZGMgPSB7XG4gICAgICAgIH07XG4gICAgICAgIC8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG4gICAgICAgIHRoaXMuc2RyID0ge1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9pZHggPSAwO1xuICAgICAgICB0aGlzLm9uUG9wU3RhdGUgPSAoZSk9PntcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZTtcbiAgICAgICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgICAgICAgICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgICAgICAgICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgICAgICAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgICAgICAgICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgICAgICAgICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICwgcXVlcnk6IHF1ZXJ5MSAgfSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUxKSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5MVxuICAgICAgICAgICAgICAgIH0pLCAoMCwgX3V0aWxzKS5nZXRVUkwoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZm9yY2VkU2Nyb2xsO1xuICAgICAgICAgICAgY29uc3QgeyB1cmwgLCBhczogYXMxICwgb3B0aW9ucyAsIGlkeCAgfSA9IHN0YXRlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNlbGYucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2Uodik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2lkeCA9IGlkeDtcbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAgfSA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgICAgICAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU3NyICYmIGFzMSA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUxID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgICAgICAgICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhczEsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgfSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICAgICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICB9KSwgZm9yY2VkU2Nyb2xsKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgICAgIHRoaXMucm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMSk7XG4gICAgICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB7XG4gICAgICAgIH07XG4gICAgICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAgICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgICAgICBpZiAocGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IENvbXBvbmVudDEsXG4gICAgICAgICAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICAgICAgICAgIGVycjogZXJyMSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgICAgICAgIENvbXBvbmVudDogQXBwLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IFtdXG4gICAgICAgIH07XG4gICAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50cztcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlcjtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lMTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5MTtcbiAgICAgICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAgICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICAgICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPSAoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocGF0aG5hbWUxKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydDtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lMSA6IGFzMTtcbiAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xuICAgICAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcDtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgICAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICB0aGlzLmlzU3NyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFjaztcbiAgICAgICAgdGhpcy5pc1JlYWR5ID0gISEoc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHwgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uYXBwR2lwICYmICFzZWxmLl9fTkVYVF9EQVRBX18uZ3NwIHx8ICFhdXRvRXhwb3J0RHluYW1pYyAmJiAhc2VsZi5sb2NhdGlvbi5zZWFyY2ggJiYgIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpO1xuICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhaXNQcmV2aWV3O1xuICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2U7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXM7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlO1xuICAgICAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlcztcbiAgICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAgICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgICAgICAgaWYgKGFzMS5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWYgPSBhczEgIT09IHBhdGhuYW1lMTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnkxXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG4gICAgICAgICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZWxvYWQoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi8gYmFjaygpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cbiAgICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovIHB1c2godXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcbiAgICAgICAgICAgIC8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG4gICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBzZWxmLnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAoeyB1cmwgLCBhcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi8gcmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgKHsgdXJsICwgYXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBhc3luYyBjaGFuZ2UobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zLCBmb3JjZWRTY3JvbGwpIHtcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNob3VsZFJlc29sdmVIcmVmID0gdXJsID09PSBhcyB8fCBvcHRpb25zLl9oIHx8IG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmO1xuICAgICAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAgICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgICAgIGlmIChvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByZXZMb2NhbGUgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlID8gdGhpcy5kZWZhdWx0TG9jYWxlIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGU7XG4gICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgYXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlZjtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgICAgICAgICAgaWYgKCEoKHJlZiA9IHRoaXMubG9jYWxlcykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYuaW5jbHVkZXModGhpcy5sb2NhbGUpKSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAgICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgICAgICAgICAgaWYgKCFkaWROYXZpZ2F0ZSAmJiBkZXRlY3RlZERvbWFpbiAmJiB0aGlzLmlzTG9jYWxlRG9tYWluICYmIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpbikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcyk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2FkZEJhc2VQYXRoKGAke3RoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7dGhpcy5sb2NhbGV9YH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLycpfWA7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICAgIGlmIChfdXRpbHMuU1QpIHtcbiAgICAgICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBzaGFsbG93ID1mYWxzZSAgfSA9IG9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7XG4gICAgICAgICAgICBzaGFsbG93XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICAgICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICBhcyA9IGFkZEJhc2VQYXRoKGFkZExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgb3B0aW9ucy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSkpO1xuICAgICAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzO1xuICAgICAgICBsZXQgbG9jYWxlQ2hhbmdlID0gcHJldkxvY2FsZSAhPT0gdGhpcy5sb2NhbGU7XG4gICAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbiAgICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBcztcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcyk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGFyc2VkID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgIGxldCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgLCBxdWVyeTogcXVlcnkxICB9ID0gcGFyc2VkO1xuICAgICAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgICAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgICAgICBsZXQgcGFnZXMsIHJld3JpdGVzO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xuICAgICAgICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAgICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSc7XG4gICAgICAgIH1cbiAgICAgICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAgICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgICAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzO1xuICAgICAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAgICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICAgICAgcGF0aG5hbWUxID0gcGF0aG5hbWUxID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZTEpKSA6IHBhdGhuYW1lMTtcbiAgICAgICAgaWYgKHNob3VsZFJlc29sdmVIcmVmICYmIHBhdGhuYW1lMSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IHRydWU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9ICgwLCBfcmVzb2x2ZVJld3JpdGVzKS5kZWZhdWx0KGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsIHRoaXMubG9jYWxlKSksIHBhZ2VzLCByZXdyaXRlcywgcXVlcnkxLCAocCk9PnJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpXG4gICAgICAgICAgICAgICAgLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGg7XG4gICAgICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lMSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGF0aG5hbWUxKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUxLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUxKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lMSA9IHBhcnNlZC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGF0aG5hbWUxKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMSk7XG4gICAgICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKTtcbiAgICAgICAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9ICgwLCBfcm91dGVNYXRjaGVyKS5nZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSk7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lO1xuICAgICAgICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZSA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5MSkgOiB7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcigocGFyYW0pPT4hcXVlcnkxW3BhcmFtXVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke3Nob3VsZEludGVycG9sYXRlID8gYEludGVycG9sYXRpbmcgaHJlZmAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICsgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKChzaG91bGRJbnRlcnBvbGF0ZSA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArIGBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7c2hvdWxkSW50ZXJwb2xhdGUgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCcgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgIH0sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkxLCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMpXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnkxLCByb3V0ZU1hdGNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgcmVmLCByZWYxO1xuICAgICAgICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgbGV0IHsgZXJyb3IgLCBwcm9wcyAsIF9fTl9TU0cgLCBfX05fU1NQICB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICAgICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMucGFnZVByb3BzICYmIHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSBwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUO1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgICAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgICAgICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkSHJlZi5wYXRobmFtZSwgcGFnZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCAsIGFzOiBuZXdBcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCBkZXN0aW5hdGlvbiwgZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhcHJvcHMuX19OX1BSRVZJRVc7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0JztcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhub3RGb3VuZFJvdXRlLCBub3RGb3VuZFJvdXRlLCBxdWVyeTEsIGFzLCByZXNvbHZlZEFzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFsbG93OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFwcENvbXAgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O1xuICAgICAgICAgICAgICAgIHdpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQgPSBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmICFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLl9oICYmIHBhdGhuYW1lMSA9PT0gJy9fZXJyb3InICYmICgocmVmID0gc2VsZi5fX05FWFRfREFUQV9fLnByb3BzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChyZWYxID0gcmVmLnBhZ2VQcm9wcykgPT09IG51bGwgfHwgcmVmMSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmMS5zdGF0dXNDb2RlKSA9PT0gNTAwICYmIChwcm9wcyA9PT0gbnVsbCB8fCBwcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvcHMucGFnZVByb3BzKSkge1xuICAgICAgICAgICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAgICAgICAgIC8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICBwcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZSA9IDUwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbiAgICAgICAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGU7XG4gICAgICAgICAgICB2YXIgX3Njcm9sbDtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZFNjcm9sbCA9IChfc2Nyb2xsID0gb3B0aW9ucy5zY3JvbGwpICE9PSBudWxsICYmIF9zY3JvbGwgIT09IHZvaWQgMCA/IF9zY3JvbGwgOiAhaXNWYWxpZFNoYWxsb3dSb3V0ZTtcbiAgICAgICAgICAgIGNvbnN0IHJlc2V0U2Nyb2xsID0gc2hvdWxkU2Nyb2xsID8ge1xuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgfSA6IG51bGw7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUxLCBxdWVyeTEsIGNsZWFuZWRBcywgcm91dGVJbmZvLCBmb3JjZWRTY3JvbGwgIT09IG51bGwgJiYgZm9yY2VkU2Nyb2xsICE9PSB2b2lkIDAgPyBmb3JjZWRTY3JvbGwgOiByZXNldFNjcm9sbCkuY2F0Y2goKGUpPT57XG4gICAgICAgICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGU7XG4gICAgICAgICAgICAgICAgZWxzZSB0aHJvdyBlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycjEpIHtcbiAgICAgICAgICAgIGlmIChlcnIxLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycjE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgKDAsIF91dGlscykuZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICAgICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93O1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDFcbiAgICAgICAgICAgIH0sIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICAgICAnJywgYXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcywgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKDAsIF9yb3V0ZUxvYWRlcikuaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcbiAgICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IENvbXBvbmVudDE7XG4gICAgICAgICAgICBsZXQgc3R5bGVTaGVldHM7XG4gICAgICAgICAgICBsZXQgcHJvcHM7XG4gICAgICAgICAgICBpZiAodHlwZW9mIENvbXBvbmVudDEgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBzdHlsZVNoZWV0cyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAoeyBwYWdlOiBDb21wb25lbnQxICwgc3R5bGVTaGVldHMgIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0ge1xuICAgICAgICAgICAgICAgIHByb3BzLFxuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBnZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJlc29sdmVkQXMsIHJvdXRlUHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm8gPyB1bmRlZmluZWQgOiBleGlzdGluZ1JvdXRlSW5mbztcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mbyA/IGNhY2hlZFJvdXRlSW5mbyA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcyk9Pih7XG4gICAgICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQ29tcG9uZW50MSAsIF9fTl9TU0cgLCBfX05fU1NQICB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSAgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50MSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkYXRhSHJlZjtcbiAgICAgICAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZigoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVxuICAgICAgICAgICAgICAgIH0pLCByZXNvbHZlZEFzLCBfX05fU1NHLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGEoKCk9Pl9fTl9TU0cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSA6IF9fTl9TU1AgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudDEsIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZXM6IHRoaXMubG9jYWxlcyxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdExvY2FsZTogdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICB9IGNhdGNoIChlcnIyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIGRhdGEsIHJlc2V0U2Nyb2xsKSB7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpO1xuICAgIH1cbiAgICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovIGJlZm9yZVBvcFN0YXRlKGNiKSB7XG4gICAgICAgIHRoaXMuX2JwcyA9IGNiO1xuICAgIH1cbiAgICBvbmx5QUhhc2hDaGFuZ2UoYXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7XG4gICAgICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgICAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoO1xuICAgIH1cbiAgICBzY3JvbGxUb0hhc2goYXMpIHtcbiAgICAgICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgICAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7XG4gICAgICAgIGlmIChpZEVsKSB7XG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtcbiAgICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXJsSXNOZXcoYXNQYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqLyBhc3luYyBwcmVmZXRjaCh1cmwsIGFzUGF0aCA9IHVybCwgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMiAgfSA9IHBhcnNlZDtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aG5hbWUyLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIGxldCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICAgICAgYXNQYXRoID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7XG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBsZXQgcmV3cml0ZXM7XG4gICAgICAgICAgICAoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyAgfSA9IGF3YWl0ICgwLCBfcm91dGVMb2FkZXIpLmdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSk7XG4gICAgICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9ICgwLCBfcmVzb2x2ZVJld3JpdGVzKS5kZWZhdWx0KGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsIHRoaXMubG9jYWxlKSksIHBhZ2VzLCByZXdyaXRlcywgcGFyc2VkLnF1ZXJ5LCAocCk9PnJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpXG4gICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSwgcGFnZXMpO1xuICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUyKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gcGFyc2VkLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTIpO1xuICAgICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbigoaXNTc2cpPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzU3NnID8gdGhpcy5fZ2V0U3RhdGljRGF0YSh0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYodXJsLCByZXNvbHZlZEFzLCB0cnVlLCB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5sb2NhbGUgOiB0aGlzLmxvY2FsZSkpIDogZmFsc2U7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSwgXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSkge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IHRoaXMuY2xjID0gKCk9PntcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7XG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtcbiAgICAgICAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZXN1bHQ7XG4gICAgfVxuICAgIF9nZXREYXRhKGZuKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCk9PntcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2xjID0gY2FuY2VsO1xuICAgICAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyMiA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO1xuICAgICAgICAgICAgICAgIGVycjIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnIyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZikge1xuICAgICAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5ICB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiAhdGhpcy5pc1ByZXZpZXcgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZikge1xuICAgICAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5ICB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZiAodGhpcy5zZHJbcmVzb3VyY2VLZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV0gPSBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KS5jYXRjaCgoZXJyMik9PntcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgICAgICB0aHJvdyBlcnIyO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAxICB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddO1xuICAgICAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAxKTtcbiAgICAgICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlO1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscykubG9hZEdldEluaXRpYWxQcm9wcyhBcHAxLCB7XG4gICAgICAgICAgICBBcHBUcmVlLFxuICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgICAgICAgY3R4XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhYm9ydENvbXBvbmVudExvYWQoYXMsIHJvdXRlUHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuY2xjKCk7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50LCByZXNldFNjcm9sbCk7XG4gICAgfVxufVxuUm91dGVyLmV2ZW50cyA9ICgwLCBfbWl0dCkuZGVmYXVsdCgpO1xuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGVyO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXV0aFdyYXBwZXIgZnJvbSBcIi4uL2hlbHBlci9hdXRoV3JhcHBlclwiO1xyXG5pbXBvcnQgRnVuZFJpc2VyRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9GdW5kUmlzZXJGb3JtXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBGdW5kUmlzZXJDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0Z1bmRSaXNlckNhcmRcIjtcclxuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2FkZXJcIjtcclxuXHJcbmNvbnN0IERhc2hib2FyZCA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgcHJvamVjdHNMaXN0ID0gdXNlU2VsZWN0b3Ioc3RhdGU9PnN0YXRlLnByb2plY3RSZWR1Y2VyLnByb2plY3RzKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJweC0yIHB5LTQgZmxleCBmbGV4LWNvbCBsZzpweC0xMiBsZzpmbGV4LXJvdyBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzp3LTcvMTIgbXktMiBsZzpteS0wIGxnOm14LTJcIj5cclxuICAgICAgICB7cHJvamVjdHNMaXN0ICE9PSB1bmRlZmluZWQ/XHJcbiAgICAgICAgICBwcm9qZWN0c0xpc3QubGVuZ3RoID4gMCA/XHJcbiAgICAgICAgICAgIHByb2plY3RzTGlzdC5tYXAoKGRhdGEsIGkpID0+IChcclxuICAgICAgICAgICAgICA8RnVuZFJpc2VyQ2FyZCBwcm9wcz17ZGF0YX0ga2V5PXtpfS8+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICA6XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtZ3JheS01MDAgdGV4dC1jZW50ZXIgZm9udC1zYW5zXCI+Tm8gcHJvamVjdCBmb3VuZCAhPC9oMT5cclxuICAgICAgICA6XHJcbiAgICAgICAgPExvYWRlci8+XHJcbiAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBsZzp3LTUvMTIgaC1maXQgbXktNFwiPlxyXG4gICAgICAgICAgPEZ1bmRSaXNlckZvcm0vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhdXRoV3JhcHBlcihEYXNoYm9hcmQpO1xyXG4iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tIFwiLi90eXBlc1wiXHJcblxyXG4vLyBXZWIzIGFjdGlvbnNcclxuXHJcbmV4cG9ydCBjb25zdCB3ZWIzTG9hZGVkID0gKHdlYjMpID0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6dHlwZXMuV0VCM19MT0FERUQsXHJcbiAgICAgICAgcGF5bG9hZDp3ZWIzXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB3YWxsZXRBZGRyZXNzTG9hZGVkID0gKGFkZHJlc3MpID0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6dHlwZXMuV0FMTEVUX0FERFJFU1NfTE9BREVELFxyXG4gICAgICAgIHBheWxvYWQ6YWRkcmVzc1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBDcm93ZCBmdW5kaW5nIGFjdGlvbnNcclxuXHJcbmV4cG9ydCBjb25zdCBjcm93ZEZ1bmRpbmdDb250cmFjdExvYWRlZCA9IChjb250cmFjdCkgPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTp0eXBlcy5DUk9XRF9GVU5ESU5HX0NPTlRSQUNUX0xPQURFRCxcclxuICAgICAgICBwYXlsb2FkOmNvbnRyYWN0XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFByb2plY3QgYWN0aW9uc1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2plY3RDb250cmFjdHNMb2FkZWQgPSAoY29udHJhY3RzKT0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6dHlwZXMuUFJPSkVDVF9DT05UUkFDVFNfTE9BREVELFxyXG4gICAgICAgIHBheWxvYWQ6Y29udHJhY3RzXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0c0xvYWRlZCA9IChwcm9qZWN0cyk9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOnR5cGVzLlBST0pFQ1RTX0xPQURFRCxcclxuICAgICAgICBwYXlsb2FkOnByb2plY3RzXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBuZXdQcm9qZWN0Q29udHJhY3RzTG9hZGVkID0gKGNvbnRyYWN0KT0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6dHlwZXMuTkVXX1BST0pFQ1RfQ09OVFJBQ1RfTE9BREVELFxyXG4gICAgICAgIHBheWxvYWQ6Y29udHJhY3RcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG5ld1Byb2plY3RzTG9hZGVkID0gKHByb2plY3QpPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTp0eXBlcy5ORVdfUFJPSkVDVF9MT0FERUQsXHJcbiAgICAgICAgcGF5bG9hZDpwcm9qZWN0XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhbW91bnRDb250cmlidXRvciA9IChkYXRhKT0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6dHlwZXMuSU5DUkVBU0VfUFJPR1JFU1MsXHJcbiAgICAgICAgcGF5bG9hZDpkYXRhXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB3aXRoZHJhd0NvbnRyYWN0QmFsYW5jZSA9IChkYXRhKT0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6dHlwZXMuV0lUSERSQVdfQkFMQU5DRSxcclxuICAgICAgICBwYXlsb2FkOmRhdGFcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiO1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gXCIuL2FjdGlvbnNcIjtcclxuaW1wb3J0IENyb3dkRnVuZGluZyBmcm9tICcuLi9hcnRpZmFjdHMvY29udHJhY3RzL0Nyb3dkZnVuZGluZy5zb2wvQ3Jvd2RmdW5kaW5nLmpzb24nXHJcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4uL2FydGlmYWN0cy9jb250cmFjdHMvUHJvamVjdC5zb2wvUHJvamVjdC5qc29uJ1xyXG5pbXBvcnQgeyBncm91cENvbnRyaWJ1dGlvbkJ5UHJvamVjdCwgZ3JvdXBDb250cmlidXRvcnMsIHByb2plY3REYXRhRm9ybWF0dGVyLCB3aXRoZHJhd1JlcXVlc3REYXRhRm9ybWF0dGVyfSBmcm9tIFwiLi4vaGVscGVyL2hlbHBlclwiO1xyXG5cclxuY29uc3QgY3Jvd2RGdW5kaW5nQ29udHJhY3RBZGRyZXNzID0gXCIweDVGYkRCMjMxNTY3OGFmZWNiMzY3ZjAzMmQ5M0Y2NDJmNjQxODBhYTNcIjtcclxuXHJcbi8vTG9hZCB3ZWIzIFxyXG5leHBvcnQgY29uc3QgbG9hZFdlYjMgPSBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICBjb25zdCB3ZWIzID0gbmV3IFdlYjMoV2ViMy5naXZlblByb3ZpZGVyIHx8IFwiaHR0cDovL2xvY2FsaG9zdDo4NTQ1XCIpO1xyXG4gIGRpc3BhdGNoKGFjdGlvbnMud2ViM0xvYWRlZCh3ZWIzKSk7XHJcbiAgcmV0dXJuIHdlYjM7XHJcbn07XHJcblxyXG4vLyBMb2FkIGNvbm5lY3RlZCB3YWxsZXRcclxuZXhwb3J0IGNvbnN0IGxvYWRBY2NvdW50ID0gYXN5bmMgKHdlYjMsIGRpc3BhdGNoKSA9PiB7XHJcbiAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgY29uc3QgbmV0d29yayA9IGF3YWl0IHdlYjMuZXRoLm5ldC5nZXRJZCgpO1xyXG5cclxuLy8gICBpZiAobmV0d29yayAhPT0gTnVtYmVyKHByb2Nlc3MuZW52LlJFQUNUX0FQUF9ORVRXT1JLX0lEKSkge1xyXG4vLyAgICAgYWxlcnQoXCJDb250cmFjdCBub3QgZGVwbG95ZWQgaW4gdGhpcyBuZXR3b3JrICFcIik7XHJcbi8vICAgfVxyXG4gIGRpc3BhdGNoKGFjdGlvbnMud2FsbGV0QWRkcmVzc0xvYWRlZChhY2NvdW50WzBdKSk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJBRERSRVNTXCIsYWNjb3VudFswXSlcclxuICByZXR1cm4gYWNjb3VudDtcclxufTtcclxuXHJcbi8vQ29ubmVjdCB3aXRoIGNyb3dkIGZ1bmRpbmcgY29udHJhY3RcclxuZXhwb3J0IGNvbnN0IGxvYWRDcm93ZEZ1bmRpbmdDb250cmFjdCA9IGFzeW5jKHdlYjMsZGlzcGF0Y2gpID0+e1xyXG4gIGNvbnN0IGNyb3dkRnVuZGluZyA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChDcm93ZEZ1bmRpbmcuYWJpLGNyb3dkRnVuZGluZ0NvbnRyYWN0QWRkcmVzcyk7XHJcbiAgZGlzcGF0Y2goYWN0aW9ucy5jcm93ZEZ1bmRpbmdDb250cmFjdExvYWRlZChjcm93ZEZ1bmRpbmcpKTtcclxuICByZXR1cm4gY3Jvd2RGdW5kaW5nO1xyXG59XHJcblxyXG4vLyBTdGFydCBmdW5kIHJhaXNpbmcgcHJvamVjdFxyXG5leHBvcnQgY29uc3Qgc3RhcnRGdW5kUmFpc2luZyA9IGFzeW5jKHdlYjMsQ3Jvd2RGdW5kaW5nQ29udHJhY3QsZGF0YSxvblN1Y2Nlc3Msb25FcnJvcixkaXNwYXRjaCkgPT57XHJcbiAgY29uc3Qge21pbmltdW1Db250cmlidXRpb24sZGVhZGxpbmUsdGFyZ2V0Q29udHJpYnV0aW9uLHByb2plY3RUaXRsZSxwcm9qZWN0RGVzYyxhY2NvdW50fSA9IGRhdGE7XHJcblxyXG4gIGF3YWl0IENyb3dkRnVuZGluZ0NvbnRyYWN0Lm1ldGhvZHMuY3JlYXRlUHJvamVjdChtaW5pbXVtQ29udHJpYnV0aW9uLGRlYWRsaW5lLHRhcmdldENvbnRyaWJ1dGlvbixwcm9qZWN0VGl0bGUscHJvamVjdERlc2MpLnNlbmQoe2Zyb206YWNjb3VudH0pXHJcbiAgLm9uKCdyZWNlaXB0JywgZnVuY3Rpb24ocmVjZWlwdCl7IFxyXG5cclxuICAgIGNvbnN0IHByb2plY3RzUmVjZWlwdCA9IHJlY2VpcHQuZXZlbnRzLlByb2plY3RTdGFydGVkLnJldHVyblZhbHVlcztcclxuICAgIGNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9IHByb2plY3RzUmVjZWlwdC5wcm9qZWN0Q29udHJhY3RBZGRyZXNzO1xyXG5cclxuICAgIGNvbnN0IGZvcm1hdHRlZFByb2plY3REYXRhID0gcHJvamVjdERhdGFGb3JtYXR0ZXIocHJvamVjdHNSZWNlaXB0LGNvbnRyYWN0QWRkcmVzcylcclxuICAgIHZhciBwcm9qZWN0Q29ubmVjdG9yID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFByb2plY3QuYWJpLGNvbnRyYWN0QWRkcmVzcyk7XHJcblxyXG4gICAgZGlzcGF0Y2goYWN0aW9ucy5uZXdQcm9qZWN0Q29udHJhY3RzTG9hZGVkKHByb2plY3RDb25uZWN0b3IpKTtcclxuICAgIGRpc3BhdGNoKGFjdGlvbnMubmV3UHJvamVjdHNMb2FkZWQoZm9ybWF0dGVkUHJvamVjdERhdGEpKTtcclxuXHJcbiAgICBvblN1Y2Nlc3MoKVxyXG4gIH0pXHJcbiAgLm9uKCdlcnJvcicsIGZ1bmN0aW9uKGVycm9yKXsgXHJcbiAgICBvbkVycm9yKGVycm9yLm1lc3NhZ2UpXHJcbiAgfSlcclxufVxyXG5cclxuLy8gMSAtIEdldCBhbGwgZnVuZGluZyBwcm9qZWN0IGFkZHJlc3NcclxuLy8gMiAtIENvbm5lY3Qgd2l0aCBmdW5kaW5nIHByb2plY3QgY29udHJhY3RcclxuLy8gMyAtIEdldCBwcm9qZWN0IGRldGFpbHMgXHJcbmV4cG9ydCBjb25zdCBnZXRBbGxGdW5kaW5nID0gYXN5bmMoQ3Jvd2RGdW5kaW5nQ29udHJhY3Qsd2ViMyxkaXNwYXRjaCkgPT57XHJcbiAgIFxyXG4gIGNvbnN0IGZ1bmRpbmdQcm9qZWN0TGlzdCA9IGF3YWl0IENyb3dkRnVuZGluZ0NvbnRyYWN0Lm1ldGhvZHMucmV0dXJuQWxsUHJvamVjdHMoKS5jYWxsKClcclxuICBcclxuICAgY29uc3QgcHJvamVjdENvbnRyYWN0cyA9IFtdO1xyXG4gICBjb25zdCBwcm9qZWN0cyA9IFtdO1xyXG5cclxuICAgYXdhaXQgUHJvbWlzZS5hbGwoZnVuZGluZ1Byb2plY3RMaXN0Lm1hcChhc3luYyAoZGF0YSk9PntcclxuICAgIHZhciBwcm9qZWN0Q29ubmVjdG9yID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFByb2plY3QuYWJpLGRhdGEpO1xyXG4gICAgY29uc3QgZGV0YWlscyA9IGF3YWl0IHByb2plY3RDb25uZWN0b3IubWV0aG9kcy5nZXRQcm9qZWN0RGV0YWlscygpLmNhbGwoKVxyXG4gICAgcHJvamVjdENvbnRyYWN0cy5wdXNoKHByb2plY3RDb25uZWN0b3IpO1xyXG4gICAgY29uc3QgZm9ybWF0dGVkUHJvamVjdERhdGEgPSBwcm9qZWN0RGF0YUZvcm1hdHRlcihkZXRhaWxzLGRhdGEpXHJcbiAgICBwcm9qZWN0cy5wdXNoKGZvcm1hdHRlZFByb2plY3REYXRhKVxyXG4gICB9KSlcclxuXHJcbiAgIGRpc3BhdGNoKGFjdGlvbnMucHJvamVjdENvbnRyYWN0c0xvYWRlZChwcm9qZWN0Q29udHJhY3RzKSk7XHJcbiAgIGRpc3BhdGNoKGFjdGlvbnMucHJvamVjdHNMb2FkZWQocHJvamVjdHMpKTtcclxuXHJcbn1cclxuXHJcbi8vIENvbnRyaWJ1dGUgaW4gZnVuZCByYWlzaW5nIHByb2plY3RcclxuZXhwb3J0IGNvbnN0IGNvbnRyaWJ1dGUgPSBhc3luYyhjcm93ZEZ1bmRpbmdDb250cmFjdCxkYXRhLGRpc3BhdGNoLG9uU3VjY2VzcyxvbkVycm9yKSA9PntcclxuICBjb25zdCB7Y29udHJhY3RBZGRyZXNzLGFtb3VudCxhY2NvdW50fSA9IGRhdGE7XHJcbiAgYXdhaXQgY3Jvd2RGdW5kaW5nQ29udHJhY3QubWV0aG9kcy5jb250cmlidXRlKGNvbnRyYWN0QWRkcmVzcykuc2VuZCh7ZnJvbTphY2NvdW50LHZhbHVlOmFtb3VudH0pXHJcbiAgLm9uKCdyZWNlaXB0JywgZnVuY3Rpb24ocmVjZWlwdCl7XHJcbiAgICBkaXNwYXRjaChhY3Rpb25zLmFtb3VudENvbnRyaWJ1dG9yKHtwcm9qZWN0SWQ6Y29udHJhY3RBZGRyZXNzLGFtb3VudDphbW91bnR9KSlcclxuICAgIG9uU3VjY2VzcygpXHJcbiAgfSlcclxuICAub24oJ2Vycm9yJywgZnVuY3Rpb24oZXJyb3IpeyBcclxuICAgIG9uRXJyb3IoZXJyb3IubWVzc2FnZSlcclxuICB9KVxyXG59XHJcblxyXG4vLyBHZXQgYWxsIGNvbnRyaWJ1dG9ycyBieSBjb250cmFjdCBhZGRyZXNzXHJcbmV4cG9ydCBjb25zdCBnZXRDb250cmlidXRvcnMgPSBhc3luYyAod2ViMyxjb250cmFjdEFkZHJlc3Msb25TdWNjZXNzLG9uRXJyb3IpID0+e1xyXG4gIHRyeSB7XHJcbiAgICB2YXIgcHJvamVjdENvbm5lY3RvciA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChQcm9qZWN0LmFiaSxjb250cmFjdEFkZHJlc3MpO1xyXG4gICAgY29uc3QgZ2V0Q29udHJpYnV0aW9ucyA9IGF3YWl0IHByb2plY3RDb25uZWN0b3IuZ2V0UGFzdEV2ZW50cyhcIkZ1bmRpbmdSZWNlaXZlZFwiLHtcclxuICAgICAgZnJvbUJsb2NrOiAwLFxyXG4gICAgICB0b0Jsb2NrOiAnbGF0ZXN0J1xyXG4gICAgfSlcclxuICAgIG9uU3VjY2Vzcyhncm91cENvbnRyaWJ1dG9ycyhnZXRDb250cmlidXRpb25zKSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgb25FcnJvcihlcnJvcilcclxuICB9XHJcbn1cclxuXHJcbi8vIFJlcXVlc3QgZm9yIHdpdGhkcmF3IGFtb3VudFxyXG5leHBvcnQgY29uc3QgY3JlYXRlV2l0aGRyYXdSZXF1ZXN0ID0gYXN5bmMgKHdlYjMsY29udHJhY3RBZGRyZXNzLGRhdGEsb25TdWNjZXNzLG9uRXJyb3IpID0+e1xyXG4gIGNvbnN0IHtkZXNjcmlwdGlvbixhbW91bnQscmVjaXBpZW50LGFjY291bnR9ID0gZGF0YTtcclxuICAgIHZhciBwcm9qZWN0Q29ubmVjdG9yID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFByb2plY3QuYWJpLGNvbnRyYWN0QWRkcmVzcyk7XHJcbiAgICBhd2FpdCBwcm9qZWN0Q29ubmVjdG9yLm1ldGhvZHMuY3JlYXRlV2l0aGRyYXdSZXF1ZXN0KGRlc2NyaXB0aW9uLGFtb3VudCxyZWNpcGllbnQpLnNlbmQoe2Zyb206YWNjb3VudH0pXHJcbiAgICAub24oJ3JlY2VpcHQnLCBmdW5jdGlvbihyZWNlaXB0KXtcclxuICAgICAgY29uc3Qgd2l0aGRyYXdSZXFSZWNlaXB0ID0gcmVjZWlwdC5ldmVudHMuV2l0aGRyYXdSZXF1ZXN0Q3JlYXRlZC5yZXR1cm5WYWx1ZXM7XHJcbiAgICAgIGNvbnN0IGZvcm1hdHRlZFJlcURhdGEgPSB3aXRoZHJhd1JlcXVlc3REYXRhRm9ybWF0dGVyKHdpdGhkcmF3UmVxUmVjZWlwdCx3aXRoZHJhd1JlcVJlY2VpcHQucmVxdWVzdElkKVxyXG4gICAgICBvblN1Y2Nlc3MoZm9ybWF0dGVkUmVxRGF0YSlcclxuICAgIH0pXHJcbiAgICAub24oJ2Vycm9yJywgZnVuY3Rpb24oZXJyb3IpeyBcclxuICAgICAgb25FcnJvcihlcnJvci5tZXNzYWdlKVxyXG4gICAgfSlcclxufVxyXG5cclxuLy8gR2V0IGFsbCB3aXRoZHJhdyByZXF1ZXN0XHJcbmV4cG9ydCBjb25zdCBnZXRBbGxXaXRoZHJhd1JlcXVlc3QgPSBhc3luYyAod2ViMyxjb250cmFjdEFkZHJlc3Msb25Mb2FkUmVxdWVzdCkgPT57XHJcbiAgdmFyIHByb2plY3RDb25uZWN0b3IgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoUHJvamVjdC5hYmksY29udHJhY3RBZGRyZXNzKTtcclxuICB2YXIgd2l0aGRyYXdSZXF1ZXN0Q291bnQgPSBhd2FpdCBwcm9qZWN0Q29ubmVjdG9yLm1ldGhvZHMubnVtT2ZXaXRoZHJhd1JlcXVlc3RzKCkuY2FsbCgpO1xyXG4gIHZhciB3aXRoZHJhd1JlcXVlc3RzID0gW107XHJcblxyXG4gIGlmKHdpdGhkcmF3UmVxdWVzdENvdW50IDw9IDApe1xyXG4gICAgb25Mb2FkUmVxdWVzdCh3aXRoZHJhd1JlcXVlc3RzKVxyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICBmb3IodmFyIGk9MTtpPD13aXRoZHJhd1JlcXVlc3RDb3VudDtpKyspe1xyXG4gICAgY29uc3QgcmVxID0gYXdhaXQgcHJvamVjdENvbm5lY3Rvci5tZXRob2RzLndpdGhkcmF3UmVxdWVzdHMoaS0xKS5jYWxsKCk7XHJcbiAgICB3aXRoZHJhd1JlcXVlc3RzLnB1c2god2l0aGRyYXdSZXF1ZXN0RGF0YUZvcm1hdHRlcih7Li4ucmVxLHJlcXVlc3RJZDppLTF9KSk7XHJcbiAgfVxyXG4gIG9uTG9hZFJlcXVlc3Qod2l0aGRyYXdSZXF1ZXN0cylcclxufVxyXG5cclxuLy8gVm90ZSBmb3Igd2l0aGRyYXcgcmVxdWVzdFxyXG5leHBvcnQgY29uc3Qgdm90ZVdpdGhkcmF3UmVxdWVzdCA9IGFzeW5jICh3ZWIzLGRhdGEsb25TdWNjZXNzLG9uRXJyb3IpID0+e1xyXG4gIGNvbnN0IHtjb250cmFjdEFkZHJlc3MscmVxSWQsYWNjb3VudH0gPSBkYXRhO1xyXG4gIHZhciBwcm9qZWN0Q29ubmVjdG9yID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFByb2plY3QuYWJpLGNvbnRyYWN0QWRkcmVzcyk7XHJcbiAgYXdhaXQgcHJvamVjdENvbm5lY3Rvci5tZXRob2RzLnZvdGVXaXRoZHJhd1JlcXVlc3QocmVxSWQpLnNlbmQoe2Zyb206YWNjb3VudH0pXHJcbiAgLm9uKCdyZWNlaXB0JywgZnVuY3Rpb24ocmVjZWlwdCl7XHJcbiAgICBjb25zb2xlLmxvZyhyZWNlaXB0KVxyXG4gICAgb25TdWNjZXNzKClcclxuICB9KVxyXG4gIC5vbignZXJyb3InLCBmdW5jdGlvbihlcnJvcil7IFxyXG4gICAgb25FcnJvcihlcnJvci5tZXNzYWdlKVxyXG4gIH0pXHJcblxyXG59XHJcblxyXG4vLyBXaXRoZHJhdyByZXF1ZXN0ZWQgYW1vdW50IFxyXG5leHBvcnQgY29uc3Qgd2l0aGRyYXdBbW91bnQgPSBhc3luYyAod2ViMyxkaXNwYXRjaCxkYXRhLG9uU3VjY2VzcyxvbkVycm9yKSA9PntcclxuICBjb25zdCB7Y29udHJhY3RBZGRyZXNzLHJlcUlkLGFjY291bnQsYW1vdW50fSA9IGRhdGE7XHJcbiAgdmFyIHByb2plY3RDb25uZWN0b3IgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoUHJvamVjdC5hYmksY29udHJhY3RBZGRyZXNzKTtcclxuICBhd2FpdCBwcm9qZWN0Q29ubmVjdG9yLm1ldGhvZHMud2l0aGRyYXdSZXF1ZXN0ZWRBbW91bnQocmVxSWQpLnNlbmQoe2Zyb206YWNjb3VudH0pXHJcbiAgLm9uKCdyZWNlaXB0JywgZnVuY3Rpb24ocmVjZWlwdCl7XHJcbiAgICBjb25zb2xlLmxvZyhyZWNlaXB0KVxyXG4gICAgZGlzcGF0Y2goYWN0aW9ucy53aXRoZHJhd0NvbnRyYWN0QmFsYW5jZSh7XHJcbiAgICAgIGNvbnRyYWN0QWRkcmVzczpjb250cmFjdEFkZHJlc3MsXHJcbiAgICAgIHdpdGhkcmF3QW1vdW50OmFtb3VudFxyXG4gICAgfSkpXHJcbiAgICBvblN1Y2Nlc3MoKVxyXG4gIH0pXHJcbiAgLm9uKCdlcnJvcicsIGZ1bmN0aW9uKGVycm9yKXsgXHJcbiAgICBvbkVycm9yKGVycm9yLm1lc3NhZ2UpXHJcbiAgfSlcclxufVxyXG5cclxuLy9HZXQgbXkgY29udHJpYnV0aW9uc1xyXG5leHBvcnQgY29uc3QgZ2V0TXlDb250cmlidXRpb25MaXN0ID0gYXN5bmMoY3Jvd2RGdW5kaW5nQ29udHJhY3QsYWNjb3VudCkgPT57XHJcbiAgY29uc3QgZ2V0Q29udHJpYnV0aW9ucyA9IGF3YWl0IGNyb3dkRnVuZGluZ0NvbnRyYWN0LmdldFBhc3RFdmVudHMoXCJDb250cmlidXRpb25SZWNlaXZlZFwiLHtcclxuICAgIGZpbHRlcjogeyBjb250cmlidXRvcjogYWNjb3VudCB9LFxyXG4gICAgZnJvbUJsb2NrOiAwLFxyXG4gICAgdG9CbG9jazogJ2xhdGVzdCdcclxuICB9KVxyXG4gIHJldHVybiBncm91cENvbnRyaWJ1dGlvbkJ5UHJvamVjdChnZXRDb250cmlidXRpb25zKTtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgV0VCM19MT0FERUQgPSBcIldFQjNfTE9BREVEXCI7XHJcbmV4cG9ydCBjb25zdCBXQUxMRVRfQUREUkVTU19MT0FERUQgPSBcIldBTExFVF9BRERSRVNTX0xPQURFRFwiO1xyXG5cclxuLy9Dcm93ZCBmdW5kaW5nXHJcbmV4cG9ydCBjb25zdCBDUk9XRF9GVU5ESU5HX0NPTlRSQUNUX0xPQURFRCA9IFwiQ1JPV0RfRlVORElOR19DT05UUkFDVF9MT0FERURcIjtcclxuXHJcbi8vIFByb2plY3RcclxuZXhwb3J0IGNvbnN0IFBST0pFQ1RfQ09OVFJBQ1RTX0xPQURFRCA9IFwiUFJPSkVDVF9DT05UUkFDVFNfTE9BREVEXCI7XHJcbmV4cG9ydCBjb25zdCBQUk9KRUNUU19MT0FERUQgPSBcIlBST0pFQ1RTX0xPQURFRFwiO1xyXG5leHBvcnQgY29uc3QgTkVXX1BST0pFQ1RfQ09OVFJBQ1RfTE9BREVEID0gXCJORVdfUFJPSkVDVF9DT05UUkFDVF9MT0FERURcIjtcclxuZXhwb3J0IGNvbnN0IE5FV19QUk9KRUNUX0xPQURFRCA9IFwiTkVXX1BST0pFQ1RfTE9BREVEXCI7XHJcbmV4cG9ydCBjb25zdCBJTkNSRUFTRV9QUk9HUkVTUyA9IFwiSU5DUkVBU0VfUFJPR1JFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFdJVEhEUkFXX0JBTEFOQ0UgPSBcIldJVEhEUkFXX0JBTEFOQ0VcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL21pdHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvYXN0aWZ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWIzXCIpOyIsIi8qIChpZ25vcmVkKSAqLyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGluayIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJjb250cmlidXRlIiwiY3JlYXRlV2l0aGRyYXdSZXF1ZXN0IiwiZXRoZXJUb1dlaSIsInRvYXN0U3VjY2VzcyIsInRvYXN0RXJyb3IiLCJjb2xvck1ha2VyIiwic3RhdGUiLCJGdW5kUmlzZXJDYXJkIiwicHJvcHMiLCJwdXNoV2l0aGRyYXdSZXF1ZXN0cyIsImJ0bkxvYWRlciIsInNldEJ0bkxvYWRlciIsImFtb3VudCIsInNldEFtb3VudCIsImRpc3BhdGNoIiwiY3Jvd2RGdW5kaW5nQ29udHJhY3QiLCJmdW5kaW5nUmVkdWNlciIsImNvbnRyYWN0IiwiYWNjb3VudCIsIndlYjNSZWR1Y2VyIiwid2ViMyIsImNvbm5lY3Rpb24iLCJjb250cmlidXRlQW1vdW50IiwicHJvamVjdElkIiwibWluQ29udHJpYnV0aW9uIiwibnVtZXJpY0Ftb3VudCIsInBhcnNlRmxvYXQiLCJpc05hTiIsImNvbnRyaWJ1dGlvbkFtb3VudCIsImRhdGEiLCJjb250cmFjdEFkZHJlc3MiLCJvblN1Y2Nlc3MiLCJvbkVycm9yIiwibWVzc2FnZSIsInJlcXVlc3RGb3JXaXRoZHJhdyIsImRlc2NyaXB0aW9uIiwicmVjaXBpZW50IiwiYWRkcmVzcyIsInRpdGxlIiwiZ29hbEFtb3VudCIsImRlYWRsaW5lIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY29udHJhY3RCYWxhbmNlIiwiY3JlYXRvciIsIndpZHRoIiwicHJvZ3Jlc3MiLCJ1c2VFZmZlY3QiLCJtb21lbnQiLCJzdGFydEZ1bmRSYWlzaW5nIiwiRnVuZFJpc2VyRm9ybSIsInNldFRpdGxlIiwic2V0RGVzY3JpcHRpb24iLCJ0YXJnZXRlZENvbnRyaWJ1dGlvbkFtb3VudCIsInNldFRhcmdldGVkQ29udHJpYnV0aW9uQW1vdW50IiwibWluaW11bUNvbnRyaWJ1dGlvbkFtb3VudCIsInNldE1pbmltdW1Db250cmlidXRpb25BbW91bnQiLCJzZXREZWFkbGluZSIsImJ0bkxvYWRpbmciLCJzZXRCdG5Mb2FkaW5nIiwicmlzZUZ1bmQiLCJwcmV2ZW50RGVmYXVsdCIsInVuaXhEYXRlIiwidmFsdWVPZiIsImVycm9yIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsIk51bWJlciIsInRhcmdldENvbnRyaWJ1dGlvbiIsInByb2plY3RUaXRsZSIsInByb2plY3REZXNjIiwiTG9hZGVyIiwidXNlUm91dGVyIiwiTmF2YmFyIiwicm91dGVyIiwib3Blbk1lbnUiLCJzZXRPcGVuTWVudSIsInBhdGhuYW1lIiwiUm91dGVyIiwiZ2V0TG9jYWxTdG9yYWdlRGF0YSIsIm5hbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYXV0aFdyYXBwZXIiLCJXcmFwcGVkQ29tcG9uZW50IiwiXyIsIndlaVRvRXRoZXIiLCJudW0iLCJ1dGlscyIsImZyb21XZWkiLCJ0b1N0cmluZyIsInN0ciIsIndlaSIsInRvV2VpIiwidW5peFRvRGF0ZSIsImZvcm1hdCIsInByb2plY3REYXRhRm9ybWF0dGVyIiwiZm9ybWF0dGVkRGF0YSIsInByb2plY3RTdGFydGVyIiwiYmFsYW5jZSIsImRlc2MiLCJjdXJyZW50QW1vdW50IiwiY3VycmVudFN0YXRlIiwicHJvamVjdERlYWRsaW5lIiwiTWF0aCIsInJvdW5kIiwiZm9ybWF0UHJvamVjdENvbnRyaWJ1dGlvbnMiLCJjb250cmlidXRpb25zIiwibWFwIiwicHJvamVjdEFkZHJlc3MiLCJyZXR1cm5WYWx1ZXMiLCJjb250cmlidXRvciIsImNvbnRyaWJ1dGVkQW1vdW50IiwiZ3JvdXBDb250cmlidXRpb25CeVByb2plY3QiLCJjb250cmlidXRpb25MaXN0IiwiZm9ybWF0Q29udHJpYnV0aW9uIiwiZ3JvdXBDb250cmlidXRvcnMiLCJjb250cmlidXRvckxpc3QiLCJjb250cmlidXRvckdyb3VwIiwiZ3JvdXBCeSIsIm8iLCJzdW1CeSIsIndpdGhkcmF3UmVxdWVzdERhdGFGb3JtYXR0ZXIiLCJyZXF1ZXN0SWQiLCJ0b3RhbFZvdGUiLCJub09mVm90ZXMiLCJzdGF0dXMiLCJpc0NvbXBsZXRlZCIsInJlY2lwdGFudCIsInJlY2lwdGVudCIsImNvbm5lY3RXaXRoV2FsbGV0Iiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwidGhlbiIsInJlcyIsImNhdGNoIiwiYWxlcnQiLCJjaGFpbk9yQWNjb3VudENoYW5nZWRIYW5kbGVyIiwibG9jYXRpb24iLCJyZWxvYWQiLCJ0b2FzdCIsIm1zZyIsInN1Y2Nlc3MiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsInVuZGVmaW5lZCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsImRlZmF1bHQiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9yb3V0ZXIiLCJfcm91dGVyMSIsIl91c2VJbnRlcnNlY3Rpb24iLCJvYmoiLCJfX2VzTW9kdWxlIiwicHJlZmV0Y2hlZCIsInByZWZldGNoIiwiaHJlZiIsImFzIiwib3B0aW9ucyIsImlzTG9jYWxVUkwiLCJlcnIiLCJjdXJMb2NhbGUiLCJsb2NhbGUiLCJpc01vZGlmaWVkRXZlbnQiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwiYWx0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsImxpbmtDbGlja2VkIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzY3JvbGwiLCJub2RlTmFtZSIsImluZGV4T2YiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiRXJyb3IiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJrZXlzIiwiZm9yRWFjaCIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJ1c2VSZWYiLCJjdXJyZW50IiwiY29uc29sZSIsIndhcm4iLCJwIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNoaWxkcmVuIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRSZWYiLCJyZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJpc1Zpc2libGUiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwic2V0UmVmIiwidXNlQ2FsbGJhY2siLCJlbCIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJ0eXBlIiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInBhdGgiLCJlbmRzV2l0aCIsInNsaWNlIiwicHJvY2VzcyIsImVudiIsIl9fTkVYVF9UUkFJTElOR19TTEFTSCIsInRlc3QiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwic2VsZiIsImJpbmQiLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIm1heCIsImlkIiwiY2xlYXJUaW1lb3V0IiwibWFya0Fzc2V0RXJyb3IiLCJpc0Fzc2V0RXJyb3IiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwiY3JlYXRlUm91dGVMb2FkZXIiLCJfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJNU19NQVhfSURMRV9ERUxBWSIsIndpdGhGdXR1cmUiLCJnZW5lcmF0b3IiLCJlbnRyeSIsImdldCIsImZ1dHVyZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJwcm9tIiwic2V0IiwiaGFzUHJlZmV0Y2giLCJsaW5rIiwiZG9jdW1lbnQiLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsInJlbExpc3QiLCJzdXBwb3J0cyIsImNhblByZWZldGNoIiwicHJlZmV0Y2hWaWFEb20iLCJyZWoiLCJxdWVyeVNlbGVjdG9yIiwicmVsIiwiY3Jvc3NPcmlnaW4iLCJfX05FWFRfQ1JPU1NfT1JJR0lOIiwib25sb2FkIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhcHBlbmRTY3JpcHQiLCJzcmMiLCJzY3JpcHQiLCJyZWplY3QiLCJib2R5IiwiZGV2QnVpbGRQcm9taXNlIiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiY3NzIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsImZpbHRlciIsInYiLCJlbnRyeXBvaW50cyIsIk1hcCIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsImZldGNoIiwib2siLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwib25FbnRyeXBvaW50IiwiZXhlY3V0ZSIsImZuIiwiY29tcG9uZW50IiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJyb3V0ZUZpbGVzUHJvbWlzZSIsImFsbCIsImhhcyIsImVudHJ5cG9pbnQiLCJzdHlsZXMiLCJmaW5hbGx5IiwiYXNzaWduIiwiY24iLCJuYXZpZ2F0b3IiLCJzYXZlRGF0YSIsImVmZmVjdGl2ZVR5cGUiLCJvdXRwdXQiLCJlbnVtZXJhYmxlIiwiX3dpdGhSb3V0ZXIiLCJjcmVhdGVSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJfcm91dGVyQ29udGV4dCIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJwdXNoIiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJzdGFjayIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsIkFycmF5IiwiaXNBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiZWxlbWVudCIsImNhbGxiYWNrIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRpc3BsYXlOYW1lIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJfX05FWFRfSTE4Tl9TVVBQT1JUIiwiYmFzZVBhdGgiLCJfX05FWFRfUk9VVEVSX0JBU0VQQVRIIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJzdGFydHNXaXRoIiwicGF0aE5vUXVlcnlIYXNoIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsImRldGVjdGVkTG9jYWxlIiwiZGV0ZWN0ZWREb21haW4iLCJodHRwIiwiZG9tYWluIiwicGF0aExvd2VyIiwidG9Mb3dlckNhc2UiLCJsb2NhbGVMb3dlciIsImxlbmd0aCIsInN1YnN0ciIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJVUkwiLCJvcmlnaW4iLCJhc1BhdGhuYW1lIiwicXVlcnkiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImdldFJvdXRlUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJwYXJhbXMiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJqb2luIiwicmVzdWx0Iiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwiZmlsdGVyZWRRdWVyeSIsImluY2x1ZGVzIiwicmVzb2x2ZUFzIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJ1cmxQcm90b01hdGNoIiwibWF0Y2giLCJ1cmxBc1N0cmluZ05vUHJvdG8iLCJ1cmxQYXJ0cyIsInNwbGl0Iiwibm9ybWFsaXplZFVybCIsIm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyIsImFzUGF0aCIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpc0R5bmFtaWNSb3V0ZSIsInNlYXJjaFBhcmFtcyIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJoYXNoIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlVXJsQXMiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJwcmVwYXJlZFVybCIsInByZXBhcmVkQXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFnZXMiLCJjbGVhblBhdGhuYW1lIiwiZGVub3JtYWxpemVQYWdlUGF0aCIsInNvbWUiLCJwYWdlIiwicmUiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIl9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04iLCJoaXN0b3J5Iiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsIm4iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJmZXRjaFJldHJ5IiwiYXR0ZW1wdHMiLCJjcmVkZW50aWFscyIsImpzb24iLCJub3RGb3VuZCIsImZldGNoTmV4dERhdGEiLCJkYXRhSHJlZiIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJwYXRobmFtZTEiLCJxdWVyeTEiLCJhczEiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsIkNvbXBvbmVudCIsIkNvbXBvbmVudDEiLCJlcnIxIiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImlzUHJldmlldyIsInNkYyIsInNkciIsIl9pZHgiLCJvblBvcFN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJfX04iLCJmb3JjZWRTY3JvbGwiLCJpZHgiLCJKU09OIiwic3RyaW5naWZ5IiwieCIsInBhZ2VYT2Zmc2V0IiwieSIsInBhZ2VZT2Zmc2V0IiwicGFyc2UiLCJwYXJzZVJlbGF0aXZlVXJsIiwiaXNTc3IiLCJfYnBzIiwiY2hhbmdlIiwiX3NoYWxsb3ciLCJjb21wb25lbnRzIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJfX05FWFRfREFUQV9fIiwiYXV0b0V4cG9ydCIsInN1YiIsImNsYyIsIl93cmFwQXBwIiwiaXNSZWFkeSIsImdzc3AiLCJnaXAiLCJhcHBHaXAiLCJnc3AiLCJzZWFyY2giLCJfX05FWFRfSEFTX1JFV1JJVEVTIiwiaG9zdG5hbWUiLCJfc2hvdWxkUmVzb2x2ZUhyZWYiLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsUmVzdG9yYXRpb24iLCJiYWNrIiwic2hvdWxkUmVzb2x2ZUhyZWYiLCJfaCIsInByZXZMb2NhbGUiLCJwYXJzZWRBcyIsImxvY2FsZVBhdGhSZXN1bHQiLCJkaWROYXZpZ2F0ZSIsImFzTm9CYXNlUGF0aCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwicm91dGVQcm9wcyIsIl9pbkZsaWdodFJvdXRlIiwiYWJvcnRDb21wb25lbnRMb2FkIiwiY2xlYW5lZEFzIiwibG9jYWxlQ2hhbmdlIiwib25seUFIYXNoQ2hhbmdlIiwiZW1pdCIsInNjcm9sbFRvSGFzaCIsIm5vdGlmeSIsInBhcnNlZCIsInJld3JpdGVzIiwiZ2V0UGFnZUxpc3QiLCJfX3Jld3JpdGVzIiwidXJsSXNOZXciLCJyZXdyaXRlc1Jlc3VsdCIsIm1hdGNoZWRQYWdlIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyZWYxIiwicm91dGVJbmZvIiwiZ2V0Um91dGVJbmZvIiwicGFnZVByb3BzIiwiX19OX1JFRElSRUNUIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibmV3VXJsIiwibmV3QXMiLCJfX05fUFJFVklFVyIsIm5vdEZvdW5kUm91dGUiLCJmZXRjaENvbXBvbmVudCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsInN0YXR1c0NvZGUiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwiX3Njcm9sbCIsInNob3VsZFNjcm9sbCIsInJlc2V0U2Nyb2xsIiwiZG9jdW1lbnRFbGVtZW50IiwibGFuZyIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwibG9hZEVycm9yRmFpbCIsImdpcEVyciIsInJvdXRlSW5mb0VyciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwibW9kIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZ2V0RGF0YUhyZWYiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiX2dldFNlcnZlckRhdGEiLCJlcnIyIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsInNjcm9sbFRvIiwiaWRFbCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsInBhdGhuYW1lMiIsIl9pc1NzZyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJjYWNoZUtleSIsInJlc291cmNlS2V5IiwiY3R4IiwiQXBwMSIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiRGFzaGJvYXJkIiwicHJvamVjdHNMaXN0IiwicHJvamVjdFJlZHVjZXIiLCJwcm9qZWN0cyIsImkiLCJ0eXBlcyIsIndlYjNMb2FkZWQiLCJXRUIzX0xPQURFRCIsInBheWxvYWQiLCJ3YWxsZXRBZGRyZXNzTG9hZGVkIiwiV0FMTEVUX0FERFJFU1NfTE9BREVEIiwiY3Jvd2RGdW5kaW5nQ29udHJhY3RMb2FkZWQiLCJDUk9XRF9GVU5ESU5HX0NPTlRSQUNUX0xPQURFRCIsInByb2plY3RDb250cmFjdHNMb2FkZWQiLCJjb250cmFjdHMiLCJQUk9KRUNUX0NPTlRSQUNUU19MT0FERUQiLCJwcm9qZWN0c0xvYWRlZCIsIlBST0pFQ1RTX0xPQURFRCIsIm5ld1Byb2plY3RDb250cmFjdHNMb2FkZWQiLCJORVdfUFJPSkVDVF9DT05UUkFDVF9MT0FERUQiLCJuZXdQcm9qZWN0c0xvYWRlZCIsInByb2plY3QiLCJORVdfUFJPSkVDVF9MT0FERUQiLCJhbW91bnRDb250cmlidXRvciIsIklOQ1JFQVNFX1BST0dSRVNTIiwid2l0aGRyYXdDb250cmFjdEJhbGFuY2UiLCJXSVRIRFJBV19CQUxBTkNFIiwiV2ViMyIsImFjdGlvbnMiLCJDcm93ZEZ1bmRpbmciLCJQcm9qZWN0IiwiY3Jvd2RGdW5kaW5nQ29udHJhY3RBZGRyZXNzIiwibG9hZFdlYjMiLCJnaXZlblByb3ZpZGVyIiwibG9hZEFjY291bnQiLCJldGgiLCJnZXRBY2NvdW50cyIsIm5ldHdvcmsiLCJuZXQiLCJnZXRJZCIsImxvYWRDcm93ZEZ1bmRpbmdDb250cmFjdCIsImNyb3dkRnVuZGluZyIsIkNvbnRyYWN0IiwiYWJpIiwiQ3Jvd2RGdW5kaW5nQ29udHJhY3QiLCJtZXRob2RzIiwiY3JlYXRlUHJvamVjdCIsInNlbmQiLCJmcm9tIiwicmVjZWlwdCIsInByb2plY3RzUmVjZWlwdCIsIlByb2plY3RTdGFydGVkIiwicHJvamVjdENvbnRyYWN0QWRkcmVzcyIsImZvcm1hdHRlZFByb2plY3REYXRhIiwicHJvamVjdENvbm5lY3RvciIsImdldEFsbEZ1bmRpbmciLCJmdW5kaW5nUHJvamVjdExpc3QiLCJyZXR1cm5BbGxQcm9qZWN0cyIsImNhbGwiLCJwcm9qZWN0Q29udHJhY3RzIiwiZGV0YWlscyIsImdldFByb2plY3REZXRhaWxzIiwiZ2V0Q29udHJpYnV0b3JzIiwiZ2V0Q29udHJpYnV0aW9ucyIsImdldFBhc3RFdmVudHMiLCJmcm9tQmxvY2siLCJ0b0Jsb2NrIiwid2l0aGRyYXdSZXFSZWNlaXB0IiwiV2l0aGRyYXdSZXF1ZXN0Q3JlYXRlZCIsImZvcm1hdHRlZFJlcURhdGEiLCJnZXRBbGxXaXRoZHJhd1JlcXVlc3QiLCJvbkxvYWRSZXF1ZXN0Iiwid2l0aGRyYXdSZXF1ZXN0Q291bnQiLCJudW1PZldpdGhkcmF3UmVxdWVzdHMiLCJ3aXRoZHJhd1JlcXVlc3RzIiwicmVxIiwidm90ZVdpdGhkcmF3UmVxdWVzdCIsInJlcUlkIiwibG9nIiwid2l0aGRyYXdBbW91bnQiLCJ3aXRoZHJhd1JlcXVlc3RlZEFtb3VudCIsImdldE15Q29udHJpYnV0aW9uTGlzdCJdLCJzb3VyY2VSb290IjoiIn0=