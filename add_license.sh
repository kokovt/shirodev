#!/bin/bash

# 1. Create a template file with the dynamic year and holder
echo "Copyright (c) $(date +%Y) Shiro.
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version." > temp-agpl.txt

# 2. Run addlicense using this temporary file
addlicense -f temp-agpl.txt .

# 3. Clean up the temporary file
rm temp-agpl.txt
