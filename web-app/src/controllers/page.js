class PageController {
  /*
  * Page controller class is used to set the responses for the https
  * requests of the routes/web/pages.js
  */
  static login = async (req, res) => {
    //Renders the ejs page in the views folder
    res.render('login');
  };

  static createAccount = async (req, res) => {
        res.render('create-account');
  };

  static home = async (req, res) => {
    const routePath = req.route.path;
    res.render(
      'home/index',
      {
        //Passes the route path as variable to the template engine renders some condition
        routePath
      },
    );
  };

  static productDetail = async (req, res) => {
    const routePath = req.route.path;
    res.render(
        'product/detail',
        {
          routePath
        },
    );
  };

    static orderDetail = async (req, res) => {
        const routePath = req.route.path;
        res.render(
            'orders/detail',
            {
                routePath
            },
        );
    };

  static me = async (req, res) => {
        const routePath = req.route.path;
        res.render(
            'user/view',
            {
                routePath
            },
        );
  };

  static orders = async (req, res) => {
        const routePath = req.route.path;
        res.render(
            'orders/list',
            {
                routePath
            },
        );
  };

    static cart = async (req, res) => {
        const routePath = req.route.path;
        res.render(
            'cart/index',
            {
                routePath
            },
        );
    };
}

export default PageController;
