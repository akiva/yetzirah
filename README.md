```
      ██╗   ██╗███████╗████████╗███████╗██╗██████╗  █████╗ ██╗  ██╗
      ╚██╗ ██╔╝██╔════╝╚══██╔══╝╚══███╔╝██║██╔══██╗██╔══██╗██║  ██║
       ╚████╔╝ █████╗     ██║     ███╔╝ ██║██████╔╝███████║███████║
        ╚██╔╝  ██╔══╝     ██║    ███╔╝  ██║██╔══██╗██╔══██║██╔══██║
         ██║   ███████╗   ██║   ███████╗██║██║  ██║██║  ██║██║  ██║
         ╚═╝   ╚══════╝   ╚═╝   ╚══════╝╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝
```

Yetzirah is a lightweight, responsive, and semantic CSS library built
using the [Stylus][1] pre-processor.

It is important to note that it is not the aim of this project to become
a framework but rather a collection of useful patterns, functions,
mixins, and other classes to ease CSS development and encourage the
[KISS principle][2]. Due to this reason, Yetzirah may be used in
conjunction with any CSS framework you may wish to use, if that's your
bag.

[![NPM](https://nodei.co/npm/yetzirah.png)](https://nodei.co/npm/yetzirah/)
[![NPM version](https://badge.fury.io/js/yetzirah.png)](http://badge.fury.io/js/yetzirah)

## Installation

It is assumed that you already have a working installation of both
[Node.js][3] and [Stylus][1] on your local system. If not, please refer 
to either project page to get both up and running.

Install Yetzirah for your project:

    npm install --save yetzirah

Or install it globally on your system:

    npm install -g yetzirah

Within your Javascript Stylus task, you can now include `yetzirah`
within the `use()` options, ie:

    return stylus(str)
      // ...
      .use(yetzirah());

If you are wishing to use your `.styl` files via the command-line to
directly render/export to CSS, you can have Stylus use this library with
the following command:

    stylus filename.styl --use path/to/yetzirah

You can now begin using Yetzirah within your Stylus `.styl` files by
using the `@import` declaration provided by Stylus:

    @import 'yetzirah'

Additionally, you can select which of the files within the `yetzirah`
directory you wish to import, should you not desire the entire library:


    @import 'yetzirah/font-stacks/sans-serif'
    @import 'yetzirah/grid'

## Contributing

If you would like to contribute to the project, please create a fork and
submit a [pull request][3].

## License

The MIT License (MIT)

Copyright (c) 2014 Akiva Levy <akiva@sixthirteen.co>

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
USE OR OTHER DEALINGS IN THE SOFTWARE.


[1]: http://learnboost.github.com/stylus/
[2]: http://en.wikipedia.org/wiki/KISS_principle
[3]: https://help.github.com/articles/creating-a-pull-request
