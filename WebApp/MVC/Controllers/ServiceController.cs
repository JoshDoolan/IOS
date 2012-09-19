using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC.Controllers
{
    public class ServiceController : Controller
    {
        //
        // GET: /Service/

        public ActionResult Index()
        {
            return View();
        }

        public JsonResult TestEndPoint()
        {
            return Json(true, JsonRequestBehavior.AllowGet);

        }

    }
}
