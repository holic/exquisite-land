// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import './interfaces/IFont.sol';

contract VT323Font is IFont {
  string vt323 =
    'data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAABpUAA4AAAAAwJAAABn6AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGigbIByEWAZgAIRkEQgKgt9ogpQEC4NUAAE2AiQDhxQEIAWDMAeFORvml6OikvS+KMrkKoqiYhXI/kMCPWC82kGBwljZDsou564oxgTJvVRicVwwsZ1LjBhAkBDIf6db9FtOl+8Ziu+MUe6J/36v23N/EmqzVVehqmrV2T4e7WE8ODI+lufD4+n/uUnaAbqT03QAOhWTOrh9W/Yg45sE9fvpXhg0GRmFLjYa9Vdp6yuJNEtZ5zvPr1+6mci390PVSFQRslTFoNKLsEiIRXerd2+vJT99KQHuf27lm+l4UFB1qXUk7a3yqb4S4Yhi3aVwIKkiK1yYYfyuamXlccq6IGQy0/H8+q32UJ9ke0gR64kVsZc7H/AtOskkfF3RIr5F7BAbVKeI6S+T8CUqg8nC8+/c669M3x9jmrZfAlIGhEbPiJ1Zv8D4a79W/97iGm0TpYi2RIbZ494dy8OtmlnIxKNRRSwUknvJtESEnEjuf+3TT+ppz7ZBmA0FsCA281vymZFs3b/qZbWyL3B9t8/t9lN3P0mW15KzLgTlowkMgIEBhEmDbDbD4ut6Vc/uWGSSP1aCqEsthCK3+3DPPIet/4x2z6e7SSSJ7tVde3H0opQCBSyo/f9cCpgGUDicIYihhmOMMBJxxEMEAZNcuSPrLIUahjigNUDApNVRCiZW3DxrEHvgKthVgXEBpIvKTAphlaqmSFop1RR5m2kaRen2pnDjVplP0SOOJ4xaVXdvacySsUxYMY4payZhxoZJmbNVb8CCHfsTRBgiTNz4qKy9tQHTHXTaLsyli+lKup5udbobhJQaUAkF5SihTHGWEVvly6132ewxKSjGfLAIW0SYs4NxRFQFiTPaQgEx7yWQZuDb5lISayVOhGjHU4yF5WdirTHGrFqMKzJ4dj+cMdrYNOHF8SxD88cdilFkGIbSt8m0Cgkuyp3OsCb9juUfQWWkdcXYcXwkbq7OPFx8ZjYJ1F2VA87r6bOD4AeAftXC+5hP5XFTVojTsDlkabuGXscPFOQdyEvxYB0LCnRgGYuAZVzuBnCA4liDGeFijfR/ZFExx+tiPa3n64fUmbpTL+pH42gGFen2400vay+7/ycwg+LFWR2yKOUOB9SRuroWewmSRuAaaJvw7/Of239m/wXAzwfwcx4d60zmln6n2+lOI4AdcOYu5AkicvNYH/7jOouttNQxV1yzymZbzHHKQtsts8YCq11wznnLXcUxZcaCFXsOHDlx54Hy5MVHiDDheDKCaDFixUmw0Vyb3LfWB4kyZcmRp0ixEkoVKlWpVqNOq3YdOnXr0UfUb6Ah1rtrg0sOW+KIE4466Z4b3rtphJ0u2+GWj+64aKpp3njounnemmKkXWaZabYVDElIGTNgxIQ5O9Zs2HLjzIUrS94C+PITxN8ZgaLIRYgUL1SXVEmSpUuRJkO2QvkUCpRT0yiVq5ZWvQbNGp3VpJeO3gCDtBksWIttttpnv70Ikpo5wBDIH+QKOPyHkzGQDEgHAFDY1PSc371Uegj/R0TmTpDldSPjZwhSX8aCHCFOBXy2F7oOq+PRzo9iRuQunFE61QEQUVsHI9/Oc8Euifh8Pu0FiXcHpaCeJ0skt8rUJgjyIGlgCrZEojqW/C8hQ8A8uNDi05QLIvePQPXvujMJpQYJnTEJSQB/HL967L5Z+o7+jg++KRnj+T/qbWxkdFxl5gZmXw1ij/II/l8+/032ZT+Xkxz498pDfIv7RHjIXMDh3SPAT7u+iWlOXXGB/9bFeXxXL34yvCDhBUDvXVjgZoZRa+4iG/5KuVrcI4D/Yevb3ss93AsHn2dvHjAzQGvOG4ODtRhnG/mMUhuGk3DYd2L6XMd8x/qOgV+y6t119+4Ov9Nwe5FxZLpnf7zTqdVIQZ+D8N3z6/+9S7twq5Styamhp9gHhYLhcbawwBFP6n3+p1A4Txj8XvKdNfw0x6qyshKzqZw/JrKwwGHzVOf/Dc/4zsvaeoSR3hLikL8nCGHIo/CE3gWEPFpD7VIOd2PKFsVx2rUNcO8EzAyZVmZWhuIwDV8nhWzgODh4SkMqqCBBXnboun9Zxnea+Ns9kj5OByDsaC+F+KF54UisqUCmf6z/57gvwvzQda8hJuhz9i2eETYZ7KX8NUGHApjoZF1ehRidgpkCpCRNJ9bycs2bs1TK0hjc7ZNRENA0bPVM2QIk4T8L/VGKg95RqecStLwmsak/K4qjgvMtgKhQCTrB5mVsx+QBVe24c/0RdKKDmiVBaPQC9VrpbUf0kGBkEhsUzpPHc8IuA/G9vYFBdHKUuXg1+4VDV/C5wG46uPd152L27e+7DKC0UxCUvRIofzSZvcF9lFjOSS1EUwE0T2aOeI2xnNDF1T7O/cJjKrubc1Tac7DqVhITrlGhMPGtvmKJ+miLx05Km8C5Zmp+PuFl79Xc1frL7tgc/ISA0hn2I9S9h82siS2WvTDVmndKmOvd7gJ2OwRQOYY4cHZ2t4CzwobuLO3tiwcwtufTjeRgMwNtRC0CgJi/lJ4idLfdfDOKwMvehwlXu21lRewGilUF82/bKPnHwko+Pop0FWwC47NYd9S2gmS73VsB1DScOKxdVYmtHCQj56WkcFqQRnpIeCKjKmWbRFOerDWPW0XHAbSURl6yPEfUmBVZce1NiQpmcCWgfmkATcKunEbsGXKPML6W8ALroDiLF1x8wpwkcDU5IZBxpZiYRxU0unUhwsVKByy+yUdpjuThiyopzqZdoW7WKihvQNOk2HH5SsqIS9Rl5d4qUxk6Cebo2WgJIESJtUs1rNiTBJLFByayc8A7HHUxia/cS/KBUUJ5jJf71CS9dYy0K3Rhy3Uul+mtI6/G/bYBVYytAs13mzdAdW6irXzHuqP8IIwe406HGLRySPmnblHKeKeAVJRblJiBZpQ+XGNT6RO3axkTSJQdpuLptRpB4RrxK672G4qUBwlcBYC+JcELMxFpqjntTbu/3UMdXV2Gaq7bGlHS4tteoLpsO6HWIizJAwfLsAgKb4d1hAVf6/tUjObJ7opYuUOxx/YYaZemzBcyu/XeOrtT0LXhe845hp+EsAwPK3OrEptpstkWO97f6KVfnkHi0gbLUS49ZU0vPmgjvHdC1rwYXRVU5tzSxCQVfJ/on7Y4ugkRTkwramNccuAP679KCyNmCWm3g3GFzPVxN2PiCVatrr1HRICjF5c3vUnX4ARXlWlNogjF+pD9bRwQd6yH+kogHG3g7PHgOIGpoqq5KVfGoZc5EeytTqJZAXp6txnvmTFZm5kQoOL44slcBrbXLqfq3kitFL7cUkyk977RMe1Xh6oisYQUUYT2XrqmJGSm0ZKlz0tl2kkEvt01y9pC1L6kkbAFIgaoMw/3o/pkcYxGwB8NmbSWMFYqRbLzk7XGZF4skD7olM+wU6/UH2EBThJ8jKwcvIliWcYE5zlLjCIfGtUq7c8WSmOvS5VOZuO9XeFUs/N+yPLSzEX5obcPduW/YUxossJtw52FHTea+rpgAp/N1KNW7ZKd5bg4vTC8jVbzzAfWNAa1/3+zRtqD3fKvhAvOVmnp7rWslHj2alVc8pVUEukHMZG3TjKGxaZXJvtUz+oat7RXugDAAiUvwg3JGrTYFfneOnl7iz7PeaXhbnOtnEEnbolvTjytaCK9FWr6IWizClnD0JbwszVuH+3zstMCcHPCMHWTreBDgYi1fPnSBXte7KpxBUT0Wgh8ZQ5hvQa+41ckMh9Sx58oXXrJyk69seooldP5thD7JPHNtDFOZGZT1g3kMc/+iKRE2tGfZa5G43oVKN1Ktcq68jLud2TGMqoQ0nal0VBeDXOls1BJF2nZEnNNSsq1qaqO3wytlTLEAM2rzE1mESj+rmh+bzfDqVhbGxdhWIBCssE1LJIe/35evMuYsHIfmGnrVcQUa7TUz0yp5XaHUyXRiVowJvYuq8KQNvcbWm7o+0DD9xgbIsNxAWp5yNdqVb/2Wlivz0xUw04aksB7KDCo9KIxiEmUeKleYfCqPU+e6WJ7gf5mQ7mG2taFMpwaVtly1AXL+r94TCVa4iy1wjutdGkWpS/NXCYUUb/zwvjHZPuVmaZGo214u4F4s96LZR/DU5Xm2SSSIXiEZK9HZqRTE3p0ltCHkRaMLC90M/w2Hf+Y4wX8soTfbI2YHwmMGD4ckw9Yu+iArojTHUnevBH7FUb8w3FlAV9TyFA5BseJITovKIIVtkBSutpwM90+ywFGB4cfgFKctRRHIbnZtkte1zpJfxybve4r6j6DQba4BLIlDKNOZQK+i37TjXP6GBRLA1WH9d4PAad6d8zBSCVI6hgIq0y+xVF7ToQEcCj2je95mKBb86aoQZGvMGow8unZ+BaAUuE3qNwSn9TyVD5Lg2CK8i1Rb53c+lIOf9eD+s201TVRK5xAEv5zBsmyJUWsKrhzqA5GibrCDukYm+0bSWr8dFydI3J5F4CUDGPqChc19TzDCb+CeMbwpVq8zmCQzBb66xLsQRa7tNC90BYIRw4vBkrHO0EPPYPRqsHXQFs+cDxvZafptsiuuWq+u1Kt407GNFF4wTFDqWkD9hnvv5YJEcr/jGENDuA3Mfny1GZkKOu5bMJjedbiwd0p2QSLJ7dbYPHo7pSF4GjUdFtGAMjCPjC1P0PfT7eZxv6fNM5GMx5u1CGvgkD+67xgRbzPXmGPuFAVX91d7n0ew6vj10H11pVOPrsHOnHYKKvdRa86LRpUgmSQrcTa9J51b85tjnPpdBaGOgLnNo8lPXcgf8r+w0jI4DLlSWdsJx6m3/OgxnnuY4TPm+rABxbRZYj6qwxU4HwaCwDObsoholCkcWmtW70pbDGsd2dbA8vbDoHl7Q5NgDehqGRNRGc9RzlDPZuTgowZtkgE6ZQwDVJxXRZa3LZsb01VG1+0cWCNytCMUIvzzJHUrWHbEvOI7v2w8QXIMLUzDMjFcVb8bZmIt7ajt+r0TvULKIE7DdMuiBx1wSEh3IBKQvNPxjTGf3Ve4cSl5I3gj21fusXromHjcvJwZoyZjKV7+JzacevXkXN+6wTkpIi5cpBuL0/ktIo0UftxM0w2br59MgtDp77FowmgowQevvarJb2zRc3iIw6tTsdcBu1Tq77bNLXjix0n3YgOr4KvN44gEjsx5RW6H9leivu7RE36S8uNs79g32SQKS5yWNzdMR5H13z1Ptbg3tRJyNxYjONKdWWDHL5ikTItLwLFRUp0ZaczaLKN0mGEKNmzmU0xVSB2NgXE+G26LBfhkbs11NyFM5iscicOmZz7c1siU+yfr4Avumlv68u8IBDNC6vXbwz5lJcY9NT0uO5e2LImGHS0257o9SMurytVZDAtlRcjDH8cmvnyBW9xKGjsMzi/YD9ARSkmYytJa4/6y2Jc8k94NhmeFMtjkYOQqF1OHXfuPns8Wh0jp8RfzibyZwqcU+3CJXxZqy+lgzbE7w0uzK3KWFj8me0Ci3Nzu2rQwyDeXhiEMGe8OgmlgUwRIBzXF0KOqhbhWpGYCt+d63x5OTPFRZ6WH2PKYiRQc+Ls99KeVlIW3Kx0DDHPSd16XQ8yL8ZckjB3LitapVEntL4ibiX0oTdNMugHuzVfpeDoN/dATjjeYPNy9oO5E52nN5O1ZscR3yxhHy5R3Ov1sAGy5YWCgZIIzGEP5x/Aes2lWpqjBBe4+uxG6yoG4/YB7VtT43rutu4Ebu4+oGV+4BKVCvfUi/DOWMjtCYZzKkX4pg7DNZ5prneQpsDbopHmcolvhSPCI5zYxIzvN3805LHM43elo2+x8LsDT9IR5VZB9iZaNmUaawNFwDoKPqR+3G2stzPtMlK05QaLdDO+kr7FHb8QRFAs1RVjZvES03bhdWjXlOpcGiK4tDLCkx8M52TJHPiWnxye9ToPcAhlS27mZAwBfZP44KAJfi0euMxsiqopHCYZHg/rT5sraHUZV9uenJ668haZFzWCqFL823Mcb4FbMybMGICvFWity46bkAkkVHQvArWWbZwkvDmc9wn1hwOTuZ9e4nnvZm+po9kRPTiuKmGDfKv3n0xw5sRyNVdsKvwoVC7/96Bl4B7r9Yuq27NMG7VE3YldPKedxHHitaBxQnGOeEwwHMU+Bd3HA7uwITt9gaPXDz4vnWx/9fAHFioul/4QkNPDvA+uXoF1AEmAZ1+LT+QR/JXh7eFleIaJbwNEyAQJRTkZxQLMIGI+pbiQ2IiWug5NlbvhZMZCOXk16FRsHpz21UbWl8k2zJ8o+o7+OjCDcUIdzvXO98ri+rJEkVKb5iaszyV2iFLU6Mr3uN4/64ynv4i+I+C2p9ZuWo4leA/wRXN1hY71rJpP4dI09ee5XE2d5pkzUJEaRiMoZywcQxwaAgbkMdRJd826yc0Q74tsYiSyOY34PLSPQODjCsRc9VJw+jXh26+Dg3AsKqzzTZw0HsMGDPKhGsETM7rC8QtuAsZ7be94oP8IQlz38MtOj5KcXserkbLQK4PmLf6IRauT69BEltWZ1/QgmLURti97aJMYxI9/SAS+5Wm7VNil4NeHysfnorNH/iDO7XK+kYPPvnwDObO6NcBBotsA4kvfBPk4X9LYOMWcBs+qATIwUQfxXBUT/KpQ7jADVKrxQfDhe9Ag59zxm2ZGnOeKBOdKEjzEYgLLWUJm1P0+hj3Lj4YPu78R5VoMVBJKkP9rWyTxlxkoJgX6s0kmNWngtBcNxCRWW8cLHE4zGa4NcNz/iK14aY9FUY9WoK5hDc3VDktiRfMTaBAFz2A54SgEe/TXhoNmil98KOaD5uCm9iGLojp4Xr/NQPf/X+DgS6MuHj9kdwnxJaH+9K8zaJzkXYeiwl24510Xo8ZdMwjLHojcD4Yb7ezJ5U14Y4WnWQy/JO7vDK2EFJdSxi1T4h3WnS1hJzO8881FaQmxljfrUr35ShEeOW8ZxpxAMKxjiDgI42sBowbYZQxWkaIH+sZpkWGJT/SVJQmhuAM6ATQWuALwHFN+LqqGpfLz4AAPcAUSCGzI7hjyWbzkayHIdifkiCOtRWvMgw0JfGyEjX0DZmIontffbj2cY3RVoa6V8L/QP4VAxqlvZkfwrgC/FWgvq2n41aAD9XApMhzT01NU6YisDtdXPnX0psZarGRkgEwsGcuOjDy/vFs1vEhzTFJJSqowS6lfBXO2yqy5aNfgZxqvtR8Tjjq65iX9nmlc6hGJdmUQP32h0SFIPfLy0hnDj9oT/4ONRG6VLcsuiTz/rg2F+9bnrb6EkHSkhhugT5KtXxAYNDUfNEurlgYU59DWx5Kn+AE0zLA4rJyx2hKOQD8BZ82fe+V3TmdsoQHJqwCi54qzlaY4q3Ml5O9BnZwbka310zgyDizoGYSN9BtLLSyb1KcMiTNyJVdV56pVOKrW9K8teCUzkt8nmr/qCjOjJZCk6H8IEyffSoFsW+MzFQ8TwHSf3oxY1lWkc6O9LqpLxU44+3h0RPPfRmgXblzwmxbr88so7LnwbdmV+C4JkGFVEPNw0p4H9zWE/bJKceMLaHsv2KfrTTnWHGsYGsyam7os6FsrrNz9u7LTfGZFu2E4qfXHTdfEshHPnqBPX+pfb4JmFEmCrv6DAjRzSdJSJL9L0DXsmq9VQbSgmZbcT/Q4Oxr/XsI15I98l/GkCajo7iU8xrDYjRatzkrAJg6MeRazraaOXD7XfEHMTDuvCFpbpbR2QmsvBPuEgQAuBZIoOmjD5XPNF62zysC8FLo+WKVQgzUft65BcJ0ICMLOe8zLdtlTyMkdd/io1nwivYSyQW/P6mRpaU0Nyf64pE4xGqAH8HwNtiEZS6mFfqyTtC3DU5B1dilkJmkMGTKjg28T14oms8E1oQ7mQw3C2PV+IHxSsDxexxWl56b6GIKnMYlTKsA1lCJ594s8ZnKbD6eDI6BgJNtvCouEkSHb/QFfv4ttwPf01f133yyzuWcJxjCAwBHMhOYlIn3mVGshfg03hWLt2T7uUABjPbA01FZ92kfxofcSo9OGom8gQfxtlw2SYGeuJwVLgWnlYAwUaSivMa0nI1Fk0kGqZHZ1lUTmosg4F2I5Q6y2VcHLt0EGRCajmLcd3fcICHVr7TTOgA7Dovo+Iyyhhtlcr5Wwj7A9RvsH/o9Dm6413+PFNc4PB5TsElhurlIKIoVSPggYekLqIkOMPFWmgd+mPRYB41qwSGECvEDPCGOjGcPcVMbiLWYcZ5eJRPMtkWr+c1/NRYS9dDp6Q/Rq16qNiBLwZGRCUGptmlGl1OQEclSxXjodmmmJqFT9RG10evWhAug1EzXrFaZNvy5dUui069yMHkZLp1ugZrpSs1Yu36CXIAy/fGk8jXxlCsW7NkLva5VWd1A0l6SunU4PqtpAJW7B+CK9OOHC9dFaU46eqE+YTnyXsH19ha3CFcmiwAC0DwKIxXEPITkMlo8rLmm0g9ZOs/ny08TfFwGaXXbVNYGCBAtx3Q033RJ6PEX700Jw2x2t7pljl93kvhUhUpRoMe57oM1DseLES/C1RBmmq7oc6VlotUxZdLJ9JYfemOszQK48+RQeEQ00KFj9ChQqUqzEYEpDDDPcUGuMsIfKd9Q0Sk1RptxIo40x6iiOdvaNo2qCc9oZK6xkw5bdsSLx4yz6yoQkg4xl3HG/4Ff8BjPJzpnEjYVtOOtIWfGyloQxd9bSwkiteklSmDC1z16WYWyLrU465YL9DjjokPNhYrwTDGLaBAuZ+94POIzy5GGeBusZ8mZksommmWq6cep8lhpmmc1c5mMV69jENnaxj0MczfDSYzOle+qFJ4VCjUJh1B7WpdN2qZX5bEtdi0F/TzvPp8XWmoJMniHw0RH2R++F2oM2429LSE9VvyYyNYPCeO7I8rk8UZBFpsvJUs7H9I42uowyrZuv6Uu6UYO2X2z9wyjQCKlGYntX04tGRJgQDV9JWFo6AAA=';

  function getFont() public view returns (string memory) {
    return vt323;
  }
}
