
export default class ComplianceUtil {

    static getColor(item) {
        try {
            if (item == null)
                return '';
            if (item.name == "cpu" && item.additionalInfo.length > 0) {
                for (let i = 0; i < item.additionalInfo.length; i++)
                    if (item.additionalInfo[i].includes("CPView"))
                        return 'dommer-compliance-error';
            }
            if (item.result == true)
                return 'dommer-compliance-ok';
            if (item.totalScore == 4)
                return 'dommer-compliance-critical';
            else if (item.totalScore == 3)
                return 'dommer-compliance-high';
            else if (item.totalScore == 2)
                return 'dommer-compliance-warning';
            else if (item.totalScore == 1)
                return 'dommer-compliance-low';
            else if (item.totalScore == 0)
                return 'dommer-compliance-info';
            else
                return 'dommer-compliance-error';
        }
        catch (e) {
            return 'dommer-compliance-error';
        }
    }

    static getColorColumn(series: Array<any>) {
        var colors = ['green'];

        if (series.length > 0 && !series[0].hasConnectivity) {
            colors.unshift('red');
        }

        return colors;
    }

    static getColorPie(series: Array<any>) {
        var colors = ['green', '#8bbc21', '#910000', '#1aadce', '#492970', '#f28f43',
            '#77a1e5', '#c42525', '#a6c96a', '#e6194b', '#3cb44b', '#ffe119', '#4363d8',
            '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff',
            '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080',
            '#ffffff', '#000000'];

        if (series.length > 0 && !series[0].hasConnectivity) {
            colors.unshift('red');
        }

        return colors;
    }

    static getScoreToolTip(item) {
        try {
            if (!item)
                return "";
            if (item.name == "cpu" && item.additionalInfo.length > 0) {
                for (let i = 0; i < item.additionalInfo.length; i++)
                    if (item.additionalInfo[i].includes("CPView"))
                        return "Erro"
            }
            if (item.result == true)
                return "Está Ok ";
            if (item.totalScore == 4)
                return "Crítico";
            else if (item.totalScore == 3)
                return "Risco Elevado";
            else if (item.totalScore == 2)
                return "Atenção";
            else if (item.totalScore == 1)
                return "Informação";
            else
                return "Erro";
        }
        catch (e) {
            return "Erro";
        }
    }

    static getScoreToolTipByKey(key, row) {
        try {
            const item = row.find(c => c.key === key.key).value;
            if (!item)
                return "";
            if (item.name == "cpu" && item.additionalInfo.length > 0) {
                for (let i = 0; i < item.additionalInfo.length; i++)
                    if (item.additionalInfo[i].includes("CPView"))
                        return "Erro"
            }
            if (item.result == true)
                return "Está Ok ";
            if (item.totalScore == 4)
                return "Crítico";
            else if (item.totalScore == 3)
                return "Risco Elevado";
            else if (item.totalScore == 2)
                return "Atenção";
            else if (item.totalScore == 1)
                return "Informação";
            else
                return "Erro";
        }
        catch (e) {
            return "Erro";
        }

    }

    static getScore(item, sizeFa?) {
        try {
            if (!item)
                return "";
            if (item.name == "cpu" && item.additionalInfo.length > 0) {
                for (let i = 0; i < item.additionalInfo.length; i++)
                    if (item.additionalInfo[i].includes("CPView"))
                        return "fa fa-bug dommer-compliance-error " + sizeFa;
            }
            if (item.result == true)
                return "fa fa-check-circle dommer-compliance-ok " + sizeFa;
            if (item.totalScore == 4)
                return "fa fa-times-circle dommer-compliance-critical " + sizeFa;
            else if (item.totalScore == 3)
                return "fa fa-exclamation-circle dommer-compliance-high " + sizeFa;
            else if (item.totalScore == 2)
                return "fa fa-exclamation-triangle dommer-compliance-warning " + sizeFa;
            else if (item.totalScore == 1)
                return "fa fa-exclamation-circle dommer-compliance-low " + sizeFa;
            else if (item.totalScore == 0)
                return "fa fa-info-circle dommer-compliance-info " + sizeFa;
            else
                return "fa fa-bug dommer-compliance-error " + sizeFa;
        }
        catch (e) {
            return "fa fa-bug dommer-compliance-error " + sizeFa;
        }
    }

    static getScoreByKey(key, row, sizeFa) {
        try {
            const item = row.find(c => c.key === key.key).value;
            if (!item)
                return "";
            if (item.name == "cpu" && item.additionalInfo.length > 0) {
                for (let i = 0; i < item.additionalInfo.length; i++)
                    if (item.additionalInfo[i].includes("CPView"))
                        return "fa fa-bug dommer-compliance-error " + sizeFa;
            }
            if (item.result == true)
                return "fa fa-check-circle dommer-compliance-ok " + sizeFa;
            if (item.totalScore == 4)
                return "fa fa-times-circle dommer-compliance-critical " + sizeFa;
            else if (item.totalScore == 3)
                return "fa fa-exclamation-circle dommer-compliance-high " + sizeFa;
            else if (item.totalScore == 2)
                return "fa fa-exclamation-triangle dommer-compliance-warning " + sizeFa;
            else if (item.totalScore == 1)
                return "fa fa-info-circle dommer-compliance-info " + sizeFa;
            else
                return "fa fa-bug dommer-compliance-error " + sizeFa;
        }
        catch (e) {
            return "fa fa-bug dommer-compliance-error " + sizeFa;
        }
    }

    static getBgColor(key, row) {
        try {
            const item = row.find(c => c.key === key.key).value;
            if (item == null)
                return '';
            if (item.name == "cpu" && item.additionalInfo.length > 0) {
                for (let i = 0; i < item.additionalInfo.length; i++)
                    if (item.additionalInfo[i].includes("CPView"))
                        return 'dommer-heat-error';
            }
            if (item.result == true)
                return 'dommer-heat-ok';
            if (item.totalScore == 4)
                return 'dommer-heat-critical';
            else if (item.totalScore == 3)
                return 'dommer-heat-high';
            else if (item.totalScore == 2)
                return 'dommer-heat-warning';
            else if (item.totalScore == 1)
                return 'dommer-heat-info';
            else
                return 'dommer-heat-error';
        }
        catch (e) {
            return 'dommer-heat-error';
        }
    }
}
