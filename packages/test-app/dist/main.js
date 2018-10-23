!function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function getDefault() {
            return module["default"];
        } : function getModuleExports() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    __webpack_require__(__webpack_require__.s = 1);
}([ function(module, exports) {
    module.exports = react;
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    var external_react_ = __webpack_require__(0);
    var external_react_default = __webpack_require__.n(external_react_);
    var test_lib_TestA = function TestA() {
        return external_react_default.a.createElement("span", null, "TestA");
    };
    function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
    }
    external_react_default.a.Component;
    function toInteger(dirtyNumber) {
        if (null === dirtyNumber || true === dirtyNumber || false === dirtyNumber) return NaN;
        var number = Number(dirtyNumber);
        if (isNaN(number)) return number;
        return number < 0 ? Math.ceil(number) : Math.floor(number);
    }
    var MILLISECONDS_IN_MINUTE = 6e4;
    function getTimezoneOffsetInMilliseconds(dirtyDate) {
        var date = new Date(dirtyDate.getTime());
        var baseTimezoneOffset = date.getTimezoneOffset();
        date.setSeconds(0, 0);
        var millisecondsPartOfTimezoneOffset = date.getTime() % MILLISECONDS_IN_MINUTE;
        return baseTimezoneOffset * MILLISECONDS_IN_MINUTE + millisecondsPartOfTimezoneOffset;
    }
    var MILLISECONDS_IN_HOUR = 36e5;
    var MILLISECONDS_IN_MINUTE$1 = 6e4;
    var DEFAULT_ADDITIONAL_DIGITS = 2;
    var patterns = {
        dateTimeDelimeter: /[T ]/,
        plainTime: /:/,
        timeZoneDelimeter: /[Z ]/i,
        YY: /^(\d{2})$/,
        YYY: [ /^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/ ],
        YYYY: /^(\d{4})/,
        YYYYY: [ /^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/ ],
        MM: /^-(\d{2})$/,
        DDD: /^-?(\d{3})$/,
        MMDD: /^-?(\d{2})-?(\d{2})$/,
        Www: /^-?W(\d{2})$/,
        WwwD: /^-?W(\d{2})-?(\d{1})$/,
        HH: /^(\d{2}([.,]\d*)?)$/,
        HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
        HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
        timezone: /([Z+-].*)$/,
        timezoneZ: /^(Z)$/,
        timezoneHH: /^([+-])(\d{2})$/,
        timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
    };
    function toDate(argument, dirtyOptions) {
        if (arguments.length < 1) throw new TypeError("1 argument required, but only " + arguments.length + " present");
        if (null === argument) return new Date(NaN);
        var options = dirtyOptions || {};
        var additionalDigits = null == options.additionalDigits ? DEFAULT_ADDITIONAL_DIGITS : toInteger(options.additionalDigits);
        if (2 !== additionalDigits && 1 !== additionalDigits && 0 !== additionalDigits) throw new RangeError("additionalDigits must be 0, 1 or 2");
        if (argument instanceof Date || "object" === typeof argument && "[object Date]" === Object.prototype.toString.call(argument)) return new Date(argument.getTime()); else if ("number" === typeof argument || "[object Number]" === Object.prototype.toString.call(argument)) return new Date(argument); else if (!("string" === typeof argument || "[object String]" === Object.prototype.toString.call(argument))) return new Date(NaN);
        var dateStrings = function splitDateString(dateString) {
            var dateStrings = {};
            var array = dateString.split(patterns.dateTimeDelimeter);
            var timeString;
            if (patterns.plainTime.test(array[0])) {
                dateStrings.date = null;
                timeString = array[0];
            } else {
                dateStrings.date = array[0];
                timeString = array[1];
                if (patterns.timeZoneDelimeter.test(dateStrings.date)) {
                    dateStrings.date = dateString.split(patterns.timeZoneDelimeter)[0];
                    timeString = dateString.substr(dateStrings.date.length, dateString.length);
                }
            }
            if (timeString) {
                var token = patterns.timezone.exec(timeString);
                if (token) {
                    dateStrings.time = timeString.replace(token[1], "");
                    dateStrings.timezone = token[1];
                } else dateStrings.time = timeString;
            }
            return dateStrings;
        }(argument);
        var parseYearResult = function parseYear(dateString, additionalDigits) {
            var patternYYY = patterns.YYY[additionalDigits];
            var patternYYYYY = patterns.YYYYY[additionalDigits];
            var token;
            if (token = patterns.YYYY.exec(dateString) || patternYYYYY.exec(dateString)) {
                var yearString = token[1];
                return {
                    year: parseInt(yearString, 10),
                    restDateString: dateString.slice(yearString.length)
                };
            }
            if (token = patterns.YY.exec(dateString) || patternYYY.exec(dateString)) {
                var centuryString = token[1];
                return {
                    year: 100 * parseInt(centuryString, 10),
                    restDateString: dateString.slice(centuryString.length)
                };
            }
            return {
                year: null
            };
        }(dateStrings.date, additionalDigits);
        var year = parseYearResult.year;
        var date = function parseDate(dateString, year) {
            if (null === year) return null;
            var token;
            var date;
            var month;
            var week;
            if (0 === dateString.length) {
                (date = new Date(0)).setUTCFullYear(year);
                return date;
            }
            if (token = patterns.MM.exec(dateString)) {
                date = new Date(0);
                month = parseInt(token[1], 10) - 1;
                if (!validateDate(year, month)) return new Date(NaN);
                date.setUTCFullYear(year, month);
                return date;
            }
            if (token = patterns.DDD.exec(dateString)) {
                date = new Date(0);
                var dayOfYear = parseInt(token[1], 10);
                if (!function validateDayOfYearDate(year, dayOfYear) {
                    if (dayOfYear < 1) return false;
                    var isLeapYear = isLeapYearIndex(year);
                    if (isLeapYear && dayOfYear > 366) return false;
                    if (!isLeapYear && dayOfYear > 365) return false;
                    return true;
                }(year, dayOfYear)) return new Date(NaN);
                date.setUTCFullYear(year, 0, dayOfYear);
                return date;
            }
            if (token = patterns.MMDD.exec(dateString)) {
                date = new Date(0);
                month = parseInt(token[1], 10) - 1;
                var day = parseInt(token[2], 10);
                if (!validateDate(year, month, day)) return new Date(NaN);
                date.setUTCFullYear(year, month, day);
                return date;
            }
            if (token = patterns.Www.exec(dateString)) {
                week = parseInt(token[1], 10) - 1;
                if (!validateWeekDate(year, week)) return new Date(NaN);
                return dayOfISOWeekYear(year, week);
            }
            if (token = patterns.WwwD.exec(dateString)) {
                week = parseInt(token[1], 10) - 1;
                var dayOfWeek = parseInt(token[2], 10) - 1;
                if (!validateWeekDate(year, week, dayOfWeek)) return new Date(NaN);
                return dayOfISOWeekYear(year, week, dayOfWeek);
            }
            return null;
        }(parseYearResult.restDateString, year);
        if (isNaN(date)) return new Date(NaN);
        if (date) {
            var timestamp = date.getTime();
            var time = 0;
            var offset;
            if (dateStrings.time) {
                time = function parseTime(timeString) {
                    var token;
                    var hours;
                    var minutes;
                    if (token = patterns.HH.exec(timeString)) {
                        if (!validateTime(hours = parseFloat(token[1].replace(",", ".")))) return NaN;
                        return hours % 24 * MILLISECONDS_IN_HOUR;
                    }
                    if (token = patterns.HHMM.exec(timeString)) {
                        hours = parseInt(token[1], 10);
                        minutes = parseFloat(token[2].replace(",", "."));
                        if (!validateTime(hours, minutes)) return NaN;
                        return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE$1;
                    }
                    if (token = patterns.HHMMSS.exec(timeString)) {
                        hours = parseInt(token[1], 10);
                        minutes = parseInt(token[2], 10);
                        var seconds = parseFloat(token[3].replace(",", "."));
                        if (!validateTime(hours, minutes, seconds)) return NaN;
                        return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE$1 + 1e3 * seconds;
                    }
                    return null;
                }(dateStrings.time);
                if (isNaN(time)) return new Date(NaN);
            }
            if (dateStrings.timezone) {
                offset = function parseTimezone(timezoneString) {
                    var token;
                    var absoluteOffset;
                    if (token = patterns.timezoneZ.exec(timezoneString)) return 0;
                    var hours;
                    if (token = patterns.timezoneHH.exec(timezoneString)) {
                        if (!validateTimezone(hours = parseInt(token[2], 10))) return NaN;
                        absoluteOffset = hours * MILLISECONDS_IN_HOUR;
                        return "+" === token[1] ? -absoluteOffset : absoluteOffset;
                    }
                    if (token = patterns.timezoneHHMM.exec(timezoneString)) {
                        hours = parseInt(token[2], 10);
                        var minutes = parseInt(token[3], 10);
                        if (!validateTimezone(hours, minutes)) return NaN;
                        absoluteOffset = hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE$1;
                        return "+" === token[1] ? -absoluteOffset : absoluteOffset;
                    }
                    return 0;
                }(dateStrings.timezone);
                if (isNaN(offset)) return new Date(NaN);
            } else {
                offset = getTimezoneOffsetInMilliseconds(new Date(timestamp + time));
                offset = getTimezoneOffsetInMilliseconds(new Date(timestamp + time + offset));
            }
            return new Date(timestamp + time + offset);
        } else return new Date(NaN);
    }
    function dayOfISOWeekYear(isoWeekYear, week, day) {
        week = week || 0;
        day = day || 0;
        var date = new Date(0);
        date.setUTCFullYear(isoWeekYear, 0, 4);
        var diff = 7 * week + day + 1 - (date.getUTCDay() || 7);
        date.setUTCDate(date.getUTCDate() + diff);
        return date;
    }
    var DAYS_IN_MONTH = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
    var DAYS_IN_MONTH_LEAP_YEAR = [ 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
    function isLeapYearIndex(year) {
        return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
    }
    function validateDate(year, month, date) {
        if (month < 0 || month > 11) return false;
        if (null != date) {
            if (date < 1) return false;
            var isLeapYear = isLeapYearIndex(year);
            if (isLeapYear && date > DAYS_IN_MONTH_LEAP_YEAR[month]) return false;
            if (!isLeapYear && date > DAYS_IN_MONTH[month]) return false;
        }
        return true;
    }
    function validateWeekDate(year, week, day) {
        if (week < 0 || week > 52) return false;
        if (null != day && (day < 0 || day > 6)) return false;
        return true;
    }
    function validateTime(hours, minutes, seconds) {
        if (null != hours && (hours < 0 || hours >= 25)) return false;
        if (null != minutes && (minutes < 0 || minutes >= 60)) return false;
        if (null != seconds && (seconds < 0 || seconds >= 60)) return false;
        return true;
    }
    function validateTimezone(hours, minutes) {
        if (null != minutes && (minutes < 0 || minutes > 59)) return false;
        return true;
    }
    var formatDistanceLocale = {
        lessThanXSeconds: {
            one: "less than a second",
            other: "less than {{count}} seconds"
        },
        xSeconds: {
            one: "1 second",
            other: "{{count}} seconds"
        },
        halfAMinute: "half a minute",
        lessThanXMinutes: {
            one: "less than a minute",
            other: "less than {{count}} minutes"
        },
        xMinutes: {
            one: "1 minute",
            other: "{{count}} minutes"
        },
        aboutXHours: {
            one: "about 1 hour",
            other: "about {{count}} hours"
        },
        xHours: {
            one: "1 hour",
            other: "{{count}} hours"
        },
        xDays: {
            one: "1 day",
            other: "{{count}} days"
        },
        aboutXMonths: {
            one: "about 1 month",
            other: "about {{count}} months"
        },
        xMonths: {
            one: "1 month",
            other: "{{count}} months"
        },
        aboutXYears: {
            one: "about 1 year",
            other: "about {{count}} years"
        },
        xYears: {
            one: "1 year",
            other: "{{count}} years"
        },
        overXYears: {
            one: "over 1 year",
            other: "over {{count}} years"
        },
        almostXYears: {
            one: "almost 1 year",
            other: "almost {{count}} years"
        }
    };
    function buildFormatLongFn(args) {
        return function(dirtyOptions) {
            var options = dirtyOptions || {};
            var width = options.width ? String(options.width) : args.defaultWidth;
            return args.formats[width] || args.formats[args.defaultWidth];
        };
    }
    var formatRelativeLocale = {
        lastWeek: "'last' eeee 'at' p",
        yesterday: "'yesterday at' p",
        today: "'today at' p",
        tomorrow: "'tomorrow at' p",
        nextWeek: "eeee 'at' p",
        other: "P"
    };
    function buildLocalizeFn(args) {
        return function(dirtyIndex, dirtyOptions) {
            var options = dirtyOptions || {};
            var width = options.width ? String(options.width) : args.defaultWidth;
            var valuesArray;
            if ("formatting" === (options.context ? String(options.context) : "standalone") && args.formattingValues) valuesArray = args.formattingValues[width] || args.formattingValues[args.defaultFormattingWidth]; else valuesArray = args.values[width] || args.values[args.defaultWidth];
            return valuesArray[args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex];
        };
    }
    function buildMatchFn(args) {
        return function(dirtyString, dirtyOptions) {
            var string = String(dirtyString);
            var options = dirtyOptions || {};
            var width = options.width;
            var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
            var matchResult = string.match(matchPattern);
            if (!matchResult) return null;
            var matchedString = matchResult[0];
            var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
            var value;
            if ("[object Array]" === Object.prototype.toString.call(parsePatterns)) value = parsePatterns.findIndex(function(pattern) {
                return pattern.test(string);
            }); else value = function findKey(object, predicate) {
                for (var key in object) if (object.hasOwnProperty(key) && predicate(object[key])) return key;
            }(parsePatterns, function(pattern) {
                return pattern.test(string);
            });
            value = args.valueCallback ? args.valueCallback(value) : value;
            return {
                value: value = options.valueCallback ? options.valueCallback(value) : value,
                rest: string.slice(matchedString.length)
            };
        };
    }
    var locale = {
        formatDistance: function formatDistance(token, count, options) {
            options = options || {};
            var result;
            if ("string" === typeof formatDistanceLocale[token]) result = formatDistanceLocale[token]; else if (1 === count) result = formatDistanceLocale[token].one; else result = formatDistanceLocale[token].other.replace("{{count}}", count);
            if (options.addSuffix) if (options.comparison > 0) return "in " + result; else return result + " ago";
            return result;
        },
        formatLong: {
            date: buildFormatLongFn({
                formats: {
                    full: "EEEE, MMMM do, y",
                    long: "MMMM do, y",
                    medium: "MMM d, y",
                    short: "MM/dd/yyyy"
                },
                defaultWidth: "full"
            }),
            time: buildFormatLongFn({
                formats: {
                    full: "h:mm:ss a zzzz",
                    long: "h:mm:ss a z",
                    medium: "h:mm:ss a",
                    short: "h:mm a"
                },
                defaultWidth: "full"
            }),
            dateTime: buildFormatLongFn({
                formats: {
                    full: "{{date}} 'at' {{time}}",
                    long: "{{date}} 'at' {{time}}",
                    medium: "{{date}}, {{time}}",
                    short: "{{date}}, {{time}}"
                },
                defaultWidth: "full"
            })
        },
        formatRelative: function formatRelative(token, date, baseDate, options) {
            return formatRelativeLocale[token];
        },
        localize: {
            ordinalNumber: function ordinalNumber(dirtyNumber, dirtyOptions) {
                var number = Number(dirtyNumber);
                var rem100 = number % 100;
                if (rem100 > 20 || rem100 < 10) switch (rem100 % 10) {
                  case 1:
                    return number + "st";

                  case 2:
                    return number + "nd";

                  case 3:
                    return number + "rd";
                }
                return number + "th";
            },
            era: buildLocalizeFn({
                values: {
                    narrow: [ "B", "A" ],
                    abbreviated: [ "BC", "AD" ],
                    wide: [ "Before Christ", "Anno Domini" ]
                },
                defaultWidth: "wide"
            }),
            quarter: buildLocalizeFn({
                values: {
                    narrow: [ "1", "2", "3", "4" ],
                    abbreviated: [ "Q1", "Q2", "Q3", "Q4" ],
                    wide: [ "1st quarter", "2nd quarter", "3rd quarter", "4th quarter" ]
                },
                defaultWidth: "wide",
                argumentCallback: function(quarter) {
                    return Number(quarter) - 1;
                }
            }),
            month: buildLocalizeFn({
                values: {
                    narrow: [ "J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D" ],
                    abbreviated: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
                    wide: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
                },
                defaultWidth: "wide"
            }),
            day: buildLocalizeFn({
                values: {
                    narrow: [ "S", "M", "T", "W", "T", "F", "S" ],
                    short: [ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" ],
                    abbreviated: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
                    wide: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]
                },
                defaultWidth: "wide"
            }),
            dayPeriod: buildLocalizeFn({
                values: {
                    narrow: {
                        am: "a",
                        pm: "p",
                        midnight: "mi",
                        noon: "n",
                        morning: "morning",
                        afternoon: "afternoon",
                        evening: "evening",
                        night: "night"
                    },
                    abbreviated: {
                        am: "AM",
                        pm: "PM",
                        midnight: "midnight",
                        noon: "noon",
                        morning: "morning",
                        afternoon: "afternoon",
                        evening: "evening",
                        night: "night"
                    },
                    wide: {
                        am: "a.m.",
                        pm: "p.m.",
                        midnight: "midnight",
                        noon: "noon",
                        morning: "morning",
                        afternoon: "afternoon",
                        evening: "evening",
                        night: "night"
                    }
                },
                defaultWidth: "wide",
                formattingValues: {
                    narrow: {
                        am: "a",
                        pm: "p",
                        midnight: "mi",
                        noon: "n",
                        morning: "in the morning",
                        afternoon: "in the afternoon",
                        evening: "in the evening",
                        night: "at night"
                    },
                    abbreviated: {
                        am: "AM",
                        pm: "PM",
                        midnight: "midnight",
                        noon: "noon",
                        morning: "in the morning",
                        afternoon: "in the afternoon",
                        evening: "in the evening",
                        night: "at night"
                    },
                    wide: {
                        am: "a.m.",
                        pm: "p.m.",
                        midnight: "midnight",
                        noon: "noon",
                        morning: "in the morning",
                        afternoon: "in the afternoon",
                        evening: "in the evening",
                        night: "at night"
                    }
                },
                defaulFormattingWidth: "wide"
            })
        },
        match: {
            ordinalNumber: function buildMatchPatternFn(args) {
                return function(dirtyString, dirtyOptions) {
                    var string = String(dirtyString);
                    var options = dirtyOptions || {};
                    var matchResult = string.match(args.matchPattern);
                    if (!matchResult) return null;
                    var matchedString = matchResult[0];
                    var parseResult = string.match(args.parsePattern);
                    if (!parseResult) return null;
                    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
                    return {
                        value: value = options.valueCallback ? options.valueCallback(value) : value,
                        rest: string.slice(matchedString.length)
                    };
                };
            }({
                matchPattern: /^(\d+)(th|st|nd|rd)?/i,
                parsePattern: /\d+/i,
                valueCallback: function(value) {
                    return parseInt(value, 10);
                }
            }),
            era: buildMatchFn({
                matchPatterns: {
                    narrow: /^(b|a)/i,
                    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
                    wide: /^(before christ|before common era|anno domini|common era)/i
                },
                defaultMatchWidth: "wide",
                parsePatterns: {
                    any: [ /^b/i, /^(a|c)/i ]
                },
                defaultParseWidth: "any"
            }),
            quarter: buildMatchFn({
                matchPatterns: {
                    narrow: /^[1234]/i,
                    abbreviated: /^q[1234]/i,
                    wide: /^[1234](th|st|nd|rd)? quarter/i
                },
                defaultMatchWidth: "wide",
                parsePatterns: {
                    any: [ /1/i, /2/i, /3/i, /4/i ]
                },
                defaultParseWidth: "any",
                valueCallback: function(index) {
                    return index + 1;
                }
            }),
            month: buildMatchFn({
                matchPatterns: {
                    narrow: /^[jfmasond]/i,
                    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
                    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
                },
                defaultMatchWidth: "wide",
                parsePatterns: {
                    narrow: [ /^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i ],
                    any: [ /^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i ]
                },
                defaultParseWidth: "any"
            }),
            day: buildMatchFn({
                matchPatterns: {
                    narrow: /^[smtwf]/i,
                    short: /^(su|mo|tu|we|th|fr|sa)/i,
                    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
                    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
                },
                defaultMatchWidth: "wide",
                parsePatterns: {
                    narrow: [ /^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i ],
                    any: [ /^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i ]
                },
                defaultParseWidth: "any"
            }),
            dayPeriod: buildMatchFn({
                matchPatterns: {
                    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
                    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
                },
                defaultMatchWidth: "any",
                parsePatterns: {
                    any: {
                        am: /^a/i,
                        pm: /^p/i,
                        midnight: /^mi/i,
                        noon: /^no/i,
                        morning: /morning/i,
                        afternoon: /afternoon/i,
                        evening: /evening/i,
                        night: /night/i
                    }
                },
                defaultParseWidth: "any"
            })
        },
        options: {
            weekStartsOn: 0,
            firstWeekContainsDate: 1
        }
    };
    var MILLISECONDS_IN_DAY = 864e5;
    function startOfUTCISOWeek(dirtyDate, dirtyOptions) {
        if (arguments.length < 1) throw new TypeError("1 argument required, but only " + arguments.length + " present");
        var weekStartsOn = 1;
        var date = toDate(dirtyDate, dirtyOptions);
        var day = date.getUTCDay();
        var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
        date.setUTCDate(date.getUTCDate() - diff);
        date.setUTCHours(0, 0, 0, 0);
        return date;
    }
    function getUTCISOWeekYear(dirtyDate, dirtyOptions) {
        if (arguments.length < 1) throw new TypeError("1 argument required, but only " + arguments.length + " present");
        var date = toDate(dirtyDate, dirtyOptions);
        var year = date.getUTCFullYear();
        var fourthOfJanuaryOfNextYear = new Date(0);
        fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
        fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
        var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear, dirtyOptions);
        var fourthOfJanuaryOfThisYear = new Date(0);
        fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
        fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
        var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear, dirtyOptions);
        if (date.getTime() >= startOfNextYear.getTime()) return year + 1; else if (date.getTime() >= startOfThisYear.getTime()) return year; else return year - 1;
    }
    var MILLISECONDS_IN_WEEK = 6048e5;
    function getUTCISOWeek(dirtyDate, dirtyOptions) {
        if (arguments.length < 1) throw new TypeError("1 argument required, but only " + arguments.length + " present");
        var date = toDate(dirtyDate, dirtyOptions);
        var diff = startOfUTCISOWeek(date, dirtyOptions).getTime() - function startOfUTCISOWeekYear(dirtyDate, dirtyOptions) {
            if (arguments.length < 1) throw new TypeError("1 argument required, but only " + arguments.length + " present");
            var year = getUTCISOWeekYear(dirtyDate, dirtyOptions);
            var fourthOfJanuary = new Date(0);
            fourthOfJanuary.setUTCFullYear(year, 0, 4);
            fourthOfJanuary.setUTCHours(0, 0, 0, 0);
            return startOfUTCISOWeek(fourthOfJanuary, dirtyOptions);
        }(date, dirtyOptions).getTime();
        return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
    }
    function startOfUTCWeek(dirtyDate, dirtyOptions) {
        if (arguments.length < 1) throw new TypeError("1 argument required, but only " + arguments.length + " present");
        var options = dirtyOptions || {};
        var locale = options.locale;
        var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
        var defaultWeekStartsOn = null == localeWeekStartsOn ? 0 : toInteger(localeWeekStartsOn);
        var weekStartsOn = null == options.weekStartsOn ? defaultWeekStartsOn : toInteger(options.weekStartsOn);
        if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
        var date = toDate(dirtyDate, options);
        var day = date.getUTCDay();
        var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
        date.setUTCDate(date.getUTCDate() - diff);
        date.setUTCHours(0, 0, 0, 0);
        return date;
    }
    function getUTCWeekYear(dirtyDate, dirtyOptions) {
        if (arguments.length < 1) throw new TypeError("1 argument required, but only " + arguments.length + " present");
        var date = toDate(dirtyDate, dirtyOptions);
        var year = date.getUTCFullYear();
        var options = dirtyOptions || {};
        var locale = options.locale;
        var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
        var defaultFirstWeekContainsDate = null == localeFirstWeekContainsDate ? 1 : toInteger(localeFirstWeekContainsDate);
        var firstWeekContainsDate = null == options.firstWeekContainsDate ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
        if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
        var firstWeekOfNextYear = new Date(0);
        firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
        firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
        var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, dirtyOptions);
        var firstWeekOfThisYear = new Date(0);
        firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
        firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
        var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, dirtyOptions);
        if (date.getTime() >= startOfNextYear.getTime()) return year + 1; else if (date.getTime() >= startOfThisYear.getTime()) return year; else return year - 1;
    }
    var MILLISECONDS_IN_WEEK$1 = 6048e5;
    function getUTCWeek(dirtyDate, dirtyOptions) {
        if (arguments.length < 1) throw new TypeError("1 argument required, but only " + arguments.length + " present");
        var date = toDate(dirtyDate, dirtyOptions);
        var diff = startOfUTCWeek(date, dirtyOptions).getTime() - function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
            if (arguments.length < 1) throw new TypeError("1 argument required, but only " + arguments.length + " present");
            var options = dirtyOptions || {};
            var locale = options.locale;
            var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
            var defaultFirstWeekContainsDate = null == localeFirstWeekContainsDate ? 1 : toInteger(localeFirstWeekContainsDate);
            var firstWeekContainsDate = null == options.firstWeekContainsDate ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
            var year = getUTCWeekYear(dirtyDate, dirtyOptions);
            var firstWeek = new Date(0);
            firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
            firstWeek.setUTCHours(0, 0, 0, 0);
            return startOfUTCWeek(firstWeek, dirtyOptions);
        }(date, dirtyOptions).getTime();
        return Math.round(diff / MILLISECONDS_IN_WEEK$1) + 1;
    }
    var dayPeriodEnum_midnight = "midnight", dayPeriodEnum_noon = "noon", dayPeriodEnum_morning = "morning", dayPeriodEnum_afternoon = "afternoon", dayPeriodEnum_evening = "evening", dayPeriodEnum_night = "night";
    var formatters = {
        G: function(date, token, localize) {
            var era = date.getUTCFullYear() > 0 ? 1 : 0;
            switch (token) {
              case "G":
              case "GG":
              case "GGG":
                return localize.era(era, {
                    width: "abbreviated"
                });

              case "GGGGG":
                return localize.era(era, {
                    width: "narrow"
                });

              case "GGGG":
              default:
                return localize.era(era, {
                    width: "wide"
                });
            }
        },
        y: function(date, token, localize, options) {
            var signedYear = date.getUTCFullYear();
            var year = signedYear > 0 ? signedYear : 1 - signedYear;
            if ("yy" === token) {
                return addLeadingZeros(year % 100, 2);
            }
            if ("yo" === token) return localize.ordinalNumber(year, {
                unit: "year"
            });
            return addLeadingZeros(year, token.length);
        },
        Y: function(date, token, localize, options) {
            var signedWeekYear = getUTCWeekYear(date, options);
            var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
            if ("YY" === token) {
                return addLeadingZeros(weekYear % 100, 2);
            }
            if ("Yo" === token) return localize.ordinalNumber(weekYear, {
                unit: "year"
            });
            return addLeadingZeros(weekYear, token.length);
        },
        R: function(date, token, localize, options) {
            return addLeadingZeros(getUTCISOWeekYear(date, options), token.length);
        },
        u: function(date, token, localize, options) {
            return addLeadingZeros(date.getUTCFullYear(), token.length);
        },
        Q: function(date, token, localize, options) {
            var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
            switch (token) {
              case "Q":
                return String(quarter);

              case "QQ":
                return addLeadingZeros(quarter, 2);

              case "Qo":
                return localize.ordinalNumber(quarter, {
                    unit: "quarter"
                });

              case "QQQ":
                return localize.quarter(quarter, {
                    width: "abbreviated",
                    context: "formatting"
                });

              case "QQQQQ":
                return localize.quarter(quarter, {
                    width: "narrow",
                    context: "formatting"
                });

              case "QQQQ":
              default:
                return localize.quarter(quarter, {
                    width: "wide",
                    context: "formatting"
                });
            }
        },
        q: function(date, token, localize, options) {
            var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
            switch (token) {
              case "q":
                return String(quarter);

              case "qq":
                return addLeadingZeros(quarter, 2);

              case "qo":
                return localize.ordinalNumber(quarter, {
                    unit: "quarter"
                });

              case "qqq":
                return localize.quarter(quarter, {
                    width: "abbreviated",
                    context: "standalone"
                });

              case "qqqqq":
                return localize.quarter(quarter, {
                    width: "narrow",
                    context: "standalone"
                });

              case "qqqq":
              default:
                return localize.quarter(quarter, {
                    width: "wide",
                    context: "standalone"
                });
            }
        },
        M: function(date, token, localize, options) {
            var month = date.getUTCMonth();
            switch (token) {
              case "M":
                return String(month + 1);

              case "MM":
                return addLeadingZeros(month + 1, 2);

              case "Mo":
                return localize.ordinalNumber(month + 1, {
                    unit: "month"
                });

              case "MMM":
                return localize.month(month, {
                    width: "abbreviated",
                    context: "formatting"
                });

              case "MMMMM":
                return localize.month(month, {
                    width: "narrow",
                    context: "formatting"
                });

              case "MMMM":
              default:
                return localize.month(month, {
                    width: "wide",
                    context: "formatting"
                });
            }
        },
        L: function(date, token, localize, options) {
            var month = date.getUTCMonth();
            switch (token) {
              case "L":
                return String(month + 1);

              case "LL":
                return addLeadingZeros(month + 1, 2);

              case "Lo":
                return localize.ordinalNumber(month + 1, {
                    unit: "month"
                });

              case "LLL":
                return localize.month(month, {
                    width: "abbreviated",
                    context: "standalone"
                });

              case "LLLLL":
                return localize.month(month, {
                    width: "narrow",
                    context: "standalone"
                });

              case "LLLL":
              default:
                return localize.month(month, {
                    width: "wide",
                    context: "standalone"
                });
            }
        },
        w: function(date, token, localize, options) {
            var week = getUTCWeek(date, options);
            if ("wo" === token) return localize.ordinalNumber(week, {
                unit: "week"
            });
            return addLeadingZeros(week, token.length);
        },
        I: function(date, token, localize, options) {
            var isoWeek = getUTCISOWeek(date, options);
            if ("Io" === token) return localize.ordinalNumber(isoWeek, {
                unit: "week"
            });
            return addLeadingZeros(isoWeek, token.length);
        },
        d: function(date, token, localize, options) {
            var dayOfMonth = date.getUTCDate();
            if ("do" === token) return localize.ordinalNumber(dayOfMonth, {
                unit: "date"
            });
            return addLeadingZeros(dayOfMonth, token.length);
        },
        D: function(date, token, localize, options) {
            var dayOfYear = function getUTCDayOfYear(dirtyDate, dirtyOptions) {
                if (arguments.length < 1) throw new TypeError("1 argument required, but only " + arguments.length + " present");
                var date = toDate(dirtyDate, dirtyOptions);
                var timestamp = date.getTime();
                date.setUTCMonth(0, 1);
                date.setUTCHours(0, 0, 0, 0);
                var difference = timestamp - date.getTime();
                return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
            }(date, options);
            if ("Do" === token) return localize.ordinalNumber(dayOfYear, {
                unit: "dayOfYear"
            });
            return addLeadingZeros(dayOfYear, token.length);
        },
        E: function(date, token, localize, options) {
            var dayOfWeek = date.getUTCDay();
            switch (token) {
              case "E":
              case "EE":
              case "EEE":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });

              case "EEEEE":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });

              case "EEEEEE":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });

              case "EEEE":
              default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
            }
        },
        e: function(date, token, localize, options) {
            var dayOfWeek = date.getUTCDay();
            var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
            switch (token) {
              case "e":
                return String(localDayOfWeek);

              case "ee":
                return addLeadingZeros(localDayOfWeek, 2);

              case "eo":
                return localize.ordinalNumber(localDayOfWeek, {
                    unit: "day"
                });

              case "eee":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });

              case "eeeee":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });

              case "eeeeee":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });

              case "eeee":
              default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
            }
        },
        c: function(date, token, localize, options) {
            var dayOfWeek = date.getUTCDay();
            var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
            switch (token) {
              case "c":
                return String(localDayOfWeek);

              case "cc":
                return addLeadingZeros(localDayOfWeek, token.length);

              case "co":
                return localize.ordinalNumber(localDayOfWeek, {
                    unit: "day"
                });

              case "ccc":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "standalone"
                });

              case "ccccc":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "standalone"
                });

              case "cccccc":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "standalone"
                });

              case "cccc":
              default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "standalone"
                });
            }
        },
        i: function(date, token, localize, options) {
            var dayOfWeek = date.getUTCDay();
            var isoDayOfWeek = 0 === dayOfWeek ? 7 : dayOfWeek;
            switch (token) {
              case "i":
                return String(isoDayOfWeek);

              case "ii":
                return addLeadingZeros(isoDayOfWeek, token.length);

              case "io":
                return localize.ordinalNumber(isoDayOfWeek, {
                    unit: "day"
                });

              case "iii":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });

              case "iiiii":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });

              case "iiiiii":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });

              case "iiii":
              default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
            }
        },
        a: function(date, token, localize) {
            var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? "pm" : "am";
            switch (token) {
              case "a":
              case "aa":
              case "aaa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });

              case "aaaaa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });

              case "aaaa":
              default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
            }
        },
        b: function(date, token, localize) {
            var hours = date.getUTCHours();
            var dayPeriodEnumValue;
            if (12 === hours) dayPeriodEnumValue = dayPeriodEnum_noon; else if (0 === hours) dayPeriodEnumValue = dayPeriodEnum_midnight; else dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
            switch (token) {
              case "b":
              case "bb":
              case "bbb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });

              case "bbbbb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });

              case "bbbb":
              default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
            }
        },
        B: function(date, token, localize) {
            var hours = date.getUTCHours();
            var dayPeriodEnumValue;
            if (hours >= 17) dayPeriodEnumValue = dayPeriodEnum_evening; else if (hours >= 12) dayPeriodEnumValue = dayPeriodEnum_afternoon; else if (hours >= 4) dayPeriodEnumValue = dayPeriodEnum_morning; else dayPeriodEnumValue = dayPeriodEnum_night;
            switch (token) {
              case "B":
              case "BB":
              case "BBB":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });

              case "BBBBB":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });

              case "BBBB":
              default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
            }
        },
        h: function(date, token, localize, options) {
            var hours = date.getUTCHours() % 12;
            if (0 === hours) hours = 12;
            if ("ho" === token) return localize.ordinalNumber(hours, {
                unit: "hour"
            });
            return addLeadingZeros(hours, token.length);
        },
        H: function(date, token, localize, options) {
            var hours = date.getUTCHours();
            if ("Ho" === token) return localize.ordinalNumber(hours, {
                unit: "hour"
            });
            return addLeadingZeros(hours, token.length);
        },
        K: function(date, token, localize, options) {
            var hours = date.getUTCHours() % 12;
            if ("Ko" === token) return localize.ordinalNumber(hours, {
                unit: "hour"
            });
            return addLeadingZeros(hours, token.length);
        },
        k: function(date, token, localize, options) {
            var hours = date.getUTCHours();
            if (0 === hours) hours = 24;
            if ("ko" === token) return localize.ordinalNumber(hours, {
                unit: "hour"
            });
            return addLeadingZeros(hours, token.length);
        },
        m: function(date, token, localize, options) {
            var minutes = date.getUTCMinutes();
            if ("mo" === token) return localize.ordinalNumber(minutes, {
                unit: "minute"
            });
            return addLeadingZeros(minutes, token.length);
        },
        s: function(date, token, localize, options) {
            var seconds = date.getUTCSeconds();
            if ("so" === token) return localize.ordinalNumber(seconds, {
                unit: "second"
            });
            return addLeadingZeros(seconds, token.length);
        },
        S: function(date, token, localize, options) {
            var numberOfDigits = token.length;
            var milliseconds = date.getUTCMilliseconds();
            return addLeadingZeros(Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3)), numberOfDigits);
        },
        X: function(date, token, localize, options) {
            var timezoneOffset = (options._originalDate || date).getTimezoneOffset();
            if (0 === timezoneOffset) return "Z";
            switch (token) {
              case "X":
                return formatTimezoneWithOptionalMinutes(timezoneOffset);

              case "XXXX":
              case "XX":
                return formatTimezone(timezoneOffset);

              case "XXXXX":
              case "XXX":
              default:
                return formatTimezone(timezoneOffset, ":");
            }
        },
        x: function(date, token, localize, options) {
            var timezoneOffset = (options._originalDate || date).getTimezoneOffset();
            switch (token) {
              case "x":
                return formatTimezoneWithOptionalMinutes(timezoneOffset);

              case "xxxx":
              case "xx":
                return formatTimezone(timezoneOffset);

              case "xxxxx":
              case "xxx":
              default:
                return formatTimezone(timezoneOffset, ":");
            }
        },
        O: function(date, token, localize, options) {
            var timezoneOffset = (options._originalDate || date).getTimezoneOffset();
            switch (token) {
              case "O":
              case "OO":
              case "OOO":
                return "GMT" + formatTimezoneShort(timezoneOffset, ":");

              case "OOOO":
              default:
                return "GMT" + formatTimezone(timezoneOffset, ":");
            }
        },
        z: function(date, token, localize, options) {
            var timezoneOffset = (options._originalDate || date).getTimezoneOffset();
            switch (token) {
              case "z":
              case "zz":
              case "zzz":
                return "GMT" + formatTimezoneShort(timezoneOffset, ":");

              case "zzzz":
              default:
                return "GMT" + formatTimezone(timezoneOffset, ":");
            }
        },
        t: function(date, token, localize, options) {
            var originalDate = options._originalDate || date;
            return addLeadingZeros(Math.floor(originalDate.getTime() / 1e3), token.length);
        },
        T: function(date, token, localize, options) {
            return addLeadingZeros((options._originalDate || date).getTime(), token.length);
        }
    };
    function addLeadingZeros(number, targetLength) {
        var sign = number < 0 ? "-" : "";
        var output = Math.abs(number).toString();
        while (output.length < targetLength) output = "0" + output;
        return sign + output;
    }
    function formatTimezone(offset, dirtyDelimeter) {
        var delimeter = dirtyDelimeter || "";
        var sign = offset > 0 ? "-" : "+";
        var absOffset = Math.abs(offset);
        return sign + addLeadingZeros(Math.floor(absOffset / 60), 2) + delimeter + addLeadingZeros(absOffset % 60, 2);
    }
    function formatTimezoneWithOptionalMinutes(offset, dirtyDelimeter) {
        if (offset % 60 === 0) {
            return (offset > 0 ? "-" : "+") + addLeadingZeros(Math.abs(offset) / 60, 2);
        }
        return formatTimezone(offset, dirtyDelimeter);
    }
    function formatTimezoneShort(offset, dirtyDelimeter) {
        var sign = offset > 0 ? "-" : "+";
        var absOffset = Math.abs(offset);
        var hours = Math.floor(absOffset / 60);
        var minutes = absOffset % 60;
        if (0 === minutes) return sign + String(hours);
        var delimeter = dirtyDelimeter || "";
        return sign + String(hours) + delimeter + addLeadingZeros(minutes, 2);
    }
    function dateLongFormatter(pattern, formatLong, options) {
        switch (pattern) {
          case "P":
            return formatLong.date({
                width: "short"
            });

          case "PP":
            return formatLong.date({
                width: "medium"
            });

          case "PPP":
            return formatLong.date({
                width: "long"
            });

          case "PPPP":
          default:
            return formatLong.date({
                width: "full"
            });
        }
    }
    function timeLongFormatter(pattern, formatLong, options) {
        switch (pattern) {
          case "p":
            return formatLong.time({
                width: "short"
            });

          case "pp":
            return formatLong.time({
                width: "medium"
            });

          case "ppp":
            return formatLong.time({
                width: "long"
            });

          case "pppp":
          default:
            return formatLong.time({
                width: "full"
            });
        }
    }
    var longFormatters = {
        p: timeLongFormatter,
        P: function dateTimeLongFormatter(pattern, formatLong, options) {
            var matchResult = pattern.match(/(P+)(p+)?/);
            var datePattern = matchResult[1];
            var timePattern = matchResult[2];
            if (!timePattern) return dateLongFormatter(pattern, formatLong);
            var dateTimeFormat;
            switch (datePattern) {
              case "P":
                dateTimeFormat = formatLong.dateTime({
                    width: "short"
                });
                break;

              case "PP":
                dateTimeFormat = formatLong.dateTime({
                    width: "medium"
                });
                break;

              case "PPP":
                dateTimeFormat = formatLong.dateTime({
                    width: "long"
                });
                break;

              case "PPPP":
              default:
                dateTimeFormat = formatLong.dateTime({
                    width: "full"
                });
            }
            return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong)).replace("{{time}}", timeLongFormatter(timePattern, formatLong));
        }
    };
    function subMilliseconds(dirtyDate, dirtyAmount, dirtyOptions) {
        if (arguments.length < 2) throw new TypeError("2 arguments required, but only " + arguments.length + " present");
        return function addMilliseconds(dirtyDate, dirtyAmount, dirtyOptions) {
            if (arguments.length < 2) throw new TypeError("2 arguments required, but only " + arguments.length + " present");
            var timestamp = toDate(dirtyDate, dirtyOptions).getTime();
            var amount = toInteger(dirtyAmount);
            return new Date(timestamp + amount);
        }(dirtyDate, -toInteger(dirtyAmount), dirtyOptions);
    }
    var protectedTokens = [ "D", "DD", "YY", "YYYY" ];
    var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
    var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
    var escapedStringRegExp = /^'(.*?)'?$/;
    var doubleQuoteRegExp = /''/g;
    function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
        if (arguments.length < 2) throw new TypeError("2 arguments required, but only " + arguments.length + " present");
        var formatStr = String(dirtyFormatStr);
        var options = dirtyOptions || {};
        var locale$$1 = options.locale || locale;
        var localeFirstWeekContainsDate = locale$$1.options && locale$$1.options.firstWeekContainsDate;
        var defaultFirstWeekContainsDate = null == localeFirstWeekContainsDate ? 1 : toInteger(localeFirstWeekContainsDate);
        var firstWeekContainsDate = null == options.firstWeekContainsDate ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
        if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
        var localeWeekStartsOn = locale$$1.options && locale$$1.options.weekStartsOn;
        var defaultWeekStartsOn = null == localeWeekStartsOn ? 0 : toInteger(localeWeekStartsOn);
        var weekStartsOn = null == options.weekStartsOn ? defaultWeekStartsOn : toInteger(options.weekStartsOn);
        if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
        if (!locale$$1.localize) throw new RangeError("locale must contain localize property");
        if (!locale$$1.formatLong) throw new RangeError("locale must contain formatLong property");
        var originalDate = toDate(dirtyDate, options);
        if (!function isValid(dirtyDate, dirtyOptions) {
            if (arguments.length < 1) throw new TypeError("1 argument required, but only " + arguments.length + " present");
            var date = toDate(dirtyDate, dirtyOptions);
            return !isNaN(date);
        }(originalDate, options)) return "Invalid Date";
        var utcDate = subMilliseconds(originalDate, getTimezoneOffsetInMilliseconds(originalDate), options);
        var formatterOptions = {
            firstWeekContainsDate: firstWeekContainsDate,
            weekStartsOn: weekStartsOn,
            locale: locale$$1,
            _originalDate: originalDate
        };
        return formatStr.match(longFormattingTokensRegExp).map(function(substring) {
            var firstCharacter = substring[0];
            if ("p" === firstCharacter || "P" === firstCharacter) {
                return (0, longFormatters[firstCharacter])(substring, locale$$1.formatLong, formatterOptions);
            }
            return substring;
        }).join("").match(formattingTokensRegExp).map(function(substring) {
            if ("''" === substring) return "'";
            var firstCharacter = substring[0];
            if ("'" === firstCharacter) return function cleanEscapedString(input) {
                return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
            }(substring);
            var formatter = formatters[firstCharacter];
            if (formatter) {
                if (!options.awareOfUnicodeTokens && function isProtectedToken(token) {
                    return -1 !== protectedTokens.indexOf(token);
                }(substring)) !function throwProtectedError(token) {
                    throw new RangeError("`options.awareOfUnicodeTokens` must be set to `true` to use `" + token + "` token; see: https://git.io/fxCyr");
                }(substring);
                return formatter(utcDate, substring, locale$$1.localize, formatterOptions);
            }
            return substring;
        }).join("");
    }
    external_react_default.a.Component;
    console.log(test_lib_TestA);
} ]);