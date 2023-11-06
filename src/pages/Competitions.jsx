import Layout from "../components/layouts/Layout";

const Competitions = () => {
  return (
    <Layout>
      <section
        id="upcoming-competitions"
        className="p-3 bg-gfg-green dark:bg-custom-dark"
      >
        <h2 className="text-2xl font-bold text-center m-5 text-white">
          Upcoming Competitions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: 3 }, (_, i) => (
            <div key={i} className="my-3">
              <div className="bg-white p-3 shadow-lg rounded-lg flex flex-col items-center">
                <img
                  src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=626&ext=jpg&ga=GA1.1.867424154.1698192000&semt=sph"
                  alt={`Image ${i + 1}`}
                  className="w-full object-contain aspect-auto"
                />
                <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
                  Attempt Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Past Competitons */}

      <section id="past-competitions" className="p-4 bg-slate-100">
        <h2 className="text-2xl font-bold text-center text-black m-5">
          Past Competitions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: 3 }, (_, i) => (
            <div key={i}>
              <div className="bg-white p-3 shadow-lg rounded-lg flex flex-col items-center">
                <img
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFhUVFRcVFRcXFRUXFhYVFxUWGBUXFhgYHSggGBolHRYVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lHyYtLS0tLS0tLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAEDBAYCBwj/xABNEAABAwEEBgYECQkHAwUAAAABAAIRAwQSITEFBkFRYXETIjKBkaFCUrHRNFNigqKzwdLhBxQVIzNyg6PwFiRDc5Ky8WOTwiU1RFTD/8QAGgEAAgMBAQAAAAAAAAAAAAAAAwQAAQIFBv/EADURAAEDAgMFBwMDBAMAAAAAAAEAAhEDIQQSMUFRYaGxEzJxgZHR8AUiwSMz4RQVQlJyssL/2gAMAwEAAhEDEQA/AMs/QlIX7lnaI6RomjVOJotqN61ao3EYwY8VndP0WNtFS6xjWktIAFEATTaSIbULW7cBPFaqhcvU7wY1x6FxJFlaevSfTPbdUdmN3GBgs9rC53SU3GZNCkZkkmARgRRBOWzDiUwsBCGH1fo3f/zpn2olZ7Q59nbSfbHtaeqaLaLnloDi0AlsTgJgmUPqE7Z+dfj6b2g+CIas2y42u3pA0EtMG0dCDF7INa69mOyRs2LMLRTfoOk5p6GnbKp9FxpspsM9kkEkxkJnbsUWmdHsDZZR6G6etftLHlwMBoawYzMnbAzRqytvsAu34ccDRtFoGFSMOkc1v9YxKq6T6rarexepjqn81pTBdhdZeqP5TPcQqUQivoItAmqHS4N6jKjgJjbdAJxyCbS2iBQc1pNTETL2tp7Rk28SBjthHNKG8wHE9amcfziqMx6T7re4Ifp5oBphoa0weq1tCntbjcpFztnpGcOa0NVbNRKFiztwhs973bfkge1d1miYgDua32uJVirZnkBxa67ji4VLpwJwLyGnAHJRWpjmnqtvYSbhYbufa6MGDtzRyWD585p8vptkW8o/CexVXtfdaSQ90FrXPF6R8iCYByBxV+0BovAxLSIkUw7eRDnPdEZIPbDUpvF9l12DgHSfEOPDJRVNJVTIvkA5hoDBhwaAEs4ibJJ8F0haam5wOM5Ge3dJuXj8W2CQMOGEoJphwNTCD1RiLuPO6TJQt1QuMkkneSSVKxh3I1ErBRbVYf32z/5rV9HW13Z5L541Qpf32hJH7T7F9B6Qdg3kjVNV2fpvdH/I9Gr57/KIP/UrX/nH7Fmlp/yjf+52r/NH+1qzKUq98+J6risENATJJJ0NaTJ0klSiSSZOookkmTqKJJJJKKJJJJBQKJFMnKZaUSXSZOoovXdQ/gNH+J9a9JLUP4DR/ifWvSWVSG07U8QAA2C0Q6002EdFaSIuWZk+lGc5kTgg2s7HzSJAxFRg6tq/w6pGdQ9ftbgBzWhrkkPDS4horgXTVc0kinVGFFlNm/bCB63BmGDAW1agOFAEh4Y8EzUe7ae0SjFZCzkQcwOTaTD44u8kS1ZrFj65vwCwAzXbSmTIJL2y4YHsicRvQ8ZYTHC9H0Q0eaVjFe88UL3XF18BsQQcCZIGAdtnAqlpaCq+7SJuioL0kFtorsAdUHp1IpgiZk5yJXZe1p65Y1jmlrmGpRotI3HoWFwEXsO7ggtqstof8ItLQMTD6xdEmTDRO1VTQsre1WfUPyGR5vULSqRmvpazzJLSBDQ25Vr4A7DWeGnPaNio2jT+Yp9LiWkdZlMAjA9Wk0HFvV7Sp/nlBvYs97jUeT9FsBMdL1R2AymPkMaPPNSFcKyx9dwinZmtbjBLC6ATODqpK5r06xnpbQ1gOJb0k7I7LMMhCG17U9/bqOdzJKruVGApCvmlZxnUe8/Jbd83JvzukOxQB4vcXeQgIepGMJMAEncBJWSVakq2gkzDRwaIHcEwqIxY9T7dUF5lmqEQTiAJjgVNo3Um3VoLaDmjfUIYPPHyRWF42ckUUKh0afRUdA2ostFJzYkPESveaOkHVGiTjHJYDQv5MqjXtfWrtBaZusaXfSMexb+jYWMGZJ4mPYmLkXXawFM0qZDxeZHJeJ/lAdOkbSf+p/4tWcRzXL4daJ+MPsCBJWrd5PE9Vw6jcry3cSknTJIawnSTJKQonSTJKQokknShWomSTwnhSFFyuglCUKQomKZOUyiidOmTqKL13UP4DR/ifWvSS1D+A0f4n1r0llUqVW6brqkAOLHl1S6ID7M5sl1pqE5tHofYgWntJ0nUmtFZpffpvhr6jgJo3HdhjGAggZCeO1Y9xlJGhVCtvtLdxJ5D2uLioKtYk7QMoknx8VClCmi0klKQxwCM6L1cr1heDbrZiXSJzmAra0uMNCgvogspFbyw6kMGNR7ncB1R7/NGrFq3ZqZkUwTvdLvajNwtQ62RBTO1eZ2TR9Wr+zpudxAw8ckfsGpFd8F7m0x3uPgMPNba1aSs9AdeoxvCRPgMUDtuvdIYUqbnne7qt9/kt/09JnfPzw1W4pjX56e6L6G/J/YhBqPdUO4m6PALbaN0RZqAApU6be4SvE7drjaqmThTG5gx8TiqFk05aKb77ar728uve1ZzUwft6fD6o9PENadIHBfS9IYKrbKUG8Mj5FeX6u/lRe0htdsj1hwXpeh9N0bU2GOBkTG3wUBi4TzCO8wyNu/01UTnKN5XVqFwkOMRtOUb0C0nrPZ6QMvvHczrHywCM1pdoJTLntaMzjA4ryLXP4daP8w+wIHCJaSqvq1qlQsdNRxdkcicFwdG1bt64QJiSRn4ykqjYcQeK4LmOquc9gJBJMwdpVG6ldVyjYHuyujvVr9DHbVaO5QU7wrbhKzm5g22+0c0Jup7qM0dFMLmtvk3nBvVbvICH6TotZVqMYSWte5onPAkfYtvoOYzO4WmORPRLvhrwwkSRNiDYEC8cTbzVWElzKI0KFBzRNQtdt6khCaM1gtsbmMSPMgdVRTIpU0OD+zrMqd8e1R1NC1gJu+BaoTFoRzgq4vkJ8L9JVDBK8FI6x1Bmx3gVE5pGYIWcyXcxze8CPEJXkry4SUzFZldJkydUoknTJKKL17UP4DR/ifWvSS1D+A0f4n1r0llUvJGhWqWjqrsmEc8PajjCG9kAcgAuXVl0G4beUTKNqo0tCH0ngchPmYV+homiMwXcz9gXHSqVj0UUWDYitLBsRCzta3sta3kAEe0Nav8MiMy07xme9Z2gUQY12Bbg5plvMbEZkNMFMPa6owZdReN+8e3EBWNa9M1bMGmmxpa7AuMm67dA3jjsWGt2nrRV7VV0bm9UeWa9Hc1lqoFrhg4Q4bWuH2g4rzm06M6J5pvvFwMQIaDiIMmSQQRkNqWxQqAyCYSLjIkaIWu7pyhW69E0yHRd3Q7IxxxPMKE1Hzekg75x8Tik4jVYvsUlSxluZAwnGWnuB6x8FxTeBgcQYBwExIOBORw4KCUgtyNisTtPzmrVrYBBb2TiDtjmpdEaWrWWq2rScWuaZjYRtBG4qKy1vRd2TkfVO/lvTV7O4mdkYHfyUde4VtcWmQvXNM2ilpWxMqCWvb1sJMx+0pkbTu5DesG+z9A8BtMVgIMhxDSTs7lxqNpttnrhlQnoahAfHonIOE+B/BHdebCadTpGvcaLsMBEO8JAPtlNseMlhf1jhu9Qm2ua89o4mw0GXXfpO/QgcLIbaLU5+NRraeyOkjDuSpW2i2m5rQwXovG+XSRlmglaqwAQyTtJ6xjvUJfOUeAQnseTcjjdO/3Km0CGyRoXfcfGYtyUukrQ0EXc5nBVa1pc7Eu7vcn6AnIJ/0e7dCuk5zLa/jwXMxFY1nEiwOwaee88VBTrOBBBIIxBnIqJ+Jk5nNWnaPqbkWGqVo/Mvz3q9H0hp3cb+A7W4CcFTnF4DXXQWsOwLOXV0GqToX+q7wXTaFQ5Md4FBhi2Kb/APU+iZtlJyVqhaKtMjMj1TkpLJou0OPVpu78F6xqNoq0NoPpWmz2e4/a9odUukZQPaSoA11k/h8O8fcMzTv2H1j8rD2W2XsmnjuRezmntbePIQtMdSGMEUX4DIOE+YUZ1ZtIyawjg73oT6bgTAsu/SrANGdwnbsHNAH6MoP7VFngAoHaq2Z3oEciQtK/Q9dudJ3cJ9ijNnLcwRzBCCc20FELKVXUNPoVmamotnOT6jfAqpU/J76loHzme4rXtcSYCt0mf8qAoTvp+GdrTHMdCF5xV1AtQ7Jpu749qp2nU22Mzok/ulp+1evUyBsxXFe2NZskrUoDvpOGOgI8D7yhepVgqssVJrqTgRfkQfjXpLYaKt00mmM5/wBxSUsuVUwNNry2TYnd7LwUvXJcoy5cly7YXLlTNcrFIprFo+rU7FNxG+7DfE4I7ZNWn51HtHBhvHxMAeaMyi9/dCBVxtCjao8A7tT6CSqllRdlRrBLnBvMqKrYgzsz87ND69laTlBO1qa/tz4kkfOKun9bpaU2k+Nv5ROyaVptrdUm6/tyIE7Hj7fFSa3aI6VnSNHXYNmBLduPDHxKBiyFuIxC0+gbdfb0bu00YTtZs8MvBBxGFysh3gtUcSKzjx3b/wALzqk17+yGsAOLh2uMuJmccpTV2UmA9Yucd+MHacDnzRnWzRJpVC9pIp1M4nA7jwxQqzsa2Cxt4jGSMs/LAY4ZrgvY5jsqKWqq2ngHBsCcS49XM4AHPZvXFQjHGTOwQ3u/4XZoSZLs9uJUgotAnzOOHBo+1UCqBVVhVsQ9mGBaIP7uw/19qgqVgdk89nIDALmz1rrgfHiNoW2u2HRW5c1Kcfjt5L0TVDSbbXZ3WWti9jYxzcz0XcwY8lhLXTObeyciNu2PMYbJXGjra+hVbUZg5hnmNoPAhW1/ZuWqb8pnYtDpDRgpVHMcMRkd42EKkbIQZZA3gjA92xbu3sZbLO20U8SGzG35TDxBWXp0y7Jrj7Ed7brsYbCMqssUIdaXtzpd4K6oW17rx6J0NEyCTE4CcNpWho2cDtYd32olSbRDHsLmfrIjIE3ZJ47VGsBKlfC1qIltTaBdu8gHZsBlTau6NsdosnSucaVSnVFJ0k9YPHUcQ44Y7RgrNj09S/N7TZgBceGOAaIgNZicMJMAztxQenYqVKnWdePRsYfSi844MAB2yodFWlxFdrWF7CwAPwgNN2/eO8kEYIwyNb9w+e3XRDLK768F2ywi1zM7CD9sbQLb7wUaIgEHNEbJTphwvugEyY3Sh1a0FogNywwlDn1aziAJzyzJSLIJEnqu5isV2VM5QSYOg0O+9l6bYNMWOn+zuu3EODnHKORxUeltO1yZs7mAbnsxzgQZMyeGxYz9C2urDvzRsZgk9HmZOBXTtXbS3/De2I7NVpyn5XLwXZ7CgNJ89Okc14dv1DHuE1AHHhM+ocf+oWhZpzSY2UnZ5dHsMbSNqmGn9LD/AAAfmNPsesVarFaqcH9YIjF7C4YTtaFBZ9PWpuDXNdkMHY5yRjxzQXNaNI9B+CUw3FuH7jXDzH/pjeq3h1r0oM7L9B32OT/20t3pWMn+HU/FZaza72tud/vg9o4nyw3IpQ/KZUHbp782kDE4dw80MiNg5hGbiaR1e4eLQegKN2XWutUcGv0cTJjBrhnxLcFtP0RQPoQeBKwtl/KhSPap7+y4bMs4xJRezflAsju1fb3SMsThsGSC6nm/x/Kdp4pgFqvOPZH62r1Mjqvc3wKHVNUj6NSebfcVasWs9kqGG1gDudgeWO1QWvTbqhLabrtMA3qhwkDMg7G8UE0RtCeo167+46RvsUR0bogtptaatLCRmfWKSr6JttM0mlrKjhjDoIkBxEwkgkMlLVnP7R3idnFfOQqrY6ssouZf6JgcDBLxeniL2X4LDytDo7TQYHOfuYIa1jey0jBogd67eEqsbV+8gDivK4zDuq0HBszaAD6zfctv0y5fWWUbrO05U3xvvCfBErPbhUEtPjmOa7bK1F5hrpPn+QvPH6bVaLtt5fgq1aHqlUCd7lwXornhN0cK9JmC7Di0h7O00zGwjaO8Ku6uoH1ylqlVpaQdF0aeFcHBwMFaq0UWWqh8l4w+SePEHArzqrZjRcWE3XAwSXelGMCOzsk5rU6v6SuVOjcerUOHB/4+5Sa5aHFQCrB6nbgYlu/u9nJefxVGfLoutOYTtWPr1WwGzeI2jLPHmqzKc5nDaGiTGeOwZbSuLMATiCWjE5xHGFdqVmtvAEt4AZ4HwyGO1csAA2WTEyqzbMB2jHyRi7Plio33Z3DbtP4eKZ9c4xIBz3nmVAFal1N00AhuAO/HEbeaiJR/RGqdorwSOjZ6z8+5uZ8lt9D6r2ezw67fePSfBjkMgjNoPdrYfNi22mXIV+TehaWFwcwig8TLsDfGRaDiQRn3KHW7QfQ1ekYajWVDMNODX5kRuOJ8VpbXrFSpm42aj/VZs/eOQVHSukempgPaIvSADOMEYndiUzlZkyg6Lo4fDPJFrb1jLh/+xUH7wPvXbbHaHvaWuLi3JxbdAnPmj1CwuJ6uA3x9m1H7FYAwCcuWJ8FhtMlNPpMaBneTuu7ZwzGfJo8Qhdj0G50dK4E53WAxPEkklGq9HorO9rYEkE45Abyqun9LfmzOq0X3dkHbGbncB4mdiwekNJ1a37R5dtDcmjk0Yd5xWnsaEJ31YUjla0Hht84t5QfFFq2k6QnG+7gOqDz2+asaH1xNBsdBSc71wHh3fn9iyRPFSQsNJbprvXOxeOfihlq93/UTHW/n5RottU/KNUP+A3/UR71NozW91R0VaUA5OpmY/eBKwQhJtQjl/WR2IhrVN/RCwhoMdD2mOBXsFmtjXmGuBO7J3gcUVqag0bW2araYccnDB47wF5Lo/Thbg+KjdodiRxa7MFaGlpuqQPzW0YfFVusW/uuBBI5yVTqgeI08l1xhs7f0XZhuMT7Hl4KprdqLVsFRrekvMeCWODjMNIkOGwiQs3Vp1GjEyNxAK12kba90F7i9wETBgb8PRCFsYajg0DrOMDLE7BJwCW7VzTlE/PVHf9IoZBnsdp2c1mncabDnvCRufFubn2T4LZHVutEuawfvVKY/8kv7L7XOpAcXj7EUOqbRPl/CTf8ASqQ7tVvqPdZexvbe6teozHaCfMg4r0BtpLqbQQ4MgYOMvquA7T/kjY3L7K1m0TTpj9pR7iSfYnr2imzrPqTGQaPZJVOFWp9obHziU9gaVDCBzn1Qegj1JK22g6v6hnf/ALikquq2nmOstMijA64xqYkio4EnqbSCe9JCNB0pCtjaDqjnSbk7DvXgBXdGlfcGjaY96Yq7olwD523TPiMk+xmd8LkNV2pooeiYT2QuoOl2LHYHeNx5jzEjarXTFQ2t0tjeR7V0HUW6ix4KOLW3HzgpG6WBwcC0+I8U9S2DeFTaOoOQVKu/DKVT8VUY2XQUMU72V2rpAbDPLFVKttceHmfwVM1p4LkFJOxTn7fRbiFY6c7/ABzXo+rWkxaKPWxe3qvG8bHd68yCK6u6S6Cs15m6cHcjt+3uVUzBhWH5DKWtVgfQq3JPRulzOOOIO8gnwIQIL1vTGi2WqldJwwc1wxIO8d2Ci0Vq9QoYtbLvWdi78O5LvwpLzFgjBk3GixOidVK9XFw6Np2uHWPJvvhbbRGrtCz4ht549N2J7tg7k9v03Tp9Udd/qtxPech3oJa7bWq9s3W+qwx/qdme6FJpUrC5+eQTtHCOdeLbyj1v09TYbrZe/wBVuz945BArXaq1bB7ob6jDAj5TsyuKFLYwQOGSIWTRhJ3+z8Vk9pV1sOHvqU+1tGkJN+io2Wx7oj5OAHvRqzWDa6AN5wHcrVCzNEwL5G3Jo8iOEZ8lLWqtaLz3TAmMcIzutxmN+PcmadAN1S9b6gXWb5fwPf0UNttVOhTLzyBObjuYNvl3rEWrT1dzy9tRzdzRgAN24ptOaTNZ5ecGjBombrfeUPvBZfewK4z8Y5xnnN/X+I4Lu1W19R157iXb8j4KKRv+iPaCmqMUV4hAc291G1zFr/OGqssohpDoa8bpctPZ7DZ3gO6JobvvOMcCDMn+uKyDKkckS0ZpB1MyDLTmNh5hZH2ldbCVqLvtc0QfOD1hFdO6CoNaX0HEkMvXYfsknEmBInDgspfWtNKpUY59jqua6DfozmCMejnsn5OXsWLvRhlCjnAGyDjqAY8Q2JGzQ+H50I3Ke8pG2ghVLy7BWJSjSW6FEW6UeNp8V0/S1Qx1jg4OGJzaQR7ENldXlsOI0KK/FVnNLS4kGyOnSTz6R8SoX2t29Ug9NfXSzhcw1ah1JVl1cqNz1EXpi5UXhZJcdV6lqYP7nS51PrXpk+pJ/uVL+J9a9JcmrHaO8SjSvISrWjO0eX2hVXFdUqjhg3MxzTwqBrwURosj1NkkS5rR6zjdaOJPukrrSFwG5TcXNwh7m3XOw6zg04sbuBxOeGSFUbM4m84mecn8FbayMvHanRVJG5YdTLiJ06rt7sFTeJyVotnimFIoOIqgphrdyq/m42qN1iGxGrFoqpVN1jSTw2czkO9avRepTRBrun5DcB3uzPdCTbTz6Bac2NV5yLE7ZikaDty9kfoGzFt00WQMoEHxGKHV9UKedN0cHdYeIx9qKaL26GVkUmvNzHr+FkNX9N1KTOjcy8BliQRywVu12qvWMEljPVacTzKv2vQlZnoXhvZj5Z+SGVH3cHSDuMg+CDUe+Iculh6dKkNc3T39V0LM1jdjd6s2azhzQ8YgiYGce3YhrrTJwEjbO0ITpCpUwuuI696Qbm+AIPErdNjGsJcD85JTG/UanbBtKCI2z5i0R04HZvLNZmAAyHk5NbjlvjLvVy6fS6rfVHZjeXDD2d687s2n67YvdeMiZa8cqjOsEfsms9N5b0hIIGVSLs4QbzREje4Jmm+kbNMcDbnt8ORXPfjKpP6o02i4ng3Z4y3xGhPurT2IaNjjIHzGbfGOaBaetoDSwOIc4da9Bc4T5DhkrVrtReeq4NpkT0jocP3WvbLBvk+CGWg3CWhpc5zQcCHXhsLnZFmG3dgnBStf54BK1MYHECmZ28Y4k/Bvm6zpA2lcOoAolV0dHWcGCMSAAKY7jgUqVnByFwcbwa7dDcSBx8kk6iRZwW2uJu2fxyufIcroVdITOEq9aKJacYxyMghVntQXUy1W2oCqpCdjoUxYuDTQS1HY+DKu6PtxpvDmnmEQ0zYm2kdNRwrf4lPLpNzmDa7ht55gWUiTARqxUWsE+lv9ytlBz7bF06WOaaZpVBLeYO8TYdFm+icM2u8CoxUW8p6YePSPsC4qWxjjNSnTdzYwnxIVnAvGhS4NI/5ch7rD3k987lsatKzO/wDjNn5DnM9mCq1bBZtjHcg8nzKyMHV2LFQ02iS8c/ZZwWhWIdF666N8GPFHLdaqVKm0UaLA53pOAe4RuLpXFChWqNmpUpRnD8/oNlFa14MFQUGHQzaeHmSggqJdIjX6Facb90ci4d0wfFWaGg6HWDnvJLRcIAYGunEuEm8I2YIsFYGGJOz1Wx1JP9ypfxPrXp0Q1SsFFtkptDyYv4xn+sekkXtOYq+yI2j1XiKK2ShAB2lR2fRbs3QBuRWk1o4laa+HSmaVGWy5R06CsMoBS0WFxAAJJyAEk9y0WjtWnOxqm6PVGLu85DzRmdo+wW3dkwSUBoWMuIa1pJOQC0ejdVsjVMfJace93u8Uesej6dIQxsbzmTzKsAJlmHGrrlLPxTgYYIG/b/C5s1naxt1jQ0bgPbvKnC4C5qVQ3PM5AYk8gjRCCHSppXBcoum3tcO6f9spMtLHTD2mDBxGB47lFeZdOJVavYmv7QDuYB9qnNdgzc0fOClVgwslubVBa+rtB2TA3i3q+Qw8kJtep0jq1OQcPtHuWvJUL6iotDrELBaG3Xntp1VrN9GeLSD5ZoXaNEuaYLSOYI9q9Lq1FRr4qDBNclauKy7J+ea87p0alIzTc9p+ScDzGR71bs2k3sJLmYnAupfq3kfLHZf3haGpZKLtgxyIlk8iIlV6mhvVcR+9B9ytuFqU/wBt1uHsbJR9ahVtUbB4g9Rf1VKjXo1Hy5wiBFMhtEh/rQf1dQ97ck+mLWKQAumTkHiIHLL/AEnvUdfRlQegx3KD7YQ61U4IBYWwIAM+U/Ys1q1RjDIudsEe/VGw9AOqD7paNkg+xHoOJVF1RzjMkDzPuHBdtrCYSqBU6rJyXJa5zDK61bLUER5q+YK5LVUY9w4qRtqG3BMCq062SRpOCvWRmZU6p2S0DKVcBXRoFpYIS1TMHXTymxTp0eFjMVD0jhk08/cuAx5OI8FZc5M6qN6GWDaVM53Ktbm4AzF058D/AMK1QOGDgobS280jeP8AhQWB8tjaMELKBVPFOCseyHCyvvrFNUrErgN4pFqNlCA6u87V6TqZ8DpfP+teklqb8DpfP+senXHrfuO8Sm2d0LzTEmPJaDRerVR8Gp1G7vTPd6Pf4LQ6O0VSpdlsu9Z2LvHZ3Ii0JqlgQ29QyiOx5danZQaP0dTpCGNjeTi48yr4C4C7aU4AAICXJkydV0F2FStdpcySGSBGN4Dbjgf6KjqW/AGC0EgZAvxy6uzvnkoiAq7WvR1Yzxndw481HTIbMhwJzJEk8y2cOGAVZtcggOdcc6bovF+AEuLpGA4ghWLPaC6ZAujJ2IB3wDiBxyVQtSpWPByIPIyqzqEPcQ0EPAmDBDhIJniLvgnNSm45idhmD805kcl0WuGTu5wnzwPjKohXmUbaT4LSZBEdYiQIg4NaJVWppE0xddcN1ol18ATgBeBGBO4SfarT6piHNMb2kn2dbyVVlFsi6GvDcpi+zkffB4qQoXJnWht0EvdfdkBIdMZBmMcj3pWW0OeMWxEY4QTtGBOI4EjjmAqejxjeJM4HEyRsvOzPLLmqxeQXtio8h4a0eiAWsIBLYwx2rYsUJ11PbKt0YCTukD2ofaA95utEwOt6oOYknF37sRjiV02Q44i/lAJYxoMHsgG+QDnvByU76l117rEGn1iRdF5pF3EgAEhzvBblBNIaqpS0dnIwOYcSXP8A3nSYHyRh7F0x7nSA0CPSmW90ZqzTtQc0GAS6Ya1wccDBkjARtOQ3qvaWOpsJcTcAk3LxuAcjeI4gjlCsOhCNLMbqJx613BxiciIHE4hM9g9JpjlI8pU9GxG40XS0RJDX4ncHEifA71aZY57QAbsYMvnb+WXNaFUhZOEaUEraDo1BN0Y4gsJGe3DAoXatVdrH9zhPmPctt0K5NFCfTpP7zR0RmNqs0cfO682tWgq7fQvcWmfLNDK9nc3tNcOYI9q9UrUwhdpZEk5cckD+20391xHP2PNVUxr6XeaDy9xyXm9wjEdytUbaR2vFXdLWptR3UaA0bYALjv5Ia5i5xHYvIY6ehTY/UaC4Rw3IjRtrSY/o8lYFRAHCDhmEQszyRknMPiHvsQgVcOAMwRKZTEKBlRTXk4DKVIITxCo1R0b7wyOavSuHtBEFZe2R0W2Og30XTXynJVSiS03TlsVglW18hU5sFelan/BKXz/rHpJ9TPgdL5/1r0lx6p/Ud4lPM7oWPsuuwbhUuu4skHzkHyROlr1ZIxLwd1wn2Ly1OtD6hViLHx/iFP6WmDLbfOM8rcF6uzXexn03Dmxyv2XWWyv7NZnImD5rxlWbAev3H2ItHGue8NcBdbcwNEr1appiibzxaGG7MThd5CDPNcWbTNBwu06pDyMXm5LjESScMM9nJeW2usSfJR0X4hFdjGh8AW3+KtjZbJXrD7VQBH60GoTgAQRM5uLhjjGe4QArD65c1wvh7mZuIApB3Foz/qF5pTdBBXpNlcHU2w4wWjAhpHmE85sKmHOufz0XpxeCA1xcSGuOcUmnAjHtHAb1NTq43mFo2QD+qbPrHJzuDfxVesDBaB1YAmL14bnxiBwAj2KtS7QEB8GQMqVJvzsZG72LMLWRGnVHNgEtM7+qe7OVAHX3gPBaRiG4E83OacOWHeobJYScQSZEGo4C8RPoD0RxPhtRGlSDRA/EneTtKpZIC56IjsuPI9Ye/wA1CaOJJZN4yYdIJgCbrojABWi5MXqLOVRiqwYdngRd9qitbnBstyJxIE3W7SBt/rNTlyjdZ2nZE5wSJ5wrWhSVEWGQS195jutDTBcRi2X7R/WChsoqudjgRgG3iWUx/wBQg/rH8PGJRD80zuuLWnNrYH+n1Z2x7cVYpUg0QBAGxUSt5FFZbKKbbok8zPhuHAYBWA1OAuoVSplXF1RuClKjquABJMAYknIBWFl0KrXAgk4AYkrDaf0n0puswpj6Z3nhwVvTunDW6jMKYzO1/wCHBZ+pmkMTjJ+xmm0/hFpYKPvfrsVZwUNZ8c1PXcGidpyH2rrROjjWcS7BjcXHf8kcfYlqLH1XBjRcrNYtpgudoEQ1U0D07ukq4UWn/uPGNwcN57uW6da6bBDGMaBuaAPJZ6tpC6GsYA1rRAA2IdXt87V6rC4JlBsEydq81iKVXGVM77DYNw9zqUZ0hVpvwcAcdwnmgVpo3cjI8+9R1LZgqrrWZRqzGPEJuhhjTEDRMLV17pHLwlTuKqdPjJE7uCkbaQc8FyzRc2ZMjYmXM0gKVwnNctJCYlMXIJN7rIXqGpnwOl8/616S41L+B0v4n1r0649b9x3iU80faF5sNSbb8T9Ol99St1Ftnxf06f30kkqmwBuSdqJbPi/p0/vpUdS7c1wPQ4T8ZS+8kkt03Q4Ebx1VOaC0rmrqdbST+o/mUvvqMam274j+ZS++kkqc8z83oY0RIarWyP2B/wC5S++j2jLJa2tax9ncAMLwqUj4i+kkuk7H1DBgLFFoaTC0lk0RVibvm33q47Q7znTB5lh+1JJMms5U4l2q7Ngq+p9JvvUbtH1vU+k33pJKu2ctMAUZ0dW9T6Tfem/Rtb1PpN96SSrt3IqcaMrep9JvvXbdGVvU+k33pJKu2copG6Mq+p9JvvXQ0dV9Tzb70klO2coSuv0dV9Tzb70v0dV9Tzb70klO2cspjo6r6nm33rJ6yWW11SabKJFMZm/Slx/1ZcEkktia78kDaiUAA6YWfOrdr+IP+ul99Rv1YtYx6An+JS++mSXPlHfVMKtS1NttR4vUoBzN+kYHAByPP1dtLGXGUcAIHXp+JlydJdjBYp2Hp5mtEkm5nQRbULkYhnaVAHGw670Nr6tW0x+p+nT++qztVrd8T/Mp/eSSWnfV6xmw5+62KTQuDqpbfif5lL7y5/slbfif5lL7ySSXP1atuHP3W8gTf2QtvxP8yn95L+yFt+J/mUvvJJIoxtQ7B881eQJxqpbRlSP/AHKf3l1/ZW3fE/zKf3kkkP8ArnnVo9P5VFgXo+qOia7LJTa6mbwvz1qe2o8jbuKSSSVfVOY+KvKF/9k="
                  alt={`Image ${i + 1}`}
                  className="w-full object-contain aspect-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Weekly Contests */}

      <section
        id="weekly-contests"
        className="p-4 bg-gfg-green dark:bg-custom-dark"
      >
        <h2 className="text-2xl font-bold text-center text-white">
          Weekly Contest
        </h2>
        <div className="p-3 space-y-4">
          {Array.from({ length: 3 }, (_, i) => (
            <div key={i} className="my-4">
              <div className="flex text-sm sm:text-lg justify-between items-center bg-custom-grey p-4 rounded-md dark:text-black">
                <div>
                  <p className="font-semibold">Weekly Contest #{i + 1}</p>
                </div>
                <div>
                  <p className="font-semibold text-center">
                    {i === 0 ? "Easy" : i === 1 ? "Medium" : "Hard"}
                  </p>
                </div>
                <button className="bg-green-500 text-white  py-2 px-4 rounded-md hover:bg-green-600">
                  Attempt Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Competitions;
