module.exports = function(modules, configurations, Lclasses) {
    this.successfull = true;
    this.progress = {

    }

    this.results = {

    }

    this.addSuccess = function(name) {
        this.progress[name] = true;
    }

    this.addFail = function(name) {
        this.progress[name] = false;
        this.successfull = false;
    }

    this.addResult = function(name, result) {
        if (!(this.results[name])) {
            this.results[name] = result;
        } else {
            throw error(new string('ERROR: tried to add ? again! The results to add were: ? !', name, result))
        }
    }

}