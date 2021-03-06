/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const PIN_SIDEPANEL = 'PIN_SIDEPANEL';
const TOGGLE_SIDEPANEL = 'TOGGLE_SIDEPANEL';

function toggleSidePanel(toggle) {
    return {
        type: TOGGLE_SIDEPANEL,
        toggle: toggle
    };
}

function pinSidePanel(pin) {
    return {
        type: PIN_SIDEPANEL,
        pin: pin
    };
}

module.exports = {
    PIN_SIDEPANEL,
    TOGGLE_SIDEPANEL,
    toggleSidePanel,
    pinSidePanel
};
