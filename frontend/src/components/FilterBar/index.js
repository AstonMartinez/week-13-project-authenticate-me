import { useState } from 'react'
import './FilterBar.css'
import { NavLink } from 'react-router-dom'

function FilterBar() {
    const [filterSet, setFilterSet] = useState(0)
    let content
    if(filterSet === 0) {
        content = (
            <div id='filter-set-ulti-cont'>
                            <div id='angle-left-div' onClick={() => filterSet === 0 ? setFilterSet(1) : setFilterSet(0)}>
                <i className="fa-solid fa-angle-left" style={{color: "#989998"}}/>
            </div>
                <div className='filter-nav-bar-section' id='beachfront' >
            <NavLink exact to='/spots/filtered/beachfront' >
                <img className="filter-icon" id='beachfront-icon' alt='cabin' src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATgSURBVHgB7ZyBcds6DIb/13sD5E3wuEE9gt4EL53A6gTNBlEnqDuB3QnaDdQNmk4gb+B0Apc8W42iMyCCoiSaxneH61WhAYogQQiWCSiKoizGX7gdCiv3Vt5aWVm5O19/tvJk5aeVb1a+z6TnZnCDVVs5ekpjZT2hnpvBzUzJgPVla8VE1HNTGJxm4HGkNBH1GNwIbsbGGLTY0uBlv0gK1ymDeHxCeoPfyickRGFlY+WAeLHSYHgWfsBrOy6TKSFbNWP0LL4KCvCb2hhHbBi9G4/PVxge/LF6KixEAVk2EeKImtHly26gT2P11JgZg/nSuAOhYwV/CvCh5ytO+b0Z0LMidBy6jaZ8Enax7tHKA+Kws/LRyp5pUwmvd7k7t1vDP07vwPepEl6PhtugqNk4RtwMXCM+Y/o7VZ+CMJCFG3fTFU4zqRF8rka81PVRYJeTRyyMZBa1A99d6uZ8rRHoGBveYg3+ok5wg/gV4QPfx8AvHWxli7DVUAJBgzwksfY8Lwz8Z6wbKMlDiAGfEnalgcwJBuHlih8YnmSzPGzdwy/k1DildqEY+A3W4dwnH3bgnelSSOqhbuPRpwoTs4bfgMRcjpWHzSOGMxIDv5VUMm1aPZQTJl0FH+C3TA3iY+C3GjgnlMznTKfdHdOuHdwV02aSvWCN4Zv3qZWMpfLoB+UEKmHYXmjbEG27T9Y7gb5RGPAx3/2txHw8YDgEXipBUJtocaEt5ayy06YAH6qiYMAvfepmp2Y10C/3t34sHgorXaiNuOq0oULVAR78DT8q0DF9b+U/8DWaqXg6265xuX/u2tbKu861j4SuZ0L/Jf7tfY7SGYUS6c38Pq4PXHgsEMY9oa/GjDSQb3RLUIIPRSFQWc4PzESJZbMdKdw3Yv9DjkFch4qp4b+5pQD3RkRI2DBY0AEG1xF6+pSg+20gh9I1OSUWXn4joDbkkKfTSR3whvkbFTO/I32+ENff4ooYKrteozSQs9gKMMiP5BIHzgFJvsc4Euk9GeL6MyLxBgoH5TB1wExQDtgjEuoAHqrO9QuR4Kqh1FtzR2H7qZmyP4a4/oRI6ArgoZ4bZivGXWLSvDiAqfrDfSdsEAldATRU/N9DN+FZoN4x+omFuZUQ1CDRSnCsG05NTxfufR+DhbkFB+wInYtmPy234IAGiYYfR+4OKJFw+HHk7oCG0PcNiZCzA0pGX8hbFZNwvBIJoSF0NUiI1Ac+1AElo2uNhEh94EMd0GCB2R9Ssp3tN1AjcN9Y/YMrIKQW9Bnp8wWZ0z1mJiVpfwarKIqiKIqiJM3Yd2cKvJyjbPBSrp3qHOUic3uijtXwz88bjKunFJnb82buc5RztyfCYN5zlHO35017+mHM0oPTtZ7Z3kMi9l7BbcJbnDy5wnTVz3Yz25//bzK29x5CJEsuxnnMudsT46N046GnAkQ3nKs9MZwy6XFkQ2f7DEkO9sRQimqEnZBiEJbi5WJPTH9GOOUFxlPg9Orf0Olbudm7CJcFled/nxDxJzk9CpwykG4Wkqu9HRRFUdJCy9Fp2RN1TJLiNdBydBS0HB3XnggDLUfHtOeNlqPj2nuFlqO1HB20xLUcfZaNh54KEN1wrvbEcMq0HC23J4ZSVEPL0SH2xPRnhFNeYDwFtBz9By1HazlaURRFURRlAX4D28joVW4K/i8AAAAASUVORK5CYII=" />
            </NavLink>
                    <div className='filter-label' id='beachfront-label'>
                        Beachfront
                    </div>
                </div>
                <div className='filter-nav-bar-section' id='cabins' >
            <NavLink exact to='/spots/filtered/cabin'>
                    <img className="filter-icon" id='cabin-icon' alt='cabin icon' src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN1SURBVHgB7ZyNcdNAFIQXhgJCBy4hJbgD0kFKIFSAqAA6uEclLgGo4KCClCCkiQ+S2CeddO/+pP1mdphx4Hzaz4rEi2OAEEIIIUV4gzY5DDme/xyxQ34N+QmSlOOQ05Dekx9D7kGSYOAv/nW+gqiypHwXA6LCmvIpQYmY8ikhkrny7ZBv51hQgipz5cuQm2d//+b8WCkJvudskpDyfQjKSNiMgJjyHYL8EjYhQKN8hyCvhOYFaJbvEOST0LSAFOU7BHkkNCsgZfkOQXoJTQrIUb5DkFZCcwJylu8QpJPQlIAS5TsEaSQ0I6Bk+Q6BvoQmBNRQvkOgK6F6AXPl1xiDcKoWMB5I7WXHSqhWwHgAtZesIaFKAQbtlBwroToBBm0VHCuhKgEG7ZUbK6EaAQbTByCoH8FyCVUI2EL5DsEyCcUFbKl8hyBcQlEBWyzfIQiTUEzAlst3COYlFBGwh/IdguljzS5gT+U7BJUI2GP5DkFhAXsu3yEoJGCufCahAAOgZ8oIMAB6ZlUMIjFAkY1TAlh+UQkGKLrhXUswCxfu8PKXJfbCeMwPUJawtPwHkA5KEpaWP2aPr/zXjB1EfztaU34P4lh9TXh7XuDPxOLfQdYy1d1F5x0uLcn5azwDppnqR3D9xuUqHS7Ln3oC7WvAuN5nTH8gx9qk+iCPqWuAQxBQvqPD5VTTep6ggx4HzP/CtUYs/n/MjQYf4Rf+HEFEXwL/AY23ohpnQo7yn0uI3bM7W33PYaDIEfnK2Uo+QJkTgJ4JikUCDkMeAfTMZB6x4BrzDnWj9Zl2PTaARf5Xkxa5932CMncA+gLRosTejwH7+jeKmONu4mtfhrzH07eLtSlFzJ7HY/40sfY9FBn/U3HNstY4utQZoEHnWdtCEd8BaI0iWhYQMorwEnr695H/nut7CL0GkERQQGFiBfBHkpEdhAr47XmcP5T3326qfpK7wH+l1xhHt3gXtItxtBYl9r6JcbQWufdtkYAD8o+jtci550XjaN6GNoRF3ldSq2fAmBOU4Th6eY4B++I4OiIcR1eyfudZ20IR3wFwHM1xdNvr8za0MBRQGI6j4+E4ujD3nsc5jk68Pt8dXXn47uiCsUjAAXx3dEgWjaOXcgtKmCv/Fok5oMxouvackPCVf41xQirwD+r2EIunu50jCCGEEELIAv4CnRUcMAGic6sAAAAASUVORK5CYII=" />
            </NavLink>
                    <div className='filter-label' id='cabins-label'>
                        Cabins
                    </div>
                </div>
                <div className='filter-nav-bar-section' id='castles' >
            <NavLink exact to='/spots/filtered/castle' >
                    <img className="filter-icon" alt='castle icon' id='castles-icon' src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALiSURBVHgB7d3tUatAGAXgkzu3AEugBEugE9OBdgAdqBUkVpJSLCF2gFkTZzSTXfaTs4vnmdk/Gghw2BdYEgKIiEiE4dSOpzYlNDP9MySY2WhTxjZCgqTu+bd6AsUGbZqQH2Vb/INQKQCy/1gXnzJSonxFUw8gUwBkCoBMAZApALK1nQVVdYbjQz2ATAGQKYCzD5AogLM3SJCcw9AjiP7iWFBVVILIFACZAiBTAGQKgCx3AAPiPrHg+nzOrXnapMwzdTnpcnxWZ2x0nlXI8VmdY6PzjJbzwmVCHpsG5xlNB2EyBUC2xFiQraumlIJW5jlLPYBMAZDVOBxdossXLSMp1APIFAAZM4DYG+Efkf+LnWdRzABeEedt4Xk2wzZu4vIC/7EZ3xvouecZs17elhgLavV7aN+KrpcOwmRLBNCjXVs0xFZ330/tDu3pcF72ovcDchphP2C1+DiAPezrs0OFzF5u22NM69GOLezrYdaxQ6V6uBe8dCnyOfWc08G9Iz2gcuY8nFWKcgSwR2Ol5xqzFKUGsEWjpedaD04pSgmgw3qOYV9cpWhEGSkB7B3TvKBBrlJU6jw6JYC1Xcd86RG+IVgopWeJgbKJ+N4hKMupwTiytX1HzEdV5U89gEwBkCkAMgVApgDIWgvAXJEOp3bA76vs4+Vvj5gfMNtY2mrluBLucN7Ak2fbIXzkspUr9mCpK2b26thvND7BnwK4YUD4hr9ug+d7KYArj0jf+N/NpycogB865H1E/RHzxwQF8MMe7o054vcw8f3MNKYdkH85mxC6Yp1jmne49+QO7tuKrhsrCuDiyTFNh3nmNbbyNTqmUwAXB8vrd/A3IrwMKYAL2957D3897CXMhhJAjbckQ19f2/sG0WAcmQIgUwBkCoBMAZApADIFQKYAyBQAmQIgUwBkCoCMORjXCg3GrZkCIFsiANrjwDIovuxLBBD7GLEarOb3xUIeI1ZDo/++mIjIAj4BAkMl1aTlpLgAAAAASUVORK5CYII=" />
            </NavLink>
                    <div className='filter-label' id='castles-label'>
                    Castles
                    </div>
                </div>
                <div className='filter-nav-bar-section' id='great-views' >
            <NavLink exact to='/spots/filtered/great-view' >
                    <img className="filter-icon" alt='great views icon' id='great-views-icon' src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg" />
            </NavLink>
                    <div className='filter-label' id='great-views-label'>
                    Great Views
                    </div>
                </div>
                <div className='filter-nav-bar-section' id='house-boats' >
            <NavLink exact to='/spots/filtered/houseboat' >
                    <img className="filter-icon" alt='house boats icon' id='house-boats-icon' src="https://a0.muscache.com/pictures/c027ff1a-b89c-4331-ae04-f8dee1cdc287.jpg" />
            </NavLink>
                    <div className='filter-label' id='house-boats-label'>
                    Houseboats
                    </div>
                </div>
                <div className='filter-nav-bar-section' id='iconic-cities' >
            <NavLink exact to='/spots/filtered/iconic-city' >
                    <img className="filter-icon" alt='iconic cities icon' id='iconic-cities-icon' src="https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg" />
            </NavLink>
                    <div className='filter-label' id='iconic-cities-label'>
                    Iconic Cities
                    </div>
                </div>
                <div className='filter-nav-bar-section' id='lakehouses' >
            <NavLink exact to='/spots/filtered/lakehouse' >
                    <img className="filter-icon" alt='lakehouse icon' id='lakehouse-icon' src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQvSURBVHgB7ZyBVdswEIZ/OgHd4DpB6QYagQ2gE5QN4g1gg2SDdoOwAe0EYQO6AbWe7RLybOtOlizH/N9793hAfHfWSafLRQ5ACCGEEPIRuQAJ8Trw9yRj9wnzcVnLppYDmpvy8tT+7RIkK4L3A38qh/Y1S2TI57OZNK6WFwzfSCcv7WuXxBWG/b3CGfAD4YE/lTssB+/LOfjZywb2we9kg2Wwx7CPeywUnxu3iB/8TrYom2cFYR8Xl4YETWWjSTN3itc9odzmvEPYv59YEILxSqdvo71SXHPA/EG4hX6lOiwAh3ClMzSQAnvgciIKf059ExREU+mEUolAn7py4qArmfsml0MBNgg7t4N+M31Q6NsgPd6/e8A88KeyxUyrQVvpVLBTQXejsRWStHKNZvXugajBHpN9q9uh2ecECRHkTxc5K6TXQpIEwXwbZq4K6WwD4BBf6cQi0AXB8oZIO2DdRBr6/zVs1dIkUlQ6sQjSpjzNYG3xtseMDahA94ZtUgA2CuU75G8bpKqQxma8tyHK1x/jr9lhfEVEsUX4pivMR4WwP/cBHYdW/Kry99dVK0NYB9S1On2bYn9kz4ymLi7RktVUSBXSMWQje6NwbMMt/eFJqEJ6QRrGPpARZGbI8GEO4woEGXLuCWNZoEJmikXegCBfAAThVSbISM6ZlZIcfvr8ril9n5BxL/ioARDoBv84CIIMfLQAdOeWYtvRN4gIxNjprteIa0oQ66e08hVNW8FXPCnSya9aHmv5U8tzK1FMnVmxs8lfE3ozNcXP10JiZoqiFB9uVEpbZx2AXCnIz+Kpy/lvLZ8Vr7P6GTUbE9DrT67DuSlyaemzl4+1fBv5/xc0+T4bU1JQ1mWrtBXjW9cRdQb9fvPeIbzf9ZIrBaVa5lNshVLQM5o097sVX7U8jrxeo9+hqar8T7+CBW+l6YVWSYzhqdfOactKVv1zPqBBemAACsMAFIYBKAwDUBgGoDAMQGEYgMIwAIVhAArDABQmphdE4pj18wCihAEoDANQGAagMAwAIYQQQggpwNSzLQ7N0W5/GEnwdgipO/DkDzt1x7VT4FZuz+TYHvojhgc0DzDQ3kQuMe3rXbawPUWydnsmBLYvpxibLUJ7eqY8OzUkXtfNzPbuFmLvHWOb8BZNJFM9O9VHt5k9t7/Liu19hxHLkvNfTiFH1/qbukWaJb0We2Y0Sh8UeirAdMNrtWdmTJk6x7VovuFk7fbMDCnaI+47kwVxJd5a7Jk5nRFeucN0HMLPVK3RXi9jVdBt+7N7hioHDk0FclyFrNXeDoQQsizYjl6WPZNjlhLvALajk8B2dFp7JgRsR6e0p4bt6LT23sF2NNvRUUuc7ehWHhR6KsB0w2u1Z2ZMGdvRdntmhhTtwXZ0jD0zpzPCK3eYjgPb0f9hO5rtaEIIIYSQAvwD0R5R+u0IzpcAAAAASUVORK5CYII=" />
            </NavLink>
                    <div className='filter-label' id='lakehouse-label'>
                    Lakehouses
                    </div>
                </div>
                <div className='filter-nav-bar-section' id='mansions' >
            <NavLink exact to='/spots/filtered/mansion' >
                    <img className="filter-icon" alt='mansion icon' id='mansion-icon' src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAO3SURBVHgB7Z1NctMwGIbfAgvY9QjiBmXHjhyhN0g4QbtkZ9+gbFk5nABukNwAOEGOkNwgSMRm0k6sP0v+pPZ9Zr6ZTmNJ7vfYluTILkAIIYQQ8hK5QjjHhHXVTJI8vAIRhQKEoQBhKEAYChCGAoShAGEoQJhBQKNjj9PkwhVjHF9YTMmDyfWD2fh1/8MXHW9B5sLk+qOOKzNtNjauQSQ4GAFHEDHYCQtDAQUQ2svPjdKxQ/goZdeXLYXRPJcsQMGe/J3H56UMMKoU8Av2sfRNH7Y5jKmjBAnVCehgv8Tcnm27cmzbQZ6qBDSwJ7S9UObeUaaBLNUIiEn+QOsoew85qhBwC3sC1x51rB11LCFD8QJ8OlMfruHXec9N0QIU3MNJ5V/dPwkp60tBsQIU8iRLoaw5QrECcl4uSpojFCmgg73DvMV0Vo42OsxDcQIa2BPTIh0lzBGKEjBn8gdaR5u55wjFCEgx1o9l7Wh7iXwUISDVWD8WyTmCuACFMsbmUnMEUQEKZU2MFOafIwQLmCtiT/umL/t/jU0grsvhXCG+AzFj/YcL9bQIZwX5v1+08RZxXDpy94jDNUfIHdUl35BSAOCeI+QMuYYTJ+wrpiGWB7GGJ2ISPnTCLaYjkgfb0sRUj53mrj8VInngyjhhKEAYChCGAoShAGEoQBgKEIYChKEAYShAGAoQpjYB5mvCRscGj79S3Pe/u0NZz4V5ketuZcr6FU4J9r3L2CFchFgeShdgjuqY725NmZDFVhRwgQbT77k3nm1RwBPuMD35Q/icCRRwhkLaJSN7uPsECjhjDXsyWx2Ls+1v4F73uUH6/QyhGgHKUmYH+5GsYF/xZlvtRgE9tnU6Cm7MNmOXr9ZSjgJ6NiPbd/CnRfhliAJ6xo7ekPWjC4xfwsYQyUOJy1JS7Y9Uuwip/w38MJ2XOQLNQtpPOF1nhw7toOO3jj86tjp+4vmSJQ+2U2+4+RUyJt/1ZZRH/aH7E0LKdrPmYeyD2Hsw5zuwRP0CsuZB8q2JtfQBWeEXMsJQgDChArY6Put4j9OpbOJD/7vnPPp5yhYJ8+DbkSw86lLwf8Vk6P6Ekqrd7HlwbRD6RhHXw9C1CsiWB5fxmOdlXQ9D1yYgax5sHyrEs3A1PEKJAhTiWSBSQIpOdYP6BWTNg20U9APT+Y76yZ6HMfMp3hqiUP8ZkDUPvB0dv30ox7HKY44ukgjeihCGAoQxAg4gUhzM/xF7B7/7GyQ934YfhhdfHBmzRKoXjBBCCCGEVMpfDMdzKPr7E9UAAAAASUVORK5CYII=" />
            </NavLink>
                    <div className='filter-label' id='mansions-label'>
                    Mansions
                    </div>
                </div>
                <div className='filter-nav-bar-section' id='treehouses' >
            <NavLink exact to='/spots/filtered/treehouse' >
                    <img className="filter-icon" alt='treehouse icon' id='treehouse-icon' src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANJSURBVHgB7ZztcaMwFEXv7mwBW8IrISWok9DBpgPTQdKB08GW4BK2BJeQErzWxJ4hDiA9ffAQ3DOjXzYgvWPQNRYGCCGEKPl9bYdr+7i147UJSHWGhb+MNP+agBQnVPhhO1/bM0gxOnwW9aJsFJGJu7YT9IWniEwcyhT+sfl9CsgkAn3h/fvfldscQRFf8BPsK/SFd4N9CPTydi9Ck2ymCv9IB/2E7fsg2BEphfdFfUY8HXQitPtvlg66wnhJPT6lLXG8zYpw0F2jcws/RG770lyWNiPCQT85vqFM4R8R6BPTCY3OD4K0SCmoj2DD0bVEpFwKwYaia41IGeJ+PN9ekU6HhqPrEpFyjLGzrEceHRpLTB2WjZRDPib2X4IOKxfhYBcp79QU4BGsMLo6pN2lrBEp+5HjvKE8Av14Tyg8Pwjybg/Xwhf8Pgn3qEfquI8oIMJldKC2gKXIHb9DJqeIg8y9p3XmrvmhupxRAIe4iWdvAjwd5kU4FOL0sOOxZLNHAXc6fBfxFwVxmC68pqMtEjsuwdd0JihMh/lIuXcBdwSK7wM/UI7LAsewoOq4foKYQgHGtCDgAN3d1mFSy7lN3Rw1JmHtjztjrUcezYSLGh1N+eSPnQk5VBWw9hRUaqA1+sAUtAUowJhfaJOp03+Vk+McPAOMoQBjKMAYCjCGAoyhAGMowBgKMIYCjKEAYyjAGAowhgKMoQBj5n7Vae7W7soZrTXPAGMowBgKMIYCjKGADdIjvFgqdsmgdlFU6iIqv+z+iPqr7BbjBeHB/EP4IYYlBMitL6H+vqAxnhB+kM2/LjP7qC1AIvrolzY6NIogTsLTxPY1BTiE156GPiBNIEg/xWsJ+BPRn5hLZFP4J9tDgz48bFNDwCGiH++o8xcL5vQID36YkC6FmmdzSScVTUIqJUCw0aSTSmxCKiUgtK+mk04qgrJFzpEj2CmCuEtDrba5pJNKTEIq3d6x0aSTSo/44k0Ru30PMkpMQsoVsJukk0pMQppibptdJp1UBPMSpph6/xmcbNUIygkQrJS1/5XMVLG1T0mudpytPqZ6wUbgb8LGUIAxFGAMBRhDAcbwzzqM4RlgDAUYQwHGUIAxFEAIIYQQQgz4D/D8nNmLnajBAAAAAElFTkSuQmCC" />
            </NavLink>
                    <div className='filter-label' id='treehouse-label'>
                    Treehouses
                    </div>
                </div>
                <div className='filter-nav-bar-section' id='trending-filter' >
            <NavLink exact to='/spots/filtered/trending' >
                    <img className="filter-icon" alt='trending icon' id='trending-icon' src='https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg' />
            </NavLink>
                    <div className='filter-label' id='trending-spots-label'>
                    Trending
                    </div>
                </div>
                <div id='angle-right-div' onClick={() => filterSet === 0 ? setFilterSet(1) : setFilterSet(0)}>
                <i className="fa-solid fa-angle-right" style={{color: "#989998"}}></i>
            </div>
            </div>
        )
    }

    if(filterSet === 1) {
        content = (
            <div id='filter-set-ulti-cont'>
                            <div id='angle-left-div' onClick={() => filterSet === 0 ? setFilterSet(1) : setFilterSet(0)}>
                <i className="fa-solid fa-angle-left" style={{color: "#989998"}}/>
            </div>
                <div className='filter-nav-bar-section-2' id='tiny-homes' >
                    <NavLink exact to='/spots/filtered/tiny-home'>
                        <img className="filter-icon-2" alt='tiny homes icon' id='tiny-homes-icon' src="https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg" />
                    </NavLink>
                        <div className='filter-label-2' id='tiny-homes-label'>
                        Tiny Homes
                        </div>
                    </div>
                <div className='filter-nav-bar-section-2' id='farms' >
                    <NavLink exact to='/spots/filtered/farm'>
                        <img className="filter-icon-2" alt='farms icon' id='farms-icon' src="https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg" />
                    </NavLink>
                        <div className='filter-label-2' id='farms-label'>
                        Farms
                        </div>
                    </div>
                    <div className='filter-nav-bar-section-2' id='a-frames' >
                        <NavLink exact to='/spots/filtered/a-frame'>
                            <img className="filter-icon-2" alt='a-frames icon' id='a-frames-icon' src="https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg" />
                        </NavLink>
                        <div className='filter-label-2' id='a-frames-label'>
                        A-frames
                        </div>
                    </div>
                <div className='filter-nav-bar-section-2' id='islands' >
                    <NavLink exact to='/spots/filtered/island'>
                        <img className="filter-icon-2" alt='islands icon' id='islands-icon' src="https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg" />
                    </NavLink>
                        <div className='filter-label-2' id='islands-label'>
                        Islands
                        </div>
                    </div>
                    <div className='filter-nav-bar-section-2' id='caves' >
                <NavLink exact to='/spots/filtered/cave'>
                        <img className="filter-icon-2" alt='caves icon' id='caves-icon' src="https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg" />
                </NavLink>
                        <div className='filter-label-2' id='caves-label'>
                        Caves
                        </div>
                    </div>
                    <div className='filter-nav-bar-section-2' id='earth-homes' >
                <NavLink exact to='/spots/filtered/earth-home'>
                        <img className="filter-icon-2" alt='earth homes icon' id='earth-homes-icon' src="https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg" />
                </NavLink>
                        <div className='filter-label-2' id='earth-homes-label'>
                        Earth Homes
                        </div>
                    </div>
                    <div className='filter-nav-bar-section-2' id='creative-spaces' >
                <NavLink exact to='/spots/filtered/creative-space'>
                        <img className="filter-icon-2" alt='creative spaces icon' id='creative-spaces-icon' src="https://a0.muscache.com/pictures/8a43b8c6-7eb4-421c-b3a9-1bd9fcb26622.jpg" />
                </NavLink>
                        <div className='filter-label-2' id='creative-spaces-label'>
                        Creative Spaces
                        </div>
                    </div>
                    <div className='filter-nav-bar-section-2' id='yurts' >
                <NavLink exact to='/spots/filtered/yurt'>
                        <img className="filter-icon-2" alt='yurts icon' id='yurts-icon' src="https://a0.muscache.com/pictures/4759a0a7-96a8-4dcd-9490-ed785af6df14.jpg" />
                </NavLink>
                        <div className='filter-label-2' id='yurts-label'>
                        Yurts
                        </div>
                    </div>
                    <div className='filter-nav-bar-section-2' id='camping' >
                <NavLink exact to='/spots/filtered/camping'>
                        <img className="filter-icon-2" alt='camping icon' id='camping-icon' src="https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg" />
                </NavLink>
                        <div className='filter-label-2' id='camping-label'>
                        Camping
                        </div>
                    </div>
                    <div className='filter-nav-bar-section-2' id='amazing-pools' >
                        <NavLink exact to='/spots/filtered/amazing-pool'>
                            <img className="filter-icon-2" alt='amazing pools icon' id='amazing-pools-icon' src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg" />
                        </NavLink>
                            <div className='filter-label-2' id='amazing-pools-label'>
                                <spa className='filter-icon-inner-text'>Amazing Pools</spa>
                            </div>
                    </div>
                <div id='angle-right-div' onClick={() => filterSet === 0 ? setFilterSet(1) : setFilterSet(0)}>
                    <i className="fa-solid fa-angle-right" style={{color: "#989998"}}></i>
                </div>
            </div>
        )
    }

    return (
        <div id='filter-bar-angle-wrapper'>
            {/* <div id='angle-left-div' onClick={() => filterSet === 0 ? setFilterSet(1) : setFilterSet(0)}>
                <i className="fa-solid fa-angle-left" style={{color: "#989998"}}/>
            </div> */}
            <div id='filter-nav-bar-parent'>
                {content}
            </div>
            {/* <div id='angle-right-div' onClick={() => filterSet === 0 ? setFilterSet(1) : setFilterSet(0)}>
                <i class="fa-solid fa-angle-right" style={{color: "#989998"}}></i>
            </div> */}
        </div>
    )
}

export default FilterBar;
