const paginas = {

    index: (req, res)=>{
        return res.render("index");
    },

    professor:(req, res)=>{
        return res.render("professor");
    },

    login:(req, res)=>{
        return res.render("login");
    },

    cadastro:(req, res)=>{
        return res.render("cadastro");
    },

    cursos:(req, res)=>{
        return res.render("cursos");
    },

    intranet:(req, res)=>{
        return res.render("intranet");
    },

    teste:(req, res)=>{
        return res.render("login2");
    },

};

module.exports = paginas;