### Installation

Follow this simple steps to run this project locally.
First let's check if you have **ruby** installed.

```sh
ruby --version
```

If you don't have Ruby installed, install [Ruby 2.0.0 or higher.](https://www.ruby-lang.org/en/downloads/)

Install Bundler. Make sure you have sudo or admin permissions.

```sh
gem install bundler
```

Go to the root of the project, where the `Gemfile` is. Then install all the required gems.

```sh
bundle install
```

Finally, run the Jekyll project locally

```sh
bundle exec jekyll serve
```
Preview your local Jekyll site in your web browser at http://localhost:4000.

If you need to see your drafts, just run this other command instead. Remember not to push files generated by this command in the `_site` folder.

```sh
bundle exec jekyll serve --drafts
```

For more information about Bundler, please read [Bundler's Purpose and Rationale.](http://bundler.io/rationale.html)