{
  description = "A Lojban parser";

  inputs = {
    nixpkgs.url = "https://flakehub.com/f/NixOS/nixpkgs/0.1.0.tar.gz";

    devshell.url = "github:numtide/devshell";
    nixago.url = "github:nix-community/nixago";
    nixago.inputs.nixpkgs.follows = "nixpkgs";
    std = {
      url = "github:divnix/std";
      inputs = {
        nixpkgs.follows = "nixpkgs";
        devshell.follows = "devshell";
        nixago.follows = "nixago";
      };
    };
  };

  outputs =
    { self, std, ... }@inputs:
    std.growOn
      {
        inherit inputs;
        cellsFrom = self + "/nix";
        cellBlocks = with std.blockTypes; [
          (devshells "devshells")
          (nixago "configs")
          (installables "packages")
        ];
      }
      {
        packages = std.harvest self [
          "graphit"
          "packages"
        ];
        devShells = std.harvest self [
          "repo"
          "devshells"
        ];
      };
}
