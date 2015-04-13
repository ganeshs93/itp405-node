var Dvd = require('./../models/Dvds');

module.exports = {
    search: function(req, res) {
        console.log(req.query.dvd_title);
        console.log(req.query.award_number);
        if(req.query.award_number == 0)
        {
            Dvd.findAll({
                where: {
                    title: {
                        like: '%' + req.query.dvd_title + '%' 
                    },
                    award: 'Oscar'
                }
            }).then(function(results){
                res.render('dvds', {
                    dvds: results,
                    term: req.query.dvd_title
                });
            });
        }
        else
        {
            Dvd.findAll({
                where: {
                    title: {
                        like: '%' + req.query.dvd_title + '%'
                    },
                    award: 'Grammy'
                }
            }).then(function(results){
                res.render('dvds', {
                    dvds: results,
                    term: req.query.dvd_title
                });
            }); 
        }
    }
};
