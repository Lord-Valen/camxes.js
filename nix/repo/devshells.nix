{ inputs, cell }:
let
  inherit (inputs) nixpkgs std;
  inherit (nixpkgs) lib;
  inherit (std.lib.dev) mkShell;
  inherit (cell) configs;
in
lib.mapAttrs (_: mkShell) {
  default = {
    name = "Node Template";

    packages = with nixpkgs; [ nixfmt-rfc-style ];

    commands = with nixpkgs; [
      { package = nodePackages.pnpm; }
      {
        name = "turbo";
        help = nixpkgs.turbo.meta.description;
        command = ''pnpm turbo $@'';
      }
    ];

    nixago = with configs; [
      editorconfig
      conform
      treefmt
      lefthook
    ];
  };
}
