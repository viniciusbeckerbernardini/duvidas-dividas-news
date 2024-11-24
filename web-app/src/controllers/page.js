class PageController {
  // Common pages
  static login = async (req, res) => {
    res.render('login');
  };

  static home = async (req, res) => {
    const routePath = req.route.path;
    res.render(
      'home/index',
      {
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
}

export default PageController;
