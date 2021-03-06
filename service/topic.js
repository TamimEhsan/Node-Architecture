const Service = require('./base').Service;

const TopicRepository = require('../domain/repository/topic').TopicRepository;

class TopicService extends Service{
    constructor() {
        super();
        this.repo = new TopicRepository();
    }

    list = async function(){
        var topics = await this.repo.findAll();
        return topics;
    }
    fetch = async function(id){
        let topic = await this.repo.findOne(id);
        return topic;
    }
}

exports.TopicService = TopicService;