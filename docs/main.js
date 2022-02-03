(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Krzysiek\Desktop\Projekty\handmanGame\src\main.ts */"zUnb");


/***/ }),

/***/ "1wVk":
/*!******************************************!*\
  !*** ./src/app/image/image.component.ts ***!
  \******************************************/
/*! exports provided: ImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageComponent", function() { return ImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_letters_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/letters.service */ "wrSG");



class ImageComponent {
    constructor(letterService) {
        this.letterService = letterService;
        this.wrongAnswer = 'empty';
    }
    ngOnInit() {
        this.letterService.wrongAnswers.subscribe((res) => {
            this.wrongAnswer = `wrong${res}`;
        });
    }
}
ImageComponent.ɵfac = function ImageComponent_Factory(t) { return new (t || ImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_letters_service__WEBPACK_IMPORTED_MODULE_1__["LettersService"])); };
ImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageComponent, selectors: [["app-image"]], decls: 1, vars: 3, template: function ImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("image ", ctx.wrongAnswer, "");
    } }, styles: [".image[_ngcontent-%COMP%] {\n  width: 100%;\n  background-image: url(\"/assets/hangman/empty.png\");\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  height: 300px;\n}\n@media (min-width: 1200px) {\n  .image[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 400px;\n  }\n}\n.image.wrong1[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/hangman/1.png\");\n}\n.image.wrong2[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/hangman/2.png\");\n}\n.image.wrong3[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/hangman/3.png\");\n}\n.image.wrong4[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/hangman/4.png\");\n}\n.image.wrong5[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/hangman/5.png\");\n}\n.image.wrong6[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/hangman/6.png\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGltYWdlLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFdBQUE7RUFDQSxrREFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7QUFERjtBQ2NFO0VEbkJGO0lBU0ksWUFBQTtJQUNBLFlBQUE7RUFBRjtBQUNGO0FBRUU7RUFDRSw4Q0FBQTtBQUFKO0FBRUU7RUFDRSw4Q0FBQTtBQUFKO0FBRUU7RUFDRSw4Q0FBQTtBQUFKO0FBRUU7RUFDRSw4Q0FBQTtBQUFKO0FBRUU7RUFDRSw4Q0FBQTtBQUFKO0FBRUU7RUFDRSw4Q0FBQTtBQUFKIiwiZmlsZSI6ImltYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLmltYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaGFuZ21hbi9lbXB0eS5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuXHJcbiAgQGluY2x1ZGUgZGVza3RvcCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgfVxyXG5cclxuICAmLndyb25nMSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaGFuZ21hbi8xLnBuZycpO1xyXG4gIH1cclxuICAmLndyb25nMiB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaGFuZ21hbi8yLnBuZycpO1xyXG4gIH1cclxuICAmLndyb25nMyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaGFuZ21hbi8zLnBuZycpO1xyXG4gIH1cclxuICAmLndyb25nNCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaGFuZ21hbi80LnBuZycpO1xyXG4gIH1cclxuICAmLndyb25nNSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaGFuZ21hbi81LnBuZycpO1xyXG4gIH1cclxuICAmLndyb25nNiB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaGFuZ21hbi82LnBuZycpO1xyXG4gIH1cclxufSIsIiRteS1ncmVlbjogIzUxQTU2NztcclxuJG15LXJlZDogcmdiKDI0MCwgMjUsIDI1KTtcclxuJG15LXdoaXRlOiByZ2IoMjUwLCAyNDgsIDI0OCk7XHJcblxyXG5cclxuXHJcbkBtaXhpbiBkYXJrZW5CYWNrZ3JvdW5kKCRjb2xvcikge1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRjb2xvciwgMjAlKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuQG1peGluIHRhYmxldCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDU2OHB4KSB7IEBjb250ZW50OyB9XHJcbn1cclxuQG1peGluIGxhcHRvcCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7IEBjb250ZW50OyB9XHJcbn1cclxuQG1peGluIGRlc2t0b3Age1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHsgQGNvbnRlbnQ7IH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-image',
                templateUrl: './image.component.html',
                styleUrls: ['./image.component.scss']
            }]
    }], function () { return [{ type: _services_letters_service__WEBPACK_IMPORTED_MODULE_1__["LettersService"] }]; }, null); })();


/***/ }),

/***/ "2Izs":
/*!*************************************************************!*\
  !*** ./src/app/game-content/alphabet/alphabet.component.ts ***!
  \*************************************************************/
/*! exports provided: AlphabetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlphabetComponent", function() { return AlphabetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0) { return { "clicked": a0 }; };
function AlphabetComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlphabetComponent_li_2_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const letter_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.clickedLetterHandler(letter_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const letter_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r0.clickedLettesList.includes(letter_r1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](letter_r1);
} }
class AlphabetComponent {
    constructor() {
        this.emitLetter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // tslint:disable-next-line: max-line-length
        this.lettersList = ['a', 'ą', 'b', 'c', 'ć', 'd', 'e', 'ę', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ł', 'm', 'n', 'ń', 'o', 'ó', 'p', 'q', 'r', 's', 'ś', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'ż', 'ź'];
        this.clickedLettesList = [];
    }
    ngOnInit() {
    }
    clickedLetterHandler(letter) {
        if (this.status !== 'gameOver') {
            this.clickedLettesList.push(letter);
            this.emitLetter.emit(letter);
        }
    }
    resetClickedList() {
        this.clickedLettesList = [];
    }
}
AlphabetComponent.ɵfac = function AlphabetComponent_Factory(t) { return new (t || AlphabetComponent)(); };
AlphabetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlphabetComponent, selectors: [["app-alphabet"]], inputs: { status: "status" }, outputs: { emitLetter: "emitLetter" }, decls: 3, vars: 1, consts: [[1, "alphabet-wrapper"], [1, "character-list"], ["class", "single-character", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "single-character", 3, "ngClass", "click"], [1, "letter"]], template: function AlphabetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AlphabetComponent_li_2_Template, 3, 4, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lettersList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".alphabet-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.character-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 360px;\n  margin: 50px 0;\n  padding: 0;\n}\n\n.single-character[_ngcontent-%COMP%] {\n  margin: 5px;\n  height: 40px;\n  width: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid white;\n  background-color: #51A567;\n  border-radius: 50%;\n  transition: 0.3s;\n  cursor: pointer;\n}\n\n.single-character[_ngcontent-%COMP%]:hover {\n  background-color: #2f613c;\n}\n\n.single-character.clicked[_ngcontent-%COMP%] {\n  cursor: default;\n  opacity: 0.3;\n}\n\n.single-character.clicked[_ngcontent-%COMP%]:hover {\n  background-color: #51A567;\n}\n\n.single-character[_ngcontent-%COMP%]   .letter[_ngcontent-%COMP%] {\n  color: #faf8f8;\n  font-size: 18px;\n  text-transform: capitalize;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhbHBoYWJldC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQURGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJDdEJTO0VEdUJULGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQUY7O0FDbEJFO0VBQ0UseUJBQUE7QURvQko7O0FBQ0U7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUFJO0VBQ0UseUJDakNLO0FEbUNYOztBQUVFO0VBQ0UsY0NwQ087RURxQ1AsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUFBSiIsImZpbGUiOiJhbHBoYWJldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi5hbHBoYWJldC13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5jaGFyYWN0ZXItbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgbWF4LXdpZHRoOiAzNjBweDtcclxuICBtYXJnaW46IDUwcHggMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uc2luZ2xlLWNoYXJhY3RlciB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbXktZ3JlZW47XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHRyYW5zaXRpb246IC4zcztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgQGluY2x1ZGUgZGFya2VuQmFja2dyb3VuZCgkbXktZ3JlZW4pO1xyXG4gXHJcblxyXG4gICYuY2xpY2tlZCB7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICBvcGFjaXR5OiAuMztcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbXktZ3JlZW47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubGV0dGVyIHtcclxuICAgIGNvbG9yOiAkbXktd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG59IiwiJG15LWdyZWVuOiAjNTFBNTY3O1xyXG4kbXktcmVkOiByZ2IoMjQwLCAyNSwgMjUpO1xyXG4kbXktd2hpdGU6IHJnYigyNTAsIDI0OCwgMjQ4KTtcclxuXHJcblxyXG5cclxuQG1peGluIGRhcmtlbkJhY2tncm91bmQoJGNvbG9yKSB7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGNvbG9yLCAyMCUpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5AbWl4aW4gdGFibGV0IHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogNTY4cHgpIHsgQGNvbnRlbnQ7IH1cclxufVxyXG5AbWl4aW4gbGFwdG9wIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHsgQGNvbnRlbnQ7IH1cclxufVxyXG5AbWl4aW4gZGVza3RvcCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkgeyBAY29udGVudDsgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlphabetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-alphabet',
                templateUrl: './alphabet.component.html',
                styleUrls: ['./alphabet.component.scss']
            }]
    }], function () { return []; }, { emitLetter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], status: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "89Fg":
/*!********************************************************!*\
  !*** ./src/app/game-content/game-content.component.ts ***!
  \********************************************************/
/*! exports provided: GameContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameContentComponent", function() { return GameContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _alphabet_alphabet_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alphabet/alphabet.component */ "2Izs");
/* harmony import */ var _success_modal_success_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../success-modal/success-modal.component */ "rrIG");
/* harmony import */ var _services_letters_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/letters.service */ "wrSG");
/* harmony import */ var _drawn_word_drawn_word_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drawn-word/drawn-word.component */ "XSUC");
/* harmony import */ var _stats_stats_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stats/stats.component */ "8YVE");









class GameContentComponent {
    constructor(letterService) {
        this.letterService = letterService;
        this.showStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.matchLetters = [];
        this.clicked = [];
        this.wrongAnswers = 0;
        this.resolved = 0;
    }
    ngOnInit() {
        this.getWordsList();
        this.letterService.resetGame.subscribe(() => {
            this.resetData();
            this.resolved = 0;
        });
        this.letterService.timer();
    }
    getWordsList() {
        this.letterService.getAnswers().subscribe((res) => {
            this.wordsList = res.words;
            this.drawWord();
        });
    }
    drawWord() {
        var _a;
        const index = Math.floor(Math.random() * ((_a = this.wordsList) === null || _a === void 0 ? void 0 : _a.length));
        this.drawnWord = this.wordsList[index];
        this.wordsList.splice(index, 1);
    }
    getClickedLetter(letter) {
        this.checkIfCorrectLetter(letter);
        this.clicked.push(letter);
    }
    checkIfCorrectLetter(letter) {
        if ((this.drawnWord.includes(letter))) {
            this.isCorrectLetterHandler(letter);
        }
        else {
            if (!this.clicked.includes(letter)) {
                this.isWrongLetterHandler(this.wrongAnswers);
            }
        }
    }
    isCorrectLetterHandler(letter) {
        const separateLetters = [...this.drawnWord];
        separateLetters.map(el => {
            if (el === letter) {
                this.matchLetters.push(letter);
            }
        });
        if (this.drawnWord.length === this.matchLetters.length) {
            if (this.resolved !== 5) {
                this.setNextWord();
            }
        }
    }
    isWrongLetterHandler(wrongAnswers) {
        const updatedValue = this.wrongAnswers + 1;
        this.wrongAnswers = updatedValue;
        this.letterService.setNumberOfWrongAnswers(updatedValue);
        if (updatedValue === 6) {
            this.status = 'gameOver';
            this.showStatus.emit(this.status);
        }
    }
    setNextWord() {
        this.resolved = this.resolved + 1;
        if (this.resolved < 5) {
            this.status = 'grats';
            this.showStatus.emit(this.status);
            setTimeout(() => {
                this.resetData();
            }, 1000);
        }
        else {
            this.modal.show();
        }
    }
    resetData() {
        this.letterService.setNumberOfWrongAnswers(0);
        this.alphabet.resetClickedList();
        this.wrongAnswers = 0;
        this.matchLetters = [];
        this.clicked = [];
        this.drawWord();
        this.status = '';
        this.showStatus.emit(this.status);
    }
}
GameContentComponent.ɵfac = function GameContentComponent_Factory(t) { return new (t || GameContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_letters_service__WEBPACK_IMPORTED_MODULE_3__["LettersService"])); };
GameContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameContentComponent, selectors: [["app-game-content"]], viewQuery: function GameContentComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_alphabet_alphabet_component__WEBPACK_IMPORTED_MODULE_1__["AlphabetComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_success_modal_success_modal_component__WEBPACK_IMPORTED_MODULE_2__["SuccessModalComponent"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.alphabet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
    } }, outputs: { showStatus: "showStatus" }, decls: 9, vars: 6, consts: [[1, "content-wrapper"], [3, "drawnWord", "matchLetters"], [3, "status", "emitLetter"], ["alphabet", ""], [1, "stats", 3, "wrongAnswers", "resolved"], [1, "tip"], ["successModal", ""]], template: function GameContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-drawn-word", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-alphabet", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("emitLetter", function GameContentComponent_Template_app_alphabet_emitLetter_2_listener($event) { return ctx.getClickedLetter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-stats", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-success-modal", null, 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("drawnWord", ctx.drawnWord)("matchLetters", ctx.matchLetters);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("status", ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("wrongAnswers", ctx.wrongAnswers)("resolved", ctx.resolved);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("s\u0142owo to: ", ctx.drawnWord, "");
    } }, directives: [_drawn_word_drawn_word_component__WEBPACK_IMPORTED_MODULE_4__["DrawnWordComponent"], _alphabet_alphabet_component__WEBPACK_IMPORTED_MODULE_1__["AlphabetComponent"], _stats_stats_component__WEBPACK_IMPORTED_MODULE_5__["StatsComponent"], _success_modal_success_modal_component__WEBPACK_IMPORTED_MODULE_2__["SuccessModalComponent"]], styles: [".content-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.stats[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.tip[_ngcontent-%COMP%] {\n  margin-top: 200px;\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.8);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGdhbWUtY29udGVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBQ0YiLCJmaWxlIjoiZ2FtZS1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc3RhdHMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udGlwIHtcclxuICBtYXJnaW4tdG9wOiAyMDBweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6IHJnYmEoMCwwLDAsLjgpO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game-content',
                templateUrl: './game-content.component.html',
                styleUrls: ['./game-content.component.scss']
            }]
    }], function () { return [{ type: _services_letters_service__WEBPACK_IMPORTED_MODULE_3__["LettersService"] }]; }, { showStatus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], alphabet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_alphabet_alphabet_component__WEBPACK_IMPORTED_MODULE_1__["AlphabetComponent"]]
        }], modal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_success_modal_success_modal_component__WEBPACK_IMPORTED_MODULE_2__["SuccessModalComponent"]]
        }] }); })();


/***/ }),

/***/ "8YVE":
/*!*******************************************************!*\
  !*** ./src/app/game-content/stats/stats.component.ts ***!
  \*******************************************************/
/*! exports provided: StatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsComponent", function() { return StatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0) { return { "danger": a0 }; };
class StatsComponent {
    constructor() { }
}
StatsComponent.ɵfac = function StatsComponent_Factory(t) { return new (t || StatsComponent)(); };
StatsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatsComponent, selectors: [["app-stats"]], inputs: { wrongAnswers: "wrongAnswers", resolved: "resolved" }, decls: 9, vars: 5, consts: [[1, "stats-wrapper"], [3, "ngClass"]], template: function StatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Kategoria: angielskie liczby :) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Liczba b\u0142\u0119d\u00F3w: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.wrongAnswers > 4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.wrongAnswers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rozwi\u0105zano: ", ctx.resolved, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".stats-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.stats-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #51A567;\n  font-size: 20px;\n  font-weight: 700;\n}\n.stats-wrapper[_ngcontent-%COMP%]   p.danger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #f01919;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzdGF0cy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFdBQUE7QUFERjtBQUVFO0VBQ0UsY0NMTztFRE1QLGVBQUE7RUFDQSxnQkFBQTtBQUFKO0FBRU07RUFDRSxjQ1RDO0FEU1QiLCJmaWxlIjoic3RhdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4uc3RhdHMtd3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcCB7XHJcbiAgICBjb2xvcjogJG15LWdyZWVuO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICYuZGFuZ2VyIHtcclxuICAgICAgc3BhbiAge1xyXG4gICAgICAgIGNvbG9yOiAkbXktcmVkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiJG15LWdyZWVuOiAjNTFBNTY3O1xyXG4kbXktcmVkOiByZ2IoMjQwLCAyNSwgMjUpO1xyXG4kbXktd2hpdGU6IHJnYigyNTAsIDI0OCwgMjQ4KTtcclxuXHJcblxyXG5cclxuQG1peGluIGRhcmtlbkJhY2tncm91bmQoJGNvbG9yKSB7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGNvbG9yLCAyMCUpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5AbWl4aW4gdGFibGV0IHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogNTY4cHgpIHsgQGNvbnRlbnQ7IH1cclxufVxyXG5AbWl4aW4gbGFwdG9wIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHsgQGNvbnRlbnQ7IH1cclxufVxyXG5AbWl4aW4gZGVza3RvcCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkgeyBAY29udGVudDsgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-stats',
                templateUrl: './stats.component.html',
                styleUrls: ['./stats.component.scss']
            }]
    }], function () { return []; }, { wrongAnswers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], resolved: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "J7Q4":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class WelcomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(); };
WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["app-welcome"]], inputs: { author: "author" }, decls: 7, vars: 0, consts: [[1, "welcome-wrapper"], [1, "title"], [1, "description"], [1, "author"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Gra wisielec");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Zadanie rekrutacyjne: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Krzysztof Siek");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".title[_ngcontent-%COMP%] {\n  color: #51A567;\n  font-size: 30px;\n  font-weight: 900;\n  letter-spacing: 2px;\n}\n@media (min-width: 568px) {\n  .title[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n}\n@media (min-width: 1200px) {\n  .title[_ngcontent-%COMP%] {\n    font-size: 50px;\n  }\n}\n.description[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n@media (min-width: 568px) {\n  .description[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n@media (min-width: 1200px) {\n  .description[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n.author[_ngcontent-%COMP%] {\n  color: #51A567;\n  font-weight: 900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHdlbGNvbWUuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0NIUztFRElULGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBREY7QUNVRTtFRGJGO0lBT0ksZUFBQTtFQUFGO0FBQ0Y7QUNXRTtFRG5CRjtJQVVJLGVBQUE7RUFFRjtBQUNGO0FBQ0E7RUFDRSxlQUFBO0FBRUY7QUNKRTtFRENGO0lBR0ksZUFBQTtFQUlGO0FBQ0Y7QUNIRTtFRExGO0lBTUksZUFBQTtFQU1GO0FBQ0Y7QUFIQTtFQUNFLGNDM0JTO0VENEJULGdCQUFBO0FBTUYiLCJmaWxlIjoid2VsY29tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi50aXRsZSB7XHJcbiAgY29sb3I6ICRteS1ncmVlbjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG5cclxuICBAaW5jbHVkZSB0YWJsZXQge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gIH1cclxuICBAaW5jbHVkZSBkZXNrdG9wIHtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICB9XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIEBpbmNsdWRlIHRhYmxldCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIEBpbmNsdWRlIGRlc2t0b3Age1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmF1dGhvciB7XHJcbiAgY29sb3I6ICRteS1ncmVlbjtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG59IiwiJG15LWdyZWVuOiAjNTFBNTY3O1xyXG4kbXktcmVkOiByZ2IoMjQwLCAyNSwgMjUpO1xyXG4kbXktd2hpdGU6IHJnYigyNTAsIDI0OCwgMjQ4KTtcclxuXHJcblxyXG5cclxuQG1peGluIGRhcmtlbkJhY2tncm91bmQoJGNvbG9yKSB7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGNvbG9yLCAyMCUpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5AbWl4aW4gdGFibGV0IHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogNTY4cHgpIHsgQGNvbnRlbnQ7IH1cclxufVxyXG5AbWl4aW4gbGFwdG9wIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHsgQGNvbnRlbnQ7IH1cclxufVxyXG5AbWl4aW4gZGVza3RvcCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkgeyBAY29udGVudDsgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-welcome',
                templateUrl: './welcome.component.html',
                styleUrls: ['./welcome.component.scss']
            }]
    }], function () { return []; }, { author: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _game_content_game_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-content/game-content.component */ "89Fg");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome/welcome.component */ "J7Q4");
/* harmony import */ var _image_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image/image.component */ "1wVk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function AppComponent_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Gratulacje, uda\u0142o Ci si\u0119 odgadn\u0105\u0107 s\u0142owo! :) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Game Over :( - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_p_8_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.content.resetData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Zacznij od nowa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor() {
        this.title = 'hangmanGame';
        this.author = 'Krzysztof Siek';
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_game_content_game_content_component__WEBPACK_IMPORTED_MODULE_1__["GameContentComponent"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, decls: 9, vars: 2, consts: [[1, "app-wrapper"], [1, "main-content"], [3, "showStatus"], ["gameContent", ""], [1, "feedback-wrapper"], ["class", "success", 4, "ngIf"], ["class", "danger", 4, "ngIf"], [1, "success"], [1, "danger"], [1, "new-game", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-game-content", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("showStatus", function AppComponent_Template_app_game_content_showStatus_3_listener($event) { return ctx.status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_p_7_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_p_8_Template, 4, 0, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status === "grats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status === "gameOver");
    } }, directives: [_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"], _game_content_game_content_component__WEBPACK_IMPORTED_MODULE_1__["GameContentComponent"], _image_image_component__WEBPACK_IMPORTED_MODULE_3__["ImageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".app-wrapper[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-direction: column;\n  padding: 0 20px;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column-reverse;\n  width: 100%;\n  justify-content: space-around;\n}\n\n@media (min-width: 1200px) {\n  .main-content[_ngcontent-%COMP%] {\n    width: 60%;\n    flex-direction: row;\n  }\n}\n\n.feedback-wrapper[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n\n.success[_ngcontent-%COMP%], .danger[_ngcontent-%COMP%] {\n  color: #51A567;\n  font-size: 16px;\n  font-weight: 700;\n}\n\n@media (min-width: 568px) {\n  .success[_ngcontent-%COMP%], .danger[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .success[_ngcontent-%COMP%], .danger[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n\n.success.danger[_ngcontent-%COMP%], .danger.danger[_ngcontent-%COMP%] {\n  color: #f01919;\n}\n\n.success[_ngcontent-%COMP%]   .new-game[_ngcontent-%COMP%], .danger[_ngcontent-%COMP%]   .new-game[_ngcontent-%COMP%] {\n  background-color: #f01919;\n  color: #faf8f8;\n  padding: 10px 20px;\n  border-radius: 20px;\n  transition: 0.3s;\n  cursor: pointer;\n}\n\n.success[_ngcontent-%COMP%]   .new-game[_ngcontent-%COMP%]:hover, .danger[_ngcontent-%COMP%]   .new-game[_ngcontent-%COMP%]:hover {\n  background-color: #990a0a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUFERjs7QUNPRTtFRFZGO0lBT0ksVUFBQTtJQUNBLG1CQUFBO0VBQUY7QUFDRjs7QUFJQTtFQUNFLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxjQzdCUztFRDhCVCxlQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUNmRTtFRGFGO0lBTUksZUFBQTtFQUFGO0FBQ0Y7O0FDZEU7RURPRjtJQVNJLGVBQUE7RUFFRjtBQUNGOztBQURFO0VBQ0UsY0N2Q0s7QUQwQ1Q7O0FBREU7RUFDRSx5QkMxQ0s7RUQyQ0wsY0MxQ087RUQyQ1Asa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUdKOztBQUZJO0VBQ0UseUJBQUE7QUFJTiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4uYXBwLXdyYXBwZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cclxuICBAaW5jbHVkZSBkZXNrdG9wIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5mZWVkYmFjay13cmFwcGVyIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4uc3VjY2VzcywgLmRhbmdlciB7XHJcbiAgY29sb3I6ICRteS1ncmVlbjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuXHJcbiAgQGluY2x1ZGUgdGFibGV0IHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICB9XHJcbiAgQGluY2x1ZGUgZGVza3RvcCB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgfVxyXG4gICYuZGFuZ2VyIHtcclxuICAgIGNvbG9yOiAkbXktcmVkO1xyXG4gIH1cclxuICAubmV3LWdhbWUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG15LXJlZDtcclxuICAgIGNvbG9yOiAkbXktd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkbXktcmVkLCAyMCUpO1xyXG4gICAgfVxyXG4gIH1cclxufSIsIiRteS1ncmVlbjogIzUxQTU2NztcclxuJG15LXJlZDogcmdiKDI0MCwgMjUsIDI1KTtcclxuJG15LXdoaXRlOiByZ2IoMjUwLCAyNDgsIDI0OCk7XHJcblxyXG5cclxuXHJcbkBtaXhpbiBkYXJrZW5CYWNrZ3JvdW5kKCRjb2xvcikge1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRjb2xvciwgMjAlKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuQG1peGluIHRhYmxldCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDU2OHB4KSB7IEBjb250ZW50OyB9XHJcbn1cclxuQG1peGluIGxhcHRvcCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7IEBjb250ZW50OyB9XHJcbn1cclxuQG1peGluIGRlc2t0b3Age1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHsgQGNvbnRlbnQ7IH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return []; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_game_content_game_content_component__WEBPACK_IMPORTED_MODULE_1__["GameContentComponent"]]
        }] }); })();


/***/ }),

/***/ "XSUC":
/*!*****************************************************************!*\
  !*** ./src/app/game-content/drawn-word/drawn-word.component.ts ***!
  \*****************************************************************/
/*! exports provided: DrawnWordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawnWordComponent", function() { return DrawnWordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function DrawnWordComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const letter_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.matchLetters.includes(letter_r1) ? letter_r1 : "", " ");
} }
class DrawnWordComponent {
    constructor() { }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (this.drawnWord) {
            this.letters = [...this.drawnWord];
        }
    }
}
DrawnWordComponent.ɵfac = function DrawnWordComponent_Factory(t) { return new (t || DrawnWordComponent)(); };
DrawnWordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DrawnWordComponent, selectors: [["app-drawn-word"]], inputs: { drawnWord: "drawnWord", matchLetters: "matchLetters" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 1, consts: [[1, "word-wrapper"], ["class", "letter", 4, "ngFor", "ngForOf"], [1, "letter"]], template: function DrawnWordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DrawnWordComponent_p_1_Template, 2, 1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.letters);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".word-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 70px;\n}\n\n.letter[_ngcontent-%COMP%] {\n  color: #51A567;\n  font-size: 30px;\n  margin: 0 10px;\n  padding-bottom: 20px;\n  width: 20px;\n  text-align: center;\n  border-bottom: 2px solid #51A567;\n  text-transform: capitalize;\n}\n\n@media (min-width: 568px) {\n  .letter[_ngcontent-%COMP%] {\n    width: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkcmF3bi13b3JkLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxjQ1JTO0VEU1QsZUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMEJBQUE7QUFERjs7QUNDRTtFRFJGO0lBV0ksV0FBQTtFQUFGO0FBQ0YiLCJmaWxlIjoiZHJhd24td29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuLndvcmQtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtaW4taGVpZ2h0OiA3MHB4O1xyXG59XHJcblxyXG4ubGV0dGVyIHtcclxuICBjb2xvcjogJG15LWdyZWVuO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBtYXJnaW46IDAgMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICB3aWR0aDogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRteS1ncmVlbjtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuXHJcbiAgQGluY2x1ZGUgdGFibGV0IHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gIH1cclxufSIsIiRteS1ncmVlbjogIzUxQTU2NztcclxuJG15LXJlZDogcmdiKDI0MCwgMjUsIDI1KTtcclxuJG15LXdoaXRlOiByZ2IoMjUwLCAyNDgsIDI0OCk7XHJcblxyXG5cclxuXHJcbkBtaXhpbiBkYXJrZW5CYWNrZ3JvdW5kKCRjb2xvcikge1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRjb2xvciwgMjAlKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuQG1peGluIHRhYmxldCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDU2OHB4KSB7IEBjb250ZW50OyB9XHJcbn1cclxuQG1peGluIGxhcHRvcCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7IEBjb250ZW50OyB9XHJcbn1cclxuQG1peGluIGRlc2t0b3Age1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHsgQGNvbnRlbnQ7IH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DrawnWordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-drawn-word',
                templateUrl: './drawn-word.component.html',
                styleUrls: ['./drawn-word.component.scss']
            }]
    }], function () { return []; }, { drawnWord: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], matchLetters: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./welcome/welcome.component */ "J7Q4");
/* harmony import */ var _game_content_stats_stats_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game-content/stats/stats.component */ "8YVE");
/* harmony import */ var _game_content_alphabet_alphabet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game-content/alphabet/alphabet.component */ "2Izs");
/* harmony import */ var _game_content_drawn_word_drawn_word_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./game-content/drawn-word/drawn-word.component */ "XSUC");
/* harmony import */ var _image_image_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./image/image.component */ "1wVk");
/* harmony import */ var _game_content_game_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./game-content/game-content.component */ "89Fg");
/* harmony import */ var _success_modal_success_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./success-modal/success-modal.component */ "rrIG");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeComponent"],
        _game_content_stats_stats_component__WEBPACK_IMPORTED_MODULE_6__["StatsComponent"],
        _game_content_alphabet_alphabet_component__WEBPACK_IMPORTED_MODULE_7__["AlphabetComponent"],
        _game_content_drawn_word_drawn_word_component__WEBPACK_IMPORTED_MODULE_8__["DrawnWordComponent"],
        _image_image_component__WEBPACK_IMPORTED_MODULE_9__["ImageComponent"],
        _game_content_game_content_component__WEBPACK_IMPORTED_MODULE_10__["GameContentComponent"],
        _success_modal_success_modal_component__WEBPACK_IMPORTED_MODULE_11__["SuccessModalComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeComponent"],
                    _game_content_stats_stats_component__WEBPACK_IMPORTED_MODULE_6__["StatsComponent"],
                    _game_content_alphabet_alphabet_component__WEBPACK_IMPORTED_MODULE_7__["AlphabetComponent"],
                    _game_content_drawn_word_drawn_word_component__WEBPACK_IMPORTED_MODULE_8__["DrawnWordComponent"],
                    _image_image_component__WEBPACK_IMPORTED_MODULE_9__["ImageComponent"],
                    _game_content_game_content_component__WEBPACK_IMPORTED_MODULE_10__["GameContentComponent"],
                    _success_modal_success_modal_component__WEBPACK_IMPORTED_MODULE_11__["SuccessModalComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "rrIG":
/*!**********************************************************!*\
  !*** ./src/app/success-modal/success-modal.component.ts ***!
  \**********************************************************/
/*! exports provided: SuccessModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessModalComponent", function() { return SuccessModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_letters_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/letters.service */ "wrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function SuccessModalComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.timeSpent[0] > 0 ? ctx_r0.timeSpent[0] + "minut" : "", " ", ctx_r0.timeSpent[1], "sekund");
} }
class SuccessModalComponent {
    constructor(letterService) {
        this.letterService = letterService;
        this.showModal = false;
    }
    ngOnInit() {
    }
    show() {
        this.showModal = true;
        this.content = 'Przeszedłeś wszystkie etapy gry :)';
        this.title = 'Gratulacje! Udało Ci się!';
        this.timeSpent = this.letterService.getTime();
    }
    hide() {
        this.showModal = false;
        this.letterService.resetGameEmit();
    }
}
SuccessModalComponent.ɵfac = function SuccessModalComponent_Factory(t) { return new (t || SuccessModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_letters_service__WEBPACK_IMPORTED_MODULE_1__["LettersService"])); };
SuccessModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SuccessModalComponent, selectors: [["app-success-modal"]], decls: 16, vars: 5, consts: [["id", "myModal", 1, "modal", "c"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close", 3, "click"], [1, "modal-body"], [4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-success", 3, "click"]], template: function SuccessModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SuccessModalComponent_Template_button_click_6_listener() { return ctx.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "W grze sp\u0119dzi\u0142e\u015B \u0142\u0105cznie : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SuccessModalComponent_span_12_Template, 2, 2, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SuccessModalComponent_Template_button_click_14_listener() { return ctx.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Zagraj ponownie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.showModal ? "block" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.content, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.timeSpent);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".modal[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.8);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHN1Y2Nlc3MtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtBQUNGIiwiZmlsZSI6InN1Y2Nlc3MtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjgpO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SuccessModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-success-modal',
                templateUrl: './success-modal.component.html',
                styleUrls: ['./success-modal.component.scss']
            }]
    }], function () { return [{ type: _services_letters_service__WEBPACK_IMPORTED_MODULE_1__["LettersService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wrSG":
/*!*********************************************!*\
  !*** ./src/app/services/letters.service.ts ***!
  \*********************************************/
/*! exports provided: LettersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LettersService", function() { return LettersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class LettersService {
    constructor(http) {
        this.http = http;
        this.wrongAnswers = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.resetGame = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.time = 0;
    }
    setNumberOfWrongAnswers(wrongAnswers) {
        this.wrongAnswers.next(wrongAnswers);
    }
    resetGameEmit() {
        this.resetGame.next();
    }
    getAnswers() {
        return this.http.get('assets/answers.json');
    }
    timer() {
        this.interval = setInterval(() => {
            if (this.time === 0) {
                this.time++;
            }
            else {
                this.time++;
            }
            this.display = this.transformTime(this.time);
        }, 1000);
    }
    transformTime(value) {
        const minutes = Math.floor(value / 60);
        const seconds = value - minutes * 60;
        const time = [minutes, seconds];
        return time;
    }
    getTime() {
        return this.display;
    }
}
LettersService.ɵfac = function LettersService_Factory(t) { return new (t || LettersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
LettersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LettersService, factory: LettersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LettersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map