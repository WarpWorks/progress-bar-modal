# @warp-works/progress-bar-modal

This is a very simple Bootstrap's progress bar in a modal.

This modal is used within [WarpJS](https://github.com/WarpWorks/warpjs). This
code needs to be build with `webpack` and `handlebars-loader`.

## Usage

    const ProgressBarModal = require('@warp-works/progress-bar-modal');

    ProgressBarModal.show($, 25);

    ProgressBarModal.show($, 90);
    ProgressBarModal.show($, 100);
    ProgressBarModal.hide();
