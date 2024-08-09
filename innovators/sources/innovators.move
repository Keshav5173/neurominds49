// 


module ans::MyNewModule{
    use std::string::String;
    use std::signer;

    // Struct to store the user's name
    struct User has key, store {
        name: String,
    }

    // Resource to hold the user's name
    struct NameHolder has key {
        user: User,
    }

    // Function to create a new NameHolder and store the name
    public entry fun store_name(account: &signer, name: String) {
        // Ensure the account doesn't already have a NameHolder
        // assert!(Self::name_exists(account) == false, 1);

        // Create a new User struct
        let user = User {
            name: name,
        };

        // Create a new NameHolder resource and store it in the account's storage
        let name_holder = NameHolder {
            user: user,
        };

        // Store the NameHolder in the account's storage
        move_to(account, name_holder);
    }

    // Function to retrieve the stored name
    #[view]
    public fun view(account: address): String acquires NameHolder {
        let name_holder = borrow_global<NameHolder>(account);
        name_holder.user.name
    }

    // Function to get the name (same as view)
    #[view]
    public fun get_name(account: address): String acquires NameHolder {
        let name_holder = borrow_global<NameHolder>(account);
        name_holder.user.name
    }

    // New function to show the stored name by calling get_name
    #[view]
    public fun show_name(account: address): String acquires NameHolder {
        Self::get_name(account)
    }
}
