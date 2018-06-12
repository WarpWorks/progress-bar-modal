const template = require('./template.hbs');
const contentTemplate = require('./content.hbs');

class ProgressBarModal {
    static show($, percent) {
        if (!ProgressBarModal.modal) {
            ProgressBarModal.modal = $(template());
        }

        ProgressBarModal.modal.html(contentTemplate({percent}));
        ProgressBarModal.modal.modal('show');
    }

    static hide() {
        if (ProgressBarModal.modal) {
            ProgressBarModal.modal.modal('hide');
        }
    }
}

module.exports = ProgressBarModal;
