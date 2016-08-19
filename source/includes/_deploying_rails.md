# Example with code


This section explains minimal steps for deploying a basic Rails app. For full details of how to deploy Ruby on Rails apps, see the official Cloud Foundry guide [Getting Started Deploying Ruby on Rails Apps](http://docs.cloudfoundry.org/buildpacks/ruby/gsg-ror.html). 


These steps assume you have already carried out the setup process explained in the [Quick Setup Guide](/getting_started/quick_setup_guide) section.

When you deploy an app, you must select a combination of an organisation and a space (see [Orgs and spaces](/deploying_apps/orgs_spaces_targets) for more information). This is called the **target**.

## Code excerpts only work right just after a header

```ruby
class HelloWorld
   def initialize(name)
      @name = name.capitalize
   end
   def sayHi
      puts "Hello #{@name}!"
   end
end

hello = HelloWorld.new("World")
hello.sayHi
```

<aside class="note">If you have a code excerpt or command that's not just after a header, it's not clear where it comes in the text. So the three-column layout isn't much use for the kind of docs I'm writing. See lower on this page for what I mean.</aside>

We have provided a ``sandbox`` space for you to use for learning about the PaaS. You may want to target the sandbox while you are testing by running:

``$ cf target -s sandbox``

<aside class="warning">If you deploy an app using the same name and target as an existing app, the original will be replaced. If you are not sure about where to deploy your app, consult the rest of your team.</aside>

Note that the only database service currently supported by PaaS is PostgreSQL. If your Rails app requires a database, it must be able to work with PostgreSQL.

Check out your Rails app to a local folder.

[Exclude files ignored by Git](/deploying_apps/excluding_files/).

[Add the `rails_12factor` gem](https://github.com/heroku/rails_12factor#install) for better logging.

Create a manifest.yml file in the folder where you checked out your app.

```ruby
---
    applications:
    - name: my-rails-app
      memory: 256M
      buildpack: ruby_buildpack
```

Replace ``my-rails-app`` with a unique name for your app. (You can use ``cf apps`` to see apps which already exist).

The `memory` line tells the PaaS how much memory to allocate to the app.

A buildpack provides any framework and runtime support required by an app. In this case, because the app is written in Ruby, you use the ``ruby_buildpack``.

<aside class="note">The content below is numbered steps, but numbers are not currently being rendered. Also notice how code is rendered within a step - not good.</aside>

1. Create the application using Cloud Foundry:

    ```
    $ cf push  
    ```

    from the folder where you checked out your app.

    If you do not specify a name for the app after the ``cf push`` command, the name from the manifest file is used.

1. Set any additional [environment variables](//deploying_apps/#setting-environment-variables/) required by your app. For example:

    ```
    $ cf set-env APPNAME VARIABLE `value`
    ```

where VARIABLE is a unique name for the variable, and `value` is the value to set.

1. If your app requires a database, [create a PostgreSQL backing service and bind it to your app](/deploying_services/postgres/). 
    The Cloud Foundry buildpack for Ruby automatically gets the details of the first available PostgreSQL service from the ``VCAP_SERVICES`` environment variable and sets the Ruby DATABASE_URL accordingly.

Your app should now be live at `https://APPNAME.cloudapps.digital`!

For a production site, you should run at least two instances of the app to ensure availability.

You can add another instance of your app by running:

``$ cf scale APPNAME -i 2``

## Troubleshooting asset precompilation

By default, the Rails buildpack performs asset precompilation during the staging phase. This is fine for
most Rails apps, but it won't work for those which need to connect to services (such as the database)
during asset compilation. (For an example, see [MyUSA issue #636](https://github.com/18F/myusa/issues/636))

There are multiple potential solutions for this. For more advice, see
[the Cloud Foundry document on the subject](https://docs.cloudfoundry.org/buildpacks/ruby/ruby-tips.html#precompile).