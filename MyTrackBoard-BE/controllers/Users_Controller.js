const userModel = require("../models/Users_Model");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

const R_JWT_SECRET = process.env.JWT_SECRET;

let refreshTokens = [];

//generate AccessToken

const generateAccessToken = function (user) {
  return jwt.sign({ id: user.id, email: user.email }, "JWT_SECRET", {
    expiresIn: "30m",
  });
};

//generate refreshToken

const generateRefreshtoken = function (user) {
  return jwt.sign({ id: user.id, email: user.email }, "R_JWT_SECRET");
};

module.exports = {
  login: function (req, res) {
    userModel.findOne({ email: req.body.email }, function (err, user) {
      if (err) {
        res
          .status(406)
          .json({ success: false, message: "err login", data: null });
      } else {
        if (user != null) {
          if (bcrypt.compareSync(req.body.password, user.password)) {
            const AccessToken = generateAccessToken(user);

            const refreshToken = generateRefreshtoken(user);

            refreshTokens.push(refreshToken);

            res
              .status(200)
              .json({
                success: true,
                message: "login successful",
                nom: user.nom,
                AccessToken,
                refreshToken,
              });
          } else {
            res.status(406).json({
              success: false,
              message: "incorrect password",
              data: null,
            });
          }
        } else {
          res
            .status(406)
            .json({ success: false, message: "incorrect email", data: null });
        }
      }
    });
  },

  refresh_token: function (req, res, next) {
    //take the refresh token from user

    const refreshToken = req.body.token;

    //send error if there is not token or its invalid

    if (!refreshToken) {
      return res.status(406).json("you are not authenticated");
    }
    if (!refreshTokens.includes(refreshToken)) {
      return res.status(406).json("refresh token is not valid");
    }

    jwt.verify(refreshToken, "R_JWT_SECRET", function (err, user) {
      err && console.log(err);

      refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

      const newAccessToken = generateAccessToken(user);

      const newrefreshToken = generateRefreshtoken(user);

      refreshTokens.push(newrefreshToken);

      res.status(200).json({AccessToken:newAccessToken,refreshToken:newrefreshToken})
    });
  },
  logout:function(req,res){
    
    const refreshToken=req.body.token
    refreshTokens=refreshTokens.filter(token=>token !==refreshToken)

    res.status(200).json("You logged out successfully")
  }
};
