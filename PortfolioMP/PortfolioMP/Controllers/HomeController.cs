using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc;
using PortfolioMP.Models;
using System;
using System.Diagnostics;
//using MailKit.Net.Smtp;
//using MimeKit;

namespace PortfolioMP.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        /* Here should be the implementation of sending email via the contact form, but from May 30, 2022 it will be unavailable for google domain (gmail addresses)
        [HttpPost]
        public IActionResult SendMessage(ContactFormModel formData)
        {
            return Json(formData);
            if (!ModelState.IsValid)
            {
                return Json(new { success = false});
            }
            // sending Email implementation
            //...
            return Json(new { success = true });
        }
        */

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        [HttpPost]
        public IActionResult ChangeLanguage(string culture, string returnUrl)
        {
            Response.Cookies.Append(
                CookieRequestCultureProvider.DefaultCookieName,
                CookieRequestCultureProvider.MakeCookieValue(new RequestCulture(culture)),
                    new CookieOptions
                    {
                        Expires = DateTimeOffset.UtcNow.AddDays(7)
                    }
            );

            return LocalRedirect(returnUrl);
        }
    }
}
